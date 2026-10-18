import { cacheLife } from "next/cache";
import { insights as fallbackInsights } from "@/lib/site-data";

export type InsightFeedItem = {
  title: string;
  link: string;
  date: string;
  category: string;
  imageUrl: string;
  source: string;
};

type ParsedFeedItem = InsightFeedItem & {
  publishedAt: number;
};

const FEEDS = [
  {
    url: "https://www.statnews.com/feed/",
    source: "STAT",
  },
  {
    url: "https://feeds.bbci.co.uk/news/health/rss.xml",
    source: "BBC Health",
  },
] as const;

const RELEVANCE_TERMS = [
  "longevity",
  "regenerative",
  "stem cell",
  "medical tourism",
  "medical travel",
  "cross-border",
  "patient access",
  "patient",
  "hospital",
  "clinic",
  "healthcare",
  "health care",
  "peptide",
  "oncology",
  "cancer",
  "orthopedic",
  "spine",
  "urology",
  "transplant",
  "surgery",
  "clinical",
  "biotech",
  "pharma",
  "aging",
  "accreditation",
  "global health",
  "concierge",
  "facilitat",
  "specialty",
  "diagnostic",
] as const;

const FALLBACK_IMAGES = [
  "/assets/multiverse-medical-hero.jpg",
  "/assets/executive-boardroom.jpg",
] as const;

function decodeEntities(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code: string) =>
      String.fromCharCode(Number(code)),
    )
    .replace(/&#x([0-9a-f]+);/gi, (_, code: string) =>
      String.fromCharCode(Number.parseInt(code, 16)),
    )
    .trim();
}

function stripTags(value: string) {
  return decodeEntities(value)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tagContent(block: string, tag: string) {
  const pattern = new RegExp(
    `<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`,
    "i",
  );
  const match = block.match(pattern);
  return match ? decodeEntities(match[1]) : "";
}

function extractImage(block: string) {
  const mediaContent = block.match(
    /<media:content[^>]*url=["']([^"']+)["'][^>]*>/i,
  );
  if (mediaContent?.[1]) return decodeEntities(mediaContent[1]);

  const mediaThumb = block.match(
    /<media:thumbnail[^>]*url=["']([^"']+)["'][^>]*\/?>/i,
  );
  if (mediaThumb?.[1]) return decodeEntities(mediaThumb[1]);

  const enclosure = block.match(
    /<enclosure[^>]*type=["']image\/[^"']+["'][^>]*url=["']([^"']+)["'][^>]*\/?>/i,
  );
  if (enclosure?.[1]) return decodeEntities(enclosure[1]);

  const enclosureAlt = block.match(
    /<enclosure[^>]*url=["']([^"']+)["'][^>]*type=["']image\/[^"']+["'][^>]*\/?>/i,
  );
  if (enclosureAlt?.[1]) return decodeEntities(enclosureAlt[1]);

  const htmlImg = block.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (htmlImg?.[1]) return decodeEntities(htmlImg[1]);

  return "";
}

function formatDate(value: string) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
}

function relevanceScore(title: string, category: string) {
  const haystack = `${title} ${category}`.toLowerCase();
  let score = 0;
  for (const term of RELEVANCE_TERMS) {
    if (haystack.includes(term)) score += term.includes(" ") ? 3 : 1;
  }
  return score;
}

function parseFeed(xml: string, source: string): ParsedFeedItem[] {
  const items = xml.match(/<item\b[\s\S]*?<\/item>/gi) ?? [];

  return items.flatMap((block) => {
    const title = stripTags(tagContent(block, "title"));
    const link = stripTags(tagContent(block, "link"));
    const dateRaw =
      tagContent(block, "pubDate") || tagContent(block, "dc:date");
    const category =
      stripTags(tagContent(block, "category")) || source || "Insight";
    const imageUrl = extractImage(block);
    const publishedAt = new Date(dateRaw).getTime();

    if (!title || !link || !imageUrl) return [];

    return [
      {
        title,
        link,
        date: formatDate(dateRaw),
        category,
        imageUrl,
        source,
        publishedAt: Number.isNaN(publishedAt) ? 0 : publishedAt,
      },
    ];
  });
}

function fallbackFeed(): ParsedFeedItem[] {
  return fallbackInsights.map((article, index) => ({
    title: article.title,
    link: "/contact",
    date: article.date,
    category: article.category,
    imageUrl: FALLBACK_IMAGES[index % FALLBACK_IMAGES.length],
    source: "MultiVerse Group",
    publishedAt: Date.parse(article.date) || 0,
  }));
}

async function fetchFeed(url: string, source: string) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/rss+xml, application/xml, text/xml, */*",
      "User-Agent": "MultiVerseGroupInsights/1.0",
    },
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    throw new Error(`Feed ${source} returned ${response.status}`);
  }

  return parseFeed(await response.text(), source);
}

export async function getInsightsFeed(limit = 6): Promise<InsightFeedItem[]> {
  "use cache";
  cacheLife("minutes");

  try {
    const results = await Promise.allSettled(
      FEEDS.map((feed) => fetchFeed(feed.url, feed.source)),
    );

    const items = results.flatMap((result) =>
      result.status === "fulfilled" ? result.value : [],
    );

    if (items.length === 0) {
      return fallbackFeed()
        .slice(0, limit)
        .map(({ publishedAt: _publishedAt, ...item }) => item);
    }

    const ranked = [...items].sort((a, b) => {
      const scoreDiff =
        relevanceScore(b.title, b.category) -
        relevanceScore(a.title, a.category);
      if (scoreDiff !== 0) return scoreDiff;
      return b.publishedAt - a.publishedAt;
    });

    const seen = new Set<string>();
    const unique: InsightFeedItem[] = [];

    for (const item of ranked) {
      const key = item.title.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      const { publishedAt: _publishedAt, ...publicItem } = item;
      unique.push(publicItem);
      if (unique.length >= limit) break;
    }

    return unique.length > 0
      ? unique
      : fallbackFeed()
          .slice(0, limit)
          .map(({ publishedAt: _publishedAt, ...item }) => item);
  } catch {
    return fallbackFeed().slice(0, limit);
  }
}

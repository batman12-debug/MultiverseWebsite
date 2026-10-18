import { Suspense } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { getInsightsFeed } from "@/lib/insights-feed";

function InsightsFeedSkeleton() {
  return (
    <div className="grid border-l border-t border-inverse-line md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }, (_, index) => (
        <article
          key={index}
          className="premium-card flex min-h-80 flex-col border-b border-r border-inverse-line bg-surface"
        >
          <div className="aspect-[16/10] animate-pulse bg-inverse-line/40" />
          <div className="flex flex-1 flex-col p-8">
            <div className="h-3 w-28 animate-pulse bg-inverse-line/50" />
            <div className="mt-10 h-8 w-full animate-pulse bg-inverse-line/40" />
            <div className="mt-3 h-8 w-4/5 animate-pulse bg-inverse-line/30" />
            <div className="mt-auto h-px bg-inverse-line pt-5" />
          </div>
        </article>
      ))}
    </div>
  );
}

async function InsightsFeedGrid() {
  const articles = await getInsightsFeed(6);

  return (
    <div className="grid border-l border-t border-inverse-line md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, index) => (
        <Reveal key={`${article.link}-${article.title}`} delay={(index % 3) * 55}>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-card group flex min-h-80 flex-col border-b border-r border-inverse-line bg-surface"
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-inverse-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.imageUrl}
                alt=""
                className="size-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.03]"
                loading={index < 3 ? "eager" : "lazy"}
              />
            </div>
            <div className="flex flex-1 flex-col p-8">
              <div className="flex justify-between gap-4 text-[0.65rem] uppercase tracking-[0.12em] text-gold">
                <span className="truncate">{article.category}</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h2 className="mt-8 font-serif text-3xl leading-tight transition-colors duration-200 group-hover:text-gold">
                {article.title}
              </h2>
              <div className="mt-auto flex items-center justify-between border-t border-inverse-line pt-5 text-xs text-muted-foreground">
                <span>{article.date}</span>
                <ArrowUpRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </div>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}

export function InsightsFeedSection() {
  return (
    <Suspense fallback={<InsightsFeedSkeleton />}>
      <InsightsFeedGrid />
    </Suspense>
  );
}

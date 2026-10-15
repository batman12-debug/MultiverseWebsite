import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { insights } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Analysis from the intersection of clinical innovation, patient mobility, and institutional growth.",
};

export default function InsightsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Newsroom & Perspectives"
        title="Intelligence for a Borderless Health Economy."
        copy="Analysis from the intersection of clinical innovation, patient mobility, and institutional growth."
      />
      <section className="section-shell">
        <div className="grid border-l border-t border-inverse-line md:grid-cols-2 lg:grid-cols-3">
          {insights.map((article, index) => (
            <article
              key={article.title}
              className="premium-card flex min-h-80 flex-col border-b border-r border-inverse-line bg-surface p-8"
            >
              <div className="flex justify-between text-[0.65rem] uppercase tracking-[0.12em] text-gold">
                <span>{article.category}</span>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h2 className="mt-16 font-serif text-3xl leading-tight">
                {article.title}
              </h2>
              <div className="mt-auto flex items-center justify-between border-t border-inverse-line pt-5 text-xs text-muted-foreground">
                <span>{article.date}</span>
                <ArrowUpRight className="size-4" aria-hidden />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

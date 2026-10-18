import type { Metadata } from "next";
import { InsightsFeedSection } from "@/components/insights-feed";
import { PageHero } from "@/components/page-hero";

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
        <InsightsFeedSection />
      </section>
    </main>
  );
}

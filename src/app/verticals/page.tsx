import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { verticals } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Clinical Verticals",
  description:
    "Specialist access across high-complexity care, advanced therapeutics, and precision intervention.",
};

export default function VerticalsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Clinical Centers of Excellence"
        title="Global Clinical Verticals."
        copy="Specialist access across high-complexity care, advanced therapeutics, and precision intervention."
      />
      <section className="section-shell">
        <div className="grid border-l border-t border-inverse-line md:grid-cols-2 lg:grid-cols-3">
          {verticals.map((v, index) => (
            <Reveal key={v.slug} delay={(index % 3) * 55}>
              <Link
                href={`/verticals/${v.slug}`}
                className="premium-card group relative block min-h-80 border-b border-r border-inverse-line bg-surface p-8"
              >
                <div className="flex justify-between">
                  <span className="text-xs text-gold">MV / {v.number}</span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-colors duration-200 group-hover:text-gold" />
                </div>
                <h2 className="mt-20 font-serif text-3xl leading-tight">
                  {v.title}
                </h2>
                <p className="mt-4 text-sm text-muted-foreground">{v.detail}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

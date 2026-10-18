import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { InquiryDialog } from "@/components/inquiry-dialog";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { getVertical, verticals } from "@/lib/site-data";

export function generateStaticParams() {
  return verticals.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vertical = getVertical(slug);
  if (!vertical) return {};
  return {
    title: vertical.title,
    description: vertical.overview,
  };
}

export default async function VerticalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vertical = getVertical(slug);
  if (!vertical) notFound();

  const cta = (
    <InquiryDialog
      type="patient"
      trigger={
        <button type="button" className="brand-btn h-12 px-6">
          Request Clinical Alignment{" "}
          <ArrowRight className="size-4" aria-hidden />
        </button>
      }
    />
  );

  return (
    <main>
      <PageHero
        eyebrow={`Clinical Vertical / ${vertical.number}`}
        title={vertical.title}
        copy={vertical.overview}
        action={cta}
      />

      <section className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.7fr]">
          <Reveal variant="left">
            <SectionHeading
              eyebrow="Treatment Portfolio"
              title="Specialist pathways."
            />
            <div className="mt-10 grid border-l border-t border-inverse-line sm:grid-cols-2">
              {vertical.treatments.map((treatment, index) => (
                <Reveal
                  key={treatment}
                  className="flex min-h-20 items-center gap-4 border-b border-r border-inverse-line bg-surface px-5"
                  delay={(index % 4) * 40}
                >
                  <span className="text-xs text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-6">{treatment}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal
            variant="right"
            as="aside"
            className="border border-inverse-line bg-surface p-8 lg:sticky lg:top-28 lg:self-start"
          >
            <p className="section-kicker">Ideal Candidate</p>
            <p className="mt-6 text-sm leading-7 text-muted-foreground">
              {vertical.candidate}
            </p>
            <div className="mt-8">{cta}</div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

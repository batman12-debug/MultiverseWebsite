import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  Globe2,
} from "lucide-react";
import { InquiryDialog } from "@/components/inquiry-dialog";
import { SectionHeading } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import {
  journeySteps,
  partnerValues,
  site,
  verticals,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative min-h-[92svh] border-b border-inverse-line">
        <Image
          src="/assets/multiverse-medical-hero.jpg"
          alt="Abstract cellular science and molecular architecture"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-[1500px] items-end px-5 pb-16 pt-36 sm:px-8 sm:pb-24 lg:px-12">
          <div className="max-w-5xl">
            <Reveal as="p" className="section-kicker" immediate>
              Global medical infrastructure
            </Reveal>
            <Reveal
              as="h1"
              className="mt-6 font-serif text-5xl leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl"
              immediate
              delay={70}
            >
              Architects of Global
              <br />
              Healthcare Access.
            </Reveal>
            <Reveal
              as="p"
              className="mt-8 max-w-2xl text-base leading-8 text-platinum sm:text-lg"
              immediate
              delay={130}
            >
              Institutional-grade patient acquisition and cross-border clinical
              logistics for the world&apos;s elite.
            </Reveal>
            <Reveal className="mt-10" immediate delay={190}>
              <InquiryDialog
                type="clinic"
                trigger={
                  <button
                    type="button"
                    className="brand-btn brand-btn-solid h-12 px-6"
                  >
                    Access Partner Portal{" "}
                    <ArrowRight className="size-4" aria-hidden />
                  </button>
                }
              />
            </Reveal>
            <Reveal
              as="p"
              className="mt-10 text-[0.6rem] uppercase tracking-[0.22em] text-inverse-faint"
              immediate
              delay={240}
            >
              California · New York · London · Dubai · Singapore
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal className="overflow-hidden border-b border-inverse-line bg-gold py-4 text-gold-foreground">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex items-center gap-10"
              aria-hidden={copy === 1}
            >
              {site.stats.map((stat) => (
                <span
                  key={`${copy}-${stat}`}
                  className="flex items-center gap-10 text-xs font-semibold uppercase tracking-[0.16em]"
                >
                  {stat}
                  <span className="mx-7 size-1 bg-gold-foreground sm:mx-12" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </Reveal>

      <section className="section-shell">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="The MultiVerse Standard"
            title="Institutional rigor at every point of care."
          />
          <div className="grid gap-px bg-inverse-line sm:grid-cols-2">
            {[
              {
                icon: ClipboardCheck,
                title: "Clinical Due Diligence",
                copy: "Every institution undergoes a structured review of credentials, capabilities, and international patient protocols.",
              },
              {
                icon: Globe2,
                title: "Cross-Border Command",
                copy: "One accountable team coordinates clinical matching, records, travel, and continuity across jurisdictions.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} as="article" className="bg-surface p-8" delay={index * 60}>
                <item.icon className="size-5 text-gold" aria-hidden />
                <h3 className="mt-10 font-serif text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {item.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell border-y border-inverse-line bg-surface">
        <SectionHeading
          eyebrow="Clinical Centers of Excellence"
          title="Global Clinical Verticals"
          copy="A rigorously curated network spanning high-complexity care, advanced therapeutics, and precision intervention."
        />
        <div className="mt-12 grid border-l border-t border-inverse-line md:grid-cols-2 lg:grid-cols-3">
          {verticals.map((v, index) => (
            <Reveal key={v.slug} delay={(index % 3) * 55}>
              <Link
                href={`/verticals/${v.slug}`}
                className="premium-card group relative block min-h-72 border-b border-r border-inverse-line bg-surface p-8"
              >
                <div className="flex justify-between">
                  <span className="text-xs text-gold">MV / {v.number}</span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-colors duration-200 group-hover:text-gold" />
                </div>
                <h3 className="mt-16 font-serif text-3xl leading-tight">
                  {v.title}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground">{v.detail}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link href="/verticals" className="brand-btn">
            View All Clinical Verticals{" "}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Reveal>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="The Patient Journey"
          title="A precise path from inquiry to aftercare."
        />
        <div className="relative mt-12 grid gap-px bg-inverse-line md:grid-cols-4">
          {journeySteps.map((step, index) => (
            <Reveal
              key={step.number}
              as="article"
              className="bg-background p-7"
              delay={index * 55}
            >
              <p className="text-xs font-semibold tracking-[0.16em] text-gold">
                {step.number}
              </p>
              <h3 className="mt-8 font-serif text-2xl">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {step.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid border-y border-inverse-line lg:grid-cols-2">
        <Reveal variant="left" className="section-shell">
          <SectionHeading
            eyebrow="Institutional Partnerships"
            title="Strategic Clinical Alliances."
            copy="We do not sell leads. We engineer patient volume. We provide vetted, high-net-worth patient pipelines to select medical institutions."
          />
          <ul className="mt-10 space-y-4">
            {partnerValues.map((item, index) => (
              <Reveal
                key={item.title}
                as="li"
                className="border-l border-gold pl-4 text-sm uppercase tracking-[0.12em] text-platinum"
                delay={index * 45}
              >
                {item.title}
              </Reveal>
            ))}
          </ul>
          <Link href="/partners" className="brand-btn mt-10 inline-flex">
            Explore Clinical Partnerships{" "}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Reveal>
        <Reveal
          variant="clip"
          className="relative min-h-[35rem] border-t border-inverse-line lg:border-t-0 lg:border-l"
        >
          <Image
            src="/assets/executive-boardroom.jpg"
            alt="Executive boardroom overlooking a global financial center"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>
      </section>

      <section className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Global Presence"
            title="One network. Five strategic gateways."
          />
          <Reveal>
            <Link href="/contact" className="brand-btn shrink-0">
              Contact Our Global Team{" "}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-px bg-inverse-line sm:grid-cols-2 lg:grid-cols-5">
          {site.offices.map((office, index) => (
            <Reveal
              key={office.city}
              as="article"
              className="bg-surface p-7"
              delay={index * 50}
            >
              <p className="text-[0.65rem] uppercase tracking-[0.14em] text-gold">
                {office.region}
              </p>
              <h3 className="mt-4 font-serif text-3xl">{office.city}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{office.label}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

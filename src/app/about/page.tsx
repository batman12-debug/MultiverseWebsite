import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { leadership, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "MultiVerse Group unites institutional rigor, clinical discernment, and white-glove coordination across the world’s leading healthcare markets.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Institution"
        title="Redefining the Global Medical Landscape."
        copy="MultiVerse Group unites institutional rigor, clinical discernment, and white-glove coordination across the world’s leading healthcare markets."
      />

      <section className="grid border-b border-inverse-line md:grid-cols-2">
        {[
          {
            label: "Mission",
            copy: "To remove borders from exceptional healthcare by connecting qualified patients with carefully vetted clinical institutions.",
          },
          {
            label: "Vision",
            copy: "A world in which geography never determines access to the right specialist, technology, or standard of care.",
          },
        ].map((item) => (
          <article
            key={item.label}
            className="border-b border-inverse-line bg-surface p-8 sm:p-12 md:border-b-0 md:odd:border-r"
          >
            <p className="section-kicker">{item.label}</p>
            <p className="mt-8 font-serif text-3xl leading-snug sm:text-4xl">
              {item.copy}
            </p>
          </article>
        ))}
      </section>

      <section className="section-shell border-b border-inverse-line bg-surface">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Our Story"
            title="Built for complex care across borders."
          />
          <div className="space-y-6 text-base leading-8 text-muted-foreground">
            <p>
              MultiVerse Group was established to solve a critical gap in global
              healthcare: discerning patients could identify world-class
              treatment, yet lacked a trusted institutional partner to navigate
              clinical selection, travel, and continuity of care.
            </p>
            <p>
              Today, our network connects accredited facilities, specialist
              physicians, and experienced logistics teams across major
              healthcare markets. Every alignment is governed by medical
              appropriateness, operational transparency, and an uncompromising
              commitment to patient confidentiality.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Leadership"
          title="Global perspective. Clinical discipline."
        />
        <div className="mt-12 grid border-l border-t border-inverse-line md:grid-cols-6 xl:grid-cols-5">
          {leadership.map((person, index) => (
            <article
              key={person.name}
              className={`border-b border-r border-inverse-line p-7 md:col-span-2 xl:col-span-1 ${
                index === 3 ? "md:col-start-4 xl:col-start-auto" : ""
              }`}
            >
              <div className="grid size-16 place-items-center border border-gold font-serif text-xl text-gold">
                {person.initials}
              </div>
              <h3 className="mt-8 font-serif text-2xl">{person.name}</h3>
              <p className="mt-3 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {person.role}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell border-y border-inverse-line bg-surface">
        <SectionHeading
          eyebrow="Governance & Compliance"
          title="Trust, independently reinforced."
        />
        <div className="mt-12 grid border-l border-t border-inverse-line sm:grid-cols-2 lg:grid-cols-4">
          {site.compliance.map((item) => (
            <div
              key={item}
              className="flex min-h-40 items-center gap-4 border-b border-r border-inverse-line p-7"
            >
              <ShieldCheck className="size-5 shrink-0 text-gold" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.14em]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Global Offices"
          title="Five strategic gateways."
        />
        <div className="mt-12 grid gap-px bg-inverse-line sm:grid-cols-2 lg:grid-cols-5">
          {site.offices.map((office) => (
            <article key={office.city} className="bg-surface p-7">
              <p className="text-[0.65rem] uppercase tracking-[0.14em] text-gold">
                {office.region}
              </p>
              <h3 className="mt-4 font-serif text-3xl">
                {office.city === "California"
                  ? "California, USA"
                  : office.city}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{office.label}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

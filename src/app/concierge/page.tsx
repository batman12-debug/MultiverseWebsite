import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import {
  conciergeServices,
  conciergeStages,
  faqs,
  site,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Patient Concierge",
  description:
    "One accountable concierge team coordinating every clinical and logistical detail.",
};

export default function ConciergePage() {
  return (
    <main>
      <PageHero
        eyebrow="Private Patient Services"
        title="A Seamless Journey From Inquiry to Recovery."
        copy="One accountable concierge team coordinating every clinical and logistical detail."
      />

      <section className="section-shell">
        <SectionHeading
          eyebrow="The Patient Journey"
          title="Six stages. One continuous standard."
        />
        <div className="mt-12 grid border-l border-t border-inverse-line sm:grid-cols-2 lg:grid-cols-3">
          {conciergeStages.map((stage, index) => (
            <Reveal
              key={stage}
              as="article"
              className="min-h-44 border-b border-r border-inverse-line bg-surface p-7"
              delay={(index % 3) * 50}
            >
              <p className="text-xs text-gold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-12 font-serif text-2xl">{stage}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell border-y border-inverse-line bg-surface">
        <SectionHeading
          eyebrow="Concierge Services"
          title="Every detail, anticipated."
        />
        <div className="mt-12 grid gap-px bg-inverse-line sm:grid-cols-2 lg:grid-cols-4">
          {conciergeServices.map((service, index) => (
            <Reveal
              key={service}
              as="article"
              className="bg-background p-7"
              delay={index * 50}
            >
              <h3 className="mt-10 font-serif text-2xl">{service}</h3>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal variant="left">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Clarity before every decision."
            />
            <div className="mt-10">
              <p className="contact-label">Patient Inquiries</p>
              <a className="contact-email" href={`mailto:${site.emails.info}`}>
                {site.emails.info}
              </a>
            </div>
          </Reveal>
          <Reveal variant="right">
            <Accordion
              type="single"
              collapsible
              className="border-y border-inverse-line"
            >
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.q}
                  value={faq.q}
                  className="border-inverse-line"
                >
                  <AccordionTrigger className="py-5 text-left font-serif text-xl hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-7 text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

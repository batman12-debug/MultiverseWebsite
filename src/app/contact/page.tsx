import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero, SectionHeading } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with our team regarding a clinical partnership, private patient journey, or media inquiry.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Global Contact"
        title="Begin a Confidential Conversation."
        copy="Connect with our team regarding a clinical partnership, private patient journey, or media inquiry."
      />
      <section className="section-shell">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal variant="left">
            <SectionHeading
              eyebrow="Our Offices"
              title="Globally positioned."
            />
            <div className="mt-10 divide-y divide-inverse-line border-y border-inverse-line">
              {site.offices.map((office, index) => (
                <Reveal
                  key={office.city}
                  className="flex items-center justify-between py-5"
                  delay={index * 40}
                >
                  <div>
                    <h3 className="font-serif text-2xl">
                      {office.city === "California"
                        ? "California, USA"
                        : office.city}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {office.label}
                    </p>
                  </div>
                  <p className="text-[0.65rem] uppercase tracking-[0.14em] text-gold">
                    {office.region}
                  </p>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 space-y-5">
              <Reveal>
                <p className="contact-label">Partnerships & Media</p>
                <a
                  className="contact-email"
                  href={`mailto:${site.emails.partnerships}`}
                >
                  {site.emails.partnerships}
                </a>
              </Reveal>
              <Reveal delay={50}>
                <p className="contact-label">General Inquiries</p>
                <a
                  className="contact-email"
                  href={`mailto:${site.emails.info}`}
                >
                  {site.emails.info}
                </a>
              </Reveal>
              <Reveal delay={100}>
                <p className="contact-label">Support</p>
                <a
                  className="contact-email"
                  href={`mailto:${site.emails.support}`}
                >
                  {site.emails.support}
                </a>
              </Reveal>
            </div>
          </Reveal>

          <Reveal variant="right">
            <p className="section-kicker">Inquiry Form</p>
            <div className="mt-8">
              <InquiryForm kind="contact" />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

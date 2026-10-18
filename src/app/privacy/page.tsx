import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "MultiVerse Group privacy and data handling policy.",
};

const sections = [
  {
    title: "Our Commitment",
    copy: "MultiVerse Group protects personal and health-related information through controlled access, secure transmission, and data minimization.",
  },
  {
    title: "Information We Process",
    copy: "We process information provided through inquiries and clinical coordination only for responding, assessing fit, and facilitating requested services.",
  },
  {
    title: "Your Rights",
    copy: "Subject to applicable law, you may request access, correction, restriction, or deletion of your personal information.",
  },
  {
    title: "Contact",
    copy: `Privacy inquiries may be directed to ${site.emails.partnerships}.`,
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy."
        copy="How MultiVerse Group handles personal and health-related information."
      />
      <section className="section-shell">
        <div className="mx-auto max-w-3xl divide-y divide-inverse-line border-y border-inverse-line">
          {sections.map((section, index) => (
            <Reveal
              key={section.title}
              as="article"
              className="py-10"
              delay={index * 45}
            >
              <h2 className="font-serif text-3xl">{section.title}</h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                {section.copy}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

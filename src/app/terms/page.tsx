import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Website and inquiry terms for MultiVerse Group.",
};

const sections = [
  {
    title: "Scope",
    copy: "These terms govern use of this website and inquiries made to MultiVerse Group.",
  },
  {
    title: "Facilitation Services",
    copy: "MultiVerse Group facilitates access and coordination. Medical decisions, diagnosis, and treatment remain the responsibility of independent licensed providers.",
  },
  {
    title: "No Medical Advice",
    copy: "Website information is general and does not replace consultation with a qualified medical professional.",
  },
  {
    title: "Applicable Terms",
    copy: "Specific engagements may be subject to separate written terms, consent documents, and provider policies.",
  },
];

export default function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service."
        copy="Website and inquiry terms for MultiVerse Group facilitation services."
      />
      <section className="section-shell">
        <div className="mx-auto max-w-3xl divide-y divide-inverse-line border-y border-inverse-line">
          {sections.map((section) => (
            <article key={section.title} className="py-10">
              <h2 className="font-serif text-3xl">{section.title}</h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                {section.copy}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

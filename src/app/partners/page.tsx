import type { Metadata } from "next";
import Image from "next/image";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero, SectionHeading } from "@/components/page-hero";
import {
  onboardingSteps,
  partnerValues,
  partnershipModels,
  site,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Clinical Partners",
  description:
    "Institutional partnership models and global patient acquisition for leading medical facilities.",
};

export default function PartnersPage() {
  return (
    <main>
      <PageHero
        eyebrow="For Clinical Institutions"
        title="Strategic Clinical Alliances."
        copy="We do not sell leads. We engineer patient volume for select medical institutions."
      />

      <section className="grid border-b border-inverse-line lg:grid-cols-2">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Institutional Value"
            title="A measured growth channel."
          />
          <div className="mt-10 divide-y divide-inverse-line border-y border-inverse-line">
            {partnerValues.map((item) => (
              <div key={item.title} className="py-6">
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[35rem] border-t border-inverse-line lg:border-l lg:border-t-0">
          <Image
            src="/assets/executive-boardroom.jpg"
            alt="Executive boardroom for strategic clinical partnerships"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Partnership Models"
          title="Structures built around performance."
        />
        <div className="mt-12 grid border-l border-t border-inverse-line lg:grid-cols-3">
          {partnershipModels.map((model) => (
            <article
              key={model.title}
              className="min-h-72 border-b border-r border-inverse-line bg-surface p-8"
            >
              <p className="text-xs text-gold">{model.number}</p>
              <h3 className="mt-10 font-serif text-2xl">{model.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {model.copy}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell border-y border-inverse-line bg-surface">
        <SectionHeading
          eyebrow="Onboarding"
          title="From application to patient routing."
        />
        <div className="mt-12 grid border-l border-t border-inverse-line sm:grid-cols-2 lg:grid-cols-4">
          {onboardingSteps.map((step, index) => (
            <div
              key={step}
              className="min-h-44 border-b border-r border-inverse-line bg-background p-7"
            >
              <p className="text-xs text-gold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-12 font-serif text-2xl">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Apply"
              title="Initiate an institutional review."
              copy="Applications are reviewed confidentially by our global partnerships team."
            />
            <div className="mt-10">
              <p className="contact-label">Partnerships & Media</p>
              <a
                className="contact-email"
                href={`mailto:${site.emails.partnerships}`}
              >
                {site.emails.partnerships}
              </a>
            </div>
          </div>
          <InquiryForm kind="partner" />
        </div>
      </section>
    </main>
  );
}

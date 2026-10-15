import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  copy,
  action,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  action?: ReactNode;
}) {
  return (
    <section className="border-b border-inverse-line pt-36 pb-16 sm:pt-48 sm:pb-24">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <p className="section-kicker">{eyebrow}</p>
        <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[0.98] tracking-tight sm:text-7xl lg:text-[6.75rem]">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          {copy}
        </p>
        {action ? <div className="mt-10">{action}</div> : null}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div>
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

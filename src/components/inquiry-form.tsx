"use client";

import { useState, useTransition } from "react";
import { ArrowRight, Check } from "lucide-react";
import { sendInquiry } from "@/lib/send-inquiry";

type Kind = "contact" | "partner";

export function InquiryForm({ kind }: { kind: Kind }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  if (submitted) {
    return (
      <div className="border border-gold bg-surface p-8">
        <Check className="size-7 text-gold" />
        <h3 className="mt-6 font-serif text-3xl">Inquiry received.</h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          A member of our global team will contact you for a confidential
          discussion.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setError(null);
        const form = e.currentTarget;
        const data = new FormData(form);
        const fields = Object.fromEntries(
          [...data.entries()].map(([key, value]) => [key, String(value)]),
        );

        startTransition(async () => {
          const result = await sendInquiry({
            source:
              kind === "partner"
                ? "Partners — Confidential Inquiry"
                : "Contact — Confidential Inquiry",
            fields,
          });

          if (!result.ok) {
            setError(result.error);
            return;
          }

          setSubmitted(true);
          form.reset();
        });
      }}
      className="grid gap-5 sm:grid-cols-2"
    >
      {kind === "partner" ? (
        <>
          <Field label="Clinic Name">
            <input name="Clinic Name" required />
          </Field>
          <Field label="Country">
            <input name="Country" required />
          </Field>
          <Field label="Specialty">
            <input name="Specialty" required />
          </Field>
          <Field label="Monthly Capacity">
            <input name="Monthly Capacity" required />
          </Field>
          <Field label="Contact Email" wide>
            <input name="email" type="email" required />
          </Field>
        </>
      ) : (
        <>
          <Field label="Name">
            <input name="Name" required />
          </Field>
          <Field label="Organization">
            <input name="Organization" required />
          </Field>
          <Field label="Email">
            <input name="email" type="email" required />
          </Field>
          <Field label="Inquiry Type">
            <select name="Inquiry Type" required defaultValue="">
              <option value="" disabled>
                Select inquiry type
              </option>
              <option>Partnership</option>
              <option>Patient Concierge</option>
              <option>Media</option>
            </select>
          </Field>
          <Field label="Message" wide>
            <textarea name="Message" rows={5} required />
          </Field>
        </>
      )}
      {error ? (
        <p className="text-sm text-red-400 sm:col-span-2" role="alert">
          {error}
        </p>
      ) : null}
      <div className="sm:col-span-2">
        <button type="submit" className="brand-btn" disabled={pending}>
          {pending ? "Sending…" : "Submit Confidential Inquiry"}{" "}
          <ArrowRight className="size-4" aria-hidden />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  children,
  wide,
}: {
  label: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <label className={wide ? "sm:col-span-2" : undefined}>
      <span className="form-label">{label}</span>
      <div className="form-control">{children}</div>
    </label>
  );
}

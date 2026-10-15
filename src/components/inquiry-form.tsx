"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

type Kind = "contact" | "partner";

export function InquiryForm({ kind }: { kind: Kind }) {
  const [submitted, setSubmitted] = useState(false);

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
        setSubmitted(true);
      }}
      className="grid gap-5 sm:grid-cols-2"
    >
      {kind === "partner" ? (
        <>
          <Field label="Clinic Name">
            <input name="clinic" required />
          </Field>
          <Field label="Country">
            <input name="country" required />
          </Field>
          <Field label="Specialty">
            <input name="specialty" required />
          </Field>
          <Field label="Monthly Capacity">
            <input name="capacity" required />
          </Field>
          <Field label="Contact Email" wide>
            <input name="email" type="email" required />
          </Field>
        </>
      ) : (
        <>
          <Field label="Name">
            <input name="name" required />
          </Field>
          <Field label="Organization">
            <input name="organization" required />
          </Field>
          <Field label="Email">
            <input name="email" type="email" required />
          </Field>
          <Field label="Inquiry Type">
            <select name="type" required defaultValue="">
              <option value="" disabled>
                Select inquiry type
              </option>
              <option>Partnership</option>
              <option>Patient Concierge</option>
              <option>Media</option>
            </select>
          </Field>
          <Field label="Message" wide>
            <textarea name="message" rows={5} required />
          </Field>
        </>
      )}
      <div className="sm:col-span-2">
        <button type="submit" className="brand-btn">
          Submit Confidential Inquiry{" "}
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

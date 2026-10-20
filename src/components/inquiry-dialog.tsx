"use client";

import { useState, useTransition, type ReactNode } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { sendInquiry } from "@/lib/send-inquiry";
import { specialtyOptions } from "@/lib/site-data";

type InquiryType = "clinic" | "patient";

export function InquiryDialog({
  type,
  trigger,
}: {
  type: InquiryType;
  trigger: ReactNode;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const isClinic = type === "clinic";

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) setSubmitted(false);
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="max-h-[92vh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-none border-line-strong bg-surface p-6 shadow-2xl sm:p-10"
      >
        <DialogClose asChild>
          <button
            type="button"
            className="brand-btn absolute right-3 top-3 size-11 border-transparent p-0"
            aria-label="Close inquiry"
          >
            <X className="size-4" />
          </button>
        </DialogClose>

        {submitted ? (
          <div className="flex min-h-80 flex-col items-start justify-center">
            <div className="mb-8 flex size-12 items-center justify-center border border-gold text-gold">
              <Check className="size-5" />
            </div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Inquiry received
            </p>
            <DialogTitle className="max-w-lg font-serif text-3xl font-medium text-foreground sm:text-4xl">
              A member of our global team will be in contact.
            </DialogTitle>
            <DialogDescription className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              Your information has been prepared for confidential review. We will
              respond through your preferred contact channel.
            </DialogDescription>
            <DialogClose asChild>
              <button type="button" className="brand-btn mt-8">
                Return to site
              </button>
            </DialogClose>
          </div>
        ) : (
          <>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {isClinic ? "Clinical alliances" : "Private patient services"}
            </p>
            <DialogTitle className="pr-10 font-serif text-3xl font-medium text-foreground sm:text-4xl">
              {isClinic
                ? "Initiate a partnership inquiry."
                : "Request patient concierge."}
            </DialogTitle>
            <DialogDescription className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
              {isClinic
                ? "Tell us about your institution and international patient objectives."
                : "Share your care requirements with our confidential clinical access team."}
            </DialogDescription>

            <form
              className="mt-8 grid gap-5 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setError(null);
                const form = e.currentTarget;
                const data = new FormData(form);
                const fields = Object.fromEntries(
                  [...data.entries()].map(([key, value]) => [
                    key,
                    String(value),
                  ]),
                );

                startTransition(async () => {
                  const result = await sendInquiry({
                    source: isClinic
                      ? "Dialog — Clinical Alliance Inquiry"
                      : "Dialog — Patient Concierge Inquiry",
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
            >
              <Field label="Full name">
                <input required name="Full name" autoComplete="name" />
              </Field>
              <Field label="Work email">
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                />
              </Field>
              <Field label={isClinic ? "Institution" : "Country of residence"}>
                <input
                  required
                  name={isClinic ? "Institution" : "Country of residence"}
                />
              </Field>
              <Field label="Phone">
                <input required type="tel" name="Phone" autoComplete="tel" />
              </Field>
              <Field
                label={isClinic ? "Clinical specialty" : "Area of care"}
                wide
              >
                <select
                  required
                  name={isClinic ? "Clinical specialty" : "Area of care"}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an area
                  </option>
                  {specialtyOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="How can we assist?" wide>
                <textarea required name="Message" rows={4} />
              </Field>
              {error ? (
                <p className="text-sm text-red-400 sm:col-span-2" role="alert">
                  {error}
                </p>
              ) : null}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="brand-btn w-full sm:w-auto"
                  disabled={pending}
                >
                  {pending ? "Sending…" : "Submit confidential inquiry"}{" "}
                  <ArrowRight className="size-4" aria-hidden />
                </button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  children,
  wide,
}: {
  label: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <label className={wide ? "sm:col-span-2" : undefined}>
      <span className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
      <div className="form-control">{children}</div>
    </label>
  );
}

"use client";

import { useState, type ReactNode } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
                setSubmitted(true);
              }}
            >
              <Field label="Full name">
                <input required name="name" autoComplete="name" />
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
                <input required name="organization" />
              </Field>
              <Field label="Phone">
                <input required type="tel" name="phone" autoComplete="tel" />
              </Field>
              <Field
                label={isClinic ? "Clinical specialty" : "Area of care"}
                wide
              >
                <select required name="specialty" defaultValue="">
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
                <textarea required name="message" rows={4} />
              </Field>
              <div className="sm:col-span-2">
                <button type="submit" className="brand-btn w-full sm:w-auto">
                  Submit confidential inquiry{" "}
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

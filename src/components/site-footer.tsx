import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-inverse-line bg-surface-dark">
      <Reveal className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <p className="font-serif text-3xl">MultiVerse Group</p>
            <p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">
              Institutional healthcare access, engineered across borders.
            </p>
          </div>

          <div>
            <p className="footer-label">Navigation</p>
            <div className="mt-5 grid gap-3 text-sm text-platinum">
              {site.footerNav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="footer-label">Compliance</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {site.compliance.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.1em] text-muted-foreground"
                >
                  <ShieldCheck className="size-3.5 text-gold" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="footer-label">Contact</p>
            <div className="mt-5 space-y-5">
              <div>
                <p className="contact-label">Partnerships & Media</p>
                <a
                  className="contact-email"
                  href={`mailto:${site.emails.partnerships}`}
                >
                  {site.emails.partnerships}
                </a>
              </div>
              <div>
                <p className="contact-label">General Inquiries</p>
                <a className="contact-email" href={`mailto:${site.emails.info}`}>
                  {site.emails.info}
                </a>
              </div>
              <div>
                <p className="contact-label">Support</p>
                <a
                  className="contact-email"
                  href={`mailto:${site.emails.support}`}
                >
                  {site.emails.support}
                </a>
              </div>
            </div>
            <p className="mt-6 text-xs leading-6 text-muted-foreground">
              California · New York · London
              <br />
              Dubai · Singapore
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-inverse-line pt-7 text-[0.65rem] uppercase tracking-[0.12em] text-inverse-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 MultiVerse Group — multiversegrp.com. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gold">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-gold">
              Contact
            </Link>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}

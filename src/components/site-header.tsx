"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { site, verticals } from "@/lib/site-data";
import { InquiryDialog } from "@/components/inquiry-dialog";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-500",
        solid
          ? "border-b border-inverse-line bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          aria-label="MultiVerse Group home"
          className="flex shrink-0 items-center gap-3"
        >
          <span className="grid size-9 place-items-center border border-gold font-serif text-sm text-gold">
            M
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">
            MultiVerse{" "}
            <span className="font-normal text-muted-foreground">Group</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-5 xl:flex"
          aria-label="Primary navigation"
        >
          <Link
            href="/"
            className="nav-link"
            data-active={pathname === "/" ? "true" : undefined}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="nav-link"
            data-active={pathname === "/about" ? "true" : undefined}
          >
            About
          </Link>

          <div className="group relative py-7">
            <Link
              href="/verticals"
              className="nav-link flex items-center gap-1.5"
              data-active={pathname.startsWith("/verticals") ? "true" : undefined}
            >
              Clinical Verticals <ChevronDown className="size-3" aria-hidden />
            </Link>
            <div className="invisible absolute left-0 top-full w-80 border border-inverse-line bg-surface opacity-0 shadow-2xl transition-all group-hover:visible group-hover:opacity-100">
              {verticals.map((v) => (
                <Link
                  key={v.slug}
                  href={`/verticals/${v.slug}`}
                  className="block border-b border-inverse-line px-5 py-4 text-xs text-platinum transition-colors hover:bg-surface-raised hover:text-gold"
                >
                  {v.title}
                </Link>
              ))}
            </div>
          </div>

          {site.nav.slice(2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              data-active={pathname === item.href ? "true" : undefined}
            >
              {item.label}
            </Link>
          ))}

          <InquiryDialog
            type="clinic"
            trigger={
              <button type="button" className="brand-btn h-10 px-4">
                Partner Portal <ArrowRight className="size-3.5" aria-hidden />
              </button>
            }
          />
        </nav>

        <button
          type="button"
          className="brand-btn size-11 border-transparent p-0 xl:hidden hover:text-gold"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-inverse-line bg-background px-5 py-3 xl:hidden"
          aria-label="Mobile navigation"
        >
          <MobileLink href="/" label="Home" />
          <MobileLink href="/about" label="About" />
          <Link
            href="/verticals"
            className="block border-b border-inverse-line py-4 text-xs font-semibold uppercase tracking-[0.14em] text-platinum"
          >
            Clinical Verticals
          </Link>
          <div className="grid grid-cols-2 border-b border-inverse-line py-2">
            {verticals.map((v) => (
              <Link
                key={v.slug}
                href={`/verticals/${v.slug}`}
                className="py-2 pr-3 text-xs leading-5 text-muted-foreground hover:text-gold"
              >
                {v.title}
              </Link>
            ))}
          </div>
          {site.nav.slice(2).map((item) => (
            <MobileLink key={item.href} href={item.href} label={item.label} />
          ))}
          <InquiryDialog
            type="clinic"
            trigger={
              <button type="button" className="brand-btn my-4 w-full">
                Access Partner Portal
              </button>
            }
          />
        </nav>
      )}
    </header>
  );
}

function MobileLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block border-b border-inverse-line py-4 text-xs font-semibold uppercase tracking-[0.14em] text-platinum"
    >
      {label}
    </Link>
  );
}

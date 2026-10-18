---
cursor:
  subagentId: "bc-d566d26e-84b4-52fa-aa12-f2cf5df8e9c2"
---

# Multiverse Group site clone — progress

**Dev server:** http://127.0.0.1:43127  
**Branch:** `cursor/multiverse-site-clone-e9c2`  
**Stack:** Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui

## Pages completed (15/15 sitemap routes)

| Route | Status | Notes |
|-------|--------|-------|
| `/` | Done | Full hero, marquee stats, standards, verticals grid, journey, partnerships, offices |
| `/about` | Done | Mission/vision, story, leadership, compliance, offices |
| `/verticals` | Done | Six vertical cards |
| `/verticals/urology-mens-health` | Done | Treatments + candidate + inquiry dialog |
| `/verticals/regenerative-medicine` | Done | Same pattern |
| `/verticals/orthopedics-spine` | Done | Same pattern |
| `/verticals/longevity-endocrinology` | Done | Same pattern |
| `/verticals/oncology-access` | Done | Same pattern |
| `/verticals/pain-management` | Done | Same pattern |
| `/partners` | Done | Value props, models, onboarding, partner inquiry form |
| `/concierge` | Done | Six stages, services, FAQ accordion |
| `/insights` | Done | Six article cards (no separate article URLs) |
| `/contact` | Done | Offices + contact inquiry form |
| `/privacy` | Done | Policy sections from live copy |
| `/terms` | Done | Terms sections from live copy |

## Modals / dialogs

- **Partner Portal** — dialog (clinic/partnership inquiry), mock success UI
- **Request Clinical Alignment** — patient inquiry dialog on vertical detail pages
- Contact/partners page forms — mock local success (no email backend)

## Assets downloaded to `public/`

- `/assets/multiverse-medical-hero.jpg`
- `/assets/executive-boardroom.jpg`
- `/favicon.svg`, `/favicon.png`, `/apple-touch-icon.png`

## Fidelity gaps / follow-ups

- Live site uses Framer Motion scroll/entrance animations; clone has CSS hover + marquee motion only (reduced motion respected for marquee).
- Mega-menu is CSS hover (desktop) + mobile accordion list; no Radix navigation-menu viewport animation.
- Leadership / office layout spacing may differ slightly from pixel-perfect live SSR.
- Legal pages are faithful summaries of live SSR sections (live site also keeps these relatively short).
- Insights cards are non-linking (matches live — no article routes).
- No real Partner Portal auth backend (by design).
- Large R2 OG/logo PNG was not kept in `public/` (header uses the gold “M” mark + wordmark like live HTML).

## Out of scope (intentional)

Auth backends, Partner Portal backend, form email delivery, databases.

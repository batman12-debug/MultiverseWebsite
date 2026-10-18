# Multiverse Group sitemap

- **Source URL:** https://multiversegrp.com/
- **Analysis date:** 2026-10-14
- **Method:** Public crawl from the homepage following header, footer, mega-menu, and in-page internal links. Only destinations actually found are listed (no invented pages).

## Hierarchical sitemap

- [https://multiversegrp.com/](https://multiversegrp.com/) — **Home.** Positioning for institutional patient acquisition and cross-border clinical logistics; overview of standards, clinical verticals, patient journey, partnerships, and global offices.
  - [https://multiversegrp.com/about](https://multiversegrp.com/about) — **About.** Mission, vision, and company story (“Redefining the Global Medical Landscape”).
  - [https://multiversegrp.com/verticals](https://multiversegrp.com/verticals) — **Clinical Verticals (index).** Hub listing six specialty access areas.
    - [https://multiversegrp.com/verticals/urology-mens-health](https://multiversegrp.com/verticals/urology-mens-health) — **Urology & Men’s Health.** Advanced diagnostics, restorative protocols, and complex surgical care.
    - [https://multiversegrp.com/verticals/regenerative-medicine](https://multiversegrp.com/verticals/regenerative-medicine) — **Regenerative Medicine.** Cellular/biologic programs (stem cells & exosomes framing).
    - [https://multiversegrp.com/verticals/orthopedics-spine](https://multiversegrp.com/verticals/orthopedics-spine) — **Orthopedics & Spine.** Minimally invasive orthopedic and spine pathways.
    - [https://multiversegrp.com/verticals/longevity-endocrinology](https://multiversegrp.com/verticals/longevity-endocrinology) — **Longevity & Endocrinology.** Longevity, peptides, BHRT / endocrine optimization.
    - [https://multiversegrp.com/verticals/oncology-access](https://multiversegrp.com/verticals/oncology-access) — **Oncology Access.** Second opinions, trials, and cancer-center pathways.
    - [https://multiversegrp.com/verticals/pain-management](https://multiversegrp.com/verticals/pain-management) — **Interventional Pain Management.** Precision pain diagnostics and interventions.
  - [https://multiversegrp.com/partners](https://multiversegrp.com/partners) — **Partners / Clinical Partners.** Institutional alliance value props and partnership models.
  - [https://multiversegrp.com/concierge](https://multiversegrp.com/concierge) — **Patient Concierge.** End-to-end private patient journey and concierge services/FAQ.
  - [https://multiversegrp.com/insights](https://multiversegrp.com/insights) — **Insights / Newsroom.** Article-style cards on one page (no separate article URLs found).
  - [https://multiversegrp.com/contact](https://multiversegrp.com/contact) — **Contact.** Offices, inquiry form, and contact emails.
  - [https://multiversegrp.com/privacy](https://multiversegrp.com/privacy) — **Privacy Policy.** Legal/privacy commitments and rights.
  - [https://multiversegrp.com/terms](https://multiversegrp.com/terms) — **Terms of Service.** Website and inquiry terms; facilitation disclaimer.

### Notable non-page destinations linked from the site

- **mailto:partnerships@multiversegrp.com** (external) — Partnerships & media.
- **mailto:info@multiversegrp.com** (external) — General inquiries.
- **https://fonts.googleapis.com** / **https://fonts.gstatic.com** (external) — Font loading only (not content destinations).
- **Partner Portal** — Present in primary nav/CTAs as a **dialog button** (`aria-haspopup="dialog"`), not as a crawlable URL. Speculative paths (`/portal`, `/partner-portal`, `/login`, `/partners/portal`) returned the site’s 404 page.

## Short notes

### Nav patterns

- **Primary header:** Home, About, Clinical Verticals (hover mega-menu to six vertical detail pages), Partners, Concierge, Insights, Contact, plus Partner Portal button.
- **Footer Navigation:** About, Clinical Verticals, Partners, Patient Concierge, Insights (Contact is in the legal row, not the Navigation column).
- **Footer legal row:** Privacy, Terms, Contact.
- **In-page CTAs:** Home links into verticals, partners, and contact; vertical detail pages open inquiry dialogs rather than new routes.
- **Canonical shape:** `www.multiversegrp.com` redirects to apex `multiversegrp.com`. Trailing slash on paths like `/about/` normalizes to no trailing slash; homepage is served at `/`.

### Broken / unreachable

- **https://multiversegrp.com/sitemap.xml** — Returns the site’s **404** page (no XML sitemap published).
- **https://multiversegrp.com/robots.txt** — Reachable (Allow: `/` for common bots); no sitemap directive found.
- Speculative Partner Portal and insight-article URLs above — **404** (not linked from the site).

### SPA sections vs distinct URLs

- Site is a **TanStack Router SSR/SPA**: main marketing/legal pages above are **distinct URLs** with their own titles (all returned HTTP 200 with real page content).
- **Homepage sections** (standards, verticals preview, patient journey, partnerships, offices) are **on-page sections only** — no `#` fragment destinations found in navigation.
- **Insights “articles”** (six titled cards with dates) render **only on `/insights`**; they are not separate routes and are not wrapped in `<a href>` links.
- **Partner Portal** and several “Request Clinical Alignment” / inquiry CTAs are **modal/dialog UI**, not separate pages.
- No real in-page anchor destinations (`href="#..."`) were found in the crawled HTML.

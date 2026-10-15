# MultiVerse Group

Greenfield clone of the public [MultiVerse Group](https://multiversegrp.com/) marketing site — same pages, layout language, and copy tone — so the team can finish the current site and later evolve a new one from the same design system.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

## Run locally

```bash
npm install
npm run dev
```

The dev server binds to **http://127.0.0.1:43127**.

```bash
npm run build
npm start
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/verticals` | Clinical Verticals index |
| `/verticals/[slug]` | Six specialty pages |
| `/partners` | Clinical Partners |
| `/concierge` | Patient Concierge |
| `/insights` | Insights / Newsroom |
| `/contact` | Contact |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |

Partner Portal and clinical-alignment CTAs open **dialogs** (mock success UI — no backend). Insights articles are cards on `/insights` only.

## Assets

Public images/logos were downloaded from the live site into `public/` (no runtime hotlinking).

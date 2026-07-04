# EZ Garage Doors

Repair-first marketing website for **EZ Garage Doors** — a Connecticut garage door
company. Fast. Reliable. Local.

## Structure

- `website/` — Astro 5 static site (the deployable app; Vercel Root Directory)
- `Brand/` — source brand assets: logo system, photos, third-party logos

## Develop

```
cd website
npm install
npm run dev      # http://localhost:4321
npm run build    # production build to website/dist
```

## Key docs

- `website/QA-REPORT.md` — build revisions + **launch blockers** (phone number, form
  endpoint, final domain, verbatim reviews, license info)
- `website/ASSET-INVENTORY.md` — image & logo audit (what's used, what was rejected, why)

## Before real launch

The site intentionally ships with placeholders that MUST be replaced (single-file edits):

1. Phone number → `website/src/config/business.ts` (`PRIMARY_PHONE*`, `PHONE_READY`)
2. Lead-form endpoint → same file (`FORM_ENDPOINT`)
3. Final domain → `website/astro.config.mjs` + `website/public/robots.txt`
4. Review cards → `website/src/config/reviews.ts` (replace with verbatim real reviews)

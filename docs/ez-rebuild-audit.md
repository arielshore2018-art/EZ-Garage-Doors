# EZ Garage Doors — Rebuild Audit
**Date:** 2026-07-07 · **Branch:** `rebuild/orange-editorial-utility` · **Baseline:** `main` @ 082b8a8 (builds clean: 37 pages, 138 optimized images, 0 errors)

## 1. Stack
- Astro **7.0.6**, static output, vanilla CSS (no Tailwind), Node ≥22 (local: 24.15).
- Integrations: `@astrojs/sitemap` (filters `/ppc/`), `inlineStylesheets: "auto"`.
- Fonts (current): `@fontsource-variable/archivo` + `@fontsource-variable/public-sans`.
- Deploy: Vercel (`ez-garage-doors.vercel.app`), CLI deploys, no vercel.json, no auto-deploy.
- No path aliases; `astro/tsconfigs/strict`.

## 2. Route inventory (37 built pages)
- **SiteLayout (full nav):** `/`, `/services/`, `/garage-door-repair/`, `/broken-spring-repair/`, `/garage-door-opener-repair/`, `/garage-door-installation/`, `/garage-door-replacement/`, `/garage-door-replacement-cost/`, `/commercial-garage-door-repair/`, `/about/`, `/reviews/`, `/gallery/`, `/contact/`, `/thank-you/` (noindex), `/privacy-policy/`, `/terms/`, `/service-areas/`.
- **LandingLayout (minimal nav):** `/garage-door-cable-repair/`, `/garage-door-off-track-repair/`, `/emergency-garage-door-repair/`, `/same-day-garage-door-service/`, plus **16 PPC pages** `/ppc/garage-door-repair/<city>/` (noindex, sitemap-excluded) from `src/config/ppc.ts`.
- **City SEO pages:** `service-areas/[city].astro` template exists; **0 published** (all 15 cities `published: false` in `cities.ts`, correctly gated on real local proof — keep this policy).
- No blog / content collections. No broken or orphaned routes found.

## 3. Design system (current — being replaced)
- Tokens in `src/styles/tokens.css`: orange `#f26a1b`, charcoal `#1d2733`, warm white `#fdfcfa`, concrete `#f0eeea`; 8px-radius white-card pattern everywhere; signature = tapered "speed-line" gradient (`.speed-rail`, `.speed-tick`, `.side-rail`).
- ~40 components; heroes = full-bleed photo + gradient scrim + light text; footer charcoal 4-col; native `<details>` mobile menu (no JS); sticky mobile CTA after 160px scroll.
- Motion: brand-rail infinite scroll (ResizeObserver-calibrated), 120ms hovers, reduced-motion respected globally.
- **Rebuild verdict:** current site is already orange-led — transformation must come from typography (condensed display), surface language (square/editorial, track brackets vs rounded cards), the EZ Track signature (replaces speed-line), asymmetric composition, and per-family page rhythm. See `ez-design-direction.md`.

## 4. SEO / tracking / forms (must survive intact)
- Canonicals from `Astro.site` per page; robots.txt disallows `/thank-you/`; sitemap-index referenced.
- Schema (`src/components/Schema.astro` via BaseLayout): LocalBusiness (`HomeAndConstructionBusiness`, areaServed = 15 CT cities, **deliberately no telephone / no aggregateRating**), Service (8 service pages), FAQPage (8 pages). No BreadcrumbList (add in rebuild).
- Tracking (BaseLayout inline script): `window.dataLayer`; UTM (5 keys) captured to sessionStorage and injected into `[data-utm]` hidden fields; `cta_click` on `[data-track]`; `form_submit` on `form[data-lead-form]`; `lead_thank_you` on thank-you. No GTM/GA4 container yet (post-launch item).
- LeadForm: name/phone/town (required), callback_time + photo (optional), issue (required), hidden UTM + `form_context`; POST to `BUSINESS.FORM_ENDPOINT` (empty → `/thank-you/` fallback + console warning). HTML5 validation only; **no honeypot/spam protection; no og:image** — fix both in rebuild.
- CallButton: renders `tel:` only when `PHONE_READY && PRIMARY_PHONE_TEL`; otherwise falls back to `/contact/#request`. Never fake numbers. Keep.

## 5. Assets & claims
- 28 approved images manifest-gated in `src/config/site-images.ts` (id, alt, category, focal points, `approved` flag); 18 trust logos gated in `brand-logos.ts`; 4 logo SVGs (wordmark reads "GARAGE DOORS").
- Real: vans (Ford Transit, branded), 6 finished doors, 4 before/after pairs, spring hardware, opener rail. AI-generated: technician/team models — **illustrative only, never captioned as actual team, never inside proof modules** (existing policy, kept and tightened in rebuild).
- `reviews.ts`: platform numbers owner-supplied 2026-07-03 (Google 4.9/620, Yelp 4.8/140, Angi 4.9/95 → "850+"); featured review card texts are **placeholders (Dana/Mark/Rachel) — REPLACE-BEFORE-LAUNCH, do not ship as real quotes**.
- Full claim rules: `ez-verified-claims.md`. Full asset list: `ez-asset-inventory.md`.

## 6. Known pre-existing defects to fix in rebuild
1. Homepage has no semantic H1.
2. No og:image; no BreadcrumbList schema.
3. No form spam protection or client-side validation; no designed success state (redirect only).
4. Review "cards" render placeholder texts (must render only verified content or link out).
5. `garage-door-replacement-cost.astro` price table empty pending owner ranges (correct behavior — keep gated).

## 7. Launch blockers (owner-supplied, unchanged by rebuild)
Phone number (`PHONE_READY`), form endpoint, final domain, live review profile URLs + re-verified counts, CT HIC/license, insurance wording, same-day/emergency availability confirmation, legal review of privacy/terms, real review texts, price ranges (optional), real technician photos (see shot list).

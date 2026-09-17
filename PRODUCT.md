# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary:** Massachusetts homeowners with a garage door problem right now — stuck door, snapped torsion spring, dead opener, off-track door. Often stressed: a car trapped, a house that won't secure. They need to recognize a serious company, find their symptom or town, and tap the phone number within seconds, usually on a phone.
- **Secondary:** Homeowners planning a door replacement — comparing styles, insulation, and price logic before requesting a written estimate.
- **Tertiary:** Commercial facility/property managers and condo associations with dock, rolling-steel, or high-cycle shared doors where downtime is the cost.

## Product Purpose

Lead generation for EZ Garage Doors, a local Massachusetts garage-door repair and installation company serving all 351 cities and towns in every county (owner decision 2026-09-17; Connecticut removed entirely). Success = repair visitors call (or submit a service request while no phone line exists), and installation visitors request a written estimate. Repair is the business priority; installation is the deliberate secondary path. The site is a 500+-page A1-style architecture: service tree, brands, styles, guides, county hubs, and a page for every Massachusetts municipality.

## Positioning

"Written Quote Before Work Begins" — anti bait-and-switch, stated everywhere and treated as the order of operations on every visit. One local Massachusetts company (not a national call-center reseller), backed by owner-supplied volume: 4,000+ repairs, 900+ spring replacements, 1,200+ opener services, 850+ five-star reviews across Google (4.9/620), Yelp (4.8/140), Angi (4.9/95), 15 years in business. **Owner indicated on 2026-09-17 that some of these figures change; corrected numbers are pending and nothing deploys until they arrive.**

## Operating Context

- Static Astro 7 site deployed to Vercel production (`ez-garage-doors.vercel.app`; final domain pending). CLI deploys only — no auto-deploy on push. Home base (Springfield / Western MA) is NOT published — service-area business, no public address.
- Google Ads traffic lands on 24 noindex `/ppc/garage-door-repair/<city>-ma/` pages plus urgent standalone landers; organic traffic on the indexed service, brand, style, guide, county, and town pages. The 16 retired Connecticut PPC URLs 301 to `/garage-door-repair/` (`website/vercel.json`); the Ads campaigns must be re-pointed by the owner.
- **Phone number does not exist yet** (`PHONE_READY=false`): every call CTA falls back to `/contact/#request`. **Form endpoint is empty**: submissions redirect to `/thank-you/` but deliver no lead (owner wants leads emailed; inbox and form service not yet supplied). Both are launch blockers tracked in `docs/ez-verified-claims.md`.
- Conversion tracking runs through `window.dataLayer` (`cta_click`, `form_submit`, `lead_thank_you`) with session-persisted UTMs; no GA4/GTM container is installed yet.

## Capabilities and Constraints

- Every factual claim must come from `APPROVED_CLAIMS` / `STATS` / `COVERAGE` in `website/src/config/business.ts`; the full allowed/banned register is `docs/ez-verified-claims.md`. Banned until owner confirmation: licensed/insured, 24/7, same-day guarantees, response-time promises, authorized-dealer status, prices, warranties, financing, family-owned, awards, team bios.
- On-site review quotes are prohibited until verbatim reviews with live profile links are supplied; review proof = platform ratings/counts + outbound links only.
- Images are manifest-gated (`website/src/config/site-images.ts`). AI-generated technician-model photos are illustrative only: page heroes at most, never in proof modules (before/after, reviews, galleries), never captioned as the actual team.
- Town pages (`/service-areas/<town>-ma/`) are generated for all 351 municipalities from real public data (Census 2020 population, 2023 Gazetteer land area and coordinates, incorporation year, county seat, nearest towns by distance) plus hand-written county context (`ma-counties.ts`). No town×service matrix, no invented per-town job history, no arrival-time promises — anti-doorway policy applies to the *content*, not the count.
- Brands are phrased "brands we service" with a non-affiliation disclaimer on every brand page, never as endorsements.
- Guides (`config/guides/*.ts`, 87 articles) are original, claims-safe, and link back into the service tree.

## Brand Commitments

- Name exactly **"EZ Garage Doors"** (owner-confirmed; never "GARGAE", "U1", or "EZ Overhead Doors"). No owner personal name anywhere on the site or in assets.
- Tagline: "Fast. Reliable. Local." (part of the logo lockup).
- Logo set: `website/src/assets/brand/` (primary horizontal color, white, black, EZ-mark SVGs).
- Visual world: "ORANGE STANDARD" — the A1-style national-brand canon in EZ orange, recorded in `DESIGN.md` (normative tokens) and `.impeccable/design.json`. Rollback: `v2026.08-projected-light` (film world), `v2026.07-orange-editorial`, `082b8a8` (original).

## Evidence on Hand

- Owner-supplied stats and platform review numbers (2026-07-03 directives) — flagged for correction on 2026-09-17; live profile URLs still missing.
- 28 approved photos in the manifest; provenance audit in `docs/ez-asset-inventory.md`; gaps in `docs/ez-missing-asset-shot-list.md`.
- Public municipality dataset: U.S. Census Bureau 2023 Gazetteer + 2020 Census populations via Wikipedia's municipality table, merged into `ma-towns.ts` (351/351 matched).
- No real testimonial texts, no commercial-site photography, no town-specific job proof — these absences must not be papered over with invented content.

## Product Principles

1. Never fill a trust gap with invented content — omit the module instead.
2. Repair-first: urgent pages are phone-forward, calm, grade 5–7 reading level; installation pages are estimate-first.
3. The written-quote policy is the brand — it appears at decision points, not as a slogan.
4. Local means honest: statewide coverage is stated as a decision, scheduling is stated truthfully, and no arrival window is promised.
5. Scale without slop: every generated page carries real data or real writing; if a page can't, it doesn't exist.
6. Fast and light beats theatrical: static output, no JS frameworks, feedback-only motion.

## Accessibility & Inclusion

WCAG 2.2 AA target: measured contrast law (brand orange large-text only, orange-text for small type), 48px tap targets, keyboard-operable dropdowns (focus-within) and native disclosure menus/FAQs, `prefers-reduced-motion` support, one H1 per page, breadcrumbs on every inner page.

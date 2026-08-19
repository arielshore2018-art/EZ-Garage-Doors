# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary:** Central-Connecticut homeowners with a garage door problem right now — stuck door, snapped torsion spring, dead opener, off-track door. Often stressed: a car trapped, a house that won't secure. They need to understand the service and tap the phone number within seconds, usually on a phone.
- **Secondary:** Homeowners planning a door replacement — comparing styles, insulation, and price logic before requesting a written estimate.
- **Tertiary:** Commercial facility/property managers with dock, rolling-steel, or high-cycle doors where downtime is the cost.

## Product Purpose

Lead generation for EZ Garage Doors, a local Connecticut garage-door repair and installation company. Success = repair visitors call (or submit a service request while no phone line exists), and installation visitors request a written estimate. Repair is the business priority; installation is the deliberate secondary path.

## Positioning

"Written Quote Before Work Begins" — anti bait-and-switch, stated everywhere and treated as the order of operations on every visit. Local single-team company (not a national call-center reseller), backed by owner-supplied volume: 4,000+ repairs, 900+ spring replacements, 1,200+ opener services, 850+ five-star reviews across Google (4.9/620), Yelp (4.8/140), Angi (4.9/95), 40+ CT towns, 15 years in business.

## Operating Context

- Static Astro 7 site deployed to Vercel production (`ez-garage-doors.vercel.app`; final domain pending). CLI deploys only — no auto-deploy on push.
- Google Ads traffic lands on 16 noindex `/ppc/garage-door-repair/<city>/` pages plus urgent standalone landers; organic traffic on the indexed service pages.
- **Phone number does not exist yet** (`PHONE_READY=false`): every call CTA falls back to `/contact/#request`. **Form endpoint is empty**: submissions redirect to `/thank-you/` but deliver no lead. Both are launch blockers tracked in `docs/ez-verified-claims.md` and `website/QA-REPORT.md`.
- Conversion tracking runs through `window.dataLayer` (`cta_click`, `form_submit`, `lead_thank_you`) with session-persisted UTMs; no GA4/GTM container is installed yet.

## Capabilities and Constraints

- Every factual claim must come from `APPROVED_CLAIMS` / `STATS` in `website/src/config/business.ts`; the full allowed/banned register is `docs/ez-verified-claims.md`. Banned until owner confirmation: licensed/insured, 24/7, same-day guarantees, response-time promises, authorized-dealer status, prices, warranties, financing, family-owned, awards, team bios.
- On-site review quotes are prohibited until verbatim reviews with live profile links are supplied; review proof = platform ratings/counts + outbound links only.
- Images are manifest-gated (`website/src/config/site-images.ts`, id-keyed, `approved` flag). AI-generated technician-model photos are illustrative only: never in proof modules (before/after, reviews, "real work"), never captioned as the actual team. Real photos: vans, finished doors, before/after pairs, spring/opener hardware.
- City SEO pages generate only for cities with `published: true` in `cities.ts`, which requires real town-specific proof — anti-doorway-page policy; currently 0 published.
- Brands are phrased "Brands We Service" with a non-affiliation disclaimer, never as endorsements.

## Brand Commitments

- Name exactly **"EZ Garage Doors"** (owner-confirmed; never "GARGAE", "U1", or "EZ Overhead Doors"). No owner personal name anywhere on the site or in assets.
- Tagline: "Fast. Reliable. Local." (part of the logo lockup).
- Logo set: `website/src/assets/brand/` (primary horizontal, white, black, EZ-mark SVGs); orange speed-mark identity.
- Visual world: "Orange Editorial Utility" — recorded in `DESIGN.md` (normative tokens) and `docs/ez-design-direction.md` (rationale). The EZ Track is the single signature device.

## Evidence on Hand

- Owner-supplied stats and platform review numbers (2026-07-03 directives) — re-verify counts at launch; live profile URLs still missing.
- 28 approved photos in the manifest; provenance audit in `website/ASSET-INVENTORY.md`; gaps and requested shots in `docs/ez-missing-asset-shot-list.md` (real technician photography is priority 1).
- No real testimonial texts, no commercial-site photography, no town-specific job proof yet — these absences must not be papered over with invented content.

## Product Principles

1. Never fill a trust gap with invented content — omit the module instead.
2. Repair-first: urgent pages are phone-forward, calm, grade 5–7 reading level; installation pages are estimate-first and editorial.
3. The written-quote policy is the brand — it appears at decision points, not as a slogan.
4. Local means provable: town claims require town-level proof.
5. Fast and light beats theatrical: static output, no JS frameworks, motion budget of one hero reveal + feedback.

## Accessibility & Inclusion

WCAG 2.2 AA target (verified in `docs/ez-final-qa-report.md`): ink-on-paper body text, large-text-only white-on-orange, 48px tap targets, keyboard-operable native disclosure menus/FAQs, `prefers-reduced-motion` support, one H1 per page.

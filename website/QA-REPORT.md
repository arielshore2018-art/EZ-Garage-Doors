# EZ Garage Doors — Build QA Report

Build date: 2026-07-03 (rev. 2 — repair-first pivot) · Framework: Astro 5 (static output) · Location: `website/`
Build status: **21 pages build clean, zero errors.**

> **Rev. 2 changes:** homepage rebuilt as the repair-first "EZ Fast Local Dispatch System"
> (dispatch hero + 8-option repair problem selector, orange trust rail, repair router
> board, urgent-trust section, service-ticket process; installation demoted to secondary
> links). AI van/technician photos removed from the first viewport — only spring/repair
> detail imagery on the homepage. Two new phone-first urgency LPs added.
>
> **Rev. 7 changes (integrated hero composition):** desktop hero is now ONE full-bleed
> photographic composition — active-repair scene (technician at the torsion system,
> homeowner cropped out) with a controlled left charcoal gradient and the headline/CTA/
> rating rendered directly over it; the floating white card is gone. Rating proof has a
> dark tone (white text, platform logos on a compact light chip). The separate stats
> banner was removed — numbers moved to a clean 3-column proof section after the rail.
> Rail: moving category labels removed, static "BRANDS WE SERVICE" heading added,
> 48–64px logo gaps, measured speeds now 22 px/s desktop / 11 px/s mobile (verified).
> Header: larger logo, one-line nav (nowrap), non-wrapping "Call for Repair" CTA.
> Deployed to production (https://ez-garage-doors.vercel.app) and pushed to GitHub.
>
> **Rev. 6 changes (targeted hero + rail revision):** hero image replaced — the
> maintenance-looking technician scene is out of the hero; the new hero is a REAL photo of
> a worn, sagging garage door at a CT home (full opening dominant, reads as a repair
> problem). Desktop panel now overlaps the porch side so the door stays fully visible.
> New HeroRatingProof: five filled gold SVG stars + "4.9 average" + "850+ five-star
> reviews across" + static Google/Yelp/Angi logos — placed under the hero CTA and rolled
> out as a band to emergency/repair/spring pages. Moving rail now contains ONLY industry
> brands (13 logos incl. new owner-supplied Clopay, Linear, SOMMER, Hörmann, modern
> Chamberlain) driven by a manifest (src/config/brand-logos.ts); review platforms removed
> from the rail. Rail speed is now px/sec-based with measured set width + ResizeObserver:
> verified live at 12.0 px/s mobile / 24.0 px/s desktop; loop translates exactly one
> measured set width (no jump; more logos = longer loop, same speed).
>
> **Rev. 5 changes (visual-first directive):** hero is now image-led — art-directed
> mobile (1.44:1) and desktop (1.61:1) crops of the strongest repair scene (technician at
> the torsion system of a full residential door, homeowner watching) via new
> ResponsiveHeroMedia; copy cut to "Door Stuck or Won't Close?" + 3-line sub + one dominant
> CTA + compact "Send a Photo" link. Mobile menu is icon-only (44×44). New
> ContinuousBrandRail: seamless right-to-left CSS marquee (transform-only, pause on
> hover/focus, static wrap under prefers-reduced-motion) with REVIEWS/OPENERS/DOORS labels;
> Raynor logo salvaged by cropping off the baked "AUTHORIZED DEALER" line; Clopay/Linear/
> Sommer/Marantec remain text tokens (Clearbit logo API defunct — no official assets
> sourced). StatsBand (15 | 850+ | 4,000+) under the rail; RepairVisualGrid (3 photo tiles:
> spring closeup, opener-rail crop with release cord, off-track service) replaces the text
> problem cards; WrittenQuoteBlock gained the tablet-quote photo anchor. Verified: 390px
> first viewport = header + recognizable door image + H1 + CTA + moving rail; no horizontal
> overflow; no tel: links; grep clean.
>
> **Rev. 4 changes (senior build directive):** homepage rebuilt as a calm, light,
> high-trust 5-section page: HomeRepairHero ("Garage Door Won't Close?", service-note
> card with 3 rows — the 8-option selector is gone), RepairProblemCards (4 cards),
> WrittenQuoteBlock (3 steps), CompactProofBand (owner-supplied stats 4,000+/900+/1,200+/850+,
> platform ratings Google 4.9·620 / Yelp 4.8·140 / Angi 4.9·95, 3 review cards, 3 work
> images), SecondaryInstallPath. Sticky mobile CTA now appears after first scroll.
> PHONE_READY flag added — still no phone number anywhere.
> ⚠️ NEW LAUNCH BLOCKER: the 3 review cards use owner-styled example texts with
> placeholder first names (see reviews.ts warning) — they MUST be replaced with verbatim
> real reviews + live links before launch (FTC / platform-terms risk). Platform
> ratings/counts were supplied by the owner 2026-07-03 and must be re-verified against
> live profiles at launch.
>
> **Rev. 3 changes:** TrustLogoStrip component (4 variants) using owner-supplied logos from
> `Brand/general/` — review platforms (Google/Yelp/Angi/Thumbtack) under the homepage trust
> rail and on emergency/repair/spring LPs; opener brands (LiftMaster/Chamberlain/Genie/
> Craftsman + text badges) on homepage router and opener page; door brands (Amarr/Haas/
> Wayne Dalton/C.H.I. + Clopay/Raynor text badges) on homepage, installation, replacement,
> cost guide, and gallery; combined strip before final CTAs. Raynor logo REJECTED (baked-in
> "AUTHORIZED DEALER" text). All strips use "brands we service" wording + ownership
> disclaimer. See ASSET-INVENTORY.md for the full logo audit.

## 1. Pages created (21)

**Main site:** `/` (home), `/services`, `/garage-door-repair`, `/broken-spring-repair`,
`/garage-door-opener-repair`, `/garage-door-installation`, `/garage-door-replacement`,
`/garage-door-replacement-cost`, `/commercial-garage-door-repair`, `/service-areas`,
`/about`, `/contact`, `/gallery`, `/reviews`, `/privacy-policy`, `/terms`, `/thank-you`

**PPC landing pages (stripped layout, no nav, phone-first):** `/emergency-garage-door-repair`,
`/same-day-garage-door-service`, `/garage-door-cable-repair`, `/garage-door-off-track-repair`

**City pages:** template exists (`service-areas/[city].astro`) driven by
`src/config/cities.ts`. **Zero city pages published** — all 15 towns are
`published: false` until real local proof exists (anti-doorway-page design).
Towns still appear in the service-area grid as covered areas.

## 2. Components created (19)

CallButton (central phone CTA — the ONLY place tel: is rendered), LogoHeader,
LandingHeader, EmergencyCallBar, StickyMobileCallBar, MicroTrustBar, SectionHeading
(speed-rail signature), ServiceRouter, RepairIssueGrid, BeforeAfterGallery,
FinishedDoorGallery, PricingLogicBlock (service-ticket style), WrittenQuotePromise,
ProcessSteps, ReviewProof, CityGrid, PhotoUploadCTA, BrandChips (text-only), CTASection,
FooterTrustZone, LeadForm (TCPA consent + UTM hidden fields), Schema (JSON-LD).
Layouts: BaseLayout (SEO/tracking), SiteLayout (full), LandingLayout (stripped).

## 3. Images used (27) / rejected (3) / skipped (2)

See [ASSET-INVENTORY.md](ASSET-INVENTORY.md) for the full audit table.
- **Rejected:** commercial-door photo (CLARK forklift logo), install-crew photo
  (garbled uniform tagline + GENIE logos + impossible geometry), opener photo
  (LiftMaster logo + melted housing). Left in `Brand/photos/`, never copied.
- **Skipped:** spring before/after graphic (potentially misleading), one duplicate door photo.
- Several source files were misnamed (black/white pairs swapped) — copies renamed to
  match actual content.
- All images run through astro:assets → WebP, responsive srcset, explicit dimensions,
  lazy-loaded below the fold. 2.2–2.9 MB sources compress to 18–73 KB.
- **No U1 branding, no "GARGAE", no phone numbers, no plates found in any used image.**

## 4. Verified QA checks (all passing)

- `GARGAE` / `U1` / owner name: **absent from all source and built HTML**
- Banned claims ("Licensed & Insured", "24/7", "same-day guaranteed", "authorized
  dealer", "#1 rated", exact review counts): **absent** (one compliant negation:
  the brands disclaimer explicitly says we are *not* an authorized dealer)
- Banned copy ("trusted partner", "Learn More", "Get Started", "seamless", etc.): **absent**
- Exactly **one H1 per page**; unique title + meta description per page
- All images have alt text; zero console errors
- Mobile 390px: phone CTA visible immediately + sticky bottom call bar on every page
- Desktop ≥992px: full nav renders
- Tracking verified live: `cta_click` (14 tracked CTAs on home), `form_submit`,
  `lead_thank_you` all push to `window.dataLayer`; UTM params persist to hidden fields
- Form flow verified end-to-end: submit → /thank-you/ + conversion event
- Schema: LocalBusiness on all pages; Service schema on service pages; FAQPage only
  on installation/opener/cost pages (real informational FAQs). **No aggregateRating,
  no telephone, no review markup** — deliberately withheld until verified.
- Sitemap + robots.txt generated; /thank-you noindexed

## 5. Missing proof assets

- No usable **opener** photo and no usable **commercial** photo (both rejected) —
  those pages are text-led by design until replacements exist.
- No real testimonials (structure ready in `src/config/reviews.ts` — renders
  automatically when added with name/town/platform/link).
- No real city-level proof (job photos per town, town reviews) — required to publish
  any city page.
- Technician/team photos are AI-generated models: used as illustrative imagery only,
  never captioned as "our team" or a specific job site.

## 6. Claims marked needs-owner-confirmation

- Legal entity suffix (LLC/Inc.) in footer & legal pages
- "Same-day" claim — page currently says "call for today's availability"
- Emergency/after-hours availability wording
- Privacy policy & terms drafts (should get legal review)

## 7–9. Mobile / accessibility / performance

- Mobile: verified at 390px; buttons ≥44–48px tap targets; body never scrolls horizontally
- Accessibility: skip link, focus-visible outlines, aria-labels on nav/regions,
  prefers-reduced-motion respected, semantic headings; contrast checked on dark sections
- Performance: static HTML, zero JS frameworks, one small inline tracking script,
  2 variable fonts (self-hosted, swap), responsive WebP images, hero preloaded via
  fetchpriority. No carousels, no animation libraries, no scroll effects.
  **Risk:** none significant; heaviest page (installation) ships ~15 optimized images, all lazy.

## 10–11. Tracking & schema

Covered in §4. Events: `cta_click` (with per-CTA ids like `emergency_call_click`,
`estimate_click`, `photo_cta_click`, `router_*`), `form_submit` (with context),
`lead_thank_you`. Connect GTM/GA4 by reading `window.dataLayer`.

## 12. Remaining manual items — LAUNCH BLOCKERS

| # | Item | Where to fix |
|---|---|---|
| 1 | **Final phone number** | `src/config/business.ts` → `PRIMARY_PHONE`, `PRIMARY_PHONE_TEL` (one place; every call CTA updates automatically) |
| 2 | **Form backend** | `src/config/business.ts` → `FORM_ENDPOINT` (until set, forms redirect to thank-you but deliver NO leads) |
| 3 | **Final domain** | `astro.config.mjs` → `SITE_URL` + `public/robots.txt` (canonical/sitemap currently use an obvious placeholder) |
| 4 | Google review URL + exact live count/rating | `src/config/reviews.ts` |
| 5 | Yelp URL + exact live count/rating | `src/config/reviews.ts` |
| 6 | Angi URL + exact live count/rating | `src/config/reviews.ts` |
| 7 | CT license / HIC number (if applicable) | `FooterTrustZone.astro` + schema |
| 8 | Insurance language (if approved) | footer + trust bars |
| 9 | Same-day claim confirmation | `same-day-garage-door-service.astro` H1 upgrade |
| 10 | Emergency/after-hours confirmation | emergency page + EmergencyCallBar copy |
| 11 | Manufacturer authorization (if any exists) | BrandChips wording |
| 12 | Legal review of privacy policy & terms drafts | both legal pages |

## How to run

```
cd website
npm run dev      # local preview at http://localhost:4321
npm run build    # production build to dist/
```

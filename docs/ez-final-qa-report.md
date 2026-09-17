# EZ Garage Doors — Final QA Report (Rebuild)
**Date:** 2026-07-07 · **Branch:** `rebuild/orange-editorial-utility` (10 commits over `main`) · **Production untouched.**

## Build & static checks
- `astro build`: **37 pages, 0 errors** (14 MB dist incl. 138 optimized image variants).
- `astro check` (TypeScript strict): **0 errors, 0 warnings**.
- Automated crawl over `dist/` (scratchpad `qa-crawl.mjs`): **ALL CHECKS PASSED** —
  every page has exactly 1 H1, unique title, unique meta description, canonical, og:image, ≥1 JSON-LD block;
  noindex present on exactly `/thank-you/` + 16 `/ppc/*` pages and nowhere else;
  sitemap = 20 URLs (no /ppc/, no /thank-you/ — fixed this rebuild);
  **0 broken internal links**; **0 banned phrases** (GARGAE, U1, "EZ Overhead Doors", Learn More, Get Started, Submit, trusted partner, Licensed & Insured, 24/7, same-day guarantee, authorized dealer†).
  †The only "authorized dealer" text on the site is the negated non-affiliation disclaimer.

## Conversion-flow test (live dev server)
- Empty submit on PPC form → blocked; 4 inline errors, `aria-invalid` set, focus moved to first invalid field, no navigation.
- Valid submit → `form_submit` dataLayer event with campaign context (`ppc-gdr-middletown-ct`) + duplicate-submit guard ("Sending…") → demo-mode redirect to `/thank-you/` → `lead_thank_you` event fired → designed success state (3 next-steps on track rail).
- Hidden lead fields verified in DOM: `form_context`, `landing_page` (auto-filled with pathname), 5 UTM fields; honeypot (`company`) rendered off-screen.
- `data-track` CTAs (hero call, estimate, symptom rows, route junction) wired to the preserved BaseLayout dataLayer script.
- **Leads are still NOT delivered** — `FORM_ENDPOINT` empty (pre-existing launch blocker). Demo-mode warning retained.

## Responsive (measured in headless preview)
| Viewport | Overflow | Notes |
|---|---|---|
| 390×844 | 0px | H1 45px; call CTA fully in first viewport (y≈472, 52px tall); burger 48×48; sticky bar present |
| 430×932 | 0px | — |
| 768×1024 | 0px | burger nav; stat band 2-col |
| 1024×768 | 0px | desktop nav; 40/60 hero split; junction switch SVG visible; stat band 4-col |
| 1440×900 | 0px | — |
- Sticky mobile bar: appears after 160px scroll; both footers now carry 76px+safe-area clearance so it never covers legal links.

## Accessibility
- Contrast: fixed 4 instances of white body text on orange (3.05:1 fail) → ink on orange (6.9:1); stat-band intro bumped to 700/xl (large-text AA); steel-gray only ≥15px on white/paper; buttons ink/white/orange combos all pass.
- One H1 per page (crawl-verified); semantic landmarks (banner/main/footer/nav); skip link; native `<details>` menus and FAQ (keyboard operable by construction); `:focus-visible` 3px orange outline (white on dark/orange fields); form labels real + errors `aria-live`; decorative SVGs `aria-hidden`; reduced-motion kills hero track draw-in, brand rail, sticky-bar slide, all transitions.
- Note: `:focus` visual states could not be observed in the headless preview (window never holds focus — `document.hasFocus()===false`); rules are standard CSS carried from the previously QA-passed build.

## Performance readiness
- Fonts: 3 runtime woff2 (Barlow Condensed latin 600/700 + Source Sans 3 variable latin), self-hosted via @fontsource, `font-display: swap`.
- LCP asset: hero `<Image>` with responsive widths + `fetchpriority="high"`; all below-fold media lazy.
- JS: zero libraries; four small inline/hoisted scripts (tracking, form validation, brand-rail speed calibration, sticky bar). No hydration, fully static output.
- CSS inlined per Astro `inlineStylesheets: "auto"`. No console errors on crawled pages.
- Lighthouse could not run in this session (preview compositor frozen — screenshots/rAF suspended); numeric CWV must be confirmed post-deploy on a Vercel preview URL.

## Adversarial tests
- **Logo-swap:** fails for a competitor (pass for us): EZ Track system, written-quote-first CTAs, owner-specific stats (4,000+/900+/1,200+/850+), CT-town specificity, symptom-navigator framing.
- **Same-prompt:** generic "modern garage door site" prompt yields dark-scrim hero + 3 service cards + testimonial carousel; this build has none of those patterns.

## Known issues / not done here
1. Visual screenshot review pending (preview environment cannot rasterize — verify on Vercel preview before launch).
2. Hero track draw-in animation verified by CSS state, not visually (same limitation).
3. Legal pages remain drafts pending counsel; phone/form endpoint/domain/review URLs remain owner blockers (see `ez-verified-claims.md`).
4. `ContinuousBrandRail` retained from prior build (calibrated, accessible) — restyled by tokens only.
5. City pages: template rebuilt, still 0 published pending real local proof (by design).

## Rollback
`git checkout main` — production branch untouched; rebuild is 10 clean commits on `rebuild/orange-editorial-utility`.

---

# Addendum — Modernization pass (2026-08-18, branch `modernize/2026-08-pass`)

First rebuild QA with working visual tooling (Chrome DevTools MCP + Lighthouse — unavailable in July).

## Audit → fix summary (Impeccable audit 17/20 before fixes)
- **[P1 fixed] Systemic AA contrast:** `#D65312` text accents measured 4.11:1 on white / 3.72:1 on paper (July assumption of 4.5+ was wrong). New `--ez-orange-text: #B23F0E` (≥4.75:1 on paper/white/alt/pale) for eyebrows + accent links. Buttons pinned at 1.175rem (18.8px/700) to clear the white-on-orange large-text threshold; sticky-bar buttons raised from 15px, labels "Call Now"/"Request Service" (fit-verified 171×53px at 390w). AFTER tags + orange-section notes → ink-on-orange.
- **[P1 fixed] Claims policy:** AI technician-model imagery removed from all "real work" proof galleries (repair hub → broken-spring/new-springs/van-front, all real; cable → 2 real hardware shots; spring + off-track galleries removed). `opener-rail` photo found to include a technician model — flagged in the manifest as illustrative-only; retained solely as the opener page hero.
- **[P2 fixed] Track-language accents:** generic 4–5px side-tabs/top-borders (7 files, detector-flagged) converted to the sanctioned track devices (6px run + 1px ghost rail on alerts/form/ticket; 3px top rules on cards). LeadForm squared. TrustLogoStrip rebuilt as a labeled two-row brands band (review logos removed from `combined` — redundant beside ProofBand); badges squared.
- **[P3 fixed]** On-ink grays standardized to `#c9cdd2`/`#9aa1a9` (documented); 7 dead components deleted (6 OneDrive-resurrected + orphan StatsProofBar); door-styles grid last-row banner treatment; cable page "Text a Photo" → "Send a Photo" (no texting number exists).
- **Docs synced:** DESIGN.md (+ sidecar, + design-direction) — new tokens, button/ui type steps, ticket-mono utility face, corrected contrast law.
- **Suppressed (evidence recorded):** one detector false positive — base.css `.track-frame > img` selector matched as a broken `<img>`.

## Verification results
- Build 37 pages, 0 errors · `astro check` 0 errors 0 warnings · static crawl ALL PASS (unique metadata, 1 H1/page, noindex scope exact, 0 broken links, 0 banned phrases, sitemap 20) · detector 0 findings (was 9).
- **Lighthouse mobile — home: 100 a11y / 100 BP / 100 SEO, 0 failed audits. PPC Middletown: 100 a11y / 100 BP** (SEO 69 = intentional noindex only).
- CWV (4× CPU, Fast 4G, local): LCP 1.03s, CLS 0.03.
- Form flow: empty submit blocked with inline errors → valid submit fires `form_submit` (campaign context) → `/thank-you/` + `lead_thank_you` + success state. Leads still NOT delivered (FORM_ENDPOINT empty — unchanged owner blocker).
- Full-page-screenshot artifacts (lazy images, absolute-positioned heroes) verified as capture-mode quirks, not defects.

## Rollback
Tag `v2026.07-orange-editorial` (= production before this pass, pushed to origin).

---

# Addendum — PROJECTED LIGHT replacement world (2026-08-19, branch `modernize/2026-08-pass`)

Owner rejected refinement ("no visible difference") and selected the **hand-processed 16mm film** world on the Impeccable direction page (adopting a declined challenger; seed 4d6f9491, contract in BaseLayout body comment, survives build).

## What replaced what
"Orange Editorial Utility" (paper/ink/track) → **PROJECTED LIGHT**: near-black leader ground, silver emulsion stamped caps (turbulence-eroded hero), mono edge-code annotations, real photos as strip frames (sprockets, rebate edges, grain-on-frames-only, leak catches), and **orange only as light** — leaks, flare-plate CTAs with square sprocket tabs, projector-beam closing sections, light-struck hero line. All 37 pages converted; URLs, tracking contract, noindex scope, claims register, LeadForm fields untouched. Retired world preserved at tag `v2026.07-orange-editorial`.

## Finish review (fresh-context reviewer, 2 rounds — the budget)
Round 1: disposition **fix**, 8 material findings — including a person-bearing photo inside the proof-framed strip (van-arrival; swapped for person-free van-front + manifest rule), orange-as-ink violations page-wide (beam sections + light-struck line + silver demotions), floor-banned kickers (migrated to below-heading strip-margin edge-print), stat band re-derived as counter frames, stamp + frame-character production. Round 2 verdict: **all 8 resolved; disposition SHIP** (scored on the fix list; round-1 review as amended stands for the surface). DESIGN.md + .impeccable/design.json rewritten FROM the built world and reviewer-verified. Raster provenance embedded (og-default regenerated for the film world; favicons origin-tagged); scan clean.

## Verification
Build 37 pages, 0 errors · astro check 0 errors · crawl ALL PASS (metadata unique, H1s single, noindex exact, 0 broken links, 0 banned phrases, sitemap 20) · Lighthouse mobile: home 100 a11y/BP/SEO; PPC 100 a11y/BP (SEO 69 = intentional noindex) · overflow 0 at 390 · form flow end-to-end (validation block → form_submit w/ campaign context → thank-you + lead_thank_you) · contract seed grep-verified in dist. Detector: clean after four scoped, reasoned suppressions (leak edge ×2 path forms, light-struck line ×2, exposure color, CSS-selector img false positive).

## Rollback ladder
Film world = this deploy · Orange Editorial Utility = `v2026.07-orange-editorial` · pre-redesign site = `082b8a8`.

---

# Addendum — Massachusetts A1-style architecture, "ORANGE STANDARD" (2026-09-17, branch `rebuild/massachusetts-a1-architecture`, NOT deployed)

Owner brief: copy the structure and design of a1garage.com, focus on Massachusetts, "thousands" of content pages. Owner decisions on the follow-up questions: **A1-style in EZ orange** (structure only — no A1 copy, images, mascot, or red), **500–800 genuine pages** (scaled-content risk explained; doorway thousands declined), **Massachusetts FULL STATE, Connecticut removed entirely**, **no public address**, home base Springfield/Western MA **never published**, phone **not yet**, leads **to be emailed** (inbox + endpoint pending), **"some numbers change"** → corrected STATS pending. Rollback point for the film world: tag `v2026.08-projected-light` (pushed).

## What was built
- **Data foundation:** `ma-towns.ts` — all 351 MA municipalities merged from the Census 2023 Gazetteer (county, land area, lat/lng) and the 2020/2010 Census populations + type/government/incorporation from the municipality table (351/351 matched). Helpers: nearest towns by distance, density. `ma-counties.ts` — hand-written context for all 14 counties.
- **Architecture (545 pages, 520 indexable):** home · 12 core service pages (URLs unchanged) · 15 template service pages (`[service].astro` ← `service-pages.ts`) · openers hub · brands hub + 13 · styles hub + 6 · guides hub + 9 categories + 87 original guides · service-areas hub + 14 county hubs + 351 town pages (`[slug].astro`) · about/reviews/gallery/contact/legal · 24 MA PPC metros (noindex). 16 CT PPC URLs → 301 to `/garage-door-repair/` (`website/vercel.json`).
- **Design:** ORANGE STANDARD — white/alt ground, ink Barlow headings, orange as the single action color with a measured contrast law, sticky header with CSS dropdowns, breadcrumbs + sticky sidebar on inner pages, dark footer with the county index. Contract comment in `BaseLayout` (verified in dist). DESIGN.md / design.json / PRODUCT.md / CLAUDE.md rewritten.
- **Schema:** LocalBusiness with State + 14-county `areaServed` (no address); Service/FAQPage/BreadcrumbList via props; Article on guides. Still deliberately absent: telephone, aggregateRating, address, license.

## Verification
- `astro check` 0 errors · build 545 pages (dist 51 MB, 2 sitemap files).
- Static crawl (scratchpad `qa-crawl.mjs`): unique titles/descriptions, 1 H1 per page, canonicals correct, og:image + JSON-LD on every page, noindex exactly on 24 PPC + thank-you, sitemap 520 = every indexable page, **0 broken internal links across 545 pages**, **0 Connecticut occurrences**, 0 banned claims. Remaining flags: 32 guide `<title>`s over 70 chars (article headlines, accepted) and the home title at 72.
- Lighthouse mobile on the built preview: **home 100/100/100**, **town page (Worcester) 100/100/100** after adding metric-matched font fallbacks (`size-adjust`) — the first run showed CLS 0.275 from the Barlow swap — **PPC 100 a11y / 100 BP** (SEO 69 = intentional noindex).
- Visual pass (Chrome DevTools, 1440 and 390): home, town, county, service, guide, PPC; no horizontal overflow anywhere; hero CTA inside the fold on mobile (home 617px, town 586px, PPC 382px); mobile menu (details groups) works; sticky bar shows after scroll with 18.8px buttons; brand logos and before/after images load (full-page-capture blanks were the lazy-load quirk).
- Form flow on the built preview (Playwright): empty submit blocked with four inline `aria-live` errors and focus on the first field, no event fired; valid submit fires `form_submit` (context `contact`) → `/thank-you/` (noindex) → `lead_thank_you`. Field names unchanged (CRM contract). Leads still NOT delivered (FORM_ENDPOINT empty — owner blocker).
- Detector hook findings during the build: mobile hero type step and the three fallback font faces → documented in DESIGN.md typography (no suppressions added).

## Still missing from the owner (deploy gate)
1. **Corrected figures** (years, repairs, springs, openers, review counts/ratings) — nothing deploys before these.
2. **Lead delivery:** inbox address + a form-service endpoint the owner creates (Formspree/Basin/etc.).
3. Phone number (when ready), review profile URLs, final domain, license/insurance language, any confirmed availability claims.
4. **Google Ads:** re-point campaigns from the retired `-ct` PPC slugs to `/ppc/garage-door-repair/<city>-ma/`.

## Rollback ladder
This branch (undeployed) → PROJECTED LIGHT = production (`v2026.08-projected-light`) → Orange Editorial Utility (`v2026.07-orange-editorial`) → original (`082b8a8`).

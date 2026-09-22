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

---

# Addendum — Site imagery pass (2026-09-17, branch `feat/site-imagery`, NOT committed, NOT deployed)
Source brief: `docs/ez-image-implementation-brief.md`. Branch is cut from `rebuild/massachusetts-a1-architecture`; the deploy gate above is unchanged and nothing here authorizes a deploy.

## What changed
- **Manifest:** `site-images.ts` 30 → 75 entries; every entry carries `provenance` (`real` 18 · `ai-model` 12 · `stock` 45). `realImg()` / `assertRealMeta()` make `WorkGallery`, `BeforeAfterGallery` and `FinishedDoorGallery` **throw at build time** on any non-real image. `ReviewProof` takes no image props by design.
- **New component:** `SectionImage.astro` (banner 16:6 / figure 16:9, manifest-id only, lazy unless `priority`, responsive widths filtered to the source width). `.hero-split` added to `base.css` for hub/company heroes.
- **Coverage:** 14 county pages get 14 distinct banners; all 351 town pages inherit their county's banner; 87 guides get a lede figure (category default + 22 per-article overrides) and `image` in Article JSON-LD; 9 guide categories, guides hub, service-areas hub, services hub, contact, about, cost guide, same-day, emergency, commercial (hero + 4 door-type cards), 6 style pages and 7 door-brand pages get illustrations; data-service heroes de-duplicated.
- **Stock vetting:** 5 of the 50 supplied photos were not used (third-party logos; three "Massachusetts" photos that are actually CT, NH and Québec; one verified spare). Several manifest labels were wrong (e.g. the "Hampden" photo is Shelburne Falls, Franklin County) — corrected facts are in `docs/ez-asset-inventory.md`. **Hampden County has no verified photo** and runs on a place-neutral interim image.
- **Bugs found and fixed along the way:** (1) `Icon`, `Breadcrumbs` (and the new `SectionImage`) did not forward Astro's `data-astro-cid-*` scope attribute, so parents' scoped CSS never matched them — this was the cause of a 423px layout at 390px on every page with `CountyGrid`; (2) reading any field of an imported `ImageMetadata` pins the full-size original into `dist/` (51 → 157 MB) — fixed with `peek()` (`.clone`), dist back to 88 MB; (3) HTML compression ate the space before an expression: "company.15 Years" in the footer (519 pages) and "© 2026EZ" in the landing footer (26 pages), "See ourPrivacy Policy" in the lead-form consent line, and three "the⟨link/bold⟩" joins on the install, cost-guide and pricing blocks — all fixed, and a `dist/` scan for glued words now returns only brand names (LiftMaster, TorqueMaster, HomeLink); (4) `.toLowerCase()` flattened "Massachusetts" on About and the Massachusetts guide category — `inlineClaim()` in `business.ts`; (5) a copy of the brief in `website/public/` would have been published — removed; (6) design-detector triage on `base.css`: form-control border `#9a9a96` measured 2.82:1 on white (under the 3:1 WCAG 1.4.11 minimum) → new token `--ez-field-line: #8a8a86` (3.47:1 on white, 3.15:1 on alt), and two off-ramp font sizes snapped to `--text-lg` / `--text-base`. Detector: 0 findings, no suppressions added.

## Verification
- `npm run build` → **545 pages**; `npx astro check` → **0 errors, 0 warnings**; `dist/` 88 MB.
- `npm run qa:images` (new, `website/scripts/qa-images.mjs`) → PASS: 0 disallowed imageless pages (12 imageless by design: reviews, legal ×2, thank-you, brands hub, 7 opener-brand pages); 14/14 distinct county banners; 351/351 towns inherit; 0 stock in proof modules; 0 images missing alt or dimensions; PPC 640w hero candidates 16–42 KB. One documented interim duplicate: `opener-rail` on the openers hub, opener repair and sensor repair (shot list items 6–7).
- Static crawl: 545 pages, 520 indexable, sitemap 520 (unchanged), 0 broken internal links, 0 H1 problems, 0 Connecticut references; the 33 metadata notes are the previously accepted long titles.
- Responsive: 24 URLs × 390/430/768/1024 = 96 overflow checks, 0 problems (measured `scrollWidth` vs `clientWidth` — under mobile emulation `innerWidth` expands with the layout and hides overflow). Playwright sweep of 22 changed URLs × 390/768/1440: 0 console errors, 0 failed requests, 0 broken images; all lazy images load on scroll.
- Visual pass at 390/768/1440: barnstable-county, boston-ma, frozen-shut guide, commercial, contact (brief's five) plus cost guide, about, carriage-house style, Clopay, services, same-day, emergency.
- Performance (Chrome DevTools trace, mobile 390×844 @3x, 4× CPU, Fast 4G, built preview): **county page LCP 1,834 ms, CLS 0.00** (target ≤2.5 s); **PPC page LCP 1,130 ms, CLS 0.00** (target ≤2.0 s).

## Not done
- Brief §4 hardware images (roller, hinge, track, sensor, remote, weather seal, opener unit) were **not generated** — no image-generation key is available in this environment. Those pages keep honest interim heroes; prompts stay in the brief, real-photo equivalents are on the shot list.
- No commit, push or deploy (per the brief).

---

# Addendum — Area-page imagery, U1-style (2026-09-21, branch `feat/site-imagery`, NOT committed, NOT deployed)
Owner report: `/service-areas/hampshire-county/` "has no images, and it's like that on the other pages — not like u1garagedoors.com." Cause: county/town pages carried one lazy regional banner after a long text opening. Fix applied at template level so it reaches all 365 county/town pages and all 14 brand pages.

## What changed
- **`AreaHero.astro`** (new): the county's location-verified photo as a full-bleed hero behind an ink gradient, white H1, dark breadcrumbs (`Breadcrumbs tone="dark"`), CTA, fact row, rating line, and a photo chip naming the photo's real location + county ("Northampton · Hampshire County"), omitted for the place-neutral Hampden image. Under 56rem the photo is a 16:10 strip above the ink copy panel. Eager + `fetchpriority="high"`, `sizes="100vw"`, quality 62, srcset 640/960/1280/1600/source.
- **`ServicePhotoGrid.astro`** (new) + `SERVICE_CARD_IMAGES` in `services.ts`: six photo service cards (repair, springs, opener repair, off-track, emergency, new door) plus text pills for six more on every county/town page; three cards on every brand page (opener brands finally have photography — they were logo-card-only).
- **County/town template order:** AreaHero → ProofColumns → ServicePhotoGrid → local context + sidebar → BeforeAfterGallery (2 real pairs, captioned by style, intro says "captioned by door style", never town-attributed) → TrustLogoStrip → FAQ → orange CTA. `BeforeAfterGallery` gained an `intro` prop.
- `scripts/qa-images.mjs`: county coverage now reads the `AreaHero` image; opener-brand pages removed from the imageless allowlist. `.claude/launch.json`: `ez-website-preview-4322` (built-site preview on :4322 while the dev server holds :4321).

## Verification
- `npm run build` 545 pages · `npx astro check` 0 errors · `npm run qa:images` PASS (14/14 distinct county heroes, 351/351 towns inherit, imageless-by-design 12 → 5, 0 stock in proof modules, all images alt + dimensions) · crawl 545/520/sitemap 520/0 broken links · design detector 0 · glued-word scan: brand names only.
- Browser (Playwright, dev server): hampshire-county at 390/768/1440, boston-ma at 390/1440, hampden-county 1440, liftmaster 390/1440 — 0 console errors, 0 broken images, 0 horizontal overflow; chips read "Northampton · Hampshire County" / "Boston · Suffolk County"; none on Hampden.
- Performance (DevTools trace, built preview on :4322, 390×844 @3x, 4× CPU, Fast 4G) on the heaviest hero (Hampshire aerial, 1280w = 250 KB): **LCP 1,245 ms, CLS 0.00** — better than the previous 1,834 ms because the hero image is now in the initial HTML with high priority.

## Notes
- Hero photos are the existing 45 licensed stock images — no new downloads were needed; the supplied set covers every county except Hampden (interim barn, shot list item 15).
- Not committed, pushed, or deployed. Deploy gate unchanged (corrected figures, form endpoint, phone).

---

# Addendum — Per-town "Know the area" local facts (2026-09-21, branch `feat/site-imagery`, NOT committed, NOT deployed)
Owner ask: every town page needs content only a local would recognize, for SEO. Constraint honored: nothing written from memory — every fact comes from the town's own Wikipedia article and is cited on the page.

## What changed
- **`src/config/ma-local.ts`** (GENERATED, 351/351 towns): villages/neighborhoods, main roads, rail lines/stations, elevation, rivers/ponds/bays, hills, historic districts, colleges, landmarks, bordering towns (validated against the dataset), ZIPs and area codes — extracted from each municipality's Wikipedia article (Action API, wikitext cached in the scratchpad `wiki/` folder; `fetch-wiki.mjs` → `gen-ma-local.mjs`). Coverage: villages 108, routes 262, rivers 249, waters 200, hills 174, historic districts 94, colleges 133, landmarks 125, bordering towns 238, ZIPs 348, elevation 349.
- **Town template:** new "Know the area" block (renders only present facts; bordering towns link to their own pages — 1,000+ new internal links), an extra FAQ "Do you come out to {villages}?" when ≥ 2 villages exist, and two fact-gated door tie-ins: the freeze/bottom-seal note at ≥ 900 ft elevation; the salt-air/galvanized-hardware note only in a coastal county when the article names salt water. Source line on every page: Wikipedia title + retrieval date + Census.
- Filters: no Connecticut/Hartford/New Haven strings (site rule), no country clubs/organizations as "landmarks", place-name sanity checks.

## Verification
- Build 545 · `astro check` 0 errors · `qa:images` PASS · crawl 545/520/0 broken links, 0 Connecticut references (the "Hartford Line" rail mention on three Pioneer Valley pages was caught by the crawl's banned list and filtered) · detector 0.
- Browser (dev server): Amherst (villages, colleges, hills, 6 bordering-town links, FAQ), Pittsfield (1,039 ft → freeze note), Chatham (Pleasant Bay → salt-air note, 3 villages), Boston (8 neighborhoods, historic district), Natick — 0 console errors, 0 overflow at 1440/390.

## Not done / owner options
- Census ACS housing-age statistics per town (share of homes built before 1980 — the most door-relevant local fact) need a free Census API key (`api.census.gov/data/key_signup.html`); the API now refuses keyless requests. Supply one and the same generator can add it.

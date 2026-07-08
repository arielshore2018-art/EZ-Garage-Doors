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

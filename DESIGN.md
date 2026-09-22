---
name: EZ Garage Doors
description: ORANGE STANDARD — the national-brand garage-door canon (A1-style structure) rebuilt for one Massachusetts company in EZ orange; white ground, ink headings, orange as the single action color
colors:
  white: "#ffffff"
  alt: "#f4f4f2"
  alt-deep: "#e9e9e6"
  tint: "#fff1e8"
  line: "#dcdcd8"
  field-line: "#8a8a86"
  ink: "#1c1c1c"
  ink-2: "#2b2b2b"
  charcoal: "#333333"
  steel: "#5c5c5c"
  on-ink: "#d6d6d3"
  on-ink-muted: "#b3b3b0"
  orange: "#f36a21"
  orange-deep: "#d8551a"
  orange-text: "#b23f0e"
  orange-pale: "#ffe3d2"
  orange-on-ink: "#ff8b47"
  err: "#b3261e"
typography:
  h1:
    fontFamily: "Barlow Condensed, Barlow Condensed Fallback Narrow, Barlow Condensed Fallback Arial, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 1.6rem + 3.6vw, 4.2rem)"
    fontWeight: 700
    lineHeight: 1.08
  hero-h1:
    fontFamily: "Barlow Condensed, Barlow Condensed Fallback Narrow, Barlow Condensed Fallback Arial, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.4rem + 2.5vw, 3.4rem)"
    fontWeight: 700
  hero-h1-mobile:
    fontFamily: "Barlow Condensed, Barlow Condensed Fallback Narrow, Barlow Condensed Fallback Arial, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 4vw, 2.8rem)"
    fontWeight: 700
  inner-h1:
    fontFamily: "Barlow Condensed, Barlow Condensed Fallback Narrow, Barlow Condensed Fallback Arial, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.5rem + 2.8vw, 3.6rem)"
    fontWeight: 700
  inner-h1-mobile:
    fontFamily: "Barlow Condensed, Barlow Condensed Fallback Narrow, Barlow Condensed Fallback Arial, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 1.4rem + 3.6vw, 2.7rem)"
    fontWeight: 700
  area-h1:
    fontFamily: "Barlow Condensed, Barlow Condensed Fallback Narrow, Barlow Condensed Fallback Arial, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.5rem + 2.6vw, 3.4rem)"
    fontWeight: 700
  guide-h1:
    fontFamily: "Barlow Condensed, Barlow Condensed Fallback Narrow, Barlow Condensed Fallback Arial, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 1.4rem + 2.4vw, 3.2rem)"
    fontWeight: 700
  h2:
    fontFamily: "Barlow Condensed, Barlow Condensed Fallback Narrow, Barlow Condensed Fallback Arial, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 1.4rem + 2.2vw, 2.9rem)"
    fontWeight: 700
  h3:
    fontFamily: "Barlow Condensed, Barlow Condensed Fallback Narrow, Barlow Condensed Fallback Arial, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 1.15rem + 0.9vw, 1.75rem)"
    fontWeight: 700
  body:
    fontFamily: "Source Sans 3 Variable, Source Sans 3, Source Sans 3 Fallback, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  home-h1:
    fontFamily: "Barlow Condensed, Barlow Condensed Fallback Narrow, Barlow Condensed Fallback Arial, system-ui, sans-serif"
    fontSize: "clamp(3.75rem, 6.5vw, 6.25rem)"
    fontWeight: 700
    lineHeight: 0.98
  home-h1-mobile:
    fontFamily: "Barlow Condensed, Barlow Condensed Fallback Narrow, Barlow Condensed Fallback Arial, system-ui, sans-serif"
    fontSize: "clamp(3.6rem, 10vw, 5.5rem)"
    fontWeight: 700
  eyebrow:
    fontFamily: "Source Sans 3 Variable, Source Sans 3, Source Sans 3 Fallback, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    letterSpacing: "0.13em"
  caption:
    fontFamily: "Source Sans 3 Variable, Source Sans 3, Source Sans 3 Fallback, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.5
  button:
    fontFamily: "Barlow Condensed, Barlow Condensed Fallback Narrow, Barlow Condensed Fallback Arial, system-ui, sans-serif"
    fontSize: "1.175rem"
    fontWeight: 700
  button-lg:
    fontFamily: "Barlow Condensed, Barlow Condensed Fallback Narrow, Barlow Condensed Fallback Arial, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
  ui-nav:
    fontFamily: "Barlow Condensed, Barlow Condensed Fallback Narrow, Barlow Condensed Fallback Arial, system-ui, sans-serif"
    fontSize: "1.12rem"
    fontWeight: 600
  stat:
    fontFamily: "Barlow Condensed, Barlow Condensed Fallback Narrow, Barlow Condensed Fallback Arial, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.8rem + 4vw, 4.6rem)"
    fontWeight: 700
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  pill: "999px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  "8": "4.5rem"
  section: "clamp(3rem, 2rem + 4vw, 5.5rem)"
  sidebar: "20rem"
components:
  button-call:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "0.8rem 1.6rem"
    height: "48px"
  button-call-hover:
    backgroundColor: "{colors.orange-deep}"
    textColor: "{colors.white}"
  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    height: "48px"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
  card:
    backgroundColor: "{colors.white}"
    borderColor: "{colors.line}"
    rounded: "{rounded.md}"
    shadow: "0 1px 2px rgb(28 28 28 / 0.06), 0 8px 24px rgb(28 28 28 / 0.08)"
  service-card:
    backgroundColor: "{colors.white}"
    borderColor: "{colors.line}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
    iconDisc: "{colors.tint} ground, {colors.orange-text} stroke"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    borderColor: "#9a9a96"
    rounded: "{rounded.sm}"
    height: "48px"
  callout:
    backgroundColor: "{colors.tint}"
    borderColor: "{colors.orange-pale}"
    rounded: "{rounded.md}"
---

## Current direction — 2026-09-21

This update supersedes the historical presentation specifications below. Existing
business facts, image provenance rules, route architecture, and launch gates remain.

**Brand idea:** “Your door fixed. Your day back.” The first screen communicates the
homeowner's outcome, names the services, and gives one clear primary action. Orange
remains the identifying color; neutral charcoal (#1c1c1c) provides a
high-contrast home hero and closing section. Neutral gray (#f5f5f5) and white alternate
through the page. Barlow Condensed remains the display face; Source Sans carries
body text, navigation, and small labels. No new font or image downloads.

**Hierarchy:** outcome → concise track record → three service paths → written-quote
policy and customer control → real before/after work → three process steps → review
summary and serviced brands → FAQs → coverage → short request form.

**Conversion design:** three initial categories reduce decision effort; symptom
shortcuts help urgent visitors; the written quote explains price control; visible
process steps reduce uncertainty; existing real work supports evaluation; optional
form details use progressive disclosure. These are design hypotheses, not a claim
of measured conversion uplift. Evaluate delivered leads after tracking is connected.

**System:** 5/8/12px corner radii; restrained shadows; larger editorial headings;
body-font navigation; ink labels on orange primary buttons; touch targets at least
44–48px. Type stays on the token ramp: `--text-2xs` (0.78rem — eyebrows, captions,
consent lines), `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, plus the documented
`home-h1` / `home-h1-mobile` display steps; no literal font sizes in components. Inner service heroes use neutral gray backgrounds and larger headings. Sidebars,
service cards, section headings, forms, footer, and mobile contact controls share
the same tokens across all 545 pages. Breadcrumbs and existing routes are preserved.

**Contact honesty:** call labels become “Request Service” while no phone is
configured. Duplicate adjacent links to the form are suppressed. Without a form
endpoint, fields are visibly a preview; preview submissions stay on the page and
never report a delivered request or fire a form-submit conversion. A thank-you page
visit alone is not a conversion. The backend must confirm lead delivery at launch.

**Imagery:** reuse existing assets through the manifest. Service cards are
illustrative; before/after remains restricted to assets labeled real. AI models
and stock people are not testimonials. No new business claims or review quotes.
County and town pages (2026-09-21) lead with the county photo as a full-bleed
`AreaHero`, then `ServicePhotoGrid` cards, real before/after work and the brand
strip — the same photographic density as the home page (see Components).

**QA:** production build, Astro diagnostics, image audit, complete local-link and
anchor crawl, plus browser checks at desktop and 390/320px phone widths. See
docs/ez-brand-refresh-qa.md for results and remaining launch dependencies.

## Historical specification (before 2026-09-21)
## Overview

**ORANGE STANDARD** (built 2026-09-17; owner-selected on 2026-09-17: "copy A1's structure and design — A1-style, EZ orange"). The site is the category-standard national garage-door brand site — the register A1 Garage Door Service defines — rebuilt for one Massachusetts company with its own colors, copy, and photography. Conventional on purpose: recognizability and trust over a signature world. It replaces PROJECTED LIGHT (rollback tag `v2026.08-projected-light`), which replaced Orange Editorial Utility (`v2026.07-orange-editorial`). The direction contract rides as the first `<body>` comment in `BaseLayout.astro`. Normative source in code: `website/src/styles/tokens.css` + `base.css`.

## Colors

White page ground; warm light-gray (`{colors.alt}`) alternating sections; ink (`{colors.ink}`) headings and dark bands (stat band, closing CTA, footer). **Orange is the one action color**: buttons, the 4px rules under headings, icon discs, check marks, breadcrumb separators, hover borders, and the hero's emphasis line. Cards carry no thick accent borders — identity comes from icons, type, and shadow (thick side/top tabs on rounded cards are banned as the generic-AI tell). The contrast law is measured, not assumed: brand orange `#f36a21` on white is 3.05:1 — **large text only** (≥24px, or ≥18.66px bold), which is why buttons are pinned at 1.175rem/700 and orange headings only appear at hero sizes on white. Small orange text (eyebrows, accent links) always uses `{colors.orange-text}` (`#b23f0e`, 6.6:1). On dark bands orange text is `{colors.orange-on-ink}` (7.3:1). On orange bands, small text is ink and buttons flip to white/ink — never orange-on-orange. Never orange text on the gray alt ground (2.77:1 fails even large).

## Typography

Barlow Condensed 700 for every heading — title case, near-zero tracking, line-height 1.08 (the old stamped-caps voice is retired). Source Sans 3 body at 17px/1.6. Eyebrows are Barlow 700 uppercase, tracked 0.1em, in orange-text. Buttons and nav are Barlow 600–700. The mono face is no longer a design voice (kept only for `.mono` utility). No new font payloads.

## Layout

Utility strip (ink) → sticky white header with dropdown nav (Repair · Openers · New Doors · Maintenance · Service Areas · Resources) and two CTAs → page. Inner pages: breadcrumbs, a light hero (gradient alt→white, copy left, rounded photo card right), the four-stat proof strip, then a **content + sticky sidebar** grid (`.page-grid`, sidebar 20rem, collapses ≤62rem) with the call card and related links. Pages end with related-link cards and a dark or orange CTA band; the footer carries the full 14-county index. Breakpoints: 36rem, 48rem (sticky bar / proof strip 2-col), 56rem (hero stacks), 62rem (sidebar stacks), 66rem (mobile nav), 78rem (header secondary CTA).

## Elevation & Depth

Soft, conventional: `card` shadow (0 1px 2px + 0 8px 24px at 6–8%), `card-hover` deeper, `cta` orange glow under call buttons. Cards sit on white or alt with a 1px line border. No inset/emboss, no gradients except the hero ground.

## Shapes

6px on buttons and inputs, 10px on cards, 16px on hero photo cards, pill chips, circular numbered steps and icon discs. Photos always in rounded cards with `object-fit: cover`: hero cards 4:3 or 5:4, content figures 16:9 (3:2 for small in-card photos), wide banners 16:6 (16:8 under 48rem).

## Components

- **Buttons** (`.btn--call` orange/white, `.btn--outline` white/ink, `.btn--ink`, `.btn--inverse-outline` on dark): 48px min, 56px large.
- **ServiceGrid**: plain white cards with orange icon discs (`Icon.astro` line icons, no icon font); orange only on the icon and the "Learn about" link.
- **WhyEZ**: four verified reasons with orange icon discs — only APPROVED_CLAIMS / STATS / COVERAGE content.
- **ProofColumns**: four orange numerals on white under every hero. **StatBand**: four orange-on-ink numerals on the ink band (home).
- **ProofBand**: platform rating cards (logo, stars, rating, count) — outbound links appear when profile URLs exist; no quote cards until verbatim reviews exist.
- **Sidebar**: sticky white call card + link-list of related pages.
- **CountyGrid / TownList / nearby list**: the statewide-coverage modules built from `ma-towns.ts`.
- **RepairIssueGrid**: plain symptom cards (orange border on hover) routing to the fix.
- **FaqList**: native `<details>` cards with +/– glyph; same array feeds FAQPage schema.
- **LeadForm**: white card; field names locked (CRM contract).
- **Callout** (`.callout`): tint ground with a 1px orange-pale border, rounded, for safety notes and honesty notes.
- **TrustLogoStrip**: full-color continuously moving logo rows (28/32 seconds, pause control and reduced-motion static fallback), labeled "brands we service", non-affiliation line always rendered.
- **Breadcrumbs**: on every inner page, mirrored in BreadcrumbList JSON-LD.
- **AreaHero** (`AreaHero.astro`, 2026-09-21): the county/town page hero in the U1/A1 "city page" register — the county's location-verified regional photo full-bleed behind an ink gradient (copy column ≥ 0.9 opaque), white H1, orange-on-ink eyebrow, dark breadcrumbs (`Breadcrumbs tone="dark"`), one primary CTA, fact row, rating line, and a photo chip (`Northampton · Hampshire County`) that names what the photo really shows — never the town being read about; omitted for the place-neutral Hampden image. Under 56rem the photo becomes a 16:10 strip above the ink copy panel. Eager, `fetchpriority="high"`, `sizes="100vw"`, quality 62.
- **ServicePhotoGrid** (`ServicePhotoGrid.astro`, 2026-09-21): photo service cards (16:10 photo, title, blurb, "Learn about …"), fed by `SERVICE_CARD_IMAGES` in `services.ts` with per-page overrides, plus text pills for the rest. Illustrative only — real hardware where it exists, ai-model/stock in illustrative positions; it throws for a service without an honest photo. Used on all 365 county/town pages (6 cards) and all 14 brand pages (3 cards).
- **Area page order** (county + town): AreaHero → ProofColumns → ServicePhotoGrid (alt) → local context + sticky Sidebar (town data card, then the generated "Know the area" facts block from `ma-local.ts` with bordering-town links / county town list) → BeforeAfterGallery (real pairs, captioned by style, never town-attributed) → TrustLogoStrip → FaqList → orange CTASection.
- **SectionImage** (`SectionImage.astro`): the one way to place an illustration outside a hero. `variant="banner"` (16:6 strip — county/town pages, hubs) or `variant="figure"` (16:9 — guide lede, style/brand context, in-section photos), optional small muted caption, 16px radius + card shadow, lazy unless `priority`. Fed by manifest id only. Never a proof module.
- **Hero split** (`.hero-split`): the light hero for hubs and company pages without `ServiceHero` — copy left, one rounded photo card right, stacks under 56rem.
- **Imagery provenance**: every manifest image is `real` (EZ's own photos), `ai-model` (illustrative technician models) or `stock` (licensed illustrative photos — places, house styles, winter, commercial doors). Proof modules (`WorkGallery`, `BeforeAfterGallery`, `FinishedDoorGallery`) throw at build time on anything but `real`. One unique primary visual per page; town pages inherit their county's banner — there are no per-town photos and none may be implied.

## Do's and Don'ts

**Do:** keep every claim inside the approved register (`docs/ez-verified-claims.md`); real, person-free photographs only in proof modules (galleries, before/after); illustrative technician-model shots only as page heroes; stock photos only as illustration, with alt text that describes the scene (never "our team", "our van", "a job we did", and never claiming a photo *is* a given town); caption any stock door photo that could be mistaken for EZ's work as illustrative; use `orange-text` for any orange type under large size; keep breadcrumbs, sidebar, and related links on every inner page (the 500+-page architecture depends on internal linking); respect `prefers-reduced-motion` (all transitions off).

**Don't:** stock or AI imagery in any proof module or the reviews page; stock photos of people presented as customers or staff; a brand logo placed over a photo; the same primary visual on two pages; brand orange as small text or on the gray alt ground; orange-on-orange; shadows heavier than the card tokens; new fonts; carousels/marquees/scroll-jacking; kickers without the heading rule; "Learn More"/"Get Started"/"Submit" labels (cards use "Learn about {service}" as the deliberate exception); any banned claim (licensed & insured, 24/7, same-day guaranteed, authorized dealer, invented reviews, prices, warranties, financing, family-owned); any Connecticut reference; the home base location.

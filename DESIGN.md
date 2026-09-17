---
name: EZ Garage Doors
description: ORANGE STANDARD — the national-brand garage-door canon (A1-style structure) rebuilt for one Massachusetts company in EZ orange; white ground, ink headings, orange as the single action color
colors:
  white: "#ffffff"
  alt: "#f4f4f2"
  alt-deep: "#e9e9e6"
  tint: "#fff1e8"
  line: "#dcdcd8"
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
  eyebrow:
    fontFamily: "Barlow Condensed, Barlow Condensed Fallback Narrow, Barlow Condensed Fallback Arial, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    letterSpacing: "0.1em"
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

6px on buttons and inputs, 10px on cards, 16px on hero photo cards, pill chips, circular numbered steps and icon discs. Photos always in rounded cards with `object-fit: cover` at 4:3 or 5:4.

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
- **TrustLogoStrip**: grayscale logo band, labeled "brands we service", non-affiliation line always rendered.
- **Breadcrumbs**: on every inner page, mirrored in BreadcrumbList JSON-LD.

## Do's and Don'ts

**Do:** keep every claim inside the approved register (`docs/ez-verified-claims.md`); real, person-free photographs only in proof modules (galleries, before/after); illustrative technician-model shots only as page heroes; use `orange-text` for any orange type under large size; keep breadcrumbs, sidebar, and related links on every inner page (the 500+-page architecture depends on internal linking); respect `prefers-reduced-motion` (all transitions off).

**Don't:** brand orange as small text or on the gray alt ground; orange-on-orange; shadows heavier than the card tokens; new fonts; carousels/marquees/scroll-jacking; kickers without the heading rule; "Learn More"/"Get Started"/"Submit" labels (cards use "Learn about {service}" as the deliberate exception); any banned claim (licensed & insured, 24/7, same-day guaranteed, authorized dealer, invented reviews, prices, warranties, financing, family-owned); any Connecticut reference; the home base location.

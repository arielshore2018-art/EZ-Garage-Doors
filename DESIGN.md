---
name: EZ Garage Doors
description: Orange Editorial Utility — warm-paper editorial system led by brand orange, with the EZ Track as the single signature device
colors:
  orange: "#f36a21"
  orange-deep: "#d65312"
  orange-text: "#b23f0e"
  orange-pale: "#ffe3d0"
  ink: "#17191c"
  ink-soft: "#c9cdd2"
  ink-mute: "#9aa1a9"
  paper: "#f7f3ed"
  white: "#ffffff"
  steel: "#626a73"
  line: "#ddd7cf"
  body-text: "#24272b"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  display-medium:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontWeight: 600
    lineHeight: 1.15
  body:
    fontFamily: "Source Sans 3 Variable, Source Sans 3, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  h1:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 1.7rem + 4.6vw, 5.2rem)"
    fontWeight: 700
  h2:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2.8vw, 3.4rem)"
    fontWeight: 700
  mega-numeral:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.8rem + 6.5vw, 6.5rem)"
    fontWeight: 700
  eyebrow:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    letterSpacing: "0.08em"
  button:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "1.175rem"
    fontWeight: 700
    letterSpacing: "0.04em"
  ui-nav:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
  ui:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 600
  ui-sm:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    letterSpacing: "0.08em"
  ticket-mono:
    fontFamily: "ui-monospace, Cascadia Mono, Segoe UI Mono, monospace"
    fontSize: "0.9375rem"
    fontWeight: 400
rounded:
  sm: "2px"
  md: "2px"
  lg: "4px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  "8": "4.5rem"
  section: "clamp(3.5rem, 2.25rem + 5vw, 7rem)"
  section-tight: "clamp(2.25rem, 1.5rem + 3vw, 4rem)"
components:
  button-call:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.6rem"
    height: "48px"
  button-call-hover:
    backgroundColor: "{colors.orange-deep}"
    textColor: "{colors.white}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.6rem"
    height: "48px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1.6rem"
    height: "48px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.body-text}"
    rounded: "{rounded.sm}"
    padding: "0.65rem 0.8rem"
    height: "48px"
---

## Overview

"Orange Editorial Utility" (live in production since 2026-07-08). The site reads like a beautifully organized work order: confident condensed display type stating exactly what gets fixed, warm paper-white space keeping it light, and one bold orange system — **the EZ Track** — carrying the eye the way a garage-door track carries the door. Editorial ambition (asymmetry, full-bleed photography, oversized numerals) always in service of conversion: urgent visitors tap the phone CTA, planners request a written estimate. Normative source in code: `website/src/styles/tokens.css` + `base.css`; rationale: `docs/ez-design-direction.md`.

## Colors

Paper (`{colors.paper}`) is the default page ground; white panels sit on it. Ink owns headlines, dark conversion zones, and the footer. Orange dominates by **placement, not coverage**: hero track frames, the stat band, routing panels, sticky mobile bar, closing conversion zones — with quiet paper between the loud moments. Steel is secondary text (≥15–16px only). Line draws hairlines and the track's ghost rail.

**Contrast law (verified AA, measured 2026-08-18):** body text is ink/body-text on paper or white. On orange: white only at large-text sizes (≥24px regular / ≥18.66px at 700 weight — buttons are pinned at 1.175rem = 18.8px for exactly this reason); anything smaller uses ink (6.9:1). Small orange TEXT on light grounds always uses `{colors.orange-text}` (#b23f0e — ≥4.75:1 on paper, white, alt, and pale); `{colors.orange-deep}` is a hover **background** only (it measures just 4.1:1 against white and fails as small text). On ink surfaces, secondary text is `{colors.ink-soft}` and muted notes `{colors.ink-mute}` — never ad-hoc grays. Never orange-on-orange — CTAs on orange fields are ink or white-on-ink.

## Typography

Barlow Condensed (600/700, self-hosted latin subset) for headlines, buttons, nav, eyebrows, stats, prices, phone numbers — sentence case for headlines, uppercase with +0.04–0.08em tracking only for small labels/buttons. Source Sans 3 Variable for paragraphs, forms, captions; body minimum 16px at 1.6 line-height. Big numerals (`{typography.mega-numeral}`) are a brand voice — stats get displayed, not mentioned.

## Layout

12-col discipline inside a 75rem container; full-bleed image fields break out. Signature compositions: 40/60 and 60/40 splits, deliberate asymmetry (featured door spans 2 columns; after-photo offset below before-photo), editorial numbered rows instead of card grids where content is a list. Section rhythm alternates dense proof and quiet whitespace; `spacing.section` vs `spacing.section-tight` varies the beat. Breakpoints in use: 30rem, 48rem (sticky bar/mobile), 56rem (hero/grid collapse), 62rem (desktop nav).

## Elevation & Depth

Essentially flat. Cards separate by 1px `{colors.line}` borders and background steps (paper → white), not shadows. The one sanctioned shadow idiom: the call button's hard 2px ink underline (`0 2px 0 rgb(23 25 28 / 0.9)`) — utility, not glow. A whisper card shadow exists for the lead form only.

## Shapes

Square editorial surfaces: 2px radius on buttons/inputs/cards, 4px maximum (lead form). Photos are square-cornered and framed by **EZ Track corner brackets** instead of rounded containers. The only sanctioned curve is the track's own radius (22px) where a run turns a corner.

**The EZ Track** (single signature device): a 6px orange run with a parallel 1px ghost rail (5px gap), always orthogonal with one radius — echoing physical garage-door track. Sanctioned uses (max 2 per page): hero photo frame with one-time draw-in, process rails steps hang from, photo corner brackets, section-transition runs, the homepage routing junction, footer top edge. Never a squiggle, never scroll-driven, never a second motif.

## Components

- **CallButton** (`button-call`): uppercase Barlow 700, phone icon, 48px+ target; renders `tel:` only when `PHONE_READY`, else falls back to `/contact/#request`. On orange fields use `button-ink` variant.
- **LeadForm**: single column, real labels (uppercase condensed), 48px inputs, orange focus ring, inline `aria-live` errors, honeypot, hidden UTM + landing-page fields, TCPA consent line. Submit labels are specific ("Request Repair Service"), never "Submit".
- **Track devices**: `.track-run` (heading underline), `.side-rail` (vertical priority rail), `.track-frame` / `.track-frame--br` (photo brackets), `.track-shift` (section transition), process rails in WorkOrder/ProcessSteps.
- **Section fields**: `.section--orange` (brand moment), `.section--dark` (ink), `.section--pale`, `.section--alt` (white) — each with corrected eyebrow/track colors baked in.
- **Proof modules**: ProofBand (platform ratings + counts only), StatBand (mega numerals on orange), before/after with ink/orange corner tags.

## Do's and Don'ts

**Do:** route repair vs. new-door early; lead every service page with the light editorial split hero (type panel + bracketed real photo); keep urgent pages short, calm, phone-forward; show written-quote microcopy at decision points; respect `prefers-reduced-motion`.

**Don't:** dark-scrim heroes over photos; rounded-card grids; global fade-ups, carousels, marquees, parallax; more than one signature motif; orange-on-orange CTAs; invented proof of any kind (quotes, towns, team, guarantees — see PRODUCT.md constraints); "Learn More"/"Get Started"/"Submit" labels; banned-claims vocabulary (licensed & insured, 24/7, same-day guaranteed, authorized dealer).

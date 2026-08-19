---
name: EZ Garage Doors
description: PROJECTED LIGHT — the company's work record as hand-processed 16mm film; near-black leader, silver emulsion type, orange only as light
colors:
  film-leader: "#141210"
  film-gap: "#060505"
  film-panel: "#1d1a16"
  film-panel-2: "#262119"
  emulsion: "#c9c4bb"
  emulsion-bright: "#efece6"
  emulsion-dim: "#98928a"
  flare: "#f36a21"
  flare-hot: "#ffa15c"
  flare-bright: "#ff8b47"
  flare-exposure: "#ffc499"
  flare-edge: "#e05c14"
  stain: "#7a5c40"
  err: "#ff7a66"
  rule: "rgb(201 196 187 / 0.16)"
  rule-strong: "rgb(201 196 187 / 0.34)"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "0.035em"
  h1:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.8rem, 1.8rem + 5vw, 5.6rem)"
    fontWeight: 700
  hero-h1:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 3.6vw, 4.6rem)"
    fontWeight: 700
  h2:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.4rem + 2.8vw, 3.4rem)"
    fontWeight: 700
  mega-numeral:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.8rem + 6.5vw, 6.5rem)"
    fontWeight: 700
  body:
    fontFamily: "Source Sans 3 Variable, Source Sans 3, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  edge-code:
    fontFamily: "ui-monospace, Cascadia Mono, Segoe UI Mono, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    letterSpacing: "0.26em"
  edge-code-sm:
    fontFamily: "ui-monospace, Cascadia Mono, Segoe UI Mono, Consolas, monospace"
    fontSize: "0.72rem"
    fontWeight: 500
    letterSpacing: "0.22em"
  meta-value:
    fontFamily: "ui-monospace, Cascadia Mono, Segoe UI Mono, Consolas, monospace"
    fontSize: "0.9375rem"
    fontWeight: 500
  button:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "1.175rem"
    fontWeight: 700
    letterSpacing: "0.09em"
  button-lg:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
  ui-nav:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 600
  ui-list:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 600
  ui-row:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1rem + 1.2vw, 1.7rem)"
    fontWeight: 600
  ui-sm:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
rounded:
  none: "0px"
  sprocket: "1px"
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
  sprocket-w: "2.25rem"
  sprocket-hole: "0.8rem"
  frame-gap: "0.6rem"
components:
  button-call:
    backgroundColor: "{colors.flare}"
    textColor: "{colors.film-leader}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.9rem"
    height: "48px"
  button-call-hover:
    backgroundColor: "{colors.flare-hot}"
    textColor: "{colors.film-leader}"
  button-plate:
    backgroundColor: "{colors.film-panel}"
    textColor: "{colors.emulsion-bright}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.9rem"
    height: "48px"
  input:
    backgroundColor: "{colors.film-panel}"
    textColor: "{colors.emulsion-bright}"
    rounded: "{rounded.none}"
    padding: "0.65rem 0.8rem"
    height: "48px"
  meta-panel:
    backgroundColor: "{colors.film-panel}"
    textColor: "{colors.emulsion-bright}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1rem"
---

## Overview

**PROJECTED LIGHT** (live from 2026-08-19; owner-selected on the direction page, seed 4d6f9491). The site is a strip of hand-processed 16mm film: the company's work record, projected. Near-black leader ground; silver emulsion type in stamped condensed caps; mono edge-code annotations; real photographs as frames on the strip; and **orange exists only as light** — leaks, flares, the projector beam. Every call-to-action is a light-flooded frame plate. The direction contract (thesis, own-world, story, first viewport, form, finish) rides as an HTML comment at the top of `<body>` in `BaseLayout.astro`. Normative source in code: `website/src/styles/tokens.css` + `base.css`.

## Colors

Leader (`{colors.film-leader}`) is the page ground; gap black separates frames; panels step surfaces up. Emulsion silver carries all text (bright for headings, dim for secondary — every step ≥5.4:1 on leader). **The orange law: orange is light, never ink.** It appears as the leak gradient, flare-plate floods, the beam behind `.section--orange`, the light-struck rise of a hero line, and small perforation ticks in the edge-print grammar — never as flat text color on cards or labels (silver mono does that work). `{colors.err}` is the only other signal color (form errors).

## Typography

Barlow Condensed 700 uppercase, tracked +0.035em = the stamped caps voice (the hero H1 additionally wears the `.stamped` turbulence mask for ink-starved erosion). Body is Source Sans 3 on dark at 1.6 line-height. The third voice is the system mono stack — edge codes, frame numerals, metadata panels, form labels, the eyebrow — always uppercase, always tracked wide. No new font payloads beyond the two loaded families.

## Layout

Content banded in frame rows. The strip device (sprocket margins via `--sprocket-w`/`--sprocket-hole`, frame gaps via `--frame-gap`) carries heroes and galleries; metadata panels and edge-code rails annotate margins. Fixed page architecture: header band, content strip, leak-edged footer on every page; navigation swaps content, never layout. Breakpoints: 30rem, 48rem (sticky bar), 56rem (strip collapse), 62rem (desktop nav).

## Elevation & Depth

No shadows. Depth = overlap and frame gaps (flat plates over gap black). The single glow permitted is the flare plate's light (`box-shadow` as luminance, not depth). Frames carry inset rebate edges and exposure falloff — film physics, not elevation.

## Shapes

Square-cut everything (0px). The sole rounded element is the sprocket perforation at 1px. Registration corners (emulsion L-marks) frame priority photos; splice marks (orange rule + offset hairline) sit under headings.

## Components

- **Flare plate** (`.btn--call`): grain-textured flood gradient, leader-dark stamped caps, square sprocket tabs matching strip geometry, glow on hover ("backlit" states — full-field light shifts, never 10% tints).
- **The strip** (`.sprockets`, `.frame`): sprocket margins, frames with visible grain (0.42 overlay), rebate edge, exposure falloff, leak catch right. Grain lives on frames ONLY — the page never carries texture.
- **Edge-print eyebrow** (`.eyebrow`): perforation tick + mono label breaking a hairline — film edge printing, never a floating kicker.
- **Counter frames** (StatBand): verified counts as edge-coded frame cells on the strip; flare numerals, no halo.
- **Meta panels** (`.meta-panel`): STRIP/FRAME/EVENT-style mono chips for trust data.
- **Beam section** (`.section--orange`): radial projector beam on leader; silver text; flare plates as the light source.
- **Leak edges** (`--leak-gradient`): section transitions and the footer's top edge.
- **LeadForm**: dark panel, mono labels, flare focus rings, honeypot + inline `aria-live` errors; field names locked (CRM contract).

## Do's and Don'ts

**Do:** keep every claim inside the approved register (docs/ez-verified-claims.md); real, person-free photographs only inside proof-framed strips; label AI/model imagery illustrative and keep it out of record framing; theme browser surfaces (selection flare, flare caret, thin dark scrollbar); respect `prefers-reduced-motion` (the one authored motion is the hero leak's single breath).

**Don't:** orange as flat ink anywhere; floating kickers; gray washes for hierarchy (rules, size, spacing do it); shadows for depth; texture smeared outside frames; rounded corners beyond the sprocket; carousels/marquees/scroll-jacking; a second signature motif beside the strip-and-light system; "Learn More"/"Get Started"/"Submit" labels; any banned claim (licensed & insured, 24/7, same-day guaranteed, authorized dealer, invented reviews or prices).

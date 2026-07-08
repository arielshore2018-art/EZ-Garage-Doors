# EZ Garage Doors — Design Direction
## "Orange Editorial Utility"

**Status:** Approved working direction for the full-site rebuild (branch `rebuild/orange-editorial-utility`).
**Brand name ruling (2026-07-07):** The customer-facing name is exactly **EZ Garage Doors** — owner confirmed when asked directly. The rebuild brief's "EZ Overhead Doors" wording is treated as a template artifact. Never "GARGAE", never "U1", no owner personal name anywhere.

---

## 1. The idea in one paragraph

EZ Garage Doors is a dispatch-grade local repair company, not a lifestyle brand. The site should read like a beautifully organized work order: big confident condensed type that says exactly what we fix, warm paper-white space that keeps it light, and one bold orange system — **the EZ Track** — that carries the eye the way a garage-door track carries the door: along a rail, around a radius, up and open. Editorial layout ambition (asymmetry, full-bleed photos, oversized type) in service of one job: get an anxious homeowner to tap the phone number, and get a comparison shopper to request a written estimate.

## 2. Emotional targets

Energetic, capable, modern, approachable, clean, local, confident, light, memorable.
NOT: dark, cheap, cartoonish, industrial-oppressive, franchise-template, SaaS-template, over-animated, orange-soup.

## 3. Palette (token names in `tokens.css`)

| Role | Token | Hex | Use |
|---|---|---|---|
| Primary Orange | `--c-orange` | `#F36A21` | Brand fields, EZ Track, active states, key highlights |
| Deep Orange | `--c-orange-deep` | `#D65312` | Hover states, small text-on-light accents (AA at 18px+ bold), track shading |
| Pale Orange | `--c-orange-pale` | `#FFE3D0` | Tint fields, symptom-navigator hover, quiet section washes |
| Ink | `--c-ink` | `#17191C` | Headlines, body on light, dark conversion zones, footer |
| Warm Paper | `--c-paper` | `#F7F3ED` | Default page background — the site is LIGHT |
| White | `--c-white` | `#FFFFFF` | Cards on paper, knockout panels, text on orange/ink |
| Steel Gray | `--c-steel` | `#626A73` | Secondary text, captions, metadata |
| Structural Line | `--c-line` | `#DDD7CF` | Hairlines, table rules, grid strokes |

Contrast rules (verified):
- Body text: ink on paper/white only. Steel gray ≥ 16px only, never under 4.5:1 backgrounds.
- On orange `#F36A21`: **white text at ≥18.66px bold / ≥24px regular only** (contrast 3.05:1 — large-text AA); for smaller text on orange use ink (`#17191C`, 6.9:1). Buttons on orange fields are **ink** or **white-on-ink**, never orange-on-orange.
- Orange text on paper only at display sizes (≥24px). Deep orange `#D65312` passes 4.5:1 on white for 16px+ — use it for inline text accents, not `#F36A21`.

Orange dominance is achieved by placement, not coverage: hero field, section transitions, the Track, routing panels, sticky mobile bar, closing conversion zone. Between those moments the page is warm paper and white.

## 4. Typography

- **Display:** Barlow Condensed (600 SemiBold, 700 Bold) — headlines, big numbers, section labels, prices, phone numbers. Set tight (`letter-spacing: -0.01em`), uppercase only for small labels (with +0.06em tracking), sentence case for headlines.
- **Body/UI:** Source Sans 3 (400, 600, 700) — paragraphs, forms, nav, buttons, captions.
- Loaded via `@fontsource` npm packages (self-hosted woff2, subset latin), `font-display: swap`. Max 5 weight files total.
- Body minimum 16px / 1.6. Display scale (clamp-based): h1 clamp(2.6rem, 7vw, 5.5rem); h2 clamp(2rem, 4.5vw, 3.5rem); h3 clamp(1.35rem, 2.5vw, 1.75rem).
- Numerals: Barlow Condensed for stats/phone (tabular where needed).

## 5. The EZ Track (signature element)

One system, used sparingly and structurally. The physical metaphor: a garage-door track — a straight horizontal run, a 90° radius, a vertical rise. Rendered as a **6px orange stroke with a parallel 1px structural-line ghost rail** (like the two flanges of real track), always orthogonal + one radius, never squiggly.

Sanctioned uses (pick per page, max 2 per page):
1. **Hero frame:** the Track runs along the top of the hero photo, turns the corner, and drops to point at the CTA cluster. On load it "opens" — the stroke draws in once (CSS `stroke-dashoffset`, 700ms, after LCP paint, `prefers-reduced-motion: reduce` → static).
2. **Process rail:** numbered steps (What happens after you call) hang off a horizontal track run.
3. **Image corner brackets:** photos get a track-corner (one horizontal + radius + short vertical) as a brand frame instead of rounded cards.
4. **Section transition:** a single track line that exits one section and enters the next at a different x-position.
5. **Routing junction (homepage):** Repair path and New Door path split off one track — a literal switch/junction diagram.

Forbidden: running through every section, scroll-jacking, parallax tracks, second motifs, JS animation libraries. Implementation: inline SVG + CSS only.

## 6. Layout language

- Base grid: 12-col, max-width 1200px content / full-bleed image fields; visible alignment discipline.
- Compositions: 60/40 and 65/35 splits; hero is asymmetric (type block overlapping full-bleed photo); alternate dense proof sections with quiet whitespace sections.
- Surfaces: square or 2px radius. Buttons 2px. Photos square-cornered with track brackets. NO rounded-2xl card soup.
- Section rhythm varies: full-bleed photo → contained text → orange field → white knockout. Not uniform max-width/padding stacks.
- Repair pages: compressed, phone-forward, symptom-led, calm. Install pages: airy, image-led, estimate-forward. Commercial: denser, tabular, factual. PPC: single-goal, minimal nav.

## 7. Imagery

Primary material: the real photo library in `website/src/assets/photos` (see asset inventory) — real jobs, springs, openers, doors. Treatments: full-bleed with ink gradient scrim (bottom 40%, for legibility), track corner brackets, occasional duotone-orange wash **only** for background texture (never on proof photos — proof photos stay true-color). No stock handshakes, no AI-as-proof. Any AI/stock texture is decorative-only and never presented as company work.

## 8. Motion budget

1. Hero track draw-in (once, CSS, post-LCP).
2. Button/nav feedback (150ms transforms).
3. Accordion open/close.
4. Form success state.
Nothing else. No global fade-ups, no carousels, no marquees. `prefers-reduced-motion` kills 1 entirely.

## 9. Voice

Grade 5–7 reading level on repair/PPC pages. Named parts (torsion spring, drum, center bearing plate), real process steps, written-quote-first policy, real towns. Banned phrases per brief §16 (trusted partner, one-stop shop, Learn More, Submit, etc.). Every claim traced to `APPROVED_CLAIMS`/`STATS` in `business.ts` or omitted.

## 10. Logo-swap defense

The pages must fail the logo-swap test through: the EZ Track system, Connecticut-specific copy (real towns, real stats), the written-quote-before-work policy woven into CTAs ("Written quote before any work begins"), the symptom-navigator framing ("What's your door doing?"), and the orange/paper/condensed-type identity. If a section would read fine under a competitor's logo, it gets rewritten.

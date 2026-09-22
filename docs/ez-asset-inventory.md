# EZ Garage Doors — Asset Inventory (Rebuild)
Detailed provenance audit of the original photo set lives in `website/ASSET-INVENTORY.md` (2026-07-03, still accurate for the real/AI classes). This file records the rebuild-relevant summary and usage policy. Updated 2026-09-17 for the site-imagery pass (`docs/ez-image-implementation-brief.md`).

## Gating
- Photos: `website/src/config/site-images.ts` — **75 entries** (18 `real`, 12 `ai-model`, 45 `stock`), id-keyed, alt + category + focal points + `approved` flag + **`provenance`**. Components reference by id only (`img(id)`); proof modules go through `realImg()` / `assertRealMeta()` and **fail the build** on any non-`real` image.
- Brand logos: `website/src/config/brand-logos.ts` — 18 processed WebP/PNG, `enabled` flag. Raynor/Linear/Sommer/Marantec = text badges.
- Logos: 4 SVGs (`primary-horizontal`, `white`, `black`, `ez-mark`) — wordmark reads "GARAGE DOORS"; tagline "Fast. Reliable. Local."; favicons 16–512px in `public/`.

## Classes and usage policy
| Class | Provenance | Assets | Policy |
|---|---|---|---|
| **Real vehicles** | real | `van-front` (the van photos that include a technician model are classed `ai-model`) | Hero-grade. Real proof. |
| **Real doors (finished)** | real | 6 styles (charcoal recessed, cream carriage, white flush steel, black w/ windows, white carriage, walnut wood-look) | Installation/gallery heroes, style pages, door-brand context figures. |
| **Real before/after** | real | 4 pairs | Proof modules only, captioned by style, never town-attributed. |
| **Real hardware** | real | broken spring, new springs, problem-door hero | Repair-page heroes + WorkGallery. |
| **AI technician models** | ai-model | walkthrough, quote-tablet, spring-winding, spring-safety, carry-panel, stuck-repair, opener-rail, team-van, repair-tech-van, tech-arrival, van-arrival, hero-active-repair | Illustrative hero positions only; NEVER in proof modules (now enforced at build); alt text never claims the actual team. Replacement = top of the shot list. |
| **Stock (Unsplash licence)** | stock | 45 photos: 13 county scenes, 6 Massachusetts house/streetscapes, 4 winter, 9 residential doors, 6 commercial, 7 utility (contact, handshake, clipboard, smart-lock, cable drum, red-barn garage, autumn pond) | Illustration only. Alt text describes the scene. Never in proof modules, never on `/reviews/`, never captioned as EZ's team, van or jobs. Stock door photos near EZ's own work carry an "illustrative — not an EZ Garage Doors installation" caption. |
| **Trust logos** | — | Google/Yelp/Angi/Thumbtack + 5-star mark; 6 opener brands; 7 door brands | "Brands We Service" strips + review platform chips, with non-affiliation note. Never placed over a photo. |

## Stock set — verification record (2026-09-17)
Source files: `Brand/photos/stock/` (50 JPGs + `manifest.csv`). Ingested copies: `website/src/assets/photos/stock/` (45). Every location-specific photo was checked against its Unsplash page before use; the delivered manifest labels were wrong in several places and the site uses the corrected facts below.

**Rejected (kept in `Brand/` only, not on the site):**
| File | Reason |
|---|---|
| `stock-commercial-sectional-door-bw.jpg` | Legible third-party logos in frame. |
| `stock-ma-aerial-autumn-neighborhood.jpg` | Photographed in Connecticut — violates the no-Connecticut rule. |
| `stock-ma-historic-street-houses.jpg` | Portsmouth, New Hampshire — not Massachusetts. |
| `stock-ma-autumn-street.jpg` | Trois-Rivières, Québec — not Massachusetts. |
| `stock-ma-river-town-houses.jpg` | Verified (Turners Falls, MA) but unassigned — spare for Franklin County. |

**Corrected labels:**
| Delivered as | Actually | Used as |
|---|---|---|
| Hampden County "river mill falls" | Shelburne Falls — **Franklin** County | `county-franklin-shelburne-falls` (Franklin banner) |
| Franklin County "autumn lake" | Wachusett area, Princeton — **Worcester** County | `wachusett-autumn-pond` (Massachusetts guide category, place-neutral alt) |
| Essex "Rockport harbor" | Gloucester Harbor (paint manufactory) | `county-essex-gloucester-harbor` |
| Hampshire "river valley aerial" | Aerial of a road through wooded hills near Northampton (no river in frame) | `county-hampshire-northampton-aerial` — alt rewritten to match |
| "Snowy park" | Person clearing a driveway with a snowblower | `winter-snowblower-driveway` (snow-load guide) |
| "Handshake inside" | Handshake on a front porch | `handshake-porch` (About, uncaptioned) |

**Edited:** `stock-commercial-rolling-steel-black.jpg` — cropped 10% left/right on ingest to remove a legible "24 HOUR VIDEO SURVEILLANCE" sign.

**Hampden County has no verified photograph.** Interim banner: `red-barn-garage-doors` (place-neutral alt, makes no location claim). A real Hampden County photo is on the shot list.

## Page → primary visual rules
- One unique primary visual per page across the hand-built/service/hub family; verified by `qa-images` over `dist/` (pattern in `docs/ez-final-qa-report.md`).
- 14 county pages → 14 distinct **full-bleed heroes** (`AreaHero`, 2026-09-21 — replaced the below-the-fold banner). The 351 town pages inherit their county's photo; the alt names the real subject and a visible chip names the photo's verified location plus the county (`Boston · Suffolk County` on every Suffolk town page) — never the town being read about. Hampden's place-neutral barn carries no chip.
- Every county/town page also carries six illustrative `ServicePhotoGrid` cards (`SERVICE_CARD_IMAGES` in `services.ts`: real `hero-problem-door`, `broken-spring`, `door-carriage`; ai-model `opener-rail`, `stuck-repair`; stock `winter-garage-door-snowfall`) and two real before/after pairs captioned by style. The 14 brand pages carry three cards each (door brands: repair / springs / installation via `carry-panel`; opener brands: opener repair / smart openers / door repair).
- Guide articles default to their category image; 22 articles override it (`GUIDE_IMAGE_OVERRIDES` in `config/guides/index.ts`). Article JSON-LD carries `image`; LocalBusiness does not.
- PPC heroes rotate over five images by design.
- Imageless by design: `/reviews/` (no stock people beside review proof), legal pages, `/thank-you/`, `/brands/` hub. (The 7 opener-brand pages left this list on 2026-09-21 — they now carry the three-card photo grid; an honest opener-unit photo is still on the shot list.)
- Known interim duplicate: `opener-rail` is the hero on `/garage-door-openers/`, `/garage-door-opener-repair/` and `/garage-door-safety-sensor-repair/` until opener-unit and sensor photos exist.

## Gaps (drive the shot list)
No real technician/team photos. No real commercial job photos (commercial pages use stock door-type illustrations). No opener-unit or safety-sensor photo. No Hampden County scene. No town-specific job photos (none may be faked). No og:image asset (build one from logo + real door photo — flat graphic, no fake proof). The hardware close-ups in brief §4 (roller, hinge, track, sensor, remote, weather seal) were **not generated** — no image-generation key is available in this environment; prompts remain in the brief.

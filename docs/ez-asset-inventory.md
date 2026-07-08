# EZ Garage Doors — Asset Inventory (Rebuild)
Detailed provenance audit lives in `website/ASSET-INVENTORY.md` (2026-07-03, still accurate). This file records the rebuild-relevant summary and usage policy.

## Gating
- Photos: `website/src/config/site-images.ts` — 28 entries, id-keyed, alt + category + focal points + `approved` flag. Components reference by id only.
- Brand logos: `website/src/config/brand-logos.ts` — 18 processed WebP/PNG, `enabled` flag. Raynor/Linear/Sommer/Marantec = text badges.
- Logos: 4 SVGs (`primary-horizontal`, `white`, `black`, `ez-mark`) — wordmark reads "GARAGE DOORS"; tagline "Fast. Reliable. Local."; favicons 16–512px in `public/`.

## Classes and rebuild usage policy
| Class | Assets | Policy in new design |
|---|---|---|
| **Real vehicles** | 5 Transit van photos (arrival, front, tech-exit, team, portrait) | Hero-grade. Preferred for homepage/area/about heroes — real proof. |
| **Real doors (finished)** | 6 styles (charcoal recessed, cream carriage, white flush steel, black w/ windows, white carriage, walnut wood-look) | Installation/gallery hero + style explorer. True-color, track-bracket frames. |
| **Real before/after** | 4 pairs | Proof modules only, captioned by style, never town-attributed. |
| **Real hardware** | broken spring, new springs, opener rail, stuck-door track, problem-door hero | Repair-page heroes + symptom imagery. Close-up mechanical photography per brief §8. |
| **AI technician models** | walkthrough, quote-tablet, spring-winding, spring-safety, carry-panel, stuck-repair, team-van, repair-tech-van, tech-arrival (some blend real van + model) | Illustrative positions only; NEVER in proof modules; alt text never claims actual team. Prefer real classes above wherever composition allows. Replacement = top of shot list. |
| **Trust logos** | Google/Yelp/Angi/Thumbtack + 5-star mark; 6 opener brands; 7 door brands | "Brands We Service" strips + review platform chips, with non-affiliation note. |

## Gaps (drive the shot list)
No real technician/team photos. No commercial door photos (page stays text-led). No opener-unit photo (rail detail only). No town-specific job photos (city pages stay unpublished). No og:image asset (build one from logo + real door photo in rebuild — flat graphic, no fake proof).

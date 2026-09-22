# EZ Garage Doors — Verified Claims Register
**Rule:** Nothing ships as a factual claim unless it appears here as VERIFIED, OWNER-DECISION, or TRUTHFUL-GENERAL. Anything REQUIRES-CONFIRMATION is omitted from copy until the owner supplies proof. Single source of truth in code: `website/src/config/business.ts` (`APPROVED_CLAIMS`, `STATS`, `COVERAGE`, `BRANDS_SERVICED`).

**2026-09-17 status:** the business is Massachusetts-only. Every Connecticut reference was removed (config, copy, alt text, PPC pages — the 16 CT PPC URLs 301 to `/garage-door-repair/`). The owner said "some numbers change" about the July figures below — **corrected STATS are pending and the site must not deploy until they arrive** (`STATS_STATUS` in `business.ts`).

## VERIFIED (owner-supplied 2026-07-03; **flagged for correction 2026-09-17**; re-verify at launch)
| Claim | Exact approved wording | Source |
|---|---|---|
| Years | "15 Years in Business" | APPROVED_CLAIMS.years |
| Tagline | "Fast. Reliable. Local." | logo + APPROVED_CLAIMS.tagline |
| Pricing policy | "Written Quote Before Work Begins" | APPROVED_CLAIMS.writtenQuote |
| Reviews | "850+ 5-star reviews across Google, Yelp, Angi, and other platforms" | APPROVED_CLAIMS.reviews (620+140+95=855) |
| Volume stats | 4,000+ repairs · 900+ spring repairs · 1,200+ opener services | STATS (owner PROJECT FACTS directive) — **pending correction** |
| Brands | 12 brands, phrased **only** as "Brands We Service" | BRANDS_SERVICED |

## OWNER-DECISION (2026-09-17)
| Claim | Exact wording | Source |
|---|---|---|
| Locality | "Local Massachusetts Garage Door Company" | APPROVED_CLAIMS.local |
| Coverage | "Serving all 351 cities and towns across Massachusetts" / "All 14 Massachusetts counties" | COVERAGE (owner chose FULL STATE); counts derived from the public municipality dataset (`ma-towns.ts`, 351/351 matched to the Census gazetteer) |
| No public address | Service-area business; no street address, no map pin, no home-base town anywhere on the site or in schema | BUSINESS (Springfield / Western MA base is internal only — used solely to order dispatch-region copy) |

## PUBLIC-DATA (town and county pages)
Every `/service-areas/<town>-ma/` page states only facts from public sources: 2020/2010 Census population, 2023 Gazetteer land area and coordinates, incorporation year, municipality type and government form (Wikipedia municipality table), county and seat, and nearest municipalities by straight-line distance. Derived statements (density → housing character, incorporation era → "older homes usually have detached or retrofitted garages") are phrased as generalities ("usually", "typically"). County context (`ma-counties.ts`) is hand-written public knowledge (geography, climate, housing stock). **No page claims jobs completed in a specific town.** Source line rendered on every page.

## TRUTHFUL-GENERAL (allowed, carefully phrased)
- "Ask about today's availability" (never "same-day guaranteed").
- "Fast local response" / "we dispatch across Massachusetts and confirm your arrival window on the phone" (never minutes/hours promises; "we don't promise arrival windows we can't keep").
- "Vans are stocked for the common failures … so most repairs finish in one trip" ("most", not "all").
- "No bait pricing" / "One quote, in writing" (restates written-quote policy).
- Safety guidance (springs under tension, stop using an off-track door, sensor bypass warning) — factual industry guidance.
- Island/Cape logistics stated honestly ("scheduled around the ferry", "call early").
- "We service these brands. We are not affiliated with or endorsed by any of them." — under every brand strip and on every brand page.
- Historic-district and permit guides are explicitly general guidance ("confirm with your town"; "not legal advice").

## BANNED / REQUIRES-CONFIRMATION (must NOT appear)
| Claim | Status |
|---|---|
| Licensed & Insured / MA HIC number | requires owner confirmation |
| 24/7 / after-hours / emergency availability guarantees | requires confirmation; "emergency" pages describe urgency of the *problem*, never availability promises |
| Same-day guaranteed | requires confirmation; use hedge above |
| Authorized dealer (any brand) | banned — explicitly not authorized; every brand page carries the disclaimer |
| Response-time promises, arrival windows | banned until confirmed |
| Prices / ranges | gated: cost-guide table renders only when `ownerRanges` populated; guides explain factors only |
| #1 rated / best / award language | banned |
| Family-owned, team bios, founder story | banned (unverified) |
| Financing / warranty terms | no verified terms exist → **no financing page, no warranty page, no warranty copy** (manufacturer finish warranties mentioned once, attributed to the manufacturer) |
| On-site review quotes | placeholder texts in `reviews.ts` are **examples — never render as real**. Review modules show platform ratings/counts + outbound links only |
| aggregateRating / telephone / address schema | stays out of JSON-LD until phone final, rating markup compliant, and (address) never — service-area business |
| AI technician photos as proof | illustrative only: page heroes at most; never in galleries, before/after, review, or "real work" modules; never captioned as actual EZ team/jobs. **Enforced at build** — proof components throw on any image whose `provenance` is not `real` |
| Stock photos as proof (added 2026-09-17) | 45 licensed stock photos are on the site as **illustration only** (`provenance: "stock"`). A photograph is an implied claim, so: alt text describes the scene, never the company; no stock photo is captioned or positioned as EZ's team, van, customer or job; no stock people on `/reviews/`; stock door photos shown near EZ's own work are captioned "illustrative photo, not an EZ Garage Doors installation"; door-brand context figures use EZ's real finished-door photos captioned "not a manufacturer product photo" |
| A photo presented as a specific town | banned — no per-town photography exists. Town pages inherit the county banner; its alt names what the photo really shows (e.g. "Boston skyline…" on every Suffolk County town), never the town being read about. Location-specific stock was verified against its source page before use; three supplied "Massachusetts" photos were rejected as CT/NH/Québec (`docs/ez-asset-inventory.md`) |
| Per-town job claims | banned — town pages carry public data and county context, never "we've fixed X doors in <town>" |
| Any Connecticut reference | banned — removed entirely 2026-09-17 |
| Home base location | banned — never published |

## Phone & leads
No final number exists. All call CTAs run through `CallButton` (falls back to `/contact/#request`). `PRIMARY_PHONE` placeholder never rendered as a dialable number. No SMS links until a texting number is confirmed. `FORM_ENDPOINT` is empty — owner wants leads **emailed**; the owner must create the form-service account (e.g. Formspree/Basin) and supply the endpoint; the site cannot create accounts on their behalf.

# EZ Garage Doors — Verified Claims Register
**Rule:** Nothing ships as a factual claim unless it appears here as VERIFIED or TRUTHFUL-GENERAL. Anything REQUIRES-CONFIRMATION is omitted from copy until the owner supplies proof. Single source of truth in code: `website/src/config/business.ts` (`APPROVED_CLAIMS`, `STATS`, `BRANDS_SERVICED`).

## VERIFIED (owner-supplied 2026-07-03; re-verify counts at launch)
| Claim | Exact approved wording | Source |
|---|---|---|
| Years | "15 Years in Business" | APPROVED_CLAIMS.years |
| Locality | "Local Connecticut Garage Door Company" | APPROVED_CLAIMS.local |
| Tagline | "Fast. Reliable. Local." | logo + APPROVED_CLAIMS.tagline |
| Pricing policy | "Written Quote Before Work Begins" | APPROVED_CLAIMS.writtenQuote |
| Reviews | "850+ 5-star reviews across Google, Yelp, Angi, and other platforms" | APPROVED_CLAIMS.reviews (620+140+95=855) |
| Volume stats | 4,000+ repairs · 900+ spring repairs · 1,200+ opener services · 40+ towns | STATS (owner PROJECT FACTS directive) |
| Brands | 12 brands, phrased **only** as "Brands We Service" | BRANDS_SERVICED |

## TRUTHFUL-GENERAL (allowed, carefully phrased)
- "Ask about today's availability" (never "same-day guaranteed").
- "Fast local response" (never minutes/hours promises).
- "Vans are stocked for the common failures … so most repairs finish in one trip" ("most", not "all").
- "No bait pricing" / "One quote, in writing" (restates written-quote policy).
- Safety guidance (springs under tension, stop using an off-track door) — factual industry guidance.
- "Not affiliated with or endorsed by [brands]" disclaimer under brand strips.

## BANNED / REQUIRES-CONFIRMATION (must NOT appear)
| Claim | Status |
|---|---|
| Licensed & Insured / CT HIC number | requires owner confirmation (#7–8 in blockers) |
| 24/7 / after-hours / emergency availability guarantees | requires confirmation; "emergency" pages describe urgency of the *problem*, never availability promises |
| Same-day guaranteed | requires confirmation; use hedge above |
| Authorized dealer (any brand) | banned — explicitly not authorized; Raynor logo cropped for this reason |
| Response-time promises, arrival windows | banned until confirmed |
| Prices / ranges | gated: cost-guide table renders only when `ownerRanges` populated |
| #1 rated / best / award language | banned |
| Family-owned, team bios, founder story | banned (unverified) |
| Financing / warranty terms | no verified terms exist → **no financing page, no warranty page, no warranty copy** |
| On-site review quotes | placeholder texts in `reviews.ts` (Dana/Mark/Rachel) are **examples — never render as real**. Until verbatim reviews + live URLs supplied, review modules show platform ratings/counts + outbound links only |
| aggregateRating / telephone schema | stays out of JSON-LD until phone final + rating markup compliant |
| AI technician photos as proof | AI model images are illustrative only: never in before/after, review, or "real work" modules; never captioned as actual EZ team/jobs |

## Phone
No final number exists. All call CTAs run through `CallButton` (falls back to `/contact/#request`). `PRIMARY_PHONE` placeholder never rendered as a dialable number. No SMS links until a texting number is confirmed.

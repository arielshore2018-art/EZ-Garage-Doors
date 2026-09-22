/**
 * Central business data for EZ Garage Doors.
 * Every page and component reads from this file — never hardcode
 * the company name, phone, or trust claims anywhere else.
 *
 * 2026-09-17: the business is Massachusetts-only (owner decision).
 * Connecticut was removed entirely; it is not a "former" market on the
 * site, it simply does not appear. The crew's home base is NOT
 * published (service-area business, no public address).
 *
 * TODO: Replace PRIMARY_PHONE / PRIMARY_PHONE_TEL and set PHONE_READY = true before launch.
 * TODO: Replace SITE_URL with the final production domain before launch.
 * TODO: Set FORM_ENDPOINT to the lead-form backend (e.g. Formspree/Basin/own API) before launch.
 */

export const BUSINESS = {
  /** Exact spelling. Never "GARGAE". Never "U1". */
  name: "EZ Garage Doors",
  legalName: "EZ Garage Doors", // needs-owner-confirmation: LLC / Inc. suffix if any
  tagline: "Fast. Reliable. Local.",
  yearsInBusiness: 15,
  state: "Massachusetts",
  stateAbbr: "MA",

  /** Phone is not finalized. Buttons render as estimate links until PHONE_READY. */
  PRIMARY_PHONE: "PHONE NUMBER COMING SOON",
  PRIMARY_PHONE_TEL: "", // e.g. "+14135551234" — leave empty until final number exists
  PHONE_READY: false,

  /** Lead form backend endpoint. Empty = explicitly labeled preview; no submission or conversion event. */
  FORM_ENDPOINT: "",

  /** Vercel production URL. TODO: replace with the final custom domain when it exists. */
  SITE_URL: "https://ez-garage-doors.vercel.app",
} as const;

export const hasPhone = (): boolean =>
  BUSINESS.PHONE_READY && BUSINESS.PRIMARY_PHONE_TEL.length > 0;

/**
 * Proof numbers supplied by the owner on 2026-07-03 (PROJECT FACTS directive).
 * 2026-09-17: owner indicated "some numbers change" — corrected figures
 * are PENDING. Nothing deploys until they arrive; these stay as the last
 * owner-supplied values so the templates remain wired.
 * verify-against-live-profiles-before-launch: counts drift over time.
 */
export const STATS = {
  repairs: "4,000+",
  springRepairs: "900+",
  openerServices: "1,200+",
  fiveStarReviews: "850+",
} as const;

export const STATS_STATUS =
  "owner-supplied 2026-07-03; correction pending since 2026-09-17 — re-verify before deploy";

/**
 * Coverage is an owner DECISION (full state), not a track-record stat:
 * every Massachusetts county and municipality is served. Numbers are
 * derived from the public municipality dataset in ma-towns.ts.
 */
export const COVERAGE = {
  counties: 14,
  municipalities: 351,
  line: "Serving all 351 cities and towns across Massachusetts",
  short: "All 14 Massachusetts counties",
} as const;

/**
 * Trust claims approved by the owner. Anything not in this list
 * (Licensed & Insured, 24/7, same-day guaranteed, authorized dealer,
 * arrival-time promises) must NOT appear anywhere on the site
 * until separately confirmed.
 */
export const APPROVED_CLAIMS = {
  years: "15 Years in Business",
  local: "Local Massachusetts Garage Door Company",
  tagline: "Fast. Reliable. Local.",
  writtenQuote: "Written Quote Before Work Begins",
  reviews: "850+ 5-star reviews across Google, Yelp, Angi, and other platforms",
  reviewsShort: `${STATS.fiveStarReviews} 5-Star Reviews`,
  coverage: COVERAGE.line,
} as const;

/** Lowercase a Title Case claim for mid-sentence use without flattening the state name. */
export const inlineClaim = (s: string): string =>
  s.toLowerCase().replace(/\bmassachusetts\b/g, "Massachusetts");

/** Opener/door brands the company works with. Phrase as "Brands We Service" only. */
export const BRANDS_SERVICED = [
  "LiftMaster",
  "Chamberlain",
  "Genie",
  "Linear",
  "Clopay",
  "Amarr",
  "Haas",
  "Wayne Dalton",
  "Raynor",
  "Craftsman",
  "Sommer",
  "Marantec",
] as const;

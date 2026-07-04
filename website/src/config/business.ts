/**
 * Central business data for EZ Garage Doors.
 * Every page and component reads from this file — never hardcode
 * the company name, phone, or trust claims anywhere else.
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
  state: "Connecticut",
  stateAbbr: "CT",

  /** Phone is not finalized. Buttons render as estimate links until PHONE_READY. */
  PRIMARY_PHONE: "PHONE NUMBER COMING SOON",
  PRIMARY_PHONE_TEL: "", // e.g. "+18605551234" — leave empty until final number exists
  PHONE_READY: false,

  /** Lead form backend endpoint. Empty = form falls back to thank-you redirect (not live). */
  FORM_ENDPOINT: "",

  /** Final production domain. Placeholder on purpose — do not invent a real-looking domain. */
  SITE_URL: "https://REPLACE-WITH-FINAL-DOMAIN.example",
} as const;

export const hasPhone = (): boolean =>
  BUSINESS.PHONE_READY && BUSINESS.PRIMARY_PHONE_TEL.length > 0;

/**
 * Proof numbers supplied by the owner on 2026-07-03 (PROJECT FACTS directive).
 * verify-against-live-profiles-before-launch: counts drift over time.
 */
export const STATS = {
  repairs: "4,000+",
  springRepairs: "900+",
  openerServices: "1,200+",
  fiveStarReviews: "850+",
  townsServed: "40+",
} as const;

/**
 * Trust claims approved by the owner. Anything not in this list
 * (Licensed & Insured, 24/7, same-day guaranteed, authorized dealer,
 * arrival-time promises) must NOT appear anywhere on the site
 * until separately confirmed.
 */
export const APPROVED_CLAIMS = {
  years: "15 Years in Business",
  local: "Local Connecticut Garage Door Company",
  tagline: "Fast. Reliable. Local.",
  writtenQuote: "Written Quote Before Work Begins",
  reviews: "850+ 5-star reviews across Google, Yelp, Angi, and other platforms",
  reviewsShort: `${STATS.fiveStarReviews} 5-Star Reviews`,
} as const;

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

/**
 * PPC landing-page configuration. These are paid-traffic pages:
 * noindex, excluded from the sitemap, no site navigation, one goal.
 * One renderer consumes this config — pages are NOT hand-duplicated,
 * and content varies by real fields (nearby areas from the public
 * municipality dataset, hero, tracking), not by token-swapping alone.
 *
 * Honesty rule: localProofLine states coverage and process facts only.
 * No invented per-town job counts or fake local reviews.
 *
 * 2026-09-17: Connecticut campaign pages retired (301s in vercel.json);
 * Google Ads campaigns must be re-pointed to these Massachusetts slugs.
 */
import { MA_TOWNS, nearbyTowns, townBySlug } from "./ma-towns";

export interface PpcCity {
  slug: string;
  city: string;
  state: "MA";
  county: string;
  nearbyAreas: string[];
  headline: string;
  subheadline: string;
  localProofLine: string;
  heroImageId: string;
  reviewIds: string[];
  projectIds: string[];
  campaignId: string;
  enabled: boolean;
}

const SUB =
  "Fast local help for stuck doors, broken springs, opener problems, cables, and off-track doors.";
const HEROES = ["hero-problem-door", "hero-active-repair", "spring-winding"];

/** Metro set chosen to cover every Massachusetts region (owner: full state). */
const METROS = [
  "springfield-ma", "chicopee-ma", "holyoke-ma", "westfield-ma", "northampton-ma", "amherst-ma",
  "pittsfield-ma", "greenfield-ma", "worcester-ma", "leominster-ma", "framingham-ma",
  "boston-ma", "cambridge-ma", "newton-ma", "quincy-ma", "lowell-ma", "lawrence-ma", "lynn-ma",
  "brockton-ma", "plymouth-ma", "taunton-ma", "new-bedford-ma", "fall-river-ma", "barnstable-ma",
];

export const ppcCities: PpcCity[] = METROS.map((slug, i) => {
  const t = townBySlug(slug);
  if (!t) throw new Error(`ppc.ts: unknown municipality slug "${slug}"`);
  const nearby = nearbyTowns(t, 5).map((n) => n.town.name);
  return {
    slug,
    city: t.name,
    state: "MA",
    county: t.county,
    nearbyAreas: nearby,
    headline: `Garage Door Repair in ${t.name}, MA`,
    subheadline: SUB,
    localProofLine: `One local Massachusetts team serving ${t.name} and nearby ${nearby
      .slice(0, 3)
      .join(", ")} — written quote before work begins.`,
    heroImageId: HEROES[i % HEROES.length],
    reviewIds: [],
    projectIds: [],
    campaignId: `ppc-gdr-${slug}`,
    enabled: true,
  };
});

export const enabledPpcCities = ppcCities.filter((c) => c.enabled);

/** Sanity: the statewide dataset must be complete for coverage claims to hold. */
if (MA_TOWNS.length !== 351) {
  throw new Error("ppc.ts: municipality dataset is not the full 351-town set");
}

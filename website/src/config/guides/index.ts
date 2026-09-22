/**
 * All guides, aggregated. Add a new batch file and spread it here.
 */
import type { Guide, GuideCategoryId } from "./types";
import { SPRING_GUIDES } from "./springs";
import { OPENER_GUIDES } from "./openers";
import { TROUBLESHOOTING_GUIDES } from "./troubleshooting";
import { BUYING_GUIDES } from "./buying";
import { MAINTENANCE_GUIDES } from "./maintenance";
import { SAFETY_GUIDES } from "./safety";
import { COST_GUIDES } from "./cost";
import { COMMERCIAL_GUIDES } from "./commercial";
import { MASSACHUSETTS_GUIDES } from "./massachusetts";

import { GUIDE_CATEGORIES } from "./types";

export { GUIDE_CATEGORIES };
export type { Guide, GuideCategory, GuideCategoryId } from "./types";

/**
 * Article illustrations that differ from the category default. Stock and
 * real photos only; winter/coastal/historic photos carry no place claim
 * beyond what site-images.ts verified.
 */
const GUIDE_IMAGE_OVERRIDES: Record<string, string> = {
  "garage-door-frozen-shut": "winter-garage-door-snowfall",
  "garage-door-springs-in-winter": "winter-aerial-suburb-snow",
  "garage-door-snow-load-and-ice": "winter-snowblower-driveway",
  "coastal-garage-doors-salt-air": "ma-coastal-shingle-house",
  "garage-doors-in-massachusetts-historic-districts": "county-nantucket-harbor",
  "garage-doors-on-older-massachusetts-homes": "ma-colonial-white-house",
  "garage-doors-in-boston-tight-garages": "county-middlesex-cambridge-houses",
  "garage-door-service-on-marthas-vineyard-and-nantucket": "ma-oak-bluffs-houses",
  "why-a-statewide-massachusetts-garage-door-company": "ma-boston-common-skyline",
  "garage-door-maintenance-for-seasonal-homes": "ma-cape-cottage-green-garage",
  "condo-and-apartment-garage-door-service": "condo-parking-garage-gate",
  "rolling-steel-doors-explained": "commercial-rolling-steel-black",
  "loading-dock-door-maintenance": "commercial-loading-docks-red",
  "garage-door-rust-prevention": "door-rusty-old",
  "signs-you-need-a-new-garage-door": "door-rusty-old",
  "garage-door-cable-came-off": "cable-drum-closeup",
  "garage-door-colors-and-curb-appeal": "door-glass-grid-facade",
  "carriage-house-garage-doors-explained": "door-white-double-carriage",
  "smart-garage-door-opener-guide": "smart-lock-phone-app",
  "how-to-compare-garage-door-quotes": "clipboard-sketch",
  "why-we-dont-publish-garage-door-prices": "clipboard-sketch",
  "how-garage-door-repair-pricing-works": "clipboard-sketch",
};

const ALL_GUIDES: Guide[] = [
  ...TROUBLESHOOTING_GUIDES,
  ...SPRING_GUIDES,
  ...OPENER_GUIDES,
  ...SAFETY_GUIDES,
  ...MAINTENANCE_GUIDES,
  ...BUYING_GUIDES,
  ...COST_GUIDES,
  ...COMMERCIAL_GUIDES,
  ...MASSACHUSETTS_GUIDES,
];

export const GUIDES: Guide[] = ALL_GUIDES.map((g) =>
  GUIDE_IMAGE_OVERRIDES[g.slug] ? { ...g, imageId: GUIDE_IMAGE_OVERRIDES[g.slug] } : g,
);

/* Build-time integrity: unique slugs, every related /guides/ link resolves,
   every image override names a real guide. */
{
  for (const slug of Object.keys(GUIDE_IMAGE_OVERRIDES)) {
    if (!ALL_GUIDES.some((g) => g.slug === slug)) throw new Error(`guides: image override for unknown slug "${slug}"`);
  }
  const seen = new Set<string>();
  for (const g of GUIDES) {
    if (seen.has(g.slug)) throw new Error(`guides: duplicate slug "${g.slug}"`);
    seen.add(g.slug);
  }
  for (const g of GUIDES) {
    for (const r of g.related) {
      const m = r.href.match(/^\/guides\/([^/]+)\/$/);
      if (m && !seen.has(m[1])) throw new Error(`guides: "${g.slug}" links to missing guide "${m[1]}"`);
    }
  }
}

/** The article's illustration: its own override, else the category image. */
export const guideImageId = (g: Guide): string =>
  g.imageId ?? GUIDE_CATEGORIES.find((c) => c.id === g.category)!.imageId;

export const guideBySlug = (slug: string): Guide | undefined => GUIDES.find((g) => g.slug === slug);
export const guidesInCategory = (id: GuideCategoryId): Guide[] => GUIDES.filter((g) => g.category === id);

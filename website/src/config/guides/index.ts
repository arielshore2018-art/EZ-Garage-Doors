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

export { GUIDE_CATEGORIES } from "./types";
export type { Guide, GuideCategory, GuideCategoryId } from "./types";

export const GUIDES: Guide[] = [
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

/* Build-time integrity: unique slugs, every related /guides/ link resolves. */
{
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

export const guideBySlug = (slug: string): Guide | undefined => GUIDES.find((g) => g.slug === slug);
export const guidesInCategory = (id: GuideCategoryId): Guide[] => GUIDES.filter((g) => g.category === id);

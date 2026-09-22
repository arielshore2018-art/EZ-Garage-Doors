/**
 * Guide content model. Guides are the site's editorial layer (A1's
 * blog): original, claims-safe explainers that link back into the
 * service tree. No prices, no response-time promises, no warranties.
 */
export type GuideCategoryId =
  | "springs"
  | "openers"
  | "troubleshooting"
  | "buying"
  | "maintenance"
  | "safety"
  | "cost"
  | "commercial"
  | "massachusetts";

export interface GuideCategory {
  id: GuideCategoryId;
  name: string;
  blurb: string;
  /** site-images id for the category banner; also the default article image. */
  imageId: string;
}

export interface GuideSection {
  h: string;
  p: string[];
  list?: string[];
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  category: GuideCategoryId;
  /** ISO date of last substantive edit. */
  updated: string;
  intro: string;
  sections: GuideSection[];
  faqs?: { question: string; answer: string }[];
  related: { label: string; href: string }[];
  /** Optional illustration override; defaults to the category image (guides/index.ts). */
  imageId?: string;
}

export const GUIDE_CATEGORIES: GuideCategory[] = [
  { id: "troubleshooting", name: "Troubleshooting", blurb: "What the door is doing, what it usually means, and what to do next.", imageId: "door-open-garage-cars" },
  { id: "springs", name: "Springs", blurb: "Torsion, extension, cycle life, and why springs fail in winter.", imageId: "new-springs" },
  { id: "openers", name: "Openers", blurb: "Drives, sensors, remotes, smart features, and repair vs. replace.", imageId: "opener-rail" },
  { id: "safety", name: "Safety", blurb: "The parts under tension, the tests that matter, and what never to DIY.", imageId: "spring-safety" },
  { id: "maintenance", name: "Maintenance", blurb: "Lubrication, balance tests, seals, and seasonal checklists.", imageId: "door-detached-garage-driveway" },
  { id: "buying", name: "Buying a New Door", blurb: "Materials, insulation, styles, sizes, and how to compare quotes.", imageId: "door-modern-house-two-windows" },
  { id: "cost", name: "Cost Explained", blurb: "What sets the price of repairs and new doors — without teaser numbers.", imageId: "clipboard-sketch" },
  { id: "commercial", name: "Commercial", blurb: "Dock doors, rolling steel, high-cycle springs, and maintenance programs.", imageId: "commercial-rolling-steel-gray" },
  { id: "massachusetts", name: "Massachusetts", blurb: "Winter, salt air, old houses, and the local realities of garage doors here.", imageId: "wachusett-autumn-pond" },
];

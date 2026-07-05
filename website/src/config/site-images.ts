/**
 * Typed image manifest — pages consume imagery through this file, not
 * scattered import paths. Every entry passed the branding audit
 * (see ASSET-INVENTORY.md). `approved: false` keeps an image out of use
 * without deleting the record.
 *
 * Hero-assignment rule: every service page gets its OWN primary visual —
 * no hero image is reused across two service pages (PPC intent pages
 * share per-intent heroes by design).
 */
import type { ImageMetadata } from "astro";

import heroActiveDesktop from "../assets/photos/hero-active-repair-desktop.jpg";
import heroActiveMobile from "../assets/photos/hero-active-repair-mobile-portrait.jpg";
import heroProblemDesktop from "../assets/photos/hero-problem-door-desktop.jpg";
import heroProblemMobile from "../assets/photos/hero-problem-door-mobile.jpg";
import walkthrough from "../assets/photos/ez-garage-door-technician-homeowner-walkthrough.jpg";
import brokenSpring from "../assets/photos/ez-garage-door-broken-torsion-spring.png";
import newSprings from "../assets/photos/ez-garage-door-new-torsion-springs.png";
import springWinding from "../assets/photos/ez-garage-door-spring-winding-repair.jpg";
import springSafety from "../assets/photos/ez-garage-door-spring-repair-safety.png";
import stuckRepair from "../assets/photos/ez-garage-door-stuck-door-repair.jpg";
import openerRail from "../assets/photos/opener-rail-detail.jpg";
import quoteTablet from "../assets/photos/ez-garage-door-written-quote-tablet.jpg";
import repairTechVan from "../assets/photos/ez-garage-door-repair-technician-van.jpg";
import techArrival from "../assets/photos/ez-garage-door-technician-arrival.jpg";
import vanArrival from "../assets/photos/ez-garage-door-service-van-arrival.jpg";
import vanFront from "../assets/photos/ez-garage-door-service-van-front.jpg";
import teamVan from "../assets/photos/ez-garage-door-team-service-van.jpg";
import carryPanel from "../assets/photos/ez-garage-door-installation-carrying-panel.jpg";
import doorCharcoal from "../assets/photos/ez-garage-door-charcoal-recessed-panel.png";
import doorCarriage from "../assets/photos/ez-garage-door-carriage-house-cream.png";
import doorSteel from "../assets/photos/ez-garage-door-white-flush-steel.png";
import doorBlackWin from "../assets/photos/ez-garage-door-black-flush-windows.png";
import doorWhiteCarriage from "../assets/photos/ez-garage-door-white-carriage-windows.png";
import doorWood from "../assets/photos/ez-garage-door-wood-look-walnut.png";
import beforeOldWood from "../assets/photos/ez-before-old-white-wood-door.png";
import afterWhiteLong from "../assets/photos/ez-after-white-long-panel-windows.png";
import beforeFadedBeige from "../assets/photos/ez-before-faded-beige-door.png";
import afterBlackLong from "../assets/photos/ez-after-black-long-panel-windows.png";
import beforeWornSingle from "../assets/photos/ez-before-worn-single-door.png";
import afterWhiteRaised from "../assets/photos/ez-after-white-raised-panel.png";
import beforeDirtyBeige from "../assets/photos/ez-before-dirty-beige-door.png";
import afterDarkBronze from "../assets/photos/ez-after-dark-bronze-panel.png";

export type ImageCategory =
  | "repair"
  | "spring"
  | "opener"
  | "cable-track"
  | "installation"
  | "commercial"
  | "team"
  | "before-after"
  | "process";

export interface SiteImage {
  id: string;
  src: ImageMetadata;
  mobileSrc?: ImageMetadata;
  alt: string;
  category: ImageCategory;
  orientation: "landscape" | "portrait" | "square";
  focalPointDesktop?: string;
  focalPointMobile?: string;
  approved: boolean;
}

export const siteImages: SiteImage[] = [
  // --- heroes / repair scenes ---
  { id: "hero-active-repair", src: heroActiveDesktop, mobileSrc: heroActiveMobile, alt: "EZ Garage Doors technician repairing the torsion system of a residential garage door", category: "repair", orientation: "landscape", focalPointDesktop: "72% 30%", focalPointMobile: "24% 20%", approved: true },
  { id: "hero-problem-door", src: heroProblemDesktop, mobileSrc: heroProblemMobile, alt: "Worn residential garage door with an uneven bottom edge at a Connecticut home", category: "repair", orientation: "landscape", focalPointDesktop: "28% 55%", focalPointMobile: "40% 60%", approved: true },
  { id: "walkthrough", src: walkthrough, alt: "Technician working at a garage door torsion assembly while the homeowner watches", category: "repair", orientation: "landscape", focalPointDesktop: "70% 30%", approved: true },
  { id: "stuck-repair", src: stuckRepair, alt: "Technician freeing a stuck garage door roller and track", category: "cable-track", orientation: "landscape", focalPointDesktop: "45% 40%", approved: true },
  // --- springs ---
  { id: "broken-spring", src: brokenSpring, alt: "Snapped garage door torsion spring with a visible gap in the coil", category: "spring", orientation: "landscape", approved: true },
  { id: "new-springs", src: newSprings, alt: "New torsion springs installed above a garage door", category: "spring", orientation: "landscape", approved: true },
  { id: "spring-winding", src: springWinding, alt: "Technician winding a garage door torsion spring with winding bars", category: "spring", orientation: "landscape", focalPointDesktop: "55% 35%", approved: true },
  { id: "spring-safety", src: springSafety, alt: "Technician with safety glasses winding garage door spring bars", category: "spring", orientation: "landscape", focalPointDesktop: "50% 30%", approved: true },
  // --- opener ---
  { id: "opener-rail", src: openerRail, alt: "Garage door opener rail, trolley, and red emergency release cord", category: "opener", orientation: "landscape", focalPointDesktop: "50% 45%", approved: true },
  // --- process / team ---
  { id: "quote-tablet", src: quoteTablet, alt: "Technician showing a written garage door repair quote on a tablet to a customer", category: "process", orientation: "landscape", focalPointDesktop: "50% 30%", approved: true },
  { id: "repair-tech-van", src: repairTechVan, alt: "Garage door repair technician with tool bag beside an EZ Garage Doors van", category: "team", orientation: "landscape", focalPointDesktop: "40% 30%", approved: true },
  { id: "tech-arrival", src: techArrival, alt: "Technician stepping out of an EZ Garage Doors service van with a tool bag", category: "team", orientation: "landscape", focalPointDesktop: "45% 35%", approved: true },
  { id: "van-arrival", src: vanArrival, alt: "EZ Garage Doors service van arriving at a Connecticut home", category: "team", orientation: "landscape", focalPointDesktop: "50% 40%", approved: true },
  { id: "van-front", src: vanFront, alt: "EZ Garage Doors service van with ladder racks", category: "team", orientation: "landscape", approved: true },
  { id: "team-van", src: teamVan, alt: "EZ Garage Doors crew in front of a branded service van", category: "team", orientation: "landscape", focalPointDesktop: "50% 30%", approved: true },
  { id: "carry-panel", src: carryPanel, alt: "Technician carrying a new garage door section during installation", category: "installation", orientation: "landscape", focalPointDesktop: "50% 35%", approved: true },
  // --- finished doors ---
  { id: "door-charcoal", src: doorCharcoal, alt: "Charcoal recessed-panel garage door installed", category: "installation", orientation: "landscape", approved: true },
  { id: "door-carriage", src: doorCarriage, alt: "Cream carriage house garage door with black hardware", category: "installation", orientation: "landscape", approved: true },
  { id: "door-steel", src: doorSteel, alt: "White flush-panel insulated steel garage door", category: "installation", orientation: "landscape", approved: true },
  { id: "door-black-windows", src: doorBlackWin, alt: "Black modern garage door with vertical windows", category: "installation", orientation: "landscape", approved: true },
  { id: "door-white-carriage", src: doorWhiteCarriage, alt: "White carriage-style garage door with grille windows", category: "installation", orientation: "landscape", approved: true },
  { id: "door-wood", src: doorWood, alt: "Walnut wood-look garage door with windows", category: "installation", orientation: "landscape", approved: true },
  // --- before / after ---
  { id: "before-old-wood", src: beforeOldWood, alt: "Aged white wooden garage door before replacement", category: "before-after", orientation: "landscape", approved: true },
  { id: "after-white-long", src: afterWhiteLong, alt: "New white long-panel garage door with windows after replacement", category: "before-after", orientation: "landscape", approved: true },
  { id: "before-faded-beige", src: beforeFadedBeige, alt: "Faded beige garage door before replacement", category: "before-after", orientation: "landscape", approved: true },
  { id: "after-black-long", src: afterBlackLong, alt: "New black long-panel garage door with windows after replacement", category: "before-after", orientation: "landscape", approved: true },
  { id: "before-worn-single", src: beforeWornSingle, alt: "Worn single garage door before replacement", category: "before-after", orientation: "landscape", approved: true },
  { id: "after-white-raised", src: afterWhiteRaised, alt: "New white raised-panel garage door after replacement", category: "before-after", orientation: "landscape", approved: true },
  { id: "before-dirty-beige", src: beforeDirtyBeige, alt: "Worn beige garage door with uneven bottom edge before service", category: "before-after", orientation: "landscape", focalPointDesktop: "28% 55%", approved: true },
  { id: "after-dark-bronze", src: afterDarkBronze, alt: "New dark bronze panel garage door after replacement", category: "before-after", orientation: "landscape", approved: true },
];

export function img(id: string): SiteImage {
  const found = siteImages.find((i) => i.id === id && i.approved);
  if (!found) throw new Error(`site-images: no approved image with id "${id}"`);
  return found;
}

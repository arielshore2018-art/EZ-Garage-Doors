/**
 * Typed image manifest — pages consume imagery through this file, not
 * scattered import paths. Every entry passed the branding audit
 * (see docs/ez-asset-inventory.md). `approved: false` keeps an image out
 * of use without deleting the record.
 *
 * PROVENANCE is the honesty gate:
 *  - "real"     — EZ's own photographs (vans, hardware, finished doors,
 *                 before/after). The ONLY images allowed in proof modules
 *                 (WorkGallery, BeforeAfterGallery, FinishedDoorGallery).
 *  - "ai-model" — generated technician/crew scenes. Illustrative positions
 *                 only; never captioned as the actual team.
 *  - "stock"    — Unsplash free-license photos (Brand/photos/stock/, see
 *                 manifest.csv there). Illustrative only: never a proof
 *                 module, never captioned as EZ's team, van, or jobs. Alt
 *                 text describes the scene; a place is named only when the
 *                 photographer's published location was verified
 *                 (2026-09-17) — `location` records it.
 *
 * Hero-assignment rule: every service page gets its OWN primary visual —
 * no hero image is reused across two pages of the same family (PPC pages
 * rotate a shared set by design; town pages inherit their county image).
 * scripts in the QA crawl assert this against dist/.
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

/* ---- stock (Unsplash free license) — source JPGs live in Brand/photos/stock/ ---- */
import sHandshake from "../assets/photos/stock/stock-about-handshake-homeowner.jpg";
import sCableDrum from "../assets/photos/stock/stock-cable-coiled-closeup.jpg";
import sDocksBlue from "../assets/photos/stock/stock-commercial-loading-docks-blue.jpg";
import sDocksRed from "../assets/photos/stock/stock-commercial-loading-docks-red.jpg";
import sShuttersNumbered from "../assets/photos/stock/stock-commercial-roller-shutters-numbered.jpg";
import sRollingBlack from "../assets/photos/stock/stock-commercial-rolling-steel-black.jpg";
import sRollingGray from "../assets/photos/stock/stock-commercial-rolling-steel-gray.jpg";
import sCondoGate from "../assets/photos/stock/stock-condo-parking-garage-gate.jpg";
import sContactPhone from "../assets/photos/stock/stock-contact-woman-phone.jpg";
import sBarnstable from "../assets/photos/stock/stock-county-barnstable-cape-cod-lighthouse.jpg";
import sBerkshire from "../assets/photos/stock/stock-county-berkshire-autumn-house-hills.jpg";
import sBristol from "../assets/photos/stock/stock-county-bristol-new-bedford-harbor.jpg";
import sDukes from "../assets/photos/stock/stock-county-dukes-edgartown-lighthouse.jpg";
import sEssex from "../assets/photos/stock/stock-county-essex-rockport-harbor.jpg";
import sWachusett from "../assets/photos/stock/stock-county-franklin-autumn-lake.jpg";
import sShelburneFalls from "../assets/photos/stock/stock-county-hampden-river-mill-falls.jpg";
import sHampshire from "../assets/photos/stock/stock-county-hampshire-valley-aerial.jpg";
import sMiddlesex from "../assets/photos/stock/stock-county-middlesex-cambridge-houses.jpg";
import sNantucket from "../assets/photos/stock/stock-county-nantucket-harbor.jpg";
import sNorfolk from "../assets/photos/stock/stock-county-norfolk-quincy-pier.jpg";
import sPlymouth from "../assets/photos/stock/stock-county-plymouth-mayflower.jpg";
import sSuffolk from "../assets/photos/stock/stock-county-suffolk-boston-skyline.jpg";
import sWorcester from "../assets/photos/stock/stock-county-worcester-downtown-brick.jpg";
import sDoorBeige from "../assets/photos/stock/stock-door-beige-double-house.jpg";
import sDoorGlassGrid from "../assets/photos/stock/stock-door-black-windows-facade.jpg";
import sDoorDetached from "../assets/photos/stock/stock-door-detached-garage-driveway.jpg";
import sDoorOpenCars from "../assets/photos/stock/stock-door-house-two-cars-inside.jpg";
import sDoorModernHouse from "../assets/photos/stock/stock-door-modern-house-two-windows.jpg";
import sDoorWoodPlanks from "../assets/photos/stock/stock-door-modern-wood-planks.jpg";
import sDoorRusty from "../assets/photos/stock/stock-door-rusty-old.jpg";
import sDoorWhiteWindows from "../assets/photos/stock/stock-door-white-carriage-windows-brick.jpg";
import sDoorWhiteDouble from "../assets/photos/stock/stock-door-white-double-carriage.jpg";
import sBostonCommon from "../assets/photos/stock/stock-ma-boston-common-skyline.jpg";
import sCapeCottage from "../assets/photos/stock/stock-ma-cape-cottage-green-garage.jpg";
import sCoastalShingle from "../assets/photos/stock/stock-ma-coastal-shingle-house.jpg";
import sColonialGarage from "../assets/photos/stock/stock-ma-colonial-garage-autumn.jpg";
import sColonialWhite from "../assets/photos/stock/stock-ma-colonial-white-house.jpg";
import sOakBluffs from "../assets/photos/stock/stock-ma-oak-bluffs-houses.jpg";
import sRedBarn from "../assets/photos/stock/stock-ma-red-barn-garage-doors.jpg";
import sClipboard from "../assets/photos/stock/stock-quote-clipboard-writing.jpg";
import sSmartLock from "../assets/photos/stock/stock-smart-phone-app.jpg";
import sWinterAerial from "../assets/photos/stock/stock-winter-aerial-suburb-snow.jpg";
import sWinterDoor from "../assets/photos/stock/stock-winter-garage-door-snowfall.jpg";
import sWinterHouse from "../assets/photos/stock/stock-winter-house-snow.jpg";
import sSnowblower from "../assets/photos/stock/stock-winter-snowy-park.jpg";

export type ImageCategory =
  | "repair"
  | "spring"
  | "opener"
  | "cable-track"
  | "installation"
  | "commercial"
  | "team"
  | "before-after"
  | "process"
  | "stock"
  | "county";

export type ImageProvenance = "real" | "ai-model" | "stock";

export interface SiteImage {
  id: string;
  src: ImageMetadata;
  mobileSrc?: ImageMetadata;
  alt: string;
  category: ImageCategory;
  provenance: ImageProvenance;
  orientation: "landscape" | "portrait" | "square";
  focalPointDesktop?: string;
  focalPointMobile?: string;
  /** Stock only: the photographer's published location, verified 2026-09-17. */
  location?: string;
  approved: boolean;
}

const stock = (
  id: string,
  src: ImageMetadata,
  alt: string,
  opts: Partial<Pick<SiteImage, "category" | "orientation" | "focalPointDesktop" | "focalPointMobile" | "location">> = {},
): SiteImage => ({
  id,
  src,
  alt,
  category: opts.category ?? "stock",
  provenance: "stock",
  orientation: opts.orientation ?? "landscape",
  focalPointDesktop: opts.focalPointDesktop ?? "50% 50%",
  focalPointMobile: opts.focalPointMobile ?? "50% 50%",
  location: opts.location,
  approved: true,
});

export const siteImages: SiteImage[] = [
  // --- heroes / repair scenes ---
  { id: "hero-active-repair", src: heroActiveDesktop, mobileSrc: heroActiveMobile, alt: "EZ Garage Doors technician repairing the torsion system of a residential garage door", category: "repair", provenance: "ai-model", orientation: "landscape", focalPointDesktop: "72% 30%", focalPointMobile: "24% 20%", approved: true },
  { id: "hero-problem-door", src: heroProblemDesktop, mobileSrc: heroProblemMobile, alt: "Worn residential garage door with an uneven bottom edge at a Massachusetts home", category: "repair", provenance: "real", orientation: "landscape", focalPointDesktop: "28% 55%", focalPointMobile: "40% 60%", approved: true },
  { id: "walkthrough", src: walkthrough, alt: "Technician working at a garage door torsion assembly while the homeowner watches", category: "repair", provenance: "ai-model", orientation: "landscape", focalPointDesktop: "70% 30%", approved: true },
  { id: "stuck-repair", src: stuckRepair, alt: "Technician freeing a stuck garage door roller and track", category: "cable-track", provenance: "ai-model", orientation: "landscape", focalPointDesktop: "45% 40%", approved: true },
  // --- springs ---
  { id: "broken-spring", src: brokenSpring, alt: "Snapped garage door torsion spring with a visible gap in the coil", category: "spring", provenance: "real", orientation: "landscape", approved: true },
  { id: "new-springs", src: newSprings, alt: "New torsion springs installed above a garage door", category: "spring", provenance: "real", orientation: "landscape", approved: true },
  { id: "spring-winding", src: springWinding, alt: "Technician winding a garage door torsion spring with winding bars", category: "spring", provenance: "ai-model", orientation: "landscape", focalPointDesktop: "55% 35%", approved: true },
  { id: "spring-safety", src: springSafety, alt: "Technician with safety glasses winding garage door spring bars", category: "spring", provenance: "ai-model", orientation: "landscape", focalPointDesktop: "50% 30%", approved: true },
  // --- opener ---
  /* NOTE (2026-08-18 visual audit): this photo includes a technician
     MODEL reaching for the release cord — illustrative positions only. */
  { id: "opener-rail", src: openerRail, alt: "Garage door opener rail, trolley, and red emergency release cord", category: "opener", provenance: "ai-model", orientation: "landscape", focalPointDesktop: "50% 45%", approved: true },
  // --- process / team ---
  { id: "quote-tablet", src: quoteTablet, alt: "Technician showing a written garage door repair quote on a tablet to a customer", category: "process", provenance: "ai-model", orientation: "landscape", focalPointDesktop: "50% 30%", approved: true },
  { id: "repair-tech-van", src: repairTechVan, alt: "Garage door repair technician with tool bag beside an EZ Garage Doors van", category: "team", provenance: "ai-model", orientation: "landscape", focalPointDesktop: "40% 30%", approved: true },
  { id: "tech-arrival", src: techArrival, alt: "Technician stepping out of an EZ Garage Doors service van with a tool bag", category: "team", provenance: "ai-model", orientation: "landscape", focalPointDesktop: "45% 35%", approved: true },
  { id: "van-arrival", src: vanArrival, alt: "EZ Garage Doors service van arriving at a Massachusetts home", category: "team", provenance: "ai-model", orientation: "landscape", focalPointDesktop: "50% 40%", approved: true },
  { id: "van-front", src: vanFront, alt: "EZ Garage Doors service van with ladder racks", category: "team", provenance: "real", orientation: "landscape", approved: true },
  { id: "team-van", src: teamVan, alt: "EZ Garage Doors crew in front of a branded service van", category: "team", provenance: "ai-model", orientation: "landscape", focalPointDesktop: "50% 30%", approved: true },
  { id: "carry-panel", src: carryPanel, alt: "Technician carrying a new garage door section during installation", category: "installation", provenance: "ai-model", orientation: "landscape", focalPointDesktop: "50% 35%", approved: true },
  // --- finished doors ---
  { id: "door-charcoal", src: doorCharcoal, alt: "Charcoal recessed-panel garage door installed", category: "installation", provenance: "real", orientation: "landscape", approved: true },
  { id: "door-carriage", src: doorCarriage, alt: "Cream carriage house garage door with black hardware", category: "installation", provenance: "real", orientation: "landscape", approved: true },
  { id: "door-steel", src: doorSteel, alt: "White flush-panel insulated steel garage door", category: "installation", provenance: "real", orientation: "landscape", approved: true },
  { id: "door-black-windows", src: doorBlackWin, alt: "Black modern garage door with vertical windows", category: "installation", provenance: "real", orientation: "landscape", approved: true },
  { id: "door-white-carriage", src: doorWhiteCarriage, alt: "White carriage-style garage door with grille windows", category: "installation", provenance: "real", orientation: "landscape", approved: true },
  { id: "door-wood", src: doorWood, alt: "Walnut wood-look garage door with windows", category: "installation", provenance: "real", orientation: "landscape", approved: true },
  // --- before / after ---
  { id: "before-old-wood", src: beforeOldWood, alt: "Aged white wooden garage door before replacement", category: "before-after", provenance: "real", orientation: "landscape", approved: true },
  { id: "after-white-long", src: afterWhiteLong, alt: "New white long-panel garage door with windows after replacement", category: "before-after", provenance: "real", orientation: "landscape", approved: true },
  { id: "before-faded-beige", src: beforeFadedBeige, alt: "Faded beige garage door before replacement", category: "before-after", provenance: "real", orientation: "landscape", approved: true },
  { id: "after-black-long", src: afterBlackLong, alt: "New black long-panel garage door with windows after replacement", category: "before-after", provenance: "real", orientation: "landscape", approved: true },
  { id: "before-worn-single", src: beforeWornSingle, alt: "Worn single garage door before replacement", category: "before-after", provenance: "real", orientation: "landscape", approved: true },
  { id: "after-white-raised", src: afterWhiteRaised, alt: "New white raised-panel garage door after replacement", category: "before-after", provenance: "real", orientation: "landscape", approved: true },
  { id: "before-dirty-beige", src: beforeDirtyBeige, alt: "Worn beige garage door with uneven bottom edge before service", category: "before-after", provenance: "real", orientation: "landscape", focalPointDesktop: "28% 55%", approved: true },
  { id: "after-dark-bronze", src: afterDarkBronze, alt: "New dark bronze panel garage door after replacement", category: "before-after", provenance: "real", orientation: "landscape", approved: true },

  // ================= STOCK — illustrative only =================
  // --- county / region (every location verified against the photographer's page) ---
  stock("county-barnstable-cape-cod-lighthouse", sBarnstable, "Red-and-white lighthouse above the dunes on Cape Cod", { category: "county", focalPointDesktop: "60% 40%", focalPointMobile: "60% 40%", location: "Cape Cod, MA" }),
  stock("county-berkshire-autumn-house", sBerkshire, "White house under autumn trees in the Berkshires", { category: "county", focalPointDesktop: "60% 65%", location: "Sandisfield, MA" }),
  stock("county-bristol-new-bedford-harbor", sBristol, "Fishing fleet and waterfront at New Bedford harbor", { category: "county", focalPointDesktop: "50% 55%", location: "New Bedford, MA" }),
  stock("county-dukes-edgartown-lighthouse", sDukes, "White lighthouse on the beach at Edgartown, Martha's Vineyard", { category: "county", focalPointDesktop: "60% 40%", focalPointMobile: "60% 40%", location: "Edgartown, MA" }),
  stock("county-essex-gloucester-harbor", sEssex, "Historic red paint manufactory building on Gloucester Harbor", { category: "county", focalPointDesktop: "55% 50%", location: "Gloucester, MA" }),
  stock("county-franklin-shelburne-falls", sShelburneFalls, "River falls beside a red mill building at Shelburne Falls in autumn", { category: "county", focalPointDesktop: "50% 55%", location: "Shelburne Falls, MA" }),
  stock("county-hampshire-northampton-aerial", sHampshire, "Aerial view of a road through wooded hills near Northampton", { category: "county", location: "Northampton, MA" }),
  stock("county-middlesex-cambridge-houses", sMiddlesex, "Row of colorful wood-frame houses on a Cambridge street", { category: "county", focalPointDesktop: "40% 45%", location: "Cambridge, MA" }),
  stock("county-nantucket-harbor", sNantucket, "Gray-shingled houses along the water on Nantucket", { category: "county", focalPointDesktop: "60% 45%", location: "Nantucket, MA" }),
  stock("county-norfolk-quincy-pier", sNorfolk, "Pier stretching over the bay in Quincy", { category: "county", orientation: "square", focalPointDesktop: "50% 48%", location: "Quincy, MA" }),
  stock("county-plymouth-mayflower", sPlymouth, "Tall ship moored at the pier in Plymouth harbor", { category: "county", location: "Plymouth, MA" }),
  stock("county-suffolk-boston-skyline", sSuffolk, "Boston skyline across the Charles River on a clear day", { category: "county", focalPointDesktop: "50% 60%", location: "Boston, MA" }),
  stock("county-worcester-downtown-brick", sWorcester, "Red-brick buildings at a downtown Worcester intersection", { category: "county", focalPointDesktop: "50% 25%", focalPointMobile: "50% 25%", location: "Worcester, MA" }),
  /* No Hampden County photo exists in the set (the file the brief labeled
     "Hampden" is Shelburne Falls, Franklin County). Hampden uses this
     place-neutral garage scene until a real Hampden photo is supplied. */
  stock("red-barn-garage-doors", sRedBarn, "Red barn with two white garage doors behind a wooden fence", { focalPointDesktop: "62% 60%", location: "unpublished" }),
  // --- Massachusetts housing / seasons ---
  stock("wachusett-autumn-pond", sWachusett, "Fall foliage around a calm pond at Wachusett Mountain", { location: "Princeton, MA" }),
  stock("ma-boston-common-skyline", sBostonCommon, "Back Bay skyline seen from Boston Common", { focalPointDesktop: "50% 40%", location: "Boston, MA" }),
  stock("ma-oak-bluffs-houses", sOakBluffs, "Victorian gingerbread cottages on Martha's Vineyard", { location: "Martha's Vineyard, MA" }),
  stock("ma-colonial-garage-autumn", sColonialGarage, "White colonial homes on a suburban street in autumn", { focalPointDesktop: "65% 55%", location: "Boston, MA" }),
  stock("ma-colonial-white-house", sColonialWhite, "White colonial house with black shutters behind a hedge", { location: "New England (state unpublished)" }),
  stock("ma-cape-cottage-green-garage", sCapeCottage, "Shingled Cape Cod outbuilding with green carriage-style garage doors", { focalPointDesktop: "45% 55%", location: "Chatham, MA" }),
  stock("ma-coastal-shingle-house", sCoastalShingle, "Gray-shingle house with blue hydrangeas in Chatham", { location: "Chatham, MA" }),
  stock("winter-garage-door-snowfall", sWinterDoor, "Green paneled garage door during a snowfall"),
  stock("winter-house-snow", sWinterHouse, "Two-story house with shutters on a snowy street", { orientation: "portrait", focalPointDesktop: "50% 60%" }),
  stock("winter-aerial-suburb-snow", sWinterAerial, "Aerial view of snow-dusted suburban homes with garages"),
  stock("winter-snowblower-driveway", sSnowblower, "Person clearing snow with a snowblower in front of a brick colonial house", { orientation: "portrait", focalPointDesktop: "50% 78%", focalPointMobile: "50% 78%" }),
  // --- residential doors & garages ---
  stock("door-modern-house-two-windows", sDoorModernHouse, "White modern house with two dark glass-panel garage doors", { focalPointDesktop: "50% 65%" }),
  stock("door-modern-wood-planks", sDoorWoodPlanks, "Modern horizontal wood-plank garage door with slim windows"),
  stock("door-glass-grid-facade", sDoorGlassGrid, "Frosted-glass garage door with a full window grid on a dark brick wall"),
  stock("door-white-windows-top-row", sDoorWhiteWindows, "White raised-panel garage door with a top row of windows"),
  stock("door-white-double-carriage", sDoorWhiteDouble, "Two pairs of white carriage-style garage doors under a tiled roof"),
  stock("door-beige-double-house", sDoorBeige, "Beige double-wide garage door on a shingled house"),
  stock("door-open-garage-cars", sDoorOpenCars, "Open two-bay garage with cars inside a stone-fronted house"),
  stock("door-detached-garage-driveway", sDoorDetached, "Small detached garage with a white raised-panel door", { orientation: "portrait", focalPointDesktop: "50% 62%" }),
  stock("door-rusty-old", sDoorRusty, "Old rusted steel garage door on a stucco wall", { orientation: "portrait", focalPointDesktop: "50% 55%" }),
  stock("cable-drum-closeup", sCableDrum, "Close-up of steel lift cable wound on a garage door cable drum"),
  // --- commercial ---
  stock("commercial-loading-docks-blue", sDocksBlue, "Row of loading dock doors on a commercial building", { category: "commercial", focalPointDesktop: "50% 60%" }),
  stock("commercial-loading-docks-red", sDocksRed, "Numbered loading dock doors on a red-and-white warehouse wall", { category: "commercial" }),
  stock("commercial-rolling-steel-black", sRollingBlack, "Closed rolling steel service door on a brick commercial building", { category: "commercial" }),
  stock("commercial-rolling-steel-gray", sRollingGray, "Gray rolling steel door, closed, on a commercial building", { category: "commercial" }),
  stock("commercial-roller-shutters-numbered", sShuttersNumbered, "Three blue roll-up doors numbered 9, 8, and 7", { category: "commercial" }),
  stock("condo-parking-garage-gate", sCondoGate, "Parking garage entrance gate on a multi-family building", { category: "commercial", orientation: "portrait", focalPointDesktop: "40% 78%" }),
  // --- process / trust ---
  stock("contact-woman-phone", sContactPhone, "Woman smiling while talking on the phone at home", { category: "process", focalPointDesktop: "60% 35%" }),
  stock("handshake-porch", sHandshake, "Two people shaking hands on the porch of a dark-sided house", { category: "process", focalPointDesktop: "35% 35%" }),
  stock("clipboard-sketch", sClipboard, "Hand sketching on a clipboard", { category: "process" }),
  stock("smart-lock-phone-app", sSmartLock, "Hand holding a phone with a smart-lock app beside a smart lock on a door", { category: "process" }),
];

/**
 * Excluded stock files (kept in Brand/photos/stock/, never imported):
 * - stock-commercial-sectional-door-bw.jpg  → third-party logos on the door
 *   ("Electric Cars", "Automotive", BOVAG) — same rule that rejected earlier assets.
 * - stock-ma-aerial-autumn-neighborhood.jpg → photographer tags it Connecticut.
 * - stock-ma-historic-street-houses.jpg     → Portsmouth, NH.
 * - stock-ma-autumn-street.jpg              → Trois-Rivières, Quebec.
 * Unassigned alternates (ingest when a page needs them): stock-ma-river-town-houses.jpg
 *   (Turners Falls, Franklin County — verified).
 * stock-commercial-rolling-steel-black.jpg is ingested with a 10% side crop
 * to drop a legible third-party warning sign.
 */

/**
 * Read image metadata WITHOUT marking the original file as referenced.
 * Astro wraps every imported image in a Proxy and keeps the full-size
 * original in dist/ as soon as any field (src, width, …) is touched; only
 * `clone` and `fsPath` are exempt. Always go through peek() for metadata.
 */
export const peek = (m: ImageMetadata): ImageMetadata =>
  (m as unknown as { clone?: ImageMetadata }).clone ?? m;

const fsPathOf = (m: ImageMetadata): string | undefined => (m as unknown as { fsPath?: string }).fsPath;

export function img(id: string): SiteImage {
  const found = siteImages.find((i) => i.id === id && i.approved);
  if (!found) throw new Error(`site-images: no approved image with id "${id}"`);
  return found;
}

/** Proof modules call this: only EZ's own photographs may appear as proof. */
export function realImg(id: string, module: string): SiteImage {
  const found = img(id);
  if (found.provenance !== "real") {
    throw new Error(`${module}: image "${id}" is ${found.provenance} — proof modules accept provenance "real" only`);
  }
  return found;
}

/** Same gate for components that receive imported ImageMetadata instead of ids. */
export function assertRealMeta(meta: ImageMetadata, module: string): void {
  const key = fsPathOf(meta) ?? peek(meta).src;
  const same = (m?: ImageMetadata) => !!m && (fsPathOf(m) ?? peek(m).src) === key;
  const found = siteImages.find((i) => same(i.src) || same(i.mobileSrc));
  if (!found) throw new Error(`${module}: image ${key} is not in the site-images manifest`);
  if (found.provenance !== "real") {
    throw new Error(`${module}: image "${found.id}" is ${found.provenance} — proof modules accept provenance "real" only`);
  }
}

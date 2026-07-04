/**
 * Brand logo manifest — single source of truth for every logo asset.
 * The moving rail may use ONLY opener/door/hardware brands; review and
 * directory platforms are restricted to static proof blocks near CTAs.
 *
 * All assets originate from the owner-supplied Brand/general/ folder,
 * audited and reprocessed (see ASSET-INVENTORY.md). Add a new logo by
 * dropping the processed .webp into src/assets/trust-logos/ and adding
 * one entry here — components read this manifest, nothing is hardcoded.
 */
import type { ImageMetadata } from "astro";

import googleLogo from "../assets/trust-logos/review-platforms/google-logo.webp";
import yelpLogo from "../assets/trust-logos/review-platforms/yelp-logo.webp";
import angiLogo from "../assets/trust-logos/review-platforms/angi-logo.webp";
import thumbtackLogo from "../assets/trust-logos/review-platforms/thumbtack-logo.webp";
import liftmasterLogo from "../assets/trust-logos/opener-brands/liftmaster-logo.webp";
import chamberlainLogo from "../assets/trust-logos/opener-brands/chamberlain-logo.webp";
import genieLogo from "../assets/trust-logos/opener-brands/genie-logo.webp";
import craftsmanLogo from "../assets/trust-logos/opener-brands/craftsman-logo.webp";
import linearLogo from "../assets/trust-logos/opener-brands/linear-logo.webp";
import sommerLogo from "../assets/trust-logos/opener-brands/sommer-logo.webp";
import clopayLogo from "../assets/trust-logos/door-brands/clopay-logo.webp";
import amarrLogo from "../assets/trust-logos/door-brands/amarr-logo.webp";
import haasLogo from "../assets/trust-logos/door-brands/haas-logo.webp";
import wayneDaltonLogo from "../assets/trust-logos/door-brands/wayne-dalton-logo.webp";
import raynorLogo from "../assets/trust-logos/door-brands/raynor-logo.webp";
import chiLogo from "../assets/trust-logos/door-brands/chi-logo.webp";
import hormannLogo from "../assets/trust-logos/door-brands/hormann-logo.webp";

export type BrandCategory =
  | "opener-brand"
  | "door-brand"
  | "hardware-brand"
  | "review-platform"
  | "directory-platform";

export interface BrandLogo {
  id: string;
  name: string;
  src: ImageMetadata;
  category: BrandCategory;
  alt: string;
  /** Normalized visual height in px (per-logo, to equalize perceived weight). */
  railHeight: number;
  enabled: boolean;
}

export const brandLogos: BrandLogo[] = [
  // ---- Review platforms (STATIC proof blocks only — never in the rail) ----
  { id: "google", name: "Google", src: googleLogo, category: "review-platform", alt: "Google reviews platform logo", railHeight: 24, enabled: true },
  { id: "yelp", name: "Yelp", src: yelpLogo, category: "review-platform", alt: "Yelp reviews platform logo", railHeight: 26, enabled: true },
  { id: "angi", name: "Angi", src: angiLogo, category: "review-platform", alt: "Angi reviews platform logo", railHeight: 26, enabled: true },
  { id: "thumbtack", name: "Thumbtack", src: thumbtackLogo, category: "review-platform", alt: "Thumbtack reviews platform logo", railHeight: 18, enabled: true },

  // ---- Opener brands ----
  { id: "liftmaster", name: "LiftMaster", src: liftmasterLogo, category: "opener-brand", alt: "LiftMaster garage door opener brand logo", railHeight: 26, enabled: true },
  { id: "chamberlain", name: "Chamberlain", src: chamberlainLogo, category: "opener-brand", alt: "Chamberlain garage door opener brand logo", railHeight: 16, enabled: true },
  { id: "genie", name: "Genie", src: genieLogo, category: "opener-brand", alt: "Genie garage door opener brand logo", railHeight: 32, enabled: true },
  { id: "craftsman", name: "Craftsman", src: craftsmanLogo, category: "opener-brand", alt: "Craftsman garage door opener brand logo", railHeight: 26, enabled: true },
  { id: "linear", name: "Linear", src: linearLogo, category: "opener-brand", alt: "Linear garage door opener brand logo", railHeight: 24, enabled: true },
  { id: "sommer", name: "SOMMER", src: sommerLogo, category: "opener-brand", alt: "SOMMER garage door opener brand logo", railHeight: 26, enabled: true },

  // ---- Door brands ----
  { id: "clopay", name: "Clopay", src: clopayLogo, category: "door-brand", alt: "Clopay garage door brand logo", railHeight: 34, enabled: true },
  { id: "amarr", name: "Amarr", src: amarrLogo, category: "door-brand", alt: "Amarr garage door brand logo", railHeight: 28, enabled: true },
  { id: "haas", name: "Haas Door", src: haasLogo, category: "door-brand", alt: "Haas Door garage door brand logo", railHeight: 36, enabled: true },
  { id: "wayne-dalton", name: "Wayne Dalton", src: wayneDaltonLogo, category: "door-brand", alt: "Wayne Dalton garage door brand logo", railHeight: 32, enabled: true },
  { id: "raynor", name: "Raynor", src: raynorLogo, category: "door-brand", alt: "Raynor garage door brand logo", railHeight: 22, enabled: true },
  { id: "chi", name: "C.H.I.", src: chiLogo, category: "door-brand", alt: "C.H.I. garage door brand logo", railHeight: 26, enabled: true },
  { id: "hormann", name: "Hörmann", src: hormannLogo, category: "door-brand", alt: "Hörmann garage door brand logo", railHeight: 26, enabled: true },
];

export const railLogos = brandLogos.filter(
  (l) =>
    l.enabled &&
    (l.category === "opener-brand" || l.category === "door-brand" || l.category === "hardware-brand"),
);

export const reviewPlatformLogos = brandLogos.filter(
  (l) => l.enabled && l.category === "review-platform",
);

/**
 * Excluded source files (audit record — do not add):
 * - rynor.png            → "AUTHORIZED DEALER" baked in; replaced by cropped raynor-logo.webp
 * - lifmaster.jpg        → truncated wordmark; superseded by images.png extraction
 * - safeway.png          → right edge cropped mid-word; unusable
 * - chaimbrlane.png      → superseded by newer Chamberlain.png lockup
 * - 5 star.jpg           → decorative stars, not a brand logo (used only as accent art)
 * - No assets yet: Marantec, Guardian, Skylink, DoorLink, Northwest Door, Ideal Door,
 *   Garaga, Martin Door, DAB Door, Windsor Door — add here when owner supplies files.
 */

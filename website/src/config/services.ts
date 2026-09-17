/**
 * Service taxonomy — the A1-style tree, flattened to stable root URLs.
 * Used by the nav, footer, service grids, sidebars, and Service schema.
 *
 * `core` services have hand-built pages in src/pages/. `data` services
 * render through the src/pages/[service].astro template from the content
 * in service-pages.ts. Every URL is root-level and stable; no URL that
 * existed before 2026-09-17 has changed.
 */

export type ServiceGroup = "repair" | "opener" | "install" | "maintenance" | "commercial";

export interface Service {
  slug: string;
  title: string;
  short: string;
  /** One-line concrete description — no marketing filler. */
  blurb: string;
  urgency: "emergency" | "repair" | "project" | "commercial";
  group: ServiceGroup;
  /** Hand-built page (core) or template-rendered from service-pages.ts (data). */
  kind: "core" | "data";
  /** Show in the primary nav dropdowns / home service grid. */
  featured?: boolean;
}

export const SERVICE_GROUPS: { id: ServiceGroup; label: string; hub: string; blurb: string }[] = [
  { id: "repair", label: "Garage Door Repair", hub: "/garage-door-repair/", blurb: "Springs, cables, rollers, tracks, panels, and stuck doors." },
  { id: "opener", label: "Garage Door Openers", hub: "/garage-door-openers/", blurb: "Repair, replacement, installation, remotes, keypads, and sensors." },
  { id: "install", label: "New Garage Doors", hub: "/garage-door-installation/", blurb: "Installation, replacement, styles, and what sets the price." },
  { id: "maintenance", label: "Maintenance", hub: "/garage-door-tune-up/", blurb: "Tune-ups, inspections, weatherstripping, and noise fixes." },
  { id: "commercial", label: "Commercial", hub: "/commercial-garage-door-repair/", blurb: "Overhead, rolling steel, and dock doors for businesses." },
];

export const services: Service[] = [
  // ---- Repair ----
  { slug: "garage-door-repair", title: "Garage Door Repair", short: "Repair", blurb: "Springs, cables, rollers, tracks, and stuck doors diagnosed and repaired.", urgency: "repair", group: "repair", kind: "core", featured: true },
  { slug: "broken-spring-repair", title: "Broken Spring Repair", short: "Springs", blurb: "Torsion and extension spring replacement with a written quote before work.", urgency: "repair", group: "repair", kind: "core", featured: true },
  { slug: "garage-door-cable-repair", title: "Cable Repair & Replacement", short: "Cables", blurb: "Snapped or slipped lift cables replaced and the door re-balanced.", urgency: "repair", group: "repair", kind: "core" },
  { slug: "garage-door-off-track-repair", title: "Off-Track Door Repair", short: "Off-Track", blurb: "Door came off its track — secured, realigned, and rolling straight again.", urgency: "repair", group: "repair", kind: "core", featured: true },
  { slug: "emergency-garage-door-repair", title: "Emergency Garage Door Repair", short: "Emergency", blurb: "Door stuck open, off track, or won't close — fast local response.", urgency: "emergency", group: "repair", kind: "core", featured: true },
  { slug: "garage-door-roller-replacement", title: "Roller Replacement", short: "Rollers", blurb: "Worn, cracked, or seized rollers replaced — quieter, smoother travel.", urgency: "repair", group: "repair", kind: "data" },
  { slug: "garage-door-track-repair", title: "Track Repair & Replacement", short: "Tracks", blurb: "Bent, rusted, or misaligned tracks trued or replaced.", urgency: "repair", group: "repair", kind: "data" },
  { slug: "garage-door-panel-replacement", title: "Panel Replacement", short: "Panels", blurb: "One damaged section replaced instead of the whole door — when it makes sense.", urgency: "repair", group: "repair", kind: "data" },
  { slug: "garage-door-drum-replacement", title: "Cable Drum Replacement", short: "Drums", blurb: "Cracked or worn cable drums replaced and cables re-seated.", urgency: "repair", group: "repair", kind: "data" },
  { slug: "garage-door-hinge-replacement", title: "Hinge Replacement", short: "Hinges", blurb: "Cracked or bent hinges replaced before a panel folds.", urgency: "repair", group: "repair", kind: "data" },
  { slug: "garage-door-wont-close", title: "Garage Door Won't Close", short: "Won't Close", blurb: "Reversing, stopping short, or stuck open — diagnosed and fixed.", urgency: "repair", group: "repair", kind: "data", featured: true },
  { slug: "garage-door-wont-open", title: "Garage Door Won't Open", short: "Won't Open", blurb: "Dead opener, broken spring, or a jammed door — find the real cause.", urgency: "repair", group: "repair", kind: "data", featured: true },
  { slug: "garage-door-safety-sensor-repair", title: "Safety Sensor Repair", short: "Sensors", blurb: "Blinking, misaligned, or failed photo eyes fixed so the door closes.", urgency: "repair", group: "opener", kind: "data" },
  { slug: "same-day-garage-door-service", title: "Fast Local Garage Door Service", short: "Fast Service", blurb: "Call for today's availability across Massachusetts.", urgency: "emergency", group: "repair", kind: "core" },

  // ---- Openers ----
  { slug: "garage-door-opener-repair", title: "Opener Repair & Replacement", short: "Openers", blurb: "Openers, remotes, keypads, and safety sensors — repair vs. replace, explained.", urgency: "repair", group: "opener", kind: "core", featured: true },
  { slug: "garage-door-opener-installation", title: "Opener Installation", short: "New Opener", blurb: "Belt, chain, and wall-mount openers installed and programmed.", urgency: "project", group: "opener", kind: "data", featured: true },
  { slug: "garage-door-remote-programming", title: "Remotes & Keypads", short: "Remotes", blurb: "Remotes, keypads, and wall buttons re-paired, programmed, or replaced.", urgency: "repair", group: "opener", kind: "data" },
  { slug: "smart-garage-door-opener", title: "Smart Openers", short: "Smart", blurb: "Wi-Fi openers and app control — installed, connected, and explained.", urgency: "project", group: "opener", kind: "data" },

  // ---- New doors ----
  { slug: "garage-door-installation", title: "New Garage Door Installation", short: "Installation", blurb: "New doors installed: steel, insulated, carriage house, modern, wood-look.", urgency: "project", group: "install", kind: "core", featured: true },
  { slug: "garage-door-replacement", title: "Garage Door Replacement", short: "Replacement", blurb: "Old door out, new door in — sizing, style, insulation, and hardware handled.", urgency: "project", group: "install", kind: "core", featured: true },
  { slug: "garage-door-replacement-cost", title: "What a New Door Costs", short: "Cost Guide", blurb: "The seven things that set the price of a new garage door.", urgency: "project", group: "install", kind: "core" },

  // ---- Maintenance ----
  { slug: "garage-door-tune-up", title: "Tune-Up & Safety Inspection", short: "Tune-Up", blurb: "Balance, lubrication, hardware check, and opener safety test.", urgency: "project", group: "maintenance", kind: "data", featured: true },
  { slug: "garage-door-weatherstripping", title: "Weatherstripping & Seals", short: "Seals", blurb: "Bottom seals, side and top seals, and thresholds replaced.", urgency: "project", group: "maintenance", kind: "data" },
  { slug: "noisy-garage-door-repair", title: "Noisy Garage Door Repair", short: "Noise", blurb: "Grinding, squealing, banging, and rattling traced to the part that's causing it.", urgency: "repair", group: "maintenance", kind: "data" },

  // ---- Commercial ----
  { slug: "commercial-garage-door-repair", title: "Commercial Garage Door Repair", short: "Commercial", blurb: "Overhead and rolling door service for business properties where downtime matters.", urgency: "commercial", group: "commercial", kind: "core", featured: true },
  { slug: "commercial-garage-door-maintenance", title: "Commercial Door Maintenance", short: "Commercial PM", blurb: "Scheduled inspection and service for high-cycle doors, documented per door.", urgency: "commercial", group: "commercial", kind: "data" },
];

export const emergencyService = {
  slug: "emergency-garage-door-repair",
  title: "Emergency Garage Door Repair",
  blurb: "Door stuck open, off track, or won't close — fast local response.",
};

export const serviceBySlug = (slug: string): Service | undefined => services.find((s) => s.slug === slug);
export const servicesInGroup = (group: ServiceGroup): Service[] => services.filter((s) => s.group === group);
export const featuredServices = services.filter((s) => s.featured);
export const dataServices = services.filter((s) => s.kind === "data");

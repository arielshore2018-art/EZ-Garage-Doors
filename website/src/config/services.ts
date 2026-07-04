/**
 * Service definitions used by the service router, nav, footer,
 * and Service schema.
 */

export interface Service {
  slug: string;
  title: string;
  short: string;
  /** One-line concrete description — no marketing filler. */
  blurb: string;
  urgency: "emergency" | "repair" | "project" | "commercial";
}

export const services: Service[] = [
  {
    slug: "garage-door-repair",
    title: "Garage Door Repair",
    short: "Repair",
    blurb: "Springs, cables, rollers, tracks, and stuck doors diagnosed and repaired.",
    urgency: "repair",
  },
  {
    slug: "broken-spring-repair",
    title: "Broken Spring Repair",
    short: "Springs",
    blurb: "Torsion and extension spring replacement with a written quote before work.",
    urgency: "repair",
  },
  {
    slug: "garage-door-opener-repair",
    title: "Opener Repair & Replacement",
    short: "Openers",
    blurb: "Openers, remotes, keypads, and safety sensors — repair vs. replace, explained.",
    urgency: "repair",
  },
  {
    slug: "garage-door-cable-repair",
    title: "Cable / Roller / Track Repair",
    short: "Cables & Tracks",
    blurb: "Snapped cables, worn rollers, bent tracks, and uneven movement fixed.",
    urgency: "repair",
  },
  {
    slug: "garage-door-off-track-repair",
    title: "Off-Track Door Repair",
    short: "Off-Track",
    blurb: "Door came off its track — secured, realigned, and rolling straight again.",
    urgency: "repair",
  },
  {
    slug: "garage-door-installation",
    title: "New Garage Door Installation",
    short: "Installation",
    blurb: "New doors installed: steel, insulated, carriage house, modern, wood-look.",
    urgency: "project",
  },
  {
    slug: "garage-door-replacement",
    title: "Garage Door Replacement",
    short: "Replacement",
    blurb: "Old door out, new door in — sizing, style, insulation, and hardware handled.",
    urgency: "project",
  },
  {
    slug: "commercial-garage-door-repair",
    title: "Commercial Garage Door Repair",
    short: "Commercial",
    blurb: "Overhead and rolling door service for business properties where downtime matters.",
    urgency: "commercial",
  },
];

export const emergencyService = {
  slug: "emergency-garage-door-repair",
  title: "Emergency Garage Door Repair",
  blurb: "Door stuck open, off track, or won't close — fast local response.",
};

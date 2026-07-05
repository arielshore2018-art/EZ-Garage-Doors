/**
 * PPC landing-page configuration. These are paid-traffic pages:
 * noindex, excluded from the sitemap, no site navigation, one goal.
 * One renderer consumes this config — pages are NOT hand-duplicated,
 * and content varies by real fields (nearby areas, hero, tracking),
 * not by token-swapping the city name alone.
 *
 * Honesty rule: localProofLine states coverage and process facts only.
 * No invented per-town job counts or fake local reviews.
 */

export interface PpcCity {
  slug: string;
  city: string;
  state: "CT";
  county?: string;
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

const SUB = "Fast local help for stuck doors, broken springs, opener problems, cables, and off-track doors.";

const city = (
  slug: string,
  cityName: string,
  county: string,
  nearbyAreas: string[],
  heroImageId: string,
): PpcCity => ({
  slug,
  city: cityName,
  state: "CT",
  county,
  nearbyAreas,
  headline: `Garage Door Repair in ${cityName}, CT`,
  subheadline: SUB,
  localProofLine: `One local Connecticut team serving ${cityName} and nearby ${nearbyAreas.slice(0, 3).join(", ")} — written quote before work begins.`,
  heroImageId,
  reviewIds: [],
  projectIds: [],
  campaignId: `ppc-gdr-${slug}`,
  enabled: true,
});

export const ppcCities: PpcCity[] = [
  city("middletown-ct", "Middletown", "Middlesex", ["Cromwell", "Portland", "Middlefield", "Durham"], "hero-problem-door"),
  city("cromwell-ct", "Cromwell", "Middlesex", ["Middletown", "Rocky Hill", "Berlin", "Portland"], "hero-active-repair"),
  city("rocky-hill-ct", "Rocky Hill", "Hartford", ["Wethersfield", "Cromwell", "Newington", "Glastonbury"], "spring-winding"),
  city("glastonbury-ct", "Glastonbury", "Hartford", ["East Hartford", "Wethersfield", "Rocky Hill", "Manchester"], "hero-problem-door"),
  city("west-hartford-ct", "West Hartford", "Hartford", ["Hartford", "Farmington", "Newington", "Bloomfield"], "hero-active-repair"),
  city("farmington-ct", "Farmington", "Hartford", ["West Hartford", "Avon", "Plainville", "Bristol"], "spring-winding"),
  city("avon-ct", "Avon", "Hartford", ["Simsbury", "Farmington", "West Hartford", "Canton"], "hero-problem-door"),
  city("simsbury-ct", "Simsbury", "Hartford", ["Avon", "Bloomfield", "Granby", "Canton"], "hero-active-repair"),
  city("wethersfield-ct", "Wethersfield", "Hartford", ["Rocky Hill", "Newington", "Hartford", "Glastonbury"], "spring-winding"),
  city("newington-ct", "Newington", "Hartford", ["Wethersfield", "West Hartford", "Rocky Hill", "Berlin"], "hero-problem-door"),
  city("berlin-ct", "Berlin", "Hartford", ["Newington", "Cromwell", "Southington", "Meriden"], "hero-active-repair"),
  city("southington-ct", "Southington", "Hartford", ["Plainville", "Berlin", "Bristol", "Cheshire"], "spring-winding"),
  city("plainville-ct", "Plainville", "Hartford", ["Southington", "Farmington", "Bristol", "New Britain"], "hero-problem-door"),
  city("south-windsor-ct", "South Windsor", "Hartford", ["Manchester", "East Hartford", "Vernon", "Windsor"], "hero-active-repair"),
  city("vernon-ct", "Vernon", "Tolland", ["Manchester", "South Windsor", "Tolland", "Ellington"], "spring-winding"),
  city("tolland-ct", "Tolland", "Tolland", ["Vernon", "Ellington", "Coventry", "Willington"], "hero-problem-door"),
];

export const enabledPpcCities = ppcCities.filter((c) => c.enabled);

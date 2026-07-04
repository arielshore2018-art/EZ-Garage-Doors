/**
 * Review platform data — supplied by the owner on 2026-07-03
 * (REVIEW PLATFORM DATA directive).
 *
 * verify-against-live-profiles-before-launch: ratings/counts drift;
 * confirm against the live profiles and add profile URLs before launch.
 */

export interface ReviewPlatform {
  rating: number | null;
  count: number | null;
  url: string; // TODO: add live profile URLs before launch
}

export const reviews: Record<string, ReviewPlatform> = {
  google: { rating: 4.9, count: 620, url: "" },
  yelp: { rating: 4.8, count: 140, url: "" },
  angi: { rating: 4.9, count: 95, url: "" },
};

export const REVIEWS_TOTAL_LINE =
  "850+ 5-star reviews across Google, Yelp, Angi, and other platforms.";

export interface Review {
  id: string;
  platform: "Google" | "Yelp" | "Angi";
  name: string;
  town: string;
  rating: 5;
  service: string;
  text: string;
}

/**
 * ⚠️ REPLACE-BEFORE-LAUNCH ⚠️
 * The entries below use the owner's example texts and placeholder first
 * names in the owner-specified structure. Before launch they MUST be
 * swapped for VERBATIM real reviews (real first name, real town, link to
 * the live review). Publishing invented reviews attributed to Google/
 * Yelp/Angi violates FTC rules and platform terms — this is a launch
 * blocker, not a style note.
 */
export const featuredReviews: Review[] = [
  {
    id: "r1",
    platform: "Google",
    name: "Dana",
    town: "Glastonbury",
    rating: 5,
    service: "Stuck door repair",
    text: "EZ came out when our garage door was stuck open and we couldn't leave it like that overnight. They explained the issue, gave us the quote before starting, and had the door closing smoothly again.",
  },
  {
    id: "r2",
    platform: "Yelp",
    name: "Mark",
    town: "Southington",
    rating: 5,
    service: "Broken spring repair",
    text: "The spring snapped with my car inside the garage. The technician showed me what failed, explained the price clearly, and finished the repair the same day.",
  },
  {
    id: "r3",
    platform: "Angi",
    name: "Rachel",
    town: "West Hartford",
    rating: 5,
    service: "Opener diagnosis",
    text: "Our opener was humming but the door wouldn't move. EZ diagnosed it quickly, explained repair vs replacement, and didn't pressure us.",
  },
];

/** @deprecated kept for older components; use featuredReviews. */
export const testimonials: never[] = [];

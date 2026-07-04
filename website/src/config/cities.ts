/**
 * Service-area cities. A city page is only PUBLISHED when it has real
 * local substance (published: true + localProof filled in). Until then it
 * appears in the service-area grid as a covered town, but no thin
 * doorway page is generated for it.
 */

export interface City {
  slug: string;
  name: string;
  /** Publish a dedicated page only when real local proof exists. */
  published: boolean;
  /** Real local content: job photos, real reviews from this town, drive-time notes. */
  localProof: {
    jobPhotos: string[];
    reviewIds: string[];
    driveTimeNote: string;
    localNotes: string;
  };
}

const proofPending = {
  jobPhotos: [],
  reviewIds: [],
  driveTimeNote: "",
  localNotes: "",
};

export const cities: City[] = [
  { slug: "middletown-ct", name: "Middletown", published: false, localProof: proofPending },
  { slug: "cromwell-ct", name: "Cromwell", published: false, localProof: proofPending },
  { slug: "rocky-hill-ct", name: "Rocky Hill", published: false, localProof: proofPending },
  { slug: "glastonbury-ct", name: "Glastonbury", published: false, localProof: proofPending },
  { slug: "west-hartford-ct", name: "West Hartford", published: false, localProof: proofPending },
  { slug: "farmington-ct", name: "Farmington", published: false, localProof: proofPending },
  { slug: "avon-ct", name: "Avon", published: false, localProof: proofPending },
  { slug: "simsbury-ct", name: "Simsbury", published: false, localProof: proofPending },
  { slug: "southington-ct", name: "Southington", published: false, localProof: proofPending },
  { slug: "berlin-ct", name: "Berlin", published: false, localProof: proofPending },
  { slug: "newington-ct", name: "Newington", published: false, localProof: proofPending },
  { slug: "wethersfield-ct", name: "Wethersfield", published: false, localProof: proofPending },
  { slug: "south-windsor-ct", name: "South Windsor", published: false, localProof: proofPending },
  { slug: "vernon-ct", name: "Vernon", published: false, localProof: proofPending },
  { slug: "tolland-ct", name: "Tolland", published: false, localProof: proofPending },
];

export const publishedCities = cities.filter((c) => c.published);

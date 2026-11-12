// Add ONLY verified, approved third-party trust badges here.
// This array is intentionally empty until NexaMed confirms eligibility,
// permission to display the logo, the link, and the current review rating.
// Example (do not enable without verification):
// { label: "Google Partner", image: "/trust/google-partner.svg", url: "https://partnersdirectory.withgoogle.com/..." }
// { label: "BBB Business Profile", image: "/trust/bbb.svg", url: "https://www.bbb.org/..." }
// { label: "Google Reviews", image: "/trust/google-reviews.svg", url: "https://maps.google.com/..." }
export type TrustCredential = { label: string; image: string; url: string; detail?: string };
export const verifiedCredentials: TrustCredential[] = [];

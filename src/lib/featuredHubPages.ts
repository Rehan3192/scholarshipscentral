export const FEATURED_HUB_PAGES = [
  {
    slug: "europe-scholarships-2026",
    href: "/europe-scholarships-2026",
    label: "Europe Hub",
  },
  {
    slug: "fully-funded-scholarships-2026",
    href: "/fully-funded-scholarships-2026",
    label: "Funding Hub",
  },
  {
    slug: "scholarships-still-open-2026",
    href: "/scholarships-still-open-2026",
    label: "Deadline Hub",
  },
] as const;

export type FeaturedHubPageConfig = (typeof FEATURED_HUB_PAGES)[number];

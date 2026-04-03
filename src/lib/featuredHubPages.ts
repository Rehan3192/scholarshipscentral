import { scholarships } from "@/data/scholarships";
import { isEuropeanScholarship, isStillOpen } from "@/lib/scholarship-taxonomy";

const europeScholarships = scholarships.filter(isEuropeanScholarship);
const fullyFundedScholarships = scholarships.filter(
  (scholarship) => scholarship.fundingType === "Fully Funded",
);
const stillOpenScholarships = scholarships.filter((scholarship) =>
  isStillOpen(scholarship.deadline),
);

const europeCountryCount = new Set(
  europeScholarships.map((scholarship) => scholarship.country),
).size;
const fullyFundedStillOpenCount = fullyFundedScholarships.filter((scholarship) =>
  isStillOpen(scholarship.deadline),
).length;
const stillOpenCountryCount = new Set(
  stillOpenScholarships.map((scholarship) => scholarship.country),
).size;

export const FEATURED_HUB_PAGES = [
  {
    slug: "europe-scholarships-2026",
    href: "/europe-scholarships-2026",
    label: "Europe Hub",
    title: "Europe Scholarships 2026",
    description: `Browse ${europeScholarships.length} Europe scholarships across ${europeCountryCount} countries, with direct paths into still-open and fully funded routes.`,
  },
  {
    slug: "fully-funded-scholarships-2026",
    href: "/fully-funded-scholarships-2026",
    label: "Funding Hub",
    title: "Fully Funded Scholarships 2026",
    description: `Explore ${fullyFundedScholarships.length} fully funded scholarships, including ${fullyFundedStillOpenCount} listings that are still open right now.`,
  },
  {
    slug: "scholarships-still-open-2026",
    href: "/scholarships-still-open-2026",
    label: "Deadline Hub",
    title: "Scholarships Still Open 2026",
    description: `Track ${stillOpenScholarships.length} scholarships with live or rolling deadlines across ${stillOpenCountryCount} countries.`,
  },
] as const;

export type FeaturedHubPageConfig = (typeof FEATURED_HUB_PAGES)[number];

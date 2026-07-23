import ScholarshipPage, {
  generateMetadata as generateScholarshipMetadata,
} from "@/app/scholarships/[slug]/page";

const params = Promise.resolve({
  slug: "paul-daisy-soros-fellowship-eligibility-new-american-2027",
});

export async function generateMetadata() {
  return generateScholarshipMetadata({ params });
}

export default function PaulDaisySorosFellowshipEligibilityNewAmerican2027Page() {
  return <ScholarshipPage params={params} />;
}

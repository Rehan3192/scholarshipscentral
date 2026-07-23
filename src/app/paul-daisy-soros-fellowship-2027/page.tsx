import ScholarshipPage, {
  generateMetadata as generateScholarshipMetadata,
} from "@/app/scholarships/[slug]/page";

const params = Promise.resolve({
  slug: "paul-daisy-soros-fellowship-2027",
});

export async function generateMetadata() {
  return generateScholarshipMetadata({ params });
}

export default function PaulDaisySorosFellowship2027Page() {
  return <ScholarshipPage params={params} />;
}

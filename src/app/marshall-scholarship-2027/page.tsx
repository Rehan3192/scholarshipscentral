import ScholarshipPage, {
  generateMetadata as generateScholarshipMetadata,
} from "@/app/scholarships/[slug]/page";

const params = Promise.resolve({ slug: "marshall-scholarship-2027" });

export async function generateMetadata() {
  return generateScholarshipMetadata({ params });
}

export default function MarshallScholarship2027Page() {
  return <ScholarshipPage params={params} />;
}

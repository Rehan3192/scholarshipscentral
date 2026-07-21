import ScholarshipPage, {
  generateMetadata as generateScholarshipMetadata,
} from "@/app/scholarships/[slug]/page";

const params = Promise.resolve({
  slug: "fulbright-application-documents-essay-limits-2027-2028",
});

export async function generateMetadata() {
  return generateScholarshipMetadata({ params });
}

export default function FulbrightApplicationDocumentsEssayLimits20272028Page() {
  return <ScholarshipPage params={params} />;
}

import ScholarshipPage, {
  generateMetadata as generateScholarshipMetadata,
} from "@/app/scholarships/[slug]/page";

const params = Promise.resolve({ slug: "fulbright-us-student-program-2027-2028" });

export async function generateMetadata() {
  return generateScholarshipMetadata({ params });
}

export default function FulbrightUsStudentProgram20272028Page() {
  return <ScholarshipPage params={params} />;
}

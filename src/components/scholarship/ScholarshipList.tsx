// FILE: src/components/scholarship/ScholarshipList.tsx

import Link from "next/link";
import { Scholarship } from "@/data/types";

type Props = {
  items: Scholarship[];
};

export default function ScholarshipList({ items }: Props) {
  if (items.length === 0) {
    return <p>No scholarships found.</p>;
  }

  return (
    <ul>
      {items.map((s) => (
        <li key={s.slug}>
          <Link href={`/scholarships/${s.slug}`}>
            {s.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

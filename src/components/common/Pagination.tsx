// FILE: src/components/common/Pagination.tsx

"use client";

import { useSearchParams, useRouter } from "next/navigation";

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.push(`/scholarships?${params.toString()}`);
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        className="border px-3 py-1 rounded disabled:opacity-50"
      >
        Prev
      </button>

      <span className="text-sm">
        Page {currentPage} of {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
        className="border px-3 py-1 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Filter = {
  label: string;
  params: Record<string, string>;
};

function toHref(params: Record<string, string>) {
  const sp = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value) sp.set(key, value);
  }
  const query = sp.toString();
  return query ? `/scholarships?${query}` : "/scholarships";
}

function Pill({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center rounded-full px-3 py-1.5 text-sm font-semibold transition-colors duration-200 motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",
        active
          ? "bg-gray-900 text-white hover:bg-gray-800"
          : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export default function QuickFilters() {
  const searchParams = useSearchParams();

  const items: Filter[] = [
    { label: "Fully funded", params: { funding: "Fully Funded" } },
    { label: "Partially funded", params: { funding: "Partially Funded" } },
    { label: "Germany", params: { country: "Germany" } },
    { label: "USA", params: { country: "USA" } },
    { label: "UK", params: { country: "United Kingdom" } },
    { label: "Masters", params: { degree: "Masters" } },
    { label: "PhD", params: { degree: "PhD" } },
  ];

  const currentCountry = searchParams.get("country");
  const currentDegree = searchParams.get("degree");
  const currentFunding = searchParams.get("funding");

  const isAnyActive = Boolean(currentCountry || currentDegree || currentFunding);

  const isActive = (params: Record<string, string>) => {
    if (params.country && params.country !== (currentCountry ?? "")) return false;
    if (params.degree && params.degree !== (currentDegree ?? "")) return false;
    if (params.funding && params.funding !== (currentFunding ?? "")) return false;
    return Boolean(params.country || params.degree || params.funding);
  };

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="mt-0 text-base font-semibold text-gray-900">
          Quick filters
        </h2>
        <Link
          href="/scholarships"
          className={[
            "text-sm font-medium hover:underline",
            isAnyActive ? "text-blue-700" : "text-gray-400",
          ].join(" ")}
        >
          Clear filters
        </Link>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <Pill
            key={item.label}
            label={item.label}
            href={toHref(item.params)}
            active={isActive(item.params)}
          />
        ))}
      </div>
    </section>
  );
}

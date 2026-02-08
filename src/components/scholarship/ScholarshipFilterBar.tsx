import Link from "next/link";

type Props = {
  baseHref: string;
  primaryLabel: string;
  params: Record<string, string>;
};

function toQuery(params: Record<string, string>) {
  const sp = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value) sp.set(key, value);
  }
  const query = sp.toString();
  return query ? `?${query}` : "";
}

function PillLink({
  href,
  children,
  variant = "secondary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1.5 text-sm font-semibold transition-colors duration-200 motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-gray-900 text-white hover:bg-gray-800"
      : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

export default function ScholarshipFilterBar({
  baseHref,
  primaryLabel,
  params,
}: Props) {
  const allHref = "/scholarships";
  const scopedHref = `${baseHref}${toQuery(params)}`;

  const fullyFundedHref = `${baseHref}${toQuery({
    ...params,
    funding: "Fully Funded",
  })}`;

  const partiallyFundedHref = `${baseHref}${toQuery({
    ...params,
    funding: "Partially Funded",
  })}`;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <PillLink href={allHref} variant="secondary">
        All scholarships
      </PillLink>
      <PillLink href={scopedHref} variant="primary">
        {primaryLabel}
      </PillLink>
      <PillLink href={fullyFundedHref} variant="secondary">
        Fully funded
      </PillLink>
      <PillLink href={partiallyFundedHref} variant="secondary">
        Partially funded
      </PillLink>
    </div>
  );
}

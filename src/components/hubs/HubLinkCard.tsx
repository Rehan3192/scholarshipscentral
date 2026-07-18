import Link from "next/link";

type Props = {
  href: string;
  title: string;
  description: string;
  badge?: string;
};

export default function HubLinkCard({
  href,
  title,
  description,
  badge,
}: Props) {
  return (
    <Link
      href={href}
      className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-blue-200 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="text-base font-semibold text-slate-900">
          {title}
        </div>
        {badge ? (
          <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700">
            {badge}
          </span>
        ) : null}
      </div>
      <div className="mt-2 text-sm text-slate-700">
        {description}
      </div>
      <div className="mt-4 text-sm font-medium text-blue-700">
        Explore &rarr;
      </div>
    </Link>
  );
}

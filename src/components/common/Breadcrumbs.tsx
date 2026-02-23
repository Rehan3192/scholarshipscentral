// FILE: src/components/common/Breadcrumbs.tsx

import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: Props) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex min-w-0 flex-wrap gap-1 text-sm text-gray-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex min-w-0 items-center gap-1">
              {!isLast ? (
                <>
                  <Link
                    href={item.href}
                    className="min-w-0 break-words text-blue-600 hover:underline"
                  >
                    {item.label}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              ) : (
                <span
                  aria-current="page"
                  className="min-w-0 break-words font-medium text-gray-800"
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

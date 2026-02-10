import Link from "next/link";

type DropdownItem = {
  label: string;
  href: string;
  description?: string;
};

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.7a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const pillClassName =
  "inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2";

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: DropdownItem[];
}) {
  return (
    <details className="relative group">
      <summary
        className={[
          pillClassName,
          "cursor-pointer list-none select-none gap-1.5 [&::-webkit-details-marker]:hidden",
        ].join(" ")}
      >
        <span>{label}</span>
        <ChevronDownIcon className="size-4 text-gray-500 transition-transform duration-200 motion-reduce:transition-none group-open:rotate-180" />
      </summary>

      <div className="absolute left-0 top-full z-50 mt-2 w-64 max-w-[calc(100vw-2rem)]">
        <div className="invisible origin-top rounded-xl border border-gray-200 bg-white p-2 shadow-lg opacity-0 scale-95 translate-y-1 transition duration-200 motion-reduce:transition-none group-open:visible group-open:opacity-100 group-open:scale-100 group-open:translate-y-0">
          {items.map((item) => (
            <Link
              key={`${label}:${item.href}`}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-sm text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <span className="font-semibold">{item.label}</span>
              {item.description ? (
                <span className="mt-0.5 block text-xs font-medium text-gray-600">
                  {item.description}
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <nav
        className="mx-auto max-w-6xl px-4 py-3"
        aria-label="Primary"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-lg font-extrabold tracking-tight text-gray-900">
            Scholarships Central
          </Link>

          <form
            action="/scholarships"
            method="get"
            className="w-full sm:w-auto"
            role="search"
          >
            <label htmlFor="nav-search" className="sr-only">
              Search scholarships
            </label>
            <div className="flex w-full items-center gap-2 rounded-xl border border-gray-300 bg-white p-1 shadow-sm focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 sm:w-auto">
              <input
                id="nav-search"
                name="q"
                placeholder="Search scholarships..."
                className="w-full bg-transparent px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none sm:w-72"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-700">
          <Link
            href="/scholarships"
            className={pillClassName}
          >
            Scholarships
          </Link>
          <NavDropdown
            label="Countries"
            items={[
              {
                label: "All countries",
                href: "/countries",
                description: "Browse scholarships by awarding country.",
              },
              { label: "Germany", href: "/countries/germany" },
              { label: "USA", href: "/countries/usa" },
              { label: "United Kingdom", href: "/countries/united-kingdom" },
            ]}
          />
          <NavDropdown
            label="Degrees"
            items={[
              {
                label: "All degrees",
                href: "/degrees",
                description: "Browse by Bachelors, Masters, or PhD.",
              },
              { label: "Bachelors", href: "/degrees/bachelors" },
              { label: "Masters", href: "/degrees/masters" },
              { label: "PhD", href: "/degrees/phd" },
            ]}
          />
          <NavDropdown
            label="Funding"
            items={[
              {
                label: "All funding",
                href: "/funding",
                description: "Explore fully or partially funded options.",
              },
              { label: "Fully funded", href: "/funding/fully-funded" },
              { label: "Partially funded", href: "/funding/partially-funded" },
            ]}
          />
          <Link
            href="/contact"
            className={pillClassName}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

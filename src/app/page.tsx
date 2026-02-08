import Link from "next/link";
import { scholarships } from "@/data/scholarships";
import { toSegment } from "@/lib/helpers";

export default function HomePage() {
  const latest = [...scholarships]
    .sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? ""))
    .slice(0, 6);

  const countryCounts = new Map<string, number>();
  for (const s of scholarships) {
    countryCounts.set(s.country, (countryCounts.get(s.country) ?? 0) + 1);
  }
  const degreeCount = new Set(scholarships.map((s) => s.degreeLevel)).size;
  const topCountries = Array.from(countryCounts.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 9)
    .map(([country, count]) => ({
      country,
      count,
      href: `/countries/${toSegment(country)}`,
    }));

  return (
    <div className="py-10 space-y-12">
      <header className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-10">
        <p className="text-sm font-medium text-blue-700">
          Scholarships Central
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Find scholarships worldwide, fast.
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-700">
          Browse scholarships by degree, country, and funding type. We only
          redirect to official external application pages - no accounts, no
          forms.
        </p>

        <form
          action="/scholarships"
          method="get"
          role="search"
          className="mt-6 max-w-xl"
        >
          <label htmlFor="home-search" className="sr-only">
            Search scholarships
          </label>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              id="home-search"
              name="q"
              placeholder="Search by title, country, provider..."
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Search
            </button>
          </div>
        </form>

        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/scholarships"
            className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            Browse all scholarships
          </Link>
          <Link
            href="/funding/fully-funded"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Fully funded
          </Link>
        </div>

        <p className="mt-5 mb-0 text-sm text-gray-600">
          Currently listing{" "}
          <span className="font-semibold text-gray-900">
            {scholarships.length}
          </span>{" "}
          scholarships across{" "}
          <span className="font-semibold text-gray-900">
            {countryCounts.size}
          </span>{" "}
          countries and{" "}
          <span className="font-semibold text-gray-900">
            {degreeCount}
          </span>{" "}
          degree levels.
        </p>
      </header>

      <section className="space-y-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">
            Latest updates
          </h2>
          <Link href="/scholarships" className="text-sm font-medium text-blue-700 hover:underline">
            Browse all
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((s) => (
            <Link
              key={s.slug}
              href={`/scholarships/${s.slug}`}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-gray-300 hover:bg-gray-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <div className="text-base font-semibold text-gray-900">
                {s.title}
              </div>
              <div className="mt-2 text-sm text-gray-700 line-clamp-3">
                {s.overview}
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600">
                <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 font-semibold">
                  {s.country}
                </span>
                <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 font-semibold">
                  {s.degreeLevel}
                </span>
                <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 font-semibold">
                  {s.fundingType}
                </span>
              </div>
              <div className="mt-3 text-xs text-gray-500">
                Updated: {s.lastUpdated}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">
            Browse by degree
          </h2>
          <p className="text-sm text-gray-600">
            Start with your current or target program level.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Link
            href="/degrees/bachelors"
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-gray-300 hover:bg-gray-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <div className="font-semibold text-gray-900">
              Bachelors
            </div>
            <div className="mt-1 text-sm text-gray-700">
              Undergraduate scholarships worldwide.
            </div>
          </Link>

          <Link
            href="/degrees/masters"
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-gray-300 hover:bg-gray-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <div className="font-semibold text-gray-900">
              Masters
            </div>
            <div className="mt-1 text-sm text-gray-700">
              Graduate scholarships for international students.
            </div>
          </Link>

          <Link
            href="/degrees/phd"
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-gray-300 hover:bg-gray-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <div className="font-semibold text-gray-900">
              PhD
            </div>
            <div className="mt-1 text-sm text-gray-700">
              Doctoral scholarships with research opportunities.
            </div>
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">
            Browse by country
          </h2>
          <Link href="/countries" className="text-sm font-medium text-blue-700 hover:underline">
            View all countries
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Link
            href="/countries/germany"
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-gray-300 hover:bg-gray-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <div className="font-semibold text-gray-900">
              Germany
            </div>
            <div className="mt-1 text-sm text-gray-700">
              Public universities, DAAD, and more.
            </div>
          </Link>

          <Link
            href="/countries/usa"
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-gray-300 hover:bg-gray-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <div className="font-semibold text-gray-900">
              USA
            </div>
            <div className="mt-1 text-sm text-gray-700">
              Scholarships from universities and foundations.
            </div>
          </Link>

          <Link
            href="/countries/united-kingdom"
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-gray-300 hover:bg-gray-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <div className="font-semibold text-gray-900">
              UK
            </div>
            <div className="mt-1 text-sm text-gray-700">
              Scholarships for top UK institutions.
            </div>
          </Link>
        </div>

        {topCountries.length > 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="m-0 text-base font-semibold text-gray-900">
                Popular destinations
              </h3>
              <span className="text-sm text-gray-600">
                Based on current listings
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {topCountries.map((c) => (
                <Link
                  key={c.country}
                  href={c.href}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  {c.country}
                  <span className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-semibold text-gray-700">
                    {c.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">
            Browse by funding type
          </h2>
          <p className="text-sm text-gray-600">
            Filter by full or partial funding coverage.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/funding/fully-funded"
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-gray-300 hover:bg-gray-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <div className="font-semibold text-gray-900">
              Fully funded
            </div>
            <div className="mt-1 text-sm text-gray-700">
              Tuition + stipend (and often travel) covered.
            </div>
          </Link>

          <Link
            href="/funding/partially-funded"
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-gray-300 hover:bg-gray-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <div className="font-semibold text-gray-900">
              Partially funded
            </div>
            <div className="mt-1 text-sm text-gray-700">
              Partial tuition waivers or limited stipends.
            </div>
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-xl font-semibold text-gray-900">
          Explore more
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Jump into the directory by country, degree, or funding type.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/countries"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Browse countries
          </Link>
          <Link
            href="/degrees"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Browse degrees
          </Link>
          <Link
            href="/funding"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Browse funding
          </Link>
        </div>
      </section>
    </div>
  );
}

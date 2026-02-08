import Link from "next/link";

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
            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Scholarships
          </Link>
          <Link
            href="/countries"
            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Countries
          </Link>
          <Link
            href="/degrees"
            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Degrees
          </Link>
          <Link
            href="/funding"
            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Funding
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Contact
          </Link>

          <div className="hidden md:flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-gray-300">•</span>
            <span className="text-gray-600">Popular:</span>
            <Link href="/countries/germany" className="hover:underline">
              Germany
            </Link>
            <Link href="/countries/usa" className="hover:underline">
              USA
            </Link>
            <Link href="/countries/united-kingdom" className="hover:underline">
              UK
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/degrees/masters" className="hover:underline">
              Masters
            </Link>
            <Link href="/funding/fully-funded" className="hover:underline">
              Fully funded
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

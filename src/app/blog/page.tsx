import type { Metadata } from "next";
import Link from "next/link";
import {
  BreadcrumbJsonLd,
  ItemListJsonLd,
  WebPageJsonLd,
} from "@/components/seo/StructuredData";
import {
  getWordPressPosts,
  isWordPressConfigured,
  stripHtmlToText,
} from "@/lib/wordpress";
import { FEATURED_HUB_PAGES } from "@/lib/featuredHubPages";
import type { WordPressPostListItem } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Scholarship guides, hub pages, result updates, and application-focused articles from Scholarships Central.",
  alternates: {
    canonical: "/blog",
  },
};

function formatDate(value: string) {
  const iso = value.split("T")[0];
  return iso || value;
}

export default async function BlogPage() {
  const configured = isWordPressConfigured();

  let posts: WordPressPostListItem[] = [];
  let loadError: string | null = null;

  if (configured) {
    try {
      posts = await getWordPressPosts({ perPage: 20, revalidateSeconds: 60 * 60 });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      loadError = msg;
      posts = [];
    }
  }

  const topItems = [
    ...FEATURED_HUB_PAGES.map((page) => ({
      name: page.title,
      href: page.href,
    })),
    ...posts.slice(0, 10).map((p) => ({
      name: stripHtmlToText(p.title.rendered),
      href: `/blog/${p.slug}`,
    })),
  ].slice(0, 10);

  return (
    <div className="space-y-6">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />
      <WebPageJsonLd
        pagePath="/blog"
        title="Blog | Scholarships Central"
        description={metadata.description ?? undefined}
      />
      {topItems.length > 0 ? (
        <ItemListJsonLd pagePath="/blog" items={topItems} />
      ) : null}

      <header className="space-y-2">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Blog
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Scholarship guides, hub pages, and result updates in one place.
        </p>
        <p className="mb-0 text-sm text-blue-700">
          Need result-date articles? Browse the{" "}
          <Link href="/scholarship-results-2026" className="font-semibold hover:underline">
            Scholarship Results 2026
          </Link>{" "}
          hub.
        </p>
      </header>

      <div className="space-y-6">
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="mt-0 text-2xl font-semibold text-gray-900">
              Featured scholarship pages
            </h2>
            <p className="mb-0 text-sm text-gray-600">
              Start with these key pages when you want the fastest path into major scholarship topics.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {FEATURED_HUB_PAGES.map((page) => (
              <article
                key={page.slug}
                className="group rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/60 to-white p-5 shadow-sm transition-all duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-800">
                    Featured
                  </span>
                  <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700">
                    {page.label}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">
                  <Link href={page.href} className="hover:underline group-hover:text-blue-800">
                    {page.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-gray-700">
                  {page.description}
                </p>
                <Link
                  href={page.href}
                  className="mt-4 inline-flex items-center rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm font-semibold text-blue-700 transition-colors duration-200 motion-reduce:transition-none hover:border-blue-300 hover:bg-blue-50"
                >
                  Open page &rarr;
                </Link>
              </article>
            ))}
          </div>
        </section>

        {!configured ? (
          <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">
              Blog temporarily unavailable
            </h2>
            <p className="mt-2 mb-0">
              Please check back shortly for scholarship guides and updates.
            </p>
          </section>
        ) : loadError ? (
          <section className="rounded-2xl border border-red-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">
              Blog temporarily unavailable
            </h2>
            <p className="mt-2 mb-0">
              Some scholarship pages are still available, but we couldn&apos;t load
              blog posts right now. Please try again in a moment.
            </p>
            <p className="mt-3 mb-0 text-xs text-gray-500">
              Error: {loadError}
            </p>
          </section>
        ) : posts.length === 0 ? (
          <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">
              No blog posts yet
            </h2>
            <p className="mt-2 mb-0">
              Check back soon for scholarship guides, updates, and result articles.
            </p>
          </section>
        ) : (
          <section className="space-y-4">
            <div className="space-y-1">
              <h2 className="mt-0 text-2xl font-semibold text-gray-900">
                Latest posts
              </h2>
              <p className="mb-0 text-sm text-gray-600">
                Scholarship news, guides, and application-focused blog posts.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {posts.map((post) => {
                const title = stripHtmlToText(post.title.rendered);
                const excerpt =
                  stripHtmlToText(post.excerpt.rendered) ||
                  "Read the full post for details.";

                return (
                  <article
                    key={post.id}
                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-transform duration-200 motion-reduce:transition-none hover:-translate-y-0.5"
                  >
                    <div className="text-xs font-semibold text-gray-500">
                      {formatDate(post.date)}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-gray-900">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:underline"
                      >
                        {title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-gray-700">{excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-3 inline-flex items-center text-sm font-semibold text-blue-700 hover:underline"
                    >
                      Read more &rarr;
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

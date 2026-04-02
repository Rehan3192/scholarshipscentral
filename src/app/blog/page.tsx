import type { Metadata } from "next";
import Link from "next/link";
import {
  BreadcrumbJsonLd,
  ItemListJsonLd,
  WebPageJsonLd,
} from "@/components/seo/StructuredData";
import {
  getWordPressPageBySlug,
  getWordPressPosts,
  isWordPressConfigured,
  stripHtmlToText,
} from "@/lib/wordpress";
import type { WordPressPage, WordPressPostListItem } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Updates and guides from Scholarships Central (published via WordPress).",
  alternates: {
    canonical: "/blog",
  },
};

const FEATURED_HUB_PAGES = [
  {
    slug: "europe-scholarships-2026",
    href: "/europe-scholarships-2026",
    label: "Hub Page",
  },
  {
    slug: "fully-funded-scholarships-2026",
    href: "/fully-funded-scholarships-2026",
    label: "Hub Page",
  },
  {
    slug: "scholarships-still-open-2026",
    href: "/scholarships-still-open-2026",
    label: "Hub Page",
  },
] as const;

function formatDate(value: string) {
  const iso = value.split("T")[0];
  return iso || value;
}

export default async function BlogPage() {
  const configured = isWordPressConfigured();

  let posts: WordPressPostListItem[] = [];
  let featuredPages: Array<WordPressPage & { href: string; label: string }> = [];
  let loadError: string | null = null;

  if (configured) {
    try {
      const [loadedPosts, loadedPages] = await Promise.all([
        getWordPressPosts({ perPage: 20, revalidateSeconds: 60 * 60 }),
        Promise.all(
          FEATURED_HUB_PAGES.map(async (page) => {
            const wpPage = await getWordPressPageBySlug(page.slug, {
              revalidateSeconds: 60 * 60,
            });
            if (!wpPage) return null;
            return { ...wpPage, href: page.href, label: page.label };
          }),
        ),
      ]);

      posts = loadedPosts;
      featuredPages = loadedPages.flatMap((page) =>
        page ? [page as WordPressPage & { href: string; label: string }] : [],
      );
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      loadError = msg;
      posts = [];
      featuredPages = [];
    }
  }

  const topItems = [
    ...featuredPages.map((page) => ({
      name: stripHtmlToText(page.title.rendered),
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
          Short guides, updates, and resources published via WordPress.
        </p>
      </header>

      {!configured ? (
        <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Blog not configured yet
          </h2>
          <p className="mt-2 mb-0">
            Set <span className="font-mono">WORDPRESS_URL</span> (or{" "}
            <span className="font-mono">WORDPRESS_API_BASE</span>) in your
            environment to enable the blog.
          </p>
        </section>
      ) : loadError ? (
        <section className="rounded-2xl border border-red-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Blog temporarily unavailable
          </h2>
          <p className="mt-2 mb-0">
            We couldn&apos;t load posts from WordPress right now. Please try
            again in a moment.
          </p>
          <p className="mt-3 mb-0 text-xs text-gray-500">
            Error: {loadError}
          </p>
        </section>
      ) : posts.length === 0 && featuredPages.length === 0 ? (
        <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            No content yet
          </h2>
          <p className="mt-2 mb-0">
            Publish your first WordPress post or update a featured hub page and it will appear here.
          </p>
        </section>
      ) : (
        <div className="space-y-6">
          {featuredPages.length > 0 ? (
            <section className="space-y-4">
              <div className="space-y-1">
                <h2 className="mt-0 text-2xl font-semibold text-gray-900">
                  Featured resource pages
                </h2>
                <p className="mb-0 text-sm text-gray-600">
                  Core scholarship hubs managed in WordPress pages and rendered on the frontend.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {featuredPages.map((page) => {
                  const title = stripHtmlToText(page.title.rendered);
                  const excerpt =
                    stripHtmlToText(page.excerpt.rendered) ||
                    "Open this resource page for curated scholarship links and guidance.";

                  return (
                    <article
                      key={`page-${page.id}`}
                      className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm transition-transform duration-200 motion-reduce:transition-none hover:-translate-y-0.5"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                          {page.label}
                        </div>
                        <div className="text-xs font-semibold text-gray-500">
                          Updated {formatDate(page.modified)}
                        </div>
                      </div>
                      <h3 className="mt-2 text-lg font-semibold text-gray-900">
                        <Link href={page.href} className="hover:underline">
                          {title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-sm text-gray-700">{excerpt}</p>
                      <Link
                        href={page.href}
                        className="mt-3 inline-flex items-center text-sm font-semibold text-blue-700 hover:underline"
                      >
                        Open resource page &rarr;
                      </Link>
                    </article>
                  );
                })}
              </div>
            </section>
          ) : null}

          {posts.length > 0 ? (
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
          ) : null}
        </div>
      )}
    </div>
  );
}

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
import type { WordPressPostListItem } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Updates and guides from Scholarships Central (published via WordPress).",
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

  const topItems = posts.slice(0, 10).map((p) => ({
    name: stripHtmlToText(p.title.rendered),
    href: `/blog/${p.slug}`,
  }));

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
      ) : posts.length === 0 ? (
        <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            No posts yet
          </h2>
          <p className="mt-2 mb-0">
            Publish your first WordPress post and it will appear here.
          </p>
        </section>
      ) : (
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
                <h2 className="mt-2 text-lg font-semibold text-gray-900">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:underline"
                  >
                    {title}
                  </Link>
                </h2>
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
      )}
    </div>
  );
}

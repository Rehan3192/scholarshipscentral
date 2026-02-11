import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BreadcrumbJsonLd,
  WebPageJsonLd,
} from "@/components/seo/StructuredData";
import {
  getWordPressAllPostSlugs,
  getWordPressPostBySlug,
  isWordPressConfigured,
  stripHtmlToText,
} from "@/lib/wordpress";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  if (!isWordPressConfigured()) return [];
  try {
    const posts = await getWordPressAllPostSlugs({
      maxPosts: 200,
      revalidateSeconds: 60 * 60,
    });
    return posts.map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

function formatDate(value: string) {
  const iso = value.split("T")[0];
  return iso || value;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (!isWordPressConfigured()) {
    return {
      title: "Blog",
      robots: { index: false, follow: false },
    };
  }

  let post = null;
  try {
    post = await getWordPressPostBySlug(slug, { revalidateSeconds: 60 * 60 });
  } catch {
    post = null;
  }

  if (!post) {
    return {
      title: "Post Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = stripHtmlToText(post.title.rendered);
  const description = stripHtmlToText(post.excerpt.rendered).slice(0, 160);

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/blog/${post.slug}`,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  if (!isWordPressConfigured()) notFound();

  const post = await getWordPressPostBySlug(slug, { revalidateSeconds: 60 * 60 });
  if (!post) notFound();

  const title = stripHtmlToText(post.title.rendered);
  const published = formatDate(post.date);
  const modified = formatDate(post.modified);

  return (
    <div className="space-y-6">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: title, href: `/blog/${post.slug}` },
        ]}
      />
      <WebPageJsonLd
        pagePath={`/blog/${post.slug}`}
        title={`${title} | Scholarships Central`}
        description={stripHtmlToText(post.excerpt.rendered)}
        dateModified={post.modified}
      />

      <header className="space-y-2">
        <p className="mb-0 text-xs font-semibold text-gray-500">
          Published {published}
          {modified && modified !== published ? ` | Updated ${modified}` : ""}
        </p>
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          {title}
        </h1>
      </header>

      <article className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <div
          className="space-y-4"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/blog"
          className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          Back to Blog
        </Link>
        <Link
          href="/scholarships"
          className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          Browse Scholarships
        </Link>
      </div>
    </div>
  );
}

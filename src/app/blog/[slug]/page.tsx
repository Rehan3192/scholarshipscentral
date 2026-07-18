import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import {
  BreadcrumbJsonLd,
  WebPageJsonLd,
} from "@/components/seo/StructuredData";
import ScholarshipFinderCTA, {
  detectScholarshipFinderContext,
} from "@/components/blog/ScholarshipFinderCTA";
import {
  getWordPressAllPostSlugs,
  getWordPressPostBySlug,
  isWordPressConfigured,
  stripHtmlToText,
} from "@/lib/wordpress";
import { getBlogContentWithInternalLinks } from "@/lib/internal-linking";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const BLOG_REVALIDATE_SECONDS = 5 * 60;

export const dynamicParams = true;

const getCachedWordPressPostBySlug = cache(async (slug: string) =>
  getWordPressPostBySlug(slug, { revalidateSeconds: BLOG_REVALIDATE_SECONDS }),
);

export async function generateStaticParams() {
  if (!isWordPressConfigured()) return [];
  try {
    const posts = await getWordPressAllPostSlugs({
      maxPosts: 500,
      revalidateSeconds: BLOG_REVALIDATE_SECONDS,
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

function splitAfterIntroduction(html: string) {
  const paragraphs = [...html.matchAll(/<p\b[^>]*>[\s\S]*?<\/p>/gi)];
  const insertionParagraph = paragraphs[Math.min(1, paragraphs.length - 1)];

  if (!insertionParagraph || insertionParagraph.index === undefined) {
    return { introduction: html, remainder: "" };
  }

  const splitIndex = insertionParagraph.index + insertionParagraph[0].length;
  return {
    introduction: html.slice(0, splitIndex),
    remainder: html.slice(splitIndex),
  };
}

function getFirstSearchValue(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

function stripTags(value: string) {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function addSearchMatchAnchor(html: string, query: string) {
  const terms = query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  if (terms.length === 0) return html;

  const blockPattern = /<(h2|h3|h4|p|li)\b[^>]*>[\s\S]*?<\/\1>/gi;

  for (const match of html.matchAll(blockPattern)) {
    if (match.index === undefined) continue;

    const text = stripTags(match[0]).toLowerCase();
    const isMatch = terms.every((term) => text.includes(term));

    if (!isMatch) continue;

    return `${html.slice(0, match.index)}<span id="search-match" class="block scroll-mt-28" aria-hidden="true"></span>${html.slice(match.index)}`;
  }

  return html;
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
    post = await getCachedWordPressPostBySlug(slug);
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

export default async function BlogPostPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const resolvedSearchParams = (await searchParams) ?? {};
  if (!isWordPressConfigured()) notFound();

  const post = await getCachedWordPressPostBySlug(slug);
  if (!post) notFound();

  const title = stripHtmlToText(post.title.rendered);
  const published = formatDate(post.date);
  const modified = formatDate(post.modified);
  const highlightQuery = getFirstSearchValue(resolvedSearchParams.highlight);
  const contentWithInternalLinks = addSearchMatchAnchor(
    getBlogContentWithInternalLinks(
      post.slug,
      post.content.rendered,
    ),
    highlightQuery,
  );
  const articleContent = splitAfterIntroduction(contentWithInternalLinks);
  const finderContext = detectScholarshipFinderContext({
    title,
    slug: post.slug,
  });

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

      <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="mb-0 text-xs font-semibold uppercase tracking-wide text-blue-700">
          Scholarship guide
        </p>
        <p className="mt-2 mb-0 text-xs font-semibold text-slate-500">
          Published {published}
          {modified && modified !== published ? ` | Updated ${modified}` : ""}
        </p>
        <h1 className="mt-3 mb-0 max-w-4xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>
      </header>

      <article className="wp-article rounded-2xl border border-slate-200 bg-white p-6 text-base text-slate-700 shadow-sm sm:p-8">
        <div
          className="wp-content space-y-4"
          dangerouslySetInnerHTML={{ __html: articleContent.introduction }}
        />
        <ScholarshipFinderCTA {...finderContext} />
        {articleContent.remainder ? (
          <div
            className="wp-content space-y-4"
            dangerouslySetInnerHTML={{ __html: articleContent.remainder }}
          />
        ) : null}
      </article>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/blog"
          className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          Back to Blog
        </Link>
        <Link
          href="/scholarships"
          className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
        >
          Browse Scholarships
        </Link>
      </div>
    </div>
  );
}

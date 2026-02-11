type WordPressRenderedField = {
  rendered: string;
};

export type WordPressPostListItem = {
  id: number;
  slug: string;
  title: WordPressRenderedField;
  excerpt: WordPressRenderedField;
  date: string;
  modified: string;
};

export type WordPressPost = WordPressPostListItem & {
  content: WordPressRenderedField;
};

function stripTrailingSlash(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function ensureLeadingSlash(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

export function getWordPressApiBase(): string | null {
  const explicit = process.env.WORDPRESS_API_BASE;
  if (explicit && explicit.trim()) return stripTrailingSlash(explicit.trim());

  const siteUrl = process.env.WORDPRESS_URL;
  if (siteUrl && siteUrl.trim()) {
    return `${stripTrailingSlash(siteUrl.trim())}/wp-json/wp/v2`;
  }

  return null;
}

export function isWordPressConfigured(): boolean {
  return Boolean(getWordPressApiBase());
}

function buildUrl(
  baseUrl: string,
  path: string,
  query?: Record<string, string | number | boolean | undefined>,
) {
  const url = new URL(`${baseUrl}${ensureLeadingSlash(path)}`);
  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value === undefined) continue;
      url.searchParams.set(key, String(value));
    }
  }
  return url.toString();
}

async function wpFetchJson<T>(
  path: string,
  {
    query,
    revalidateSeconds = 60 * 60,
  }: {
    query?: Record<string, string | number | boolean | undefined>;
    revalidateSeconds?: number;
  } = {},
): Promise<{ data: T; headers: Headers } | null> {
  const apiBase = getWordPressApiBase();
  if (!apiBase) return null;

  const url = buildUrl(apiBase, path, query);
  const res = await fetch(url, {
    next: { revalidate: revalidateSeconds },
    headers: {
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`WordPress API error (${res.status}) for ${path}`);
  }

  const data = (await res.json()) as T;
  return { data, headers: res.headers };
}

export async function getWordPressPosts({
  perPage = 20,
  revalidateSeconds,
}: {
  perPage?: number;
  revalidateSeconds?: number;
} = {}): Promise<WordPressPostListItem[]> {
  const result = await wpFetchJson<WordPressPostListItem[]>("/posts", {
    revalidateSeconds,
    query: {
      per_page: Math.min(Math.max(perPage, 1), 100),
      status: "publish",
      _fields: "id,slug,title,excerpt,date,modified",
    },
  });

  return result?.data ?? [];
}

export async function getWordPressPostBySlug(
  slug: string,
  { revalidateSeconds }: { revalidateSeconds?: number } = {},
): Promise<WordPressPost | null> {
  const normalizedSlug = slug.trim();
  if (!normalizedSlug) return null;

  const result = await wpFetchJson<WordPressPost[]>("/posts", {
    revalidateSeconds,
    query: {
      slug: normalizedSlug,
      status: "publish",
      _fields: "id,slug,title,excerpt,content,date,modified",
    },
  });

  return result?.data?.[0] ?? null;
}

export async function getWordPressAllPostSlugs({
  maxPosts = 500,
  revalidateSeconds,
}: {
  maxPosts?: number;
  revalidateSeconds?: number;
} = {}): Promise<Array<{ slug: string; modified?: string }>> {
  const perPage = 100;
  const collected: Array<{ slug: string; modified?: string }> = [];

  for (let page = 1; collected.length < maxPosts; page += 1) {
    const result = await wpFetchJson<Array<{ slug: string; modified?: string }>>("/posts", {
      revalidateSeconds,
      query: {
        page,
        per_page: perPage,
        status: "publish",
        _fields: "slug,modified",
      },
    });

    if (!result) return [];
    collected.push(...(result.data ?? []));

    const totalPagesRaw = result.headers.get("x-wp-totalpages");
    const totalPages = totalPagesRaw ? Number(totalPagesRaw) : NaN;
    if (!Number.isFinite(totalPages) || page >= totalPages) break;
  }

  return collected.slice(0, maxPosts);
}

export function stripHtmlToText(html: string): string {
  return html
    .replaceAll(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, " ")
    .replaceAll(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, " ")
    .replaceAll(/<[^>]*>/g, " ")
    .replaceAll(/\s+/g, " ")
    .trim();
}


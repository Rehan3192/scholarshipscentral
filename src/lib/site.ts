function stripTrailingSlash(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  if (explicit && explicit.trim()) return stripTrailingSlash(explicit.trim());

  const vercelEnv = process.env.VERCEL_ENV;
  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl && vercelUrl.trim() && vercelEnv !== "production") {
    return `https://${stripTrailingSlash(vercelUrl.trim())}`;
  }

  // Production canonical (also used as sitemap/metadata base fallback).
  return "https://www.scholarshipscentral.com";
}

export function isVercelProduction(): boolean {
  if (process.env.VERCEL_ENV) return process.env.VERCEL_ENV === "production";
  return process.env.NODE_ENV === "production";
}

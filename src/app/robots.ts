import type { MetadataRoute } from "next";
import { getSiteUrl, isVercelProduction } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!isVercelProduction()) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  const siteUrl = getSiteUrl();
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

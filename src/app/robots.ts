import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const allow = siteConfig.allowIndexing;

  return {
    rules: [
      {
        userAgent: "*",
        allow: allow ? "/" : undefined,
        disallow: allow ? undefined : "/",
      },
    ],
    sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
    host: siteConfig.url,
  };
}

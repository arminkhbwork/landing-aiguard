import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

type GetMetadataInput = {
  title?: string;
  description?: string;
  path?: `/${string}` | "/";
};

export function getMetadata(input: GetMetadataInput = {}): Metadata {
  const title = input.title
    ? `${input.title} · ${siteConfig.name}`
    : siteConfig.name;
  const description = input.description ?? siteConfig.description;
  const path = input.path ?? "/";
  const canonical = new URL(path, siteConfig.url);

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: { canonical },
    robots: siteConfig.allowIndexing
      ? { index: true, follow: true }
      : {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

import type { MetadataRoute } from "next";
import { SEARCH_INDEXING, SITE_URL } from "./seo";

// /robots.txt. Пока сайт на временном адресе, поисковикам закрыто всё.
export default function robots(): MetadataRoute.Robots {
  if (!SEARCH_INDEXING) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

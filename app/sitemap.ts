import type { MetadataRoute } from "next";
import { articles as csArticles } from "./journal/articles";
import { PAGE_SLUGS, SITE_URL } from "./seo";

// Карта сайта для Google: /sitemap.xml. Новые страницы и статьи попадают сюда автоматически.
export default function sitemap(): MetadataRoute.Sitemap {
  const pairs: [cs: string, en: string][] = [
    ["/", "/en"],
    ...PAGE_SLUGS.map(slug => [`/${slug}`, `/en/${slug}`] as [string, string]),
    ...Object.entries(csArticles).map(([slug, article]) => [`/journal/${slug}`, `/en/journal/${article.en}`] as [string, string]),
  ];
  return pairs.flatMap(([cs, en]) => {
    const languages = { cs: SITE_URL + cs, en: SITE_URL + en };
    return [
      { url: SITE_URL + cs, alternates: { languages } },
      { url: SITE_URL + en, alternates: { languages } },
    ];
  });
}

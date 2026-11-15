import type { Metadata } from "next";
import type { Lang } from "./site";

/*
 * Адрес сайта — используется в canonical-ссылках, sitemap.xml и превью для соцсетей.
 *
 * ПЕРЕЕЗД НА ОСНОВНОЙ ДОМЕН: замените эту строку на "https://lotuspiercing.cz".
 * После этого сайт автоматически откроется для Google (см. SEARCH_INDEXING ниже).
 */
export const SITE_URL: string = "https://mediumspringgreen-bat-574082.hostingersite.com";

const PRODUCTION_URL: string = "https://lotuspiercing.cz";

/** Google и другие поисковики индексируют сайт только на основном домене. */
export const SEARCH_INDEXING = SITE_URL === PRODUCTION_URL;

export const SITE_NAME = "Black Lotus Piercing Studio";

/** Картинка-превью, когда ссылку на сайт присылают в Instagram, Facebook, WhatsApp и т. п. */
export const OG_IMAGE = { url: "/og-image.jpg", width: 1200, height: 630, alt: "Black Lotus Piercing Studio — piercing v Praze" };

/** Страницы, которые есть на обоих языках: /<slug> и /en/<slug>. */
export const PAGE_SLUGS = ["studio", "cenik", "work", "care", "journal", "contact", "booking", "gift-card"] as const;

/**
 * Заголовок, описание, canonical и языковые версии для страницы, у которой есть CZ и EN вариант.
 * Пути относительные — полный адрес подставляется из SITE_URL (metadataBase в app/layout.tsx).
 */
export function pageMetadata({ lang, cs, en, title, description, type = "website" }: {
  lang: Lang;
  cs: string;
  en: string;
  title: string;
  description: string;
  type?: "website" | "article";
}): Metadata {
  const url = lang === "cs" ? cs : en;
  return {
    title,
    description,
    alternates: { canonical: url, languages: { cs, en, "x-default": cs } },
    openGraph: { type, siteName: SITE_NAME, locale: lang === "cs" ? "cs_CZ" : "en_GB", url, title, description, images: [OG_IMAGE] },
  };
}

/** Данные студии для Google (поиск и Карты): schema.org LocalBusiness. */
export const studioJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/assets/studio-workspace-wide.webp`,
  logo: `${SITE_URL}/assets/black-lotus-monogram.png`,
  telephone: "+420777547240",
  email: "piercingprague@gmail.com",
  foundingDate: "2015",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Petrohradská 388/22",
    addressLocality: "Praha 10 – Vršovice",
    addressCountry: "CZ",
  },
  geo: { "@type": "GeoCoordinates", latitude: 50.066278, longitude: 14.451639 },
  sameAs: ["https://www.instagram.com/lotus.piercing/", "https://www.facebook.com/blpiercingstudio/"],
};

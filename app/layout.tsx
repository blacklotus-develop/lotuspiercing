import type { Metadata } from "next";
import "./globals.css";
import { OG_IMAGE, SEARCH_INDEXING, SITE_NAME, SITE_URL, studioJsonLd } from "./seo";

// Общие настройки для всех страниц. Заголовок, описание и canonical каждая страница задаёт сама.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Black Lotus Piercing Studio | Praha",
  description: "Profesionální piercingové studio v Praze. Implantátový titan ASTM F-136, důsledná sterilizace a individuální přístup.",
  openGraph: { type: "website", siteName: SITE_NAME, locale: "cs_CZ", images: [OG_IMAGE] },
  twitter: { card: "summary_large_image" },
  robots: SEARCH_INDEXING ? undefined : { index: false, follow: false },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className="antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(studioJsonLd) }} />
      </body>
    </html>
  );
}

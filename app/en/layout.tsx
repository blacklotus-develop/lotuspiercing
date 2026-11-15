import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME } from "../seo";

// Defaults for English pages; each page sets its own title, description and canonical.
export const metadata: Metadata = {
  title: "Black Lotus Piercing Studio | Prague",
  description: "Professional piercing studio in Prague. ASTM F-136 implant-grade titanium, controlled sterilisation and individual care.",
  openGraph: { type: "website", siteName: SITE_NAME, locale: "en_GB", images: [OG_IMAGE] },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="en">{children}</div>;
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Black Lotus Piercing Studio | Praha",
  description: "Profesionální piercingové studio v Praze. Implantátový titan ASTM F-136, důsledná sterilizace a individuální přístup.",
  alternates: {
    languages: { cs: "/", en: "/en" },
  },
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
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Black Lotus Piercing Studio | Prague",
  description: "Professional piercing studio in Prague. ASTM F-136 implant-grade titanium, controlled sterilisation and individual care.",
  alternates: {
    languages: { cs: "/", en: "/en" },
  },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="en">{children}</div>;
}

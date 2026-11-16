import HomePage from "../home-page";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  lang: "en", cs: "/", en: "/en",
  title: "Black Lotus Piercing Studio | Piercing in Prague",
  description: "Professional piercing studio in Prague 10 – Vršovice. An individual approach, ASTM F-136 implant-grade titanium, controlled sterilisation and online booking.",
});

export default function EnglishHome() {
  return <HomePage lang="en" />;
}

import HomePage from "./home-page";
import { pageMetadata } from "./seo";

export const metadata = pageMetadata({
  lang: "cs", cs: "/", en: "/en",
  title: "Black Lotus Piercing Studio | Piercing v Praze",
  description: "Profesionální piercingové studio v Praze 10 – Vršovicích. Individuální přístup, implantátový titan ASTM F-136, kontrolovaná sterilizace a online rezervace.",
});

export default function Home() {
  return <HomePage lang="cs" />;
}

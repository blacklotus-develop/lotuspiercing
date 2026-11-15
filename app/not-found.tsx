import type { Metadata } from "next";
import ArrowIcon from "./arrow-icon";
import Link from "./native-link";
import { PageShell } from "./site";

export const metadata: Metadata = { title: "Stránka nebyla nalezena | Black Lotus Piercing Studio" };

const links = [
  ["01", "Hlavní stránka", "/"],
  ["02", "Ceník piercingu", "/cenik"],
  ["03", "Rezervace termínu", "/booking"],
  ["04", "English version", "/en"],
];

export default function NotFound() {
  return <PageShell lang="cs" slug="not-found" eyebrow="404 / NENALEZENO" title={<>STRÁNKA<br />NENALEZENA.</>} intro="Tato stránka neexistuje nebo byla přesunuta. This page doesn't exist or has moved.">
    <section className="knowledge frame section-space">
      <div className="knowledge-links">
        {links.map(([n, label, href]) => <Link key={href} href={href}><span>{n}</span><strong>{label}</strong><b><ArrowIcon /></b></Link>)}
      </div>
    </section>
  </PageShell>;
}

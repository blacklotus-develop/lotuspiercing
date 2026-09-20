import MobileMenu from "./mobile-menu";
import ArrowIcon from "./arrow-icon";
import Link from "./native-link";

export type Lang = "cs" | "en";

const nav = {
  cs: [["STUDIO", "studio"], ["PIERCING", "piercing"], ["PRÁCE", "work"], ["PÉČE", "care"], ["ČLÁNKY", "journal"], ["KONTAKT", "contact"]],
  en: [["STUDIO", "studio"], ["PIERCING", "piercing"], ["WORK", "work"], ["CARE", "care"], ["JOURNAL", "journal"], ["CONTACT", "contact"]],
};

const pathFor = (lang: Lang, slug = "") => `${lang === "en" ? "/en" : ""}${slug ? `/${slug}` : "/"}`;

export function Header({ lang = "cs", slug = "", switchSlug, variant }: { lang?: Lang; slug?: string; switchSlug?: string; variant?: "v2" }) {
  const switchHref = pathFor(lang === "cs" ? "en" : "cs", switchSlug ?? slug);
  const homeHref = variant === "v2" ? "/v2" : pathFor(lang);
  const bookingHref = "https://n571820.alteg.io/";
  const links = variant === "v2" ? [["PIERCING", "/v2#piercing-index"], ["STUDIO", "/v2#safety"], ["PRÁCE", "/v2#portfolio"], ["PÉČE", "/v2#healing"], ["ČLÁNKY", "/journal"], ["KONTAKT", "/v2#contact"]] : nav[lang].map(([label, page]) => [label, pathFor(lang, page)]);
  return (
    <header className="site-header">
      <Link href={homeHref} className="brand" aria-label={lang === "cs" ? "Black Lotus — domů" : "Black Lotus — home"}><span className="brand-monogram" aria-hidden="true" /><span>BLACK LOTUS®<small>{lang === "cs" ? "PIERCINGOVÉ STUDIO / PRAHA" : "PIERCING STUDIO / PRAGUE"}</small></span></Link>
      <nav aria-label={lang === "cs" ? "Hlavní navigace" : "Main navigation"}>{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <div className="header-actions">
        <Link href={switchHref} className="lang-switch" hrefLang={lang === "cs" ? "en" : "cs"} aria-label={lang === "cs" ? "Switch to English" : "Přepnout do češtiny"}><span className={lang === "cs" ? "active-language" : ""}>CZ</span> / <span className={lang === "en" ? "active-language" : ""}>EN</span></Link>
        <Link href={bookingHref} className="book-link">{lang === "cs" ? "REZERVOVAT" : "BOOK"} <ArrowIcon /></Link>
        <MobileMenu lang={lang} links={links.map(([label, href]) => ({label, href}))} switchHref={switchHref} bookingHref={bookingHref} homeHref={homeHref} />
      </div>
    </header>
  );
}

export function Footer({ lang = "cs" }: { lang?: Lang }) {
  return (
    <footer className="footer frame">
      <div className="footer-brand"><span className="brand-monogram brand-monogram-footer" role="img" aria-label="Black Lotus" /><h2>BLACK LOTUS®</h2><p>{lang === "cs" ? "PIERCINGOVÉ STUDIO / PRAHA" : "PIERCING STUDIO / PRAGUE"}</p></div>
      <div><span>{lang === "cs" ? "NAVIGACE" : "NAVIGATION"}</span>{nav[lang].map(([label, page]) => <Link key={page} href={pathFor(lang, page)}>{label}</Link>)}</div>
      <div><span>{lang === "cs" ? "KONTAKT" : "CONTACT"}</span><a href="tel:+420777547240">+420 777 547 240</a><a href="mailto:piercingprague@gmail.com">piercingprague@gmail.com</a><p>Petrohradská 388/22<br />Praha 10 — Vršovice</p></div>
      <div><span>{lang === "cs" ? "SOCIÁLNÍ SÍTĚ" : "SOCIAL"}</span><a href="https://www.instagram.com/lotus.piercing/">INSTAGRAM <ArrowIcon /></a><a href="https://www.facebook.com/blpiercingstudio/">FACEBOOK <ArrowIcon /></a></div>
      <p className="copyright">© BLACK LOTUS {lang === "cs" ? "PIERCINGOVÉ STUDIO" : "PIERCING STUDIO"} / 2015—2026</p>
    </footer>
  );
}

export function SectionIndex({ index, label, light = false }: { index: string; label: string; light?: boolean }) {
  return <div className={`section-index ${light ? "is-light" : ""}`}><span>{index}</span><i /><b>{label}</b></div>;
}

export function PageShell({ eyebrow, title, intro, children, lang = "cs", slug, switchSlug }: { eyebrow: string; title: React.ReactNode; intro: string; children: React.ReactNode; lang?: Lang; slug: string; switchSlug?: string }) {
  return <main><Header lang={lang} slug={slug} switchSlug={switchSlug} /><section className="page-hero frame"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-intro">{intro}</p><span className="page-code">BLACK LOTUS / {lang === "cs" ? "PRAHA" : "PRAGUE"} / 2026</span></section>{children}<Footer lang={lang} /></main>;
}

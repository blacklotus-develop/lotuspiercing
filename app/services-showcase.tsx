"use client";

import { useState } from "react";
import ArrowIcon from "./arrow-icon";
import Link from "./native-link";
import { SectionIndex, type Lang } from "./site";

// SLUŽBY: na desktopu se při najetí (nebo fokusu klávesnicí) vpravo ukáže fotografie kategorie,
// na mobilu má každý řádek malý náhled. Klik vždy vede do ceníku jedním klepnutím.
// Kategorie bez vlastní fotografie (zatím Tělo, Microdermal) ukazují neutrální typografický panel.
type Service = { title: string; detail: string; img?: string; alt?: string };

const copy: Record<Lang, { label: string; title: string; intro: string; all: string; href: string; items: Service[] }> = {
  cs: {
    label: "PIERCING", title: "Služby", intro: "Jednotlivé typy piercingu vybíráme s ohledem na anatomii, hojení a váš dlouhodobý komfort.", all: "ZOBRAZIT CELÝ CENÍK", href: "/cenik",
    items: [
      { title: "Ucho", detail: "Lalůček · Helix · Conch · Rook · Daith", img: "/assets/conch.webp", alt: "Conch piercing" },
      { title: "Obličej", detail: "Nostril · Septum · Obočí · Bridge", img: "/assets/nostril.webp", alt: "Nostril piercing" },
      { title: "Tělo", detail: "Pupík · Bradavky · Surface" },
      { title: "Intimní", detail: "Individuální konzultace podle anatomie", img: "/assets/titanium.webp", alt: "Detail titanového šperku" },
      { title: "Microdermal", detail: "Aplikace · Kontrola · Odstranění" },
    ],
  },
  en: {
    label: "PIERCING", title: "Services", intro: "We choose every piercing with your anatomy, healing and long-term comfort in mind.", all: "VIEW FULL PRICE LIST", href: "/en/cenik",
    items: [
      { title: "Ear", detail: "Lobe · Helix · Conch · Rook · Daith", img: "/assets/conch.webp", alt: "Conch piercing" },
      { title: "Face", detail: "Nostril · Septum · Eyebrow · Bridge", img: "/assets/nostril.webp", alt: "Nostril piercing" },
      { title: "Body", detail: "Navel · Nipple · Surface" },
      { title: "Intimate", detail: "Individual consultation based on anatomy", img: "/assets/titanium.webp", alt: "Close-up of titanium jewelry" },
      { title: "Microdermal", detail: "Application · Check-up · Removal" },
    ],
  },
};

export default function ServicesShowcase({ lang, index }: { lang: Lang; index: string }) {
  const t = copy[lang];
  const [active, setActive] = useState(0);
  return <section className="services frame section-space">
    <SectionIndex index={index} label={t.label} />
    <div className="section-title-row"><h2>{t.title}</h2><p>{t.intro}</p></div>
    <div className="services-showcase">
      <div className="service-list">
        {t.items.map((s, i) => (
          <Link href={t.href} key={s.title} className={`service-row ${active === i ? "is-active" : ""}`} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}>
            <span>{String(i + 1).padStart(2, "0")}</span><strong>{s.title}</strong><small>{s.detail}</small>
            <i className="service-thumb" aria-hidden="true">{s.img && <img src={s.img} alt="" loading="lazy" />}</i>
            <b><ArrowIcon /></b>
          </Link>
        ))}
      </div>
      <div className="service-preview" aria-hidden="true">
        {t.items.map((s, i) => s.img
          ? <img key={s.title} src={s.img} alt={s.alt} loading={i === 0 ? "eager" : "lazy"} className={active === i ? "is-visible" : ""} />
          : <div key={s.title} className={`service-preview-empty ${active === i ? "is-visible" : ""}`}><strong>{s.title}</strong><span>{s.detail}</span></div>)}
      </div>
    </div>
    <Link href={t.href} className="text-link">{t.all} <span><ArrowIcon /></span></Link>
  </section>;
}

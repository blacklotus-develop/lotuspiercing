"use client";

import { useState } from "react";
import ArrowIcon from "./arrow-icon";
import Link from "./native-link";
import { SectionIndex, type Lang } from "./site";

/*
 * SLUŽBY — interaktivní katalog kategorií.
 * Desktop: vlevo seznam, vpravo fotografie + popis vybrané kategorie (najetí myší, fokus nebo klik).
 * Mobil: akordeon — klepnutím se kategorie otevře/zavře, vždy otevřená nejvýš jedna.
 * „Zobrazit ceny“ otevře v ceníku přímo kartu dané kategorie (/cenik#ucho …).
 * Intimní → karta Tělo (v ceníku je tam „Genitální piercing“).
 * Fotografie: Drive „SLUŽBY / HLAVNÍ“ → public/assets/sluzby-*.webp.
 */
type Category = { title: string; tab: string; img: string; alt: string; text: string; examples: string };

const copy: Record<Lang, { label: string; title: string; intro: string; prices: string; all: string; href: string; items: Category[] }> = {
  cs: {
    label: "PIERCING", title: "Služby", intro: "Jednotlivé typy piercingu vybíráme s ohledem na anatomii, hojení a váš dlouhodobý komfort.",
    prices: "ZOBRAZIT CENY", all: "ZOBRAZIT CELÝ CENÍK", href: "/cenik",
    items: [
      { title: "Ucho", tab: "ucho", img: "/assets/sluzby-ucho.webp", alt: "Piercing ušní chrupavky a lalůčku", text: "Od klasického piercingu lalůčku po výraznější umístění v chrupavce. Vhodné místo a šperk vybíráme s ohledem na anatomii vašeho ucha.", examples: "Lalůček · Helix · Conch · Tragus" },
      { title: "Obličej", tab: "oblicej", img: "/assets/sluzby-oblicej.webp", alt: "Piercing septa a nosního křídla", text: "Piercing nosu, rtu a dalších částí obličeje. Každé umístění má své anatomické možnosti, proto společně vybíráme vhodný piercing i šperk.", examples: "Nostril · Septum · Labret" },
      { title: "Tělo", tab: "telo", img: "/assets/sluzby-telo.webp", alt: "Piercing pupíku", text: "Piercing pupíku a dalších částí těla. Při výběru umístění zohledňujeme anatomii, pohyb i každodenní pohodlí.", examples: "Pupík · Další tělové piercingy" },
      { title: "Intimní", tab: "telo", img: "/assets/sluzby-intimni.webp", alt: "Detail šperku – činka s kamínky", text: "Diskrétní přístup a individuální posouzení anatomie jsou pro nás samozřejmostí. Intimní piercingy provádíme pouze dospělým klientům.", examples: "Individuální konzultace · 18+" },
      { title: "Microdermál", tab: "mikrodermal", img: "/assets/sluzby-mikrodermal.webp", alt: "Microdermal na hrudní kosti", text: "Jednobodový piercing s ozdobnou částí na povrchu kůže. Vhodné umístění vybíráme s ohledem na anatomii a možné mechanické namáhání.", examples: "Individuální umístění · Konzultace" },
    ],
  },
  en: {
    label: "PIERCING", title: "Services", intro: "We choose every piercing with your anatomy, healing and long-term comfort in mind.",
    prices: "VIEW PRICES", all: "VIEW FULL PRICE LIST", href: "/en/cenik",
    items: [
      { title: "Ear", tab: "ear", img: "/assets/sluzby-ucho.webp", alt: "Ear cartilage and lobe piercings", text: "From a classic lobe piercing to more striking placements in the cartilage. We choose the right spot and jewelry based on the anatomy of your ear.", examples: "Lobe · Helix · Conch · Tragus" },
      { title: "Face", tab: "face", img: "/assets/sluzby-oblicej.webp", alt: "Septum and nostril piercings", text: "Piercings of the nose, lips and other areas of the face. Every placement has its own anatomical possibilities, so we choose the right piercing and jewelry together.", examples: "Nostril · Septum · Labret" },
      { title: "Body", tab: "body", img: "/assets/sluzby-telo.webp", alt: "Navel piercing", text: "Navel and other body piercings. When choosing the placement, we take your anatomy, movement and everyday comfort into account.", examples: "Navel · Other body piercings" },
      { title: "Intimate", tab: "body", img: "/assets/sluzby-intimni.webp", alt: "Close-up of a barbell with crystals", text: "A discreet approach and an individual assessment of your anatomy go without saying. We perform intimate piercings on adult clients only.", examples: "Individual consultation · 18+" },
      { title: "Microdermal", tab: "microdermal", img: "/assets/sluzby-mikrodermal.webp", alt: "Microdermal on the sternum", text: "A single-point piercing with a decorative top sitting on the surface of the skin. We choose the placement based on your anatomy and possible mechanical strain.", examples: "Individual placement · Consultation" },
    ],
  },
};

const num = (i: number) => String(i + 1).padStart(2, "0");

function Info({ c, i, prices, href }: { c: Category; i: number; prices: string; href: string }) {
  return <>
    <span className="svc-info-label">{num(i)} / {c.title}</span>
    <h3>{c.title}</h3>
    <p>{c.text}</p>
    <p className="svc-examples">{c.examples}</p>
    <Link href={`${href}#${c.tab}`} className="text-link">{prices} <span><ArrowIcon /></span></Link>
  </>;
}

export default function ServicesShowcase({ lang, index }: { lang: Lang; index: string }) {
  const t = copy[lang];
  const [shown, setShown] = useState(0);              // desktop: vybraná kategorie (zůstává i po odjetí myší)
  const [open, setOpen] = useState<number | null>(0); // mobil: otevřená položka akordeonu
  const toggle = (i: number) => { setShown(i); setOpen(open === i ? null : i); };

  return <section className="services frame section-space">
    <SectionIndex index={index} label={t.label} />
    <div className="section-title-row"><h2>{t.title}</h2><p>{t.intro}</p></div>
    <div className="svc">
      <ul className="svc-list">
        {t.items.map((c, i) => <li key={c.title} className={open === i ? "is-open" : undefined}>
          <button type="button" className={`service-row svc-row ${shown === i ? "is-active" : ""}`}
            aria-expanded={open === i} aria-controls={`svc-acc-${lang}-${i}`}
            onMouseEnter={() => setShown(i)} onFocus={() => setShown(i)} onClick={() => toggle(i)}>
            <span>{num(i)}</span><strong>{c.title}</strong><b aria-hidden="true"><ArrowIcon /></b>
          </button>
          {/* Mobil: obsah akordeonu */}
          <div id={`svc-acc-${lang}-${i}`} className="svc-acc" aria-hidden={open !== i} inert={open !== i}>
            <div className="svc-acc-inner">
              <img src={c.img} alt={c.alt} loading="lazy" decoding="async" />
              <div className="svc-info"><Info c={c} i={i} prices={t.prices} href={t.href} /></div>
            </div>
          </div>
        </li>)}
      </ul>
      {/* Desktop: panel vybrané kategorie — vrstvy leží na sobě, takže se výška nemění */}
      <div className="svc-panel">
        <div className="svc-photos" aria-hidden="true">
          {t.items.map((c, i) => <img key={c.title} src={c.img} alt="" decoding="async" className={shown === i ? "is-visible" : undefined} />)}
        </div>
        <div className="svc-infos">
          {t.items.map((c, i) => <div key={c.title} className={`svc-info ${shown === i ? "is-visible" : ""}`} aria-hidden={shown !== i} inert={shown !== i}><Info c={c} i={i} prices={t.prices} href={t.href} /></div>)}
        </div>
      </div>
    </div>
    <Link href={t.href} className="text-link">{t.all} <span><ArrowIcon /></span></Link>
  </section>;
}

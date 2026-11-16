import { articles as enArticles } from "../en/journal/articles";

/*
 * Obálky článků — jediné místo, kde se obálka nastavuje.
 * Používá se v: záhlaví článku, seznamu /journal, náhledech na hlavní stránce, „Čtěte také“ a Open Graph.
 * Klíč = česká adresa článku; anglická verze používá stejnou fotografii.
 * Soubory: public/assets/journal-cover-<adresa>.webp (čtverec, max. 1000 px) a -480.webp (menší varianta).
 * Výřez je připravený předem (čtverec), aby nebyly oříznuté šperky ani uši.
 */
export type Cover = { src: string; srcSmall: string; size: number; alt: { cs: string; en: string } };

const cover = (slug: string, size: number, cs: string, en: string): Cover => ({
  src: `/assets/journal-cover-${slug}.webp`,
  srcSmall: `/assets/journal-cover-${slug}-480.webp`,
  size,
  alt: { cs, en },
});

export const covers: Record<string, Cover> = {
  // BLOG: „Нежный профиль с сияющей серьгой в носу.png“
  "vymena-prvniho-sperku": cover("vymena-prvniho-sperku", 1000,
    "Piercing nosního křídla (nostril) s drobným šperkem",
    "Nostril piercing with a small piece of jewelry"),
  // BLOG: „Untitled_Panorama-1_….webp“ — obecná produktová fotografie, nepředstavuje konkrétní materiálový standard
  "titan-vs-chirurgicka-ocel": cover("titan-vs-chirurgicka-ocel", 990,
    "Kroužek s kamínky ve tvaru kapky položený na tmavém kameni",
    "Teardrop-shaped ring with stones resting on dark stone"),
  // Web: studio-visit-process.webp (proces ve studiu Black Lotus)
  "prvni-piercing-krok-za-krokem": cover("prvni-piercing-krok-za-krokem", 1000,
    "Piercer v rukavicích označuje klientce místo piercingu na uchu",
    "A gloved piercer marking the placement on a client's ear"),
  // BLOG: „Пирсинг пупка и чёрный кожаный ремень.png“
  "co-je-normalni-pri-hojeni": cover("co-je-normalni-pri-hojeni", 1000,
    "Piercing pupíku se šperkem s kamínky",
    "Navel piercing with jeweled jewelry"),
  // BLOG: fotografie dětského ucha (vybraná majitelkou studia pro tento článek)
  "piercing-u-nezletilych": cover("piercing-u-nezletilych", 941,
    "Detail dětského ucha s malou náušnicí v lalůčku",
    "Close-up of a child's ear with a small stud in the lobe"),
  // BLOG: „Сверкающие украшения на ухе.png“
  "proc-neni-kazdy-piercing-pro-kazdeho": cover("proc-neni-kazdy-piercing-pro-kazdeho", 1000,
    "Ucho s několika piercingy chrupavky a lalůčku",
    "An ear with several cartilage and lobe piercings"),
};

/** Obálka podle jazyka a adresy článku (pro EN se adresa převede na českou). */
export function coverOf(lang: "cs" | "en", slug: string): Cover | undefined {
  const cs = lang === "cs" ? slug : enArticles[slug as keyof typeof enArticles]?.cs;
  return cs ? covers[cs] : undefined;
}

import type { GalleryImage } from "./article-gallery";

// Doplňky k jednotlivým oddílům článků (galerie, podnadpis, odkaz pod textem).
// Klíč: jazyk → adresa článku → přesný nadpis oddílu v articles.ts.
export type SectionExtra = {
  subtitle?: string;
  intro?: string;
  images?: GalleryImage[];
  caption?: string;
  link?: { label: string; href: string };
};

// Fotografie: Drive „BLOG“, IMG_8781–8784 (původní koláže, bez úprav a bez ořezu).
// Body na fotografiích jsou součástí originálů — neměnit bez souhlasu piercera.
const placement = (alt: (i: number) => string): GalleryImage[] =>
  [1, 2, 3, 4].map(i => ({ src: `/assets/journal-nezletili-umisteni-${i}.webp`, alt: alt(i), width: 1206, height: 2144 }));

export const articleMedia: Record<"cs" | "en", Record<string, Record<string, SectionExtra>>> = {
  cs: {
    "piercing-u-nezletilych": {
      "Proč s piercingem dětských uší nespěchat?": {
        subtitle: "Příklady umístění piercingu",
        intro: "Na následujících fotografiích můžete vidět příklady existujících piercingů ušních lalůčků. Označené body znázorňují orientační alternativní umístění, které by bylo možné zvážit vzhledem k současné anatomii ucha.\n\nNejde o univerzální návod ke správnému umístění. Každé ucho je jiné a vhodnou pozici piercingu je vždy potřeba posoudit individuálně.",
        images: placement(i => `Koláž ${i} ze 4: čtyři ušní lalůčky s existujícími piercingy a bílými či zelenými body orientačního alternativního umístění`),
        caption: "Označené body představují orientační alternativní umístění podle aktuálních proporcí ucha. Konkrétní vhodnou pozici je vždy nutné posoudit individuálně.",
      },
      "Kdy je tedy vhodný čas?": {
        link: { label: "PODMÍNKY PRO NEZLETILÉ", href: "/care#minors" },
      },
    },
  },
  en: {
    "piercing-for-minors": {
      "Why not rush a child's ear piercing?": {
        subtitle: "Examples of piercing placement",
        intro: "The photos below show examples of existing earlobe piercings. The marked dots show approximate alternative placements that could be considered given the current anatomy of the ear.\n\nThis is not a universal guide to correct placement. Every ear is different, and the right position always needs to be assessed individually.",
        images: placement(i => `Collage ${i} of 4: four earlobes with existing piercings and white or green dots marking approximate alternative placements`),
        caption: "The marked dots show approximate alternative placements based on the current proportions of the ear. The right position for a specific person always needs to be assessed individually.",
      },
      "So when is the right time?": {
        link: { label: "RULES FOR MINORS", href: "/en/care#minors" },
      },
    },
  },
};

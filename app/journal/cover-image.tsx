import { coverOf } from "./covers";

// Obálka článku (viz covers.ts). sizes = šířka, ve které se obrázek na stránce zobrazuje.
export default function CoverImage({ lang, slug, sizes, eager, className }: {
  lang: "cs" | "en"; slug: string; sizes: string; eager?: boolean; className?: string;
}) {
  const c = coverOf(lang, slug);
  if (!c) return null;
  return <img className={className} src={c.src} srcSet={`${c.srcSmall} 480w, ${c.src} ${c.size}w`} sizes={sizes}
    width={c.size} height={c.size} alt={c.alt[lang]} loading={eager ? "eager" : "lazy"} decoding="async" />;
}

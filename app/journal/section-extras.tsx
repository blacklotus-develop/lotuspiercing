import ArrowIcon from "../arrow-icon";
import Link from "../native-link";
import ArticleGallery from "./article-gallery";
import type { SectionExtra } from "./article-media";
import RichText from "./rich-text";

// Vykreslí doplňky oddílu článku (viz article-media.ts). Články bez doplňků se nemění.
export default function SectionExtras({ extra, lang }: { extra?: SectionExtra; lang: "cs" | "en" }) {
  if (!extra) return null;
  return <>
    {extra.subtitle && <h3 className="article-subtitle">{extra.subtitle}</h3>}
    {extra.intro && <RichText text={extra.intro} />}
    {extra.images && <figure className="article-figure">
      <ArticleGallery images={extra.images} lang={lang} />
      {extra.caption && <figcaption>{extra.caption}</figcaption>}
    </figure>}
    {extra.link && <Link href={extra.link.href} className="text-link">{extra.link.label} <span><ArrowIcon /></span></Link>}
  </>;
}

import ArrowIcon from "../../arrow-icon";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "../../native-link";
import { OG_IMAGE, SITE_NAME } from "../../seo";
import { Footer, Header } from "../../site";

import { articles } from "../articles";
import RichText from "../rich-text";
import { articleMedia } from "../article-media";
import SectionExtras from "../section-extras";

export function generateStaticParams() { return Object.keys(articles).map(article => ({ article })); }

export async function generateMetadata({ params }: { params: Promise<{ article: string }> }): Promise<Metadata> {
  const { article } = await params;
  const data = articles[article as keyof typeof articles];
  if (!data) return {};
  const seo = "seo" in data ? data.seo : undefined;
  return {
    title: `${data.title} | Black Lotus Piercing Praha`,
    description: seo?.description ?? data.lead,
    keywords: seo ? [...seo.keywords] : undefined,
    alternates: {
      canonical: `/journal/${article}`,
      languages: {
        cs: `/journal/${article}`,
        en: `/en/journal/${data.en}`,
      },
    },
    openGraph: {
      type: "article",
      locale: "cs_CZ",
      title: data.title,
      description: seo?.description ?? data.lead,
      url: `/journal/${article}`,
      siteName: SITE_NAME,
      images: [OG_IMAGE],
    },
  };
}

export default async function Article({ params }: { params: Promise<{ article: string }> }) {
  const { article } = await params;
  const data = articles[article as keyof typeof articles];
  if (!data) notFound();
  // Čtěte také: ručně vybrané související články (pole related v articles.ts).
  const media = articleMedia.cs[article];
  const relatedArticles = data.related.map(slug => [slug, articles[slug]] as const);
  return <main><Header lang="cs" slug={`journal/${article}`} switchSlug={`journal/${data.en}`} />
    <article className="article-page frame">
      <div className="article-hero"><p>{data.tag}</p><h1>{data.title}</h1><strong>{data.lead}</strong></div>
      <div className="article-body">{data.sections.map(([title,text],i)=><section key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h2>{title}</h2><RichText text={text} /><SectionExtras extra={media?.[title]} lang="cs" /></div></section>)}</div>
      <div className="article-cta"><p>Máte otázku ke svému piercingu?</p><Link href="https://n571820.alteg.io/" className="button button-light">REZERVOVAT KONZULTACI <ArrowIcon /></Link></div>
      <Link href="/journal" className="text-link"><ArrowIcon back /> ZPĚT NA VŠECHNY ČLÁNKY</Link>
      <section className="journal section-space" aria-labelledby="related-articles">
        <div className="section-title-row"><h2 id="related-articles">Čtěte také</h2><Link href="/journal" className="text-link">VŠECHNY ČLÁNKY <span><ArrowIcon /></span></Link></div>
        <div className="article-grid">{relatedArticles.map(([slug, related]) => <Link href={`/journal/${slug}`} key={slug}><span>{related.tag}</span><h3>{related.title}</h3><p>{related.lead}</p><b><ArrowIcon /></b></Link>)}</div>
      </section>
    </article><Footer lang="cs" /></main>;
}

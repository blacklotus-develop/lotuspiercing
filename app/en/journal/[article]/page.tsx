import ArrowIcon from "../../../arrow-icon";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "../../../native-link";
import { OG_IMAGE, SITE_NAME } from "../../../seo";
import { Footer, Header } from "../../../site";

import { articles } from "../articles";
import RichText from "../../../journal/rich-text";
import { articleMedia } from "../../../journal/article-media";
import SectionExtras from "../../../journal/section-extras";
import CoverImage from "../../../journal/cover-image";
import { coverOf } from "../../../journal/covers";

export function generateStaticParams() { return Object.keys(articles).map(article => ({ article })); }

export async function generateMetadata({ params }: { params: Promise<{ article: string }> }): Promise<Metadata> {
  const { article } = await params;
  const data = articles[article as keyof typeof articles];
  if (!data) return {};
  const seo = "seo" in data ? data.seo : undefined;
  return {
    title: `${data.title} | Black Lotus Piercing Prague`,
    description: seo?.description ?? data.lead,
    keywords: seo ? [...seo.keywords] : undefined,
    alternates: {
      canonical: `/en/journal/${article}`,
      languages: {
        cs: `/journal/${data.cs}`,
        en: `/en/journal/${article}`,
      },
    },
    openGraph: {
      type: "article",
      locale: "en_GB",
      title: data.title,
      description: seo?.description ?? data.lead,
      url: `/en/journal/${article}`,
      siteName: SITE_NAME,
      images: (() => { const c = coverOf("en", article); return c ? [{ url: c.src, width: c.size, height: c.size, alt: c.alt.en }] : [OG_IMAGE]; })(),
    },
  };
}

export default async function Article({ params }: { params: Promise<{ article: string }> }) {
  const { article } = await params;
  const data = articles[article as keyof typeof articles];
  if (!data) notFound();
  // Čtěte také: ručně vybrané související články (pole related v articles.ts).
  const media = articleMedia.en[article];
  const relatedArticles = data.related.map(slug => [slug, articles[slug]] as const);
  return <main><Header lang="en" slug={`journal/${article}`} switchSlug={`journal/${data.cs}`} />
    <article className="article-page frame">
      <div className="article-hero has-cover"><div className="article-hero-text"><p>{data.tag}</p><h1>{data.title}</h1><strong>{data.lead}</strong></div><figure className="article-hero-cover"><CoverImage lang="en" slug={article} sizes="(max-width: 600px) 100vw, 400px" eager /></figure></div>
      <div className="article-body">{data.sections.map(([title,text],i)=><section key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h2>{title}</h2><RichText text={text} /><SectionExtras extra={media?.[title]} lang="en" /></div></section>)}</div>
      <div className="article-cta"><p>Have a question about your piercing?</p><Link href="https://n571820.alteg.io/" className="button button-light">BOOK A CONSULTATION <ArrowIcon /></Link></div>
      <Link href="/en/journal" className="text-link"><ArrowIcon back /> BACK TO ALL ARTICLES</Link>
      <section className="journal section-space" aria-labelledby="related-articles">
        <div className="section-title-row"><h2 id="related-articles">Read next</h2><Link href="/en/journal" className="text-link">ALL ARTICLES <span><ArrowIcon /></span></Link></div>
        <div className="article-grid has-covers">{relatedArticles.map(([slug, related]) => <Link href={`/en/journal/${slug}`} key={slug}><CoverImage lang="en" slug={slug} sizes="(max-width: 900px) 104px, 33vw" /><span>{related.tag}</span><h3>{related.title}</h3><p>{related.lead}</p><b><ArrowIcon /></b></Link>)}</div>
      </section>
    </article><Footer lang="en" /></main>;
}

import ArrowIcon from "../../../arrow-icon";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "../../../native-link";
import { OG_IMAGE, SITE_NAME } from "../../../seo";
import { Footer, Header } from "../../../site";

import { articles } from "../articles";

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
      images: [OG_IMAGE],
    },
  };
}

export default async function Article({ params }: { params: Promise<{ article: string }> }) {
  const { article } = await params;
  const data = articles[article as keyof typeof articles];
  if (!data) notFound();
  const relatedArticles = Object.entries(articles).filter(([slug]) => slug !== article).slice(0, 3);
  return <main><Header lang="en" slug={`journal/${article}`} switchSlug={`journal/${data.cs}`} />
    <article className="article-page frame">
      <div className="article-hero"><p>{data.tag}</p><h1>{data.title}</h1><strong>{data.lead}</strong></div>
      <div className="article-body">{data.sections.map(([title,text],i)=><section key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h2>{title}</h2><p>{text}</p></div></section>)}</div>
      <div className="article-cta"><p>Have a question about your piercing?</p><Link href="https://n571820.alteg.io/" className="button button-light">BOOK A CONSULTATION <ArrowIcon /></Link></div>
      <Link href="/en/journal" className="text-link"><ArrowIcon back /> BACK TO ALL ARTICLES</Link>
      <section className="journal section-space" aria-labelledby="related-articles">
        <div className="section-title-row"><h2 id="related-articles">Read next</h2><Link href="/en/journal" className="text-link">ALL ARTICLES <span><ArrowIcon /></span></Link></div>
        <div className="article-grid">{relatedArticles.map(([slug, related]) => <Link href={`/en/journal/${slug}`} key={slug}><span>{related.tag}</span><h3>{related.title}</h3><p>{related.lead}</p><b><ArrowIcon /></b></Link>)}</div>
      </section>
    </article><Footer lang="en" /></main>;
}

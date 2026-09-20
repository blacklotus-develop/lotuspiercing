import { notFound } from 'next/navigation';
import { Header, Footer, SectionIndex } from '../../../site';
import ArrowIcon from '../../../arrow-icon';
import { piercings, booking } from '../../data';
export const metadata={robots:{index:false,follow:true}};
export function generateStaticParams(){return piercings.map(p=>({slug:p.slug}))}
export default async function PiercingDetail({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const p=piercings.find(p=>p.slug===slug);if(!p)notFound();
 const image=slug==='helix'?'hero':slug==='conch'?'conch':slug==='nostril'?'nostril':null;
 return <main className="v2 v2-detail"><Header lang="cs" variant="v2"/><section className="frame section-space"><SectionIndex index="PIERCING" label={p.category}/><h1 className="v2-heading">{p.name}</h1><p className="v2-detail-intro">{p.description}</p><div className="v2-detail-links"><a href={booking} className="button button-dark">OBJEDNAT TERMÍN <ArrowIcon/></a><a href="/v2#piercing-index" className="button">VŠECHNY PIERCINGY <ArrowIcon back/></a></div>{image&&<figure><img src={`/assets/${image}.webp`} alt={`Ilustrační umístění piercingu ${p.name}`}/><figcaption>Ilustrační detail umístění. Realizace studia najdete na Instagramu @lotus.piercing.</figcaption></figure>}</section>
 <section className="frame v2-detail-panels"><article id="price"><span className="v2-label">01 / CENA</span><h2>od {p.price.toLocaleString('cs-CZ')} Kč</h2><p>Základní titanový šperk je zahrnutý v orientační ceně. Konečnou částku potvrdíme podle umístění a vybraného šperku.{slug==='nipple'?' Cena je za jednu bradavku.':''}</p><a className="text-link" href="/piercing">CELÝ CENÍK <ArrowIcon/></a></article><article id="healing"><span className="v2-label">02 / HOJENÍ</span><h2>Vlastním tempem.</h2><p>Hojení závisí na místě i individuální reakci. Vyhněte se tlaku a zbytečné manipulaci. Vhodný čas kontroly, zkrácení i výměny šperku domluvíme podle skutečného stavu.</p><a className="text-link" href="/care#aftercare">PÉČE O PIERCING <ArrowIcon/></a></article></section>
 <section className="frame section-space"><SectionIndex index="03" label="ANATOMY FIRST"/><h2 className="v2-heading">Nejdřív anatomie.<br/>Potom piercing.</h2><p className="v2-detail-intro">Při konzultaci ověříme vhodnost umístění, vybereme rozměr šperku a probereme vaše každodenní návyky.</p><div className="v2-detail-links"><a href={booking} className="button button-dark">KONZULTACE <ArrowIcon/></a><a href="/v2#faq" className="text-link">ČASTÉ OTÁZKY <ArrowIcon/></a></div></section><Footer lang="cs"/></main>
}

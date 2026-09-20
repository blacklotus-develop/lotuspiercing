import { Header, Footer, SectionIndex } from '../../site';
import ArrowIcon from '../../arrow-icon';
import { faq, booking } from '../data';
export const metadata={title:'Otázky před piercingem | Black Lotus',robots:{index:false,follow:true}};
export default function FAQPage(){return <main className="v2"><Header variant="v2"/><section className="frame section-space"><SectionIndex index="FAQ" label="PŘED NÁVŠTĚVOU"/><h1 className="v2-heading">Na co se ptáte.</h1><div className="v2-faq">{faq.map(([question,answer],i)=><details key={question} open><summary><span>0{i+1}</span><h3>{question}</h3><b aria-hidden="true">+</b></summary><p>{answer}</p></details>)}</div><div className="v2-detail-links"><a href={booking} className="button button-dark">KONZULTACE <ArrowIcon/></a><a href="/v2" className="button">ZPĚT NA HLAVNÍ STRÁNKU <ArrowIcon back/></a></div></section><Footer/></main>}

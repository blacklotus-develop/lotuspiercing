import ArrowIcon from "../../arrow-icon";
import { notFound } from "next/navigation";
import Link from "../../native-link";
import { Footer, Header } from "../../site";

const articles = {
  "vymena-prvniho-sperku": {
    en: "changing-initial-jewelry", tag: "PÉČE / 06 MIN", title: "Kdy je správný čas vyměnit první šperk?",
    lead: "O výměně nerozhoduje jen počet týdnů. Důležitý je typ piercingu, stav tkáně a to, zda původní otok skutečně ustoupil.",
    sections: [["Proč není jeden termín pro všechny", "Lalůček, chrupavka i nostril se hojí jinak. Rychlost ovlivňuje také anatomie, tlak při spánku, zachytávání šperku a celkový stav organismu. Kalendář je proto pouze orientační."],["Zkrácení není totéž co výměna", "U některých piercingů se po odeznění otoku mění delší počáteční tyčka za kratší. Jde o kontrolovaný downsizing, který omezuje pohyb šperku a riziko zachytávání."],["Kdy přijít na kontrolu", "Pokud je místo klidné, bez rostoucího otoku, výrazné bolesti a neobvyklého výtoku, objednejte se na kontrolu. Piercer posoudí kanálek a doporučí další postup."]],
  },
  "titan-vs-chirurgicka-ocel": {
    en: "titanium-vs-surgical-steel", tag: "MATERIÁL / 04 MIN", title: "Titan ASTM F-136 vs. chirurgická ocel",
    lead: "Dva stříbrné šperky mohou vypadat téměř stejně, ale jejich složení, hmotnost a vhodnost pro čerstvý piercing se liší.",
    sections: [["Co znamená ASTM F-136", "Jde o normu pro titanovou slitinu používanou také pro chirurgické implantáty. Materiál je lehký, odolný a biokompatibilní."],["Proč záleží na povrchu", "Nestačí jen správný materiál. Hladký, precizně leštěný povrch omezuje mechanické dráždění čerstvého kanálku."],["Co používáme v Black Lotus", "Pro první aplikaci volíme implantátový titan ASTM F-136 a správný rozměr podle anatomie a očekávaného otoku."]],
  },
  "prvni-piercing-krok-za-krokem": {
    en: "first-piercing-step-by-step", tag: "PRŮVODCE / 08 MIN", title: "První piercing krok za krokem",
    lead: "Od výběru umístění po instrukce k hojení. Podívejte se, co vás ve studiu čeká a proč žádný krok nepřeskakujeme.",
    sections: [["01 / Konzultace", "Probereme vaše přání, anatomii, životní styl i očekávání. Pokud zvolené umístění není vhodné, navrhneme bezpečnější alternativu."],["02 / Umístění a šperk", "Společně potvrdíme pozici, rozměr a typ šperku. Pro první aplikaci používáme implantátový titan ASTM F-136."],["03 / Aplikace", "Pracujeme se sterilním vybavením a jednorázovou jehlou. Každý krok předem vysvětlíme."],["04 / Následná péče", "Dostanete jasné instrukce k čištění, spánku, sportu a kontrole. V případě nejistoty jsme vám k dispozici."]],
  },
  "co-je-normalni-pri-hojeni": {
    en: "normal-during-healing", tag: "HOJENÍ / 06 MIN", title: "Co je normální během hojení?",
    lead: "Mírná citlivost, otok nebo zaschlá tkáňová tekutina mohou být součástí hojení. Důležité je sledovat vývoj, ne jediný okamžik.",
    sections: [["Běžné reakce", "V prvních dnech může být místo citlivé, teplejší a lehce oteklé. Příznaky by se měly postupně uklidňovat."],["Kdy nás kontaktovat", "Ozvěte se při rostoucí bolesti, výrazném otoku, šířícím se zarudnutí nebo pokud se šperk začíná zanořovat."],["Nevyndávejte šperk bez konzultace", "Předčasné vyjmutí může uzavřít povrch kanálku a zkomplikovat řešení potíží. Nejdříve kontaktujte studio."]],
  },
  "piercing-u-nezletilych": {
    en: "piercing-for-minors", tag: "NEZLETILÍ / 05 MIN", title: "Piercing u nezletilých",
    lead: "Podmínky se řídí věkem, typem piercingu a přítomností zákonného zástupce.",
    sections: [["Co přinést", "Platný doklad nezletilého i zákonného zástupce. Zástupce musí být přítomen po celou dobu návštěvy."],["Věkové hranice", "Ne každý typ piercingu provádíme v každém věku. Konkrétní podmínky si ověřte před rezervací."],["Souhlas nestačí na dálku", "Písemný souhlas bez osobní přítomnosti zákonného zástupce nepřijímáme."]],
  },
  "proc-neni-kazdy-piercing-pro-kazdeho": {
    en: "anatomy-and-piercing", tag: "ANATOMIE / 07 MIN", title: "Proč není každý piercing pro každého",
    lead: "Správné umístění není jen estetické rozhodnutí. Tvar tkáně, prostor a úhel ovlivňují stabilitu i hojení.",
    sections: [["Anatomie před trendem", "Fotografie může být inspirací, ale nelze ji jednoduše zkopírovat na jiné tělo. Nejprve posoudíme, zda má tkáň vhodný tvar a prostor."],["Úhel a tlak", "Nevhodný úhel nebo dlouhodobý tlak mohou vést k podráždění, migraci nebo odmítnutí piercingu."],["Alternativa může být lepší", "Pokud původní nápad není bezpečný, navrhneme umístění nebo šperk se stejným vizuálním účinkem a lepší prognózou."]],
  },
} as const;

export function generateStaticParams() { return Object.keys(articles).map(article => ({ article })); }

export default async function Article({ params }: { params: Promise<{ article: string }> }) {
  const { article } = await params;
  const data = articles[article as keyof typeof articles];
  if (!data) notFound();
  return <main><Header lang="cs" slug={`journal/${article}`} switchSlug={`journal/${data.en}`} />
    <article className="article-page frame">
      <div className="article-hero"><p>{data.tag}</p><h1>{data.title}</h1><strong>{data.lead}</strong></div>
      <div className="article-body">{data.sections.map(([title,text],i)=><section key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h2>{title}</h2><p>{text}</p></div></section>)}</div>
      <div className="article-cta"><p>Máte otázku ke svému piercingu?</p><Link href="/booking" className="button button-light">REZERVOVAT KONZULTACI <ArrowIcon /></Link></div>
      <Link href="/journal" className="text-link"><ArrowIcon back /> ZPĚT NA VŠECHNY ČLÁNKY</Link>
    </article><Footer lang="cs" /></main>;
}

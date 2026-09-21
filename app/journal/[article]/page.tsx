import ArrowIcon from "../../arrow-icon";
import type { Metadata } from "next";
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
    en: "titanium-vs-surgical-steel", tag: "MATERIÁLY / 09 MIN", title: "Titan vs. chirurgická ocel: jaký materiál zvolit pro piercing?",
    lead: "Nápis „titan“ nebo „chirurgická ocel“ sám o sobě nestačí. U šperku do piercingu rozhoduje přesná jakost materiálu, povrch, konstrukce i rozměr.",
    seo: {
      description: "Titan ASTM F-136, chirurgická ocel, zlato, niob a PTFE: zjistěte, které materiály jsou vhodné pro čerstvý piercing a podle čeho poznat kvalitní šperk.",
      keywords: ["titan vs chirurgická ocel", "materiál šperku pro piercing", "ASTM F-136", "šperk do čerstvého piercingu", "piercing Praha"],
    },
    sections: [
      ["Čerstvý a zahojený piercing nejsou totéž", "Čerstvý piercing je hojící se rána. Šperk v něm zůstává nepřetržitě a přichází do přímého kontaktu s tkání, proto jsou nároky na materiál, povrch a konstrukci vyšší než u zahojeného kanálku. To, co lze krátkodobě nosit v zahojeném piercingu, nemusí být vhodné pro první aplikaci."],
      ["Materiál je jen první část odpovědi", "Důležité je přesné označení slitiny a možnost doložit její původ. Stejně podstatný je zrcadlově hladký povrch bez rýh, bezpečná konstrukce bez ostrého závitu procházejícího kanálkem a rozměr odpovídající anatomii i očekávanému otoku."],
      ["Implantátový titan ASTM F-136", "Titanová slitina splňující ASTM F-136 patří mezi nejčastější volby pro první šperk. Je lehká, odolná proti korozi a neobsahuje nikl. Označení „titan“ však není certifikace — bez uvedené normy a dohledatelného výrobce není možné poznat přesné složení pouhým pohledem."],
      ["Chirurgická ocel: název nestačí", "Ne každá ocel je automaticky nevhodná. Pro počáteční šperk mohou vyhovovat konkrétní certifikované jakosti, například ASTM F-138 nebo ISO 5832-1. Obecné označení „chirurgická ocel“ ale neříká, jaká slitina byla použita. Ocel navíc obsahuje nikl a je těžší než titan, proto v Black Lotus pro první aplikaci preferujeme implantátový titan ASTM F-136."],
      ["Zlato musí splnit několik podmínek", "Pro piercing se používá plné zlato vhodné ryzosti a složení, zpravidla 14 až 18 karátů, bez niklu a kadmia. Pozlacené šperky, gold-filled materiál ani vermeil nejsou vhodnou volbou pro čerstvý piercing: povrchová vrstva se může opotřebovat a odhalit základní kov."],
      ["Niob, sklo a PTFE", "Kvalitní niob a některé druhy bezolovnatého skla mohou být pro piercing vhodné. PTFE je pružný polymer využívaný ve specifických situacích, jeho pružnost ale automaticky neznamená lepší hojení než u titanu. Vhodnost vždy závisí na konkrétním piercingu, kvalitě výrobku a doporučení zkušeného piercera."],
      ["Co do čerstvého piercingu nepatří", "Stříbro, akryl a porézní organické materiály, jako je dřevo, kost nebo roh, nejsou vhodné pro první aplikaci. Problematické jsou také šperky s neznámým složením, nekvalitním povlakem nebo hrubým povrchem. Organické materiály mohou mít své místo v plně zahojených roztažených lalůčcích, ale vyžadují jiný způsob nošení a péče."],
      ["Anodizace není barevný nátěr", "Při anodizaci titanu vzniká na povrchu kontrolovaná oxidická vrstva, která mění způsob, jakým šperk odráží světlo. Barva tedy nevzniká nanesením pigmentu. Odstín může časem vlivem tření a chemie pokožky zeslábnout, šperk však nepřestává být titanový."],
      ["Jak poznat kvalitní šperk", "Ptejte se na přesnou normu materiálu a výrobce. Zkontrolujte hladký povrch, vnitřní závit nebo threadless konstrukci a nechte si zvolit správnou délku i průměr podle anatomie. Podezřele nízká cena, neurčité označení materiálu a chybějící informace o původu jsou důvodem k opatrnosti."],
      ["Co používáme v Black Lotus", "Pro první aplikaci standardně volíme implantátový titan ASTM F-136. Typ, délku a průměr šperku vybíráme individuálně podle anatomie, umístění a prostoru pro počáteční otok. Při kontrole následně posoudíme, zda je vhodný čas na downsizing."],
      ["Je titan vždy nejlepší volba?", "Pro většinu prvních aplikací je kvalitní implantátový titan velmi spolehlivou volbou, neexistuje ale jeden šperk pro každé tělo a každý piercing. Rozhoduje kombinace materiálu, konstrukce, rozměru, anatomie a následné péče."],
      ["Lze do čerstvého piercingu vlastní šperk?", "Pouze pokud lze bezpečně ověřit materiál, rozměr, konstrukci a možnost sterilizace. Neoznačený šperk z internetu nebo šperk dříve nošený jinou osobou pro první aplikaci nepoužíváme."],
    ],
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
      canonical: `https://lotuspiercing.cz/journal/${article}`,
      languages: {
        cs: `https://lotuspiercing.cz/journal/${article}`,
        en: `https://lotuspiercing.cz/en/journal/${data.en}`,
      },
    },
    openGraph: {
      type: "article",
      locale: "cs_CZ",
      title: data.title,
      description: seo?.description ?? data.lead,
      url: `https://lotuspiercing.cz/journal/${article}`,
      siteName: "Black Lotus Piercing Studio",
    },
  };
}

export default async function Article({ params }: { params: Promise<{ article: string }> }) {
  const { article } = await params;
  const data = articles[article as keyof typeof articles];
  if (!data) notFound();
  return <main><Header lang="cs" slug={`journal/${article}`} switchSlug={`journal/${data.en}`} />
    <article className="article-page frame">
      <div className="article-hero"><p>{data.tag}</p><h1>{data.title}</h1><strong>{data.lead}</strong></div>
      <div className="article-body">{data.sections.map(([title,text],i)=><section key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h2>{title}</h2><p>{text}</p></div></section>)}</div>
      <div className="article-cta"><p>Máte otázku ke svému piercingu?</p><Link href="https://n571820.alteg.io/" className="button button-light">REZERVOVAT KONZULTACI <ArrowIcon /></Link></div>
      <Link href="/journal" className="text-link"><ArrowIcon back /> ZPĚT NA VŠECHNY ČLÁNKY</Link>
    </article><Footer lang="cs" /></main>;
}

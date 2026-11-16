import HeroSlides from "./hero-slides";
import ArrowIcon from "./arrow-icon";
import Link from "./native-link";
import { pageMetadata } from "./seo";
import { Footer, Header, SectionIndex } from "./site";
import HomeFaq from "./home-faq";
import { faqItems } from "./home-faq-items";
import { InstagramPreview, ReviewsPreview } from "./integration-preview";

const MAP_URL = "https://maps.app.goo.gl/gQLt5m7vFCdRuKzTA";

// PROSTOR → konkrétní části stránky Studio (kotvy #story, #sterilisation, #visit existují).
const studioLinks = [
  ["01", "Náš příběh", "Poznejte příběh Black Lotus, naše hodnoty a přístup k piercingu.", "/studio#story"],
  ["02", "Sterilizace", "Zjistěte, jak probíhá příprava nástrojů a jak dbáme na bezpečnost každého zákroku.", "/studio#sterilisation"],
  ["03", "Průběh návštěvy", "Podívejte se, co vás čeká od první konzultace až po samotnou aplikaci piercingu.", "/studio#visit"],
];

export const metadata = pageMetadata({
  lang: "cs", cs: "/", en: "/en",
  title: "Black Lotus Piercing Studio | Piercing v Praze",
  description: "Profesionální piercingové studio v Praze 10 – Vršovicích. Implantátový titan ASTM F-136, důsledná sterilizace, individuální přístup a online rezervace.",
});

const services = [
  ["01", "Ucho", "Lalůček · Helix · Conch · Rook · Daith"],
  ["02", "Obličej", "Nostril · Septum · Obočí · Bridge"],
  ["03", "Tělo", "Pupík · Bradavky · Surface"],
  ["04", "Intimní", "Individuální konzultace podle anatomie"],
  ["05", "Microdermal", "Aplikace · Kontrola · Odstranění"],
];

const sterile = [
  ["01", "Předčištění", "Příprava nástrojů a mechanické odstranění nečistot."],
  ["02", "Ultrazvuk", "Hloubkové čištění v ultrazvukové lázni."],
  ["03", "Kontrola", "Oplach, důkladné sušení a vizuální kontrola nástrojů."],
  ["04", "Autokláv", "Parní sterilizace bezprostředně před použitím."],
  ["05", "Evidence", "Kontrola cyklu, indikátorů a záznam do sterilizačního deníku."],
];

export default function Home() {
  return (
    <main>
      <Header lang="cs" />
      <section className="hero">
        <HeroSlides alt="Detail ucha s několika piercingy a stříbrnými šperky" />
        <div className="hero-shade" />
        <div className="hero-topline"><span>[ PIERCINGOVÉ STUDIO / PRAHA ]</span><span>50°03&apos;58.6&quot;N / 14°27&apos;05.9&quot;E</span></div>
        <div className="hero-copy">
          <p className="eyebrow light">BLACK LOTUS® / OD ROKU 2015</p>
          <h1>PIERCING<br />S DŮRAZEM<br />NA DETAIL</h1>
          <div className="hero-action-row">
            <p>Precizní aplikace. Implantátový titan.<br />Klidný a profesionální přístup.</p>
            <Link href="/booking" className="button button-light">REZERVOVAT TERMÍN <span><ArrowIcon /></span></Link>
          </div>
        </div>
        <div className="scroll-mark">POSUN / 01—11</div>
      </section>

      <section className="proof-grid frame">
        <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="proof-link" aria-label="700+ hodnocení na Google — otevřít recenze v Google Maps"><strong>700+</strong><span>HODNOCENÍ NA GOOGLE</span></a>
        <div><strong>12</strong><span>LET PRAXE V OBORU</span></div>
        <div><strong>7000+</strong><span>DOKONČENÝCH PIERCINGŮ</span></div>
      </section>

      <section className="intro frame section-space">
        <SectionIndex index="01" label="STUDIO" />
        <div className="intro-grid">
          <h2>PŘESNOST<br />JE OSOBNÍ.</h2>
          <div className="intro-text">
            <p className="lead">Přesnost, estetika a profesionální přístup. Piercing, který se stane přirozenou součástí vašeho stylu.</p>
            <p>Každému umístění předchází konzultace anatomie, výběr správného rozměru šperku a srozumitelné vysvětlení následné péče.</p>
            <Link href="/studio" className="text-link">PROZKOUMAT STUDIO <span><ArrowIcon /></span></Link>
          </div>
        </div>
      </section>

      <section className="services frame section-space">
        <SectionIndex index="02" label="PIERCING" />
        <div className="section-title-row">
          <h2>Služby</h2>
          <p>Jednotlivé typy piercingu vybíráme s ohledem na anatomii, hojení a váš dlouhodobý komfort.</p>
        </div>
        <div className="service-list">
          {services.map(([n, title, detail]) => (
            <Link href="/cenik" key={n} className="service-row">
              <span>{n}</span><strong>{title}</strong><small>{detail}</small><b><ArrowIcon /></b>
            </Link>
          ))}
        </div>
        <Link href="/cenik" className="text-link">ZOBRAZIT CENÍK <span><ArrowIcon /></span></Link>
      </section>

      <section className="material section-space">
        <div className="frame material-grid">
          <div className="material-copy">
            <SectionIndex index="03" label="MATERIÁL" />
            <h2>TITAN<br />JAKO STANDARD.</h2>
            <p>Pro první aplikaci používáme implantátový titan ASTM F-136. Je lehký, biokompatibilní a vhodný pro čerstvý piercing.</p>
            <dl className="spec-grid">
              <div><dt>MATERIÁL</dt><dd>Ti-6Al-4V ELI</dd></div>
              <div><dt>STANDARD</dt><dd>ASTM F-136</dd></div>
              <div><dt>POUŽITÍ</dt><dd>TĚLOVÉ ŠPERKY</dd></div>
              <div><dt>NIKL</dt><dd>0%</dd></div>
            </dl>
            <Link href="/studio#visit" className="text-link">O NAŠICH ŠPERCÍCH <span><ArrowIcon /></span></Link>
          </div>
          <div className="material-object">
            <img src="/assets/titanium.webp" alt="Titanový labret na světlém pozadí" />
            <span className="object-note left">BL / OBJEKT 01</span><span className="object-note right">MĚŘÍTKO 04:01</span>
          </div>
        </div>
      </section>

      <section className="studio-visual">
        <img src="/assets/studio.webp" alt="Interiér piercingového studia" />
        <div className="studio-overlay" />
        <div className="studio-visual-copy frame">
          <SectionIndex index="04" label="PROSTOR" light />
          <h2>PROSTOR<br />PRO VAŠI<br />INDIVIDUALITU.</h2>
          <Link href="/studio" className="button button-ghost">O STUDIU <span><ArrowIcon /></span></Link>
        </div>
      </section>
      <nav className="studio-links frame" aria-label="Více o studiu">
        {studioLinks.map(([n, title, text, href]) => <Link key={href} href={href}><span>{n}</span><strong>{title}</strong><p>{text}</p><b><ArrowIcon /></b></Link>)}
      </nav>

      <section className="sterile frame section-space">
        <SectionIndex index="05" label="STERILISATION" />
        <div className="section-title-row">
          <h2>Sterilní díky procesu,<br />ne slibu.</h2>
          <p>Bezpečnost není slogan. Je to soubor opakovatelných kroků, kontroly a dokumentace.</p>
        </div>
        <div className="process-grid">
          {sterile.map(([n, title, text]) => <article key={n}><span>{n}</span><i /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <Link href="/studio#sterilisation" className="text-link">CELÝ PROCES STERILIZACE <span><ArrowIcon /></span></Link>
      </section>

      <section className="team frame section-space">
        <SectionIndex index="06" label="LIDÉ" />
        <div className="section-title-row"><h2>Lidé za<br />Black Lotus.</h2><p>Dva přístupy, jeden standard: klid, preciznost a respekt k vašemu tělu.</p></div>
        <div className="team-grid">
          <article className="team-card" tabIndex={0}>
            <span className="portrait-code">01 / PIERCER</span>
            <div className="portrait team-photo"><img src="/assets/alex.webp" alt="Alex — zakladatel Black Lotus a profesionální piercer" loading="lazy" /></div>
            <div className="team-card-summary"><h3>alex</h3><p>Zakladatel studia · profesionální piercer</p><span className="team-more">PŘEJEĎTE PRO DETAIL</span></div>
            <div className="team-card-bio-desktop" aria-hidden="true"><div className="team-bio-content"><strong>alex</strong><p>Více než 12 let zkušeností, tisíce provedených piercingů a důraz na každý detail. Alex je zakladatelem studia a profesionálním piercerem, který spojuje technickou preciznost s citem pro estetiku.</p><p>Každý piercing přizpůsobuje individuální anatomii klienta, pracuje výhradně s kvalitními šperky a dodržuje nejvyšší hygienické standardy. Díky zkušenostem i osobnímu přístupu se můžete spolehnout na bezpečný průběh i výsledek, který obstojí v čase.</p></div></div><details className="team-card-bio-mobile"><summary><span>VÍCE O ALEXOVI</span><b>+</b></summary><div className="team-bio-content"><strong>alex</strong><p>Více než 12 let zkušeností, tisíce provedených piercingů a důraz na každý detail. Alex je zakladatelem studia a profesionálním piercerem, který spojuje technickou preciznost s citem pro estetiku.</p><p>Každý piercing přizpůsobuje individuální anatomii klienta, pracuje výhradně s kvalitními šperky a dodržuje nejvyšší hygienické standardy. Díky zkušenostem i osobnímu přístupu se můžete spolehnout na bezpečný průběh i výsledek, který obstojí v čase.</p></div></details>
          </article>
          <article className="team-card" tabIndex={0}>
            <span className="portrait-code">02 / PIERCERKA</span>
            <div className="portrait team-photo"><img src="/assets/maky.webp" alt="Maky — profesionální piercerka Black Lotus" loading="lazy" /></div>
            <div className="team-card-summary"><h3>maky</h3><p>Profesionální piercerka</p><span className="team-more">PŘEJEĎTE PRO DETAIL</span></div>
            <div className="team-card-bio-desktop" aria-hidden="true"><div className="team-bio-content"><strong>maky</strong><p>Maky je profesionální piercerka s citem pro detail, estetiku a bezpečnost. Ke každému klientovi přistupuje individuálně a každý piercing přizpůsobuje anatomii i osobnímu stylu.</p><p>Jejím cílem je, aby celý zážitek proběhl v příjemné atmosféře a výsledkem byl piercing, který vám bude dělat radost po mnoho let.</p></div></div><details className="team-card-bio-mobile"><summary><span>VÍCE O MAKY</span><b>+</b></summary><div className="team-bio-content"><strong>maky</strong><p>Maky je profesionální piercerka s citem pro detail, estetiku a bezpečnost. Ke každému klientovi přistupuje individuálně a každý piercing přizpůsobuje anatomii i osobnímu stylu.</p><p>Jejím cílem je, aby celý zážitek proběhl v příjemné atmosféře a výsledkem byl piercing, který vám bude dělat radost po mnoho let.</p></div></details>
          </article>
        </div>
        <div className="team-book">
          <a href="https://n1487262.alteg.io/" className="text-link">REZERVOVAT U ALEXE <span><ArrowIcon /></span></a>
          <a href="https://n1487261.alteg.io/" className="text-link">REZERVOVAT U MAKY <span><ArrowIcon /></span></a>
        </div>
        <Link href="/studio#team" className="text-link">SEZNAMTE SE S TÝMEM <span><ArrowIcon /></span></Link>
      </section>

      <InstagramPreview lang="cs" />

      <section className="work frame section-space">
        <SectionIndex index="07" label="VYBRANÉ PRÁCE" />
        <div className="section-title-row"><h2>Pro vaši<br />anatomii.</h2><p>Výběr realizací. Každé umístění je navrženo pro konkrétní anatomii.</p></div>
        <div className="work-grid">
          <figure className="work-a"><img src="/assets/conch.webp" alt="Conch piercing" /><figcaption><span>001 / CONCH</span><span>TITAN · ASTM F-136</span></figcaption></figure>
          <figure className="work-b"><img src="/assets/nostril.webp" alt="Nostril piercing" /><figcaption><span>002 / NOSTRIL</span><span>TITAN · ASTM F-136</span></figcaption></figure>
          <figure className="work-c"><img src="/assets/hero.webp" alt="Helix piercing" /><figcaption><span>003 / HELIX</span><span>TITAN · ASTM F-136</span></figcaption></figure>
        </div>
        <Link href="/work" className="text-link">OTEVŘÍT PORTFOLIO <span><ArrowIcon /></span></Link>
      </section>

      <ReviewsPreview lang="cs" />

      <section className="knowledge section-space">
        <div className="frame">
          <SectionIndex index="08" label="INFORMACE" />
          <div className="section-title-row"><h2>Před<br />& po.</h2><p>Vše, co potřebujete vědět před rezervací i během hojení.</p></div>
          <div className="knowledge-links">
            <Link href="/journal/prvni-piercing-krok-za-krokem"><span>PŘED</span><strong>Příprava na první piercing</strong><b><ArrowIcon /></b></Link>
            <Link href="/care#minors"><span>PŘED</span><strong>Informace pro nezletilé</strong><b><ArrowIcon /></b></Link>
            <Link href="/care#aftercare"><span>PO</span><strong>Péče o nový piercing</strong><b><ArrowIcon /></b></Link>
            <Link href="/care#healing"><span>PO</span><strong>Hojení a kontroly</strong><b><ArrowIcon /></b></Link>
          </div>
          <Link href="/care" className="text-link">PÉČE O PIERCING <span><ArrowIcon /></span></Link>
          <div className="gift-card">
            <p>[ BLACK LOTUS / DÁRKOVÝ POUKAZ ]</p><h3>Darujte něco<br />osobního.</h3><span>DIGITÁLNÍ I TIŠTĚNÁ PODOBA · OD 1 000 CZK</span>
            <Link href="/gift-card" className="button button-dark">KOUPIT POUKAZ <span><ArrowIcon /></span></Link>
          </div>
        </div>
      </section>

      <section className="journal frame section-space">
        <SectionIndex index="09" label="ČLÁNKY" />
        <div className="section-title-row"><h2>Poznámky<br />z praxe.</h2><Link href="/journal" className="text-link">VŠECHNY ČLÁNKY <span><ArrowIcon /></span></Link></div>
        <div className="article-grid">
          <Link href="/journal/prvni-piercing-krok-za-krokem"><span>PRŮVODCE / 08 MIN</span><h3>První piercing: co čekat krok za krokem</h3><p>Od konzultace až po první kontrolu ve studiu.</p><b><ArrowIcon /></b></Link>
          <Link href="/journal/proc-neni-kazdy-piercing-pro-kazdeho"><span>ANATOMIE / 07 MIN</span><h3>Proč není každý piercing pro každého</h3><p>Jak anatomie ovlivňuje umístění, výběr šperku i dlouhodobý výsledek.</p><b><ArrowIcon /></b></Link>
          <Link href="/journal/titan-vs-chirurgicka-ocel"><span>MATERIÁLY / 09 MIN</span><h3>Titan vs. chirurgická ocel</h3><p>Co patří do čerstvého piercingu a podle čeho poznat kvalitní šperk.</p><b><ArrowIcon /></b></Link>
        </div>
      </section>

      <section className="faq-home frame section-space" aria-labelledby="faq-home-title">
        <SectionIndex index="10" label="PŘED NÁVŠTĚVOU" />
        <div className="section-title-row"><h2 id="faq-home-title">Co je dobré<br />vědět?</h2><p>Rezervace, ceny, nezletilí a další organizační otázky. Péči o piercing a hojení najdete v <Link href="/care">průvodci péčí</Link>.</p></div>
        <HomeFaq items={faqItems("cs")} />
      </section>

      <section className="visit frame section-space">
        <SectionIndex index="11" label="NÁVŠTĚVA" />
        <h2>JSME PŘIPRAVENI,<br />AŽ BUDETE VY.</h2>
        <div className="visit-details">
          <div><span>STUDIO</span><p>Petrohradská 388/22<br />Praha 10 — Vršovice</p></div>
          <div><span>KONTAKT</span><p><a href="tel:+420777547240">+420 777 547 240</a><br /><a href="mailto:piercingprague@gmail.com">piercingprague@gmail.com</a></p></div>
          <Link href="/booking" className="round-link" aria-label="Rezervovat termín">TERMÍN<br /><ArrowIcon /></Link>
        </div>
      </section>
      <Footer lang="cs" />
    </main>
  );
}

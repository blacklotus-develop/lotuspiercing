import HeroSlides from "./hero-slides";
import ArrowIcon from "./arrow-icon";
import Link from "./native-link";
import { pageMetadata } from "./seo";
import { Footer, Header, SectionIndex } from "./site";
import HomeFaq from "./home-faq";
import CoverImage from "./journal/cover-image";
import GiftBanner from "./gift-banner";
import MaterialsSection from "./materials-section";
import ServicesShowcase from "./services-showcase";
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
        <div className="scroll-mark">POSUN / 01—08</div>
      </section>

      <section className="proof-grid frame">
        <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="proof-link" aria-label="700+ hodnocení na Google — otevřít recenze v Google Maps"><strong>700+</strong><span>HODNOCENÍ NA GOOGLE</span></a>
        <div><strong>12</strong><span>LET PRAXE V OBORU</span></div>
        <div><strong>7000+</strong><span>DOKONČENÝCH PIERCINGŮ</span></div>
      </section>

      <ServicesShowcase lang="cs" index="01" />

      <section className="studio-visual">
        <img src="/assets/prostor-studio.webp" alt="Pracovní prostor Black Lotus se zelenou stěnou, umyvadlem a parním autoklávem" />
        <div className="studio-overlay" />
        <div className="studio-visual-copy frame">
          <SectionIndex index="02" label="PROSTOR" light />
          <h2>PROSTOR<br />PRO VAŠI<br />INDIVIDUALITU.</h2>
          <Link href="/studio" className="button button-ghost">O STUDIU <span><ArrowIcon /></span></Link>
        </div>
      </section>

      <nav className="studio-links frame" aria-label="Více o studiu">
        {studioLinks.map(([n, title, text, href]) => <Link key={href} href={href}><span>{n}</span><strong>{title}</strong><p>{text}</p><b><ArrowIcon /></b></Link>)}
      </nav>

      <section className="team frame section-space">
        <SectionIndex index="03" label="LIDÉ" />
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

      <MaterialsSection lang="cs" index="04" />

      <InstagramPreview lang="cs" />

      <section className="knowledge section-space">
        <div className="frame">
          <SectionIndex index="05" label="INFORMACE" />
          <div className="section-title-row"><h2>Před<br />& po.</h2><p>Vše, co potřebujete vědět před rezervací i během hojení.</p></div>
          <div className="knowledge-links">
            <Link href="/journal/prvni-piercing-krok-za-krokem"><span>PŘED</span><strong>Příprava na první piercing</strong><b><ArrowIcon /></b></Link>
            <Link href="/care#minors"><span>PŘED</span><strong>Informace pro nezletilé</strong><b><ArrowIcon /></b></Link>
            <Link href="/care#aftercare"><span>PO</span><strong>Péče o nový piercing</strong><b><ArrowIcon /></b></Link>
            <Link href="/care#healing"><span>PO</span><strong>Hojení a kontroly</strong><b><ArrowIcon /></b></Link>
          </div>
          <Link href="/care" className="text-link">PÉČE O PIERCING <span><ArrowIcon /></span></Link>
        </div>
      </section>

      <GiftBanner lang="cs" />

      <section className="journal frame section-space">
        <SectionIndex index="06" label="ČLÁNKY" />
        <div className="section-title-row"><h2>Poznámky<br />z praxe.</h2><Link href="/journal" className="text-link">VŠECHNY ČLÁNKY <span><ArrowIcon /></span></Link></div>
        <div className="article-grid has-covers">
          <Link href="/journal/prvni-piercing-krok-za-krokem"><CoverImage lang="cs" slug="prvni-piercing-krok-za-krokem" sizes="(max-width: 900px) 104px, 33vw" /><span>PRŮVODCE / 08 MIN</span><h3>První piercing: co čekat krok za krokem</h3><p>Od konzultace až po první kontrolu ve studiu.</p><b><ArrowIcon /></b></Link>
          <Link href="/journal/proc-neni-kazdy-piercing-pro-kazdeho"><CoverImage lang="cs" slug="proc-neni-kazdy-piercing-pro-kazdeho" sizes="(max-width: 900px) 104px, 33vw" /><span>ANATOMIE / 07 MIN</span><h3>Proč není každý piercing pro každého</h3><p>Jak anatomie ovlivňuje umístění, výběr šperku i dlouhodobý výsledek.</p><b><ArrowIcon /></b></Link>
          <Link href="/journal/titan-vs-chirurgicka-ocel"><CoverImage lang="cs" slug="titan-vs-chirurgicka-ocel" sizes="(max-width: 900px) 104px, 33vw" /><span>MATERIÁLY / 09 MIN</span><h3>Titan vs. chirurgická ocel</h3><p>Co patří do čerstvého piercingu a podle čeho poznat kvalitní šperk.</p><b><ArrowIcon /></b></Link>
        </div>
      </section>

      <ReviewsPreview lang="cs" />

      <section className="faq-home frame section-space" aria-labelledby="faq-home-title">
        <SectionIndex index="07" label="PŘED NÁVŠTĚVOU" />
        <div className="section-title-row"><h2 id="faq-home-title">Co je dobré<br />vědět?</h2><p>Rezervace, ceny, nezletilí a další organizační otázky. Péči o piercing a hojení najdete v <Link href="/care">průvodci péčí</Link>.</p></div>
        <HomeFaq items={faqItems("cs")} />
      </section>

      <section className="visit frame section-space">
        <SectionIndex index="08" label="NÁVŠTĚVA" />
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

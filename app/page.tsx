import ArrowIcon from "./arrow-icon";
import Link from "./native-link";
import { Footer, Header, SectionIndex } from "./site";

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
  ["03", "Kontrola", "Sušení, vizuální kontrola a jednotlivé balení."],
  ["04", "Autokláv", "Parní sterilizace v kontrolovaném cyklu."],
  ["05", "Evidence", "Kontrola cyklu a bezpečné skladování."],
];

export default function Home() {
  return (
    <main>
      <Header lang="cs" />
      <section className="hero">
        <img src="/assets/hero-main.webp" alt="Detail ucha s titanovým piercingem" className="hero-image" />
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
        <div className="scroll-mark">POSUN / 01—10</div>
      </section>

      <section className="proof-grid frame">
        <div><strong>600+</strong><span>HODNOCENÍ NA GOOGLE</span></div>
        <div><strong>10+</strong><span>LET PRAXE V OBORU</span></div>
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
            <Link href="/piercing" key={n} className="service-row">
              <span>{n}</span><strong>{title}</strong><small>{detail}</small><b><ArrowIcon /></b>
            </Link>
          ))}
        </div>
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
            <Link href="/studio#jewelry" className="text-link">O NAŠICH ŠPERCÍCH <span><ArrowIcon /></span></Link>
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
            <details className="team-card-bio"><summary><span>VÍCE O ALEXOVI</span><b>+</b></summary><div className="team-bio-content"><strong>alex</strong><p>Více než 12 let zkušeností, tisíce provedených piercingů a důraz na každý detail. Alex je zakladatelem studia a profesionálním piercerem, který spojuje technickou preciznost s citem pro estetiku.</p><p>Každý piercing přizpůsobuje individuální anatomii klienta, pracuje výhradně s kvalitními šperky a dodržuje nejvyšší hygienické standardy. Díky zkušenostem i osobnímu přístupu se můžete spolehnout na bezpečný průběh i výsledek, který obstojí v čase.</p></div></details>
          </article>
          <article className="team-card" tabIndex={0}>
            <span className="portrait-code">02 / PIERCERKA</span>
            <div className="portrait team-photo"><img src="/assets/maky.webp" alt="Maky — profesionální piercerka Black Lotus" loading="lazy" /></div>
            <div className="team-card-summary"><h3>maky</h3><p>Profesionální piercerka</p><span className="team-more">PŘEJEĎTE PRO DETAIL</span></div>
            <details className="team-card-bio"><summary><span>VÍCE O MAKY</span><b>+</b></summary><div className="team-bio-content"><strong>maky</strong><p>Maky je profesionální piercerka s citem pro detail, estetiku a bezpečnost. Ke každému klientovi přistupuje individuálně a každý piercing přizpůsobuje anatomii i osobnímu stylu.</p><p>Jejím cílem je, aby celý zážitek proběhl v příjemné atmosféře a výsledkem byl piercing, který vám bude dělat radost po mnoho let.</p></div></details>
          </article>
        </div>
        <Link href="/studio#team" className="text-link">SEZNAMTE SE S TÝMEM <span><ArrowIcon /></span></Link>
      </section>

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

      <section className="knowledge section-space">
        <div className="frame">
          <SectionIndex index="08" label="INFORMACE" />
          <div className="section-title-row"><h2>Před<br />& po.</h2><p>Vše, co potřebujete vědět před rezervací i během hojení.</p></div>
          <div className="knowledge-links">
            <Link href="/care#aftercare"><span>01</span><strong>Péče o nový piercing</strong><b><ArrowIcon /></b></Link>
            <Link href="/care#healing"><span>02</span><strong>Hojení a kontroly</strong><b><ArrowIcon /></b></Link>
            <Link href="/care#minors"><span>03</span><strong>Informace pro nezletilé</strong><b><ArrowIcon /></b></Link>
          </div>
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
          <Link href="/journal/vymena-prvniho-sperku"><span>PÉČE / 06 MIN</span><h3>Kdy je správný čas vyměnit první šperk?</h3><p>Proč nerozhoduje jen počet týdnů a jak poznat klidné hojení.</p><b><ArrowIcon /></b></Link>
          <Link href="/journal/titan-vs-chirurgicka-ocel"><span>MATERIÁLY / 09 MIN</span><h3>Titan vs. chirurgická ocel</h3><p>Co patří do čerstvého piercingu a podle čeho poznat kvalitní šperk.</p><b><ArrowIcon /></b></Link>
          <Link href="/journal/prvni-piercing-krok-za-krokem"><span>PRŮVODCE / 08 MIN</span><h3>První piercing: co čekat krok za krokem</h3><p>Od konzultace až po první kontrolu ve studiu.</p><b><ArrowIcon /></b></Link>
        </div>
      </section>

      <section className="visit frame section-space">
        <SectionIndex index="10" label="NÁVŠTĚVA" />
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

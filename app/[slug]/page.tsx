import ArrowIcon from "../arrow-icon";
import JournalIndex from "../journal-index";
import { notFound } from "next/navigation";
import Link from "../native-link";
import { PageShell, SectionIndex } from "../site";

const prices = [
  ["UCHO", "Lalůček", "od 1 200 Kč"], ["UCHO", "Helix / Rook / Conch", "od 1 400 Kč"],
  ["OBLIČEJ", "Nostril / Smile / Jazyk / Obočí", "od 1 400 Kč"], ["OBLIČEJ", "Bridge / Septum", "od 1 500 Kč"],
  ["TĚLO", "Pupík / Bradavka 1×", "od 1 500 Kč"], ["TĚLO", "Bradavky 2×", "od 3 000 Kč"],
  ["INTIMNÍ", "Genitální piercing", "od 2 500 Kč"], ["MICRODERMAL", "Aplikace", "od 1 500 Kč"],
  ["SURFACE", "Surface piercing", "od 2 500 Kč"], ["SLUŽBY", "Výměna / zkrácení / čištění", "300 Kč"],
  ["SLUŽBY", "Anodizace", "200 Kč"], ["PÉČE", "Aftercare sprej", "250 Kč"],
];

function Studio() {
  const steps = ["Předčištění", "Ultrazvuková lázeň", "Oplach a sušení", "Jednotlivé balení", "Parní autokláv", "Kontrola a evidence"];
  return <PageShell lang="cs" slug="studio" eyebrow="01 / STUDIO" title={<>KONTROLOVANÉ<br />DO DETAILU.</>} intro="Prostor, lidé a procesy navržené kolem jednoho cíle: bezpečný piercing, který s vámi dlouhodobě funguje.">
    <section className="sub-visual frame"><img src="/assets/studio.webp" alt="Interiér Black Lotus" /><div><span>BLACK LOTUS / PRAHA</span><strong>Od roku 2015.</strong><p>Pracujeme precizně, bez spěchu a s respektem k vaší anatomii. Konzultace není formalita — je to základ výsledku.</p></div></section>
    <section id="team" className="sub-section frame"><SectionIndex index="01" label="TÝM" /><h2>Dva lidé.<br />Jeden standard.</h2><div className="bio-grid"><article><div className="portrait bio-photo"><img src="/assets/alex-studio.webp" alt="Alex — zakladatel Black Lotus a profesionální piercer" loading="lazy" /></div><span>ZAKLADATEL / PIERCER</span><h3>Alex</h3><p>Více než 12 let zkušeností, tisíce provedených piercingů a důraz na každý detail. Alex je zakladatelem studia a profesionálním piercerem, který spojuje technickou preciznost s citem pro estetiku.</p><p>Každý piercing přizpůsobuje individuální anatomii klienta, pracuje výhradně s kvalitními šperky a dodržuje nejvyšší hygienické standardy. Díky zkušenostem i osobnímu přístupu se můžete spolehnout na bezpečný průběh i výsledek, který obstojí v čase.</p></article><article><div className="portrait bio-photo"><img src="/assets/maky-studio.webp" alt="Maky — profesionální piercerka Black Lotus" loading="lazy" /></div><span>PIERCERKA</span><h3>Maky</h3><p>Maky je profesionální piercerka s citem pro detail, estetiku a bezpečnost. Ke každému klientovi přistupuje individuálně a každý piercing přizpůsobuje anatomii i osobnímu stylu.</p><p>Jejím cílem je, aby celý zážitek proběhl v příjemné atmosféře a výsledkem byl piercing, který vám bude dělat radost po mnoho let.</p></article></div></section>
    <section id="sterilisation" className="sub-section technical"><div className="frame"><SectionIndex index="02" label="STERILIZACE" /><h2>Opakovatelný<br />bezpečnostní proces.</h2><div className="number-list">{steps.map((s,i)=><div key={s}><span>{String(i+1).padStart(2,"0")}</span><strong>{s}</strong><p>{i===5 ? "Každý cyklus je zkontrolován před uložením nástrojů." : "Každý krok probíhá odděleně a v jasně definovaném pořadí."}</p></div>)}</div></div></section>
    <section id="jewelry" className="sub-section frame jewelry-page"><SectionIndex index="03" label="ŠPERKY" /><div><h2>Implantátový titan.<br />Bez kompromisů.</h2><p>Pro první aplikaci používáme šperky z implantátového titanu ASTM F-136. Správný rozměr, tvar a typ závitu vybíráme podle anatomie a fáze hojení.</p><dl className="spec-grid"><div><dt>STANDARD</dt><dd>ASTM F-136</dd></div><div><dt>ZÁVIT</dt><dd>VNITŘNÍ</dd></div><div><dt>NIKL</dt><dd>0%</dd></div><div><dt>POVRCH</dt><dd>RUČNĚ LEŠTĚNÝ</dd></div></dl></div><img src="/assets/titanium.webp" alt="Titanový šperk ASTM F-136" /></section>
  </PageShell>;
}

function Piercing() {
  return <PageShell lang="cs" slug="piercing" eyebrow="02 / PIERCING" title={<>SLUŽBY<br />& CENY.</>} intro="Ceny zahrnují základní šperk z titanu ASTM F-136, pokud není uvedeno jinak. Konečná cena závisí na vybraném šperku a anatomii.">
    <section className="sub-section frame"><div className="price-head"><span>TYP</span><span>SLUŽBA</span><span>CENA / CZK</span></div><div className="price-list">{prices.map(([cat,name,price],i)=><div key={`${cat}-${name}`}><span>{String(i+1).padStart(2,"0")} / {cat}</span><strong>{name}</strong><b>{price}</b></div>)}</div><p className="price-note">Uvedené ceny jsou orientační. Před aplikací vždy potvrdíme výběr šperku i konečnou cenu.</p></section>
    <section className="booking-band frame"><p>[ KONZULTACE JE SOUČÁSTÍ ]</p><h2>Nejste si jistí,<br />co vám vyhovuje?</h2><Link href="/booking" className="button button-light">REZERVOVAT KONZULTACI <ArrowIcon /></Link></section>
  </PageShell>;
}

function Work() {
  return <PageShell lang="cs" slug="work" eyebrow="03 / PRÁCE" title={<>ARCHIV<br />TĚLA.</>} intro="Vybrané realizace řazené jako technický archiv. Umístění, materiál a anatomie — bez vizuálního šumu.">
    <section className="archive frame"><figure className="archive-wide"><img src="/assets/hero.webp" alt="Helix piercing"/><figcaption><span>001 / HELIX</span><span>UCHO · TITAN · 2026</span></figcaption></figure><figure><img src="/assets/conch.webp" alt="Conch piercing"/><figcaption><span>002 / CONCH</span><span>UCHO · TITAN · 2026</span></figcaption></figure><figure><img src="/assets/nostril.webp" alt="Nostril piercing"/><figcaption><span>003 / NOSTRIL</span><span>OBLIČEJ · TITAN · 2026</span></figcaption></figure><figure className="archive-object"><img src="/assets/titanium.webp" alt="Titanový labret"/><figcaption><span>004 / OBJEKT</span><span>ASTM F-136 · MĚŘÍTKO 04:01</span></figcaption></figure></section>
  </PageShell>;
}

function Care() {
  return <PageShell lang="cs" slug="care" eyebrow="04 / PÉČE" title={<>PŘED<br />& PO.</>} intro="Přehled pro klidnou přípravu, správnou péči a včasné řešení všeho, co během hojení potřebujete.">
    <section id="aftercare" className="sub-section frame"><SectionIndex index="01" label="NÁSLEDNÁ PÉČE"/><h2>Méně dotyků.<br />Více hojení.</h2><div className="care-grid"><article><span>DĚLAT / 01</span><h3>Čisté ruce</h3><p>Piercingu se dotýkejte pouze při nezbytném čištění a vždy čistýma rukama.</p></article><article><span>DĚLAT / 02</span><h3>Sterilní roztok</h3><p>Používejte sterilní fyziologický roztok podle doporučení piercera.</p></article><article><span>VYNECHAT / 03</span><h3>Bez manipulace</h3><p>Šperkem neotáčejte, nevyndávejte ho předčasně a netlačte na něj při spánku.</p></article><article><span>KONTROLA / 04</span><h3>Kontrola</h3><p>V případě nejistoty pošlete fotografii nebo si rezervujte kontrolu ve studiu.</p></article></div></section>
    <section id="healing" className="sub-section technical"><div className="frame"><SectionIndex index="02" label="HOJENÍ"/><h2>Hojení není<br />lineární.</h2><div className="timeline"><div><span>00—24 H</span><p>Citlivost a mírný otok mohou být běžnou reakcí.</p></div><div><span>01—04 TÝDNY</span><p>Piercing může působit klidně, ale kanálek se stále vytváří.</p></div><div><span>KONTROLA</span><p>Kontrola a případné zkrácení šperku podle typu piercingu.</p></div><div><span>ZAHOJENO</span><p>Výměnu doporučíme podle skutečného stavu, ne jen kalendáře.</p></div></div></div></section>
    <section id="minors" className="sub-section frame"><SectionIndex index="03" label="NEZLETILÍ"/><div className="minor-grid"><h2>Piercing pro<br />nezletilé.</h2><div><p className="lead">U nezletilých rozhoduje věk, typ piercingu a přítomnost zákonného zástupce.</p><ul><li>Přineste platný doklad nezletilého i zákonného zástupce.</li><li>Zákonný zástupce musí být přítomen po celou dobu.</li><li>Některé typy piercingu provádíme až od stanoveného věku.</li><li>Před rezervací ověřte konkrétní podmínky telefonicky.</li></ul><Link href="/contact" className="text-link">OVĚŘIT PODMÍNKY <span><ArrowIcon /></span></Link></div></div></section>
  </PageShell>;
}

function Journal() {
  return <PageShell lang="cs" slug="journal" eyebrow="05 / ČLÁNKY" title={<><span>POZNÁMKY</span><br />Z PRAXE.</>} intro="Praktické informace bez mýtů — o materiálech, hojení, anatomii a bezpečném rozhodování."><JournalIndex lang="cs" /></PageShell>;
}

function Contact() {
  return <PageShell lang="cs" slug="contact" eyebrow="06 / KONTAKT" title={<>NAVŠTIVTE<br />BLACK LOTUS.</>} intro="Objednání probíhá online. Pokud si nejste jistí vhodným typem piercingu nebo podmínkami pro nezletilé, napište či zavolejte.">
    <section className="contact-grid frame"><div className="contact-card"><span>01 / ADRESA</span><h2>Petrohradská<br />388/22</h2><p>Praha 10 — Vršovice<br />Červený dům, 1. vchod</p><p>Tram: Nádraží Vršovice / 5 min<br />Bus: Ukrajinská / 1 min</p><a href="https://maps.google.com/?q=Petrohradská+388/22+Praha" className="text-link">OTEVŘÍT MAPU <ArrowIcon /></a></div><div className="contact-card dark"><span>02 / REZERVACE</span><h2>Vyberte si<br />termín.</h2><p>Vyberte službu, piercera a způsob kontaktu. Potvrzení vám přijde e-mailem.</p><Link href="/booking" className="button button-light">REZERVOVAT TERMÍN <ArrowIcon /></Link></div><div className="contact-card"><span>03 / KONTAKT</span><h2>Ozvěte se.</h2><p><a href="tel:+420777547240">+420 777 547 240</a><br/><a href="mailto:piercingprague@gmail.com">piercingprague@gmail.com</a></p><p>Instagram<br/><a href="https://www.instagram.com/lotus.piercing/">@lotus.piercing <ArrowIcon /></a></p></div><div className="contact-card gift-contact"><span>04 / DÁRKOVÝ POUKAZ</span><h2>Tištěně<br />nebo digitálně.</h2><p>Dárkové poukazy od 1 000 Kč. Tištěná nebo digitální podoba.</p><Link href="/gift-card" className="text-link">OBJEDNAT POUKAZ <ArrowIcon /></Link></div></section>
  </PageShell>;
}

function Booking() {
  return <PageShell lang="cs" slug="booking" eyebrow="07 / REZERVACE" title={<>VÁŠ<br />TERMÍN.</>} intro="Napište nám, jaký piercing zvažujete a který den vám vyhovuje. Ozveme se s potvrzením nebo navrhneme nejbližší volný termín.">
    <section className="action-page frame">
      <div className="action-intro"><SectionIndex index="01" label="VYBERTE ZPŮSOB" /><h2>Jak chcete<br />rezervovat?</h2></div>
      <div className="action-options">
        <a href="mailto:piercingprague@gmail.com?subject=Rezervace termínu&body=Dobrý den,%0A%0AMám zájem o:%0APreferovaný termín:%0ATelefon:%0A%0ADěkuji." className="action-option"><span>01 / E-MAIL</span><strong>Napsat žádost</strong><p>Uveďte požadovaný piercing a preferovaný termín.</p><b><ArrowIcon /></b></a>
        <a href="tel:+420777547240" className="action-option"><span>02 / TELEFON</span><strong>+420 777 547 240</strong><p>Pro rychlou konzultaci nebo ověření volného termínu.</p><b><ArrowIcon /></b></a>
        <a href="https://www.instagram.com/lotus.piercing/" className="action-option"><span>03 / INSTAGRAM</span><strong>@lotus.piercing</strong><p>Napište nám soukromou zprávu.</p><b><ArrowIcon /></b></a>
      </div>
      <div className="booking-info"><div><span>PŘED REZERVACÍ</span><p>Nejste si jistí vhodným typem piercingu? Prohlédněte si přehled služeb a ceny.</p><Link href="/piercing" className="text-link">SLUŽBY A CENY <ArrowIcon /></Link></div><div><span>NEZLETILÍ</span><p>U nezletilých se podmínky liší podle věku a typu piercingu.</p><Link href="/care#minors" className="text-link">PODMÍNKY PRO NEZLETILÉ <ArrowIcon /></Link></div></div>
    </section>
  </PageShell>;
}

function GiftCard() {
  const values = ["1 000 Kč", "1 500 Kč", "2 000 Kč", "3 000 Kč"];
  return <PageShell lang="cs" slug="gift-card" eyebrow="08 / DÁRKOVÝ POUKAZ" title={<>DÁREK,<br />KTERÝ ZŮSTANE.</>} intro="Dárkový poukaz Black Lotus můžete objednat v digitální nebo tištěné podobě. Hodnotu si zvolíte podle sebe.">
    <section className="action-page frame">
      <div className="action-intro"><SectionIndex index="01" label="HODNOTA POUKAZU" /><h2>Vyberte<br />hodnotu.</h2></div>
      <div className="voucher-grid">{values.map(value => <a key={value} href="https://lotusjewelry.cz/kategorie-produktu/darkove-poukazy/"><span>BLACK LOTUS / GIFT</span><strong>{value}</strong><b>OBJEDNAT <ArrowIcon /></b></a>)}</div>
      <div className="booking-info"><div><span>DIGITÁLNÍ</span><p>Praktická varianta, kterou vám po potvrzení zašleme e-mailem.</p></div><div><span>TIŠTĚNÝ</span><p>Fyzický poukaz připravený k osobnímu vyzvednutí ve studiu.</p></div></div>
    </section>
  </PageShell>;
}

const pages: Record<string, () => React.ReactNode> = { studio: Studio, piercing: Piercing, work: Work, care: Care, journal: Journal, contact: Contact, booking: Booking, "gift-card": GiftCard };
export function generateStaticParams() { return Object.keys(pages).map(slug => ({ slug })); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const Component = pages[slug]; if (!Component) notFound(); return <Component />; }

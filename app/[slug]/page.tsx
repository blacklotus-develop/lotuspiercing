import ArrowIcon from "../arrow-icon";
import JournalIndex from "../journal-index";
import PriceList from "../price-list";
import { notFound, permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import Link from "../native-link";
import { PageShell, SectionIndex } from "../site";
import StudioPage from "../studio-page";
import BookingPage from "../booking-page";
import CarePage from "../care-page";

const priceGroups = [
  {
    id: "ucho",
    label: "Ucho",
    description: "Základní šperk z titanu ASTM F-136 je součástí ceny.",
    items: [
      { name: "Lalůček", price: "od 1 200 Kč", note: "Cena za piercing jednoho lalůčku." },
      { name: "Helix", price: "od 1 400 Kč" },
      { name: "Rook", price: "od 1 400 Kč" },
      { name: "Tragus", price: "od 1 400 Kč" },
      { name: "Conch", price: "od 1 400 Kč" },
      { name: "Flat", price: "od 1 400 Kč" },
      { name: "Daith", price: "od 1 500 Kč" },
      { name: "Forward Helix", price: "od 1 500 Kč" },
      { name: "Industrial", price: "od 2 500 Kč" },
    ],
  },
  {
    id: "oblicej",
    label: "Obličej",
    description: "Základní šperk z titanu ASTM F-136 je součástí ceny.",
    items: [
      { name: "Rty", price: "od 1 400 Kč" },
      { name: "Nostril", price: "od 1 400 Kč" },
      { name: "Smile", price: "od 1 400 Kč" },
      { name: "Jazyk", price: "od 1 400 Kč" },
      { name: "Obočí", price: "od 1 400 Kč" },
      { name: "Bridge", price: "od 1 500 Kč" },
      { name: "Septum", price: "od 1 500 Kč" },
      { name: "Cheeky", price: "od 3 000 Kč" },
      { name: "High nostril 2×", price: "od 3 000 Kč" },
    ],
  },
  {
    id: "telo",
    label: "Tělo",
    description: "Základní šperk z titanu ASTM F-136 je součástí ceny.",
    items: [
      { name: "Pupík", price: "od 1 500 Kč" },
      { name: "Bradavka 1×", price: "od 1 500 Kč" },
      { name: "Bradavky 2×", price: "od 3 000 Kč" },
      { name: "Genitální piercing", price: "od 2 500 Kč" },
    ],
  },
  {
    id: "mikrodermal",
    label: "Mikrodermál",
    description: "Aplikace zahrnuje základní šperk. Odstranění je samostatná služba.",
    items: [
      { name: "Mikrodermál", price: "od 1 500 Kč" },
      { name: "Odstranění mikrodermálu", price: "700 Kč" },
    ],
  },
  {
    id: "surface",
    label: "Surface",
    description: "Základní šperk z titanu ASTM F-136 je součástí ceny.",
    items: [
      { name: "Surface piercing", price: "od 2 500 Kč" },
    ],
  },
  {
    id: "tunely",
    label: "Tunely",
    description: "Aplikace tunelů zahrnuje základní šperk.",
    items: [
      { name: "Aplikace tunelů", price: "od 2 000 Kč" },
      { name: "Roztahování tunelů o 2 mm", price: "od 500 Kč" },
    ],
  },
  {
    id: "doplnkove-sluzby",
    label: "Doplňkové služby",
    description: "Konzultace, výměny, čištění, anodizace, následná péče a dárkové poukazy.",
    items: [
      { name: "Konzultace", price: "200–300 Kč", note: "Klienti studia 200 Kč · externí klienti 300 Kč." },
      { name: "Výměna koncovky mikrodermálu", price: "300 Kč", note: "Cena nezahrnuje cenu šperku." },
      { name: "Výměna a zkrácení", price: "300 Kč", note: "Cena nezahrnuje cenu šperku." },
      { name: "Čištění piercingu", price: "300 Kč" },
      { name: "Anodizace", price: "200 Kč", note: "Změna barvy jednoho titanového šperku." },
      { name: "Aftercare sprej", price: "250 Kč" },
      { name: "Dárkové poukazy", price: "od 1 000 Kč", note: "Fyzická nebo digitální podoba." },
    ],
  },
];

function Studio() {
  const steps = ["Předčištění", "Ultrazvuková lázeň", "Oplach a sušení", "Jednotlivé balení", "Parní autokláv", "Kontrola a evidence"];
  return <PageShell lang="cs" slug="studio" eyebrow="01 / STUDIO" title={<>STUDIO<br />POSTAVENÉ NA PŘESNOSTI.</>} intro="Promyšlený prostor, zkušený tým a kontrolované procesy. Vše pro bezpečný piercing a klidný průběh návštěvy.">
    <section className="studio-intro-gallery frame">
      <div className="studio-intro-main"><img src="/assets/studio-workspace-wide.webp" alt="Pracovní prostor Black Lotus Piercing Studio" /></div>
      <div className="studio-intro-side">
        <div className="studio-intro-copy"><span>BLACK LOTUS / PRAHA</span><strong>Od roku 2015.</strong><p>Piercingu se věnujeme od roku 2015. Pracujeme bez spěchu, s respektem k anatomii a s důrazem na každý detail.</p><p>Hygienické a sterilizační postupy máme nastavené nad rámec povinného minima. Děláme práci, které věříme — a která nás pořád baví.</p></div>
        <div className="studio-intro-secondary"><img src="/assets/studio-workspace-detail.webp" alt="Detail pracovního prostoru Black Lotus" loading="lazy" /></div>
      </div>
    </section>
    <section id="team" className="sub-section frame"><SectionIndex index="01" label="TÝM" /><h2>Dva lidé.<br />Jeden standard.</h2><div className="bio-grid"><article><div className="portrait bio-photo"><img src="/assets/alex-studio.webp" alt="Alex — zakladatel Black Lotus a profesionální piercer" loading="lazy" /></div><span>ZAKLADATEL / PIERCER</span><h3>Alex</h3><p>Více než 12 let zkušeností, tisíce provedených piercingů a důraz na každý detail. Alex je zakladatelem studia a profesionálním piercerem, který spojuje technickou preciznost s citem pro estetiku.</p><p>Každý piercing přizpůsobuje individuální anatomii klienta, pracuje výhradně s kvalitními šperky a dodržuje nejvyšší hygienické standardy. Díky zkušenostem i osobnímu přístupu se můžete spolehnout na bezpečný průběh i výsledek, který obstojí v čase.</p></article><article><div className="portrait bio-photo"><img src="/assets/maky-studio.webp" alt="Maky — profesionální piercerka Black Lotus" loading="lazy" /></div><span>PIERCERKA</span><h3>Maky</h3><p>Maky je profesionální piercerka s citem pro detail, estetiku a bezpečnost. Ke každému klientovi přistupuje individuálně a každý piercing přizpůsobuje anatomii i osobnímu stylu.</p><p>Jejím cílem je, aby celý zážitek proběhl v příjemné atmosféře a výsledkem byl piercing, který vám bude dělat radost po mnoho let.</p></article></div></section>
    <section id="sterilisation" className="sub-section technical"><div className="frame"><SectionIndex index="02" label="STERILIZACE" /><h2>Opakovatelný<br />bezpečnostní proces.</h2><div className="number-list">{steps.map((s,i)=><div key={s}><span>{String(i+1).padStart(2,"0")}</span><strong>{s}</strong><p>{i===5 ? "Každý cyklus je zkontrolován před uložením nástrojů." : "Každý krok probíhá odděleně a v jasně definovaném pořadí."}</p></div>)}</div></div></section>
    <section id="jewelry" className="sub-section frame jewelry-page"><SectionIndex index="03" label="ŠPERKY" /><div><h2>Implantátový titan.<br />Bez kompromisů.</h2><p>Pro první aplikaci používáme šperky z implantátového titanu ASTM F-136. Správný rozměr, tvar a typ závitu vybíráme podle anatomie a fáze hojení.</p><dl className="spec-grid"><div><dt>STANDARD</dt><dd>ASTM F-136</dd></div><div><dt>ZÁVIT</dt><dd>VNITŘNÍ</dd></div><div><dt>NIKL</dt><dd>0%</dd></div><div><dt>POVRCH</dt><dd>RUČNĚ LEŠTĚNÝ</dd></div></dl></div><img src="/assets/titanium.webp" alt="Titanový šperk ASTM F-136" /></section>
  </PageShell>;
}

function StudioPreview() { return <StudioPage lang="cs" preview />; }

function Cenik() {
  return <PageShell lang="cs" slug="cenik" eyebrow="02 / CENÍK" title={<>CENÍK<br />PIERCINGU.</>} intro="Konečná cena vždy záleží na vybraném šperku. Uvedené ceny zahrnují základní šperk z prvotřídního titanu ASTM F-136 s vnitřním závitem, pokud není uvedeno jinak.">
    <section className="sub-section frame price-browser-section"><PriceList groups={priceGroups} labels={{ tabs: "NAVIGACE", item: "POLOŽKA", service: "SLUŽBA", price: "CENA / CZK", diagram: "ANATOMIE / SCHÉMA" }} /><p className="price-note">Před aplikací vždy potvrdíme výběr šperku i konečnou cenu. U základních piercingů je titanový šperk ASTM F-136 součástí uvedené ceny.</p></section>
    <section className="booking-band frame"><p>[ KONZULTACE JE SOUČÁSTÍ APLIKACE ]</p><h2>Nejste si jistí,<br />co vám vyhovuje?</h2><Link href="/booking" className="button button-light">REZERVOVAT TERMÍN <ArrowIcon /></Link></section>
  </PageShell>;
}
function Work() {
  return <PageShell lang="cs" slug="work" eyebrow="03 / PRÁCE" title={<>ARCHIV<br />TĚLA.</>} intro="Vybrané realizace řazené jako technický archiv. Umístění, materiál a anatomie — bez vizuálního šumu.">
    <section className="archive frame"><figure className="archive-wide"><img src="/assets/hero.webp" alt="Helix piercing"/><figcaption><span>001 / HELIX</span><span>UCHO · TITAN · 2026</span></figcaption></figure><figure><img src="/assets/conch.webp" alt="Conch piercing"/><figcaption><span>002 / CONCH</span><span>UCHO · TITAN · 2026</span></figcaption></figure><figure><img src="/assets/nostril.webp" alt="Nostril piercing"/><figcaption><span>003 / NOSTRIL</span><span>OBLIČEJ · TITAN · 2026</span></figcaption></figure><figure className="archive-object"><img src="/assets/titanium.webp" alt="Titanový labret"/><figcaption><span>004 / OBJEKT</span><span>ASTM F-136 · MĚŘÍTKO 04:01</span></figcaption></figure></section>
  </PageShell>;
}

function Care() {
  return <CarePage lang="cs" />;
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
  return <BookingPage lang="cs" />;
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

const pages: Record<string, () => React.ReactNode> = { studio: () => <StudioPage lang="cs" />, "studio-preview": StudioPreview, cenik: Cenik, work: Work, care: Care, journal: Journal, contact: Contact, booking: Booking, "gift-card": GiftCard };

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "studio-preview") return { title: "Studio preview | Black Lotus", robots: { index: false, follow: false } };
  if (slug !== "cenik" && slug !== "piercing") return {};
  return {
    title: "Ceník piercingu Praha | Black Lotus Piercing Studio",
    description: "Aktuální ceny piercingu v Praze. Základní šperk z implantátového titanu ASTM F-136 je u standardních aplikací součástí ceny.",
    alternates: {
      canonical: "https://lotuspiercing.cz/cenik/",
      languages: { "cs-CZ": "https://lotuspiercing.cz/cenik/", en: "https://lotuspiercing.cz/en/cenik/" },
    },
  };
}

export function generateStaticParams() { return [...Object.keys(pages), "piercing"].map(slug => ({ slug })); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (slug === "piercing") permanentRedirect("/cenik"); const Component = pages[slug]; if (!Component) notFound(); return <Component />; }

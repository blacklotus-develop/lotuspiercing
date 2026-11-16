import ArrowIcon from "../arrow-icon";
import JournalIndex from "../journal-index";
import PriceList from "../price-list";
import { notFound, permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import Link from "../native-link";
import { pageMetadata } from "../seo";
import { PageShell, SectionIndex } from "../site";
import StudioPage from "../studio-page";
import BookingPage from "../booking-page";
import CarePage from "../care-page";
import ContactPage from "../contact-page";

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
  return <ContactPage lang="cs" />;
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

const pages: Record<string, () => React.ReactNode> = { studio: () => <StudioPage lang="cs" />, cenik: Cenik, work: Work, care: Care, journal: Journal, contact: Contact, booking: Booking, "gift-card": GiftCard };

// Заголовок и описание каждой страницы для Google и соцсетей.
const seo: Record<string, { title: string; description: string }> = {
  studio: {
    title: "Studio a tým | Black Lotus Piercing Praha",
    description: "Piercingové studio v Praze 10 – Vršovicích. Seznamte se s piercery Alexem a Maky, s naším sterilizačním procesem a s tím, jak probíhá návštěva.",
  },
  cenik: {
    title: "Ceník piercingu Praha | Black Lotus Piercing Studio",
    description: "Aktuální ceny piercingu v Praze. Základní šperk z implantátového titanu ASTM F-136 je u standardních aplikací součástí ceny.",
  },
  work: {
    title: "Portfolio piercingů | Black Lotus Piercing Praha",
    description: "Ukázky naší práce: helix, conch, nostril a další piercingy se šperky z implantátového titanu ASTM F-136.",
  },
  care: {
    title: "Péče o piercing a hojení | Black Lotus Piercing Praha",
    description: "Jak pečovat o nový piercing, jak dlouho se hojí jednotlivá místa a jaké podmínky platí pro nezletilé. Praktický průvodce od Black Lotus.",
  },
  journal: {
    title: "Články o piercingu | Black Lotus Piercing Praha",
    description: "Praktické články o piercingu bez mýtů: materiály šperků, hojení, výměna prvního šperku a co čekat při první návštěvě.",
  },
  contact: {
    title: "Kontakt | Black Lotus Piercing Praha",
    description: "Petrohradská 388/22, Praha 10 – Vršovice. Telefon +420 777 547 240, e-mail piercingprague@gmail.com. Rezervace termínu online.",
  },
  booking: {
    title: "Rezervace termínu | Black Lotus Piercing Praha",
    description: "Rezervujte si termín piercingu online. Vyberte službu, piercera a čas, který vám vyhovuje.",
  },
  "gift-card": {
    title: "Dárkový poukaz na piercing | Black Lotus Piercing Praha",
    description: "Darujte piercing nebo šperk. Dárkový poukaz Black Lotus od 1 000 Kč v digitální nebo tištěné podobě.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = seo[slug];
  if (!page) return {};
  return pageMetadata({ lang: "cs", cs: `/${slug}`, en: `/en/${slug}`, ...page });
}

export function generateStaticParams() { return [...Object.keys(pages), "piercing"].map(slug => ({ slug })); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (slug === "piercing") permanentRedirect("/cenik"); const Component = pages[slug]; if (!Component) notFound(); return <Component />; }

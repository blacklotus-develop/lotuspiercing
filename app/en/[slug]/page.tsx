import ArrowIcon from "../../arrow-icon";
import JournalIndex from "../../journal-index";
import PriceList from "../../price-list";
import { notFound, permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import Link from "../../native-link";
import { pageMetadata } from "../../seo";
import { PageShell, SectionIndex } from "../../site";
import StudioPage from "../../studio-page";
import BookingPage from "../../booking-page";
import CarePage from "../../care-page";
import ContactPage from "../../contact-page";

const priceGroups = [
  {
    id: "ear",
    label: "Ear",
    description: "Basic ASTM F-136 titanium jewelry is included in the price.",
    items: [
      { name: "Lobe", price: "from 1,200 CZK", note: "Price for one lobe piercing." },
      { name: "Helix", price: "from 1,400 CZK" },
      { name: "Rook", price: "from 1,400 CZK" },
      { name: "Tragus", price: "from 1,400 CZK" },
      { name: "Conch", price: "from 1,400 CZK" },
      { name: "Flat", price: "from 1,400 CZK" },
      { name: "Daith", price: "from 1,500 CZK" },
      { name: "Forward Helix", price: "from 1,500 CZK" },
      { name: "Industrial", price: "from 2,500 CZK" },
    ],
  },
  {
    id: "face",
    label: "Face",
    description: "Basic ASTM F-136 titanium jewelry is included in the price.",
    items: [
      { name: "Lip", price: "from 1,400 CZK" },
      { name: "Nostril", price: "from 1,400 CZK" },
      { name: "Smiley", price: "from 1,400 CZK" },
      { name: "Tongue", price: "from 1,400 CZK" },
      { name: "Eyebrow", price: "from 1,400 CZK" },
      { name: "Bridge", price: "from 1,500 CZK" },
      { name: "Septum", price: "from 1,500 CZK" },
      { name: "Cheeks", price: "from 3,000 CZK" },
      { name: "High nostril ×2", price: "from 3,000 CZK" },
    ],
  },
  {
    id: "body",
    label: "Body",
    description: "Basic ASTM F-136 titanium jewelry is included in the price.",
    items: [
      { name: "Navel", price: "from 1,500 CZK" },
      { name: "Nipple ×1", price: "from 1,500 CZK" },
      { name: "Nipples ×2", price: "from 3,000 CZK" },
      { name: "Genital piercing", price: "from 2,500 CZK" },
    ],
  },
  {
    id: "microdermal",
    label: "Microdermal",
    description: "Application includes basic jewelry. Removal is a separate service.",
    items: [
      { name: "Microdermal", price: "from 1,500 CZK" },
      { name: "Microdermal removal", price: "700 CZK" },
    ],
  },
  {
    id: "surface",
    label: "Surface",
    description: "Basic ASTM F-136 titanium jewelry is included in the price.",
    items: [
      { name: "Surface piercing", price: "from 2,500 CZK" },
    ],
  },
  {
    id: "tunnels",
    label: "Tunnels",
    description: "Tunnel insertion includes basic jewelry.",
    items: [
      { name: "Tunnel insertion", price: "from 2,000 CZK" },
      { name: "Stretching by 2 mm", price: "from 500 CZK" },
    ],
  },
  {
    id: "additional-services",
    label: "Additional services",
    description: "Consultations, jewelry changes, cleaning, anodising, aftercare and gift cards.",
    items: [
      { name: "Consultation", price: "200–300 CZK", note: "Studio clients 200 CZK · external clients 300 CZK." },
      { name: "Microdermal top change", price: "300 CZK", note: "Jewelry is not included in the price." },
      { name: "Jewelry change and downsizing", price: "300 CZK", note: "Jewelry is not included in the price." },
      { name: "Piercing cleaning", price: "300 CZK" },
      { name: "Anodising", price: "200 CZK", note: "Color change for one titanium piece." },
      { name: "Aftercare spray", price: "250 CZK" },
      { name: "Gift cards", price: "from 1,000 CZK", note: "Available digitally or in print." },
    ],
  },
];


function Cenik() {
  return <PageShell lang="en" slug="cenik" eyebrow="02 / PRICES" title={<>PIERCING<br />PRICE LIST.</>} intro="The final price always depends on the selected jewelry. Unless stated otherwise, prices include basic internally threaded ASTM F-136 implant-grade titanium jewelry.">
    <section className="sub-section frame price-browser-section"><PriceList groups={priceGroups} labels={{ tabs: "NAVIGATION", item: "ITEM", service: "SERVICE", price: "PRICE / CZK", diagram: "ANATOMY / DIAGRAM" }} /><p className="price-note">We always confirm the jewelry selection and final price before the procedure. Basic ASTM F-136 titanium jewelry is included with standard piercing services.</p></section>
    <section className="booking-band frame"><p>[ CONSULTATION INCLUDED WITH THE PROCEDURE ]</p><h2>Not sure what fits<br />your anatomy?</h2><Link href="/en/booking" className="button button-light">BOOK APPOINTMENT <ArrowIcon /></Link></section>
  </PageShell>;
}
function Work() {
  return <PageShell lang="en" slug="work" eyebrow="03 / WORK" title={<>BODY<br />ARCHIVE.</>} intro="Selected work arranged as a technical archive. Placement, material and anatomy — without visual noise.">
    <section className="archive frame"><figure className="archive-wide"><img src="/assets/hero.webp" alt="Helix piercing"/><figcaption><span>001 / HELIX</span><span>EAR · TITANIUM · 2026</span></figcaption></figure><figure><img src="/assets/conch.webp" alt="Conch piercing"/><figcaption><span>002 / CONCH</span><span>EAR · TITANIUM · 2026</span></figcaption></figure><figure><img src="/assets/nostril.webp" alt="Nostril piercing"/><figcaption><span>003 / NOSTRIL</span><span>FACE · TITANIUM · 2026</span></figcaption></figure><figure className="archive-object"><img src="/assets/titanium.webp" alt="Titanium labret"/><figcaption><span>004 / OBJECT</span><span>ASTM F-136 · SCALE 04:01</span></figcaption></figure></section>
  </PageShell>;
}

function Care() {
  return <CarePage lang="en" />;
}

function Journal() {
  return <PageShell lang="en" slug="journal" eyebrow="05 / JOURNAL" title={<><span>FIELD</span><br />NOTES.</>} intro="Practical, myth-free information about materials, healing, anatomy and safe decisions."><JournalIndex lang="en" /></PageShell>;
}

function Contact() {
  return <ContactPage lang="en" />;
}

function Booking() {
  return <BookingPage lang="en" />;
}

function GiftCard() {
  const values = ["1,000 CZK", "1,500 CZK", "2,000 CZK", "3,000 CZK"];
  return <PageShell lang="en" slug="gift-card" eyebrow="08 / GIFT CARD" title={<>A GIFT<br />THAT STAYS.</>} intro="Black Lotus gift cards are available digitally or in print. Choose the value that suits you.">
    <section className="action-page frame">
      <div className="action-intro"><SectionIndex index="01" label="GIFT CARD VALUE" /><h2>Choose<br />a value.</h2></div>
      <div className="voucher-grid">{values.map(value => <a key={value} href="https://lotusjewelry.cz/kategorie-produktu/darkove-poukazy/"><span>BLACK LOTUS / GIFT</span><strong>{value}</strong><b>ORDER <ArrowIcon /></b></a>)}</div>
      <div className="booking-info"><div><span>DIGITAL</span><p>A practical option delivered by email after confirmation.</p></div><div><span>PRINTED</span><p>A physical gift card prepared for collection at the studio.</p></div></div>
    </section>
  </PageShell>;
}

const pages: Record<string, () => React.ReactNode> = { studio: () => <StudioPage lang="en" />, cenik: Cenik, work: Work, care: Care, journal: Journal, contact: Contact, booking: Booking, "gift-card": GiftCard };

// Title and description of each page for Google and social previews.
const seo: Record<string, { title: string; description: string }> = {
  studio: {
    title: "Studio & team | Black Lotus Piercing Prague",
    description: "Piercing studio in Prague 10 – Vršovice. Meet our piercers Alex and Maky, see our sterilisation process and what to expect during your visit.",
  },
  cenik: {
    title: "Piercing prices in Prague | Black Lotus Piercing Studio",
    description: "Current piercing prices in Prague. Basic ASTM F-136 implant-grade titanium jewelry is included with standard piercing services.",
  },
  work: {
    title: "Piercing portfolio | Black Lotus Piercing Prague",
    description: "Examples of our work: helix, conch, nostril and more, with ASTM F-136 implant-grade titanium jewelry.",
  },
  care: {
    title: "Piercing aftercare & healing | Black Lotus Piercing Prague",
    description: "How to care for a new piercing, typical healing times and the rules for minors. A practical guide from Black Lotus.",
  },
  journal: {
    title: "Piercing journal | Black Lotus Piercing Prague",
    description: "Practical, myth-free articles about piercing: jewelry materials, healing, changing your first jewelry and what to expect at your first visit.",
  },
  contact: {
    title: "Contact | Black Lotus Piercing Prague",
    description: "Petrohradská 388/22, Prague 10 – Vršovice. Phone +420 777 547 240, email piercingprague@gmail.com. Book your appointment online.",
  },
  booking: {
    title: "Book an appointment | Black Lotus Piercing Prague",
    description: "Book your piercing online. Choose the service, your piercer and a time that suits you.",
  },
  "gift-card": {
    title: "Piercing gift card | Black Lotus Piercing Prague",
    description: "Give a piercing or jewelry. Black Lotus gift cards from 1,000 CZK, digital or printed.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = seo[slug];
  if (!page) return {};
  return pageMetadata({ lang: "en", cs: `/${slug}`, en: `/en/${slug}`, ...page });
}

export function generateStaticParams() { return [...Object.keys(pages), "piercing"].map(slug => ({ slug })); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (slug === "piercing") permanentRedirect("/en/cenik"); const Component = pages[slug]; if (!Component) notFound(); return <Component />; }

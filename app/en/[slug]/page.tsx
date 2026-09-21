import ArrowIcon from "../../arrow-icon";
import JournalIndex from "../../journal-index";
import { notFound } from "next/navigation";
import Link from "../../native-link";
import { PageShell, SectionIndex } from "../../site";

const prices = [
  ["EAR", "Lobe", "from 1,200 CZK"], ["EAR", "Helix / Rook / Conch", "from 1,400 CZK"],
  ["FACE", "Nostril / Smiley / Tongue / Eyebrow", "from 1,400 CZK"], ["FACE", "Bridge / Septum", "from 1,500 CZK"],
  ["BODY", "Navel / Nipple 1×", "from 1,500 CZK"], ["BODY", "Nipples 2×", "from 3,000 CZK"],
  ["INTIMATE", "Genital piercing", "from 2,500 CZK"], ["MICRODERMAL", "Application", "from 1,500 CZK"],
  ["SURFACE", "Surface piercing", "from 2,500 CZK"], ["SERVICE", "Change / downsizing / cleaning", "300 CZK"],
  ["SERVICE", "Anodising", "200 CZK"], ["CARE", "Aftercare spray", "250 CZK"],
];

function Studio() {
  const steps = ["Pre-cleaning", "Ultrasonic bath", "Rinsing and drying", "Individual packaging", "Steam autoclave", "Verification and records"];
  return <PageShell lang="en" slug="studio" eyebrow="01 / STUDIO" title={<>CONTROLLED<br />BY DESIGN.</>} intro="A space, team and process built around one goal: safe piercing that works with your body long-term.">
    <section className="sub-visual frame"><img src="/assets/studio.webp" alt="Black Lotus studio interior" /><div><span>BLACK LOTUS / PRAGUE</span><strong>Since 2015.</strong><p>We work precisely, without rushing, and with respect for your anatomy. Consultation is not a formality — it is the foundation of the result.</p></div></section>
    <section id="team" className="sub-section frame"><SectionIndex index="01" label="TEAM" /><h2>Two people.<br />One standard.</h2><div className="bio-grid"><article><div className="portrait monogram">A</div><span>FOUNDER / PIERCER</span><h3>Alex</h3><p>Founder of Black Lotus. A professional piercer since 2015, focused on safety, precise placement and a calm client experience.</p></article><article><div className="portrait monogram">P</div><span>PIERCER</span><h3>Paxy</h3><p>Individual consultations, a strong eye for styling and consistent care before application and throughout healing.</p></article></div></section>
    <section id="sterilisation" className="sub-section technical"><div className="frame"><SectionIndex index="02" label="STERILISATION" /><h2>A repeatable<br />safety protocol.</h2><div className="number-list">{steps.map((s,i)=><div key={s}><span>{String(i+1).padStart(2,"0")}</span><strong>{s}</strong><p>{i===5 ? "Every cycle is verified before instruments are stored." : "Every step is separated and follows a clearly defined sequence."}</p></div>)}</div></div></section>
    <section id="jewelry" className="sub-section frame jewelry-page"><SectionIndex index="03" label="JEWELRY" /><div><h2>Implant-grade<br />or nothing.</h2><p>For initial application we use ASTM F-136 implant-grade titanium. We choose the right size, shape and threading for your anatomy and healing stage.</p><dl className="spec-grid"><div><dt>STANDARD</dt><dd>ASTM F-136</dd></div><div><dt>THREAD</dt><dd>INTERNAL</dd></div><div><dt>NICKEL</dt><dd>0%</dd></div><div><dt>FINISH</dt><dd>HAND POLISHED</dd></div></dl></div><img src="/assets/titanium.webp" alt="ASTM F-136 titanium jewelry" /></section>
  </PageShell>;
}

function Piercing() {
  return <PageShell lang="en" slug="piercing" eyebrow="02 / PIERCING" title={<>SERVICES<br />& PRICES.</>} intro="Prices include basic ASTM F-136 titanium jewelry unless stated otherwise. The final price depends on your chosen piece and anatomy.">
    <section className="sub-section frame"><div className="price-head"><span>TYPE</span><span>PROCEDURE</span><span>PRICE / CZK</span></div><div className="price-list">{prices.map(([cat,name,price],i)=><div key={`${cat}-${name}`}><span>{String(i+1).padStart(2,"0")} / {cat}</span><strong>{name}</strong><b>{price}</b></div>)}</div><p className="price-note">Prices are indicative. We always confirm the jewelry and final price before application.</p></section>
    <section className="booking-band frame"><p>[ CONSULTATION INCLUDED ]</p><h2>Not sure what fits<br />your anatomy?</h2><Link href="/en/booking" className="button button-light">BOOK A CONSULTATION <ArrowIcon /></Link></section>
  </PageShell>;
}

function Work() {
  return <PageShell lang="en" slug="work" eyebrow="03 / WORK" title={<>BODY<br />ARCHIVE.</>} intro="Selected work arranged as a technical archive. Placement, material and anatomy — without visual noise.">
    <section className="archive frame"><figure className="archive-wide"><img src="/assets/hero.webp" alt="Helix piercing"/><figcaption><span>001 / HELIX</span><span>EAR · TITANIUM · 2026</span></figcaption></figure><figure><img src="/assets/conch.webp" alt="Conch piercing"/><figcaption><span>002 / CONCH</span><span>EAR · TITANIUM · 2026</span></figcaption></figure><figure><img src="/assets/nostril.webp" alt="Nostril piercing"/><figcaption><span>003 / NOSTRIL</span><span>FACE · TITANIUM · 2026</span></figcaption></figure><figure className="archive-object"><img src="/assets/titanium.webp" alt="Titanium labret"/><figcaption><span>004 / OBJECT</span><span>ASTM F-136 · SCALE 04:01</span></figcaption></figure></section>
  </PageShell>;
}

function Care() {
  return <PageShell lang="en" slug="care" eyebrow="04 / CARE" title={<>BEFORE<br />& AFTER.</>} intro="A clear guide to preparing well, caring correctly and responding early throughout the healing process.">
    <section id="aftercare" className="sub-section frame"><SectionIndex index="01" label="AFTERCARE"/><h2>Less touching.<br />More healing.</h2><div className="care-grid"><article><span>DO / 01</span><h3>Clean hands</h3><p>Only touch your piercing when essential for cleaning, and always with clean hands.</p></article><article><span>DO / 02</span><h3>Sterile saline</h3><p>Use a sterile saline solution according to your piercer&apos;s guidance.</p></article><article><span>AVOID / 03</span><h3>No manipulation</h3><p>Do not rotate the jewelry, remove it early or put pressure on it while sleeping.</p></article><article><span>CHECK / 04</span><h3>Check-up</h3><p>If anything feels uncertain, send us a photo or book a studio check-up.</p></article></div></section>
    <section id="healing" className="sub-section technical"><div className="frame"><SectionIndex index="02" label="HEALING"/><h2>Healing is<br />not linear.</h2><div className="timeline"><div><span>00—24 H</span><p>Tenderness and mild swelling can be a normal response.</p></div><div><span>01—04 WEEKS</span><p>The piercing may look calm while the channel is still forming.</p></div><div><span>FOLLOW-UP</span><p>A check-up and possible downsizing, depending on the piercing.</p></div><div><span>HEALED</span><p>We recommend changing jewelry based on actual condition, not just the calendar.</p></div></div></div></section>
    <section id="minors" className="sub-section frame"><SectionIndex index="03" label="MINORS"/><div className="minor-grid"><h2>Piercing for<br />minors.</h2><div><p className="lead">Age, piercing type and the presence of a legal guardian determine the conditions for minors.</p><ul><li>Bring valid identification for both the minor and legal guardian.</li><li>The legal guardian must remain present throughout the appointment.</li><li>Some piercing types are available only from a specified age.</li><li>Please confirm the exact conditions before booking.</li></ul><Link href="/en/contact" className="text-link">CHECK THE CONDITIONS <span><ArrowIcon /></span></Link></div></div></section>
  </PageShell>;
}

function Journal() {
  return <PageShell lang="en" slug="journal" eyebrow="05 / JOURNAL" title={<><span>FIELD</span><br />NOTES.</>} intro="Practical, myth-free information about materials, healing, anatomy and safe decisions."><JournalIndex lang="en" /></PageShell>;
}

function Contact() {
  return <PageShell lang="en" slug="contact" eyebrow="06 / CONTACT" title={<>VISIT<br />BLACK LOTUS.</>} intro="Appointments are booked online. If you are unsure about a piercing or the conditions for minors, call or write to us.">
    <section className="contact-grid frame"><div className="contact-card"><span>01 / ADDRESS</span><h2>Petrohradská<br />388/22</h2><p>Prague 10 — Vršovice<br />Red building, first entrance</p><p>Tram: Nádraží Vršovice / 5 min<br />Bus: Ukrajinská / 1 min</p><a href="https://maps.google.com/?q=Petrohradská+388/22+Praha" className="text-link">OPEN MAP <ArrowIcon /></a></div><div className="contact-card dark"><span>02 / BOOKING</span><h2>Choose a<br />time.</h2><p>Select a service, piercer and contact method. Confirmation will arrive by email.</p><Link href="/en/booking" className="button button-light">BOOK APPOINTMENT <ArrowIcon /></Link></div><div className="contact-card"><span>03 / CONTACT</span><h2>Talk to us.</h2><p><a href="tel:+420777547240">+420 777 547 240</a><br/><a href="mailto:piercingprague@gmail.com">piercingprague@gmail.com</a></p><p>Instagram<br/><a href="https://www.instagram.com/lotus.piercing/">@lotus.piercing <ArrowIcon /></a></p></div><div className="contact-card gift-contact"><span>04 / GIFT CARD</span><h2>Printed<br />or digital.</h2><p>Gift cards from 1,000 CZK, available in printed or digital form.</p><Link href="/en/gift-card" className="text-link">ORDER A GIFT CARD <ArrowIcon /></Link></div></section>
  </PageShell>;
}

function Booking() {
  return <PageShell lang="en" slug="booking" eyebrow="07 / BOOKING" title={<>YOUR<br />APPOINTMENT.</>} intro="Tell us which piercing you are considering and which day suits you. We will confirm it or suggest the nearest available appointment.">
    <section className="action-page frame">
      <div className="action-intro"><SectionIndex index="01" label="CHOOSE A METHOD" /><h2>How would you<br />like to book?</h2></div>
      <div className="action-options">
        <a href="mailto:piercingprague@gmail.com?subject=Appointment request&body=Hello,%0A%0AI am interested in:%0APreferred date:%0APhone:%0A%0AThank you." className="action-option"><span>01 / EMAIL</span><strong>Send a request</strong><p>Include the piercing and your preferred appointment time.</p><b><ArrowIcon /></b></a>
        <a href="tel:+420777547240" className="action-option"><span>02 / PHONE</span><strong>+420 777 547 240</strong><p>For a quick consultation or to check availability.</p><b><ArrowIcon /></b></a>
        <a href="https://www.instagram.com/lotus.piercing/" className="action-option"><span>03 / INSTAGRAM</span><strong>@lotus.piercing</strong><p>Send us a direct message.</p><b><ArrowIcon /></b></a>
      </div>
      <div className="booking-info"><div><span>BEFORE BOOKING</span><p>Not sure which piercing suits you? Browse our services and prices.</p><Link href="/en/piercing" className="text-link">SERVICES & PRICES <ArrowIcon /></Link></div><div><span>MINORS</span><p>Conditions for minors vary by age and piercing type.</p><Link href="/en/care#minors" className="text-link">CONDITIONS FOR MINORS <ArrowIcon /></Link></div></div>
    </section>
  </PageShell>;
}

function GiftCard() {
  const values = ["1,000 CZK", "1,500 CZK", "2,000 CZK", "3,000 CZK"];
  return <PageShell lang="en" slug="gift-card" eyebrow="08 / GIFT CARD" title={<>A GIFT<br />THAT STAYS.</>} intro="Black Lotus gift cards are available digitally or in print. Choose the value that suits you.">
    <section className="action-page frame">
      <div className="action-intro"><SectionIndex index="01" label="GIFT CARD VALUE" /><h2>Choose<br />a value.</h2></div>
      <div className="voucher-grid">{values.map(value => <a key={value} href={`mailto:piercingprague@gmail.com?subject=Gift card ${encodeURIComponent(value)}&body=Hello,%0A%0AI would like a gift card worth ${encodeURIComponent(value)}.%0AFormat: digital / printed%0ARecipient name:%0A%0AThank you.`}><span>BLACK LOTUS / GIFT</span><strong>{value}</strong><b>ORDER <ArrowIcon /></b></a>)}</div>
      <div className="booking-info"><div><span>DIGITAL</span><p>A practical option delivered by email after confirmation.</p></div><div><span>PRINTED</span><p>A physical gift card prepared for collection at the studio.</p></div></div>
    </section>
  </PageShell>;
}

const pages: Record<string, () => React.ReactNode> = { studio: Studio, piercing: Piercing, work: Work, care: Care, journal: Journal, contact: Contact, booking: Booking, "gift-card": GiftCard };
export function generateStaticParams() { return Object.keys(pages).map(slug => ({ slug })); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const Component = pages[slug]; if (!Component) notFound(); return <Component />; }

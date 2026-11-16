import HeroSlides from "../hero-slides";
import ArrowIcon from "../arrow-icon";
import Link from "../native-link";
import { pageMetadata } from "../seo";
import { Footer, Header, SectionIndex } from "../site";
import HomeFaq from "../home-faq";
import CoverImage from "../journal/cover-image";
import GiftBanner from "../gift-banner";
import MaterialsSection from "../materials-section";
import ServicesShowcase from "../services-showcase";
import { faqItems } from "../home-faq-items";
import { InstagramPreview, ReviewsPreview } from "../integration-preview";

const MAP_URL = "https://maps.app.goo.gl/gQLt5m7vFCdRuKzTA";

// THE SPACE → specific parts of the Studio page (anchors #story, #sterilisation, #visit exist).
const studioLinks = [
  ["01", "Our story", "Discover the story of Black Lotus, our values and our approach to piercing.", "/en/studio#story"],
  ["02", "Sterilisation", "See how we prepare our instruments and how we keep every procedure safe.", "/en/studio#sterilisation"],
  ["03", "Your visit", "Find out what to expect, from the first consultation to the piercing itself.", "/en/studio#visit"],
];

export const metadata = pageMetadata({
  lang: "en", cs: "/", en: "/en",
  title: "Black Lotus Piercing Studio | Piercing in Prague",
  description: "Professional piercing studio in Prague 10 – Vršovice. ASTM F-136 implant-grade titanium, controlled sterilisation, individual care and online booking.",
});



export default function EnglishHome() {
  return <main>
    <Header lang="en" />

    <section className="hero">
      <HeroSlides alt="Close-up of an ear with several piercings and silver jewelry" />
      <div className="hero-shade" />
      <div className="hero-topline"><span>[ PIERCING STUDIO / PRAGUE ]</span><span>50°03&apos;58.6&quot;N / 14°27&apos;05.9&quot;E</span></div>
      <div className="hero-copy"><p className="eyebrow light">BLACK LOTUS® / SINCE 2015</p><h1>PIERCING<br />FOR THE<br />HUMAN BODY.</h1><div className="hero-action-row"><p>Precision application. Implant-grade titanium.<br />A calm, professional approach.</p><Link href="/en/booking" className="button button-light">BOOK APPOINTMENT <span><ArrowIcon /></span></Link></div></div>
      <div className="scroll-mark">SCROLL / 01—08</div>
    </section>

    <section className="proof-grid frame"><a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="proof-link" aria-label="700+ Google reviews — open the reviews on Google Maps"><strong>700+</strong><span>GOOGLE REVIEWS</span></a><div><strong>12</strong><span>YEARS OF EXPERIENCE</span></div><div><strong>7000+</strong><span>COMPLETED PIERCINGS</span></div></section>

    <ServicesShowcase lang="en" index="01" />

    <section className="studio-visual"><img src="/assets/prostor-studio.webp" alt="The Black Lotus treatment room with a green wall, sink and steam autoclave" /><div className="studio-overlay" /><div className="studio-visual-copy frame"><SectionIndex index="02" label="THE SPACE" light /><h2>A CONTROLLED<br />SPACE FOR<br />INDIVIDUALITY.</h2><Link href="/en/studio" className="button button-ghost">ABOUT THE STUDIO <span><ArrowIcon /></span></Link></div></section>

    <nav className="studio-links frame" aria-label="More about the studio">{studioLinks.map(([n, title, text, href]) => <Link key={href} href={href}><span>{n}</span><strong>{title}</strong><p>{text}</p><b><ArrowIcon /></b></Link>)}</nav>

    <section className="team frame section-space"><SectionIndex index="03" label="PEOPLE" /><div className="section-title-row"><h2>The people<br />behind Black Lotus.</h2><p>Two approaches, one standard: calm, precision and respect for your body.</p></div><div className="team-grid">
      <article className="team-card" tabIndex={0}>
        <span className="portrait-code">01 / PIERCER</span>
        <div className="portrait team-photo"><img src="/assets/alex.webp" alt="Alex — Black Lotus founder and professional piercer" loading="lazy" /></div>
        <div className="team-card-summary"><h3>alex</h3><p>Studio founder · professional piercer</p><span className="team-more">HOVER FOR DETAILS</span></div>
        <div className="team-card-bio-desktop" aria-hidden="true"><div className="team-bio-content"><strong>alex</strong><p>More than 12 years of experience, thousands of completed piercings and attention to every detail. Alex is the studio founder and a professional piercer who combines technical precision with an eye for aesthetics.</p><p>Each piercing is adapted to the client’s individual anatomy. He works exclusively with high-quality jewelry and follows the highest hygiene standards. His experience and personal approach ensure a safe procedure and a result designed to stand the test of time.</p></div></div><details className="team-card-bio-mobile"><summary><span>MORE ABOUT ALEX</span><b>+</b></summary><div className="team-bio-content"><strong>alex</strong><p>More than 12 years of experience, thousands of completed piercings and attention to every detail. Alex is the studio founder and a professional piercer who combines technical precision with an eye for aesthetics.</p><p>Each piercing is adapted to the client’s individual anatomy. He works exclusively with high-quality jewelry and follows the highest hygiene standards. His experience and personal approach ensure a safe procedure and a result designed to stand the test of time.</p></div></details>
      </article>
      <article className="team-card" tabIndex={0}>
        <span className="portrait-code">02 / PIERCER</span>
        <div className="portrait team-photo"><img src="/assets/maky.webp" alt="Maky — professional piercer at Black Lotus" loading="lazy" /></div>
        <div className="team-card-summary"><h3>maky</h3><p>Professional piercer</p><span className="team-more">HOVER FOR DETAILS</span></div>
        <div className="team-card-bio-desktop" aria-hidden="true"><div className="team-bio-content"><strong>maky</strong><p>Maky is a professional piercer with an eye for detail, aesthetics and safety. She approaches every client individually and adapts each piercing to their anatomy and personal style.</p><p>Her goal is to make the entire experience comfortable and create a piercing you will enjoy for years to come.</p></div></div><details className="team-card-bio-mobile"><summary><span>MORE ABOUT MAKY</span><b>+</b></summary><div className="team-bio-content"><strong>maky</strong><p>Maky is a professional piercer with an eye for detail, aesthetics and safety. She approaches every client individually and adapts each piercing to their anatomy and personal style.</p><p>Her goal is to make the entire experience comfortable and create a piercing you will enjoy for years to come.</p></div></details>
      </article>
    </div><div className="team-book"><a href="https://n1487262.alteg.io/" className="text-link">BOOK WITH ALEX <span><ArrowIcon /></span></a><a href="https://n1487261.alteg.io/" className="text-link">BOOK WITH MAKY <span><ArrowIcon /></span></a></div><Link href="/en/studio#team" className="text-link">MEET THE TEAM <span><ArrowIcon /></span></Link></section>

    <MaterialsSection lang="en" index="04" />

    <InstagramPreview lang="en" />

    <section className="knowledge section-space"><div className="frame"><SectionIndex index="05" label="KNOWLEDGE" /><div className="section-title-row"><h2>Before<br />& after.</h2><p>Everything you need to know before booking and throughout healing.</p></div><div className="knowledge-links"><Link href="/en/journal/first-piercing-step-by-step"><span>BEFORE</span><strong>Preparing for your first piercing</strong><b><ArrowIcon /></b></Link><Link href="/en/care#minors"><span>BEFORE</span><strong>Information for minors</strong><b><ArrowIcon /></b></Link><Link href="/en/care#aftercare"><span>AFTER</span><strong>New piercing aftercare</strong><b><ArrowIcon /></b></Link><Link href="/en/care#healing"><span>AFTER</span><strong>Healing and check-ups</strong><b><ArrowIcon /></b></Link></div><Link href="/en/care" className="text-link">PIERCING CARE <span><ArrowIcon /></span></Link></div></section>
    <GiftBanner lang="en" />

    <section className="journal frame section-space"><SectionIndex index="06" label="JOURNAL" /><div className="section-title-row"><h2>Field notes.</h2><Link href="/en/journal" className="text-link">ALL ARTICLES <span><ArrowIcon /></span></Link></div><div className="article-grid has-covers"><Link href="/en/journal/first-piercing-step-by-step"><CoverImage lang="en" slug="first-piercing-step-by-step" sizes="(max-width: 900px) 104px, 33vw" /><span>GUIDE / 08 MIN</span><h3>Your first piercing, step by step</h3><p>From consultation to your first studio check-up.</p><b><ArrowIcon /></b></Link><Link href="/en/journal/anatomy-and-piercing"><CoverImage lang="en" slug="anatomy-and-piercing" sizes="(max-width: 900px) 104px, 33vw" /><span>ANATOMY / 07 MIN</span><h3>Why not every piercing suits everyone</h3><p>How anatomy affects placement, jewelry choice and long-term results.</p><b><ArrowIcon /></b></Link><Link href="/en/journal/titanium-vs-surgical-steel"><CoverImage lang="en" slug="titanium-vs-surgical-steel" sizes="(max-width: 900px) 104px, 33vw" /><span>MATERIALS / 09 MIN</span><h3>Titanium vs. surgical steel</h3><p>What belongs in a fresh piercing and how to recognize quality jewelry.</p><b><ArrowIcon /></b></Link></div></section>

    <ReviewsPreview lang="en" />

    <section className="faq-home frame section-space" aria-labelledby="faq-home-title"><SectionIndex index="07" label="BEFORE YOUR VISIT" /><div className="section-title-row"><h2 id="faq-home-title">Good<br />to know.</h2><p>Booking, prices, minors and other practical questions. Aftercare and healing are covered in our <Link href="/en/care">care guide</Link>.</p></div><HomeFaq items={faqItems("en")} /></section>

    <section className="visit frame section-space"><SectionIndex index="08" label="VISIT" /><h2>READY<br />WHEN<br />YOU ARE.</h2><div className="visit-details"><div><span>STUDIO</span><p>Petrohradská 388/22<br />Prague 10 — Vršovice</p></div><div><span>CONTACT</span><p><a href="tel:+420777547240">+420 777 547 240</a><br /><a href="mailto:piercingprague@gmail.com">piercingprague@gmail.com</a></p></div><Link href="/en/booking" className="round-link" aria-label="Book an appointment">BOOK<br /><ArrowIcon /></Link></div></section>
    <Footer lang="en" />
  </main>;
}

import ArrowIcon from "../arrow-icon";
import Link from "../native-link";
import { Footer, Header, SectionIndex } from "../site";

const services = [
  ["01", "Ear", "Lobe · Helix · Conch · Rook · Daith"],
  ["02", "Face", "Nostril · Septum · Eyebrow · Bridge"],
  ["03", "Body", "Navel · Nipple · Surface"],
  ["04", "Intimate", "Individual consultation based on anatomy"],
  ["05", "Microdermal", "Application · Check-up · Removal"],
];

const sterile = [
  ["01", "Pre-cleaning", "Instrument preparation and mechanical cleaning."],
  ["02", "Ultrasound", "Deep cleaning in an ultrasonic bath."],
  ["03", "Inspection", "Drying, visual inspection and individual packaging."],
  ["04", "Autoclave", "Steam sterilisation in a controlled cycle."],
  ["05", "Records", "Cycle verification and safe storage."],
];

export default function EnglishHome() {
  return <main>
    <Header lang="en" />
    <section className="hero">
      <img src="/assets/hero-main.webp" alt="Close-up of an ear with a titanium piercing" className="hero-image" />
      <div className="hero-shade" />
      <div className="hero-topline"><span>[ PIERCING STUDIO / PRAGUE ]</span><span>50°03&apos;58.6&quot;N / 14°27&apos;05.9&quot;E</span></div>
      <div className="hero-copy"><p className="eyebrow light">BLACK LOTUS® / SINCE 2015</p><h1>PIERCING<br />FOR THE<br />HUMAN BODY.</h1><div className="hero-action-row"><p>Precision application. Implant-grade titanium.<br />A calm, professional approach.</p><Link href="/en/booking" className="button button-light">BOOK APPOINTMENT <span><ArrowIcon /></span></Link></div></div>
      <div className="scroll-mark">SCROLL / 01—10</div>
    </section>

    <section className="proof-grid frame"><div><strong>600+</strong><span>GOOGLE REVIEWS</span></div><div><strong>10+</strong><span>YEARS OF EXPERIENCE</span></div><div><strong>7000+</strong><span>COMPLETED PIERCINGS</span></div></section>

    <section className="intro frame section-space"><SectionIndex index="01" label="STUDIO" /><div className="intro-grid"><h2>PRECISION<br />BECOMES<br />PERSONAL.</h2><div className="intro-text"><p className="lead">Precision, aesthetics and a professional approach. Piercing designed to become a natural part of your style.</p><p>Every placement begins with an anatomy consultation, the right jewelry dimensions and clear aftercare guidance.</p><Link href="/en/studio" className="text-link">DISCOVER THE STUDIO <span><ArrowIcon /></span></Link></div></div></section>

    <section className="services frame section-space"><SectionIndex index="02" label="PIERCING" /><div className="section-title-row"><h2>Services</h2><p>We choose every piercing with your anatomy, healing and long-term comfort in mind.</p></div><div className="service-list">{services.map(([n,title,detail])=><Link href="/en/piercing" key={n} className="service-row"><span>{n}</span><strong>{title}</strong><small>{detail}</small><b><ArrowIcon /></b></Link>)}</div></section>

    <section className="material section-space"><div className="frame material-grid"><div className="material-copy"><SectionIndex index="03" label="MATERIAL" /><h2>TITANIUM<br />AS STANDARD.</h2><p>For initial piercing we use implant-grade ASTM F-136 titanium. It is lightweight, biocompatible and suitable for fresh piercings.</p><dl className="spec-grid"><div><dt>MATERIAL</dt><dd>Ti-6Al-4V ELI</dd></div><div><dt>STANDARD</dt><dd>ASTM F-136</dd></div><div><dt>APPLICATION</dt><dd>BODY JEWELRY</dd></div><div><dt>NICKEL</dt><dd>0%</dd></div></dl><Link href="/en/studio#jewelry" className="text-link">ABOUT OUR JEWELRY <span><ArrowIcon /></span></Link></div><div className="material-object"><img src="/assets/titanium.webp" alt="Titanium labret on a light background" /><span className="object-note left">BL / OBJECT 01</span><span className="object-note right">SCALE 04:01</span></div></div></section>

    <section className="studio-visual"><img src="/assets/studio.webp" alt="Piercing studio interior" /><div className="studio-overlay" /><div className="studio-visual-copy frame"><SectionIndex index="04" label="THE SPACE" light /><h2>A CONTROLLED<br />SPACE FOR<br />INDIVIDUALITY.</h2><Link href="/en/studio" className="button button-ghost">ABOUT THE STUDIO <span><ArrowIcon /></span></Link></div></section>

    <section className="sterile frame section-space"><SectionIndex index="05" label="STERILISATION" /><div className="section-title-row"><h2>Sterile by process,<br />not by promise.</h2><p>Safety is not a slogan. It is a repeatable sequence of controlled and documented steps.</p></div><div className="process-grid">{sterile.map(([n,title,text])=><article key={n}><span>{n}</span><i /><h3>{title}</h3><p>{text}</p></article>)}</div><Link href="/en/studio#sterilisation" className="text-link">FULL STERILISATION PROCESS <span><ArrowIcon /></span></Link></section>

    <section className="team frame section-space"><SectionIndex index="06" label="PEOPLE" /><div className="section-title-row"><h2>The people<br />behind Lotus.</h2><p>Two approaches, one standard: calm, precision and respect for your body.</p></div><div className="team-grid"><article><span className="portrait-code">01 / PIERCER</span><div className="portrait monogram">A</div><div><h3>Alex</h3><p>Studio founder · piercer since 2015</p></div></article><article><span className="portrait-code">02 / PIERCER</span><div className="portrait monogram">P</div><div><h3>Paxy</h3><p>Piercer · consultations and individual styling</p></div></article></div><Link href="/en/studio#team" className="text-link">MEET THE TEAM <span><ArrowIcon /></span></Link></section>

    <section className="work frame section-space"><SectionIndex index="07" label="SELECTED WORK" /><div className="section-title-row"><h2>Made for<br />your anatomy.</h2><p>A selection of our work. Every placement is designed for individual anatomy.</p></div><div className="work-grid"><figure className="work-a"><img src="/assets/conch.webp" alt="Conch piercing" /><figcaption><span>001 / CONCH</span><span>TITANIUM · ASTM F-136</span></figcaption></figure><figure className="work-b"><img src="/assets/nostril.webp" alt="Nostril piercing" /><figcaption><span>002 / NOSTRIL</span><span>TITANIUM · ASTM F-136</span></figcaption></figure><figure className="work-c"><img src="/assets/hero.webp" alt="Helix piercing" /><figcaption><span>003 / HELIX</span><span>TITANIUM · ASTM F-136</span></figcaption></figure></div><Link href="/en/work" className="text-link">OPEN PORTFOLIO <span><ArrowIcon /></span></Link></section>

    <section className="knowledge section-space"><div className="frame"><SectionIndex index="08" label="KNOWLEDGE" /><div className="section-title-row"><h2>Before<br />& after.</h2><p>Everything you need to know before booking and throughout healing.</p></div><div className="knowledge-links"><Link href="/en/care#aftercare"><span>01</span><strong>New piercing aftercare</strong><b><ArrowIcon /></b></Link><Link href="/en/care#healing"><span>02</span><strong>Healing and check-ups</strong><b><ArrowIcon /></b></Link><Link href="/en/care#minors"><span>03</span><strong>Information for minors</strong><b><ArrowIcon /></b></Link></div><div className="gift-card"><p>[ BLACK LOTUS / GIFT CARD ]</p><h3>Give something<br />personal.</h3><span>DIGITAL OR PRINTED · FROM 1,000 CZK</span><Link href="/en/gift-card" className="button button-dark">BUY A GIFT CARD <span><ArrowIcon /></span></Link></div></div></section>

    <section className="journal frame section-space"><SectionIndex index="09" label="JOURNAL" /><div className="section-title-row"><h2>Field notes.</h2><Link href="/en/journal" className="text-link">ALL ARTICLES <span><ArrowIcon /></span></Link></div><div className="article-grid"><Link href="/en/journal/changing-initial-jewelry"><span>CARE / 06 MIN</span><h3>When is the right time to change the initial jewelry?</h3><p>Why the number of weeks alone does not tell the whole story.</p><b><ArrowIcon /></b></Link><Link href="/en/journal/titanium-vs-surgical-steel"><span>MATERIAL / 04 MIN</span><h3>ASTM F-136 titanium vs. surgical steel</h3><p>A difference your body may notice even when your eyes do not.</p><b><ArrowIcon /></b></Link><Link href="/en/journal/first-piercing-step-by-step"><span>GUIDE / 08 MIN</span><h3>Your first piercing, step by step</h3><p>From consultation to your first studio check-up.</p><b><ArrowIcon /></b></Link></div></section>

    <section className="visit frame section-space"><SectionIndex index="10" label="VISIT" /><h2>READY<br />WHEN<br />YOU ARE.</h2><div className="visit-details"><div><span>STUDIO</span><p>Petrohradská 388/22<br />Prague 10 — Vršovice</p></div><div><span>CONTACT</span><p><a href="tel:+420777547240">+420 777 547 240</a><br /><a href="mailto:piercingprague@gmail.com">piercingprague@gmail.com</a></p></div><Link href="/en/booking" className="round-link" aria-label="Book an appointment">BOOK<br /><ArrowIcon /></Link></div></section>
    <Footer lang="en" />
  </main>;
}

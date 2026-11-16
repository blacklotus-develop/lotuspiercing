import type { ReactNode } from "react";
import ArrowIcon from "./arrow-icon";
import HomeFaq from "./home-faq";
import { instagramSection, reviewsSection } from "./home-integrations";
import Link from "./native-link";
import { Footer, Header, SectionIndex, type Lang } from "./site";

const MAP_URL = "https://maps.app.goo.gl/gQLt5m7vFCdRuKzTA";

const copy = {
  cs: {
    p: "",
    hero: {
      eyebrow: "BLACK LOTUS / PIERCING STUDIO / PRAHA",
      title: <>Piercing<br />s důrazem<br />na detail.</>,
      text: "Profesionální piercing v Praze. Individuální přístup, kvalitní šperky a prostor pro každý detail.",
      book: "REZERVOVAT TERMÍN", work: "NAŠE PRÁCE",
      alt: "Usměvavá klientka Black Lotus s piercingem ucha",
    },
    approach: {
      label: "NÁŠ PŘÍSTUP", title: "Piercing, který začíná u detailu.",
      text: "Každému piercingu předchází čas na rozhovor, posouzení anatomie a výběr vhodného šperku. Věříme, že dobrý výsledek začíná ještě před samotným vpichem.",
      points: [["12+", "LET PRAXE", "Zkušenosti, na kterých záleží."], ["F-136", "TITAN ASTM", "Kvalitní materiál pro prvotní aplikaci."], ["60 min", "INDIVIDUÁLNÍ PŘÍSTUP", "Piercing s ohledem na anatomii každého klienta. Na každého si vyhrazujeme celou hodinu."]],
      link: "POZNAT NAŠE STUDIO",
    },
    services: {
      label: "SLUŽBY", title: "Co pro vás můžeme udělat?",
      items: [["Piercing", "Nový piercing s individuálním posouzením anatomie a výběrem vhodného šperku."], ["Výměna šperků", "Pomůžeme vám s výběrem, správnou velikostí a odbornou výměnou šperku."], ["Konzultace", "Nejste si jistí vhodným piercingem nebo potřebujete poradit s již existujícím? Rádi vám pomůžeme."]],
      link: "ZOBRAZIT CENÍK", alt: "Výběr titanových šperků v krabičce v rukou piercera",
    },
    studio: {
      label: "STUDIO", title: "Prostor vytvořený pro piercing.",
      text: "Black Lotus je prostor, kde se spojuje osobitá estetika, důraz na hygienu a individuální přístup. Každému klientovi věnujeme čas na konzultaci, výběr šperku a samotnou aplikaci.",
      line: ["INDIVIDUÁLNÍ ANATOMIE", "KVALITNÍ ŠPERKY", "KONTROLOVANÁ STERILIZACE"],
      alt: "Recepce Black Lotus s vitrínami šperků, krbem a zelenou stěnou",
      peopleLabel: "PIERCEŘI", peopleTitle: "Dva pierceři. Jeden standard.",
      alex: "Zakladatel Black Lotus Piercing Studio. Více než 12 let zkušeností s piercingem.",
      maky: "Profesionální piercerka s důrazem na detail, bezpečnost a individuální přístup.",
      alexAlt: "Alex, zakladatel a piercer Black Lotus", makyAlt: "Maky, piercerka Black Lotus",
      link: "POZNAT NÁŠ TÝM",
    },
    visit: {
      label: "REZERVACE", title: "Váš termín. Vaše volba.",
      text: "Rezervace probíhá online. Vyberte si službu, svého piercera a termín, který vám vyhovuje.",
      steps: [["Vyberte službu", "Zvolte si piercing nebo jinou službu, kterou potřebujete."], ["Zvolte piercera", "Vyberte si Alexe nebo Maky a dostupný termín."], ["Přijďte k nám", "Na místě vše společně probereme a najdeme vhodné řešení právě pro vás."]],
      book: "REZERVOVAT TERMÍN",
    },
    faq: { label: "PŘED NÁVŠTĚVOU", title: "Co je dobré vědět?" },
    guide: {
      label: "PRŮVODCE", title: "Vědět víc znamená pečovat lépe.",
      careTitle: "Péče o piercing", careText: "Správná péče je důležitou součástí každého piercingu. Připravili jsme pro vás přehledný průvodce péčí, hojením a nejčastějšími otázkami.", careLink: "PÉČE O PIERCING", careAlt: "Ucho s několika šperky z portfolia Black Lotus",
      journalTitle: "Z článků", all: "VŠECHNY ČLÁNKY",
      articles: [
        ["PRŮVODCE", "První piercing krok za krokem", "Konzultace, umístění, aplikace a první dny hojení bez nejasností.", "/journal/prvni-piercing-krok-za-krokem"],
        ["ANATOMIE", "Proč není každý piercing pro každého", "Jak anatomie ovlivňuje umístění, výběr šperku i dlouhodobý výsledek.", "/journal/proc-neni-kazdy-piercing-pro-kazdeho"],
      ],
    },
    final: {
      label: "NAVŠTIVTE NÁS", title: "Těšíme se na vás.", city: "Praha 10 — Vršovice", map: "OTEVŘÍT MAPU",
      book: "REZERVOVAT TERMÍN", contact: "KONTAKT A CESTA K NÁM",
      giftTitle: "Darujte piercing.", giftText: "Tištěné i digitální dárkové poukazy Black Lotus od 1 000 Kč.", giftLink: "OBJEDNAT DÁRKOVÝ POUKAZ",
    },
  },
  en: {
    p: "/en",
    hero: {
      eyebrow: "BLACK LOTUS / PIERCING STUDIO / PRAGUE",
      title: <>Piercing<br />with attention<br />to detail.</>,
      text: "Professional piercing in Prague. An individual approach, quality jewelry and room for every detail.",
      book: "BOOK APPOINTMENT", work: "OUR WORK",
      alt: "Smiling Black Lotus client with an ear piercing",
    },
    approach: {
      label: "OUR APPROACH", title: "Piercing that starts with the detail.",
      text: "Every piercing begins with time to talk, an assessment of your anatomy and the choice of suitable jewelry. We believe a good result starts before the needle ever touches the skin.",
      points: [["12+", "YEARS OF PRACTICE", "Experience that makes a difference."], ["F-136", "ASTM TITANIUM", "Quality material for initial piercings."], ["60 min", "INDIVIDUAL APPROACH", "Every piercing planned around the client's own anatomy. We reserve a full hour for each client."]],
      link: "DISCOVER OUR STUDIO",
    },
    services: {
      label: "SERVICES", title: "What can we do for you?",
      items: [["Piercing", "A new piercing with an individual assessment of your anatomy and the right choice of jewelry."], ["Jewelry change", "We help you choose the right piece and size, and change it professionally."], ["Consultation", "Not sure which piercing suits you, or need advice about an existing one? We are happy to help."]],
      link: "VIEW PRICES", alt: "A box of titanium jewelry held by a piercer",
    },
    studio: {
      label: "STUDIO", title: "A space made for piercing.",
      text: "Black Lotus brings together a distinctive aesthetic, a strong focus on hygiene and an individual approach. Every client gets time for a consultation, choosing jewelry and the piercing itself.",
      line: ["INDIVIDUAL ANATOMY", "QUALITY JEWELRY", "CONTROLLED STERILISATION"],
      alt: "Black Lotus reception with jewelry displays, a fireplace and a green wall",
      peopleLabel: "PIERCERS", peopleTitle: "Two piercers. One standard.",
      alex: "Founder of Black Lotus Piercing Studio. More than 12 years of piercing experience.",
      maky: "Professional piercer with a focus on detail, safety and an individual approach.",
      alexAlt: "Alex, founder and piercer at Black Lotus", makyAlt: "Maky, piercer at Black Lotus",
      link: "MEET OUR TEAM",
    },
    visit: {
      label: "BOOKING", title: "Your appointment. Your choice.",
      text: "Booking is online. Choose the service, your piercer and a time that suits you.",
      steps: [["Choose a service", "Pick a piercing or any other service you need."], ["Choose your piercer", "Select Alex or Maky and an available time."], ["Visit us", "We talk everything through in the studio and find the right solution for you."]],
      book: "BOOK APPOINTMENT",
    },
    faq: { label: "BEFORE YOUR VISIT", title: "Good to know." },
    guide: {
      label: "GUIDE", title: "Knowing more means better care.",
      careTitle: "Piercing care", careText: "Good aftercare is an essential part of every piercing. We have put together a clear guide to aftercare, healing and the most common questions.", careLink: "PIERCING CARE", careAlt: "Ear with several pieces of jewelry from the Black Lotus portfolio",
      journalTitle: "From the journal", all: "ALL ARTICLES",
      articles: [
        ["GUIDE", "Your first piercing, step by step", "Consultation, placement, application and the first days of healing.", "/en/journal/first-piercing-step-by-step"],
        ["ANATOMY", "Why not every piercing suits everyone", "How anatomy affects placement, jewelry choice and long-term results.", "/en/journal/anatomy-and-piercing"],
      ],
    },
    final: {
      label: "VISIT US", title: "We look forward to seeing you.", city: "Prague 10 — Vršovice", map: "OPEN MAP",
      book: "BOOK APPOINTMENT", contact: "CONTACT AND DIRECTIONS",
      giftTitle: "Give a piercing.", giftText: "Printed and digital Black Lotus gift vouchers from CZK 1,000.", giftLink: "ORDER A GIFT VOUCHER",
    },
  },
};

function faqItems(lang: Lang): { q: string; a: ReactNode }[] {
  const p = lang === "en" ? "/en" : "";
  const more = (href: string, label: string) => <a href={href} className="text-link home-faq-link">{label} <ArrowIcon /></a>;
  if (lang === "en") return [
    { q: "How do I book an appointment?", a: <><p>You can book online in a few steps. Choose the service, your piercer and an available time that suits you. Your booking confirmation will arrive by email.</p>{more(`${p}/booking`, "BOOK ONLINE")}</> },
    { q: "Can I choose a specific piercer?", a: <p>Yes. When booking online, you can choose Alex or Maky based on your preference and available times.</p> },
    { q: "What if I don't know which piercing suits me?", a: <p>You can book a consultation. We will talk through your ideas, assess your anatomy and recommend suitable options.</p> },
    { q: "Can I come for a consultation only?", a: <p>Yes. You can book a consultation on its own, for example if you are unsure which piercing to choose or need advice about an existing piercing. A consultation is part of every piercing appointment; a standalone consultation is charged according to our price list.</p> },
    { q: "Do you pierce minors?", a: <><p>Yes. We pierce earlobes from age 6 and other suitable piercings from age 13. Minors must attend with a legal guardian and bring a completed consent form.</p>{more(`${p}/care#minors`, "RULES FOR MINORS")}</> },
    { q: "Where can I find your prices?", a: <><p>Current prices for piercings, jewelry changes and other services are in our price list. For standard piercings, basic ASTM F-136 titanium jewelry is included in the price.</p>{more(`${p}/cenik`, "PRICE LIST")}</> },
    { q: "Do you offer gift vouchers?", a: <><p>Yes. Black Lotus gift vouchers are available in printed and digital form, from CZK 1,000.</p>{more(`${p}/gift-card`, "GIFT VOUCHERS")}</> },
    { q: "Where do I find you?", a: <><p>You will find us at Petrohradská 388/22, Prague 10 – Vršovice.</p>{more(`${p}/contact`, "DIRECTIONS")}</> },
  ];
  return [
    { q: "Jak se mohu objednat?", a: <><p>Rezervaci vytvoříte jednoduše online. Vyberete si službu, piercera a volný termín, který vám vyhovuje. Potvrzení rezervace vám přijde e‑mailem.</p>{more("/booking", "ONLINE REZERVACE")}</> },
    { q: "Mohu si vybrat konkrétního piercera?", a: <p>Ano. Při online rezervaci si můžete vybrat Alexe nebo Maky podle svých preferencí a dostupných termínů.</p> },
    { q: "Co když nevím, jaký piercing je pro mě vhodný?", a: <p>Můžete si rezervovat konzultaci. Společně probereme vaše představy, posoudíme anatomii a doporučíme vhodné možnosti.</p> },
    { q: "Mohu přijít pouze na konzultaci?", a: <p>Ano. Konzultaci si můžete rezervovat i samostatně, například pokud si nejste jistí vhodným piercingem nebo potřebujete poradit s již existujícím piercingem. Konzultace je součástí každé aplikace; samostatnou konzultaci účtujeme podle ceníku.</p> },
    { q: "Provádíte piercing nezletilým?", a: <><p>Ano. Piercing ušních lalůčků provádíme od 6 let, ostatní vhodné typy piercingů od 13 let. U nezletilých je nutná přítomnost zákonného zástupce a vyplněný formulář souhlasu.</p>{more("/care#minors", "PRAVIDLA PRO NEZLETILÉ")}</> },
    { q: "Kde najdu ceny piercingu?", a: <><p>Aktuální ceny piercingů, výměn šperků a dalších služeb najdete v našem ceníku. U základních piercingů je titanový šperk ASTM F-136 součástí ceny.</p>{more("/cenik", "CENÍK")}</> },
    { q: "Nabízíte dárkové poukazy?", a: <><p>Ano. Dárkové poukazy Black Lotus jsou dostupné v tištěné i digitální podobě, v hodnotě od 1 000 Kč.</p>{more("/gift-card", "DÁRKOVÉ POUKAZY")}</> },
    { q: "Kde vás najdu?", a: <><p>Najdete nás na adrese Petrohradská 388/22, Praha 10 – Vršovice.</p>{more("/contact", "JAK SE K NÁM DOSTAT")}</> },
  ];
}

export default function HomePage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const p = t.p;

  // Sekce v pořadí. Sekce, které vrátí null (zatím Instagram a recenze), se přeskočí
  // a čísla ostatních sekcí na sebe navazují.
  const builders: ((index: string) => ReactNode | null)[] = [
    (n) => <section key="approach" className="home-approach frame home-space" aria-labelledby="home-approach-title">
      <SectionIndex index={n} label={t.approach.label} />
      <div className="home-approach-head"><h2 id="home-approach-title">{t.approach.title}</h2><div><p>{t.approach.text}</p><Link href={`${p}/studio`} className="text-link">{t.approach.link} <ArrowIcon /></Link></div></div>
      <dl className="home-points">{t.approach.points.map(([big, label, text]) => <div key={label}><dt><b>{big}</b><span>{label}</span></dt><dd>{text}</dd></div>)}</dl>
    </section>,

    (n) => <section key="services" className="home-services frame home-space" aria-labelledby="home-services-title">
      <div className="home-services-media"><SectionIndex index={n} label={t.services.label} /><h2 id="home-services-title">{t.services.title}</h2>
        <img src="/assets/home-jewelry.webp" srcSet="/assets/home-jewelry-800.webp 800w, /assets/home-jewelry.webp 1200w" sizes="(max-width: 900px) 100vw, 40vw" width="1200" height="800" alt={t.services.alt} loading="lazy" /></div>
      <div className="home-services-list"><ol>{t.services.items.map(([title, text], i) => <li key={title}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
        <Link href={`${p}/cenik`} className="text-link">{t.services.link} <ArrowIcon /></Link></div>
    </section>,

    (n) => instagramSection(lang, n),

    (n) => <section key="studio" className="home-studio home-space" aria-labelledby="home-studio-title">
      <div className="frame home-studio-grid">
        <div className="home-studio-photo"><img src="/assets/home-studio.webp" srcSet="/assets/home-studio-1200.webp 1200w, /assets/home-studio.webp 2000w" sizes="(max-width: 900px) 100vw, 62vw" width="2000" height="1333" alt={t.studio.alt} loading="lazy" /></div>
        <div className="home-studio-copy"><SectionIndex index={n} label={t.studio.label} /><h2 id="home-studio-title">{t.studio.title}</h2><p>{t.studio.text}</p></div>
      </div>
      <p className="frame home-studio-line">{t.studio.line.map(item => <span key={item}>{item}</span>)}</p>
      <div className="frame home-people">
        <div className="home-people-intro"><p className="home-kicker">{t.studio.peopleLabel}</p><h3>{t.studio.peopleTitle}</h3><Link href={`${p}/studio#team`} className="text-link">{t.studio.link} <ArrowIcon /></Link></div>
        {([["Alex", "home-alex", t.studio.alex, t.studio.alexAlt], ["Maky", "home-maky", t.studio.maky, t.studio.makyAlt]] as const).map(([name, img, text, alt]) => <figure key={name} className="home-person">
          <img src={`/assets/${img}.webp`} srcSet={`/assets/${img}-600.webp 600w, /assets/${img}.webp 900w`} sizes="(max-width: 700px) 50vw, 25vw" width="900" height="1350" alt={alt} loading="lazy" />
          <figcaption><strong>{name}</strong><span>{text}</span></figcaption>
        </figure>)}
      </div>
    </section>,

    (n) => reviewsSection(lang, n),

    (n) => <section key="visit" className="home-visit" aria-labelledby="home-visit-title"><div className="frame home-space">
      <SectionIndex index={n} label={t.visit.label} light />
      <div className="home-visit-head"><h2 id="home-visit-title">{t.visit.title}</h2><p>{t.visit.text}</p></div>
      <ol className="home-steps">{t.visit.steps.map(([title, text], i) => <li key={title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
      <Link href={`${p}/booking`} className="button button-light">{t.visit.book} <ArrowIcon /></Link>
    </div></section>,

    (n) => <section key="faq" className="home-faq frame home-space" aria-labelledby="home-faq-title">
      <div className="home-faq-head"><SectionIndex index={n} label={t.faq.label} /><h2 id="home-faq-title">{t.faq.title}</h2></div>
      <HomeFaq items={faqItems(lang)} />
    </section>,

    (n) => <section key="guide" className="home-guide frame home-space" aria-labelledby="home-guide-title">
      <SectionIndex index={n} label={t.guide.label} />
      <h2 id="home-guide-title">{t.guide.title}</h2>
      <div className="home-guide-grid">
        <article className="home-care">
          <img src="/assets/care-ear-jewelry.webp" width="1080" height="1440" alt={t.guide.careAlt} loading="lazy" />
          <div><h3>{t.guide.careTitle}</h3><p>{t.guide.careText}</p><Link href={`${p}/care`} className="text-link">{t.guide.careLink} <ArrowIcon /></Link></div>
        </article>
        <div className="home-articles">
          <p className="home-kicker">{t.guide.journalTitle}</p>
          {t.guide.articles.map(([tag, title, text, href]) => <Link key={href} href={href} className="home-article"><span>{tag}</span><h3>{title}</h3><p>{text}</p><b><ArrowIcon /></b></Link>)}
          <Link href={`${p}/journal`} className="text-link">{t.guide.all} <ArrowIcon /></Link>
        </div>
      </div>
    </section>,

    (n) => <section key="final" className="home-final frame home-space" aria-labelledby="home-final-title">
      <div className="home-final-main">
        <SectionIndex index={n} label={t.final.label} />
        <h2 id="home-final-title">{t.final.title}</h2>
        <p className="home-final-address">Petrohradská 388/22<br />{t.final.city}</p>
        <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="text-link">{t.final.map} <ArrowIcon /></a>
        <div className="home-final-actions"><Link href={`${p}/booking`} className="button button-dark">{t.final.book} <ArrowIcon /></Link><Link href={`${p}/contact`} className="text-link">{t.final.contact} <ArrowIcon /></Link></div>
      </div>
      <aside className="home-gift"><h3>{t.final.giftTitle}</h3><p>{t.final.giftText}</p><Link href={`${p}/gift-card`} className="text-link">{t.final.giftLink} <ArrowIcon /></Link></aside>
    </section>,
  ];

  const sections: ReactNode[] = [];
  for (const build of builders) {
    const node = build(String(sections.length + 1).padStart(2, "0"));
    if (node) sections.push(node);
  }

  return <main className="home">
    <Header lang={lang} />
    <section className="home-hero frame" aria-labelledby="home-hero-title">
      <div className="home-hero-copy">
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1 id="home-hero-title">{t.hero.title}</h1>
        <p className="home-hero-text">{t.hero.text}</p>
        <div className="home-hero-actions"><Link href={`${p}/booking`} className="button button-dark">{t.hero.book} <ArrowIcon /></Link><Link href={`${p}/work`} className="text-link">{t.hero.work} <ArrowIcon /></Link></div>
      </div>
      <div className="home-hero-photo"><img src="/assets/home-hero.webp" srcSet="/assets/home-hero-800.webp 800w, /assets/home-hero.webp 1200w" sizes="(max-width: 900px) 100vw, 52vw" width="1200" height="1800" alt={t.hero.alt} fetchPriority="high" /></div>
    </section>
    {sections}
    <Footer lang={lang} />
  </main>;
}

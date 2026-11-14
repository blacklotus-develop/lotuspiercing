import ArrowIcon from "./arrow-icon";
import SterilisationExplorer from "./sterilisation-explorer";
import { Footer, Header, type Lang } from "./site";

const copy = {
  cs: {
    tagline: "Piercing s důrazem na detail.",
    onPage: "NA STRÁNCE",
    nav: [["Náš příběh", "story"], ["Pierceři", "team"], ["Sterilizace", "sterilisation"], ["Průběh návštěvy", "visit"]],
    storyLabel: "NÁŠ PŘÍBĚH",
    storyTitle: "Piercing si zaslouží vlastní prostor.",
    story: [
      "Piercing bývá často jen doplňkovou službou v tetovacích studiích. My jsme se rozhodli jít vlastní cestou. Vytvořit místo, kde bude piercing na prvním místě — s vlastní estetikou, důrazem na čistotu a profesionálním přístupem.",
      "Věříme, že dobrý piercing začíná dávno před samotným vpichem. Proto každému klientovi vyhrazujeme celou hodinu, přestože samotný zákrok trvá jen několik vteřin. Chceme mít čas naslouchat, poradit a najít řešení, které respektuje individuální anatomii. Nespěcháme a neděláme kompromisy v bezpečnosti.",
      "Každý člověk je jiný a žádné dva piercingy nejsou úplně stejné. Právě v tom vidíme krásu naší práce — pomáhat lidem najít něco, co podtrhne jejich individualitu. A když vidíme jejich úsměv v zrcadle nebo se k nám po letech vracejí, připomíná nám to, proč tuhle práci milujeme.",
    ],
    storyAlt: "Světlý pracovní prostor Black Lotus Piercing Studio v Praze",
    stats: [["700+", "recenzí"], ["12 let", "praxe"], ["7000+", "provedených piercingů"]],
    teamLabel: "NÁŠ TÝM",
    teamTitle: "Lidé za Black Lotus.",
    teamIntro: "Každý máme svůj styl a přístup. Spojuje nás preciznost, cit pro detail a radost z dobře odvedené práce.",
    alexRole: "Zakladatel studia · Piercer",
    alexText: "Pro Alexe je piercing spojením technické preciznosti a estetiky. Záleží mu na každém detailu — od správného umístění a výběru šperku až po výsledek, který přirozeně ladí s vaší anatomií.",
    makyRole: "Piercerka",
    makyText: "Maky si zakládá na pečlivosti, klidném přístupu a příjemné atmosféře. Každému klientovi věnuje pozornost a pomáhá najít piercing, který odpovídá jeho představám i anatomii.",
    alexAlt: "Alex — zakladatel studia a piercer Black Lotus",
    makyAlt: "Maky — piercerka Black Lotus",
    sterilisationLabel: "STERILIZACE NÁSTROJŮ",
    sterilisationTitle: "Bezpečnost má svůj postup.",
    sterilisationIntro: "Čistota a bezpečnost jsou základem naší práce. Každý opakovaně použitelný nástroj prochází důkladným čištěním a před samotným použitím také parní sterilizací.",
    visitLabel: "PRŮBĚH NÁVŠTĚVY",
    visitTitle: "Jak probíhá návštěva?",
    visitIntro: "Na každého klienta si vyhrazujeme celou hodinu. Chceme, abyste měli dostatek času na otázky, výběr šperku i samotný zákrok. Bez spěchu a zbytečného stresu.",
    visitAlt: "Konzultace a příprava piercingu s klientkou",
    visitSteps: [
      ["Úvodní informace", "Na začátku vyplníte potřebné údaje a informovaný souhlas. Probereme důležité zdravotní informace, případné alergie a kontraindikace."],
      ["Konzultace a anatomie", "Vyslechneme vaše představy, posoudíme anatomii vybraného místa a společně najdeme vhodné řešení. Pokud piercing nedoporučujeme, vysvětlíme vám proč."],
      ["Výběr šperku", "Pomůžeme vám vybrat šperk z implantátového titanu ASTM F-136. Správnou velikost a tvar přizpůsobíme konkrétnímu piercingu i vaší anatomii."],
      ["Označení místa", "Pečlivě připravíme a označíme místo budoucího piercingu. Jeho polohu si zkontrolujete v zrcadle a společně ji odsouhlasíme."],
      ["Samotný piercing", "Piercing provádíme pomocí sterilní jednorázové jehly, nikoliv pistole. Dbáme na přesnost, hygienu a co nejšetrnější provedení zákroku."],
      ["Následná péče", "Vysvětlíme vám, jak o nový piercing pečovat, co očekávat během hojení a kdy přijít na kontrolu. Pokud budete mít později otázky, můžete se na nás obrátit."],
    ],
    ctaTitle: "Těšíme se na vás.",
    ctaText: "Přijďte s vlastní představou, nebo ji společně najdeme.",
    ctaButton: "REZERVOVAT TERMÍN",
  },
  en: {
    tagline: "Piercing with attention to detail.",
    onPage: "ON THIS PAGE",
    nav: [["Our story", "story"], ["Piercers", "team"], ["Sterilisation", "sterilisation"], ["Your visit", "visit"]],
    storyLabel: "OUR STORY",
    storyTitle: "Piercing deserves a space of its own.",
    story: [
      "Piercing is often only an additional service in tattoo studios. We decided to take our own path. To create a place where piercing comes first — with its own aesthetic, a focus on cleanliness and a professional approach.",
      "We believe that a good piercing begins long before the needle. That is why we reserve a full hour for every client, even though the procedure itself takes only a few seconds. We want time to listen, advise and find a solution that respects individual anatomy. We do not rush and we do not compromise on safety.",
      "Every person is different and no two piercings are exactly alike. This is where we see the beauty of our work — helping people find something that highlights their individuality. And when we see their smile in the mirror or they return to us years later, it reminds us why we love this work.",
    ],
    storyAlt: "Bright workspace at Black Lotus Piercing Studio in Prague",
    stats: [["700+", "reviews"], ["12 years", "of experience"], ["7000+", "piercings performed"]],
    teamLabel: "OUR TEAM",
    teamTitle: "People behind Black Lotus.",
    teamIntro: "We each have our own style and approach. What connects us is precision, an eye for detail and the satisfaction of work done well.",
    alexRole: "Studio founder · Piercer",
    alexText: "For Alex, piercing brings technical precision and aesthetics together. Every detail matters to him — from correct placement and jewelry selection to a result that naturally suits your anatomy.",
    makyRole: "Piercer",
    makyText: "Maky values precision, a calm approach and a comfortable atmosphere. She gives every client her full attention and helps them find a piercing that suits both their idea and their anatomy.",
    alexAlt: "Alex — Black Lotus studio founder and piercer",
    makyAlt: "Maky — piercer at Black Lotus",
    sterilisationLabel: "INSTRUMENT STERILISATION",
    sterilisationTitle: "Safety follows a process.",
    sterilisationIntro: "Cleanliness and safety are the foundation of our work. Every reusable instrument is thoroughly cleaned and steam sterilised immediately before use.",
    visitLabel: "YOUR VISIT",
    visitTitle: "What happens during your visit?",
    visitIntro: "We reserve a full hour for every client. We want you to have enough time for questions, jewelry selection and the procedure itself. Without rushing or unnecessary stress.",
    visitAlt: "Consultation and preparation for a piercing with a client",
    visitSteps: [
      ["Initial information", "At the beginning, you complete the necessary details and informed consent. We discuss important health information, possible allergies and contraindications."],
      ["Consultation and anatomy", "We listen to your ideas, assess the anatomy of the chosen area and find a suitable solution together. If we do not recommend a piercing, we explain why."],
      ["Jewelry selection", "We help you choose ASTM F-136 implant-grade titanium jewelry. The correct size and shape are selected for the specific piercing and your anatomy."],
      ["Placement marking", "We carefully prepare and mark the future piercing site. You check its position in the mirror and we confirm it together."],
      ["The piercing", "We pierce with a sterile single-use needle, never a piercing gun. We focus on precision, hygiene and the gentlest possible procedure."],
      ["Aftercare", "We explain how to care for your new piercing, what to expect during healing and when to return for a check-up. If questions come up later, you can always contact us."],
    ],
    ctaTitle: "We look forward to seeing you.",
    ctaText: "Come with an idea of your own, or we will find it together.",
    ctaButton: "BOOK APPOINTMENT",
  },
} satisfies Record<Lang, Record<string, string | string[][] | string[]>>;

export default function StudioPage({ lang, preview = false }: { lang: Lang; preview?: boolean }) {
  const t = copy[lang];
  return (
    <main className="page page-studio studio-v3">
      <Header lang={lang} slug={preview ? "studio-preview" : "studio"} />

      <section className="studio-v3-hero frame">
        <div className="studio-v3-hero-copy">
          <p className="eyebrow">01 / STUDIO</p>
          <h1>STUDIO</h1>
          <p>{t.tagline as string}</p>
        </div>
        <nav className="studio-v3-nav" aria-label={t.onPage as string}>
          <span>{t.onPage as string}</span>
          {(t.nav as string[][]).map(([label, id], index) => <a key={id} href={`#${id}`}><b>{String(index + 1).padStart(2, "0")}</b><em>{label}</em></a>)}
        </nav>
      </section>

      <section id="story" className="studio-story frame studio-anchor">
        <div className="studio-section-copy">
          <p className="studio-kicker">{t.storyLabel as string}</p>
          <h2>{t.storyTitle as string}</h2>
          {(t.story as string[]).map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="studio-story-image"><img src="/assets/studio-history.webp" alt={t.storyAlt as string} loading="lazy" /></div>
      </section>

      <section className="studio-stats frame" aria-label={lang === "cs" ? "Black Lotus v číslech" : "Black Lotus in numbers"}>
        {(t.stats as string[][]).map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section id="team" className="studio-team frame studio-anchor">
        <div className="studio-section-head">
          <p className="studio-kicker">{t.teamLabel as string}</p>
          <h2>{t.teamTitle as string}</h2>
          <p>{t.teamIntro as string}</p>
        </div>
        <div className="studio-team-grid">
          <article>
            <div className="studio-team-image"><img src="/assets/studio-alex-portrait.webp" alt={t.alexAlt as string} loading="lazy" /></div>
            <h3>ALEX</h3><span>{t.alexRole as string}</span><p>{t.alexText as string}</p>
          </article>
          <article>
            <div className="studio-team-image"><img src="/assets/studio-maky-portrait.webp" alt={t.makyAlt as string} loading="lazy" /></div>
            <h3>MAKY</h3><span>{t.makyRole as string}</span><p>{t.makyText as string}</p>
          </article>
        </div>
      </section>

      <section id="sterilisation" className="studio-sterilisation studio-anchor">
        <div className="frame">
          <div className="studio-section-head">
            <p className="studio-kicker">{t.sterilisationLabel as string}</p>
            <h2>{t.sterilisationTitle as string}</h2>
            <p>{t.sterilisationIntro as string}</p>
          </div>
          <SterilisationExplorer lang={lang} />
        </div>
      </section>

      <section id="visit" className="studio-visit frame studio-anchor">
        <div className="studio-visit-image"><img src="/assets/studio-visit-process.webp" alt={t.visitAlt as string} loading="lazy" /></div>
        <div className="studio-visit-content">
          <p className="studio-kicker">{t.visitLabel as string}</p>
          <h2>{t.visitTitle as string}</h2>
          <p className="studio-visit-intro">{t.visitIntro as string}</p>
          <ol>{(t.visitSteps as string[][]).map(([title, text], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
        </div>
      </section>

      <section className="studio-final-cta frame">
        <h2>{t.ctaTitle as string}</h2>
        <p>{t.ctaText as string}</p>
        <a className="button button-dark" href="https://n571820.alteg.io/">{t.ctaButton as string} <ArrowIcon /></a>
      </section>

      <Footer lang={lang} />
    </main>
  );
}

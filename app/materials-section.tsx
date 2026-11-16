import ArrowIcon from "./arrow-icon";
import Link from "./native-link";
import { SectionIndex, type Lang } from "./site";

// MATERIÁLY: kompaktní redakční blok o výběru šperků (nahrazuje původní „Titan jako standard“).
const copy = {
  cs: {
    label: "MATERIÁLY / BLACK LOTUS", title: <>Kvalita začíná<br />u materiálu.</>,
    text: "Pro prvotní piercing používáme implantátový titan ASTM F-136. Důležitý je pro nás nejen samotný materiál, ale také správná velikost, vhodný tvar a individuální výběr šperku.",
    spec: [["MATERIÁL", "Implantátový titan"], ["STANDARD", "ASTM F-136"]],
    link: "VÍCE O MATERIÁLECH ŠPERKŮ", href: "/journal/titan-vs-chirurgicka-ocel",
    alt: "Model ucha se šperky z implantátového titanu ve vitríně Black Lotus",
  },
  en: {
    label: "MATERIALS / BLACK LOTUS", title: <>Quality starts<br />with the material.</>,
    text: "For initial piercings we use ASTM F-136 implant-grade titanium. What matters to us is not only the material itself, but also the right size, a suitable shape and an individual choice of jewelry.",
    spec: [["MATERIAL", "Implant-grade titanium"], ["STANDARD", "ASTM F-136"]],
    link: "MORE ABOUT JEWELRY MATERIALS", href: "/en/journal/titanium-vs-surgical-steel",
    alt: "Ear model with implant-grade titanium jewelry in the Black Lotus display",
  },
};

export default function MaterialsSection({ lang, index }: { lang: Lang; index: string }) {
  const t = copy[lang];
  return <section className="materials frame">
    <div className="materials-copy">
      <SectionIndex index={index} label={t.label} />
      <h2>{t.title}</h2>
      <p>{t.text}</p>
      <dl className="materials-spec">{t.spec.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
      <Link href={t.href} className="text-link">{t.link} <span><ArrowIcon /></span></Link>
    </div>
    <figure className="materials-photo"><img src="/assets/materials-ear-model.webp" width="900" height="1125" alt={t.alt} loading="lazy" /></figure>
  </section>;
}

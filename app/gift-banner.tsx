import ArrowIcon from "./arrow-icon";
import Link from "./native-link";
import type { Lang } from "./site";

// DÁRKOVÝ POUKAZ: široký banner přes celou šířku (jako PROSTOR), ale nižší a s jedním tlačítkem.
// Fotografie poukazů je přitisknutá doprava, její levý okraj plynule mizí do tmavého pozadí.
// Na mobilu je text nahoře a poukazy pod ním.
const copy = {
  cs: {
    label: "DÁRKOVÝ POUKAZ / BLACK LOTUS", title: <>Darujte něco<br />osobního.</>,
    text: "Dárkové poukazy na piercing v tištěné i digitální podobě. Od 1 000 Kč.",
    button: "OBJEDNAT POUKAZ", href: "/gift-card",
    alt: "Dárkové poukazy Black Lotus na piercing položené na mechu",
  },
  en: {
    label: "GIFT VOUCHER / BLACK LOTUS", title: <>Give something<br />personal.</>,
    text: "Black Lotus piercing gift vouchers, available in print or digital format. From CZK 1,000.",
    button: "BUY A GIFT VOUCHER", href: "/en/gift-card",
    alt: "Black Lotus piercing gift vouchers lying on moss",
  },
};

export default function GiftBanner({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return <section className="gift-banner" aria-labelledby={`gift-banner-${lang}`}>
    <img className="gift-banner-img" src="/assets/gift-card-bg.webp" width="1893" height="831" alt={t.alt} loading="lazy" decoding="async" />
    <div className="gift-banner-shade" aria-hidden="true" />
    <div className="gift-banner-copy frame">
      <p className="gift-banner-label">{t.label}</p>
      <h2 id={`gift-banner-${lang}`}>{t.title}</h2>
      <p className="gift-banner-text">{t.text}</p>
      <Link href={t.href} className="button button-light">{t.button} <span><ArrowIcon /></span></Link>
    </div>
  </section>;
}

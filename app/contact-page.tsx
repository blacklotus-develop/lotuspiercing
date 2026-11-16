import ArrowIcon from "./arrow-icon";
import Link from "./native-link";
import { PageShell, type Lang } from "./site";

const MAP_URL = "https://maps.app.goo.gl/gQLt5m7vFCdRuKzTA";

const copy = {
  cs: {
    eyebrow: "06 / KONTAKT", title: <>NAVŠTIVTE<br />BLACK LOTUS.</>,
    intro: "Termín si jednoduše rezervujete online. Vyberte si službu, piercera a čas, který vám vyhovuje. Pokud potřebujete poradit s výběrem piercingu nebo máte další otázky, rádi vám pomůžeme.",
    minors: { label: "PIERCING PRO NEZLETILÉ", href: "/care#minors" },
    addressLabel: "01 / ADRESA", city: "Praha 10 — Vršovice", building: "Červený dům, 1. vchod", map: "OTEVŘÍT MAPU",
    contactLabel: "02 / KONTAKT", contactTitle: "Ozvěte se.",
    bookingLabel: "03 / REZERVACE", bookingTitle: "Rezervujte si termín.", bookingText: "Vyberte službu, piercera a volný termín online. Potvrzení rezervace vám přijde e‑mailem.", bookingButton: "REZERVOVAT TERMÍN", bookingHref: "/booking",
    giftLabel: "04 / DÁRKOVÝ POUKAZ", giftTitle: "Dárkový poukaz.", giftText: "Tištěný nebo digitální dárkový poukaz Black Lotus od 1 000 Kč.", giftButton: "OBJEDNAT DÁRKOVÝ POUKAZ", giftHref: "/gift-card",
  },
  en: {
    eyebrow: "06 / CONTACT", title: <>VISIT<br />BLACK LOTUS.</>,
    intro: "Booking your appointment online is quick and easy. Choose the service, your piercer and a time that suits you. If you need help choosing a piercing or have any other questions, we are happy to help.",
    minors: { label: "PIERCING FOR MINORS", href: "/en/care#minors" },
    addressLabel: "01 / ADDRESS", city: "Prague 10 — Vršovice", building: "Red building, first entrance", map: "OPEN MAP",
    contactLabel: "02 / CONTACT", contactTitle: "Get in touch.",
    bookingLabel: "03 / BOOKING", bookingTitle: "Book your appointment.", bookingText: "Choose a service, piercer and available time online. Your booking confirmation will arrive by email.", bookingButton: "BOOK APPOINTMENT", bookingHref: "/en/booking",
    giftLabel: "04 / GIFT VOUCHER", giftTitle: "Gift voucher.", giftText: "Black Lotus gift vouchers, available in print or digital format from CZK 1,000.", giftButton: "ORDER A GIFT VOUCHER", giftHref: "/en/gift-card",
  },
};

// Pořadí v kódu = pořadí na mobilu: adresa, rezervace, kontakt, poukaz.
// Na desktopu je rozmístí mřížka: vlevo adresa + kontakt, vpravo rezervace + poukaz.
export default function ContactPage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return <PageShell lang={lang} slug="contact" eyebrow={t.eyebrow} title={t.title} intro={t.intro} introLink={t.minors}>
    <section className="contact-layout frame">
      <div className="contact-block contact-address">
        <p className="contact-index">{t.addressLabel}</p>
        <h2>Petrohradská<br />388/22</h2>
        <p>{t.city}<br />{t.building}</p>
        <p className="contact-transit">Tram: Nádraží Vršovice / 5 min<br />Bus: Ukrajinská / 1 min</p>
        <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="text-link">{t.map} <ArrowIcon /></a>
      </div>

      <div className="contact-block contact-booking">
        <p className="contact-index">{t.bookingLabel}</p>
        <h2>{t.bookingTitle}</h2>
        <p>{t.bookingText}</p>
        <Link href={t.bookingHref} className="button button-light">{t.bookingButton} <ArrowIcon /></Link>
      </div>

      <div className="contact-block contact-direct">
        <p className="contact-index">{t.contactLabel}</p>
        <h2>{t.contactTitle}</h2>
        <ul className="contact-lines">
          <li><a href="tel:+420777547240">+420 777 547 240</a></li>
          <li><a href="mailto:piercingprague@gmail.com">piercingprague@gmail.com</a></li>
          <li><span>Instagram:</span> <a href="https://www.instagram.com/lotus.piercing/" target="_blank" rel="noopener noreferrer">@lotus.piercing</a></li>
        </ul>
      </div>

      <div className="contact-block contact-gift">
        <p className="contact-index">{t.giftLabel}</p>
        <h2>{t.giftTitle}</h2>
        <p>{t.giftText}</p>
        <Link href={t.giftHref} className="button button-dark">{t.giftButton} <ArrowIcon /></Link>
      </div>
    </section>
  </PageShell>;
}

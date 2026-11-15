import Script from "next/script";
import ArrowIcon from "./arrow-icon";
import Link from "./native-link";
import { PageShell, type Lang } from "./site";

const widgetScript = "https://w571820.alteg.io/widgetJS";
const bookings = {
  general: "https://n571820.alteg.io",
  alex: "https://n1487262.alteg.io",
  maky: "https://n1487261.alteg.io",
};

export default function BookingPage({ lang }: { lang: Lang }) {
  const cs = lang === "cs";
  return <PageShell lang={lang} slug="booking" eyebrow={cs ? "07 / REZERVACE" : "07 / BOOKING"} title={cs ? "Rezervujte si termín." : "BOOKING"} intro={cs ? "Vyberte si službu, piercera a volný termín online." : "Your appointment. Your choice."}>
    <section className="action-page frame booking-page-content">
      <div className="booking-primary">
        <span className="booking-label">{cs ? "ONLINE REZERVACE" : "ONLINE BOOKING"}</span>
        <h2>{cs ? "Rezervujte si svůj termín online." : "Book your appointment online."}</h2>
        <p>{cs ? "Vyberte si službu, piercera a termín, který vám vyhovuje. Jednoduše a kdykoliv." : "Choose the service, piercer and time that suit you. Simple, whenever you like."}</p>
        <a href={bookings.general} data-url={bookings.general} className="button button-dark ms_booking booking-main-button">{cs ? "VYBRAT TERMÍN" : "BOOK APPOINTMENT"} <ArrowIcon /></a>
      </div>

      <div className="booking-piercers">
        <h2>{cs ? "Nebo si vyberte svého piercera." : "Or choose your piercer."}</h2>
        <p>{cs ? "Už víte, ke komu chcete přijít? Rezervujte si termín přímo." : "Already know who you would like to see? Book directly."}</p>
        <div className="booking-piercer-list">
          <div className="booking-piercer-row">
            <img src="/assets/booking-alex-avatar.webp" alt={cs ? "Alex, piercer Black Lotus" : "Alex, Black Lotus piercer"} width="64" height="64" />
            <div><strong>Alex</strong><span>{cs ? "Zakladatel studia · Piercer" : "Studio founder · Piercer"}</span></div>
            <a href={bookings.alex} data-url={bookings.alex} className="button button-dark ms_booking booking-piercer-button">{cs ? "Rezervovat" : "Book"} <ArrowIcon /></a>
          </div>
          <div className="booking-piercer-row">
            <img src="/assets/booking-maky-avatar.webp" alt={cs ? "Maky, piercerka Black Lotus" : "Maky, Black Lotus piercer"} width="64" height="64" />
            <div><strong>Maky</strong><span>{cs ? "Piercerka" : "Piercer"}</span></div>
            <a href={bookings.maky} data-url={bookings.maky} className="button button-dark ms_booking booking-piercer-button">{cs ? "Rezervovat" : "Book"} <ArrowIcon /></a>
          </div>
        </div>
      </div>

      {cs ? <div className="booking-info"><div><span>PŘED REZERVACÍ</span><p>Nejste si jistí vhodným typem piercingu? Prohlédněte si přehled služeb a ceny.</p><Link href="/cenik" className="text-link">SLUŽBY A CENY <ArrowIcon /></Link></div><div><span>NEZLETILÍ</span><p>U nezletilých se podmínky liší podle věku a typu piercingu.</p><Link href="/care#minors" className="text-link">PODMÍNKY PRO NEZLETILÉ <ArrowIcon /></Link></div></div>
        : <div className="booking-info"><div><span>BEFORE BOOKING</span><p>Not sure which piercing suits you? Browse our services and prices.</p><Link href="/en/cenik" className="text-link">SERVICES &amp; PRICES <ArrowIcon /></Link></div><div><span>MINORS</span><p>Conditions for minors vary by age and piercing type.</p><Link href="/en/care#minors" className="text-link">CONDITIONS FOR MINORS <ArrowIcon /></Link></div></div>}

      <div className="booking-contact">
        <h2>{cs ? "Máte otázky?" : "Have questions?"}</h2>
        <p>{cs ? "Pokud potřebujete poradit před rezervací, napište nám nebo zavolejte. Pro běžné objednání prosím využijte online rezervační systém." : "If you need advice before booking, email or call us. For a regular appointment, please use the online booking system."}</p>
        <div><a href="mailto:piercingprague@gmail.com">piercingprague@gmail.com</a><a href="tel:+420777547240">+420 777 547 240</a></div>
      </div>
    </section>
    <Script src={widgetScript} strategy="afterInteractive" />
  </PageShell>;
}

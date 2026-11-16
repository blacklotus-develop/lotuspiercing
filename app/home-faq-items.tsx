import type { ReactNode } from "react";
import ArrowIcon from "./arrow-icon";
import type { Lang } from "./site";

// Organizační FAQ na hlavní stránce (PŘED NÁVŠTĚVOU). Péče a hojení patří na /care, sem ne.
// Odpovědi vycházejí jen z informací, které už jsou na webu (rezervace, ceník, péče, journal, kontakt).
export function faqItems(lang: Lang): { q: string; a: ReactNode }[] {
  const more = (href: string, label: string) => <a href={href} className="text-link faq-link">{label} <ArrowIcon /></a>;
  if (lang === "en") return [
    { q: "How do I book an appointment?", a: <><p>You can book online in a few steps. Choose the service, your piercer and an available time that suits you. Your booking confirmation will arrive by email.</p>{more("/en/booking", "BOOK APPOINTMENT")}</> },
    { q: "Can I choose a specific piercer?", a: <><p>Yes. When booking online, you can choose Alex or Maky based on your preference and available times.</p>{more("/en/booking", "CHOOSE YOUR PIERCER")}</> },
    { q: "Can I come without an appointment?", a: <><p>We work by appointment only. If you come without booking, we cannot guarantee that we will be able to see you, so please book your time online in advance.</p>{more("/en/booking", "BOOK APPOINTMENT")}</> },
    { q: "How can I change or cancel my booking?", a: <><p>You can change or cancel your appointment directly in the online booking system, by email or via WhatsApp. Please note: if you miss your appointment without a valid reason, a fee of CZK 300 will be charged at your next visit.</p>{more("mailto:piercingprague@gmail.com", "PIERCINGPRAGUE@GMAIL.COM")}</> },
    { q: "What if I don't know which piercing suits me?", a: <><p>You can book a consultation. We will talk through your ideas, assess your anatomy and recommend suitable options.</p>{more("/en/booking", "BOOK A CONSULTATION")}</> },
    { q: "Do you pierce minors?", a: <><p>Yes. We pierce earlobes from age 6 and other suitable piercings from age 13. Minors must attend in person with a legal guardian and bring a completed consent form.</p>{more("/en/care#minors", "RULES FOR MINORS")}</> },
    { q: "Where can I find your prices?", a: <><p>Current prices for piercings, jewelry changes and other services are in our price list.</p>{more("/en/cenik", "VIEW PRICES")}</> },
    { q: "Is the jewelry included in the price?", a: <><p>For standard piercings, the price includes basic ASTM F-136 implant-grade titanium jewelry with an internal thread. The final price depends on the jewelry you choose; we always confirm it with you before the piercing.</p>{more("/en/cenik", "VIEW PRICES")}</> },
    { q: "Can I pay by card?", a: <p>Yes. We have a payment terminal in the studio, so you can pay by card.</p> },
    { q: "Can I bring my own jewelry?", a: <><p>Only if its material, size, construction and suitability for sterilisation can be safely verified. We do not use unmarked jewelry from the internet or jewelry previously worn by another person for a new piercing.</p>{more("/en/journal/titanium-vs-surgical-steel", "ABOUT JEWELRY MATERIALS")}</> },
    { q: "Can I bring someone with me?", a: <p>Yes, you are welcome to bring someone along.</p> },
    { q: "Do you offer gift vouchers?", a: <><p>Yes. Black Lotus gift vouchers are available in printed and digital form, from CZK 1,000.</p>{more("/en/gift-card", "GIFT VOUCHERS")}</> },
    { q: "Where do I find you?", a: <><p>You will find us at Petrohradská 388/22, Prague 10 – Vršovice.</p>{more("/en/contact", "CONTACT AND DIRECTIONS")}</> },
  ];
  return [
    { q: "Jak se mohu objednat?", a: <><p>Rezervaci vytvoříte jednoduše online. Vyberete si službu, piercera a volný termín, který vám vyhovuje. Potvrzení rezervace vám přijde e‑mailem.</p>{more("/booking", "REZERVOVAT TERMÍN")}</> },
    { q: "Mohu si vybrat konkrétního piercera?", a: <><p>Ano. Při online rezervaci si můžete vybrat Alexe nebo Maky podle svých preferencí a dostupných termínů.</p>{more("/booking", "VYBRAT PIERCERA")}</> },
    { q: "Mohu přijít bez rezervace?", a: <><p>Pracujeme výhradně na rezervace. Pokud přijdete bez objednání, nemůžeme zaručit, že vás budeme moci přijmout. Termín si proto prosím rezervujte předem online.</p>{more("/booking", "REZERVOVAT TERMÍN")}</> },
    { q: "Jak mohu změnit nebo zrušit rezervaci?", a: <><p>Rezervaci můžete změnit nebo zrušit přímo v online rezervaci, e‑mailem nebo přes WhatsApp. Upozornění: pokud na sjednaný termín bez vážného důvodu nedorazíte, při další návštěvě účtujeme poplatek 300 Kč.</p>{more("mailto:piercingprague@gmail.com", "PIERCINGPRAGUE@GMAIL.COM")}</> },
    { q: "Co když nevím, jaký piercing je pro mě vhodný?", a: <><p>Můžete si rezervovat konzultaci. Společně probereme vaše představy, posoudíme anatomii a doporučíme vhodné možnosti.</p>{more("/booking", "REZERVOVAT KONZULTACI")}</> },
    { q: "Provádíte piercing nezletilým?", a: <><p>Ano. Piercing ušních lalůčků provádíme od 6 let, ostatní vhodné typy piercingů od 13 let. U nezletilých je nutná osobní přítomnost zákonného zástupce a vyplněný formulář souhlasu.</p>{more("/care#minors", "PODMÍNKY PRO NEZLETILÉ")}</> },
    { q: "Kde najdu ceny piercingu?", a: <><p>Aktuální ceny piercingů, výměn šperků a dalších služeb najdete v našem ceníku.</p>{more("/cenik", "ZOBRAZIT CENÍK")}</> },
    { q: "Je šperk zahrnutý v ceně piercingu?", a: <><p>U základních piercingů je v ceně šperk z implantátového titanu ASTM F-136 s vnitřním závitem. Konečná cena záleží na vybraném šperku — před aplikací ji s vámi vždy potvrdíme.</p>{more("/cenik", "ZOBRAZIT CENÍK")}</> },
    { q: "Mohu platit kartou?", a: <p>Ano. Ve studiu máme platební terminál, platit můžete kartou.</p> },
    { q: "Mohu si přinést vlastní šperk?", a: <><p>Pouze pokud lze bezpečně ověřit jeho materiál, rozměr, konstrukci a možnost sterilizace. Neoznačený šperk z internetu ani šperk dříve nošený jinou osobou pro první aplikaci nepoužíváme.</p>{more("/journal/titan-vs-chirurgicka-ocel", "O MATERIÁLECH ŠPERKŮ")}</> },
    { q: "Mohu přijít s doprovodem?", a: <p>Ano, doprovod si s sebou vzít můžete.</p> },
    { q: "Nabízíte dárkové poukazy?", a: <><p>Ano. Dárkové poukazy Black Lotus jsou dostupné v tištěné i digitální podobě, v hodnotě od 1 000 Kč.</p>{more("/gift-card", "DÁRKOVÉ POUKAZY")}</> },
    { q: "Kde vás najdu?", a: <><p>Najdete nás na adrese Petrohradská 388/22, Praha 10 – Vršovice.</p>{more("/contact", "KONTAKT A DOPRAVA")}</> },
  ];
}

"use client";

import { useRef } from "react";
import ArrowIcon from "./arrow-icon";

export default function MobileMenu({ lang, links, switchHref, bookingHref, homeHref }: {
  lang: "cs" | "en"; links: { label: string; href: string }[]; switchHref: string; bookingHref: string; homeHref?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const close = () => dialog.current?.close();
  return <>
    <button ref={trigger} className="mobile-menu-trigger" aria-haspopup="dialog" aria-controls="mobile-navigation" onClick={() => dialog.current?.showModal()}>MENU</button>
    <dialog ref={dialog} id="mobile-navigation" className="mobile-navigation" aria-label={lang === "cs" ? "Hlavní navigace" : "Main navigation"} onClose={() => trigger.current?.focus()}>
      <div className="mobile-navigation-top">
        <a href={homeHref ?? (lang === "cs" ? "/" : "/en")} onClick={close} className="brand" aria-label="Black Lotus"><span className="brand-monogram" aria-hidden="true" /><span>BLACK LOTUS®</span></a>
        <div className="mobile-navigation-controls">
          <a href={switchHref} className="lang-switch" hrefLang={lang === "cs" ? "en" : "cs"} aria-label={lang === "cs" ? "Switch to English" : "Přepnout do češtiny"}><span className={lang === "cs" ? "active-language" : ""}>CZ</span> / <span className={lang === "en" ? "active-language" : ""}>EN</span></a>
          <button autoFocus type="button" className="mobile-menu-close" onClick={close} aria-label={lang === "cs" ? "Zavřít menu" : "Close menu"}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19" /></svg></button>
        </div>
      </div>
      <nav className="mobile-navigation-links">
        {links.map(({ label, href }, i) => <a href={href} key={href} onClick={close}><small>0{i + 1}</small><span>{label.toLowerCase()}</span><ArrowIcon /></a>)}
      </nav>
      <a className="button button-dark mobile-navigation-book" href={bookingHref} onClick={close}>{lang === "cs" ? "REZERVOVAT TERMÍN" : "BOOK APPOINTMENT"}<ArrowIcon /></a>
    </dialog>
  </>;
}

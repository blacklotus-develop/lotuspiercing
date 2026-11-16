"use client";

import { useSyncExternalStore } from "react";
import ArrowIcon from "./arrow-icon";
import { SectionIndex, type Lang } from "./site";

/*
 * Náhledy budoucích sekcí NAŠE PRÁCE (Instagram) a RECENZE (Google).
 * Na veřejné stránce se nezobrazují vůbec. Vidět jsou jen s parametrem ?preview v adrese,
 * např. /?preview nebo /en?preview. Obsahují jen neutrální zástupné prvky —
 * žádné fotografie, hodnocení, jména ani texty recenzí.
 * Po připojení Behold a Google Places API se tyto náhledy nahradí skutečnými komponentami.
 */

const subscribe = () => () => {};
const usePreview = () => useSyncExternalStore(subscribe, () => new URLSearchParams(window.location.search).has("preview"), () => false);

const MAP_URL = "https://maps.app.goo.gl/gQLt5m7vFCdRuKzTA";

const t = {
  cs: {
    badge: "NÁHLED KOMPOZICE · VIDITELNÉ JEN S ?preview",
    igLabel: "NAŠE PRÁCE", igTitle: <>Dva pierceři.<br />Jeden přístup k detailu.</>, igText: "Prohlédněte si naši práci a vyberte si piercera, jehož styl je vám nejbližší.", all: "VŠE", photo: "FOTO",
    revLabel: "RECENZE", revTitle: <>Vaše důvěra.<br />Naše motivace.</>, revCount: "počet hodnocení na Google", revText: "text recenze", revAuthor: "AUTOR · DATUM", revAll: "ZOBRAZIT VŠECHNY RECENZE", revNote: "Nejrelevantnější recenze podle Google",
  },
  en: {
    badge: "COMPOSITION PREVIEW · VISIBLE ONLY WITH ?preview",
    igLabel: "OUR WORK", igTitle: <>Two piercers.<br />One eye for detail.</>, igText: "Browse our work and find the piercer whose style feels closest to yours.", all: "ALL", photo: "PHOTO",
    revLabel: "REVIEWS", revTitle: <>Your trust.<br />Our motivation.</>, revCount: "number of Google ratings", revText: "review text", revAuthor: "AUTHOR · DATE", revAll: "SEE ALL REVIEWS", revNote: "Most relevant reviews according to Google",
  },
};

export function InstagramPreview({ lang }: { lang: Lang }) {
  const show = usePreview();
  if (!show) return null;
  const c = t[lang];
  const tiles = ["ALEX", "MAKY", "ALEX", "MAKY", "ALEX", "MAKY", "ALEX", "MAKY"];
  return <section className="preview-block frame section-space" aria-label={c.igLabel}>
    <p className="preview-badge">{c.badge}</p>
    <SectionIndex index="—" label={c.igLabel} />
    <div className="section-title-row"><h2>{c.igTitle}</h2><p>{c.igText}</p></div>
    <div className="preview-chips" aria-hidden="true"><span className="is-on">{c.all}</span><span>ALEX</span><span>MAKY</span></div>
    <div className="preview-ig-grid">{tiles.map((who, i) => <div key={i} className="preview-ig-tile"><div><span>{c.photo}</span></div><p><b>{who}</b><i>{i % 3 === 1 ? "REEL" : i % 3 === 2 ? "1/4" : ""}</i></p></div>)}</div>
    <div className="preview-ig-links"><a className="text-link" href="https://www.instagram.com/lotus.piercing/" target="_blank" rel="noopener noreferrer">ALEX · @LOTUS.PIERCING <ArrowIcon /></a><a className="text-link" href="https://www.instagram.com/maky.piercing/" target="_blank" rel="noopener noreferrer">MAKY · @MAKY.PIERCING <ArrowIcon /></a></div>
  </section>;
}

export function ReviewsPreview({ lang }: { lang: Lang }) {
  const show = usePreview();
  if (!show) return null;
  const c = t[lang];
  return <section className="preview-block frame section-space" aria-label={c.revLabel}>
    <p className="preview-badge">{c.badge}</p>
    <SectionIndex index="—" label={c.revLabel} />
    <div className="preview-rev">
      <div className="preview-rev-score"><b>–,–</b><span className="preview-stars" aria-hidden="true">☆☆☆☆☆</span><small>— {c.revCount}</small><small>Google Maps</small></div>
      <div><h2>{c.revTitle}</h2><p className="preview-rev-note">{c.revNote}</p>
        <div className="preview-rev-list">{[0, 1, 2].map(i => <div key={i}><span className="preview-stars" aria-hidden="true">☆☆☆☆☆</span><i /><i /><i className="short" /><small>{c.revText}</small><b>{c.revAuthor}</b></div>)}</div>
        <div className="preview-rev-foot"><span className="preview-arrows" aria-hidden="true"><span>←</span><span>→</span></span><a className="text-link" href={MAP_URL} target="_blank" rel="noopener noreferrer">{c.revAll} <ArrowIcon /></a></div>
      </div>
    </div>
  </section>;
}

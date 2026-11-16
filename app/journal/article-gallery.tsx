"use client";

import { useRef, useState, type KeyboardEvent, type MouseEvent } from "react";

// Galerie v článku: náhledy ve dvou sloupcích (na mobilu v jednom), klepnutím se fotografie otevře zvětšená.
// Zvětšení je nativní <dialog>: zavírá se křížkem, klávesou Esc nebo klepnutím mimo fotografii.
// Bez JavaScriptu odkaz otevře samotný obrázek.
export type GalleryImage = { src: string; alt: string; width: number; height: number };

const labels = {
  cs: { open: "Zvětšit fotografii", dialog: "Zvětšená fotografie", close: "Zavřít", prev: "Předchozí fotografie", next: "Další fotografie" },
  en: { open: "Enlarge photo", dialog: "Enlarged photo", close: "Close", prev: "Previous photo", next: "Next photo" },
};

export default function ArticleGallery({ images, lang }: { images: GalleryImage[]; lang: "cs" | "en" }) {
  const t = labels[lang];
  const dialog = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState(0);

  const show = (i: number) => {
    setCurrent((i + images.length) % images.length);
    if (dialog.current) dialog.current.scrollTop = 0;
  };
  const open = (event: MouseEvent, i: number) => {
    event.preventDefault();
    show(i);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();
  const onKey = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") show(current + 1);
    if (event.key === "ArrowLeft") show(current - 1);
  };
  const image = images[current];

  return <>
    <ul className="article-gallery">
      {images.map((img, i) => <li key={img.src}>
        <a href={img.src} onClick={event => open(event, i)} aria-label={`${t.open} ${i + 1} / ${images.length}`}>
          <img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" decoding="async" />
        </a>
      </li>)}
    </ul>
    <dialog ref={dialog} className="article-lightbox" aria-label={t.dialog} onKeyDown={onKey}
      onClick={event => { if (event.target === event.currentTarget) close(); }}>
      <div className="article-lightbox-bar">
        <span>{current + 1} / {images.length}</span>
        <button type="button" autoFocus onClick={close} aria-label={t.close}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19" /></svg>
        </button>
      </div>
      {image && <img src={image.src} alt={image.alt} width={image.width} height={image.height} />}
      {images.length > 1 && <div className="article-lightbox-nav">
        <button type="button" onClick={() => show(current - 1)} aria-label={t.prev}>←</button>
        <button type="button" onClick={() => show(current + 1)} aria-label={t.next}>→</button>
      </div>}
    </dialog>
  </>;
}

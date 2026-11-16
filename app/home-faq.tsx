"use client";

import { useState, type ReactNode } from "react";

// Akordeon ve stylu FAQ na stránce Péče: vždy otevřená nejvýš jedna otázka.
export default function HomeFaq({ items }: { items: { q: string; a: ReactNode }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return <div className="care-guide-faq home-faq-list">
    {items.map(({ q, a }, i) => {
      const isOpen = open === i;
      return <div className={`care-guide-faq-item ${isOpen ? "is-open" : ""}`} key={q}>
        <h3><button type="button" aria-expanded={isOpen} aria-controls={`home-faq-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
          <span className="care-guide-faq-number">{String(i + 1).padStart(2, "0")}</span>
          <span>{q}</span>
          <span className="care-guide-faq-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
        </button></h3>
        <div id={`home-faq-${i}`} className="care-guide-faq-answer" aria-hidden={!isOpen} inert={!isOpen}><div>{a}</div></div>
      </div>;
    })}
  </div>;
}

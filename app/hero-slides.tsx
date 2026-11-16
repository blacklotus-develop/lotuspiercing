import type { CSSProperties } from "react";

// Hlavní fotografie na úvodní stránce: tři snímky se pomalu prolínají (čisté CSS, bez JavaScriptu).
// Při „omezeném pohybu“ v systému zůstane vidět jen první snímek.
// Jen jedna fotografie: ponechte v poli jediný řádek.
const slides = ["/assets/hero-ear-1.webp", "/assets/hero-ear-2.webp", "/assets/hero-ear-3.webp"];

export default function HeroSlides({ alt }: { alt: string }) {
  return <div className="hero-slides" style={{ "--count": slides.length } as CSSProperties}>
    {slides.map((src, i) => <img
      key={src}
      src={src}
      alt={i === 0 ? alt : ""}
      aria-hidden={i === 0 ? undefined : true}
      className="hero-image"
      style={{ "--i": i } as CSSProperties}
      fetchPriority={i === 0 ? "high" : "low"}
      decoding="async"
    />)}
  </div>;
}

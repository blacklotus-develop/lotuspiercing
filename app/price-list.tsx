"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

// Kategorii lze otevřít odkazem: /cenik#ucho, /cenik#oblicej, /en/cenik#ear … (kotva = id skupiny).
const subscribeHash = (onChange: () => void) => {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
};
const readHash = () => decodeURIComponent(window.location.hash.slice(1));

type PriceItem = {
  name: string;
  price: string;
  note?: string;
};

type PriceGroup = {
  id: string;
  label: string;
  description: string;
  items: PriceItem[];
};

type PriceListProps = {
  groups: PriceGroup[];
  labels: {
    tabs: string;
    item: string;
    service: string;
    price: string;
    diagram?: string;
  };
};

type EarPoint = { x: number; y: number };
type EarSpot = { points: EarPoint[] };

const earSpots: EarSpot[] = [
  { points: [{ x: 43.23, y: 63.62 }] },
  { points: [{ x: 63.31, y: 40.19 }] },
  { points: [{ x: 46.50, y: 44.01 }] },
  { points: [{ x: 37.82, y: 52.86 }] },
  { points: [{ x: 53.69, y: 50.82 }] },
  { points: [{ x: 55.65, y: 37.60 }] },
  { points: [{ x: 41.46, y: 48.02 }] },
  { points: [{ x: 39.31, y: 40.19 }] },
  { points: [{ x: 43.23, y: 38.69 }, { x: 64.05, y: 43.60 }] },
];

function EarScheme({
  items,
  activeItem,
  setActiveItem,
}: {
  items: PriceItem[];
  activeItem: number | null;
  setActiveItem: (index: number) => void;
}) {
  return (
    <figure className="ear-scheme">
      <img
        src="/assets/ear-piercing-scheme.webp"
        alt="Ear piercing placement map: lobe, helix, rook, tragus, conch, flat, daith, forward helix and industrial"
      />
      <div className="ear-scheme-hotspots">
        {earSpots.flatMap((spot, itemIndex) =>
          spot.points.map((point, pointIndex) => (
            <button
              key={`${itemIndex}-${pointIndex}`}
              type="button"
              className={activeItem === itemIndex ? "is-active" : undefined}
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
              aria-label={items[itemIndex]?.name}
              onMouseEnter={() => setActiveItem(itemIndex)}
              onFocus={() => setActiveItem(itemIndex)}
              onClick={() => setActiveItem(itemIndex)}
            />
          )),
        )}
      </div>
    </figure>
  );
}

export default function PriceList({ groups, labels }: PriceListProps) {
  const hash = useSyncExternalStore(subscribeHash, readHash, () => "");
  const hashGroup = groups.find((group) => group.id === hash)?.id;
  const activeId = hashGroup ?? groups[0]?.id ?? "";
  const [activeItem, setActiveItem] = useState<number | null>(null);

  // Příchod odkazem na kategorii (např. z hlavní stránky): po načtení posunout k ceníku.
  // Prohlížeč to sám neudělá spolehlivě (obnovení pozice, hydratace), proto krátké zpoždění.
  useEffect(() => {
    const anchor = document.getElementById(readHash());
    if (!anchor || !anchor.classList.contains("price-anchor")) return;
    const timer = window.setTimeout(() => anchor.scrollIntoView({ block: "start", behavior: "instant" }), 120);
    return () => window.clearTimeout(timer);
  }, []);

  const selectGroup = (id: string) => {
    window.history.replaceState(null, "", `#${id}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    setActiveItem(null);
  };

  return (
    <div className="price-browser">
      {/* Neviditelné kotvy: prohlížeč při otevření /cenik#ucho sám posune stránku k ceníku. */}
      {groups.map((group) => <span key={group.id} id={group.id} className="price-anchor" aria-hidden="true" />)}
      <span className="price-tabs-label">{labels.tabs}</span>
      <div className="price-tabs" role="tablist" aria-label={labels.tabs}>
        {groups.map((group) => {
          const active = activeId === group.id;
          return (
            <button
              key={group.id}
              id={`price-tab-${group.id}`}
              className={active ? "active" : undefined}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`price-panel-${group.id}`}
              tabIndex={active ? 0 : -1}
              onClick={() => selectGroup(group.id)}
            >
              {group.label}
            </button>
          );
        })}
      </div>

      {groups.map((group, groupIndex) => {
        const isEar = group.id === "ucho" || group.id === "ear";
        return (
          <section
            key={group.id}
            id={`price-panel-${group.id}`}
            className="price-panel"
            role="tabpanel"
            aria-labelledby={`price-tab-${group.id}`}
            hidden={activeId !== group.id}
          >
            <div className="price-panel-heading">
              <span>{String(groupIndex + 1).padStart(2, "0")} / {group.label}</span>
              <div>
                <h2>{group.label}</h2>
                <p>{group.description}</p>
              </div>
            </div>

            <div className={isEar ? "price-ear-layout" : undefined}>
              {isEar && (
                <EarScheme
                  items={group.items}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
              )}
              <div className={isEar ? "price-ear-table" : undefined}>
                <div className="price-head">
                  <span>{labels.item}</span>
                  <span>{labels.service}</span>
                  <span>{labels.price}</span>
                </div>
                <div className="price-list">
                  {group.items.map((item, itemIndex) => (
                    <div
                      key={item.name}
                      className={isEar && activeItem === itemIndex ? "is-active" : undefined}
                      onMouseEnter={isEar ? () => setActiveItem(itemIndex) : undefined}
                      onFocus={isEar ? () => setActiveItem(itemIndex) : undefined}
                      onClick={isEar ? () => setActiveItem(itemIndex) : undefined}
                    >
                      <span>{String(itemIndex + 1).padStart(2, "0")}</span>
                      <strong>{item.name}{item.note && <small>{item.note}</small>}</strong>
                      <b>{item.price}</b>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

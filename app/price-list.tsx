"use client";

import { useState } from "react";

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
    diagram: string;
  };
};

type Marker = { x: number; y: number };

const markerSets: Record<string, Marker[]> = {
  ucho: [
    { x: 386, y: 492 }, { x: 356, y: 116 }, { x: 328, y: 214 },
    { x: 238, y: 324 }, { x: 338, y: 330 }, { x: 396, y: 178 },
    { x: 292, y: 280 }, { x: 278, y: 164 }, { x: 380, y: 146 },
  ],
  ear: [
    { x: 386, y: 492 }, { x: 356, y: 116 }, { x: 328, y: 214 },
    { x: 238, y: 324 }, { x: 338, y: 330 }, { x: 396, y: 178 },
    { x: 292, y: 280 }, { x: 278, y: 164 }, { x: 380, y: 146 },
  ],
  oblicej: [
    { x: 280, y: 430 }, { x: 232, y: 340 }, { x: 280, y: 400 },
    { x: 280, y: 470 }, { x: 206, y: 220 }, { x: 280, y: 268 },
    { x: 280, y: 365 }, { x: 158, y: 358 }, { x: 230, y: 312 },
  ],
  face: [
    { x: 280, y: 430 }, { x: 232, y: 340 }, { x: 280, y: 400 },
    { x: 280, y: 470 }, { x: 206, y: 220 }, { x: 280, y: 268 },
    { x: 280, y: 365 }, { x: 158, y: 358 }, { x: 230, y: 312 },
  ],
  telo: [
    { x: 280, y: 432 }, { x: 210, y: 286 }, { x: 350, y: 286 }, { x: 280, y: 548 },
  ],
  body: [
    { x: 280, y: 432 }, { x: 210, y: 286 }, { x: 350, y: 286 }, { x: 280, y: 548 },
  ],
  mikrodermal: [{ x: 282, y: 278 }, { x: 408, y: 232 }],
  microdermal: [{ x: 282, y: 278 }, { x: 408, y: 232 }],
  surface: [{ x: 280, y: 276 }],
  tunely: [{ x: 316, y: 392 }, { x: 420, y: 448 }],
  tunnels: [{ x: 316, y: 392 }, { x: 420, y: 448 }],
  "doplnkove-sluzby": [
    { x: 142, y: 170 }, { x: 280, y: 170 }, { x: 418, y: 170 },
    { x: 142, y: 350 }, { x: 280, y: 350 }, { x: 418, y: 350 }, { x: 280, y: 510 },
  ],
  "additional-services": [
    { x: 142, y: 170 }, { x: 280, y: 170 }, { x: 418, y: 170 },
    { x: 142, y: 350 }, { x: 280, y: 350 }, { x: 418, y: 350 }, { x: 280, y: 510 },
  ],
};

function MarkerDot({ marker, index, active }: { marker: Marker; index: number; active: boolean }) {
  return (
    <g className={`diagram-marker ${active ? "is-active" : ""}`} transform={`translate(${marker.x} ${marker.y})`}>
      <circle r="17" />
      <text textAnchor="middle" dominantBaseline="central">{String(index + 1).padStart(2, "0")}</text>
    </g>
  );
}

function EarArtwork() {
  return <>
    <path className="diagram-fill" d="M126 70c118-54 290-20 343 98 37 82 13 185-40 260-44 63-89 110-92 174H170c-4-79-14-141-43-203C85 311 57 154 126 70Z" />
    <path d="M355 82c90 28 125 103 104 198-14 65-58 120-109 151-45 28-104 9-121-39-13-38 5-67 32-89 27-23 31-54 12-82-22-33-18-83 16-109 19-15 42-23 66-30Z" />
    <path d="M354 139c48 15 73 59 61 110-9 41-35 75-68 96-25 16-58 4-66-24-7-24 9-40 26-54 21-17 25-41 12-63-15-26-9-55 12-67 7-4 14-4 23 2Z" />
    <path d="M322 238c44-5 70 22 63 55-7 34-36 58-70 56-24-2-37-18-33-38 4-19 21-27 33-37 13-10 14-24 7-36Z" />
    <path d="M270 164c23-26 62-40 104-34M289 280c15-8 30-8 47-3M347 331c-7 41 11 86 47 108" />
    <line x1="304" y1="190" x2="412" y2="122" className="diagram-accent" />
    <line x1="296" y1="177" x2="420" y2="233" className="diagram-accent" />
  </>;
}

function FaceArtwork() {
  return <>
    <path className="diagram-fill" d="M280 64c110 0 184 82 176 210-4 70-24 167-72 226-30 37-65 58-104 58s-74-21-104-58c-48-59-68-156-72-226C96 146 170 64 280 64Z" />
    <path d="M280 76c-102 0-163 79-154 199 5 73 26 160 69 211 26 31 55 48 85 48s59-17 85-48c43-51 64-138 69-211 9-120-52-199-154-199Z" />
    <path d="M164 238c30-21 67-20 95 2M301 240c28-22 66-23 95-2M177 251c20 13 43 13 65 0M318 251c22 13 45 13 65 0" />
    <path d="M280 255c-6 40-21 77-19 101 1 16 13 25 30 23M235 424c29 14 61 14 90 0M246 452c22 10 46 10 68 0" />
    <path d="M142 349c25 17 52 22 78 17M340 366c27 5 54 0 78-17" />
    <line x1="280" y1="289" x2="280" y2="360" className="diagram-accent" />
  </>;
}

function BodyArtwork() {
  return <>
    <path className="diagram-fill" d="M184 70c19 53 4 98-45 129-54 34-83 88-77 164l24 220h388l24-220c6-76-23-130-77-164-49-31-64-76-45-129H184Z" />
    <path d="M184 72c17 49 3 91-43 121-55 35-78 93-67 173l20 208M376 72c-17 49-3 91 43 121 55 35 78 93 67 173l-20 208" />
    <path d="M183 126c27 35 58 51 97 51s70-16 97-51M112 244c48 7 83 4 112-12M448 244c-48 7-83 4-112-12" />
    <circle cx="210" cy="286" r="11" /><circle cx="350" cy="286" r="11" />
    <path d="M280 178v214M260 430c12 9 28 9 40 0M238 538c27 16 57 16 84 0" />
    <circle cx="280" cy="432" r="6" className="diagram-accent-fill" />
  </>;
}

function MicrodermalArtwork() {
  return <>
    <path className="diagram-fill" d="M56 245c126-36 322-36 448 0v230H56V245Z" />
    <path d="M56 245c126-36 322-36 448 0M56 302c126-30 322-30 448 0M56 380c126-18 322-18 448 0" />
    <path className="diagram-accent" d="M282 206v112m-54 47h108M258 318h48v47h-48Z" />
    <circle cx="282" cy="199" r="24" className="diagram-jewel" />
    <path d="M405 176c45 25 61 70 41 111M448 287l-23-4 10-21" />
    <path d="M190 420h184M210 449h144" className="diagram-fine" />
  </>;
}

function SurfaceArtwork() {
  return <>
    <path className="diagram-fill" d="M52 248c138-43 318-43 456 0v226H52V248Z" />
    <path d="M52 248c138-43 318-43 456 0M52 308c138-36 318-36 456 0M52 390c138-19 318-19 456 0" />
    <path className="diagram-accent" d="M190 297v58c0 24 18 42 42 42h96c24 0 42-18 42-42v-58" />
    <circle cx="190" cy="285" r="22" className="diagram-jewel" />
    <circle cx="370" cy="285" r="22" className="diagram-jewel" />
    <path d="M232 430h96M244 456h72" className="diagram-fine" />
  </>;
}

function TunnelsArtwork() {
  return <>
    <path className="diagram-fill" d="M130 62c105-29 225 6 285 95 53 79 46 181-10 253-38 48-75 77-83 145H168c-3-70-26-112-55-159-52-83-72-211-24-290 10-17 24-32 41-44Z" />
    <path d="M320 92c82 28 117 100 94 190-16 62-55 108-100 139-32 22-75 8-86-28-8-27 8-48 30-63 23-15 31-38 18-62-19-36-7-76 24-96 14-9 22-33 20-80Z" />
    <circle cx="316" cy="392" r="32" className="diagram-jewel" />
    <circle cx="316" cy="392" r="17" />
    <circle cx="415" cy="448" r="18" /><circle cx="458" cy="448" r="27" /><circle cx="510" cy="448" r="36" />
    <path d="M390 511h115M402 538h91" className="diagram-fine" />
  </>;
}

function ServicesArtwork() {
  return <>
    <rect x="72" y="100" width="140" height="140" rx="8" className="diagram-tile" />
    <path d="M109 139h66v45h-39l-19 16v-16h-8Z" />
    <rect x="210" y="100" width="140" height="140" rx="8" className="diagram-tile" />
    <circle cx="280" cy="164" r="28" className="diagram-jewel" /><circle cx="280" cy="164" r="9" />
    <rect x="348" y="100" width="140" height="140" rx="8" className="diagram-tile" />
    <path d="M388 191l60-60M394 135l50 50" className="diagram-accent" />
    <rect x="72" y="280" width="140" height="140" rx="8" className="diagram-tile" />
    <path d="M112 382l58-58M112 324l58 58M141 309v88" />
    <rect x="210" y="280" width="140" height="140" rx="8" className="diagram-tile" />
    <path d="M280 309v82M239 350h82M251 321l58 58M309 321l-58 58" />
    <rect x="348" y="280" width="140" height="140" rx="8" className="diagram-tile" />
    <path d="M397 327h42l12 65h-66Z" /><path d="M405 310h26v17h-26Z" />
    <rect x="210" y="460" width="140" height="105" rx="8" className="diagram-tile" />
    <path d="M240 488h80v49h-80Z" /><path d="M260 488v49M300 488v49M240 512h80" />
  </>;
}

function DiagramArtwork({ id }: { id: string }) {
  if (id === "ucho" || id === "ear") return <EarArtwork />;
  if (id === "oblicej" || id === "face") return <FaceArtwork />;
  if (id === "telo" || id === "body") return <BodyArtwork />;
  if (id === "mikrodermal" || id === "microdermal") return <MicrodermalArtwork />;
  if (id === "surface") return <SurfaceArtwork />;
  if (id === "tunely" || id === "tunnels") return <TunnelsArtwork />;
  return <ServicesArtwork />;
}

function PriceDiagram({
  group,
  activeItem,
  setActiveItem,
  label,
}: {
  group: PriceGroup;
  activeItem: number;
  setActiveItem: (index: number) => void;
  label: string;
}) {
  const markers = markerSets[group.id] ?? [];
  return (
    <aside className="price-diagram" aria-label={`${label}: ${group.label}`}>
      <div className="price-diagram-meta"><span>{label}</span><b>{group.label}</b></div>
      <svg className="price-diagram-svg" viewBox="0 0 560 620" role="img" aria-label={group.label}>
        <DiagramArtwork id={group.id} />
        {markers.map((marker, index) => (
          <MarkerDot key={index} marker={marker} index={index} active={activeItem === index} />
        ))}
      </svg>
      <ol className="price-diagram-legend">
        {group.items.map((item, index) => (
          <li key={item.name}>
            <button
              type="button"
              className={activeItem === index ? "is-active" : undefined}
              onMouseEnter={() => setActiveItem(index)}
              onFocus={() => setActiveItem(index)}
              onClick={() => setActiveItem(index)}
              aria-pressed={activeItem === index}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>{item.name}
            </button>
          </li>
        ))}
      </ol>
    </aside>
  );
}

export default function PriceList({ groups, labels }: PriceListProps) {
  const [activeId, setActiveId] = useState(groups[0]?.id ?? "");
  const [activeItem, setActiveItem] = useState(0);

  const selectGroup = (id: string) => {
    setActiveId(id);
    setActiveItem(0);
  };

  return (
    <div className="price-browser">
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

      {groups.map((group, groupIndex) => (
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
          <div className="price-category-layout">
            <PriceDiagram group={group} activeItem={activeItem} setActiveItem={setActiveItem} label={labels.diagram} />
            <div className="price-table">
              <div className="price-head">
                <span>{labels.item}</span>
                <span>{labels.service}</span>
                <span>{labels.price}</span>
              </div>
              <div className="price-list">
                {group.items.map((item, itemIndex) => (
                  <div
                    key={item.name}
                    className={activeItem === itemIndex ? "is-active" : undefined}
                    onMouseEnter={() => setActiveItem(itemIndex)}
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
      ))}
    </div>
  );
}

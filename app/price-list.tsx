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
  };
};

export default function PriceList({ groups, labels }: PriceListProps) {
  const [activeId, setActiveId] = useState(groups[0]?.id ?? "");

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
              onClick={() => setActiveId(group.id)}
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
          <div className="price-head">
            <span>{labels.item}</span>
            <span>{labels.service}</span>
            <span>{labels.price}</span>
          </div>
          <div className="price-list">
            {group.items.map((item, itemIndex) => (
              <div key={item.name}>
                <span>{String(itemIndex + 1).padStart(2, "0")}</span>
                <strong>{item.name}{item.note && <small>{item.note}</small>}</strong>
                <b>{item.price}</b>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

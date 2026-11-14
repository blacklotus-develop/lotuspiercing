"use client";

import { useState } from "react";
import type { Lang } from "./site";

const content = {
  cs: [
    {
      title: "Předčištění",
      text: "Použité nástroje nejprve ponoříme do speciálního čisticího a dezinfekčního roztoku. Následně je důkladně opláchneme vodou.",
      image: "/assets/sterilisation-preclean.webp",
      alt: "Předčištění piercingových nástrojů v čisticím a dezinfekčním roztoku",
    },
    {
      title: "Ultrazvuková lázeň",
      text: "Nástroje čistíme v ultrazvukové lázni, která pomáhá odstranit nečistoty i z obtížně přístupných míst.",
      image: "/assets/sterilisation-ultrasonic.webp",
      alt: "Čištění nástrojů v ultrazvukové lázni Black Lotus",
    },
    {
      title: "Oplach a sušení",
      text: "Po čištění nástroje znovu opláchneme, zkontrolujeme a důkladně osušíme. Čisté a suché je uchováváme ve vyhrazeném úložném prostoru.",
      image: "/assets/studio-sterilisation-overview.webp",
      alt: "Vyhrazený prostor pro přípravu a čištění nástrojů",
    },
    {
      title: "Parní autokláv",
      text: "Bezprostředně před použitím nástroje sterilizujeme v parním autoklávu Enbio S pomocí programu vhodného pro daný typ nástrojů.",
      image: "/assets/sterilisation-autoclave.webp",
      alt: "Sterilizace nástrojů v parním autoklávu Enbio S",
    },
    {
      title: "Kontrola a evidence",
      text: "Kontrolujeme průběh sterilizačního cyklu a příslušné indikátory. Každý cyklus zaznamenáváme do sterilizačního deníku včetně kontrolních údajů.",
      image: "/assets/sterilisation-records.webp",
      alt: "Kontrola cyklu na displeji autoklávu Enbio S",
    },
  ],
  en: [
    {
      title: "Pre-cleaning",
      text: "Used instruments are first immersed in a dedicated cleaning and disinfecting solution. They are then thoroughly rinsed with water.",
      image: "/assets/sterilisation-preclean.webp",
      alt: "Pre-cleaning piercing instruments in a cleaning and disinfecting solution",
    },
    {
      title: "Ultrasonic bath",
      text: "We clean the instruments in an ultrasonic bath, which helps remove residue from areas that are difficult to reach.",
      image: "/assets/sterilisation-ultrasonic.webp",
      alt: "Cleaning instruments in the Black Lotus ultrasonic bath",
    },
    {
      title: "Rinsing and drying",
      text: "After cleaning, the instruments are rinsed again, inspected and thoroughly dried. Once clean and dry, they are kept in a dedicated storage area.",
      image: "/assets/studio-sterilisation-overview.webp",
      alt: "Dedicated area for preparing and cleaning instruments",
    },
    {
      title: "Steam autoclave",
      text: "Immediately before use, the instruments are sterilised in an Enbio S steam autoclave using a programme suited to the specific instrument type.",
      image: "/assets/sterilisation-autoclave.webp",
      alt: "Sterilising instruments in the Enbio S steam autoclave",
    },
    {
      title: "Verification and records",
      text: "We verify the sterilisation cycle and the relevant indicators. Every cycle is entered in the sterilisation log together with its control data.",
      image: "/assets/sterilisation-records.webp",
      alt: "Checking a sterilisation cycle on the Enbio S display",
    },
  ],
} satisfies Record<Lang, Array<{ title: string; text: string; image: string; alt: string }>>;

export default function SterilisationExplorer({ lang }: { lang: Lang }) {
  const stages = content[lang];
  const [active, setActive] = useState(0);

  return (
    <div className="sterilisation-explorer">
      <div className="sterilisation-steps" role="list">
        {stages.map((stage, index) => {
          const isActive = active === index;
          const number = String(index + 1).padStart(2, "0");
          return (
            <div className={`sterilisation-step ${isActive ? "is-active" : ""}`} key={stage.title} role="listitem" onMouseEnter={() => setActive(index)}>
              <button type="button" aria-expanded={isActive} aria-controls={`sterilisation-panel-${lang}-${index}`} onClick={() => setActive(index)}>
                <span>{number}</span>
                <strong>{stage.title}</strong>
                <i aria-hidden="true">{isActive ? "−" : "+"}</i>
              </button>
              <div id={`sterilisation-panel-${lang}-${index}`} className="sterilisation-step-copy" aria-hidden={!isActive}>
                <p>{stage.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <figure className="sterilisation-visual" aria-live="polite">
        <img key={stages[active].image} src={stages[active].image} alt={stages[active].alt} loading="lazy" />
        <figcaption>{String(active + 1).padStart(2, "0")} / {stages[active].title}</figcaption>
      </figure>
    </div>
  );
}

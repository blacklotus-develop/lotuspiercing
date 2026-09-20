"use client";
import { useState } from 'react';
import ArrowIcon from '../arrow-icon';
const filters = [['EAR','Ucho'],['FACE','Obličej'],['BODY','Tělo'],['CURATED','Kompozice'],['HEALED','Zahojené']] as const;
const images = [
 {category:'EAR',name:'Helix',src:'/assets/hero.webp'},
 {category:'EAR',name:'Conch',src:'/assets/conch.webp'},
 {category:'FACE',name:'Nostril',src:'/assets/nostril.webp'},
];
export default function Portfolio() {
 const [filter,setFilter] = useState('EAR');
 const selected = images.filter(image=>image.category===filter);
 return <>
  <div className="v2-filters" role="group" aria-label="Kategorie portfolia">{filters.map(([key,label])=><button key={key} type="button" aria-pressed={filter===key} onClick={()=>setFilter(key)}>{key}<small>{label}</small></button>)}</div>
  <div aria-live="polite" className="v2-gallery">
   {selected.length ? selected.map(item=><figure key={item.name}><img loading="lazy" src={item.src} alt={`Ilustrační detail: ${item.name}`} /><figcaption><span>{item.name}</span><span>ILUSTRAČNÍ DETAIL</span></figcaption></figure>) : <div className="v2-gallery-empty"><span>{filter} / ARCHIV</span><h3>{filter==='HEALED'?'Výsledek po zahojení.':filter==='CURATED'?'Jednotlivé detaily. Jeden celek.':'Podle vaší anatomie.'}</h3><p>{filter==='HEALED'?'Fotografie ověřených zahojených prací zde zatím nejsou.':'Fotografie této kategorie zde zatím nejsou.'} Aktuální realizace najdete na našem Instagramu.</p><a className="text-link" href="https://www.instagram.com/lotus.piercing/">PORTFOLIO STUDIA <ArrowIcon /></a></div>}
  </div>
  <p className="v2-note">Náhledy umístění jsou ilustrační. Skutečné realizace studia najdete v našem portfoliu.</p>
 </>;
}

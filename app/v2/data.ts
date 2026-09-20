export const booking = 'https://n571820.alteg.io/';
export const instagram = 'https://www.instagram.com/lotus.piercing/';
export const reviewsUrl = 'https://maps.google.com/?cid=13316671644133494499';
export const giftUrl = 'https://lotusjewelry.cz/kategorie-produktu/darkove-poukazy/';
export const piercings = [
  ['helix','Helix','UCHO',1400,'Vnější okraj ušní chrupavky. Umístění volíme podle tvaru ucha a plánovaného šperku.'],
  ['conch','Conch','UCHO',1400,'Vnitřní plocha ušní chrupavky. Důležitý je prostor pro šperk i způsob, jakým používáte sluchátka.'],
  ['rook','Rook','UCHO',1400,'Záhyb chrupavky nad vnitřní částí ucha. Potřebuje dostatečně výrazný a vhodně tvarovaný záhyb.'],
  ['daith','Daith','UCHO',1500,'Vnitřní záhyb ušní chrupavky. Vhodnost určuje jeho tvar a přístupnost. Jde o ozdobný piercing, ne léčbu migrény.'],
  ['tragus','Tragus','UCHO',1400,'Malý chrupavčitý výběžek před zvukovodem. Při konzultaci probereme také používání sluchátek.'],
  ['flat','Flat','UCHO',1400,'Plochá horní část ušní chrupavky. Prostor pro výraznou koncovku i jemnou kompozici.'],
  ['industrial','Industrial','UCHO',2500,'Dva vpichy propojené jedním šperkem. Jejich úhel i prostor mezi nimi musí odpovídat anatomii ucha.'],
  ['lalucek','Lalůček','UCHO',1200,'Měkká část ucha. Rozmístění plánujeme také s ohledem na existující piercingy.'],
  ['nostril','Nostril','NOS',1400,'Piercing nosního křídla. Pozici vybíráme podle tvaru nosu a budoucího typu šperku.'],
  ['septum','Septum','NOS',1500,'Piercing měkké tkáně v oblasti nosní přepážky. Přesné umístění vychází z individuální anatomie.'],
  ['labret','Labret','RTY',1400,'Piercing v oblasti spodního rtu. Posuzujeme také kontakt šperku se zuby a dásněmi.'],
  ['vertical-labret','Vertical Labret','RTY',1400,'Vertikální umístění ve spodním rtu. Vhodnost závisí na jeho tvaru a množství tkáně.'],
  ['medusa','Medusa','RTY',1400,'Střed nad horním rtem. Zohledňujeme symetrii, prostor a kontakt šperku s ústní dutinou.'],
  ['oboci','Obočí','OBOČÍ',1400,'Umístění v oblasti obočí. Pro stabilní pozici potřebujeme vhodnou tkáň a správný úhel.'],
  ['navel','Navel / pupík','TĚLO',1500,'Piercing pupíku. Anatomii kontrolujeme ve stoje i vsedě, aby šperk nebyl pod zbytečným tlakem.'],
  ['nipple','Nipple / bradavka','TĚLO',1500,'Piercing bradavky. Umístění a rozměr šperku řešíme individuálně při diskrétní konzultaci.'],
  ['microdermal','Microdermal','MICRODERMAL',1500,'Jednobodový piercing s kotvou pod kůží. Při výběru místa zohledníme pohyb, oblečení i možné zachytávání.'],
].map(([slug,name,category,price,description]) => ({slug: String(slug),name: String(name),category: String(category),price: Number(price),description: String(description)}));
export const categories = ['UCHO','NOS','RTY','OBOČÍ','TĚLO','MICRODERMAL'];
export const faq = [
 ['Bolí piercing?','Krátký vpich může být nepříjemný. Vnímání je individuální a záleží i na místě. Předem vysvětlíme jednotlivé kroky a necháme vám prostor na otázky.'],
 ['Je šperk v ceně?','U vybraných piercingů cena zahrnuje základní šperk z titanu ASTM F-136. Výběr jiného šperku může cenu změnit. Konečnou částku si potvrdíme před aplikací.'],
 ['Kdy lze šperk vyměnit?','Až podle stavu piercingu. Zkrácení počátečního šperku během hojení není totéž jako výměna za ozdobný šperk. Vhodný okamžik posoudíme při kontrole.'],
 ['Kolik piercingů lze udělat najednou?','Rozhoduje umístění, vaše zkušenost s hojením a to, kolik piercingů se už hojí. Počet společně domluvíme při konzultaci.'],
 ['Od kolika let piercing provádíte?','Podmínky se liší podle typu piercingu. Před rezervací nám napište věk a požadované umístění. Potvrdíme, zda je zákrok možný a jaké doklady a doprovod jsou potřeba.'],
 ['Musím se objednat?','Rezervace zajistí čas na konzultaci i aplikaci. Aktuální volné termíny najdete v online kalendáři. Pro kontrolu nebo dotaz nám můžete také zavolat.'],
 ['Mohu si přinést vlastní šperk?','Předem se s námi domluvte. Pro čerstvý piercing musíme ověřit materiál, rozměr, konstrukci i možnost sterilizace. Ne každý šperk je vhodný.'],
 ['Jak dlouho se piercing hojí?','Délka hojení se liší podle tkáně, umístění a individuální reakce. Klidný vzhled ještě nemusí znamenat úplné zahojení. Konkrétní plán péče probereme při návštěvě.'],
];

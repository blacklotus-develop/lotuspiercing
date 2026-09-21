"use client";

import { useMemo, useState } from "react";
import ArrowIcon from "./arrow-icon";
import Link from "./native-link";
import styles from "./journal-index.module.css";

type Language = "cs" | "en";
type Category = "care" | "materials" | "guide" | "healing" | "minors" | "anatomy";

type JournalArticle = {
  slug: string;
  number: string;
  category: Category;
  label: string;
  title: string;
  excerpt: string;
  time: string;
  keywords: string[];
};

const articles: Record<Language, JournalArticle[]> = {
  cs: [
    { slug: "vymena-prvniho-sperku", number: "01", category: "care", label: "PÉČE", title: "Kdy je správný čas vyměnit první šperk?", excerpt: "Ne počet týdnů, ale stav tkáně. Jak poznat, že je čas na kontrolu.", time: "06", keywords: ["výměna šperku", "downsizing", "zkrácení", "hojení", "kontrola", "labret"] },
    { slug: "titan-vs-chirurgicka-ocel", number: "02", category: "materials", label: "MATERIÁLY", title: "Titan vs. chirurgická ocel: jaký materiál zvolit pro piercing?", excerpt: "Titan, ocel, zlato i PTFE. Co patří do čerstvého piercingu a podle čeho poznat kvalitní šperk.", time: "09", keywords: ["titan", "chirurgická ocel", "ASTM F-136", "zlato", "niob", "PTFE", "anodizace", "šperk"] },
    { slug: "prvni-piercing-krok-za-krokem", number: "03", category: "guide", label: "PRŮVODCE", title: "První piercing krok za krokem", excerpt: "Konzultace, umístění, aplikace a první dny hojení bez nejasností.", time: "08", keywords: ["první piercing", "konzultace", "aplikace", "jehla", "návštěva", "příprava"] },
    { slug: "co-je-normalni-pri-hojeni", number: "04", category: "healing", label: "HOJENÍ", title: "Co je normální během hojení?", excerpt: "Otok, krusty a citlivost — kdy vyčkat a kdy se ozvat.", time: "06", keywords: ["hojení", "otok", "krusty", "sekrece", "bolest", "infekce", "aftercare"] },
    { slug: "piercing-u-nezletilych", number: "05", category: "minors", label: "NEZLETILÍ", title: "Piercing u dětí a dospívajících: kdy je správný čas?", excerpt: "Souhlas dítěte, připravenost na hojení, bezpečná aplikace a podmínky pro nezletilé.", time: "08", keywords: ["děti", "dítě", "nezletilí", "rodiče", "zákonný zástupce", "propíchnutí uší", "věk", "pistole", "jehla"] },
    { slug: "proc-neni-kazdy-piercing-pro-kazdeho", number: "06", category: "anatomy", label: "ANATOMIE", title: "Proč není každý piercing pro každého", excerpt: "Jak anatomie ovlivňuje umístění, výběr šperku i dlouhodobý výsledek.", time: "07", keywords: ["anatomie", "umístění", "úhel", "migrace", "odmítnutí", "konzultace"] },
  ],
  en: [
    { slug: "changing-initial-jewelry", number: "01", category: "care", label: "CARE", title: "When is the right time to change the initial jewelry?", excerpt: "It is the condition of the tissue, not only the number of weeks, that matters.", time: "06", keywords: ["jewelry change", "downsizing", "healing", "check-up", "labret"] },
    { slug: "titanium-vs-surgical-steel", number: "02", category: "materials", label: "MATERIALS", title: "Titanium vs. surgical steel: which material should you choose for a piercing?", excerpt: "Titanium, steel, gold and PTFE. What belongs in a fresh piercing and how to recognize quality jewelry.", time: "09", keywords: ["titanium", "surgical steel", "ASTM F-136", "gold", "niobium", "PTFE", "anodising", "jewelry"] },
    { slug: "first-piercing-step-by-step", number: "03", category: "guide", label: "GUIDE", title: "Your first piercing, step by step", excerpt: "Consultation, placement, application and the first days of healing.", time: "08", keywords: ["first piercing", "consultation", "procedure", "needle", "appointment", "preparation"] },
    { slug: "normal-during-healing", number: "04", category: "healing", label: "HEALING", title: "What is normal during healing?", excerpt: "Swelling, crusting and tenderness — when to wait and when to contact us.", time: "06", keywords: ["healing", "swelling", "crust", "discharge", "pain", "infection", "aftercare"] },
    { slug: "piercing-for-minors", number: "05", category: "minors", label: "MINORS", title: "Piercing for children and teenagers: when is the right time?", excerpt: "Consent, readiness for healing, safe application and conditions for minors.", time: "08", keywords: ["children", "child", "teenager", "minors", "parent", "guardian", "ear piercing", "age", "piercing gun", "needle"] },
    { slug: "anatomy-and-piercing", number: "06", category: "anatomy", label: "ANATOMY", title: "Why not every piercing suits everyone", excerpt: "How anatomy affects placement, jewelry choice and long-term results.", time: "07", keywords: ["anatomy", "placement", "angle", "migration", "rejection", "consultation"] },
  ],
};

const labels: Record<Language, { search: string; placeholder: string; all: string; results: string; empty: string; clear: string; read: string; categories: Record<Category, string> }> = {
  cs: {
    search: "HLEDAT V JOURNALU",
    placeholder: "Např. titan, hojení, děti…",
    all: "VŠE",
    results: "VÝSLEDKY",
    empty: "Pro tento dotaz jsme nic nenašli.",
    clear: "VYMAZAT HLEDÁNÍ",
    read: "ČÍST",
    categories: { care: "PÉČE", materials: "MATERIÁLY", guide: "PRŮVODCE", healing: "HOJENÍ", minors: "NEZLETILÍ", anatomy: "ANATOMIE" },
  },
  en: {
    search: "SEARCH THE JOURNAL",
    placeholder: "Try titanium, healing, children…",
    all: "ALL",
    results: "RESULTS",
    empty: "No articles match this search.",
    clear: "CLEAR SEARCH",
    read: "READ",
    categories: { care: "CARE", materials: "MATERIALS", guide: "GUIDES", healing: "HEALING", minors: "MINORS", anatomy: "ANATOMY" },
  },
};

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();
}

export default function JournalIndex({ lang }: { lang: Language }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | Category>("all");
  const copy = labels[lang];
  const list = articles[lang];

  const filtered = useMemo(() => {
    const needle = normalize(query.trim());
    return list.filter((article) => {
      const matchesCategory = category === "all" || article.category === category;
      const haystack = normalize([article.title, article.excerpt, article.label, ...article.keywords].join(" "));
      return matchesCategory && (!needle || haystack.includes(needle));
    });
  }, [category, list, query]);

  const reset = () => {
    setQuery("");
    setCategory("all");
  };

  return (
    <section className={`${styles.browser} frame`} aria-label={copy.search}>
      <div className={styles.tools}>
        <label className={styles.search}>
          <span>{copy.search}</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy.placeholder} type="search" />
        </label>
        <div className={styles.filters} aria-label={lang === "cs" ? "Filtrovat podle tématu" : "Filter by topic"}>
          <button type="button" aria-pressed={category === "all"} onClick={() => setCategory("all")}>{copy.all}</button>
          {(Object.keys(copy.categories) as Category[]).map((key) => <button type="button" key={key} aria-pressed={category === key} onClick={() => setCategory(key)}>{copy.categories[key]}</button>)}
        </div>
        <div className={styles.meta} aria-live="polite"><span>{copy.results}</span><b>{String(filtered.length).padStart(2, "0")} / {String(list.length).padStart(2, "0")}</b></div>
      </div>

      {filtered.length > 0 ? (
        <div className={`article-index ${styles.results}`}>
          {filtered.map((article) => <Link href={lang === "cs" ? `/journal/${article.slug}` : `/en/journal/${article.slug}`} key={article.slug}>
            <span>{article.number} / {article.label}</span>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <b>{copy.read} / {article.time} MIN <ArrowIcon /></b>
          </Link>)}
        </div>
      ) : (
        <div className={styles.empty}>
          <p>{copy.empty}</p>
          <button type="button" onClick={reset}>{copy.clear} <ArrowIcon /></button>
        </div>
      )}
    </section>
  );
}

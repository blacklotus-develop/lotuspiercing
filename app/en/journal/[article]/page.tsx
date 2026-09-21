import ArrowIcon from "../../../arrow-icon";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "../../../native-link";
import { Footer, Header } from "../../../site";

const articles = {
  "changing-initial-jewelry": {
    cs: "vymena-prvniho-sperku", tag: "CARE / 06 MIN", title: "When is the right time to change the initial jewelry?",
    lead: "The number of weeks is not the only factor. Piercing type, tissue condition and whether the initial swelling has fully settled all matter.",
    sections: [["Why there is no universal date", "Lobes, cartilage and nostrils heal differently. Anatomy, sleeping pressure, snagging and overall health also affect the timeline."],["Downsizing is not a decorative change", "Some piercings need a shorter post once swelling subsides. Controlled downsizing reduces movement and snagging."],["When to book a check-up", "If the area is calm, without increasing swelling, strong pain or unusual discharge, book a check-up. Your piercer will assess the channel and advise you."]],
  },
  "titanium-vs-surgical-steel": {
    cs: "titan-vs-chirurgicka-ocel", tag: "MATERIALS / 09 MIN", title: "Titanium vs. surgical steel: which material should you choose for a piercing?",
    lead: "The words “titanium” or “surgical steel” are not enough. Piercing jewelry should be assessed by its exact grade, finish, construction and fit.",
    seo: {
      description: "Titanium ASTM F-136, surgical steel, gold, niobium and PTFE: learn which materials suit a fresh piercing and how to recognize quality jewelry.",
      keywords: ["titanium vs surgical steel piercing", "best material for piercing jewelry", "ASTM F-136 titanium", "initial piercing jewelry", "piercing Prague"],
    },
    sections: [
      ["Fresh and healed piercings have different needs", "A fresh piercing is a healing wound. Its jewelry remains in constant contact with tissue, so the requirements for material, finish and construction are stricter than they are for a healed channel. Something that can be worn briefly in a healed piercing is not necessarily suitable as initial jewelry."],
      ["Material is only the first part of the answer", "The exact alloy grade and traceable origin matter. So do a mirror-smooth surface without scratches, a safe construction without an exposed thread passing through the channel, and dimensions selected for your anatomy and expected swelling."],
      ["ASTM F-136 implant-grade titanium", "Titanium alloy compliant with ASTM F-136 is one of the most common choices for initial jewelry. It is lightweight, corrosion-resistant and nickel-free. The word “titanium” alone is not a certification: without a stated standard and traceable manufacturer, its exact composition cannot be confirmed by appearance."],
      ["Surgical steel: the name is not enough", "Steel is not automatically unsuitable. Specific certified grades, including ASTM F-138 or ISO 5832-1, may be appropriate for initial jewelry. However, the generic label “surgical steel” does not identify the alloy. Steel also contains nickel and is heavier than titanium, which is why Black Lotus prefers ASTM F-136 implant-grade titanium for initial piercings."],
      ["Gold has to meet specific conditions", "Piercing jewelry should be made from solid gold of a suitable composition, generally 14k to 18k, and free from nickel and cadmium. Gold-plated, gold-filled and vermeil pieces are not appropriate for a fresh piercing because the surface layer can wear and expose the base metal."],
      ["Niobium, glass and PTFE", "Quality niobium and certain types of lead-free glass can be suitable for piercing jewelry. PTFE is a flexible polymer used in specific situations, but flexibility does not automatically mean better healing than titanium. Suitability depends on the piercing, product quality and assessment by an experienced piercer."],
      ["Materials to avoid in a fresh piercing", "Silver, acrylic and porous organic materials such as wood, bone or horn are not suitable for initial jewelry. Unknown alloys, low-quality coatings and rough surfaces are also a concern. Organic materials can have a place in fully healed stretched lobes, but they require a different approach to wear and care."],
      ["Anodizing is not a colored coating", "Anodizing creates a controlled oxide layer on the titanium surface, changing how the jewelry reflects light. No pigment is painted onto the piece. The shade may fade over time through friction and contact with skin chemistry, but the jewelry does not stop being titanium."],
      ["How to recognize quality jewelry", "Ask for the exact material standard and manufacturer. Look for a smooth finish, internally threaded or threadless construction, and dimensions selected for your anatomy. A suspiciously low price, vague material description or missing origin information should be treated with caution."],
      ["What we use at Black Lotus", "For initial applications we routinely choose ASTM F-136 implant-grade titanium. We select the jewelry type, length and gauge individually according to anatomy, placement and room needed for initial swelling. At a follow-up we assess whether it is time to downsize."],
      ["Is titanium always the best choice?", "Quality implant-grade titanium is a reliable option for most initial piercings, but no single piece suits every body and placement. Material, construction, dimensions, anatomy and aftercare all work together."],
      ["Can I bring my own jewelry for a fresh piercing?", "Only when its material, dimensions, construction and ability to be sterilized can be verified safely. We do not use unmarked online jewelry or a piece previously worn by another person for an initial application."],
    ],
  },
  "first-piercing-step-by-step": {
    cs: "prvni-piercing-krok-za-krokem", tag: "GUIDE / 08 MIN", title: "Your first piercing, step by step",
    lead: "From placement to healing instructions. Here is what happens in the studio and why we do not skip any step.",
    sections: [["01 / Consultation", "We discuss your idea, anatomy, lifestyle and expectations. If a placement is unsuitable, we suggest a safer alternative."],["02 / Placement and jewelry", "Together we confirm position, dimensions and jewelry. Initial applications use ASTM F-136 implant-grade titanium."],["03 / Application", "We work with sterile equipment and a single-use needle. Every step is explained in advance."],["04 / Aftercare", "You receive clear guidance on cleaning, sleeping, sport and check-ups. Contact us whenever you are unsure."]],
  },
  "normal-during-healing": {
    cs: "co-je-normalni-pri-hojeni", tag: "HEALING / 06 MIN", title: "What is normal during healing?",
    lead: "Mild tenderness, swelling or dried lymph can be part of healing. Watch how symptoms develop rather than judging one moment.",
    sections: [["Common reactions", "During the first days the area may be tender, warmer and slightly swollen. These signs should gradually settle."],["When to contact us", "Get in touch if pain is increasing, swelling is severe, redness is spreading or the jewelry begins to embed."],["Do not remove jewelry without advice", "Early removal may close the surface and complicate treatment. Contact the studio first."]],
  },
  "piercing-for-minors": {
    cs: "piercing-u-nezletilych", tag: "MINORS / 08 MIN", title: "Piercing for children and teenagers: when is the right time?",
    lead: "Age alone is not enough. A young person should genuinely want the piercing, understand the healing process and be able to care for it consistently.",
    seo: {
      description: "Piercing for children and teenagers: the child’s consent, guardian attendance, safe needle procedure, suitable initial jewelry and aftercare.",
      keywords: ["piercing for minors", "ear piercing for children", "teen piercing Prague", "what age can you get a piercing", "needle ear piercing"],
    },
    sections: [
      ["Age is not the only criterion", "There is no single age that is right for every piercing. Placement, anatomy, maturity and the ability to follow aftercare throughout healing all matter. Age requirements therefore differ by piercing type and should always be confirmed before booking."],
      ["The young person must want the piercing", "A parent’s permission does not replace the child’s consent. The young client needs to understand what will happen, cooperate voluntarily and be free to say no at any point. If the child is hesitant, frightened or only the parent wants the piercing, we postpone the procedure."],
      ["Are they ready for healing?", "The procedure takes a moment, but healing takes weeks or months. The child should be able to leave the jewelry alone, avoid twisting it, protect it while dressing and playing sport, and tell an adult if pain, swelling or another problem develops."],
      ["A sterile needle, not a piercing gun", "At Black Lotus we use a sterile single-use needle. Reusable piercing guns cannot always be sterilized safely, while a blunt stud is forced through tissue under pressure. Butterfly backs can also leave too little room for swelling and are difficult to clean."],
      ["Initial jewelry is not an ordinary earring", "For an initial piercing we choose jewelry designed for healing, usually ASTM F-136 implant-grade titanium. It needs a smooth finish, safe construction and dimensions suited to the anatomy and initial swelling. Heavy charms, unknown alloys and fashion jewelry should wait until the piercing is fully healed."],
      ["Ears change as children grow", "The proportions of the lobe and the position of initially symmetrical piercings can change with growth. Even precise placement cannot guarantee that the holes will look exactly the same in adulthood. We plan placement for the current anatomy and leave adequate distance from the edge."],
      ["Choose the right time", "Before booking, consider swimming, contact sports, helmets, headphones, school PE and holidays by the water. During healing, pressure and snagging need to be minimized, and a fresh piercing should not be submerged in pools, lakes or hot tubs."],
      ["What the legal guardian must bring", "A minor attends in person with a legal guardian. Bring valid identification for both the young client and guardian; the guardian remains present during the visit. Written permission sent remotely does not replace personal attendance."],
      ["Not every piercing is offered at every age", "Lobes, cartilage, noses and navels place different demands on anatomy, lifestyle and aftercare. The minimum age therefore depends on the piercing and studio policy. If the requested placement is unsuitable, we explain why and suggest a safer alternative or a later appointment."],
      ["Aftercare is shared work", "The parent helps create the conditions for calm healing but should not remove or rotate the jewelry unnecessarily. Hands must be washed before contact, the area should be rinsed as instructed, and the studio should be contacted if pain increases, swelling becomes severe, the jewelry embeds or anything feels uncertain."],
      ["So, what age do you pierce from?", "It depends on the piercing, anatomy and readiness of the young client. Before booking, send us their age and requested placement. We will confirm whether we offer the procedure and which documents to bring."],
    ],
  },
  "anatomy-and-piercing": {
    cs: "proc-neni-kazdy-piercing-pro-kazdeho", tag: "ANATOMY / 07 MIN", title: "Why not every piercing suits everyone",
    lead: "Good placement is more than an aesthetic choice. Tissue shape, space and angle affect stability and healing.",
    sections: [["Anatomy before trends", "A reference photo can inspire, but it cannot simply be copied onto another body. We first assess shape and available tissue."],["Angle and pressure", "An unsuitable angle or long-term pressure may lead to irritation, migration or rejection."],["An alternative may be better", "If the original idea is unsafe, we suggest a placement or piece with a similar effect and a better prognosis."]],
  },
} as const;

export function generateStaticParams() { return Object.keys(articles).map(article => ({ article })); }

export async function generateMetadata({ params }: { params: Promise<{ article: string }> }): Promise<Metadata> {
  const { article } = await params;
  const data = articles[article as keyof typeof articles];
  if (!data) return {};
  const seo = "seo" in data ? data.seo : undefined;
  return {
    title: `${data.title} | Black Lotus Piercing Prague`,
    description: seo?.description ?? data.lead,
    keywords: seo ? [...seo.keywords] : undefined,
    alternates: {
      canonical: `https://lotuspiercing.cz/en/journal/${article}`,
      languages: {
        cs: `https://lotuspiercing.cz/journal/${data.cs}`,
        en: `https://lotuspiercing.cz/en/journal/${article}`,
      },
    },
    openGraph: {
      type: "article",
      locale: "en_GB",
      title: data.title,
      description: seo?.description ?? data.lead,
      url: `https://lotuspiercing.cz/en/journal/${article}`,
      siteName: "Black Lotus Piercing Studio",
    },
  };
}

export default async function Article({ params }: { params: Promise<{ article: string }> }) {
  const { article } = await params;
  const data = articles[article as keyof typeof articles];
  if (!data) notFound();
  const relatedArticles = Object.entries(articles).filter(([slug]) => slug !== article).slice(0, 3);
  return <main><Header lang="en" slug={`journal/${article}`} switchSlug={`journal/${data.cs}`} />
    <article className="article-page frame">
      <div className="article-hero"><p>{data.tag}</p><h1>{data.title}</h1><strong>{data.lead}</strong></div>
      <div className="article-body">{data.sections.map(([title,text],i)=><section key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h2>{title}</h2><p>{text}</p></div></section>)}</div>
      <div className="article-cta"><p>Have a question about your piercing?</p><Link href="https://n571820.alteg.io/" className="button button-light">BOOK A CONSULTATION <ArrowIcon /></Link></div>
      <Link href="/en/journal" className="text-link"><ArrowIcon back /> BACK TO ALL ARTICLES</Link>
      <section className="journal section-space" aria-labelledby="related-articles">
        <div className="section-title-row"><h2 id="related-articles">Read next</h2><Link href="/en/journal" className="text-link">ALL ARTICLES <span><ArrowIcon /></span></Link></div>
        <div className="article-grid">{relatedArticles.map(([slug, related]) => <Link href={`/en/journal/${slug}`} key={slug}><span>{related.tag}</span><h3>{related.title}</h3><p>{related.lead}</p><b><ArrowIcon /></b></Link>)}</div>
      </section>
    </article><Footer lang="en" /></main>;
}

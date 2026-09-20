import ArrowIcon from "../../../arrow-icon";
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
    cs: "titan-vs-chirurgicka-ocel", tag: "MATERIAL / 04 MIN", title: "ASTM F-136 titanium vs. surgical steel",
    lead: "Two silver-colored pieces may look similar while differing in composition, weight and suitability for a fresh piercing.",
    sections: [["What ASTM F-136 means", "It is a standard for a titanium alloy also used for surgical implants. The material is light, durable and biocompatible."],["Why the finish matters", "The right material is only part of the picture. A smooth, precisely polished surface reduces mechanical irritation."],["What we use at Black Lotus", "For initial application we choose ASTM F-136 implant-grade titanium and dimensions suited to your anatomy and expected swelling."]],
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
    cs: "piercing-u-nezletilych", tag: "MINORS / 05 MIN", title: "Piercing for minors",
    lead: "Conditions depend on age, piercing type and the presence of a legal guardian.",
    sections: [["What to bring", "Valid identification for both the minor and legal guardian. The guardian must remain present throughout the visit."],["Age limits", "Not every piercing is available at every age. Confirm the exact conditions before booking."],["Remote consent is not enough", "We do not accept written consent without the legal guardian being physically present."]],
  },
  "anatomy-and-piercing": {
    cs: "proc-neni-kazdy-piercing-pro-kazdeho", tag: "ANATOMY / 07 MIN", title: "Why not every piercing suits everyone",
    lead: "Good placement is more than an aesthetic choice. Tissue shape, space and angle affect stability and healing.",
    sections: [["Anatomy before trends", "A reference photo can inspire, but it cannot simply be copied onto another body. We first assess shape and available tissue."],["Angle and pressure", "An unsuitable angle or long-term pressure may lead to irritation, migration or rejection."],["An alternative may be better", "If the original idea is unsafe, we suggest a placement or piece with a similar effect and a better prognosis."]],
  },
} as const;

export function generateStaticParams() { return Object.keys(articles).map(article => ({ article })); }

export default async function Article({ params }: { params: Promise<{ article: string }> }) {
  const { article } = await params;
  const data = articles[article as keyof typeof articles];
  if (!data) notFound();
  return <main><Header lang="en" slug={`journal/${article}`} switchSlug={`journal/${data.cs}`} />
    <article className="article-page frame">
      <div className="article-hero"><p>{data.tag}</p><h1>{data.title}</h1><strong>{data.lead}</strong></div>
      <div className="article-body">{data.sections.map(([title,text],i)=><section key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h2>{title}</h2><p>{text}</p></div></section>)}</div>
      <div className="article-cta"><p>Have a question about your piercing?</p><Link href="/en/booking" className="button button-light">BOOK A CONSULTATION <ArrowIcon /></Link></div>
      <Link href="/en/journal" className="text-link"><ArrowIcon back /> BACK TO ALL ARTICLES</Link>
    </article><Footer lang="en" /></main>;
}

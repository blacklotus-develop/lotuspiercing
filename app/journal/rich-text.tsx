import Link from "../native-link";

// Text článku: prázdný řádek ("\n\n") = nový odstavec, [text](/adresa) = odkaz.
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

function withLinks(text: string) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const [whole, label, href] = match;
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    parts.push(<Link key={index} href={href}>{label}</Link>);
    last = index + whole.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export default function RichText({ text }: { text: string }) {
  return <>{text.split("\n\n").map((paragraph, i) => <p key={i}>{withLinks(paragraph)}</p>)}</>;
}

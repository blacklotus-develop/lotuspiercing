export default function ArrowIcon({ back = false }: { back?: boolean }) {
  return <svg aria-hidden="true" focusable="false" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "-0.12em", flexShrink: 0 }}>
    <path d={back ? "M19 12H5m7-7-7 7 7 7" : "M5 19 19 5M5 5h14v14"} />
  </svg>;
}

import type { ComponentProps } from "react";

export default function NativeLink(props: ComponentProps<"a">) {
  return <a {...props} />;
}

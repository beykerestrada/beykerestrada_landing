// components/Section.tsx
import React from "react";

type Props = React.PropsWithChildren<{
    id?: string;
    className?: string;
    tone?: "plain" | "surface" | "elevated";
    wide?: boolean;
}>;

export default function Section({ id, className, tone = "plain", wide = false, children }: Props) {
  const toneClass =
    tone === "plain"
      ? "bg-transparent"
      : tone === "surface"
        ? "bg-neutral-950/50"
        : "bg-neutral-900/50";

  return (
    <section
      id={id}
      className={`section-pad-lg ${toneClass} ${className ?? ""}`}
    >
      <div className={wide ? "" : "container"}>
        {children}
      </div>
    </section>
  );
}

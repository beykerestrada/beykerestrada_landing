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
      ? ""
      : tone === "surface"
        ? "surface-ghost"
        : "surface";

  return (
    <section id={id} className={`section-pad ${className ?? ""}`}>
      <div className={wide ? "" : "container"}>
        {tone === "plain" ? (
          children
        ) : (
          <div className={`${toneClass} tone-shell`}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

import * as React from "react";

type SectionHeaderProps = React.HTMLAttributes<HTMLElement> & {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children,
  ...props
}: SectionHeaderProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  const stackWidth = align === "center" ? "max-w-2xl" : "max-w-3xl";

  const classes = ["flex flex-col gap-4", alignment, className].filter(Boolean).join(" ");

  return (
    <header className={classes} {...props}>
      {eyebrow && (
        <span className="inline-flex items-center rounded-full border border-border/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          {eyebrow}
        </span>
      )}

      <div className={["flex flex-col gap-3", stackWidth].join(" ")}>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {children && <div className="w-full">{children}</div>}
    </header>
  );
}

import * as React from "react";

type Tone = "solid" | "muted";

type CardShellProps<T extends React.ElementType = "article"> = {
  as?: T;
  tone?: Tone;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

const toneStyles: Record<Tone, string> = {
  solid: "bg-card border-border",
  muted: "bg-muted border-transparent",
};

export default function CardShell<T extends React.ElementType = "article">({
  as,
  tone = "solid",
  className,
  children,
  ...props
}: CardShellProps<T>) {
  const Component = (as ?? "article") as React.ElementType;
  const classes = [
    "rounded-2xl border shadow-card p-6 md:p-8 transition-shadow duration-base ease-soft",
    "hover:shadow-subtle focus-within:shadow-subtle",
    toneStyles[tone],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

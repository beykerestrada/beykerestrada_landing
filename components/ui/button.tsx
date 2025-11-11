import * as React from "react";

type Variant = "primary" | "ghost" | "muted";

type ButtonProps<T extends React.ElementType = "button"> = {
  as?: T;
  variant?: Variant;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className">;

const variantStyles: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:opacity-95 shadow-subtle",
  ghost: "bg-transparent text-foreground hover:bg-muted",
  muted: "bg-muted text-foreground hover:bg-muted/80",
};

export default function Button<T extends React.ElementType = "button">({
  as,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps<T>) {
  const Component = (as ?? "button") as React.ElementType;
  const classes = [
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium",
    "transition duration-base ease-soft",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:opacity-60 disabled:cursor-not-allowed",
    variantStyles[variant],
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

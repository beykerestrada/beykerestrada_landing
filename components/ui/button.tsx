import type * as React from "react"

type Variant = "primary" | "ghost" | "muted" | "brand"
type Size = "default" | "lg" | "sm"

type ButtonProps<T extends React.ElementType = "button"> = {
  as?: T
  variant?: Variant
  size?: Size
  className?: string
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className">

const variantStyles: Record<Variant, string> = {
  primary: "bg-[hsl(var(--brand))] text-[hsl(var(--brand-fg))] hover:bg-[hsl(var(--brand))/0.85] shadow-sm hover:shadow-md",
  ghost:
    "border border-border text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))]",
  muted: "bg-[hsl(var(--muted))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))/0.9]",
  brand: "bg-[hsl(var(--brand))] text-[hsl(var(--brand-fg))] hover:bg-[hsl(var(--brand))/0.85] shadow-sm hover:shadow-md",
}

const sizeStyles: Record<Size, string> = {
  default: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
  sm: "px-4 py-2 text-xs",
}

export default function Button<T extends React.ElementType = "button">({
  as,
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: ButtonProps<T>) {
  const Component = (as ?? "button") as React.ElementType
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
    "active:scale-[0.97]",
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}

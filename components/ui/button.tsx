import type * as React from "react"
import { ArrowUpRight } from "lucide-react"

type Variant = "primary" | "ghost" | "muted" | "brand"
type Size = "default" | "lg" | "sm"

type ButtonProps<T extends React.ElementType = "button"> = {
  as?: T
  variant?: Variant
  size?: Size
  showArrow?: boolean
  className?: string
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className">

const variantStyles: Record<Variant, string> = {
  primary: "bg-neutral-900 text-white hover:bg-neutral-800 shadow-lg hover:shadow-xl",
  ghost: "border-2 border-neutral-700 text-white hover:bg-neutral-900 hover:border-white",
  muted: "bg-neutral-800 text-white hover:bg-neutral-700 border-2 border-neutral-800 hover:border-neutral-700",
  brand: "bg-white text-black hover:bg-neutral-100 shadow-lg hover:shadow-xl border-2 border-white",
}

const sizeStyles: Record<Size, string> = {
  default: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  sm: "px-5 py-2.5 text-sm",
}

export default function Button<T extends React.ElementType = "button">({
  as,
  variant = "primary",
  size = "default",
  showArrow = false,
  className,
  children,
  ...props
}: ButtonProps<T>) {
  const Component = (as ?? "button") as React.ElementType
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
    "hover:-translate-y-1 active:translate-y-0",
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <Component className={classes} {...props}>
      {children}
      {showArrow && (
        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </Component>
  )
}

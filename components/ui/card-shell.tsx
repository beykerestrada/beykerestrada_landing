import type * as React from "react"

type Tone = "solid" | "muted"

type CardShellProps<T extends React.ElementType = "article"> = {
  as?: T
  tone?: Tone
  className?: string
  children?: React.ReactNode
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">

const toneStyles: Record<Tone, string> = {
  solid: "bg-card border-border/60",
  muted: "bg-muted/40 border-border/40",
}

export default function CardShell<T extends React.ElementType = "article">({
  as,
  tone = "solid",
  className,
  children,
  ...props
}: CardShellProps<T>) {
  const Component = (as ?? "article") as React.ElementType
  const classes = [
    "rounded-xl border p-8 md:p-10 transition-all duration-200 ease-out",
    "shadow-subtle hover:shadow-card hover:border-border/80 hover:-translate-y-0.5",
    toneStyles[tone],
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

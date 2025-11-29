import type * as React from "react"

type SectionHeaderProps = React.HTMLAttributes<HTMLElement> & {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children,
  ...props
}: SectionHeaderProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left"
  const stackWidth = align === "center" ? "  mx-auto" : "max-w-3xl"

  const classes = ["flex flex-col gap-6", alignment, className].filter(Boolean).join(" ")

  return (
    <header className={classes} {...props}>
      {eyebrow && (
        <span className="inline-flex items-center bg-white text-neutral-600 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-neutral-200">
          {eyebrow}
        </span>
      )}

      <div className={["flex flex-col gap-8 pb-8", stackWidth].join(" ")}>
        <h2 className="text-balance text-4xl font-bold leading-[1.15] tracking-tighter text-foreground md:text-5xl lg:text-6xl">
          {title}
        </h2>
        {description && (
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">{description}</p>
        )}
      </div>

      {children && <div className="w-full">{children}</div>}
    </header>
  )
}

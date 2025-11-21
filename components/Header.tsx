"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Container from "@/components/ui/container"
import { useTranslations } from "./TranslationProvider"

export default function Header() {
  const pathname = usePathname()
  const dictionary = useTranslations()
  const header = dictionary.header

  const currentLocale = pathname.split("/")[1] || "en"

  const buildLocalizedPath = (locale: string) => {
    const segments = pathname.split("/")
    segments[1] = locale
    return segments.join("/") || "/"
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <Container className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link
            href={`/${currentLocale}`}
            className="text-base font-bold tracking-tight text-foreground transition-colors hover:text-foreground/70"
          >
            {header.brand}
          </Link>
          <a
            href="https://www.upwork.com/freelancers/~01577deb572030ada8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-border bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(var(--brand))] shadow-sm transition hover:border-[hsl(var(--brand))] md:hidden"
          >
            {header.hireCta}
          </a>
        </div>

        <nav className="order-last -mx-4 flex overflow-x-auto whitespace-nowrap border-y border-transparent px-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground md:order-none md:mx-0 md:border-none md:px-0 md:text-sm md:normal-case md:tracking-tight">
          <Link href={`/${currentLocale}#services`} className="mr-6 flex items-center py-1 text-[hsl(var(--brand))] transition-opacity hover:opacity-70 last:mr-0">
            {header.nav.services}
          </Link>
          <Link href={`/${currentLocale}#value`} className="mr-6 flex items-center py-1 text-[hsl(var(--brand))] transition-opacity hover:opacity-70 last:mr-0">
            {header.nav.value}
          </Link>
          <Link href={`/${currentLocale}#process`} className="mr-6 flex items-center py-1 text-[hsl(var(--brand))] transition-opacity hover:opacity-70 last:mr-0">
            {header.nav.process}
          </Link>
          <Link href={`/${currentLocale}#contact`} className="mr-6 flex items-center py-1 text-[hsl(var(--brand))] transition-opacity hover:opacity-70 last:mr-0">
            {header.nav.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:flex">
            {Object.entries(header.languageNames).map(([locale, name]) => (
              <Link
                key={locale}
                href={buildLocalizedPath(locale)}
                hrefLang={locale}
                prefetch={false}
                locale={false}
                className={
                  locale === currentLocale
                    ? "text-[hsl(var(--brand))]"
                    : "transition-colors hover:text-[hsl(var(--brand))]"
                }
              >
                {name}
              </Link>
            ))}
          </div>

          <a
            href="https://www.upwork.com/freelancers/~01577deb572030ada8"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center rounded-lg bg-[hsl(var(--brand))] px-5 py-2 text-sm font-semibold text-[hsl(var(--brand-fg))] shadow-sm transition-all hover:bg-[hsl(var(--brand))/0.85] hover:shadow-md active:scale-[0.97] md:inline-flex"
          >
            {header.hireCta}
          </a>
        </div>
      </Container>
    </header>
  )
}

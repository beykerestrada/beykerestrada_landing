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
      <Container className="flex items-center justify-between py-4">
        <Link
          href={`/${currentLocale}`}
          className="text-base font-bold tracking-tight text-foreground transition-colors hover:text-foreground/70"
        >
          {header.brand}
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <Link href={`/${currentLocale}#services`} className="transition-colors hover:text-foreground">
            {header.nav.services}
          </Link>
          <Link href={`/${currentLocale}#value`} className="transition-colors hover:text-foreground">
            {header.nav.value}
          </Link>
          <Link href={`/${currentLocale}#process`} className="transition-colors hover:text-foreground">
            {header.nav.process}
          </Link>
          <Link href={`/${currentLocale}#contact`} className="transition-colors hover:text-foreground">
            {header.nav.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.upwork.com/freelancers/~01577deb572030ada8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-brand px-5 py-2 text-sm font-semibold text-brand-foreground shadow-sm transition-all hover:bg-brand/90 hover:shadow-md active:scale-[0.97]"
          >
            {header.hireCta}
          </a>

          <div className="hidden items-center gap-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:flex">
            {Object.entries(header.languageNames).map(([locale, name]) => (
              <Link
                key={locale}
                href={buildLocalizedPath(locale)}
                hrefLang={locale}
                prefetch={false}
                locale={false}
                className={locale === currentLocale ? "text-foreground" : "transition-colors hover:text-foreground"}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </header>
  )
}

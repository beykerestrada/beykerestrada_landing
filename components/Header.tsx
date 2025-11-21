"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Container from "@/components/ui/container"
import { useTranslations } from "./TranslationProvider"
import { ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)
  const pathname = usePathname()
  const dictionary = useTranslations()
  const header = dictionary.header

  const currentLocale = pathname.split("/")[1] || "en"

  const buildLocalizedPath = (locale: string) => {
    const segments = pathname.split("/")
    segments[1] = locale
    return segments.join("/") || "/"
  }

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <Container className="relative py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${currentLocale}`}
            className="text-base font-bold tracking-tight text-foreground transition-colors hover:text-foreground/70"
          >
            {header.brand}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href={`/${currentLocale}#services`}
              className="text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              {header.nav.services}
            </Link>
            <Link
              href={`/${currentLocale}#value`}
              className="text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              {header.nav.value}
            </Link>
            <Link
              href={`/${currentLocale}#process`}
              className="text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              {header.nav.process}
            </Link>
            <Link
              href={`/${currentLocale}#contact`}
              className="text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              {header.nav.contact}
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                onBlur={() => setTimeout(() => setIsLangDropdownOpen(false), 150)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border/40 bg-background px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:border-[hsl(var(--brand))/40] hover:text-foreground"
                aria-label="Language selector"
                aria-expanded={isLangDropdownOpen}
              >
                {header.languageNames[currentLocale as keyof typeof header.languageNames]}
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-200 ${
                    isLangDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isLangDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-24 rounded-lg border border-border/40 bg-background shadow-lg">
                  {Object.entries(header.languageNames).map(([locale, name]) => (
                    <Link
                      key={locale}
                      href={buildLocalizedPath(locale)}
                      hrefLang={locale}
                      prefetch={false}
                      className={`block px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        locale === currentLocale
                          ? "bg-[hsl(var(--brand))/10] text-[hsl(var(--brand))]"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      }`}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Hire CTA */}
            <a
              href="https://www.upwork.com/freelancers/~01577deb572030ada8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent/90 hover:shadow-md active:scale-[0.97]"
            >
              {header.hireCta}
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col items-center justify-center gap-1.5 p-2 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 right-0 top-full border-b border-border/40 bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-1 px-4 py-6">
            <Link
              href={`/${currentLocale}#services`}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent"
            >
              {header.nav.services}
            </Link>
            <Link
              href={`/${currentLocale}#value`}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent"
            >
              {header.nav.value}
            </Link>
            <Link
              href={`/${currentLocale}#process`}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent"
            >
              {header.nav.process}
            </Link>
            <Link
              href={`/${currentLocale}#contact`}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent"
            >
              {header.nav.contact}
            </Link>

            {/* Mobile Language Switcher */}
            <div className="border-t border-border/40 px-4 pt-4">
              <div className="flex gap-2">
                {Object.entries(header.languageNames).map(([locale, name]) => (
                  <Link
                    key={locale}
                    href={buildLocalizedPath(locale)}
                    onClick={closeMenu}
                    hrefLang={locale}
                    prefetch={false}
                    className={`flex-1 rounded-lg border px-4 py-2 text-center text-xs font-semibold uppercase tracking-wider transition-colors ${
                      locale === currentLocale
                        ? "border-[hsl(var(--brand))] bg-[hsl(var(--brand))/10] text-[hsl(var(--brand))]"
                        : "border-border/40 text-muted-foreground hover:border-[hsl(var(--brand))/40] hover:bg-muted/50 hover:text-foreground"
                    }`}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile CTA */}
            <a
              href="https://www.upwork.com/freelancers/~01577deb572030ada8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mx-4 mt-4 inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent/90 active:scale-[0.97]"
            >
              {header.hireCta}
            </a>
          </nav>
        </div>
      </Container>
    </header>
  )
}

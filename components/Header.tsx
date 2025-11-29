"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Container from "@/components/ui/container"
import { useTranslations } from "./TranslationProvider"
import { ChevronDown, Menu, X } from "lucide-react"

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
    <header className="sticky top-0 z-50 border-b bg-[var(--bg-surface)]/95 backdrop-blur-md" style={{ borderColor: 'var(--border-subtle)' }}>
      <Container className="relative py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${currentLocale}`}
            className="text-base font-semibold tracking-tight transition-colors" style={{ color: 'var(--text-main)' }}
          >
            {header.brand}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href={`/${currentLocale}#services`}
              className="text-sm font-normal transition-colors" style={{ color: 'var(--text-muted)' }}
            >
              {header.nav.services}
            </Link>
            <Link
              href={`/${currentLocale}#value`}
              className="text-sm font-normal transition-colors" style={{ color: 'var(--text-muted)' }}
            >
              {header.nav.value}
            </Link>
            <Link
              href={`/${currentLocale}#process`}
              className="text-sm font-normal transition-colors" style={{ color: 'var(--text-muted)' }}
            >
              {header.nav.process}
            </Link>
            <Link
              href={`/${currentLocale}#contact`}
              className="text-sm font-normal transition-colors" style={{ color: 'var(--text-muted)' }}
            >
              {header.nav.contact}
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                onBlur={() => setTimeout(() => setIsLangDropdownOpen(false), 150)}
                className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition-all"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-muted)'
                }}
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
                <div className="absolute right-0 top-full mt-1 w-24 rounded-lg border shadow-lg" style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--bg-surface)' }}>
                  {Object.entries(header.languageNames).map(([locale, name]) => (
                    <Link
                      key={locale}
                      href={buildLocalizedPath(locale)}
                      hrefLang={locale}
                      prefetch={false}
                      className={`block px-3 py-2 text-xs font-medium transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        locale === currentLocale
                          ? ""
                          : ""
                      }`}
                      style={{
                        backgroundColor: locale === currentLocale ? 'var(--bg-surface-alt)' : 'transparent',
                        color: locale === currentLocale ? 'var(--text-main)' : 'var(--text-muted)'
                      }}
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
              className="inline-flex items-center gap-2 rounded-md px-4 py-1.5 text-sm font-medium transition-all"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--accent-inverse)'
              }}
            >
              {header.hireCta}
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center p-2 transition-colors md:hidden" style={{ color: 'var(--text-main)' }}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 right-0 top-full border-b backdrop-blur-md transition-all duration-300 md:hidden ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 overflow-hidden opacity-0"
          }`}
          style={{
            borderColor: 'var(--border-subtle)',
            backgroundColor: 'var(--bg-surface)'
          }}
        >
          <nav className="flex flex-col space-y-0.5 px-4 py-4">
            <Link
              href={`/${currentLocale}#services`}
              onClick={closeMenu}
              className="rounded-md px-3 py-2 text-sm font-normal transition-colors" style={{ color: 'var(--text-muted)' }}
            >
              {header.nav.services}
            </Link>
            <Link
              href={`/${currentLocale}#value`}
              onClick={closeMenu}
              className="rounded-md px-3 py-2 text-sm font-normal transition-colors" style={{ color: 'var(--text-muted)' }}
            >
              {header.nav.value}
            </Link>
            <Link
              href={`/${currentLocale}#process`}
              onClick={closeMenu}
              className="rounded-md px-3 py-2 text-sm font-normal transition-colors" style={{ color: 'var(--text-muted)' }}
            >
              {header.nav.process}
            </Link>
            <Link
              href={`/${currentLocale}#contact`}
              onClick={closeMenu}
              className="rounded-md px-3 py-2 text-sm font-normal transition-colors" style={{ color: 'var(--text-muted)' }}
            >
              {header.nav.contact}
            </Link>

            {/* Mobile Language Switcher */}
            <div className="border-t px-4 pt-3" style={{ borderColor: 'var(--border-subtle)' }}>
              <div className="flex gap-2">
                {Object.entries(header.languageNames).map(([locale, name]) => (
                  <Link
                    key={locale}
                    href={buildLocalizedPath(locale)}
                    onClick={closeMenu}
                    hrefLang={locale}
                    prefetch={false}
                    className="flex-1 rounded-md border px-3 py-2 text-center text-xs font-medium transition-colors"
                    style={{
                      borderColor: locale === currentLocale ? 'var(--accent-primary)' : 'var(--border-subtle)',
                      backgroundColor: locale === currentLocale ? 'var(--accent-primary)' : 'transparent',
                      color: locale === currentLocale ? 'var(--accent-inverse)' : 'var(--text-muted)'
                    }}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="px-4 pt-3">
              <a
                href="https://www.upwork.com/freelancers/~01577deb572030ada8"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-all"
                style={{
                  backgroundColor: 'var(--accent-primary)',
                  color: 'var(--accent-inverse)'
                }}
              >
                {header.hireCta}
              </a>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  )
}

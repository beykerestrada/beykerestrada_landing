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
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-xl">
      <Container className="relative py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${currentLocale}`}
            className="text-lg font-bold tracking-tight text-neutral-900 transition-colors hover:text-neutral-600"
          >
            {header.brand}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href={`/${currentLocale}#services`}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {header.nav.services}
            </Link>
            <Link
              href={`/${currentLocale}#value`}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {header.nav.value}
            </Link>
            <Link
              href={`/${currentLocale}#process`}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {header.nav.process}
            </Link>
            <Link
              href={`/${currentLocale}#contact`}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
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
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-600 transition-all hover:border-neutral-300 hover:text-neutral-900"
                aria-label="Language selector"
                aria-expanded={isLangDropdownOpen}
              >
                {header.languageNames[currentLocale as keyof typeof header.languageNames]}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    isLangDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isLangDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-28 rounded-xl border border-neutral-200 bg-white shadow-xl">
                  {Object.entries(header.languageNames).map(([locale, name]) => (
                    <Link
                      key={locale}
                      href={buildLocalizedPath(locale)}
                      hrefLang={locale}
                      prefetch={false}
                      className={`block px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors first:rounded-t-xl last:rounded-b-xl ${
                        locale === currentLocale
                          ? "bg-neutral-100 text-neutral-900"
                          : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
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
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-neutral-800 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
            >
              {header.hireCta}
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center p-2 text-neutral-900 transition-colors hover:text-neutral-600 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 right-0 top-full border-b border-neutral-200 bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-1 px-4 py-6">
            <Link
              href={`/${currentLocale}#services`}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
            >
              {header.nav.services}
            </Link>
            <Link
              href={`/${currentLocale}#value`}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
            >
              {header.nav.value}
            </Link>
            <Link
              href={`/${currentLocale}#process`}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
            >
              {header.nav.process}
            </Link>
            <Link
              href={`/${currentLocale}#contact`}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
            >
              {header.nav.contact}
            </Link>

            {/* Mobile Language Switcher */}
            <div className="border-t border-neutral-200 px-4 pt-4">
              <div className="flex gap-2">
                {Object.entries(header.languageNames).map(([locale, name]) => (
                  <Link
                    key={locale}
                    href={buildLocalizedPath(locale)}
                    onClick={closeMenu}
                    hrefLang={locale}
                    prefetch={false}
                    className={`flex-1 rounded-xl border px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wider transition-colors ${
                      locale === currentLocale
                        ? "border-neutral-900 bg-neutral-900 text-white"
                        : "border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900"
                    }`}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="px-4 pt-4">
              <a
                href="https://www.upwork.com/freelancers/~01577deb572030ada8"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-800"
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

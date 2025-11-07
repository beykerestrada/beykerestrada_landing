"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "./TranslationProvider";
import { LOCALE_COOKIE } from "@/lib/i18n/dictionaries";

export default function Header() {
  const pathname = usePathname();
  const dictionary = useTranslations();
  const header = dictionary.header;

  const currentLocale = pathname.split("/")[1] || "en";

  const buildLocalizedPath = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/") || "/";
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="nav-wrapper">
          <Link href={`/${currentLocale}`} className="brand">
            {header.brand}
          </Link>

          <nav className="nav-links">
            <Link href={`/${currentLocale}#services`} className="nav-link">
              {header.nav.services}
            </Link>
            <Link href={`/${currentLocale}#value`} className="nav-link">
              {header.nav.value}
            </Link>
            <Link href={`/${currentLocale}#process`} className="nav-link">
              {header.nav.process}
            </Link>
            <Link href={`/${currentLocale}#contact`} className="nav-link">
              {header.nav.contact}
            </Link>
          </nav>

          <div className="nav-actions">
            <a
              href="https://www.upwork.com/freelancers/~01577deb572030ada8"
              target="_blank"
              rel="noopener noreferrer"
              className="hire-cta"
            >
              {header.hireCta}
            </a>

            <div className="language-switcher">
              {Object.entries(header.languageNames).map(([locale, name]) => {
                if (locale === currentLocale) return null;
                return (
                  <Link
                    key={locale}
                    href={buildLocalizedPath(locale)}
                    className="language-button"
                    hrefLang={locale}
                    prefetch={false}
                    locale={false}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// components/Header.tsx
"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale, useTranslations } from "./TranslationProvider";

type Theme = "light" | "dark";
const STORAGE_KEY = "preferred-theme";

export default function Header({ upworkUrl }: { upworkUrl: string }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
      if (stored) {
        return stored;
      }
      const prefersDark =
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  });
  const dictionary = useTranslations();
  const locale = useLocale();
  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    const root = document.documentElement;
    root.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const applyTheme = (next: Theme) => {
    const root = document.documentElement;
    root.dataset.theme = next;
    window.localStorage.setItem(STORAGE_KEY, next);
    setTheme(next);
  };

  const toggleTheme = () => {
    applyTheme(theme === "light" ? "dark" : "light");
  };

  const homeBase = `/${locale}`;
  const navItems = [
    { href: `${homeBase}#services`, label: dictionary.header.nav.services, prefetch: false },
    { href: `${homeBase}#value`, label: dictionary.header.nav.value, prefetch: false },
    { href: `${homeBase}#process`, label: dictionary.header.nav.process, prefetch: false },
    { href: `${homeBase}#contact`, label: dictionary.header.nav.contact, prefetch: false },
  ];

  return (
    <header className="header-blur sticky top-0 z-50">
      <div className="container">
        <div className="header-shell">
          <Link href={`/${locale}`} className="brand-mark">
            {dictionary.header.brand}
          </Link>

          <nav className="header-nav">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link" prefetch={item.prefetch}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-cta">
            <Suspense fallback={null}>
              <LanguageSwitcher />
            </Suspense>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={dictionary.header.themeToggle}
            >
              {theme === "light" ? <IconMoon /> : <IconSun />}
            </button>

            <a href={upworkUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              {dictionary.header.hireCta}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function IconSun() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
    >
      <path
        d="M12 5.25V3M12 21v-2.25M7.5 7.5L5.94 5.94M18.06 18.06L16.5 16.5M5.25 12H3m3.75 5.25L5.94 18.06M18.06 5.94L16.5 7.5M21 12h-2.25M16.5 12a4.5 4.5 0 1 1-9.001 0 4.5 4.5 0 0 1 9 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMoon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
    >
      <path
        d="M21 12.79A9 9 0 0 1 11.21 3a7 7 0 0 0 0 14A9 9 0 0 0 21 12.79Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

"use client";

import type { ChangeEvent } from "react";
import { useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SUPPORTED_LOCALES, LOCALE_COOKIE, Locale } from "@/lib/i18n/config";
import { useLocale, useTranslations } from "./TranslationProvider";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();
  const dictionary = useTranslations();
  const [isPending, startTransition] = useTransition();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as Locale;
    if (nextLocale === locale) {
      return;
    }

    startTransition(() => {
      const segments = pathname.split("/");
      const currentSegment = segments[1];
      const hasLocaleSegment = SUPPORTED_LOCALES.includes(currentSegment as Locale);
      const nextSegments = [...segments];
      if (hasLocaleSegment) {
        nextSegments[1] = nextLocale;
      } else {
        nextSegments.splice(1, 0, nextLocale);
      }

      let normalizedPath = nextSegments
        .filter((segment, index) => !(index > 1 && segment.length === 0))
        .join("/")
        .replace(/\/+/g, "/");

      if (normalizedPath !== "/" && normalizedPath.endsWith("/")) {
        normalizedPath = normalizedPath.slice(0, -1);
      }

      const query = searchParams.toString();
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      const href = `${normalizedPath.startsWith("/") ? "" : "/"}${normalizedPath}${query ? `?${query}` : ""}${hash}`;

      document.cookie = `${LOCALE_COOKIE}=${nextLocale}; Max-Age=${60 * 60 * 24 * 365}; Path=/`;
      router.push(href);
    });
  };

  return (
    <label className="language-switcher" aria-label={dictionary.header.languageToggle}>
      <span>{dictionary.header.languageNames[locale]}</span>
      <select
        className="language-select"
        value={locale}
        onChange={handleChange}
        disabled={isPending}
      >
        {SUPPORTED_LOCALES.map((supported) => (
          <option key={supported} value={supported}>
            {dictionary.header.languageNames[supported]}
          </option>
        ))}
      </select>
    </label>
  );
}

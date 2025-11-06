"use client";

import { createContext, useContext, useEffect } from "react";
import { Locale } from "@/lib/i18n/config";
import type { SiteDictionary } from "@/lib/i18n/dictionaries";

type TranslationContextValue = {
  locale: Locale;
  dictionary: SiteDictionary;
};

const TranslationContext = createContext<TranslationContextValue | null>(null);

type Props = TranslationContextValue & {
  children: React.ReactNode;
};

export function TranslationProvider({ locale, dictionary, children }: Props) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <TranslationContext.Provider value={{ locale, dictionary }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslations() {
  const value = useContext(TranslationContext);
  if (!value) {
    throw new Error("useTranslations must be used within TranslationProvider");
  }
  return value.dictionary;
}

export function useLocale() {
  const value = useContext(TranslationContext);
  if (!value) {
    throw new Error("useLocale must be used within TranslationProvider");
  }
  return value.locale;
}

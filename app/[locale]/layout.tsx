// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TranslationProvider } from "@/components/TranslationProvider";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { DEFAULT_LOCALE, Locale, SUPPORTED_LOCALES, isLocale } from "@/lib/i18n/config";
import "../globals.css"; 


type ParamsPromise = Promise<{ locale: string }>;

type Props = {
  children: React.ReactNode;
  params: ParamsPromise;
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: ParamsPromise }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    const fallback = getDictionary(DEFAULT_LOCALE);
    return {
      title: fallback.meta.title,
      description: fallback.meta.description,
    };
  }

  const dictionary = getDictionary(locale);

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(SUPPORTED_LOCALES.map((loc) => [loc, `/${loc}`])),
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);

  return (
    <TranslationProvider locale={locale} dictionary={dictionary}>
      {children}
    </TranslationProvider>
  );
}

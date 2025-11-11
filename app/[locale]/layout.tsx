import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TranslationProvider } from "@/components/TranslationProvider";
import StructuredData from "@/components/seo/StructuredData";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { DEFAULT_LOCALE, Locale, SUPPORTED_LOCALES, isLocale } from "@/lib/i18n/config";
import "../globals.css";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://beykerestrada.com").replace(/\/$/, "");
const FALLBACK_DESCRIPTION =
  "AI Automation Consultant & Systems Architect helping founders and teams automate operations, scale workflows, and build intelligent business systems.";
const FALLBACK_TITLE = "Beyker Estrada · AI Automation & Systems Architect";
const OG_IMAGE = `${SITE_URL}/og-default.jpg`;

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
      title: fallback.meta.title ?? FALLBACK_TITLE,
      description: fallback.meta.description ?? FALLBACK_DESCRIPTION,
    };
  }

  const dictionary = getDictionary(locale);
  const metaTitle = dictionary.meta.title || FALLBACK_TITLE;
  const metaDescription = dictionary.meta.description || FALLBACK_DESCRIPTION;
  const canonicalUrl = `${SITE_URL}/${locale}`;
  const ogLocale = locale === "es" ? "es_ES" : "en_US";

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(
        SUPPORTED_LOCALES.map((loc) => [loc, `${SITE_URL}/${loc}`])
      ),
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: "Beyker Estrada",
      type: "website",
      locale: ogLocale,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [OG_IMAGE],
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
      <StructuredData />
      {children}
    </TranslationProvider>
  );
}

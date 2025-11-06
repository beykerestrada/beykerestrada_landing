// app/[locale]/products/[category]/page.tsx
import Header from "@/components/Header";
import ProductLibrary from "@/components/ProductLibrary";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { DEFAULT_LOCALE, Locale, SUPPORTED_LOCALES, isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

const UPWORK = "https://www.upwork.com/freelancers/~01577deb572030ada8";

type ParamsPromise = Promise<{ locale: string; category: string }>;

export function generateStaticParams() {
  return SUPPORTED_LOCALES.flatMap((locale) => {
    const dictionary = getDictionary(locale);
    return Object.keys(dictionary.productsPage.library).map((category) => ({
      locale,
      category,
    }));
  });
}

export default async function ProductCategoryPage({ params }: { params: ParamsPromise }) {
  const { locale, category } = await params;
  const normalizedLocale: Locale = isLocale(locale) ? (locale as Locale) : DEFAULT_LOCALE;
  const dictionary = getDictionary(normalizedLocale);

  if (!dictionary.productsPage.library[category]) {
    notFound();
  }

  return (
    <main className="relative flex min-h-screen flex-col">
      <Header upworkUrl={UPWORK} />
      <ProductLibrary upworkUrl={UPWORK} categorySlug={category} />
      <Footer upworkUrl={UPWORK} />
    </main>
  );
}

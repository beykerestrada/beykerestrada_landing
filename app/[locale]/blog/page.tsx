// app/[locale]/blog/page.tsx
import Header from "@/components/Header";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import { use } from "react";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { DEFAULT_LOCALE, Locale, isLocale } from "@/lib/i18n/config";

const UPWORK = "https://www.upwork.com/freelancers/~01577deb572030ada8";

type ParamsPromise = Promise<{ locale: string }>;

export default function BlogPage({ params }: { params: ParamsPromise }) {
  const { locale } = use(params);
  const normalized: Locale = isLocale(locale) ? (locale as Locale) : DEFAULT_LOCALE;
  const dictionary = getDictionary(normalized);

  return (
    <main className="relative flex min-h-screen flex-col">
      <Header upworkUrl={UPWORK} />
      <Section className="blog-hero" tone="plain">
        <div className="container blog-hero-shell">
          <span className="section-badge">{dictionary.header.nav.blog}</span>
          <h1 className="section-title">
            Operational insights, frameworks, and playbooks coming soon.
          </h1>
          <p className="section-subtitle">
            I’m curating essays on Notion architecture, n8n automations, and systems strategy. Check back
            shortly or follow along on the product library for new releases.
          </p>
        </div>
      </Section>
      <Footer upworkUrl={UPWORK} />
    </main>
  );
}

"use client";

// components/ProductLibrary.tsx
import Link from "next/link";
import Section from "./Section";
import { useLocale, useTranslations } from "./TranslationProvider";

type Props = {
  upworkUrl: string;
  categorySlug?: string;
};

export default function ProductLibrary({ upworkUrl, categorySlug }: Props) {
  const dictionary = useTranslations();
  const locale = useLocale();
  const products = dictionary.productsPage;

  const categories = products.categories.items;
  const activeCategory = categorySlug ? products.library[categorySlug] : undefined;
  const categoryMeta = categorySlug ? categories.find((item) => item.slug === categorySlug) : undefined;
  const isCategoryView = Boolean(categorySlug && activeCategory);

  if (categorySlug && !activeCategory) {
    return (
      <div className="products-page">
        <section className="products-hero category">
          <div className="container products-hero-shell">
            <div>
              <Link href={`/${locale}/products`} className="products-back">
                ← {products.backToLibrary}
              </Link>
              <h1>{products.hero.title}</h1>
              <p className="hero-sub">{products.hero.subtitle}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (isCategoryView && activeCategory) {
    return (
      <div className="products-page">
        <section className="products-hero category">
          <div className="container products-hero-shell">
            <div>
              <Link href={`/${locale}/products`} className="products-back">
                ← {products.backToLibrary}
              </Link>
              {categoryMeta && <span className="products-type">{categoryMeta.type}</span>}
              <h1>{activeCategory.title}</h1>
              <p className="hero-sub">{activeCategory.description}</p>
            </div>
            <a href={upworkUrl} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
              {products.hero.cta}
            </a>
          </div>
        </section>

        <Section tone="plain" className="products-category">
          <div className="products-items">
            {activeCategory.items.map((item) => (
              <article key={item.title} className="products-detail-card">
                <div className="products-detail-head">
                  <span className="products-type">{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
                <ul className="products-feature-list">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <a
                  href={item.href ?? upworkUrl}
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.action}
                </a>
              </article>
            ))}
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="container products-hero-shell">
          <div>
            <h1>{products.hero.title}</h1>
            <p className="hero-sub">{products.hero.subtitle}</p>
            <p className="hero-desc">{products.hero.description}</p>
          </div>
          <a href={upworkUrl} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
            {products.hero.cta}
          </a>
        </div>
      </section>

      <Section tone="plain" className="products-intro">
        <div className="products-intro-shell">
          <h2>{products.intro.title}</h2>
          <p>{products.intro.description}</p>
        </div>

        <div className="products-grid">
          {categories.map((item) => (
            <article key={item.slug} className="products-card">
              <span className="products-type">{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <Link href={`/${locale}/products/${item.slug}`} className="btn btn-ghost btn-sm" prefetch>
                {item.linkText}
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}

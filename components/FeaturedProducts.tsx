"use client";

// components/FeaturedProducts.tsx
import Link from "next/link";
import Section from "./Section";
import { useLocale, useTranslations } from "./TranslationProvider";

export default function FeaturedProducts() {
  const dictionary = useTranslations();
  const locale = useLocale();
  const featured = dictionary.featuredProducts;

  return (
    <Section id="products-preview" className="featured-products" tone="surface">
      <div className="featured-header">
        <div>
          <span className="section-badge">{featured.badge}</span>
          <h2 className="section-title">{featured.title}</h2>
          <p className="section-subtitle">{featured.subtitle}</p>
        </div>
        <Link href={`/${locale}/products`} className="btn btn-primary">
          {featured.cta}
        </Link>
      </div>

      <div className="featured-grid">
        {featured.items.map((item) => (
          <article key={item.title} className="featured-card">
            <span className="featured-type">{item.type}</span>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

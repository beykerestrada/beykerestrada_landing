"use client";

// components/Value.tsx
import Section from "./Section";
import { useTranslations } from "./TranslationProvider";

export default function Value() {
  const dictionary = useTranslations();
  const value = dictionary.value;

  return (
    <Section id="value" className="value">
      <div className="value-headline">
        <span className="section-badge">{value.badge}</span>
        <h2 className="section-title">{value.title}</h2>
        <p className="section-subtitle">{value.subtitle}</p>
      </div>

      <div className="value-grid">
        {value.cards.map((item, index) => (
          <article key={item.title} className="value-card">
            <span className="value-index">{index + 1}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

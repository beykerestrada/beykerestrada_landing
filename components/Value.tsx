"use client";

import { useTranslations } from "./TranslationProvider";

export default function Value() {
  const dictionary = useTranslations();
  const value = dictionary.value;

  return (
    <section className="section-pad-lg">
      <div className="container">
        <span className="section-badge">{value.badge}</span>
        <h2 className="section-title">{value.title}</h2>
        <p className="section-subtitle">{value.subtitle}</p>

        <div className="method-steps">
          {value.cards.map((card, idx) => (
            <div key={idx} className="method-step">
              <h3 className="step-title">{card.title}</h3>
              <p className="step-description">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

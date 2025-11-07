"use client";

import { useTranslations } from "./TranslationProvider";

export default function Services() {
  const dictionary = useTranslations();
  const services = dictionary.services;

  return (
    <section className="section-pad-lg">
      <div className="container">
        <span className="section-badge">{services.badge}</span>
        <h2 className="section-title">{services.title}</h2>
        <p className="section-subtitle">{services.subtitle}</p>

        <div className="method-steps">
          {services.cards.map((card, idx) => (
            <div key={idx} className="method-step">
              <h3 className="step-title">{card.title}</h3>
              <p className="step-description">{card.summary}</p>
              <ul className="step-description">
                {card.bullets.map((bullet, i) => (
                  <li key={i}>• {bullet}</li>
                ))}
              </ul>
              <p className="step-price">{services.fromLabel} {card.price}</p>
            </div>
          ))}
        </div>

        <div className="method-step addon-box">
          <span className="section-badge">{services.addon.badge}</span>
          <h3 className="step-title">{services.addon.title}</h3>
          <p className="step-description">{services.addon.summary}</p>
          <button className="btn-primary mt-2">{services.addon.cta}</button>
        </div>
      </div>
    </section>
  );
}

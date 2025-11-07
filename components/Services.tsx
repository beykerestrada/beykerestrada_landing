"use client";

import { useTranslations } from "./TranslationProvider";

type Props = {
  upworkUrl: string;
  consultationUrl: string;
};

export default function Services({ upworkUrl, consultationUrl }: Props) {
  const dictionary = useTranslations();
  const services = dictionary.services;

  return (
    <section className="section-pad-lg" id="services">
      <div className="container">
        <span className="section-badge">{services.badge}</span>
        <h2 className="section-title">{services.title}</h2>
        <p className="p-lg mb-10 max-w-2xl">{services.subtitle}</p>

        <div className="workflow-grid">
          {services.cards.map((card, idx) => (
            <div key={idx} className="workflow-card">
              <h3 className="step-title">{card.title}</h3>
              <p className="step-description mb-3">{card.summary}</p>
              <ul className="list-disc list-inside mb-2 text-sm text-muted">
                {card.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
              <p className="step-price">
                {services.fromLabel} {card.price}
              </p>
            </div>
          ))}
        </div>

        {/* Add-on block */}
        <div className="addon-box">
          <span className="section-badge">{services.addon.badge}</span>
          <h3 className="step-title mt-2">{services.addon.title}</h3>
          <p className="step-description mb-4">{services.addon.summary}</p>
          <a
            href={consultationUrl}
            className="btn btn-ghost inline-block mt-2"
            target="_blank"
          >
            {services.addon.cta}
          </a>
        </div>

        {/* CTA */}
        <div className="services-cta mt-12 flex flex-wrap gap-4">
          <a href={upworkUrl} className="btn btn-primary" target="_blank">
            {services.learnMoreCta}
          </a>
          <a
            href={consultationUrl}
            className="btn btn-ghost"
            target="_blank"
          >
            {services.addon.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useTranslations } from "./TranslationProvider";

export default function FinalCta() {
  const dictionary = useTranslations();
  const final = dictionary.finalCta;

  return (
    <section className="section-pad-lg final-cta-section">
      <div className="container">
        <div className="final-cta-card">
          <span className="section-badge">{final.badge}</span>
          <h2 className="section-title">{final.title}</h2>
          <p className="section-subtitle">{final.subtitle}</p>

          <div className="cta-actions">
            <a
              href="https://www.upwork.com/freelancers/~01577deb572030ada8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {final.primaryCta}
            </a>
            <a
              href="#contact"
              className="btn-secondary"
            >
              {final.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

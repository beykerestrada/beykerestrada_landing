"use client";

import { useTranslations } from "./TranslationProvider";

export default function Process() {
  const dictionary = useTranslations();
  const process = dictionary.process;

  return (
    <section className="section-pad-lg">
      <div className="container">
        <span className="section-badge">{process.badge}</span>
        <h2 className="section-title">{process.title}</h2>
        <p className="section-subtitle">{process.subtitle}</p>

        <div className="method-steps">
          {process.steps.map((step, idx) => (
            <div key={idx} className="method-step">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

// components/Process.tsx
import Section from "./Section";
import { useTranslations } from "./TranslationProvider";

export default function Process() {
  const dictionary = useTranslations();
  const process = dictionary.process;

  return (
    <Section id="process" className="process">
      <div className="section-heading">
        <span className="section-badge">{process.badge}</span>
        <h2 className="section-title">{process.title}</h2>
        <p className="section-subtitle">{process.subtitle}</p>
      </div>

      <ol className="process-track">
        {process.steps.map((step, index) => (
          <li key={step.title} className="process-step">
            <div className="process-step-marker">
              <span>{index + 1}</span>
            </div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

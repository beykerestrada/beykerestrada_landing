"use client";

// components/FinalCTA.tsx
import Section from "./Section";
import { useTranslations } from "./TranslationProvider";

type Props = { upworkUrl: string; calendlyUrl?: string };

export default function FinalCTA({ upworkUrl, calendlyUrl }: Props) {
  const dictionary = useTranslations();
  const finalCta = dictionary.finalCta;

  return (
    <Section id="contact" className="final-cta">
      <div className="final-cta-shell">
        <div className="final-cta-copy">
          <span className="section-badge">{finalCta.badge}</span>
          <h2>{finalCta.title}</h2>
          <p>{finalCta.subtitle}</p>
        </div>
        <div className="final-cta-actions">
          <a href={upworkUrl} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
            {finalCta.primaryCta}
          </a>
          {calendlyUrl && (
            <a href={calendlyUrl} className="btn btn-ghost btn-lg" target="_blank" rel="noopener noreferrer">
              {finalCta.secondaryCta}
            </a>
          )}
        </div>
      </div>
    </Section>
  );
}

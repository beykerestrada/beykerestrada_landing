"use client";

import { useTranslations } from "./TranslationProvider";

type Props = {
  upworkUrl: string;
  calendlyUrl?: string;
};

export default function FinalCTA({ upworkUrl, calendlyUrl }: Props) {
  const dictionary = useTranslations();
  const final = dictionary.finalCta;

  return (
    <section className="section-pad-lg">
      <div className="container center-content">
        <h2 className="section-title">{final.title}</h2>
        <p className="section-description">{final.subtitle}</p>

        <div className="cta-buttons">
          <a href={upworkUrl} className="btn btn-primary" target="_blank">
            {final.primaryCta}
          </a>
          {calendlyUrl && (
            <a href={calendlyUrl} className="btn btn-ghost" target="_blank">
              {final.secondaryCta}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

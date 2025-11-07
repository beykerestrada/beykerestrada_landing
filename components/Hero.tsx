"use client";

import { useTranslations } from "./TranslationProvider";

type Props = {
  upworkUrl: string;
  calendlyUrl?: string;
};

export default function Hero({ upworkUrl, calendlyUrl }: Props) {
  const dictionary = useTranslations();
  const hero = dictionary.hero;

  return (
    <section className="section-pad-lg">
      <div className="container" style={{ maxWidth: "820px" }}>
        <h1
          className="h0"
          style={{
            marginBottom: "2.4rem",
            lineHeight: "1.15",
            letterSpacing: "-0.015em",
          }}
        >
          {hero.title}
        </h1>

        <p
          className="p-lg"
          style={{
            marginBottom: "3.2rem",
            fontSize: "18px",
            lineHeight: "1.75",
            color: "var(--muted)",
          }}
        >
          {hero.subtitle}
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href={upworkUrl}
            className="btn btn-primary btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            {hero.primaryCta}
          </a>

          {calendlyUrl && (
            <a
              href={calendlyUrl}
              className="btn btn-ghost btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.secondaryCta}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

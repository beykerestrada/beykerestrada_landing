"use client";

// components/Hero.tsx
import { useTranslations } from "./TranslationProvider";

type Props = {
  upworkUrl: string;
  calendlyUrl?: string;
};

export default function Hero({ upworkUrl, calendlyUrl }: Props) {
  const dictionary = useTranslations();
  const hero = dictionary.hero;

  return (
    <section className="section-pad-lg hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-badge">{hero.badge}</span>
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>

          <div className="hero-actions">
            <a href={upworkUrl} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">
              {hero.primaryCta}
            </a>
            {calendlyUrl && (
              <a href={calendlyUrl} className="btn btn-ghost btn-lg" target="_blank" rel="noopener noreferrer">
                {hero.secondaryCta}
              </a>
            )}
          </div>

          <ul className="hero-points">
            {hero.points.map((point) => (
              <li key={point}>
                <span className="hero-dot" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <div className="hero-frame hero-frame-primary">
            <div className="frame-header">
              <div className="frame-title">
                <span className="frame-indicator frame-indicator--primary" />
                Ops Control Room
              </div>
              <span className="frame-tag">Notion</span>
            </div>
            <div className="frame-body">
              <div className="skeleton-line skeleton-line--wide" />
              <div className="skeleton-line skeleton-line--medium" />
              <div className="frame-grid">
                {[1, 2, 3].map((id) => (
                  <div key={`card-${id}`} className="frame-card">
                    <span className="skeleton-line skeleton-line--short" />
                    <span className="skeleton-line skeleton-line--tiny" />
                    <div className="frame-metric">
                      <span className="frame-metric-value">↑ {36 + id}%</span>
                      <span className="frame-metric-label">Week-over-week</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-frame hero-frame-secondary">
            <div className="frame-header">
              <div className="frame-title">
                <span className="frame-indicator frame-indicator--secondary" />
                Lead routing automation
              </div>
              <span className="frame-tag">n8n flow</span>
            </div>
            <div className="frame-body">
              <div className="flow-map">
                <div className="flow-node flow-node--source">Webhook Intake</div>
                <div className="flow-connector" />
                <div className="flow-node flow-node--action">Enrich &amp; Score</div>
                <div className="flow-connector" />
                <div className="flow-node flow-node--destination">Route to CRM &amp; Slack</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

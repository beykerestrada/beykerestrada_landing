"use client";

// components/Services.tsx
import Section from "./Section";
import { useTranslations } from "./TranslationProvider";

type Props = {
  upworkUrl: string;
  consultationUrl?: string;
};

export default function Services({ upworkUrl, consultationUrl }: Props) {
  const dictionary = useTranslations();
  const services = dictionary.services;
  const consultationHref = consultationUrl ?? upworkUrl;

  return (
    <Section id="services" className="services">
      <div className="section-heading">
        <span className="section-badge">{services.badge}</span>
        <h2 className="section-title">{services.title}</h2>
        <p className="section-subtitle">{services.subtitle}</p>
      </div>

      <div className="services-grid">
        {services.cards.map((service) => (
          <article key={service.title} className="service-card">
            <div className="service-card-header">
              <h3>{service.title}</h3>
              <span className="service-price">
                {services.fromLabel} {service.price}
              </span>
            </div>
            <p>{service.summary}</p>
            <ul>
              {service.bullets.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a
              href={upworkUrl}
              className="service-cta btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              {services.learnMoreCta}
            </a>
          </article>
        ))}
      </div>

      <article className="service-addon">
        <span className="addon-badge">{services.addon.badge}</span>
        <div>
          <h3>{services.addon.title}</h3>
          <p>{services.addon.summary}</p>
        </div>
        <a
          href={consultationHref}
          className="btn btn-primary btn-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          {services.addon.cta}
        </a>
      </article>
    </Section>
  );
}

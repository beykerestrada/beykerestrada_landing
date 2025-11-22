"use client"

import Button from "@/components/ui/button"
import Container from "@/components/ui/container"
import { useTranslations } from "./TranslationProvider"

type Props = {
  upworkUrl: string
  consultationUrl: string
}

const baseCard =
  "relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-[0_18px_40px_rgba(15,23,42,0.06)] p-6 sm:p-7 flex flex-col gap-4"
const hoverCard =
  "transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_45px_rgba(15,23,42,0.09)]"

export default function Services({ upworkUrl, consultationUrl }: Props) {
  const dictionary = useTranslations()
  const services = dictionary.services

  const start = services.startHere
  const projects = services.projects
  const partnership = services.partnership
  const agencies = services.agencies
  const agency = agencies.card

  return (
    <section id="services" className="section-pad-lg section-alt">
      <Container className="max-w-5xl lg:max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="section-badge">{services.badge}</span>
          <h2 className="section-title mt-3">{services.title}</h2>
          <p className="section-description mt-3">{services.intro}</p>
        </div>

        {/* Block 1: Start here */}
        <section className="mt-16 space-y-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs tracking-[0.18em] uppercase text-[var(--text-muted)]">
              {start.label}
            </span>
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-main)]">
              {start.title}
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-muted)]">
              {start.subtitle}
            </p>
          </div>

          <div className={`${baseCard} ${hoverCard} bg-[#F5F7FF]`}>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] items-start">
              <div className="space-y-3">
                <h4 className="text-base sm:text-lg font-semibold text-[var(--text-main)]">
                  {start.card.title}
                </h4>
                {start.card.body.map((paragraph: string) => (
                  <p
                    key={paragraph}
                    className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="space-y-4">
                <ul className="space-y-1 text-sm text-[var(--text-muted)]">
                  {start.card.bullets.map((item: string) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <span className="text-sm font-medium text-[var(--text-main)]">
                    {start.card.price}
                  </span>
                  <Button
                    as="a"
                    href={consultationUrl ?? upworkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                  >
                    {start.card.ctaLabel}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Block 2: Project engagements */}
        <section className="mt-20 space-y-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs tracking-[0.18em] uppercase text-[var(--text-muted)]">
              {projects.label}
            </span>
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-main)]">
              {projects.title}
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl">
              {projects.subtitle}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.items.map((service) => (
              <div key={service.id} className={`${baseCard} ${hoverCard}`}>
                {service.tag && (
                  <span className="inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-main)] bg-[var(--bg-soft)] px-3 py-1 rounded-full self-start">
                    {service.tag}
                  </span>
                )}
                <h4 className="text-base sm:text-lg font-semibold text-[var(--text-main)]">
                  {service.title}
                </h4>
                <p className="text-sm font-medium text-[var(--text-muted-strong)]">
                  {service.oneLiner}
                </p>
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-1 space-y-1 text-sm text-[var(--text-muted)]">
                  {service.bullets.map((item: string) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--border-strong)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 flex flex-col gap-2">
                  <span className="text-sm font-medium text-[var(--text-main)]">
                    {service.price}
                  </span>
                  {service.meta && (
                    <span className="text-xs text-[var(--text-muted)]">
                      {service.meta}
                    </span>
                  )}
                  <Button
                    as="a"
                    href={upworkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                    className="mt-1"
                  >
                    {service.ctaLabel}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Block 3: Ongoing partnership */}
        <section className="mt-20 space-y-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs tracking-[0.18em] uppercase text-[var(--text-muted)]">
              {partnership.label}
            </span>
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-main)]">
              {partnership.title}
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl">
              {partnership.subtitle}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {partnership.items.map((service) => (
              <div key={service.id} className={`${baseCard} ${hoverCard}`}>
                {service.tag && (
                  <span className="inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-main)] bg-[var(--bg-soft)] px-3 py-1 rounded-full self-start">
                    {service.tag}
                  </span>
                )}
                <h4 className="text-base sm:text-lg font-semibold text-[var(--text-main)]">
                  {service.title}
                </h4>
                <p className="text-sm font-medium text-[var(--text-muted-strong)]">
                  {service.oneLiner}
                </p>
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-1 space-y-1 text-sm text-[var(--text-muted)]">
                  {service.bullets.map((item: string) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--border-strong)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 flex flex-col gap-2">
                  <span className="text-sm font-medium text-[var(--text-main)]">
                    {service.price}
                  </span>
                  <Button
                    as="a"
                    href={consultationUrl ?? upworkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                    className="mt-1"
                  >
                    {service.ctaLabel}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Block 4: For agencies */}
        <section className="mt-20 space-y-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs tracking-[0.18em] uppercase text-[var(--text-muted)]">
              {agencies.label}
            </span>
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-main)]">
              {agencies.title}
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl">
              {agencies.subtitle}
            </p>
          </div>

          <div className={`${baseCard} ${hoverCard} lg:flex lg:flex-row lg:items-center lg:gap-8`}>
            <div className="flex-1 space-y-3">
              {agency.tag && (
                <span className="inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-main)] bg-[var(--bg-soft)] px-3 py-1 rounded-full">
                  {agency.tag}
                </span>
              )}
              <h4 className="text-base sm:text-lg font-semibold text-[var(--text-main)]">
                {agency.title}
              </h4>
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                {agency.description}
              </p>
              <ul className="mt-1 space-y-1 text-sm text-[var(--text-muted)]">
                {agency.bullets.map((item: string) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--border-strong)] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {agency.meta && (
                <p className="text-xs text-[var(--text-muted)] pt-2">{agency.meta}</p>
              )}
            </div>

            <div className="mt-4 lg:mt-0 lg:self-stretch flex items-end">
              <Button
                as="a"
                href={consultationUrl ?? upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="w-full lg:w-auto"
              >
                {agency.ctaLabel}
              </Button>
            </div>
          </div>
        </section>
      </Container>
    </section>
  )
}

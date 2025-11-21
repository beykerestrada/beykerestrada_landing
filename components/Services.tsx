"use client"

import Button from "@/components/ui/button"
import Container from "@/components/ui/container"
import { useTranslations } from "./TranslationProvider"
import { cn } from "@/lib/utils"

type Props = {
  upworkUrl: string
  consultationUrl: string
}

export default function Services({ upworkUrl, consultationUrl }: Props) {
  const dictionary = useTranslations()
  const services = dictionary.services

  const baseCard =
    "relative rounded-2xl border border-(--border-subtle) bg-(--bg-surface) shadow-[0_18px_40px_rgba(15,23,42,0.06)] p-6 sm:p-7 flex flex-col justify-between transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_45px_rgba(15,23,42,0.09)]"

  return (
    <section id="services" className="section-pad-lg section-surface">
      <div className="container max-w-5xl lg:max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="section-badge">{services.badge}</span>
          <h2 className="section-title text-center mt-3">{services.title}</h2>
          <p className="section-description text-center mx-auto">{services.intro}</p>
        </div>

        {/* 1. Audit: Light Tint with Accent Bar */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className={cn(baseCard, "bg-[#F5F7FF] py-8 sm:py-10")}>
            {/* Accent bar */}
            <div className="h-1 w-16 rounded-full bg-blue-400/70 mb-4" />

            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] items-start">
              {/* Left: copy */}
              <div className="space-y-3">
                <span className="inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-(--accent-primary) bg-white/70 px-3 py-1 rounded-full">
                  {services.audit.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold text-(--text-main)">{services.audit.title}</h3>
                <p className="text-sm sm:text-base text-(--text-muted) leading-relaxed">
                  {services.audit.description}
                </p>
              </div>

              {/* Right: bullets + price + CTA */}
              <div className="space-y-3 lg:pl-4">
                <ul className="space-y-1 text-sm text-(--text-muted)">
                  {services.audit.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-(--accent-primary) shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <span className="text-sm font-medium text-(--text-main)">{services.audit.price}</span>
                  <Button
                    as="a"
                    href={consultationUrl ?? upworkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="brand"
                    size="lg"
                  >
                    {services.audit.ctaLabel}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Primary Services: White Cards with Subtle Variation */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-8 items-start">
          {/* Left: Business OS hero */}
          <div>
            {services.primary
              .filter((item) => item.id === "business-os")
              .map((service) => (
                <div key={service.id} className={cn(baseCard, "pt-7 gap-4")}>
                  {/* Accent bar for Business OS */}
                  <div className="absolute inset-x-6 top-0 h-1 rounded-full bg-[#F9E58A]" />

                  {service.badge && (
                    <span className="inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-(--text-main) bg-[#FFF8D6] px-3 py-1 rounded-full self-start">
                      {service.badge}
                    </span>
                  )}
                  <div className="space-y-3 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-(--text-main)">{service.title}</h3>
                    <p className="text-sm sm:text-base text-(--text-muted) leading-relaxed max-w-xl">
                      {service.description}
                    </p>

                    <ul className="mt-2 space-y-1 text-sm text-(--text-muted)">
                      {service.bullets.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-(--border-strong) shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <span className="text-sm font-medium text-(--text-main)">{service.price}</span>
                    <Button
                      as="a"
                      href={upworkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="brand"
                      size="lg"
                    >
                      {service.ctaLabel}
                    </Button>
                  </div>
                </div>
              ))}
          </div>

          {/* Right: the other two primary services stacked */}
          <div className="space-y-6">
            {services.primary
              .filter((item) => item.id !== "business-os")
              .map((service) => (
                <div key={service.id} className={cn(baseCard, "gap-3")}>
                  {service.badge && (
                    <span className="inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-(--accent-primary) bg-(--accent-soft) px-3 py-1 rounded-full self-start">
                      {service.badge}
                    </span>
                  )}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-(--text-main)">{service.title}</h3>
                    <p className="text-sm sm:text-base text-(--text-muted) leading-relaxed">{service.description}</p>
                    <ul className="mt-1 space-y-1 text-xs sm:text-sm text-(--text-muted)">
                      {service.bullets.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-(--border-strong) shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 flex flex-col gap-2">
                    <span className="text-sm font-medium text-(--text-main)">{service.price}</span>
                    <Button
                      as="a"
                      href={service.type === "project" ? upworkUrl : consultationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="lg"
                      className="w-full justify-center"
                    >
                      {service.ctaLabel}
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* 3. Secondary Services: White Cards Inside Soft Band */}
        <div className="mt-16 rounded-3xl bg-[#F7F6F3] p-6 sm:p-8 lg:p-10">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-(--text-muted)">
              Retainers & strategic partnerships
            </h3>
            <p className="text-sm text-(--text-muted) max-w-xl">
              Ongoing work for teams that rely on their systems and automations every day; and for agencies that want to
              offer these services under their own brand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {services.secondary.map((service) => {
              const isWhiteLabel = service.id === "white-label"
              return (
                <div
                  key={service.id}
                  className={cn(
                    baseCard,
                    "gap-3",
                    isWhiteLabel && "lg:col-span-2 pt-7"
                  )}
                >
                  {/* Accent bar for white-label */}
                  {isWhiteLabel && <div className="absolute inset-x-6 top-0 h-1 rounded-full bg-[#E4D8BF]" />}

                  {service.badge && (
                    <span className="inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-(--accent-primary) bg-(--accent-soft) px-3 py-1 rounded-full self-start">
                      {service.badge}
                    </span>
                  )}
                  <div className="flex-1 space-y-2">
                    <h4 className="text-base sm:text-lg font-semibold text-(--text-main)">{service.title}</h4>
                    <p className="text-sm sm:text-base text-(--text-muted) leading-relaxed">{service.description}</p>
                    <ul className="mt-1 space-y-1 text-xs sm:text-sm text-(--text-muted)">
                      {service.bullets.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-(--border-strong) shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 flex flex-col gap-2">
                    {service.price && <span className="text-sm font-medium text-(--text-main)">{service.price}</span>}
                    <Button
                      as="a"
                      href={service.type === "partner" ? consultationUrl : consultationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="lg"
                      className="w-full justify-center"
                    >
                      {service.ctaLabel}
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import Button from "@/components/ui/button"
import Container from "@/components/ui/container"
import Reveal from "@/components/motion/Reveal"
import { useTranslations } from "./TranslationProvider"
import { Check } from "lucide-react"

type Props = {
  upworkUrl: string
  consultationUrl: string
}

export default function Services({ upworkUrl, consultationUrl }: Props) {
  const dictionary = useTranslations()
  const services = dictionary.services

  const start = services.startHere
  const projects = services.projects
  const partnership = services.partnership
  const agencies = services.agencies
  const agency = agencies.card

  // Combine project and partnership items
  const mainServices = [...projects.items, ...partnership.items]

  return (
    <>
      {/* Main Services Section */}
      <section id="services" className="section-pad-lg" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <Container className="max-w-6xl">
          {/* Header */}
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border" style={{
                backgroundColor: 'rgba(165, 180, 207, 0.08)',
                color: 'var(--text-main)',
                borderColor: 'rgba(165, 180, 207, 0.2)'
              }}>
                {services.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-6 mb-4 leading-tight" style={{ color: 'var(--text-main)' }}>
                {services.title}
              </h2>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>{services.intro}</p>
            </div>
          </Reveal>

          {/* 2x2 Grid of Service Cards */}
          <div className="grid gap-4 lg:grid-cols-2 mb-8">
            {mainServices.map((service, idx) => {
              // Very subtle accent backgrounds
              const cardBackgrounds = [
                'rgba(169, 178, 140, 0.03)', // olive
                'rgba(231, 220, 200, 0.05)', // sand
                'rgba(165, 180, 207, 0.03)', // slate
                'var(--bg-surface)' // neutral
              ]

              return (
                <Reveal key={service.id} delay={0.1 + idx * 0.1}>
                  <div className="rounded-xl p-6 border transition-all h-full" style={{
                    backgroundColor: cardBackgrounds[idx],
                    borderColor: 'var(--border-subtle)'
                  }}>
                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-main)' }}>
                      {service.title}
                    </h3>

                    {/* Separator */}
                    <div className="border-t mb-4" style={{ borderColor: 'var(--border-subtle)' }}></div>

                    {/* Two column layout */}
                    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
                      {/* Left: Description, Pricing, Button */}
                      <div className="flex flex-col space-y-4">
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                          {service.oneLiner}
                        </p>

                        <div className="mt-auto space-y-3">
                          <div className="text-lg font-semibold" style={{ color: 'var(--text-main)' }}>
                            {service.price}
                          </div>
                          <Button
                            as="a"
                            href={idx < 2 ? upworkUrl : (consultationUrl ?? upworkUrl)}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="primary"
                            size="sm"
                            showArrow
                            className="whitespace-nowrap shadow-none hover:shadow-none"
                          >
                            {service.ctaLabel}
                          </Button>
                        </div>
                      </div>

                      {/* Right: Features */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-subtle)' }}>Features</h4>
                        <ul className="space-y-1.5">
                          {service.bullets.map((item: string, bulletIdx: number) => (
                            <li key={bulletIdx} className="flex gap-2 items-start">
                              <Check className="w-4 h-4 shrink-0 mt-0.5" strokeWidth={2} style={{ color: 'var(--text-main)' }} />
                              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

          {/* Full-width White Label Card */}
          <Reveal delay={0.5}>
            <div className="rounded-xl p-6 sm:p-8 border transition-all" style={{
              backgroundColor: 'rgba(165, 180, 207, 0.06)',
              borderColor: 'rgba(165, 180, 207, 0.15)'
            }}>
              <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1.2fr_1fr]">
                {/* Left: Main content */}
                <div className="space-y-4">
                  {agency.tag && (
                    <span className="inline-flex text-xs font-medium px-3 py-1.5 rounded-md" style={{
                      backgroundColor: 'var(--accent-primary)',
                      color: 'var(--accent-inverse)'
                    }}>
                      {agency.tag}
                    </span>
                  )}

                  <h3 className="text-lg font-semibold" style={{ color: 'var(--text-main)' }}>
                    {agency.title}
                  </h3>

                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {agency.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-subtle)' }}>Features</h4>
                    <ul className="space-y-1.5">
                      {agency.bullets.map((item: string, idx: number) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <Check className="w-4 h-4 shrink-0 mt-0.5" strokeWidth={2} style={{ color: 'var(--text-main)' }} />
                          <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {agency.meta && (
                    <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>{agency.meta}</p>
                  )}
                </div>

                {/* Right: CTA */}
                <div className="flex items-end lg:items-start lg:justify-end">
                  <Button
                    as="a"
                    href={consultationUrl ?? upworkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                    showArrow
                    className="w-full lg:w-auto whitespace-nowrap shadow-none hover:shadow-none"
                  >
                    {agency.ctaLabel}
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Workspace Audit Banner */}
      <section className="section-pad-lg" style={{ backgroundColor: 'var(--bg-page)' }}>
        <Container className="max-w-5xl">
          <Reveal>
            <div className="rounded-xl p-8 sm:p-10 lg:p-12 border" style={{
              backgroundColor: 'rgba(231, 220, 200, 0.08)',
              borderColor: 'rgba(199, 195, 188, 0.2)'
            }}>
              <div className="space-y-8">
                {/* Header */}
                <div className="max-w-3xl">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border mb-4" style={{
                    backgroundColor: 'rgba(231, 220, 200, 0.15)',
                    color: 'var(--text-main)',
                    borderColor: 'rgba(199, 195, 188, 0.3)'
                  }}>
                    {start.label}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 leading-tight" style={{ color: 'var(--text-main)' }}>
                    {start.title}
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {start.subtitle}
                  </p>
                </div>

                {/* Content */}
                <div className="max-w-3xl">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4" style={{ color: 'var(--text-main)' }}>
                    {start.card.title}
                  </h3>
                  <div className="space-y-3">
                    {start.card.body.map((paragraph: string, idx: number) => (
                      <p key={idx} className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="max-w-4xl">
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text-subtle)' }}>
                    What's included
                  </h4>
                  <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {start.card.bullets.map((item: string, idx: number) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <Check className="w-4 h-4 shrink-0 mt-0.5" strokeWidth={2} style={{ color: 'var(--text-main)' }} />
                        <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="border-t pt-8" style={{ borderColor: 'var(--border-subtle)' }}>
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--text-subtle)' }}>
                        Investment
                      </p>
                      <div className="text-3xl sm:text-4xl font-semibold" style={{ color: 'var(--text-main)' }}>
                        {start.card.price}
                      </div>
                    </div>
                    <Button
                      as="a"
                      href={consultationUrl ?? upworkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="lg"
                      showArrow
                      className="shadow-none hover:shadow-none"
                    >
                      {start.card.ctaLabel}
                    </Button>
                  </div>
                  <p className="text-xs mt-6" style={{ color: 'var(--text-subtle)' }}>
                    * One-time fee, credited toward a project if you move forward
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}

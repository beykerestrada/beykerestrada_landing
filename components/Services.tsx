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

  const cardColors = [
    { bg: 'from-purple-50 to-purple-100/50', check: 'text-purple-600' },
    { bg: 'from-green-50 to-green-100/50', check: 'text-green-600' },
    { bg: 'from-orange-50 to-orange-100/50', check: 'text-orange-600' },
    { bg: 'from-pink-50 to-pink-100/50', check: 'text-pink-600' }
  ]

  return (
    <>
      {/* Main Services Section */}
      <section id="services" className="section-pad-lg bg-neutral-50">
        <Container className="max-w-7xl">
          {/* Header */}
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="inline-flex items-center bg-white text-neutral-600 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-neutral-200">
                {services.badge}
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 mt-6 mb-4 leading-tight">
                {services.title}
              </h2>
              <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed">{services.intro}</p>
            </div>
          </Reveal>

          {/* 2x2 Grid of Service Cards */}
          <div className="grid gap-6 lg:grid-cols-2 mb-12">
            {mainServices.map((service, idx) => {
              const colors = cardColors[idx]

              return (
                <Reveal key={service.id} delay={0.1 + idx * 0.1}>
                  <div className={`rounded-3xl bg-linear-to-br ${colors.bg} p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full`}>
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                      {service.title}
                    </h3>

                    {/* Separator */}
                    <div className="border-t border-neutral-900/10 mb-6"></div>

                    {/* Two column layout */}
                    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
                      {/* Left: Description, Pricing, Button */}
                      <div className="flex flex-col space-y-4">
                        <p className="text-sm text-neutral-600 leading-relaxed">
                          {service.oneLiner}
                        </p>

                        <div className="mt-auto space-y-3">
                          <div className="text-xl font-bold text-neutral-900">
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
                        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">Features</h4>
                        <ul className="space-y-1.5">
                          {service.bullets.map((item: string, bulletIdx: number) => (
                            <li key={bulletIdx} className="flex gap-2 items-start">
                              <Check className={`w-4 h-4 ${colors.check} shrink-0 mt-0.5`} strokeWidth={2.5} />
                              <span className="text-sm text-neutral-700">{item}</span>
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
            <div className="rounded-3xl bg-linear-to-br from-cyan-50 to-cyan-100/50 p-6 sm:p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1.2fr_1fr]">
                {/* Left: Main content */}
                <div className="space-y-4">
                  {agency.tag && (
                    <span className="inline-flex text-xs font-semibold px-3 py-1.5 rounded-full bg-neutral-900 text-white">
                      {agency.tag}
                    </span>
                  )}

                  <h3 className="text-xl font-bold text-neutral-900">
                    {agency.title}
                  </h3>

                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {agency.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2">Features</h4>
                    <ul className="space-y-1.5">
                      {agency.bullets.map((item: string, idx: number) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="text-sm text-neutral-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {agency.meta && (
                    <p className="text-xs text-neutral-500">{agency.meta}</p>
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
      <section className="section-pad-lg bg-white">
        <Container className="max-w-6xl">
          <Reveal>
            <div className="rounded-3xl bg-linear-to-br from-blue-50 to-blue-100/50 p-8 sm:p-12 lg:p-16 shadow-md">
              <div className="space-y-8">
                {/* Header */}
                <div className="max-w-3xl">
                  <span className="inline-flex items-center bg-white text-neutral-600 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-neutral-200 mb-4">
                    {start.label}
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
                    {start.title}
                  </h2>
                  <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                    {start.subtitle}
                  </p>
                </div>

                {/* Content */}
                <div className="max-w-3xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">
                    {start.card.title}
                  </h3>
                  <div className="space-y-3">
                    {start.card.body.map((paragraph: string, idx: number) => (
                      <p key={idx} className="text-sm text-neutral-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="max-w-4xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-4">
                    What's included
                  </h4>
                  <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {start.card.bullets.map((item: string, idx: number) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-sm text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="border-t border-neutral-900/10 pt-8">
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-neutral-500 mb-3">
                        Investment
                      </p>
                      <div className="text-4xl sm:text-5xl font-bold text-neutral-900">
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
                  <p className="text-xs text-neutral-500 mt-6">
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

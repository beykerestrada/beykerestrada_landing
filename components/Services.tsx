"use client"

import Button from "@/components/ui/button"
import CardShell from "@/components/ui/card-shell"
import Container from "@/components/ui/container"
import SectionHeader from "@/components/ui/section-header"
import Reveal from "@/components/motion/Reveal"
import { useTranslations } from "./TranslationProvider"

type Props = {
  upworkUrl: string
  consultationUrl: string
}

export default function Services({ upworkUrl, consultationUrl }: Props) {
  const dictionary = useTranslations()
  const services = dictionary.services

  return (
    <section className="bg-[#f5f5f5] py-24 md:py-32 lg:py-40" id="services">
      <Container className="space-y-20">
        <Reveal>
          <SectionHeader
            eyebrow={services.badge}
            title={services.title}
            description={services.subtitle}
            align="center"
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.cards.map((card, index) => (
            <Reveal key={card.title}>
              <CardShell
                className={`relative flex h-full flex-col gap-6 border-2 bg-white/90 shadow-lg shadow-black/5 transition-all hover:-translate-y-1 ${
                  card.isPopular
                    ? 'border-[hsl(var(--brand))] ring-2 ring-[hsl(var(--brand))/20] scale-[1.02]'
                    : 'border-transparent hover:border-[hsl(var(--brand))/30]'
                }`}
              >
                {card.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-[hsl(var(--brand))] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-fg))] shadow-md">
                      {services.popularBadge}
                    </span>
                  </div>
                )}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">{card.title}</h3>
                  <p className="text-base leading-relaxed text-foreground/80">{card.summary}</p>
                </div>
                <ul className="space-y-2.5 text-sm leading-relaxed text-foreground/70">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 before:content-['•'] before:text-base before:text-muted-foreground/50"
                    >
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto space-y-4 pt-6">
                  <p className="text-base font-bold text-foreground">
                    {services.fromLabel} {card.price}
                  </p>
                  <Button
                    as="a"
                    href={upworkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={card.isPopular ? "brand" : "primary"}
                    size="lg"
                    className="w-full justify-center"
                  >
                    {index === 0 ? services.primaryCta : services.secondaryCta}
                  </Button>
                </div>
              </CardShell>
            </Reveal>
          ))}
        </div>

        {/* Guarantee note */}
        <Reveal>
          <p className="text-center text-sm font-medium text-muted-foreground/70 pt-8">
            {services.guaranteeNote}
          </p>
        </Reveal>

        {/* Partnership offering - B2B */}
        <Reveal>
          <CardShell className="relative overflow-hidden border-2 border-[hsl(var(--brand))/40] bg-gradient-to-br from-white to-[hsl(var(--brand))/5] shadow-xl">
            <div className="space-y-6">
              {/* Badge */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-[hsl(var(--brand))] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-fg))] shadow-md">
                  {services.addon.badge}
                </span>
                <svg
                  className="h-8 w-8 text-[hsl(var(--brand))/20]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {services.addon.title}
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">{services.addon.summary}</p>
              </div>

              {/* Key benefits */}
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand))/20] text-xs">
                    ✓
                  </span>
                  <span>Deliver under your brand and positioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand))/20] text-xs">
                    ✓
                  </span>
                  <span>Expand your service offering without hiring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand))/20] text-xs">
                    ✓
                  </span>
                  <span>Focus on client relationships while I handle implementation</span>
                </li>
              </ul>

              {/* CTA */}
              <Button
                as="a"
                href={consultationUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="brand"
                size="lg"
                className="w-full justify-center md:w-auto"
              >
                {services.addon.cta}
              </Button>
            </div>
          </CardShell>
        </Reveal>
      </Container>
    </section>
  )
}

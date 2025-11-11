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
    <section className="bg-background py-24 md:py-32 lg:py-40" id="services">
      <Container className="space-y-20">
        <Reveal>
          <SectionHeader
            eyebrow={services.badge}
            title={services.title}
            description={services.subtitle}
            align="center"
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.cards.map((card) => (
            <Reveal key={card.title}>
              <CardShell className="flex h-full flex-col gap-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">{card.title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{card.summary}</p>
                </div>
                <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 before:content-['•'] before:text-base before:text-muted-foreground/50"
                    >
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-6 text-base font-bold text-foreground">
                  {services.fromLabel} {card.price}
                </p>
              </CardShell>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <CardShell tone="muted" className="space-y-6 text-center md:text-left">
            <span className="inline-flex items-center justify-center rounded-full border border-border/50 bg-muted/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {services.addon.badge}
            </span>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">{services.addon.title}</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">{services.addon.summary}</p>
            </div>
            <Button
              as="a"
              href={consultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="lg"
              className="self-center md:self-start"
            >
              {services.addon.cta}
            </Button>
          </CardShell>
        </Reveal>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button as="a" href={upworkUrl} target="_blank" rel="noopener noreferrer" variant="brand" size="lg">
            {services.learnMoreCta}
          </Button>
          <Button as="a" href={consultationUrl} target="_blank" rel="noopener noreferrer" variant="ghost" size="lg">
            {services.addon.cta}
          </Button>
        </div>
      </Container>
    </section>
  )
}

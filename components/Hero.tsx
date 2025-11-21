"use client"

import Button from "@/components/ui/button"
import Container from "@/components/ui/container"
import Reveal from "@/components/motion/Reveal"
import { useTranslations } from "./TranslationProvider"

type Props = {
  upworkUrl: string
  calendlyUrl?: string
}

export default function Hero({ upworkUrl, calendlyUrl }: Props) {
  const dictionary = useTranslations()
  const hero = dictionary.hero

  return (
    <section className="relative overflow-hidden bg-white py-28 sm:py-36 md:py-44 lg:py-48">
      <Container className="space-y-16">
        <Reveal>
          <div className="mx-auto space-y-8 text-center">
            <h1 className="text-balance text-5xl font-bold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-6xl md:text-7xl lg:text-[5rem]">
              {hero.title}
            </h1>
            <p className="mx-auto max-w-4xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl">
              {hero.subtitle}
            </p>
            {/* Trust indicator with accent */}
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">{hero.trustIndicator}</p>
          </div>
        </Reveal>

        <div className="space-y-6">
          {/* Primary CTA - More prominent */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              as="a"
              href={calendlyUrl || upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="brand"
              size="lg"
              className="w-full sm:w-auto sm:min-w-[240px] text-base font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              {hero.primaryCta}
            </Button>
            <Button
              as="a"
              href={upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto text-sm"
            >
              {hero.secondaryCta}
            </Button>
          </div>

          {/* Urgency note */}
          <p className="text-center text-sm text-muted-foreground/60">{hero.urgencyNote}</p>
        </div>
      </Container>
    </section>
  )
}

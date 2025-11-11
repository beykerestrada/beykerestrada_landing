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
    <section className="relative overflow-hidden bg-background py-28 sm:py-36 md:py-44 lg:py-52">
      <Container className="space-y-14">
        <Reveal>
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Systems & Automation</p>
            <h1 className="text-balance text-5xl font-bold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-6xl md:text-7xl lg:text-[5rem]">
              {hero.title}
            </h1>
            <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl">
              {hero.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button as="a" href={upworkUrl} target="_blank" rel="noopener noreferrer" variant="brand" size="lg">
            {hero.primaryCta}
          </Button>
          {calendlyUrl && (
            <Button as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer" variant="ghost" size="lg">
              {hero.secondaryCta}
            </Button>
          )}
        </div>
      </Container>
    </section>
  )
}

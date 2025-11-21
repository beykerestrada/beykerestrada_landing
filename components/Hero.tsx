"use client"

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
    <section className="relative overflow-hidden py-32 sm:py-40 bg-(--bg-surface)">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            {/* Badge */}
            <span className="inline-block bg-(--accent-soft) text-(--accent-primary) px-3 py-1 rounded-full text-sm font-medium mb-5">
              {hero.badge}
            </span>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl tracking-tight leading-tight font-semibold text-(--text-main) text-center">
              {hero.title}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-xl text-(--text-muted) leading-relaxed max-w-2xl mx-auto text-center">
              {hero.subtitle}
            </p>

            {/* CTA Group */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {hero.primaryCta}
              </a>
              <a
                href={calendlyUrl || upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

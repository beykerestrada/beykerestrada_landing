"use client"

import Container from "@/components/ui/container"
import Reveal from "@/components/motion/Reveal"
import { useTranslations } from "./TranslationProvider"
import { ArrowUpRight } from "lucide-react"

type Props = {
  upworkUrl: string
  calendlyUrl?: string
}

export default function Hero({ upworkUrl }: Props) {
  const dictionary = useTranslations()
  const hero = dictionary.hero

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28" style={{ backgroundColor: 'var(--bg-page)' }}>
      <Container className="max-w-4xl">
        <Reveal>
          <div className="text-center">
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border" style={{
                backgroundColor: 'rgba(169, 178, 140, 0.08)',
                color: 'var(--text-main)',
                borderColor: 'rgba(169, 178, 140, 0.2)'
              }}>
                {hero.badge}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] leading-[1.1] font-semibold mb-6" style={{ color: 'var(--text-main)' }}>
              {hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: 'var(--text-muted)' }}>
              {hero.subtitle}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {/* Primary CTA */}
              <a
                href={upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-all"
                style={{
                  backgroundColor: 'var(--accent-primary)',
                  color: 'var(--accent-inverse)'
                }}
              >
                {hero.primaryCta}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

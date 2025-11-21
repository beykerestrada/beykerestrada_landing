"use client"

import Reveal from "@/components/motion/Reveal"
import CardShell from "@/components/ui/card-shell"
import Container from "@/components/ui/container"
import SectionHeader from "@/components/ui/section-header"
import { useTranslations } from "./TranslationProvider"

export default function WhoIWorkWith() {
  const dictionary = useTranslations()
  const section = dictionary.whoIWorkWith

  return (
    <section className="bg-[#f5f5f5] py-24 md:py-32 lg:py-40" aria-labelledby="who-i-work-with-heading">
      <Container className="space-y-20">
        <Reveal>
          <SectionHeader id="who-i-work-with-heading" eyebrow={section.eyebrow} title={section.title} align="center" />
        </Reveal>

        {/* Cards with strong visual presence */}
        <div className="mx-auto max-w-4xl space-y-6">
          {section.bullets.map((item, index) => (
            <Reveal key={item.title} transition={{ delay: index * 0.12 }}>
              <CardShell className="group relative flex gap-6 border-2 border-border/40 bg-white shadow-sm transition-all hover:border-accent/40 hover:shadow-md">
                {/* Checkmark indicator with connecting line */}
                <div className="relative flex flex-col items-center pt-1">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-md transition-transform group-hover:scale-105">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3 py-1">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">{item.title}</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              </CardShell>
            </Reveal>
          ))}
        </div>

        {/* "Not a fit" note with strong visual separation */}
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <CardShell className="border-2 border-border/60 bg-white/50 text-center">
              <p className="text-base font-medium text-muted-foreground">{section.note}</p>
            </CardShell>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

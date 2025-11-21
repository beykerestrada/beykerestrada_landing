"use client"

import Container from "@/components/ui/container"
import SectionHeader from "@/components/ui/section-header"
import Reveal from "@/components/motion/Reveal"
import { useTranslations } from "./TranslationProvider"

export default function Process() {
  const dictionary = useTranslations()
  const process = dictionary.process

  return (
    <section className="bg-[#f5f5f5] py-24 md:py-32 lg:py-40" id="process">
      <Container className="space-y-20">
        <Reveal>
          <SectionHeader eyebrow={process.badge} title={process.title} description={process.subtitle} align="center" />
        </Reveal>

        {/* Timeline-style vertical layout */}
        <div className="mx-auto max-w-4xl space-y-12">
          {process.steps.map((step, index) => (
            <Reveal key={step.title} transition={{ delay: index * 0.15 }}>
              <div className="relative flex gap-8">
                {/* Step number indicator with connecting line */}
                <div className="relative flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand))] text-lg font-bold text-[hsl(var(--brand-fg))] shadow-md">
                    {index + 1}
                  </div>
                  {index < process.steps.length - 1 && (
                    <div className="absolute top-12 h-full w-0.5 bg-border" />
                  )}
                </div>

                {/* Step content */}
                <div className="flex-1 space-y-3 pb-12">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">{step.title}</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

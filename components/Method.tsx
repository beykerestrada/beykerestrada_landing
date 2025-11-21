"use client"

import CardShell from "@/components/ui/card-shell"
import Container from "@/components/ui/container"
import SectionHeader from "@/components/ui/section-header"
import Reveal from "@/components/motion/Reveal"
import { useTranslations } from "./TranslationProvider"

export default function Method() {
  const dictionary = useTranslations()
  const method = dictionary.method

  return (
    <section className="bg-[#f5f5f5] py-24">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeader eyebrow={method.title} title={method.intro} align="center" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {method.steps.map((step, idx) => (
            <Reveal
              key={step.title}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: idx * 0.12,
              }}
            >
              <CardShell className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/80">
                  {step.title}
                </span>
                <p className="text-base leading-relaxed text-foreground/80">{step.description}</p>
              </CardShell>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

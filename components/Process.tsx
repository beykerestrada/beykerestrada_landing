"use client"

import CardShell from "@/components/ui/card-shell"
import Container from "@/components/ui/container"
import SectionHeader from "@/components/ui/section-header"
import Reveal from "@/components/motion/Reveal"
import { useTranslations } from "./TranslationProvider"

export default function Process() {
  const dictionary = useTranslations()
  const process = dictionary.process

  return (
    <section className="bg-white py-24 md:py-32 lg:py-40" id="process">
      <Container className="space-y-20">
        <Reveal>
          <SectionHeader eyebrow={process.badge} title={process.title} description={process.subtitle} align="center" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {process.steps.map((step) => (
            <Reveal key={step.title}>
              <CardShell className="space-y-4">
                <h3 className="text-xl font-bold tracking-tight text-foreground">{step.title}</h3>
                <p className="text-base leading-relaxed text-foreground/80">{step.desc}</p>
              </CardShell>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

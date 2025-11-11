"use client"

import CardShell from "@/components/ui/card-shell"
import Container from "@/components/ui/container"
import SectionHeader from "@/components/ui/section-header"
import Reveal from "@/components/motion/Reveal"
import { useTranslations } from "./TranslationProvider"

export default function Value() {
  const dictionary = useTranslations()
  const value = dictionary.value

  return (
    <section className="relative bg-muted/30 py-24 md:py-32 lg:py-40" id="value">
      <Container className="space-y-20">
        <Reveal>
          <SectionHeader eyebrow={value.badge} title={value.title} description={value.subtitle} align="center" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {value.cards.map((card) => (
            <Reveal key={card.title}>
              <CardShell className="space-y-4">
                <h3 className="text-xl font-bold tracking-tight text-foreground">{card.title}</h3>
                <p className="text-base leading-relaxed text-muted-foreground">{card.desc}</p>
              </CardShell>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

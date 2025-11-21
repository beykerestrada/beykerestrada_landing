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
    <section className="relative bg-white py-24 md:py-32 lg:py-40" id="value">
      <Container className="space-y-20">
        <Reveal>
          <SectionHeader eyebrow={value.badge} title={value.title} description={value.subtitle} align="center" />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {value.cards.map((card, index) => (
            <Reveal key={card.title} transition={{ delay: index * 0.1 }}>
              <CardShell className="group relative h-full space-y-4 border-2 border-border/40 bg-card transition-all hover:border-[hsl(var(--brand))/30] hover:shadow-lg">
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

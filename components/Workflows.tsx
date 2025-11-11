"use client"

import CardShell from "@/components/ui/card-shell"
import Container from "@/components/ui/container"
import SectionHeader from "@/components/ui/section-header"
import Reveal from "@/components/motion/Reveal"
import { useTranslations } from "./TranslationProvider"

export default function Workflows() {
  const dictionary = useTranslations()
  const workflows = dictionary.workflows

  return (
    <section className="bg-muted/60 py-24" id="workflows">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeader
            eyebrow={workflows.badge}
            title={workflows.title}
            description={workflows.intro}
            align="center"
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {workflows.steps.map((item, idx) => (
            <Reveal
              key={item.title}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: idx * 0.12,
              }}
            >
              <CardShell className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-base text-muted-foreground">{item.description}</p>
              </CardShell>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

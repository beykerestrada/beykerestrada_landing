"use client"

import Container from "@/components/ui/container"
import CardShell from "@/components/ui/card-shell"
import Reveal from "@/components/motion/Reveal"
import SectionHeader from "@/components/ui/section-header"
import { useTranslations } from "./TranslationProvider"
import { Building2, Users, Workflow } from "lucide-react"

const cardIcons = [Building2, Users, Workflow]

export default function WhoIWorkWith() {
  const dictionary = useTranslations()
  const section = dictionary.whoIWorkWith

  return (
    <section id="who-i-work-with" className="section-pad-lg" style={{ backgroundColor: 'var(--bg-page)' }} aria-labelledby="who-i-work-with-heading">
      <Container>
        <Reveal>
          <SectionHeader id="who-i-work-with-heading" eyebrow={section.eyebrow} title={section.title} align="center" />
        </Reveal>

        {/* Horizontal Grid - matching Process section */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-5xl mx-auto mt-12">
            {section.bullets.map((item, index) => {
              const Icon = cardIcons[index]

              // Subtle accent backgrounds for variety
              const backgrounds = [
                'rgba(169, 178, 140, 0.04)', // olive
                'rgba(231, 220, 200, 0.06)', // sand
                'rgba(165, 180, 207, 0.04)', // slate
              ]

              return (
                <div
                  key={item.title}
                  className="rounded-xl p-6 transition-all border"
                  style={{
                    backgroundColor: backgrounds[index],
                    borderColor: 'var(--border-subtle)'
                  }}
                >
                  {/* Step Number */}
                  <div className="text-xs font-medium mb-3" style={{ color: 'var(--text-subtle)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <Icon className="w-8 h-8 mb-4" strokeWidth={1.5} style={{ color: 'var(--text-main)' }} />
                  <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-main)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {item.detail}
                  </p>
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* "Not a fit" note - subtle legend */}
        <Reveal delay={0.3}>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>{section.note}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

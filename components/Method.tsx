"use client"

import Container from "@/components/ui/container"
import Reveal from "@/components/motion/Reveal"
import { useTranslations } from "./TranslationProvider"
import { Zap, Workflow, Target } from "lucide-react"

const stepIcons = [Zap, Workflow, Target]

export default function Method() {
  const dictionary = useTranslations()
  const method = dictionary.method

  return (
    <section className="section-pad-lg" id="value" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <Container>
        {/* Header with pills */}
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            {/* Main headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-semibold mb-6" style={{ color: 'var(--text-main)' }}>
              {method.title}
            </h2>

            {/* Pills with icons - subtle accent style */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              {method.steps.map((step, index) => {
                const Icon = stepIcons[index]

                // Very subtle accent tints for pills
                const pillStyles = [
                  { bg: 'rgba(169, 178, 140, 0.08)', border: 'rgba(169, 178, 140, 0.2)' }, // olive
                  { bg: 'rgba(231, 220, 200, 0.12)', border: 'rgba(199, 195, 188, 0.3)' }, // sand
                  { bg: 'rgba(165, 180, 207, 0.08)', border: 'rgba(165, 180, 207, 0.2)' }  // slate
                ]

                return (
                  <span
                    key={step.title}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium border"
                    style={{
                      backgroundColor: pillStyles[index].bg,
                      color: 'var(--text-main)',
                      borderColor: pillStyles[index].border
                    }}
                  >
                    <Icon className="w-4 h-4" />
                    {step.title}
                  </span>
                )
              })}
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              {method.intro}
            </p>
          </div>
        </Reveal>

        {/* Stats Grid - Single Row */}
        <Reveal delay={0.2}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Stat 1 - Projects */}
            <div className="text-center relative">
              <div className="text-5xl sm:text-6xl font-semibold mb-2 leading-none" style={{ color: 'var(--text-main)' }}>
                50<span className="text-4xl sm:text-5xl">+</span>
              </div>
              <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                Projects Delivered
              </p>
              {/* Vertical divider */}
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px" style={{ backgroundColor: 'var(--border-subtle)' }} />
            </div>

            {/* Stat 2 - Time Saved */}
            <div className="text-center relative">
              <div className="text-5xl sm:text-6xl font-semibold mb-2 leading-none" style={{ color: 'var(--text-main)' }}>
                1000<span className="text-4xl sm:text-5xl">+</span>
              </div>
              <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                Hours Automated
              </p>
              {/* Vertical divider */}
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px" style={{ backgroundColor: 'var(--border-subtle)' }} />
            </div>

            {/* Stat 3 - Systems */}
            <div className="text-center">
              <div className="text-5xl sm:text-6xl font-semibold mb-2 leading-none" style={{ color: 'var(--text-main)' }}>
                30<span className="text-4xl sm:text-5xl">+</span>
              </div>
              <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                Systems Built
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

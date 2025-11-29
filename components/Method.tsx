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
    <section className="section-pad-lg bg-white" id="value">
      <Container>
        {/* Header with pills */}
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            {/* Main headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold text-neutral-900 mb-8">
              {method.title}
            </h2>

            {/* Pills with icons */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              {method.steps.map((step, index) => {
                const Icon = stepIcons[index]
                const colors = [
                  'bg-purple-100 text-purple-600',
                  'bg-blue-100 text-blue-600',
                  'bg-orange-100 text-orange-600'
                ]
                return (
                  <span
                    key={step.title}
                    className={`inline-flex items-center gap-2 ${colors[index]} px-5 py-2.5 rounded-full text-base font-medium italic`}
                  >
                    <Icon className="w-5 h-5" />
                    {step.title}
                  </span>
                )
              })}
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              {method.intro}
            </p>
          </div>
        </Reveal>

        {/* Stats Grid - Single Row */}
        <Reveal delay={0.2}>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Stat 1 - Projects */}
            <div className="text-center relative">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-neutral-900 mb-3 leading-none">
                <span className="text-5xl sm:text-6xl lg:text-7xl align-top">+</span>50
              </div>
              <p className="text-base sm:text-lg text-neutral-600 font-medium">
                Projects Delivered
              </p>
              {/* Vertical divider */}
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-px bg-neutral-200" />
            </div>

            {/* Stat 2 - Time Saved */}
            <div className="text-center relative">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-neutral-900 mb-3 leading-none">
                <span className="text-5xl sm:text-6xl lg:text-7xl align-top">+</span>1000
              </div>
              <p className="text-base sm:text-lg text-neutral-600 font-medium">
                Hours Automated
              </p>
              {/* Vertical divider */}
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-px bg-neutral-200" />
            </div>

            {/* Stat 3 - Systems */}
            <div className="text-center">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-neutral-900 mb-3 leading-none">
                <span className="text-5xl sm:text-6xl lg:text-7xl align-top">+</span>30
              </div>
              <p className="text-base sm:text-lg text-neutral-600 font-medium">
                Systems Built
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

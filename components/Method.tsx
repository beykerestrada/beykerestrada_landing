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
    <section className="section-pad-lg" style={{ backgroundColor: "#F9FAFB" }} id="value">
      <Container>
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-badge">{method.badge}</span>
            <h2 className="section-title">{method.title}</h2>
            <p className="section-description mx-auto">{method.intro}</p>
          </div>
        </Reveal>

        {/* Steps Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {method.steps.map((step, index) => {
            const Icon = stepIcons[index]
            return (
              <Reveal
                key={step.title}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.12,
                }}
              >
                <div className="h-full flex flex-col bg-(--bg-surface) rounded-xl border border-(--border-subtle) shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
                  {/* Icon */}
                  <div className="mb-3">
                    <Icon
                      size={20}
                      className="text-(--accent-primary)"
                      style={{ opacity: 0.7 }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-(--text-main) mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-(--text-muted) leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

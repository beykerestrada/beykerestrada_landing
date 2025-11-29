"use client"

import Container from "@/components/ui/container"
import Reveal from "@/components/motion/Reveal"
import { useTranslations } from "./TranslationProvider"
import { Search, Lightbulb, Wrench, Rocket } from "lucide-react"
import { ArrowUpRight } from "lucide-react"

const stepIcons = [Search, Lightbulb, Wrench, Rocket]

export default function Process() {
  const dictionary = useTranslations()
  const process = dictionary.process

  return (
    <section id="process" className="section-pad-lg" style={{ backgroundColor: 'var(--bg-page)' }}>
      <Container>
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-semibold mb-4" style={{ color: 'var(--text-main)' }}>
              {process.title}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              {process.intro}
            </p>
          </div>
        </Reveal>

        {/* Process Cards Grid - Unified Notion-style cards */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {process.steps.map((step, index) => {
              const Icon = stepIcons[index]

              // Subtle accent backgrounds for variety
              const backgrounds = [
                'rgba(169, 178, 140, 0.04)', // olive
                'rgba(231, 220, 200, 0.06)', // sand
                'rgba(165, 180, 207, 0.04)', // slate
                'var(--bg-surface)' // neutral
              ]

              return (
                <div
                  key={step.label ?? index}
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
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* CTA Section - Clean rounded container */}
        <Reveal delay={0.3}>
          <div className="rounded-xl p-8 sm:p-10 lg:p-12 border" style={{
            backgroundColor: 'var(--accent-primary)',
            borderColor: 'var(--accent-primary)'
          }}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Text */}
              <div className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2" style={{ color: 'var(--accent-inverse)' }}>
                  Ready to Transform Your Operations?
                </h3>
                <p className="text-base" style={{ color: 'var(--accent-inverse)', opacity: 0.8 }}>
                  Let's Build Systems That Actually Work for You
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <a
                  href="https://www.upwork.com/freelancers/~01577deb572030ada8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-all"
                  style={{
                    backgroundColor: 'var(--accent-inverse)',
                    color: 'var(--accent-primary)'
                  }}
                >
                  Let's Collaborate
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="#services"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium border transition-all"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--accent-inverse)',
                    borderColor: 'var(--accent-inverse)'
                  }}
                >
                  View Services
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

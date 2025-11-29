"use client"

import Container from "@/components/ui/container"
import Reveal from "@/components/motion/Reveal"
import { useTranslations } from "./TranslationProvider"
import { Search, Lightbulb, Wrench, Rocket, BarChart } from "lucide-react"
import { ArrowUpRight } from "lucide-react"

const stepIcons = [Search, Lightbulb, Wrench, Rocket, BarChart]

export default function Process() {
  const dictionary = useTranslations()
  const process = dictionary.process

  return (
    <section id="process" className="section-pad-lg bg-white">
      <Container>
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-5xl text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold text-neutral-900 mb-6">
              {process.title.split(' ').slice(0, -2).join(' ')}{' '}
              <span className="italic font-serif font-normal text-neutral-900">
                {process.title.split(' ').slice(-2).join(' ')}
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              {process.intro}
            </p>
          </div>
        </Reveal>

        {/* Process Cards Grid - Full Width with Numbers */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {process.steps.map((step, index) => {
              const Icon = stepIcons[index]
              const colors = [
                { bg: 'bg-purple-50', icon: 'text-purple-500', number: 'text-purple-500' },
                { bg: 'bg-pink-50', icon: 'text-pink-500', number: 'text-pink-500' },
                { bg: 'bg-blue-50', icon: 'text-blue-500', number: 'text-blue-500' },
                { bg: 'bg-orange-50', icon: 'text-orange-500', number: 'text-orange-500' },
                { bg: 'bg-green-50', icon: 'text-green-500', number: 'text-green-500' }
              ]
              const color = colors[index % colors.length]

              return (
                <div
                  key={step.label ?? index}
                  className={`${color.bg} rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg relative`}
                >
                  {/* Step Number */}
                  <div className={`absolute top-6 right-6 text-6xl font-bold ${color.number} opacity-20`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <Icon className={`w-12 h-12 ${color.icon} mb-6 relative z-10`} strokeWidth={1.5} />
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed relative z-10">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* CTA Section - Dark rounded container */}
        <Reveal delay={0.3}>
          <div className="bg-neutral-900 rounded-[3rem] p-10 sm:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Text */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                  Ready to Transform Your Operations?
                </h3>
                <p className="text-lg text-neutral-300">
                  Let's Build Systems That Actually Work for You
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                <a
                  href="https://www.upwork.com/freelancers/~01577deb572030ada8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-white text-neutral-900 px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  Let's Collaborate
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="#services"
                  className="group inline-flex items-center gap-3 bg-transparent text-white px-8 py-4 rounded-full text-base font-semibold border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-0.5"
                >
                  View Services
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

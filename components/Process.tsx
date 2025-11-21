"use client"

import Container from "@/components/ui/container"
import { useTranslations } from "./TranslationProvider"
import { motion } from "framer-motion"

export default function Process() {
  const dictionary = useTranslations()
  const process = dictionary.process

  return (
    <section id="process" className="section-pad-lg section-surface pb-28">
      <Container>
        {/* Two Column Layout */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] items-start mt-4">
          {/* Left summary column - static, no animation */}
          <div className="space-y-4 lg:top-32 self-start">
            <span className="section-badge">{process.badge}</span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-(--text-main)">
              {process.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-(--text-muted) leading-relaxed max-w-md">
              {process.intro}
            </p>
          </div>

          {/* Right steps column - per-step scroll reveals */}
          <div className="space-y-8">
            {process.steps.map((step, index) => (
              <motion.div
                key={step.label ?? index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                  delay: index * 0.06,
                }}
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-(--accent-soft) text-xs font-medium text-(--accent-primary)">
                  {step.label ?? String(index + 1).padStart(2, "0")}
                </div>
                <div className="space-y-1 max-w-xl">
                  <h3 className="text-base sm:text-lg font-semibold text-(--text-main)">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-(--text-muted) leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

"use client"

import Container from "@/components/ui/container"
import Reveal from "@/components/motion/Reveal"
import { useTranslations } from "./TranslationProvider"
import { ArrowUpRight, Star } from "lucide-react"

type Props = {
  upworkUrl: string
  calendlyUrl?: string
}

export default function Hero({ upworkUrl }: Props) {
  const dictionary = useTranslations()
  const hero = dictionary.hero

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 md:py-36 lg:py-44 bg-neutral-50">
      <Container className="max-w-5xl">
        <Reveal>
          <div className="text-center">
            {/* Badge */}
            <div className="mb-8">
              <span className="inline-flex items-center bg-white text-neutral-600 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-neutral-200">
                {hero.badge}
              </span>
            </div>

            {/* Title - Mix of bold sans + italic serif */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] font-bold text-neutral-900 mb-8">
              {hero.title.split(' ').slice(0, -2).join(' ')}{' '}
              <span className="italic font-serif font-normal">
                {hero.title.split(' ').slice(-2).join(' ')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-3xl mx-auto mb-12">
              {hero.subtitle}
            </p>

            {/* CTA Group with Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Primary CTA */}
              <a
                href={upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-0.5"
              >
                {hero.primaryCta}
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Social Proof */}
              <div className="flex items-center gap-4">
                {/* Avatar Stack */}
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-blue-600 border-2 border-white shadow-sm" />
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-400 to-purple-600 border-2 border-white shadow-sm" />
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-orange-400 to-orange-600 border-2 border-white shadow-sm" />
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-green-400 to-green-600 border-2 border-white shadow-sm" />
                </div>

                {/* Rating */}
                <div className="text-left">
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-neutral-600 font-medium">
                    Trusted by 50+ clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

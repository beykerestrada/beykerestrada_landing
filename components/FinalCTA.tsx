"use client"

import Button from "@/components/ui/button"
import Container from "@/components/ui/container"
import SectionHeader from "@/components/ui/section-header"
import Reveal from "@/components/motion/Reveal"
import { useTranslations } from "./TranslationProvider"

type Props = {
  upworkUrl: string
  calendlyUrl?: string
}

export default function FinalCTA({ upworkUrl, calendlyUrl }: Props) {
  const dictionary = useTranslations()
  const final = dictionary.finalCta

  return (
    <section className="relative bg-[#f5f5f5] py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10 bg-transparent" />

      <Container className="space-y-12 text-center">
        <Reveal>
          <SectionHeader eyebrow={final.badge} title={final.title} description={final.subtitle} align="center" />
        </Reveal>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button as="a" href={upworkUrl} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
            {final.primaryCta}
          </Button>
          {calendlyUrl && (
            <Button as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer" variant="ghost" size="lg">
              {final.secondaryCta}
            </Button>
          )}
        </div>

      </Container>
    </section>
  )
}

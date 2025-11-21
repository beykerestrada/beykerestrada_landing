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

export default function Contact({ upworkUrl, calendlyUrl }: Props) {
  const dictionary = useTranslations()
  const contact = dictionary.contact

  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeader eyebrow={contact.badge} title={contact.title} description={contact.subtitle} align="center" />
        </Reveal>

        <Reveal>
          <div className="mx-auto max-w-2xl space-y-8 text-center">
            {/* Email contact */}
            <div className="space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-xl font-semibold text-[hsl(var(--brand))] transition-opacity hover:opacity-70"
              >
                {contact.email}
              </a>
              <p className="text-sm text-muted-foreground">{contact.responseTime}</p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {calendlyUrl && (
                <Button as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer" variant="brand" size="lg">
                  {contact.emailLabel}
                </Button>
              )}
              <Button as="a" href={upworkUrl} target="_blank" rel="noopener noreferrer" variant="ghost" size="lg">
                {dictionary.header.hireCta}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

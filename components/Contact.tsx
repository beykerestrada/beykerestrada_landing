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
    <section id="contact" className="section-pad-lg" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <Container className="space-y-10">
        <Reveal>
          <SectionHeader eyebrow={contact.badge} title={contact.title} description={contact.subtitle} align="center" />
        </Reveal>

        <Reveal>
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            {/* Email contact */}
            <div className="space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-lg font-medium transition-opacity hover:opacity-70"
                style={{ color: 'var(--text-main)' }}
              >
                {contact.email}
              </a>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{contact.responseTime}</p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
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

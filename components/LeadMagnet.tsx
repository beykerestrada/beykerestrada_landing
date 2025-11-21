"use client"

import { useState } from "react"
import Button from "@/components/ui/button"
import CardShell from "@/components/ui/card-shell"
import Container from "@/components/ui/container"
import SectionHeader from "@/components/ui/section-header"
import Reveal from "@/components/motion/Reveal"
import { useTranslations } from "./TranslationProvider"

export default function LeadMagnet() {
  const dictionary = useTranslations()
  const leadMagnet = dictionary.leadMagnet
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with your email service (e.g., ConvertKit, Mailchimp, etc.)
    console.log("Email submitted:", email)
    setSubmitted(true)
  }

  return (
    <section className="bg-[#f5f5f5] py-24 md:py-32">
      <Container>
        <Reveal>
          <CardShell className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4 text-center">
              <span className="inline-flex items-center justify-center rounded-full border border-border/50 bg-muted/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground/80">
                {leadMagnet.badge}
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{leadMagnet.title}</h2>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{leadMagnet.subtitle}</p>
            </div>

            {/* Benefits */}
            <ul className="space-y-3 text-left">
              {leadMagnet.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                  <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--brand))]" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Email form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={leadMagnet.ctaPlaceholder}
                    className="flex-1 rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[hsl(var(--brand))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))/20]"
                  />
                  <Button type="submit" variant="brand" size="lg" className="sm:w-auto">
                    {leadMagnet.ctaButton}
                  </Button>
                </div>
                <p className="text-center text-xs text-muted-foreground">{leadMagnet.privacyNote}</p>
              </form>
            ) : (
              <div className="rounded-lg border border-[hsl(var(--brand))/30] bg-[hsl(var(--brand))/5] p-6 text-center">
                <p className="text-base font-medium text-foreground">Thanks! Check your email for the checklist.</p>
              </div>
            )}
          </CardShell>
        </Reveal>
      </Container>
    </section>
  )
}

"use client"

import CardShell from "@/components/ui/card-shell"
import Container from "@/components/ui/container"
import SectionHeader from "@/components/ui/section-header"
import Button from "@/components/ui/button"

const TESTIMONIALS = [
  {
    quote: '"Beyker translated messy operations into calm systems. Every workflow felt considered, not rushed."',
    author: "Ops Lead, SaaS",
  },
  {
    quote: '"He listens, prototypes fast, and documents so our team never wondered what changed or why."',
    author: "Founder, Product Studio",
  },
  {
    quote:
      '"Structured, thoughtful, and deeply execution-focused. We shipped more in three weeks than in the previous quarter."',
    author: "COO, Growth Collective",
  },
]

export default function MicroTestimonials() {
  return (
    <section className="bg-white py-24" aria-labelledby="testimonials-heading">
      <Container className="space-y-10">
        <SectionHeader
          id="testimonials-heading"
          eyebrow="Client Impressions"
          title="Thoughtful, structured, and execution-focused"
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map(({ quote, author }) => (
            <CardShell key={author} tone="muted" className="space-y-3">
              <p className="text-base italic text-foreground/90">{quote}</p>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{author}</span>
            </CardShell>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Button as="a" href="#process" variant="primary">
            See how I work
          </Button>
        </div>
      </Container>
    </section>
  )
}

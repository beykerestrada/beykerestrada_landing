"use client";

import Reveal from "@/components/motion/Reveal";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";

const LOGOS = ["OpenAI", "Notion", "Zapier", "n8n", "Make", "Google Suite"];

export default function Trust() {
  return (
    <section className="border-y border-border/60 bg-muted/30 py-16">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeader
            eyebrow="Tools & Ecosystem"
            title="Trusted by teams operating on modern stacks"
            align="center"
          />
        </Reveal>

        <div className="grid grid-cols-2 gap-4 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:grid-cols-3 lg:grid-cols-6">
          {LOGOS.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center rounded-xl border border-border/70 bg-background/80 px-4 py-6 transition hover:text-foreground"
            >
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

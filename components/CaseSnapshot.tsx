"use client";

import CardShell from "@/components/ui/card-shell";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/Reveal";
import { useTranslations } from "./TranslationProvider";

export default function CaseSnapshot() {
  const dictionary = useTranslations();
  const snapshot = dictionary.caseSnapshot;

  return (
    <section className="border-y border-border/60 bg-[#f5f5f5] py-20" aria-labelledby="case-snapshot-heading">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeader
            id="case-snapshot-heading"
            eyebrow={snapshot.eyebrow}
            title={snapshot.title}
            align="center"
          />
        </Reveal>

        <Reveal>
          <CardShell className="space-y-6 text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/80">
              {snapshot.client}
            </p>
            <p className="text-base text-foreground">{snapshot.scope}</p>
            <p className="text-base text-foreground/80">{snapshot.outcome}</p>

            {/* Metrics grid */}
            <div className="grid gap-6 border-t border-border/60 pt-6 sm:grid-cols-3">
              {snapshot.metrics.map((metric) => (
                <div key={metric.label} className="space-y-2">
                  <p className="text-3xl font-bold tracking-tight text-[hsl(var(--brand))]">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </CardShell>
        </Reveal>
      </Container>
    </section>
  );
}

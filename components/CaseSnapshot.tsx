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
    <section className="section-pad-lg" style={{ backgroundColor: 'var(--bg-surface)' }} aria-labelledby="case-snapshot-heading">
      <Container className="space-y-8 max-w-4xl">
        <Reveal>
          <SectionHeader
            id="case-snapshot-heading"
            eyebrow={snapshot.eyebrow}
            title={snapshot.title}
            align="center"
          />
        </Reveal>

        <Reveal>
          <CardShell className="space-y-6 text-left" style={{
            backgroundColor: 'rgba(169, 178, 140, 0.03)',
            borderColor: 'rgba(169, 178, 140, 0.12)'
          }}>
            <p className="text-xs uppercase tracking-wider font-medium" style={{ color: 'var(--text-subtle)' }}>
              {snapshot.client}
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-main)' }}>{snapshot.scope}</p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{snapshot.outcome}</p>

            {/* Metrics grid */}
            <div className="grid gap-6 border-t pt-6 sm:grid-cols-3" style={{ borderColor: 'var(--border-subtle)' }}>
              {snapshot.metrics.map((metric) => (
                <div key={metric.label} className="space-y-2">
                  <p className="text-3xl font-semibold tracking-tight" style={{ color: 'var(--text-main)' }}>{metric.value}</p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{metric.label}</p>
                </div>
              ))}
            </div>
          </CardShell>
        </Reveal>
      </Container>
    </section>
  );
}

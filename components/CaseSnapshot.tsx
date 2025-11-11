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
    <section className="border-y border-border/60 bg-muted/20 py-20" aria-labelledby="case-snapshot-heading">
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
          <CardShell className="space-y-4 text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              {snapshot.client}
            </p>
            <p className="text-base text-foreground">{snapshot.scope}</p>
            <p className="text-base text-muted-foreground">{snapshot.outcome}</p>
          </CardShell>
        </Reveal>
      </Container>
    </section>
  );
}

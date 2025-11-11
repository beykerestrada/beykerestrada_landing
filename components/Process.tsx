"use client";

import CardShell from "@/components/ui/card-shell";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/Reveal";
import { useTranslations } from "./TranslationProvider";

export default function Process() {
  const dictionary = useTranslations();
  const process = dictionary.process;

  return (
    <section className="py-24" id="process">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeader
            eyebrow={process.badge}
            title={process.title}
            description={process.subtitle}
            align="center"
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {process.steps.map((step) => (
            <Reveal key={step.title}>
              <CardShell className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-base text-muted-foreground">{step.desc}</p>
              </CardShell>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

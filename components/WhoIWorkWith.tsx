"use client";

import Reveal from "@/components/motion/Reveal";
import CardShell from "@/components/ui/card-shell";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import { useTranslations } from "./TranslationProvider";

export default function WhoIWorkWith() {
  const dictionary = useTranslations();
  const section = dictionary.whoIWorkWith;

  return (
    <section className="py-24" aria-labelledby="who-i-work-with-heading">
      <Container className="space-y-10">
        <Reveal>
          <SectionHeader
            id="who-i-work-with-heading"
            eyebrow={section.eyebrow}
            title={section.title}
            align="center"
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {section.bullets.map((item) => (
            <Reveal key={item.title}>
              <CardShell className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-base text-muted-foreground">{item.detail}</p>
              </CardShell>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-center text-sm text-muted-foreground">{section.note}</p>
        </Reveal>
      </Container>
    </section>
  );
}

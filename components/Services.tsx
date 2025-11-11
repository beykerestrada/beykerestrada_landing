"use client";

import Button from "@/components/ui/button";
import CardShell from "@/components/ui/card-shell";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/Reveal";
import { useTranslations } from "./TranslationProvider";

type Props = {
  upworkUrl: string;
  consultationUrl: string;
};

export default function Services({ upworkUrl, consultationUrl }: Props) {
  const dictionary = useTranslations();
  const services = dictionary.services;

  return (
    <section className="bg-background py-24" id="services">
      <Container className="space-y-12">
        <Reveal>
          <SectionHeader
            eyebrow={services.badge}
            title={services.title}
            description={services.subtitle}
            align="center"
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.cards.map((card) => (
            <Reveal key={card.title}>
              <CardShell className="flex h-full flex-col gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{card.title}</h3>
                  <p className="text-base text-muted-foreground">{card.summary}</p>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="list-inside list-disc">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-foreground">
                  {services.fromLabel} {card.price}
                </p>
              </CardShell>
            </Reveal>
          ))}
        </div>

       <Reveal>
          <CardShell tone="muted" className="space-y-4 text-center md:text-left">
            <span className="inline-flex items-center justify-center rounded-full border border-border/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              {services.addon.badge}
            </span>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">{services.addon.title}</h3>
              <p className="text-base text-muted-foreground">{services.addon.summary}</p>
            </div>
            <Button
              as="a"
              href={consultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              className="self-center md:self-start"
            >
              {services.addon.cta}
            </Button>
          </CardShell>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-3">
          <Button as="a" href={upworkUrl} target="_blank" rel="noopener noreferrer" variant="primary">
            {services.learnMoreCta}
          </Button>
          <Button as="a" href={consultationUrl} target="_blank" rel="noopener noreferrer" variant="ghost">
            {services.addon.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}

"use client";

import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Reveal from "@/components/motion/Reveal";
import { useTranslations } from "./TranslationProvider";

type Props = {
  upworkUrl: string;
  calendlyUrl?: string;
};

export default function Hero({ upworkUrl, calendlyUrl }: Props) {
  const dictionary = useTranslations();
  const hero = dictionary.hero;

  return (
    <section className="bg-background py-24 sm:py-32">
      <Container className="space-y-10">
        <Reveal>
          <div className="space-y-6 text-balance">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Systems & Automation
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {hero.title}
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {hero.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="flex flex-wrap gap-4">
          <Button
            as="a"
            href={upworkUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            {hero.primaryCta}
          </Button>
          {calendlyUrl && (
            <Button
              as="a"
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              {hero.secondaryCta}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}

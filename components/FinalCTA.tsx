"use client";

import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import Reveal from "@/components/motion/Reveal";
import { useTranslations } from "./TranslationProvider";

type Props = {
  upworkUrl: string;
  calendlyUrl?: string;
};

export default function FinalCTA({ upworkUrl, calendlyUrl }: Props) {
  const dictionary = useTranslations();
  const final = dictionary.finalCta;

  return (
    <section className="section-pad-lg">
      <Container className="space-y-10 text-center">
        <Reveal>
          <SectionHeader
            eyebrow={final.badge}
            title={final.title}
            description={final.subtitle}
            align="center"
          />
        </Reveal>

        <div className="flex flex-wrap justify-center gap-3">
          <Button
            as="a"
            href={upworkUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            {final.primaryCta}
          </Button>
          {calendlyUrl && (
            <Button
              as="a"
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              {final.secondaryCta}
            </Button>
          )}
        </div>

        <p className="text-sm text-muted-foreground">
          {final.expectation}
        </p>
      </Container>
    </section>
  );
}

"use client";

import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import { useTranslations } from "./TranslationProvider";

type Props = {
  upworkUrl: string;
};

export default function Footer({ upworkUrl }: Props) {
  const dictionary = useTranslations();
  const footer = dictionary.footer;

  return (
    <footer className="border-t border-border py-12 text-sm text-muted-foreground">
      <Container className="flex flex-col items-center gap-4 text-center">
        <p className="text-base font-medium text-foreground">
          {footer.brand}
        </p>

        <Button
          as="a"
          href={upworkUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
        >
          {footer.cta}
        </Button>

        <p className="text-xs text-muted-foreground">{footer.legal}</p>
      </Container>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/container";
import { useTranslations } from "./TranslationProvider";

export default function Header() {
  const pathname = usePathname();
  const dictionary = useTranslations();
  const header = dictionary.header;

  const currentLocale = pathname.split("/")[1] || "en";

  const buildLocalizedPath = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/") || "/";
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <Container className="flex items-center justify-between py-5">
        <Link href={`/${currentLocale}`} className="font-semibold tracking-tight text-foreground">
          {header.brand}
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <Link href={`/${currentLocale}#services`} className="hover:text-foreground">
            {header.nav.services}
          </Link>
          <Link href={`/${currentLocale}#value`} className="hover:text-foreground">
            {header.nav.value}
          </Link>
          <Link href={`/${currentLocale}#process`} className="hover:text-foreground">
            {header.nav.process}
          </Link>
          <Link href={`/${currentLocale}#contact`} className="hover:text-foreground">
            {header.nav.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.upwork.com/freelancers/~01577deb572030ada8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-border/70 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-muted"
          >
            {header.hireCta}
          </a>

          <div className="hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground sm:flex">
            {Object.entries(header.languageNames).map(([locale, name]) => (
              <Link
                key={locale}
                href={buildLocalizedPath(locale)}
                hrefLang={locale}
                prefetch={false}
                locale={false}
                className={locale === currentLocale ? "text-foreground" : "hover:text-foreground"}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}

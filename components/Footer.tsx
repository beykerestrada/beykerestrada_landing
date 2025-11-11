"use client"

import Container from "@/components/ui/container"
import { useTranslations } from "./TranslationProvider"
import { Linkedin, Twitter, Mail } from "lucide-react"

type Props = {
  upworkUrl: string
}

export default function Footer({ upworkUrl }: Props) {
  const dictionary = useTranslations()
  const footer = dictionary.footer
  const header = dictionary.header

  return (
    <footer className="border-t border-border/30 bg-background py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand + Description Column */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-bold tracking-tight text-foreground">{footer.brand}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{footer.description}</p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://linkedin.com/in/beykerestrada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:border-border hover:bg-muted/50 hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/beykerestrada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:border-border hover:bg-muted/50 hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="mailto:contact@beykerestrada.com"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:border-border hover:bg-muted/50 hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid gap-8 sm:grid-cols-2 md:col-span-8 md:grid-cols-3">
            {/* Services Navigation */}
            <div>
              <h4 className="text-sm font-semibold tracking-tight text-foreground">{header.nav.services}</h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Notion Systems
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    n8n Automation
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Operational Architecture
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Workspace Audit
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Navigation */}
            <div>
              <h4 className="text-sm font-semibold tracking-tight text-foreground">Company</h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#value" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {header.nav.value}
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {header.nav.process}
                  </a>
                </li>
                <li>
                  <a
                    href="#who-i-work-with"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Who I Work With
                  </a>
                </li>
                <li>
                  <a
                    href={upworkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Upwork Profile
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Navigation */}
            <div>
              <h4 className="text-sm font-semibold tracking-tight text-foreground">{header.nav.contact}</h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Book a Call
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@beykerestrada.com"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={upworkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {footer.hireCta}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 text-sm text-muted-foreground/70 md:flex-row">
          <p>
            © {new Date().getFullYear()} {footer.brand}. All rights reserved.
          </p>
          <p>{footer.legal}</p>
        </div>
      </Container>
    </footer>
  )
}

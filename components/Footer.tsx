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
    <footer className="border-t py-16" style={{
      borderColor: 'var(--border-subtle)',
      backgroundColor: 'var(--accent-primary)',
      color: 'var(--accent-inverse)'
    }}>
      <Container>
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand + Description Column */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold tracking-tight">{footer.brand}</h3>
            <p className="mt-4 text-sm leading-relaxed opacity-80">{footer.description}</p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://linkedin.com/in/beykerestrada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border transition-all"
                style={{
                  borderColor: 'var(--accent-inverse)',
                  opacity: 0.7
                }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/beykerestrada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border transition-all"
                style={{
                  borderColor: 'var(--accent-inverse)',
                  opacity: 0.7
                }}
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="mailto:contact@beykerestrada.com"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border transition-all"
                style={{
                  borderColor: 'var(--accent-inverse)',
                  opacity: 0.7
                }}
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
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--accent-inverse)', opacity: 0.95 }}>{header.nav.services}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-sm transition-opacity opacity-80 hover:opacity-100">
                    Notion Systems
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm transition-opacity opacity-80 hover:opacity-100">
                    n8n Automation
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm transition-opacity opacity-80 hover:opacity-100">
                    Operational Architecture
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm transition-opacity opacity-80 hover:opacity-100">
                    Workspace Audit
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Navigation */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ opacity: 0.95 }}>Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#value" className="text-sm transition-opacity opacity-80 hover:opacity-100">
                    {header.nav.value}
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-sm transition-opacity opacity-80 hover:opacity-100">
                    {header.nav.process}
                  </a>
                </li>
                <li>
                  <a href="#who-i-work-with" className="text-sm transition-opacity opacity-80 hover:opacity-100">
                    Who I Work With
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Navigation */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ opacity: 0.95 }}>{header.nav.contact}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#contact" className="text-sm transition-opacity opacity-80 hover:opacity-100">
                    Book a Call
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@beykerestrada.com" className="text-sm transition-opacity opacity-80 hover:opacity-100">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t pt-8 text-xs opacity-70 md:flex-row" style={{
          borderColor: 'var(--accent-inverse)',
          opacity: 0.4
        }}>
          <p>
            © {new Date().getFullYear()} {footer.brand}. All rights reserved.
          </p>
          <p>{footer.legal}</p>
        </div>
      </Container>
    </footer>
  )
}

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
    <footer className="border-t border-neutral-800 bg-neutral-900 py-20">
      <Container>
        <div className="grid gap-16 md:grid-cols-12">
          {/* Brand + Description Column */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold tracking-tight text-white">{footer.brand}</h3>
            <p className="mt-5 text-base leading-relaxed text-neutral-300">{footer.description}</p>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://linkedin.com/in/beykerestrada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-neutral-700 text-neutral-300 transition-all hover:border-white hover:bg-neutral-800 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/beykerestrada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-neutral-700 text-neutral-300 transition-all hover:border-white hover:bg-neutral-800 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@beykerestrada.com"
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-neutral-700 text-neutral-300 transition-all hover:border-white hover:bg-neutral-800 hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid gap-12 sm:grid-cols-2 md:col-span-8 md:grid-cols-3">
            {/* Services Navigation */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">{header.nav.services}</h4>
              <ul className="mt-5 space-y-3">
                <li>
                  <a href="#services" className="text-base text-neutral-300 transition-colors hover:text-white">
                    Notion Systems
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-base text-neutral-300 transition-colors hover:text-white">
                    n8n Automation
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-base text-neutral-300 transition-colors hover:text-white">
                    Operational Architecture
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-base text-neutral-300 transition-colors hover:text-white">
                    Workspace Audit
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Navigation */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Company</h4>
              <ul className="mt-5 space-y-3">
                <li>
                  <a href="#value" className="text-base text-neutral-300 transition-colors hover:text-white">
                    {header.nav.value}
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-base text-neutral-300 transition-colors hover:text-white">
                    {header.nav.process}
                  </a>
                </li>
                <li>
                  <a
                    href="#who-i-work-with"
                    className="text-base text-neutral-300 transition-colors hover:text-white"
                  >
                    Who I Work With
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Navigation */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">{header.nav.contact}</h4>
              <ul className="mt-5 space-y-3">
                <li>
                  <a href="#contact" className="text-base text-neutral-300 transition-colors hover:text-white">
                    Book a Call
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@beykerestrada.com"
                    className="text-base text-neutral-300 transition-colors hover:text-white"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-700 pt-10 text-sm text-neutral-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} {footer.brand}. All rights reserved.
          </p>
          <p>{footer.legal}</p>
        </div>
      </Container>
    </footer>
  )
}

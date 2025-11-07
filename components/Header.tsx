"use client";

import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "./TranslationProvider";

export default function Header({ upworkUrl }: { upworkUrl: string }) {
  const t = useTranslations();

  return (
    <header style={{ padding: "1.5rem 0", borderBottom: "1px solid var(--border)" }}>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left: Brand name */}
        <div style={{ fontWeight: 600, fontSize: "1rem", letterSpacing: "-0.015em" }}>
          <Link href="/">Beyker Estrada</Link>
        </div>

        {/* Center: Navigation */}
        <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <Link href="#method" className="nav-link">
            Method
          </Link>
          <Link href="#workflows" className="nav-link">
            Workflows
          </Link>
          <Link href="#about" className="nav-link">
            About
          </Link>
        </nav>

        {/* Right: Language & CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <LanguageSwitcher />
          <a
            href={upworkUrl}
            className="btn btn-sm btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.header.hireCta}
          </a>
        </div>
      </div>
    </header>
  );
}

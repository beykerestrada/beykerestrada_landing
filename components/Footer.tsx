"use client";

// components/Footer.tsx
import { useTranslations } from "./TranslationProvider";

export default function Footer({ upworkUrl }: { upworkUrl: string }) {
  const year = new Date().getFullYear();
  const dictionary = useTranslations();
  const footer = dictionary.footer;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-shell">
          <div>
            <p>{footer.description}</p>
            <span>
              {footer.legal} © {year}
            </span>
          </div>
          <a href={upworkUrl} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
            {footer.hireCta}
          </a>
        </div>
      </div>
    </footer>
  );
}

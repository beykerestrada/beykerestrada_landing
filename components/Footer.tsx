"use client";

import { useTranslations } from "./TranslationProvider";

export default function Footer() {
  const dictionary = useTranslations();
  const footer = dictionary.footer;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-description">{footer.description}</p>
          <div className="footer-links">
            <a
              href="https://www.upwork.com/freelancers/~01577deb572030ada8"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta"
            >
              {footer.hireCta}
            </a>
            <span className="footer-legal">{footer.legal}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

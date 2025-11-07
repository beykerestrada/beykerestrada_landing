"use client";

import { useTranslations } from "./TranslationProvider";

type Props = {
  upworkUrl: string;
};

export default function Footer({ upworkUrl }: Props) {
  const dictionary = useTranslations();
  const footer = dictionary.footer;

  return (
    <footer className="site-footer">
      <div className="container">
        <p className="footer-brand">{footer.brand}</p>

        <a
          href={upworkUrl}
          className="footer-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          {footer.cta}
        </a>
      </div>
    </footer>
  );
}

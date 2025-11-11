import React from "react";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://beykerestrada.com").replace(/\/$/, "");
const OG_IMAGE = `${SITE_URL}/og-default.jpg`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "name": "Beyker Estrada",
      "jobTitle": "AI Automation Consultant & Systems Architect",
      "worksFor": {
        "@type": "Organization",
        "name": "Beyker Estrada Consulting",
      },
      "url": SITE_URL,
      "image": OG_IMAGE,
      "sameAs": [
        "https://www.linkedin.com/in/beykerestrada",
        "https://github.com/beykerestrada",
        "https://www.upwork.com/freelancers/~01577deb572030ada8",
      ],
    },
    {
      "@type": "Organization",
      "name": "Beyker Estrada Consulting",
      "url": SITE_URL,
      "logo": OG_IMAGE,
      "founder": "Beyker Estrada",
      "description": "AI automation and systems consulting studio for founders and teams.",
    },
    {
      "@type": "WebSite",
      "name": "Beyker Estrada",
      "url": SITE_URL,
      "description":
        "AI Automation Consultant & Systems Architect helping founders and teams automate operations, scale workflows, and build intelligent business systems.",
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}


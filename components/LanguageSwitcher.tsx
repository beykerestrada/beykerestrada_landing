"use client";

import { usePathname, useRouter } from "next/navigation";

const locales = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1];
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <select
      onChange={handleChange}
      value={currentLocale}
      style={{
        background: "transparent",
        border: "none",
        fontSize: "1rem",
        cursor: "pointer",
      }}
    >
      {locales.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  );
}

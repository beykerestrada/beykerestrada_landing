import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--bg))",
        foreground: "hsl(var(--fg))",

        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-fg))",

        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-fg))",

        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-fg))",

        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-fg))",

        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-fg))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
      },
      spacing: {
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
        xl: "var(--space-xl)",
        "2xl": "var(--space-2xl)",
        "3xl": "var(--space-3xl)",
      },
      fontSize: {
        xs: ["var(--font-xs)", "1.5"],
        sm: ["var(--font-sm)", "1.6"],
        base: ["var(--font-base)", "1.7"],
        lg: ["var(--font-lg)", "1.6"],
        xl: ["var(--font-xl)", "1.3"],
        "2xl": ["var(--font-2xl)", "1.2"],
        "3xl": ["var(--font-3xl)", "1.15"],
        "4xl": ["var(--font-4xl)", "1.1"],
        "5xl": ["var(--font-5xl)", "1.05"],
      },
      boxShadow: {
        subtle: "0 1px 2px 0 hsl(var(--shadow) / 0.08)",
        card: "0 2px 16px 0 hsl(var(--shadow) / 0.10)",
      },
      transitionTimingFunction: {
        soft: "var(--ease-soft)",
      },
      transitionDuration: {
        base: "var(--dur-base)",
        long: "var(--dur-long)",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        ":root": {
          "--tw-ring-color": "hsl(var(--ring))",
        },
      });
    },
  ],
};
export default config;

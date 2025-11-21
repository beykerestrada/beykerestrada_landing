# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bilingual (English/Spanish) landing page for Beyker Estrada, showcasing business operating systems and automation consulting services. Built with Next.js 16, React 19, and Tailwind CSS 4.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Internationalization (i18n)

The site uses a custom i18n implementation with route-based locales:

- **Supported locales**: `en` (default), `es`
- **Route structure**: `/[locale]/page.tsx` - all content pages are under `app/[locale]/`
- **Configuration**: `lib/i18n/config.ts` - defines supported locales and locale validation
- **Dictionaries**: `lib/i18n/dictionaries.ts` - contains all translations in a strongly-typed `SiteDictionary` structure
- **Translation access**: Components use `useTranslations()` and `useLocale()` hooks from `TranslationProvider`
- **Layout**: `app/[locale]/layout.tsx` handles metadata generation, canonical URLs, and Open Graph tags per locale

To add a new string to the site:
1. Add it to the `SiteDictionary` type in `lib/i18n/dictionaries.ts`
2. Add translations for both `en` and `es` in the `dictionaries` object
3. Access it in components via `useTranslations()`

### Page Structure

The main landing page (`app/[locale]/page.tsx`) follows a fixed section order:
1. Header (navigation)
2. Hero (value proposition + CTA)
3. Trust (ecosystem/credibility)
4. Workflows (systems in practice)
5. Value (operational clarity)
6. Services (offerings)
7. Process (methodology)
8. CaseSnapshot (concrete example)
9. WhoIWorkWith (ideal client profile)
10. FinalCTA (conversion)
11. Footer

All major sections are separate components in `components/` and receive URLs as props where needed (UPWORK, CALENDLY).

### Styling System

- **CSS Framework**: Tailwind CSS 4 with PostCSS
- **Design tokens**: Defined in `app/globals.css` using CSS custom properties
- **Color system**: Neutral grayscale palette with minimal accent colors for a clean editorial look
- **Theme**: Light and dark modes supported via CSS custom properties (`:root` and `.dark`)
- **Section component**: `components/Section.tsx` provides consistent section layout with `tone` prop (`plain`, `surface`, `elevated`)
- **UI components**: Extensive shadcn/ui component library in `components/ui/`
- **Utilities**: `lib/utils.ts` exports `cn()` helper for merging Tailwind classes with `clsx` and `tailwind-merge`

### Component Patterns

- **Server Components**: Pages and layouts are React Server Components by default
- **Client Components**: Marked with `"use client"` directive (e.g., `TranslationProvider`, `LanguageSwitcher`)
- **Animation**: Uses Framer Motion for scroll animations and interactions (see `components/motion/Reveal.tsx`)
- **SEO**: Structured data handled in `components/seo/StructuredData.tsx`

### Path Aliases

The project uses `@/*` for absolute imports:
```typescript
import { cn } from "@/lib/utils"
import { useTranslations } from "@/components/TranslationProvider"
```

## Environment Variables

- `NEXT_PUBLIC_SITE_URL`: Base URL for canonical links and OG images (defaults to `https://beykerestrada.com`)
- `NEXT_PUBLIC_CALENDLY_URL`: Calendly booking URL (optional, falls back to Upwork URL)

## Code Style

- TypeScript strict mode enabled
- Target: ES6
- Prefer explicit types over inference in function signatures
- Use functional components with hooks over class components

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `pnpm dev` or `npm run dev`
- **Build for production**: `pnpm build` or `npm run build`  
- **Start production server**: `pnpm start` or `npm run start`
- **Run linting**: `pnpm lint` or `npm run lint`

Note: This project uses pnpm as the package manager (see package.json packageManager field).

## Architecture Overview

This is a **multilingual Next.js 14 landing page template** built with shadcn/ui components and a custom internationalization system.

### Internationalization Architecture

The project implements a custom i18n system using `next-i18n-router`:

- **Route Structure**: `app/[locale]/` - All pages are under dynamic locale routes
- **Supported Languages**: English (en), Simplified Chinese (zh), Traditional Chinese (tw)
- **Language Detection**: URL-based routing (e.g., `/en/`, `/zh/`, `/tw/`)
- **Default Language**: English (en) - accessible via `/` which redirects to `/en/`

**Key i18n Files**:
- `middleware.ts` - Handles locale routing and redirection
- `i18n/index.ts` - Main i18n configuration and dictionary management
- `i18n/languageLoader.ts` - Dynamic language loading with caching
- `i18n/[locale]/` - Language-specific translation files
- `context/useLangProvider.tsx` - React context for language state
- `components/layout/LanguageSwitcher.tsx` - Language switching UI

### Configuration System

Centralized configuration in `configs/website.ts`:
- Brand information and metadata
- Theme switcher settings (`themeSwitcher.open` controls visibility)
- i18n locale configuration
- Cache settings for language packs

### Layout Structure

- **Root Layout** (`app/layout.tsx`): Minimal wrapper that returns children
- **Locale Layout** (`app/[locale]/layout.tsx`): Contains actual HTML structure, providers, and multilingual metadata
- **Navbar**: Responsive navigation with mobile Sheet and desktop NavigationMenu
- **Theme System**: next-themes integration with light/dark mode support

### Component Architecture

- **UI Components** (`components/ui/`): shadcn/ui components
- **Layout Components** (`components/layout/`): Navigation, theme switching, language switching
- **Section Components** (`components/layout/sections/`): Landing page sections (hero, features, pricing, etc.)
- **Icon Components** (`components/icons/`): Social media and brand icons

### Type System

Global types defined in `types/global.d.ts`:
- `LocaleLang` - Supported language codes
- `WebsiteConfigTypes` - Configuration interface
- `RouteParams` - Dynamic route parameters

## Adding New Languages

Refer to `docs/add-new-language.md` for the complete step-by-step process. Key files to modify:
1. `types/global.d.ts` - Add language to LocaleLang type
2. `i18n/[new-locale]/` - Create language pack directory
3. `i18n/index.ts` - Update dictionaries and switch cases
4. `i18n/languageLoader.ts` - Update cache and loading logic
5. `configs/website.ts` - Add to locales array
6. `components/layout/LanguageSwitcher.tsx` - Add to language list

## Styling Guidelines (MANDATORY)

### CSS Variable System
This project uses a **strict CSS variable-based design system**. All colors MUST use predefined CSS variables.

**Required Practices:**
- ✅ Use semantic Tailwind classes: `bg-background`, `text-foreground`, `border-secondary`
- ✅ All colors defined in `app/globals.css` as CSS variables: `--primary`, `--background`, etc.
- ✅ HSL color format: `274 25% 36%` (values only, no `hsl()` wrapper)

**Forbidden Practices:**
- ❌ NEVER use hardcoded colors: `#fff`, `rgb(255,255,255)`, `white`, `blue-500`
- ❌ NEVER use arbitrary Tailwind values: `bg-[#ffffff]`, `text-[rgb(0,0,0)]`
- ❌ NEVER use direct HSL/RGB in styles: `color: hsl(274, 25%, 36%)`

**Adding New Colors:**
1. Define CSS variable in `app/globals.css` for both light and dark themes
2. Use semantic naming: `--accent-secondary`, `--success`, `--warning`
3. Apply via Tailwind semantic classes or extend Tailwind config

**Theme System:**
- Light/dark themes switch by changing CSS variable values
- All components automatically adapt through CSS variables
- Theme switching controlled by `website.themeSwitcher.open`

## Multilingual Routing Guidelines (MANDATORY)

### Route Navigation Rules

**For ALL page route navigation, ALWAYS use the i18nLink function:**

```tsx
import { useLangProviderContext } from "@/context/useLangProvider";

function MyComponent() {
  const { i18nLink } = useLangProviderContext();
  
  return (
    <Link href={i18nLink('/about')}>About</Link>
    <Link href={i18nLink('/products')}>Products</Link>
  );
}
```

**Route Structure Generated:**
- English: `i18nLink('/about')` → `/about`
- Simplified Chinese: `i18nLink('/about')` → `/zh/about`
- Traditional Chinese: `i18nLink('/about')` → `/tw/about`

**Exception - Anchor Links (same page navigation):**
```tsx
<Link href="#testimonials">Testimonials</Link>
<Link href="#contact">Contact</Link>
```

**✅ REQUIRED:** Use `i18nLink()` for all page route navigation
**❌ FORBIDDEN:** Direct hardcoded paths like `href="/about"` or `href="/zh/about"`

## Important Notes

- **Language Caching**: Uses localStorage with configurable TTL (2 hours default)
- **Theme Integration**: Theme switching can be disabled via `website.themeSwitcher.open`
- **Metadata**: Supports multilingual SEO metadata via `generateMetadata` in locale layout
- **Static Assets**: Images should be placed in `public/` directory
- **Design System**: Strict CSS variable system - NO hardcoded colors allowed
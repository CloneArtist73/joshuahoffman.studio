# AGENTS

## Runtime + build workflows

- Install dependencies:
  - `npm install`
- Confirm Node runtime requirement:
  - `node -v` (project requires Node `>=20.0.0`)
- Start local dev server:
  - `npm run dev`
- Build production output (static):
  - `npm run build`
- Preview the built site:
  - `npm run preview`
- Enable local content-entry helper on a non-default environment (Windows PowerShell):
  - `$env:PUBLIC_ENABLE_ENTRY = 'true'; npm run dev`

## Key page routes

- Static routes: `/`, `/gallery`, `/portraits`, `/legacy`, `/musicians`, `/prints`, `/contact`, `/about`, `/contact/thank-you/`
- Dynamic route: `/p/[slug]/` (generated from `src/data/images.ts`)
- Local helper route: `/entry/` (enabled only in development or when `PUBLIC_ENABLE_ENTRY=true`)

## Content editing workflow

- Primary editable content is in:
  - `src/data/site.ts`
  - `src/data/images.ts`
  - `src/data/services.ts`
  - `src/data/products.ts`
  - `src/data/externalLinks.ts`
  - `src/data/ctas.ts`
- SEO helpers: `src/utils/seo.ts`
- Gallery/product page metadata and tracing are driven from the data files.

## Analytics + forms

- Global script/event setup is in `src/scripts/analytics.ts` and `src/utils/analytics.ts`.
- Analytics provider is configured in `site.config.mjs` under `siteConfig.analytics`.
- Static contact form action and provider are configured in `site.config.mjs` and wired in `src/components/ContactForm.astro`.

## Deployment notes

- The project is configured as Astro static output (`astro.config.mjs`, `site: https://joshuahoffman.studio`).
- Robot configuration points to `/sitemap-index.xml`; confirm sitemap generation/output in build.
- Deployment uses static assets from `dist/` after `npm run build`.

## Local workflows

- `/entry/` is present but only functional when `import.meta.env.DEV` is true or `PUBLIC_ENABLE_ENTRY === 'true'`.
- The entry helper is optional and uses browser file-write APIs, so it is intended for local authoring and can show capability fallbacks in unsupported browsers.

## TODO (grounded in repo state)

- `src/data/externalLinks.ts` contains platform templates (Fine Art America, Etsy, Shopify, Pixieset), but these are still placeholder URLs and should be replaced with real product pages before launch.
- `src/data/products.ts` routeKeys are populated and product cards render outbound links, but availability depends on real external URLs in `src/data/externalLinks.ts`.
- `site.config.mjs` analytics is currently set to GA4 (`provider: 'ga4'`) with `gaMeasurementId` set; verify the measurement ID in GA4 before launch.
- `site.config.mjs` still has `contactForm.provider = 'none'` and requires a real static form endpoint/provider hookup (Day 2) while keeping the `/contact/thank-you/` success route.

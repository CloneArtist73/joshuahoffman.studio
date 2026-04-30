# AGENTS

## Runtime + build workflows

- Install dependencies:
  - `npm install`
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

## Local workflows

- `/entry/` is present but only functional when `import.meta.env.DEV` is true or `PUBLIC_ENABLE_ENTRY === 'true'`.
- The entry helper is optional and uses browser file-write APIs, so it is intended for local authoring and can show capability fallbacks in unsupported browsers.

## TODO (grounded in repo state)

- `src/data/externalLinks.ts` is currently empty, so outbound print/platform buttons are not yet connected.
- `src/data/products.ts` uses empty `routeKeys` for all products, so outbound purchase buttons currently render only custom-print inquiries.
- `site.config.mjs` still has placeholder SEO/contact identity values and analytics defaults (`provider: none`) until launch values are finalized.

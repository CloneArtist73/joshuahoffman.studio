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
- Error route: `/404`
- Dynamic route: `/p/[slug]/` (generated from `src/data/images.ts`)
- Local helper route: `/entry/` (development helper only; noindex, disallowed in `robots.txt`, excluded from the sitemap, and pruned from normal static build output)
- Local readiness report: `/entry/readiness.json` (development helper output under `/entry/`; noindex and pruned with the entry helper)

## Repo scripts

- Declared npm scripts are limited to:
  - `npm run dev`
  - `npm run build`
  - `npm run preview`

## Content editing workflow

- Primary editable content is in:
  - `src/data/site.ts`
  - `src/data/images.ts`
  - `src/data/services.ts`
  - `src/data/products.ts`
  - `src/data/externalLinks.ts`
  - `src/data/ctas.ts`
- SEO helpers: `src/utils/seo.ts`
- Content readiness helpers: `src/utils/readiness.ts` and `src/utils/readinessReport.ts`
- Gallery/product page metadata and tracing are driven from the data files.

## Analytics + forms

- Global script/event setup is in `src/scripts/analytics.ts` and `src/utils/analytics.ts`.
- Analytics provider is configured in `site.config.mjs` under `siteConfig.analytics`.
- Static contact form action and provider are configured in `site.config.mjs` and wired in `src/components/ContactForm.astro`.

## Deployment notes

- The project is configured as Astro static output (`astro.config.mjs`, `site: https://joshuahoffman.studio`).
- Robot configuration points to `/sitemap-index.xml`; noindex paths are listed in `site.config.mjs` and filtered out of sitemap output.
- Normal static builds remove local-only routes listed in `site.config.mjs` from `dist/`; `/entry/` remains a dev/local authoring route.
- Deployment uses static assets from `dist/` after `npm run build`.

## Local workflows

- `/entry/` is present in local development but normal static builds prune it from `dist/`.
- `/entry/` is only functional when `import.meta.env.DEV` is true or `PUBLIC_ENABLE_ENTRY === 'true'`.
- `/entry/readiness.json` reports draft/public content readiness issues locally and is pruned with `/entry/`.
- The entry helper is optional and uses browser file-write APIs, so it is intended for local authoring and can show capability fallbacks in unsupported browsers.

## TODO (grounded in repo state)

- `src/data/externalLinks.ts` contains platform templates (Fine Art America, Etsy, Shopify, Pixieset), but these are still placeholder URLs and should be replaced with real product pages before launch.
- `src/data/images.ts` and `src/data/products.ts` use `status: 'draft' | 'public'`; only public-ready image/product records should be promoted before launch.
- `src/data/products.ts` routeKeys are populated, but public product cards render live routes only when real external URLs exist; otherwise inquiry fallback should remain enabled.
- `site.config.mjs` analytics is currently set to GA4 (`provider: 'ga4'`) with `gaMeasurementId` set; verify the measurement ID in GA4 before launch.
- `site.config.mjs` still has `contactForm.provider = 'none'` and requires a real static form endpoint/provider hookup (Day 2) while keeping the `/contact/thank-you/` success route.

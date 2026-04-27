# Joshua Photography MVP

Static-first photography website MVP built with Astro and Tailwind CSS. It is designed to launch quickly, show emotional work clearly, route people toward inquiries or external checkout, and stay easy to edit through local data files.

## Stack

- Astro
- Tailwind CSS
- Local TypeScript data files
- Static contact form wiring for Netlify Forms by default
- Lightweight analytics helper that no-ops until a provider is configured

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start local development:

   ```bash
   npm run dev
   ```

3. Build the static site:

   ```bash
   npm run build
   ```

4. Preview the production build locally:

   ```bash
   npm run preview
   ```

## Project structure

```txt
public/
  favicon.svg
  images/placeholders/
src/
  components/
  data/
  pages/
  scripts/
  styles/
  utils/
astro.config.mjs
site.config.mjs
tailwind.config.mjs
```

## Content editing

Most launch edits happen in `src/data/` and `site.config.mjs`.

- `site.config.mjs`
  Replace the site URL, name, service area, email, Instagram URL, analytics provider, analytics IDs, and form endpoint.
- `src/data/images.ts`
  Replace placeholder image paths, alt text, titles, hooks, stories, and metadata.
- `src/data/products.ts`
  Update print titles, descriptions, available formats, and image associations.
- `src/data/externalLinks.ts`
  Replace every placeholder outbound URL with the real Fine Art America, Etsy, Shopify, Pixieset, or other checkout link.
- `src/data/services.ts`
  Update pricing placeholders, service copy, and supporting gallery slugs.
- `src/data/ctas.ts`
  Adjust shared CTA labels and destinations if Joshua wants different routing.

## Placeholder assets

Placeholder artwork lives in `public/images/placeholders/`.

- Replace the hero artwork with a strong horizontal homepage image.
- Replace service/category placeholders with real photographs as they become available.
- Replace `joshua-placeholder.svg` with a real portrait for the about page.

## Forms

The contact form is set up for a static workflow:

- Default: Netlify Forms-style markup with a thank-you page at `/contact/thank-you/`
- Alternative: replace `site.config.mjs -> contactForm.action` and the provider-specific attributes in `src/components/ContactForm.astro`

Before launch, choose one:

- Netlify Forms
- Formspree
- Basin
- Getform
- Another static form handler

## Analytics

Analytics is safe by default and will no-op until configured.

Supported event hooks already wired in the UI:

- `contact_click`
- `inquiry_submit`
- `print_buy_click`
- `etsy_click`
- `fine_art_america_click`
- `shopify_click`
- `pixieset_click`
- `book_session_click`
- `gallery_image_click`
- `image_page_view`

To enable analytics:

1. Open `site.config.mjs`
2. Set `analytics.provider` to `plausible` or `ga4`
3. Add the correct `plausibleDomain` or `gaMeasurementId`

## Deployment

This project builds to static output and can be deployed to:

- Netlify
- Vercel
- Cloudflare Pages

If you deploy outside Netlify, remember to replace the form setup first.

## Before launch

- Replace placeholder image files with real photography
- Replace placeholder outbound product URLs
- Replace placeholder email, service area, and Instagram values
- Replace pricing placeholders
- Set the real production domain in both `site.config.mjs` and `astro.config.mjs`
- Connect a real analytics provider
- Connect a real static form provider
- Rebuild and test every outbound route and inquiry path

<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
# Joshua Hoffman Studio MVP

Static-first photography website MVP built with Astro and Tailwind CSS. It is designed to launch quickly, show emotional work clearly, route people toward inquiries or external checkout, and stay easy to edit through local data files.

Production domain: `https://joshuahoffman.studio`

## Stack

- Astro
- Tailwind CSS
- Local TypeScript data files
- Static form wiring with no default backend on Day 1
- Lightweight analytics helper configured for Google Analytics 4

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
  Source of truth for the production site URL, name, service area, email, Instagram URL, analytics provider, analytics IDs, and form endpoint. `astro.config.mjs` imports this file so canonical URLs, Open Graph URLs, robots.txt, and sitemap generation stay on `https://joshuahoffman.studio`.
- `src/data/images.ts`
  Replace placeholder image paths, alt text, titles, hooks, stories, and metadata.
- `src/data/products.ts`
  Update print titles, descriptions, available formats, and image associations.
- `src/data/externalLinks.ts`
  Add real Fine Art America, Etsy, Shopify, Pixieset, or other checkout links, then reference their keys from `src/data/products.ts`. Placeholder outbound URLs are intentionally not shipped.
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

The contact form is set up for a Day-1 static workflow:

- Day 1: no active backend provider (`contactForm.provider = 'none'`) and a thank-you route at `/contact/thank-you/`.
- Day 2: replace `site.config.mjs -> contactForm.action` with a real static form endpoint (Formspree, Basin, Getform, etc.), then tune provider attributes in `src/components/ContactForm.astro`.

Day 2 static provider shortlist:

- Formspree
- Basin
- Getform
- Any other static form handler you already use

## Analytics

Analytics is configured for Google Analytics 4.

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

Current setup:

1. Open `site.config.mjs`
2. Confirm `analytics.provider` is `ga4`
3. Confirm `analytics.gaMeasurementId` is set to the active GA4 Measurement ID

## Deployment

The production origin is configured as `https://joshuahoffman.studio` in `site.config.mjs`. Astro reads that same value in `astro.config.mjs`, so `npm run build` emits sitemap and canonical metadata for the custom domain.

This project builds to static output and launches with this Day 1 workflow:

- InMotion Hosting (`public_html`) via `npm run build` then upload only `dist/`
- Vercel
- Cloudflare Pages

If you deploy outside InMotion, remember to replace the form setup first.

## Before launch

- Replace placeholder image files with real photography
- Add real outbound product URLs and route keys
- Confirm `info@joshuahoffman.studio` is the correct public email
- Confirm service area wording stays `Upstate New York`
- Replace pricing placeholders
- Analytics is configured for GA4; confirm data appears in Google Analytics after launch
- Leave form provider set to `none` on Day 1; connect a real static form provider on Day 2
- Rebuild and test every outbound route and inquiry path
=======
=======
>>>>>>> theirs
# joshuahoffman.studio

Repository initialized with baseline Git hygiene:
- `.gitignore` for common local artifacts
- `.gitattributes` to normalize line endings
<<<<<<< ours
>>>>>>> theirs
=======
>>>>>>> theirs
=======
# joshuahoffman.studio

## Purpose

This repository includes baseline Git defaults to keep commits clean and push operations reliable.

## One-time setup (existing remote repository)

Run this after cloning if the remote already has commits:

```bash
# 1) Verify remotes
git remote -v

# 2) Switch/create your local main branch
git checkout -B main

# 3) Sync remote refs and rebase your local branch
git fetch origin
git pull --rebase origin main

# 4) Ensure upstream tracking is configured
git branch --set-upstream-to=origin/main main
```

## Daily push workflow

Use this sequence before pushing to avoid `non-fast-forward` failures:

```bash
git fetch origin
git pull --rebase origin main
git push origin main
```

## If push is still rejected

1. Confirm you are on `main`: `git branch --show-current`
2. Inspect divergence: `git log --oneline --graph --decorate --all -n 25`
3. Resolve any rebase conflicts, then continue: `git rebase --continue`
4. Retry push: `git push origin main`

## Notes

- Prefer `origin` as the primary remote name for consistency.
- `pull --rebase` keeps history linear and easier to review.
- Avoid `git push --force` on shared branches unless explicitly coordinated.
>>>>>>> theirs

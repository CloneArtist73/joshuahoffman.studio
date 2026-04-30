# Joshua Hoffman Studio - MVP Instructions

This project is a static-first photography studio MVP built with **Astro**, **Tailwind CSS**, and **TypeScript**. It is designed to be a high-trust visual router that directs visitors to portrait booking inquiries or external fine-art print platforms.

## Project Overview

- **Core Purpose:** Establish an emotional online presence for Joshua's photography and route visitors to specific actions (Inquire, Book, Buy).
- **Architecture:** 
  - **Static Data:** All content (images, products, services) is managed through TypeScript files in `src/data/`.
  - **Visual Routing:** Specific pages for Portraits, Legacy work, and Musicians serve as service landing pages.
  - **External Sales:** Print sales are handled via outbound links to platforms like Etsy and Fine Art America, configured in `src/data/externalLinks.ts`.
  - **Analytics:** A custom, declarative tracking system is wired into components to monitor CTAs and outbound clicks.

## Building and Running

The project uses standard npm scripts for development and deployment:

- **Development:** `npm run dev` starts the Astro dev server.
- **Build:** `npm run build` generates a static site in the `dist/` directory.
- **Preview:** `npm run preview` serves the production build locally.
- **Type Checking:** Use `npx astro check` (if installed) or `tsc` to validate TypeScript.

## Development Conventions

### Data-First Content Updates
- Avoid hardcoding text or image paths directly in pages or components. 
- Use the central source of truth in `src/data/`:
  - `images.ts`: Main portfolio and metadata.
  - `services.ts`: Service descriptions and hero content.
  - `products.ts`: Print configurations and link mappings.
  - `externalLinks.ts`: Every outbound URL should live here.

### Component Design
- **Tailwind-First:** Styling is handled via Tailwind classes. Prefer the design tokens defined in `tailwind.config.mjs` (e.g., `obsidian`, `sage`, `ember`).
- **Layout:** All pages must use the `Layout.astro` component to ensure consistent SEO, analytics initialization, and theme styles.
- **Tracking:** When adding new buttons or links, use the `trackingAttributes` helper from `src/utils/analytics.ts` to ensure behavior is measured.

### Service Page Structure
Service pages (`portraits.astro`, `legacy.astro`, etc.) follow a consistent pattern:
1. `Hero` with primary/secondary CTAs.
2. Content blocks (Approach, Who this is for).
3. `GalleryGrid` showing a curated subset of related work.
4. Closing `CTAButton` block.

## Instructions & Precautions

- **Analytics Safety:** The analytics helper is designed to no-op until a provider is configured in `site.config.mjs`. Do not remove the null-checks in `src/scripts/analytics.ts`.
- **Form Handling:** The contact form defaults to Netlify Forms markup. If moving to a different provider (e.g., Formspree), update `site.config.mjs` and the form attributes in `ContactForm.astro` simultaneously.
- **Placeholders:** Real photography should replace SVGs in `/public/images/placeholders/`. Maintain the aspect ratios defined in components (e.g., 4:5 for portraits, horizontal for hero).
- **SEO:** Every new page must provide a `title` and `description` to the `Layout` component. Image `alt` text is mandatory for the `ImageItem` type in `src/data/types.ts`. Keep `site.config.mjs` as the production URL source of truth; `astro.config.mjs`, canonical links, Open Graph URLs, robots.txt, and sitemap output should all resolve to `https://joshuahoffman.studio`.

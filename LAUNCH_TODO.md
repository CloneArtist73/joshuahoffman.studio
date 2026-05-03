# Launch TODO

Internal Astro routes build successfully. The custom production domain cutover is configured for `https://joshuahoffman.studio`; remaining launch blockers are contact/detail confirmation, real outbound product links, form setup, analytics verification, and placeholder content.

Deployment model for Day 1:

- Build locally with `npm run build`.
- Upload only `dist/` contents to InMotion `public_html`.

## Complete

- Production domain cutover:
  `site.config.mjs` now uses `https://joshuahoffman.studio`, and `astro.config.mjs` imports that value for Astro's canonical site setting and sitemap generation.
- SEO URL plumbing:
  canonical URLs, `og:url`, Open Graph image URLs, and `robots.txt` sitemap references flow from `siteConfig.siteUrl`.
- Noindex and local route hygiene:
  `site.config.mjs` lists noindex paths for SEO/sitemap filtering, and normal static builds prune `/entry/` from `dist/` so the local content-entry helper is not published.
- Public brand baseline:
  `ownerName`, `brandName`, and `defaultTitle` now use Joshua Hoffman / Joshua Hoffman Studio instead of the previous generic placeholder.
- Placeholder domain removal:
  Public config no longer emits placeholder domains for the production site URL, public email, or outbound print buttons. Print products currently fall back to direct custom-print inquiry links until real platform URLs are added.
- Content readiness gating:
  Image and product records now use explicit `draft` / `public` status fields. Public galleries, image detail routes, related work, and print cards only use public-ready images, and product cards only render when the product and linked image are public-ready.
- Local readiness report:
  `/entry/readiness.json` is available in local development for a read-only report of placeholder assets, temporary copy, fake routes, draft/public mismatches, and asset sizing issues. Normal static builds prune `/entry/` from `dist/`.

## Working

- Static Astro MVP is present with homepage, gallery, service pages, print routing, contact page, image detail routes, SEO helpers, sitemap integration, and `robots.txt`.
- Local content entry tooling exists behind development mode or `PUBLIC_ENABLE_ENTRY=true`, is noindexed, is excluded from the sitemap, and is removed from normal static build output.
- The entry form can preserve and generate readiness status for image and product records.
- Contact form is Day 1-safe (`contactForm.provider = 'none'`) and uses `/contact/thank-you/` as the success route.
- Analytics hooks are wired and GA4 is configured with the active Measurement ID.

## Todo Before Launch

- Add real outbound product URLs in `src/data/externalLinks.ts` and attach their keys in `src/data/products.ts`, or keep products inquiry-only.
- Confirm business info in `site.config.mjs`:
  `info@joshuahoffman.studio`, `Upstate New York`, and `https://www.instagram.com/joshuahoffmanphotography/`.
- Replace placeholder pricing in `src/data/services.ts`.
- Connect the contact form on Day 2:
  set `contactForm.provider` and endpoint in `site.config.mjs` and complete integration in `src/components/ContactForm.astro` for a real provider (Formspree/Basin/Getform/etc.).
- Confirm analytics after deployment:
  GA4 is configured in `site.config.mjs`; verify page views and key events appear in Google Analytics after the site is live.
- Confirm social link before launch:
  Instagram is configured as `https://www.instagram.com/joshuahoffmanphotography/`.
- Do not commit generated folders:
  `node_modules/`, `dist/`, and `.astro/`.

## Todo Content

- Replace placeholder image assets in `public/images/placeholders/`.
- Replace placeholder image references, alt text, hooks, story copy, locations, and metadata in `src/data/images.ts`.
- Promote image records from `status: 'draft'` to `status: 'public'` only after real assets and finished copy are in place.
- Replace the about-page portrait image.
- Replace any placeholder product descriptions, available formats, and print routing details in `src/data/products.ts`.
- Promote product records from `status: 'draft'` to `status: 'public'` only when their linked image is public-ready and inquiry or live route behavior is clear.
- Replace any remaining generic or temporary copy in the image/story data before sending traffic.

## Optional After First Traffic

- Review which gallery images and outbound print routes get clicks, then trim weak paths.
- Reorder featured work based on inquiry and print-click behavior.
- Add final Open Graph images after the real hero and key image files are locked.
- Tighten service and product copy once real visitor questions start repeating.

## Do Not Build Yet

- Custom backend
- Custom cart or checkout
- User accounts or auth
- Database or inventory system
- CMS
- Blog engine
- Search
- Newsletter automation
- Booking engine
- Marketplace sync with Etsy, Fine Art America, Shopify, or Pixieset

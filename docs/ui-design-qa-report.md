# UI / Design QA Report

Date: 2026-05-01

Scope: Astro/Tailwind site at `http://127.0.0.1:4321/`, including `/`, `/gallery/`, `/portraits/`, `/legacy/`, `/musicians/`, `/prints/`, `/contact/`, `/about/`, `/contact/thank-you/`, and sampled `/p/[slug]/` pages.

Verification context:
- Dev server ran at `http://127.0.0.1:4321/`.
- `npm run build` passed and generated 25 static pages plus `sitemap-index.xml`.
- Browser QA included homepage, gallery, prints, contact, and `/p/city-street-perspective/`.
- Three read-only agents contributed specialist passes: Dewey for CSS/styling, Kuhn for layout/structure, and Maxwell for lead product design.

## 1. Executive Summary

Readiness score: **4/10**.

Biggest visual/design risk: the site looks visibly unfinished. Placeholder SVGs, "Static MVP" copy, "Day 2" form text, bracketed pricing, fake storefront URLs, and placeholder alt text all damage trust on a photography site where credibility depends heavily on finished imagery and quiet polish.

Fastest high-ROI improvement: remove all public implementation language, hide fake buy CTAs, replace the homepage hero/About/service imagery with real photography, and make the contact form actually submit to a configured provider.

Launch-ready: **No**. The structure and visual direction are workable, and the build is healthy, but the public UI still communicates prototype status.

## 2. Critical Issues

### Critical - Placeholder imagery dominates the product

Affected areas: `src/data/images.ts`, `src/data/services.ts`, `src/pages/index.astro`, `src/pages/about.astro`, service pages, gallery cards, product cards.

Why it matters: this is a photography portfolio and lead-gen site. Placeholder SVGs undercut the first impression and make the site feel like a template, even when the surrounding typography and layout are polished.

Recommended fix: replace hero, service, about, gallery, and print placeholders with real photo assets. If a route does not have real work yet, hide that route/card until it does.

### Critical - Public copy exposes internal build status

Affected areas: `src/pages/index.astro`, `src/pages/contact.astro`, `src/pages/contact/thank-you.astro`.

Examples:
- `Static MVP`
- `This MVP does not build custom ecommerce`
- `Day 2 still needs a chosen static form provider`
- `real submission handling still needs a connected static form provider`

Why it matters: visitors should not see implementation status. This directly reduces confidence and conversion.

Recommended fix: replace with customer-facing value copy, or remove the copy entirely.

### Critical - Print checkout links are fake or generic

Affected areas: `src/data/externalLinks.ts`, `src/components/ProductRouteButtons.astro`, product cards and image detail pages.

Why it matters: the UI renders "Buy on Etsy", "Buy on Fine Art America", "Buy on Shopify", and "Buy on Pixieset" while the URLs are placeholder templates or searches. That creates a broken commerce experience.

Recommended fix: hide external buy buttons until exact product URLs exist. For launch, prefer one honest fallback CTA: "Ask About This Print".

### Critical - Contact form is not launch-functional

Affected areas: `site.config.mjs`, `src/components/ContactForm.astro`, `src/pages/contact.astro`, `src/pages/contact/thank-you.astro`.

Why it matters: the form is the primary conversion path. Current config uses `provider: 'none'` and posts to `/contact/thank-you/`, which can produce a false success experience.

Recommended fix: configure the real static form provider and endpoint, add success/error behavior, and remove all public notes about missing provider setup.

## 3. High-Impact Quick Wins

- Replace "Static MVP", "MVP", "Day 2", "placeholder", bracketed prices, and implementation explanations with visitor-facing copy.
- Hide all external buy buttons until real product URLs are available.
- Put a real, strong photograph in the homepage hero and a real portrait on `/about/`.
- Keep the compact menu until `lg` or `xl`; current desktop nav turns on too early and truncates the brand.
- Add `whitespace-nowrap shrink-0` to CTAs that must not wrap, especially header and contact submit buttons.
- Change the contact email placeholder from Joshua's email to `you@example.com`.
- Add a response expectation near the form, such as "Joshua replies directly, usually within X business days."
- Compress the two large JPGs before launch: `city-street-perspective.jpg` is about 30 MB and `star-trails-over-trees.jpg` is about 33 MB.

## 4. Agent Findings

### CSS / Styling Findings - Dewey

1. **High - Header/tablet layout collapses the brand**
   - Affected: `src/components/Header.astro`, desktop nav starts at `md`.
   - Impact: at tablet/small desktop widths, the brand truncates and the nav feels crowded.
   - Fix: change desktop nav from `md:flex` to `lg:flex` or `xl:flex`; change mobile menu from `md:hidden` to matching `lg:hidden`; reduce gaps or move secondary links into a menu.

2. **High - Photography brand still presents as placeholder/MVP**
   - Affected: `src/pages/index.astro`, `src/pages/about.astro`, `src/data/services.ts`, `src/data/images.ts`.
   - Impact: visible placeholder language and assets make the site feel unfinished.
   - Fix: replace placeholder SVGs and remove MVP wording from visible copy and alt text.

3. **Medium - Image detail pages do not preserve orientation consistently**
   - Affected: `src/pages/p/[slug].astro`.
   - Impact: every main image uses the same fixed width/height attributes, even for horizontal and square images.
   - Fix: reuse the orientation aspect logic from `ImageCard.astro`, or add real image dimensions to `ImageItem`.

4. **Medium - Contact form lacks branded validation/error states**
   - Affected: `src/components/ContactForm.astro`, `src/styles/global.css`.
   - Impact: native validation only; no styled errors, helper text, loading, or disabled states.
   - Fix: add invalid styles, helper/error copy with `aria-describedby`, and submit/loading/disabled visuals.

5. **Medium - Reduced-motion preference is not honored**
   - Affected: `src/styles/global.css`, `src/components/ImageCard.astro`.
   - Impact: smooth scrolling, link transitions, and image hover scaling stay active for users who prefer less motion.
   - Fix: add a `prefers-reduced-motion: reduce` block that disables smooth scrolling, transitions, and transforms.

6. **Medium - Anchor jumps can land under sticky header**
   - Affected: `src/pages/p/[slug].astro`, `#related-work`.
   - Impact: "View Related Work" can jump to content hidden by the sticky header.
   - Fix: add `scroll-mt-24` to anchored sections or a global `[id] { scroll-margin-top: 6rem; }`.

7. **Medium - Current page state is missing in nav**
   - Affected: `src/components/Header.astro`.
   - Impact: users have no visual or semantic "current page" state.
   - Fix: compare each nav href to `Astro.url.pathname`; add `aria-current="page"` and an active style.

8. **Low - Product route buttons misalign when nested**
   - Affected: `src/components/ProductRouteButtons.astro`, `src/pages/p/[slug].astro`.
   - Impact: nested padding makes checkout buttons sit lower than sibling actions.
   - Fix: pass `compact` on image pages or remove default nested padding when used inside an action row.

9. **Low - Button styles are duplicated**
   - Affected: `src/components/CTAButton.astro`, `src/components/ContactForm.astro`.
   - Impact: primary button classes and hover color can drift.
   - Fix: centralize `.btn`, `.btn-primary`, `.btn-secondary`, and `.btn-ghost` classes, or add a real button variant component.

10. **Low - Heading tracking is globally tightened**
    - Affected: `src/styles/global.css`.
    - Impact: long editorial headlines may lose readability.
    - Fix: remove global `tracking-tight` from all headings and apply it only where needed.

### UI / Layout / Structure Findings - Kuhn

1. **High - Header breaks at small desktop/tablet widths**
   - Affected: all routes, `src/components/Header.astro`, `src/components/CTAButton.astro`.
   - Impact: at about 900-1024 px, the brand truncates, all seven links crowd the row, and "Book a Portrait" wraps into a tall pill.
   - Fix: keep compact nav until `lg`/`xl`, reduce nav gap, hide secondary links earlier, and add `shrink-0 whitespace-nowrap` to the header CTA.

2. **High - Dynamic image page stretches the photo panel**
   - Affected: `/p/star-trails-over-trees/` and horizontal detail pages, `src/pages/p/[slug].astro`.
   - Impact: at desktop widths, the image panel can stretch taller than the photo, leaving a large empty card block that looks broken.
   - Fix: add `lg:items-start` to the two-column grid or `self-start` to the image surface; alternatively wrap images in intentional fixed-aspect containers.

3. **Medium - Gallery cards create empty interiors with mixed orientations**
   - Affected: `/gallery/`, homepage featured work, service galleries, related work, `GalleryGrid.astro`, `ImageCard.astro`.
   - Impact: mixed aspect cards stretch to the tallest item in each CSS grid row, leaving empty card space below some content.
   - Fix: use a uniform thumbnail aspect ratio, or make the grid `items-start` and remove `h-full` from card/link if a masonry-like layout is intended.

4. **Medium - Contact submit CTA wraps unnecessarily**
   - Affected: `/contact/`, `src/components/ContactForm.astro`.
   - Impact: the submit button can shrink and wrap into a two-line oval.
   - Fix: add `shrink-0 whitespace-nowrap` to the button and `min-w-0 flex-1` to the adjacent paragraph.

5. **Low - Service card CTAs wander vertically**
   - Affected: homepage service cards, `src/components/ServiceCard.astro`.
   - Impact: varied copy lengths make CTAs sit at different heights, weakening scanability.
   - Fix: make cards `flex h-full flex-col`, make body content `flex flex-1 flex-col`, and push CTA with `mt-auto`.

6. **Low - Gallery filter tap targets are small on mobile**
   - Affected: `/gallery/`, `src/components/GalleryGrid.astro`.
   - Impact: filters render around 38 px tall, below the common 44 px comfortable tap target.
   - Fix: add `min-h-11` or increase vertical padding.

### Lead Product Designer Findings - Maxwell

Blunt assessment: not launch-ready. The dark editorial direction can work, but the current site reads as a polished prototype rather than a premium photography business.

1. **Critical - Public unfinished copy is visible**
   - Affected: homepage, contact page, thank-you page.
   - Fix: remove all internal build-status language before launch.

2. **Critical - Placeholder photography destroys first impression**
   - Affected: homepage, About, service pages, gallery, products.
   - Fix: real photos must lead every public route, especially `/`, `/gallery/`, `/prints/`, and `/about/`.

3. **Critical - Print purchase CTAs point to fake/generic URLs**
   - Affected: `externalLinks.ts`, ProductRouteButtons, product cards, image pages.
   - Fix: hide buy links or replace with inquiry until real URLs exist.

4. **Critical - Lead form is not functional enough for launch**
   - Affected: `site.config.mjs`, contact form.
   - Fix: connect provider and remove notes about missing handling.

5. **High - Service pages lack buyer confidence**
   - Affected: `src/data/services.ts` and service routes.
   - Fix: replace bracketed prices; add session length, deliverables, turnaround, travel/privacy expectations, and post-inquiry process.

6. **High - About page does not build enough trust**
   - Affected: `/about/`.
   - Fix: add real portrait, sharper bio, proof points, client types, publications, testimonials, exhibitions, or process details.

7. **High - Homepage delays the actual work**
   - Affected: `/`.
   - Fix: put the strongest real image or tight real-photo edit first; reduce explanatory sections.

8. **High - Image/product pages have too many equal-weight actions**
   - Affected: `src/pages/p/[slug].astro`.
   - Fix: pick one primary action per image and demote the rest.

9. **Medium - Copy is too meta**
   - Affected: homepage, gallery, prints.
   - Fix: replace implementation explanations with customer benefits.

10. **Medium - Product cards are under-specified**
    - Affected: `ProductCard.astro`, `products.ts`.
    - Fix: add price, material, edition/open edition, fulfillment, shipping, framing, and turnaround where relevant.

11. **Medium - Asset performance is risky**
    - Affected: raw JPGs in `public/images`.
    - Fix: compress and generate responsive image sizes.

## 5. Prioritized Fix List

| Priority | Issue | Affected area | Recommended fix | Expected impact | Complexity |
|---|---|---|---|---|---|
| Critical | Placeholder imagery visible across core pages | `src/data/images.ts`, `src/data/services.ts`, `/`, `/gallery/`, `/about/`, service pages | Replace with real photo assets or hide incomplete routes/cards | Major trust and brand lift | Medium |
| Critical | Public MVP/Day 2/internal copy | `index.astro`, `contact.astro`, `thank-you.astro` | Remove implementation language and rewrite as visitor-facing value copy | Immediate credibility lift | Low |
| Critical | Fake storefront CTAs | `externalLinks.ts`, `ProductRouteButtons.astro`, product/detail pages | Hide external buy buttons until real product URLs exist; use inquiry fallback | Prevents broken purchase journey | Low |
| Critical | Contact form not connected | `site.config.mjs`, `ContactForm.astro` | Configure provider/action; add success/error handling; remove warnings | Protects lead capture | Medium |
| High | Header collapses at tablet/small desktop | `Header.astro`, `CTAButton.astro` | Keep menu until `lg`/`xl`; add nowrap/shrink classes | Fixes visible layout break | Low |
| High | Placeholder pricing and weak service decision info | `services.ts`, service pages | Replace bracketed rates; add deliverables, process, turnaround, privacy/travel notes | Improves conversion quality | Medium |
| High | About page lacks trust | `about.astro` | Use real portrait, stronger bio, proof points/testimonials/process | Improves credibility | Medium |
| High | Homepage delays actual work | `index.astro`, `Hero.astro` | Lead with real photo hero or immediate tight image edit | Stronger first impression | Medium |
| High | Detail-page action hierarchy is noisy | `src/pages/p/[slug].astro`, `ProductRouteButtons.astro` | One primary CTA per image; demote license/related actions | Reduces decision friction | Low |
| Medium | Large raw images | `public/images/*.jpg` | Compress, export WebP/AVIF, add responsive image strategy | Faster load and better perceived quality | Medium |
| Medium | Main image/detail card stretching | `src/pages/p/[slug].astro` | Add `lg:items-start`, `self-start`, or intentional aspect wrappers | Removes broken-looking blank blocks | Low |
| Medium | Mixed-orientation card whitespace | `GalleryGrid.astro`, `ImageCard.astro` | Use uniform thumbnail aspect ratio or `items-start` layout | Cleaner gallery rhythm | Low |
| Medium | Contact validation and button wrapping | `ContactForm.astro`, `global.css` | Add branded error/loading states and nowrap button classes | More polished lead form | Medium |
| Medium | Missing current nav state | `Header.astro` | Add `aria-current` and active styling | Better orientation and accessibility | Low |
| Medium | Reduced motion not respected | `global.css`, `ImageCard.astro` | Add `prefers-reduced-motion` CSS | Accessibility improvement | Low |
| Low | Duplicated button styling | `CTAButton.astro`, `ContactForm.astro`, `global.css` | Centralize button classes or extend CTAButton for buttons | Reduces drift | Low |
| Low | Service card CTA vertical drift | `ServiceCard.astro` | Use flex card layout and `mt-auto` CTA | Better scanability | Low |
| Low | Gallery filter tap targets small | `GalleryGrid.astro` | Add `min-h-11` or more vertical padding | Better mobile ergonomics | Low |

## 6. Implementation Guidance

### Header and Nav

In `src/components/Header.astro`:
- Change `md:flex` to `lg:flex` or `xl:flex`.
- Change `md:hidden` to match the same breakpoint.
- Consider showing only primary links in the desktop row and moving secondary links into a compact menu.

In `src/components/CTAButton.astro`:
- Add `whitespace-nowrap` to the base CTA classes.
- Allow specific contexts to pass `shrink-0` through `class`.

Example target:

```astro
'panel-link inline-flex items-center justify-center rounded-full text-sm font-semibold tracking-wide whitespace-nowrap'
```

### Placeholder and Launch Copy

In `src/pages/index.astro`:
- Replace `eyebrow="Static MVP"` with customer-facing copy.
- Remove copy such as "This MVP does not build custom ecommerce."

In `src/pages/contact.astro` and `src/pages/contact/thank-you.astro`:
- Remove public notes about missing form provider setup.
- Add response expectation copy once accurate.

In `src/data/services.ts`:
- Replace `Starting at [portrait session rate]`, `Starting at [legacy session rate]`, and `Starting at [artist session rate]`.
- If prices are not ready, use "Pricing by project" or omit pricing until confirmed.

### Print Links

In `src/data/externalLinks.ts`:
- Do not expose placeholder templates as live purchase destinations.
- Add a field such as `status: 'draft' | 'live'`, or remove route keys from products until real URLs exist.

In `src/components/ProductRouteButtons.astro`:
- Filter to live routes only.
- If no live route exists, show a single inquiry CTA if `includeInquiry` is true.

### Image Detail Pages

In `src/pages/p/[slug].astro`:
- Add `lg:items-start` to the top grid.
- Add `self-start` to the image surface.
- Pass `compact` into `ProductRouteButtons` inside the action row.
- Consider moving title/CTA above the photo on tablet widths, or using a two-column layout earlier only when there is enough horizontal room.

### Gallery and Cards

In `src/components/GalleryGrid.astro` and `src/components/ImageCard.astro`:
- Choose one gallery rhythm:
  - Uniform editorial grid: use one thumbnail aspect ratio for all cards.
  - Masonry-like grid: add `items-start` and remove forced `h-full`.
- Add `min-h-11` to filter buttons.

In `src/components/ServiceCard.astro`:
- Make the article and body flex columns.
- Push CTA to the bottom with `mt-auto`.

### Forms

In `src/components/ContactForm.astro`:
- Change email placeholder to `you@example.com`.
- Add `shrink-0 whitespace-nowrap` to the submit button.
- Add a styled error/help text pattern with `aria-describedby`.
- Add disabled/loading state for submit.

In `site.config.mjs`:
- Set the real provider and action before launch.

### Global CSS and Accessibility

In `src/styles/global.css`:
- Add reduced-motion handling.
- Add global anchor scroll margin for sticky header jumps.
- Consider removing global `tracking-tight` from all headings and applying heading tracking per component.

Suggested additions:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}

[id] {
  scroll-margin-top: 6rem;
}
```

### Assets

Before launch:
- Compress `public/images/city-street-perspective.jpg`.
- Compress `public/images/star-trails-over-trees.jpg`.
- Generate responsive sizes and modern formats for large hero/detail/gallery images.

## 7. Launch Readiness Decision

Do not launch publicly yet as a finished portfolio or commerce site. Launch only as an internal staging preview until:

1. Real photography replaces placeholders on core routes.
2. Public internal/MVP/Day 2 copy is removed.
3. Contact form submission is actually connected.
4. Fake external purchase buttons are hidden or replaced with real product URLs.
5. Header tablet layout and CTA wrapping are fixed.

After those are fixed, the site can move from prototype-grade to plausible launch candidate quickly. The remaining medium/low items improve polish and accessibility, but the critical trust issues are the blockers.

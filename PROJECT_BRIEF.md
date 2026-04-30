# PROJECT_BRIEF.md

## Project Name
Joshua Hoffman Studio MVP

## Purpose
Build the first launchable MVP of a photography website: a one-domain visual gallery and sales router that helps visitors view emotionally strong photography, inquire about portrait/session work, and click through to trusted external checkout platforms for prints/products.

This is not a full ecommerce platform. This is not a blog-heavy SEO project. This is a fast static MVP designed to test interest, trust, inquiries, and outbound sales clicks.

## Core Goal
Launch a static website that does three things well:

1. Shows Joshua's strongest emotional photography.
2. Routes visitors toward the right action: inquire, book, buy, or view more.
3. Tracks which images, services, and external sales routes get clicks.

## MVP Philosophy
Prioritize launch speed, clarity, trust, and measurable behavior.

Do not overbuild. Do not create a backend. Do not create user accounts. Do not create a custom checkout. Do not create a CMS unless the static data approach becomes painful later.

The MVP should be easy to edit by changing local data files.

## Recommended Tech Direction
Use a static-first stack.

Preferred option:

- Framework: Astro
- Styling: Tailwind CSS
- Content/data: local JSON or TypeScript data files
- Deployment: Netlify, Vercel, or Cloudflare Pages
- Forms: Netlify Forms, Formspree, Basin, or similar static form handler
- Analytics: Plausible, Fathom, Google Analytics 4, or another lightweight event-capable analytics provider

Alternative acceptable option:

- Vite + React static site

Do not use Next.js unless there is a clear reason. Server rendering, API routes, and backend complexity are unnecessary for the first MVP.

## Primary User Paths

### Path 1: Book or inquire about a portrait session
Visitor lands on the homepage, sees emotional work, clicks into portraits, and submits a contact inquiry.

### Path 2: Buy or explore a print
Visitor lands on homepage or gallery, clicks an image, reads the story/context, then clicks out to Fine Art America, Etsy, Shopify Starter, Pixieset Store, or another external product page.

### Path 3: View gallery and self-select intent
Visitor browses gallery, filters by category, clicks an image, and chooses an action: view story, buy print, book similar, or inquire.

## Required Pages

### `/`
Homepage and visual router.

Purpose: quickly establish emotional tone, trust, and available paths.

Required sections:

1. Hero section
   - One strong hero image
   - Short emotional headline
   - Supporting line
   - Primary CTA: `Book a Portrait`
   - Secondary CTA: `View Prints` or `Explore Gallery`

2. Buyer path cards
   - Portrait Sessions
   - Legacy / Memorial Work
   - Musician / Artist Portraits
   - Fine-Art Prints

3. Featured gallery preview
   - 6 to 12 featured images
   - Each image links to its individual image/product page

4. Print/product router preview
   - 3 to 6 print candidates
   - Each card includes buttons for external checkout routes when available

5. Inquiry CTA
   - Simple human copy
   - Link to contact page or inline form

6. Trust/footer block
   - Name
   - Service area
   - Email
   - Instagram/social link if available
   - Copyright

### `/gallery`
Curated gallery page.

Purpose: show the strongest work and let visitors self-select what they care about.

Requirements:

- Display 12 to 24 curated images.
- Use categories/tags such as:
  - Portraits
  - Legacy
  - Musicians
  - Prints
  - Personal Work
- Include simple client-side filtering if easy.
- Each image card should include:
  - Image
  - Title
  - Category
  - Short emotional hook
  - CTA to individual image page

### `/portraits`
Portrait service page.

Purpose: convert interest into inquiries.

Requirements:

- Strong portrait hero image.
- Simple description of the offer.
- Who it is for.
- What the session includes.
- Starting price or `starting at` placeholder.
- CTA to contact form.
- Small supporting gallery.

### `/legacy`
Legacy / memorial / family memory service page.

Purpose: position sensitive emotional photography work clearly and respectfully.

Requirements:

- Gentle tone.
- Explain the purpose of legacy/memory work.
- Avoid exploitative language.
- CTA should be soft: `Start a Conversation` or `Ask About Legacy Work`.
- Link to contact form.

### `/musicians`
Musician / artist portrait page.

Purpose: route artists, musicians, bands, and performers toward portrait/session inquiries.

Requirements:

- Show musician/artist-focused images.
- Explain use cases:
  - press photos
  - album/cover visuals
  - promo images
  - social/media kit portraits
- CTA to contact form.

### `/prints`
Fine-art print router.

Purpose: show selected print-ready images and send buyers to external checkout platforms.

Requirements:

- Display selected print products only.
- Each print card should include:
  - Image
  - Title
  - Short description
  - Available formats if known
  - External CTA buttons
- External CTAs may include:
  - Fine Art America
  - Etsy
  - Shopify
  - Pixieset
  - Custom print inquiry

### `/p/[slug]`
Individual image/product page.

Purpose: give each important image its own story, SEO context, and sales/inquiry routing.

Requirements:

- Large image display.
- Image title.
- Category/type.
- Short story or context, 2 to 4 sentences.
- CTA buttons based on the image:
  - Buy Print
  - Ask About Custom Print
  - Book Similar Portrait
  - License Image
  - View Related Work
- Metadata/details if available:
  - orientation
  - year
  - location
  - medium
  - best format
- Related images section with 3 items.

### `/contact`
Inquiry page.

Purpose: collect leads.

Requirements:

- Simple form fields:
  - Name
  - Email
  - Inquiry type
  - Message
- Inquiry type options:
  - Portrait session
  - Legacy / memorial work
  - Musician / artist portraits
  - Print or product question
  - Licensing
  - Other
- Include direct email fallback.
- After submit, show a thank-you state/page.

### `/about`
Short trust page.

Purpose: build enough human trust without becoming a biography dump.

Requirements:

- Short introduction.
- Explain what Joshua photographs and why.
- Mention service area.
- Include one portrait/photo of Joshua if available.
- CTA to contact page.

## Data Model
Use static local data files. Recommended file structure:

```txt
src/
  data/
    images.ts
    services.ts
    externalLinks.ts
```

### Image data shape

```ts
export type ImageItem = {
  slug: string;
  title: string;
  category: 'portrait' | 'legacy' | 'musician' | 'print' | 'personal';
  tags: string[];
  imageSrc: string;
  alt: string;
  hook: string;
  story?: string;
  orientation?: 'vertical' | 'horizontal' | 'square';
  year?: string;
  location?: string;
  featured?: boolean;
  printAvailable?: boolean;
  serviceCTA?: 'portrait' | 'legacy' | 'musician' | 'custom';
  externalLinks?: {
    label: string;
    url: string;
    platform: 'fine-art-america' | 'etsy' | 'shopify' | 'pixieset' | 'other';
  }[];
};
```

### Service data shape

```ts
export type ServiceItem = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  startingPrice?: string;
  ctaLabel: string;
  imageSrc?: string;
};
```

## Placeholder Content Rules
Use realistic placeholders, not generic lorem ipsum.

Current launch placeholders:

- `[Service Area]`
- `[Instagram URL]`
- `[External print URL]`

Use placeholder images from the local project folder if actual images are not provided yet. Do not pull random remote photography assets unless explicitly instructed.

## Design Direction
The site should feel emotional, quiet, direct, and trustworthy.

Visual style:

- Dark or neutral background preferred.
- Large images.
- Minimal text.
- Generous spacing.
- Strong typography.
- No clutter.
- No fake luxury styling.
- No generic photographer clichés.

Tone:

- Human
- Clear
- Emotional but not melodramatic
- Direct
- Trustworthy

Avoid phrases like:

- capturing moments
- timeless memories
- picture-perfect
- your story beautifully told
- luxury experience

Prefer grounded language:

- honest portraits
- images with weight
- photographs for people who want more than a pose
- work built around memory, grief, family, music, and presence

## Navigation
Primary nav:

- Gallery
- Portraits
- Prints
- Contact

Optional secondary nav:

- Legacy
- Musicians
- About

On mobile, use a simple menu. Do not over-design navigation.

## CTAs
Use direct CTA labels.

Examples:

- Book a Portrait
- Start an Inquiry
- Buy Print
- Ask About Custom Print
- Book Something Like This
- View Print Options
- Contact Joshua
- Start a Conversation

Every page should have one obvious primary action.

## Analytics Requirements
The MVP must track useful behavior.

At minimum, implement analytics event hooks for:

1. Contact form submit
2. Portrait inquiry CTA click
3. Legacy inquiry CTA click
4. Musician inquiry CTA click
5. Print outbound click
6. Etsy outbound click
7. Fine Art America outbound click
8. Shopify outbound click
9. Pixieset outbound click
10. Individual image page view if supported by the analytics provider

Use a small analytics helper such as:

```ts
trackEvent(eventName: string, props?: Record<string, string | number | boolean>)
```

The helper should safely no-op if analytics is not configured.

Example events:

```ts
trackEvent('cta_click', {
  location: 'homepage_hero',
  label: 'Book a Portrait'
});

trackEvent('outbound_product_click', {
  platform: 'fine-art-america',
  imageSlug: 'after-the-show'
});

trackEvent('contact_form_submit', {
  inquiryType: 'portrait'
});
```

## SEO Requirements
Only implement useful SEO basics.

Requirements:

- Unique page title for every page.
- Unique meta description for every major page.
- Descriptive image alt text.
- Clean URLs.
- Open Graph title/image/description for homepage and individual image pages.
- Sitemap.xml if easy through framework tooling.
- Robots.txt.
- Use semantic HTML.

Do not build:

- Blog engine
- Mass city landing pages
- Automated SEO content
- Backlink scheme pages
- Hidden link pages
- Keyword-stuffed image pages

## Accessibility Requirements

- All images need alt text.
- Buttons and links must be keyboard accessible.
- Color contrast must be readable.
- Forms need labels.
- Focus states should be visible.
- Do not put important text only inside images.

## Performance Requirements

- Images should be optimized.
- Use responsive images if supported by the chosen framework.
- Lazy load gallery images where appropriate.
- Homepage should not load the entire portfolio.
- Avoid heavy animation libraries.
- Avoid unnecessary JavaScript.

## Suggested File Structure

```txt
/
  public/
    images/
      placeholder-portrait.jpg
      placeholder-print.jpg
  src/
    components/
      Layout.astro
      Header.astro
      Footer.astro
      Hero.astro
      ImageCard.astro
      ServiceCard.astro
      CTAButton.astro
      ContactForm.astro
      ProductRouteButtons.astro
    data/
      images.ts
      services.ts
      site.ts
    pages/
      index.astro
      gallery.astro
      portraits.astro
      legacy.astro
      musicians.astro
      prints.astro
      contact.astro
      about.astro
      p/
        [slug].astro
    utils/
      analytics.ts
      seo.ts
  astro.config.mjs
  package.json
  tailwind.config.mjs
  PROJECT_BRIEF.md
```

## Content Seed
Use this content direction for the first draft.

### Homepage headline options

Use one:

```txt
Emotional portrait photography, legacy images, and fine-art prints for people who want more than a picture.
```

```txt
Portraits, memory work, musician images, and prints with emotional weight.
```

```txt
Photography for people, families, artists, and rooms that need something real.
```

### Homepage supporting line

```txt
A quiet visual home for Joshua's portrait work, legacy photography, musician images, and selected fine-art prints.
```

### Portrait service copy

```txt
Honest portrait sessions for people who want to be seen clearly, not overly posed. Built for individuals, families, artists, and anyone who needs images with presence.
```

### Legacy service copy

```txt
Sensitive photography built around memory, family, grief, and the people we do not want forgotten. These sessions are handled carefully and personally.
```

### Musician service copy

```txt
Portraits for musicians, performers, and artists who need images that feel like their work sounds: direct, emotional, and usable across press, social, posters, and releases.
```

### Print page copy

```txt
Selected photographs are available as prints through trusted external platforms. For custom sizing, signed work, or special requests, send a direct inquiry.
```

## External Checkout Routing
Do not build checkout.

Each product/image page may link to one or more trusted external platforms.

Supported external route types:

- Fine Art America
- Etsy
- Shopify
- Pixieset
- Custom inquiry form

Rules:

- Open external product links in a new tab.
- Track outbound clicks.
- Clearly label platform buttons.
- Do not show too many choices at once.
- Prefer 1 to 2 external buying options per image.
- Always include custom inquiry where relevant.

## Contact Form Behavior
Static form submission is enough.

Acceptable handlers:

- Netlify Forms
- Formspree
- Basin
- Getform
- Tally embed
- Airtable form embed

No custom backend.

After form submission, route to or show:

```txt
Thank you. I got your message and will reply directly.
```

## Acceptance Criteria
The MVP is complete when:

- Site builds successfully.
- Site can be deployed as static output.
- Homepage exists.
- Gallery page exists.
- Portrait page exists.
- Prints page exists.
- Contact page exists.
- At least 3 individual image/product pages exist using static data.
- External checkout/product buttons are wired with placeholder or real URLs.
- Contact form is present and usable with a static form provider or clearly marked placeholder action.
- Analytics helper exists.
- CTA and outbound click tracking calls are present.
- Every page has a meaningful title and meta description.
- Images have alt text.
- Mobile layout is usable.
- No backend exists.
- No ecommerce checkout exists inside the site.

## What Not To Build Yet
Do not build any of the following in the first MVP:

- Custom backend
- Custom cart
- Custom checkout
- User accounts
- Admin dashboard
- CMS
- Blog engine
- Search feature
- Favorites/wishlist
- Print configurator
- Product inventory system
- Automated sync with Etsy/Fine Art America/Shopify
- Payment processing
- Newsletter automation
- Client login
- Complex SEO landing page system
- AI-generated content pages
- 100-image portfolio dump
- Multi-step booking engine

## Build Order
Follow this order:

1. Initialize static project.
2. Create global layout, header, footer, and design tokens.
3. Create static data files for images, services, and site config.
4. Build homepage.
5. Build gallery page.
6. Build individual image/product route.
7. Build portraits page.
8. Build prints page.
9. Build contact page.
10. Add legacy, musicians, and about pages if time allows.
11. Add analytics helper and tracking calls.
12. Add SEO helpers, metadata, sitemap, and robots.txt.
13. Test mobile layout.
14. Test all links and form behavior.
15. Prepare deployment.

## Developer Notes
Keep implementation simple and editable.

Prefer readable code over clever abstractions. Components should exist only when they reduce repetition. Static data should be easy for a non-engineer to update later.

The project should be launchable even with placeholder images and placeholder external product URLs, as long as the structure is ready for Joshua's real images and links.

## Definition of Done
This MVP is done when Joshua can send someone his domain and that person can:

1. Understand what kind of photography he makes.
2. View a curated gallery.
3. Click into a specific image and understand why it matters.
4. Inquire about a portrait/session.
5. Click out to buy or explore a print on a trusted platform.
6. Generate useful analytics data through clicks and form submissions.

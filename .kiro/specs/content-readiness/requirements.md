# Requirements Document

## Introduction

The content-readiness feature prevents draft, placeholder, or incomplete content from becoming public by accident. The site remains static, file-editable, and inquiry-only, but public pages, generated routes, print cards, related work, and validation checks use an explicit readiness model instead of relying only on placeholder image paths.

This feature does not add a CMS, database, authentication, cart, checkout, inventory, marketplace sync, final copywriting, asset replacement, contact form provider setup, or a visual redesign. Service pages remain public for now, but service copy and linked assets should be included in readiness validation.

## End-to-End Workflow

This is the intended workflow from first content intake through public launch validation:

1. Inventory the current content sources.
   - Review `src/data/images.ts`, `src/data/products.ts`, `src/data/services.ts`, `src/data/externalLinks.ts`, and public image assets.
   - Identify every record that is public-ready, draft, placeholder-backed, externally linked, or inquiry-only.
   - Treat any uncertain record as draft until reviewed.

2. Prepare real image assets before marking content public.
   - Use real photography for public gallery, detail, service, product, and about-page visuals.
   - Keep public primary image assets in the preferred `1600px` to `2400px` long-edge range.
   - Report images below `1600px` long edge, below `900px` short edge, above `2560px` long edge, above `1.5MB`, or above `2.5MB` according to the validation rules.
   - Preserve intentional portrait, landscape, and square orientations.

3. Prepare public-safe text before marking content public.
   - Replace temporary tokens such as `placeholder`, `draft`, `MVP`, `TODO`, `TBD`, `sample`, `lorem`, `Illustrative`, and bracketed placeholders.
   - Write specific alt text that describes the visible image.
   - Keep product and CTA language inquiry-only unless a real commerce provider and live product route are configured.

4. Set explicit readiness status on editable records.
   - Add or preserve `status: 'draft'` or `status: 'public'` on every image and product record.
   - Default newly created `/entry/` helper records to `status: 'draft'`.
   - Promote a record to `status: 'public'` only after asset, copy, and route checks pass.

5. Apply central public-readiness rules.
   - Use one shared readiness helper for public rendering decisions.
   - Treat placeholder image paths as non-public even when a record says `status: 'public'`.
   - Use the same helper for galleries, homepage previews, related work, print cards, and `/p/[slug]/` static paths.

6. Validate products and inquiry behavior.
   - Render public products only when the product is public and its linked image is public-ready.
   - Hide products linked to draft or placeholder-backed images.
   - Show inquiry fallback for public products without live external routes.
   - Block fake purchase CTAs or storefront URLs until a real provider/action is configured.

7. Run the readiness report.
   - Generate a read-only report for placeholder assets, temporary copy, bracket tokens, undersized or oversized assets, incomplete public records, products linked to draft images, and fake storefront/template URLs.
   - Include service copy in validation, but do not hide service pages as part of this feature.
   - Fix reported launch-blocking issues before public promotion.

8. Run automated checks.
   - Test image query helpers for draft and placeholder exclusion.
   - Test `/p/[slug]/` path generation against public-ready images only.
   - Test product filtering and inquiry fallback behavior.
   - Run `npm run build`.

9. Inspect generated public output.
   - Confirm `dist` contains no placeholder image paths exposed on public pages.
   - Confirm `dist` contains no draft image detail pages.
   - Confirm `/entry/` stays local-only, noindexed, and excluded from public sitemap output.

10. Launch only after all public gates pass.
    - Public image records have real assets and specific metadata.
    - Public products link only to public-ready images.
    - Inquiry-only products avoid fake commerce language.
    - Readiness report has no launch-blocking public issues.
    - Static build succeeds.

## Entry Form Operating Workflow

Use the local entry form as the normal content intake and editing path after this feature is implemented:

1. Start the local site.
   - Run `npm run dev`.
   - Open `http://127.0.0.1:4321/entry/`.
   - Use `$env:PUBLIC_ENABLE_ENTRY = 'true'; npm run dev` only when a non-default local environment needs the helper enabled.

2. Choose the entry path.
   - Use `File import` for new image records.
   - Use `Edit gallery` for existing image records.
   - In edit mode, select an existing image so image, product, and outbound-link fields can prefill.

3. Import or identify the image asset.
   - For a new image, choose the local image file.
   - Choose the repo folder when browser folder access is available.
   - Set an optional subfolder such as `portraits`, `legacy`, `musicians/live`, or another sanitized public image path.
   - Confirm the final project path preview points into `public/images`.
   - If browser file writes are unavailable, move the image into `public/images` manually and enter the public image path in the form.

4. Check the image against readiness standards before public promotion.
   - Prefer a real web-ready asset with a `1600px` to `2400px` long edge.
   - Avoid public assets below `1600px` long edge, below `900px` short edge, above `2560px` long edge, or above the file-size thresholds.
   - Do not use `/images/placeholders/` paths for public content.
   - Preserve the intended portrait, landscape, square, panoramic, or unusual crop.

5. Use optional AI review only as a draft assistant.
   - Start or select the local provider if using AI review.
   - Run `Review Selected Image`.
   - Review suggested title, category, tags, alt text, hook, story, orientation, service routing, and print notes.
   - Apply only checked suggestions that are accurate.
   - Do not let AI guess year, location, storefront URLs, identities, or factual claims.

6. Fill the image fields.
   - Set title and slug.
   - Choose category.
   - Confirm `Public image path`.
   - Add tags for related work and future filtering.
   - Write specific alt text that describes the visible image.
   - Write a short hook for cards and previews.
   - Write two to four sentences of story context for the detail page.
   - Set orientation, year, location, medium, best-format note, service CTA, featured status, and print availability only when known.

7. Set readiness status.
   - Leave new records as `status: 'draft'` by default.
   - Use `status: 'public'` only after the image asset, copy, metadata, and route checks pass.
   - Preserve the existing status when editing unless intentionally promoting or demoting the record.
   - If the asset path is a placeholder path, keep the record draft even if the form allows public selection.

8. Add product data only when needed.
   - Check `Create product entry` only when the image should appear in `src/data/products.ts`.
   - Fill product title, slug, short description, selectable print sizes, custom sizes, and inquiry setting.
   - Set product status to draft by default.
   - Promote the product to public only when the linked image is public-ready and the product copy is inquiry-safe.

9. Configure outbound links carefully.
   - Use shared route keys only when the matching provider has a real configured route.
   - Add direct provider URLs only when they are live real URLs for this specific image or product.
   - Do not add fake storefront, template, `.invalid`, placeholder, or future-intent URLs to public products.
   - Leave product inquiry enabled when no live commerce route exists.

10. Submit or copy snippets.
    - Click `Add Locally` after fields are reviewed.
    - When browser folder access is available, the form writes the image file and updates local data files.
    - Review generated snippets for `src/data/images.ts`, `src/data/products.ts`, and `src/data/externalLinks.ts`.
    - Use `Copy` or `Download All` as the fallback when automatic file writes are unavailable.

11. Run readiness validation after entry.
    - Run the read-only readiness report.
    - Resolve launch-blocking issues before changing any draft record to public.
    - Re-run validation after fixes.

12. Verify the public site.
    - Run `npm run build`.
    - Inspect public pages that should show the new or edited content.
    - Confirm galleries, homepage previews, related work, print cards, and `/p/[slug]/` routes expose only public-ready records.
    - Confirm inquiry-only products do not show fake purchase actions.

## Requirements

### Requirement 1

**User Story:** As a site owner, I want every image and print product to have an explicit readiness status, so that draft content cannot be published by accident.

#### Acceptance Criteria

1. WHEN the content data types are updated THEN the system SHALL define a shared `ContentStatus` type with the values `'draft'` and `'public'`.
2. WHEN an `ImageItem` record is defined THEN the system SHALL require a `status: ContentStatus` field.
3. WHEN a `ProductItem` record is defined THEN the system SHALL require a `status: ContentStatus` field.
4. WHERE public-readiness decisions are made the system SHALL use a central readiness helper instead of duplicating status checks across pages and components.
5. IF an image record has `status: 'public'` but its `imageSrc` points inside `/images/placeholders/` THEN the system SHALL treat the image as non-public.

### Requirement 2

**User Story:** As a first-time visitor, I want public galleries and image detail pages to show only real, ready photography, so that the site feels trustworthy and finished.

#### Acceptance Criteria

1. WHERE image content is rendered on public pages the system SHALL include only public-ready images.
2. WHEN homepage previews are generated THEN the system SHALL exclude draft images and placeholder-backed images.
3. WHEN `/gallery`, `/portraits`, `/legacy`, or `/musicians` image lists are generated THEN the system SHALL exclude draft images and placeholder-backed images.
4. WHEN related work is generated for an image detail page THEN the system SHALL include only public-ready images.
5. WHEN static paths for `/p/[slug]/` are generated THEN the system SHALL generate paths only for public-ready images.
6. IF a request resolves to an image that is draft or placeholder-backed THEN the system SHALL not expose that image through a public detail page.

### Requirement 3

**User Story:** As a print buyer, I want print cards to appear only for ready public work, so that available actions are clear and credible.

#### Acceptance Criteria

1. WHEN print products are rendered publicly THEN the system SHALL include only products with `status: 'public'`.
2. IF a product links to an image that is not public-ready THEN the system SHALL not render that product on public pages.
3. WHEN homepage print previews are generated THEN the system SHALL exclude products linked to draft or placeholder-backed images.
4. WHEN `/prints/` is rendered THEN the system SHALL exclude products linked to draft or placeholder-backed images.
5. IF a public product has no live external route THEN the system SHALL show only the existing inquiry fallback when inquiry is allowed.
6. IF a product route points to a fake storefront, provider template, or placeholder URL THEN the system SHALL not treat that route as a live public purchase action.

### Requirement 4

**User Story:** As a content editor, I want the local entry helper to preserve and set readiness status, so that new records start safely and intentional publishing is explicit.

#### Acceptance Criteria

1. WHERE the local `/entry/` helper creates or edits image records the system SHALL support setting `status` to either `'draft'` or `'public'`.
2. WHERE the local `/entry/` helper creates or edits product records the system SHALL support setting `status` to either `'draft'` or `'public'`.
3. WHEN the local `/entry/` helper loads existing records THEN the system SHALL preserve their current readiness status.
4. WHEN the local `/entry/` helper generates new records without an explicit readiness choice THEN the system SHALL default the new record to `status: 'draft'`.
5. WHILE `/entry/` remains local-only the system SHALL keep the route noindexed and excluded from public sitemap output.

### Requirement 5

**User Story:** As a launch reviewer, I want a read-only readiness report, so that public-blocking content issues can be found before deployment.

#### Acceptance Criteria

1. WHEN readiness validation runs THEN the system SHALL report image records that use `/images/placeholders/`.
2. WHEN readiness validation runs THEN the system SHALL report public records containing bracket placeholder tokens such as `[Service Area]`.
3. WHEN readiness validation runs THEN the system SHALL report draft-style or generic public alt text, including text containing `Illustrative` where it represents placeholder copy.
4. WHEN readiness validation runs THEN the system SHALL report incomplete public image records required by public pages.
5. WHEN readiness validation runs THEN the system SHALL report public products linked to draft or placeholder-backed images.
6. WHEN readiness validation runs THEN the system SHALL report fake storefront, template, or placeholder product route URLs.
7. WHEN readiness validation inspects service content THEN the system SHALL report placeholder or generic service copy without hiding service pages.
8. WHEN readiness validation completes THEN the system SHALL produce a read-only report and SHALL NOT mutate content files.

### Requirement 6

**User Story:** As a launch reviewer, I want clear asset and copy readiness standards, so that public content stays within quality, performance, and trust guidelines.

#### Acceptance Criteria

1. WHERE a public image is used as a primary gallery, detail, service, product, or about-page visual the system SHALL require a real public-ready image asset rather than a placeholder, template, fallback, or draft asset.
2. WHERE a public primary image asset is validated the system SHALL report images with a long edge below `1600px` as undersized.
3. WHERE a public primary image asset is validated the system SHALL report images with a long edge above `2560px` as oversized unless the record is explicitly exempted for print or archival use.
4. WHERE a public primary image asset is validated the system SHALL report images with a short edge below `900px` as unsuitable for polished public display.
5. WHERE a public primary image asset is validated the system SHALL treat `1600px` to `2400px` on the long edge as the preferred delivery range for web display.
6. IF a public primary image asset is larger than `1.5MB` THEN the system SHALL report an optimization warning.
7. IF a public primary image asset is larger than `2.5MB` THEN the system SHALL report a launch-blocking size issue unless the record is explicitly exempted for print or archival use.
8. WHERE thumbnail, card, or preview-specific derivative assets are provided the system SHALL treat `800px` to `1400px` width and `400KB` or less as the preferred delivery range.
9. WHEN image dimensions are validated THEN the system SHALL preserve intentional portrait, landscape, and square orientations rather than requiring a single aspect ratio.
10. WHERE public title, alt text, hook, story, service copy, product copy, CTA, or metadata fields are validated the system SHALL report temporary language including `placeholder`, `draft`, `MVP`, `TODO`, `TBD`, `sample`, `lorem`, `Illustrative`, bracket tokens, and fake service-area labels.
11. WHERE public alt text is validated the system SHALL require a specific visual description of the image and SHALL report generic labels such as `image`, `photo`, `portrait`, `gallery image`, or keyword-stuffed text.
12. WHERE public product and CTA copy is validated the system SHALL report purchase language such as `Buy`, `Add to cart`, `Checkout`, or `Order now` when no real commerce provider or live product route is configured.
13. WHERE inquiry-only product copy is validated the system SHALL allow direct language such as `Inquire about prints`, `Request print details`, or `Contact for availability`.

### Requirement 7

**User Story:** As a developer, I want the readiness model to be testable in a static build, so that accidental leaks are caught before launch.

#### Acceptance Criteria

1. WHEN public image query helpers are tested THEN the system SHALL prove that draft images are excluded.
2. WHEN public image query helpers are tested THEN the system SHALL prove that `/images/placeholders/` images are excluded even if marked public.
3. WHEN static route generation is tested THEN the system SHALL prove that `/p/[slug]/` paths are generated only for public-ready images.
4. WHEN product rendering rules are tested THEN the system SHALL prove that products linked to non-public images are excluded.
5. WHEN product route behavior is tested THEN the system SHALL prove that public products without live external routes use inquiry-only fallback behavior.
6. WHEN `npm run build` runs THEN the build SHALL pass with the readiness model enabled.
7. WHEN generated `dist` output is inspected THEN public output SHALL NOT contain placeholder image paths or draft image detail pages.

# UI / Design QA Report

**Date:** 2026-05-06
**Status:** Substantially Improved (Post-MVP Cleanup)
**Skill Used:** `ui-design-qa`

## 1. Executive Summary

- **Overall UI/design readiness score:** **8/10** (Up from 4/10).
- **Biggest visual/design risk:** Asset performance. Two main images (`star-trails-over-trees.jpg` and `city-street-perspective.jpg`) remain over 30MB, which will cause significant perceived lag on mobile or slow connections.
- **Fastest improvement with highest ROI:** Compress raw JPGs and generate modern formats (WebP/AVIF) to ensure the visual polish is matched by technical speed.
- **Whether the website feels launch-ready:** **Yes, as a "v1 / Boutique" site.** The critical trust-damaging copy and placeholders have been successfully removed or filtered.

---

## 2. Critical Issues

### Critical - Heavy Image Assets
- **Affected area:** `public/images/star-trails-over-trees.jpg` (33MB), `public/images/city-street-perspective.jpg` (30MB).
- **Why it matters:** In a photography site, users expect high-quality images but will abandon the site if it takes 10+ seconds to load the hero or gallery.
- **Recommended fix:** Compress to <1MB and generate responsive sizes.

---

## 3. High-Impact Quick Wins

- **Expand Public Gallery:** Currently only 4 images are marked `public`. Increasing this to 6 or 8 (if high-quality work is ready) will make the "Featured Work" section feel more established.
- **Refine "Ask About Custom Print" CTA:** On image detail pages, ensure this primary inquiry action is the most visually prominent when external links are missing.

---

## 4. Agent Findings

### AGENT 1: CSS / Styling Specialist (Dewey)
- **Brand Alignment:** Consistent and sophisticated. The "Obsidian" background and "Ember" accent colors are used with restraint and purpose.
- **Typography:** The `Newsreader` (Display) and `Manrope` (Sans) pairing creates a professional, editorial feel that matches the high-end photography niche.
- **Micro-interactions:** Nav link underlines and "Sending..." button states provide clear feedback. Focus states using "Platinum" are visible and accessible.
- **Current State:** The new active-link styling in the header significantly improves navigation clarity.

### AGENT 2: UI / Layout / Structure Specialist (Kuhn)
- **Responsive Header:** The move to `lg` breakpoint for the desktop nav successfully prevents the previous layout collapse on tablets. The "More" menu handles secondary links gracefully.
- **Whitespace:** Section padding (`py-16/20/24`) and `.shell` containment provide consistent visual rhythm and "breathability."
- **Form Integrity:** The contact form layout is now robust across breakpoints, with no button wrapping or misalignment observed in recent checks.

### AGENT 3: Lead Product Designer (Maxwell)
- **Trust & Credibility:** All "MVP" and "Prototype" internal copy has been scrubbed. The site now presents as a finished professional presence.
- **Visual Routing:** The homepage "Path Cards" clearly direct users to specific service categories (Portraits, Legacy, etc.).
- **Fallback Strategy:** The `isPublicReadyImage` check effectively prevents placeholder SVGs from reaching the public UI, and the inquiry-based print strategy is a much better bridge than broken external links.
- **Conversion:** The functional `contact.php` backend and the detailed "What to include" guidance on the contact page build buyer confidence.

---

## 5. Prioritized Fix List

| Priority | Issue | Affected area | Recommended fix | Expected impact | Complexity |
|---|---|---|---|---|---|
| **Critical** | Massive image file sizes | `public/images/*.jpg` | Compress and optimize for web | Major performance & SEO lift | Low |
| **High** | Thin portfolio content | `images.ts` | Move 2-4 more "Draft" images to "Public" once assets are ready | Increased perceived authority | Low |
| **Medium** | "Pricing by project" ambiguity | `services.ts` | Consider adding "Packages starting at $X" to reduce friction | Faster lead qualification | Medium |
| **Medium** | Missing Social Meta | `Layout.astro` / `site.config.mjs` | Verify OG image and Twitter tags for all core pages | Better social sharing trust | Low |

---

## 6. Implementation Guidance

### Image Optimization
Use a tool like `squoosh` or a build-time Astro image optimization strategy.
- Target `WebP` or `AVIF` formats.
- Aim for a "Hero" size of ~1600-2000px width at <800KB.
- Gallery thumbnails should be <200KB.

### Gallery Depth
In `src/data/images.ts`, identify two more images that represent "Portrait" or "Musician" work well and transition them from `status: 'draft'` to `status: 'public'` after adding real photo assets.

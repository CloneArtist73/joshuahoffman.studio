---
name: ui-design-qa
description: Performs a full UI/design QA review of the photography studio website using specialized agents to identify styling, layout, and product design issues.
---

# UI/Design QA Review

This skill guides a comprehensive UI/Design QA review for the Joshua Hoffman Studio project. It utilizes three specialized agents to ensure the site meets "premium photography studio" standards and functions effectively as a visual router.

## When to Use
- Before a major feature launch or handoff.
- After significant styling or layout changes.
- To identify polish opportunities in the portfolio presentation.

## Workflow

### 1. Preparation
Read the design tokens in [references/design-tokens.md](references/design-tokens.md) to understand the project's visual language.

### 2. Specialized Reviews
Invoke three agents (or perform these roles sequentially) to review the codebase and visual output.

#### AGENT 1: CSS / Styling Specialist
Focus on visual consistency and technical execution of styles.
- **Brand Alignment**: Ensure consistent use of `obsidian`, `paper`, and `ember`. Check that `ember` is reserved for primary actions.
- **Typography**: Verify heading hierarchy (`Newsreader` for emotion, `Manrope` for utility). Check for "orphans" in large text blocks.
- **Micro-interactions**: Review button hover states, focus rings (should be `platinum`), and transitions.
- **Contrast**: Ensure readability against the dark `obsidian` background, especially for `steel` and `sand` text.

#### AGENT 2: UI / Layout / Structure Specialist
Focus on the physical presentation and responsiveness.
- **Grid Balance**: Inspect `GalleryGrid.astro` for image alignment and aspect ratio consistency.
- **Whitespace**: Ensure `section-block` padding is consistent across pages.
- **Responsive States**: Check mobile vs desktop transitions, specifically for the `Hero` and `ProductCard` components.
- **Shell Integrity**: Verify all pages use the `.shell` class for consistent horizontal alignment.

#### AGENT 3: Lead Product Designer
Review for emotional impact, trust, and conversion.
- **Visual Routing**: Is it clear where to go for "Portraits" vs "Fine Art Prints"? Are the CTAs prominent and compelling?
- **Photography Polish**: Evaluate how images are presented. Are placeholders being used appropriately where real assets are missing?
- **Trust Factor**: Does the site feel like a premium professional service? Identify any "cheap" or generic UI patterns.
- **User Flow**: Review the `ContactForm` and `ProductRouteButtons` for clarity and ease of use.

### 3. Reporting
Combine findings into a single report with the following structure:

1. **Executive Summary**: Overall readiness score (1-10) and the single biggest risk.
2. **Critical Issues**: Must-fix items before launch.
3. **High-Impact Quick Wins**: Rapid improvements with high ROI.
4. **Detailed Findings**: Categorized by agent.
5. **Prioritized Fix List**:
   - Priority | Issue | Affected Area | Recommended Fix | Complexity (L/M/H)
6. **Implementation Guidance**: Specific code locations and Tailwind classes to use.

## Design Standards
- **Tone**: Sophisticated, minimal, high-trust.
- **Performance**: High-quality imagery must be balanced with performance (check for `loading="lazy"` where appropriate).
- **Accessibility**: Mandatory focus states, alt text for images, and clear contrast.

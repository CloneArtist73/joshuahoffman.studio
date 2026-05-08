import type { ExternalLink } from './types';

// Storefront links must be confirmed product URLs before they are referenced by a public product.
// Add product-specific keys here as storefront pages go live, then reference those keys from products.ts.
export const externalLinks: Record<string, ExternalLink> = {};

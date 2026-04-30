import type { ExternalLink } from './types';

export const externalLinks: Record<string, ExternalLink> = {
  fineArtAmerica: {
    key: 'fineArtAmerica',
    label: 'Buy on Fine Art America',
    url: 'https://www.fineartamerica.com/prints/{imageSlug}-{productSlug}.html',
    platform: 'fine-art-america',
    note: 'Replace with a real checkout URL once product page details are finalized.',
  },
  etsy: {
    key: 'etsy',
    label: 'Buy on Etsy',
    url: 'https://www.etsy.com/search?q={imageSlug}',
    platform: 'etsy',
    note: 'Replace with a real Etsy listing URL before launch.',
  },
  shopify: {
    key: 'shopify',
    label: 'Buy on Shopify',
    url: 'https://shopify.com/products/{productSlug}',
    platform: 'shopify',
    note: 'Replace with a real Shopify product URL before launch.',
  },
  pixieset: {
    key: 'pixieset',
    label: 'Buy on Pixieset',
    url: 'https://www.pixieset.com/prints/{imageSlug}',
    platform: 'pixieset',
    note: 'Replace with a real Pixieset product URL before launch.',
  },
};

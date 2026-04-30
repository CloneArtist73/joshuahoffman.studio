import type { ProductItem } from './types';

export const products: ProductItem[] = [
  {
    slug: 'after-the-show-print',
    imageSlug: 'after-the-show',
    title: 'After the Show',
    shortDescription:
      'A post-performance portrait built for buyers who want a print with residue and atmosphere.',
    availableFormats: ['8 x 10', '12 x 18', '16 x 24'],
    routeKeys: ['fineArtAmerica', 'etsy'],
    inquiryAllowed: true,
  },
  {
    slug: 'kitchen-window-print',
    imageSlug: 'kitchen-window',
    title: 'Kitchen Window',
    shortDescription:
      'A quieter personal frame that works well in smaller rooms, hallways, and reading spaces.',
    availableFormats: ['8 x 10', '11 x 14', '16 x 20'],
    routeKeys: ['shopify', 'pixieset'],
    inquiryAllowed: true,
  },
  {
    slug: 'quiet-amp-print',
    imageSlug: 'quiet-amp',
    title: 'Quiet Amp',
    shortDescription:
      'A print-forward still life with enough negative space to hold up at larger wall sizes.',
    availableFormats: ['12 x 12', '20 x 20', '24 x 24'],
    routeKeys: ['etsy', 'shopify'],
    inquiryAllowed: true,
  },
  {
    slug: 'room-with-flowers-print',
    imageSlug: 'room-with-flowers',
    title: 'Room with Flowers',
    shortDescription:
      'A memory-based photograph suited to collectors who want warmth without sentimentality.',
    availableFormats: ['8 x 10', '12 x 16', '18 x 24'],
    routeKeys: ['fineArtAmerica'],
    inquiryAllowed: true,
  },
  {
    slug: 'star-trails-over-trees-print',
    imageSlug: 'star-trails-over-trees',
    title: 'Star Trails Over Trees',
    availableFormats: ['8 x 10', '11 x 14', '12 x 18'],
    routeKeys: ['pixieset', 'shopify'],
    inquiryAllowed: true,
  },
  {
    slug: 'city-street-perspective-print',
    imageSlug: 'city-street-perspective',
    title: 'City street perspective',
    availableFormats: ['8 x 10', '16 x 20', '16 x 24'],
    routeKeys: ['etsy', 'fineArtAmerica'],
    inquiryAllowed: true,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductByImageSlug(imageSlug: string) {
  return products.find((product) => product.imageSlug === imageSlug);
}

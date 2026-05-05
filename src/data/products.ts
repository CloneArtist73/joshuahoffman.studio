import type { ProductItem } from './types';

export const products: ProductItem[] = [
  {
    slug: 'after-the-show-print',
    status: 'draft',
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
    status: 'draft',
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
    status: 'draft',
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
    status: 'draft',
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
    status: 'public',
    imageSlug: 'star-trails-over-trees',
    title: 'Star Trails Over Trees',
    shortDescription: 'A night-sky photograph for buyers who want quiet scale, movement, and a strong sense of time.',
    availableFormats: [],
    routeKeys: [],
    inquiryAllowed: true,
  },
  {
    slug: 'city-street-perspective-print',
    status: 'public',
    imageSlug: 'city-street-perspective',
    title: 'City street perspective',
    shortDescription:
      'An urban geometry print built around rail lines, layered architecture, and evening city light.',
    availableFormats: ['8 x 10', '16 x 20', '16 x 24'],
    routeKeys: ['etsy', 'fineArtAmerica'],
    inquiryAllowed: true,
  },
  {
    slug: 'albany-skyline-at-night-print',
    status: 'public',
    imageSlug: 'albany-skyline-at-night',
    title: 'Albany Skyline at Night',
    shortDescription: 'A panoramic night view of Albany built around skyline lights, distance, and quiet urban geometry.',
    availableFormats: ['Custom sizing by inquiry'],
    routeKeys: [],
    inquiryAllowed: true,
  },
  {
    slug: 'milky-way-over-trees-print',
    status: 'public',
    imageSlug: 'milky-way-over-trees',
    title: 'Milky Way over trees',
    shortDescription: 'A vertical photograph showing the Milky Way galaxy arching over a line of trees against a dark night sky.',
    availableFormats: [],
    routeKeys: [],
    inquiryAllowed: true,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductByImageSlug(imageSlug: string) {
  return products.find((product) => product.imageSlug === imageSlug);
}

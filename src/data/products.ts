import type { ProductItem } from './types';

export const products: ProductItem[] = [
  {
    slug: 'after-the-show-print',
    status: 'draft',
    imageSlug: 'after-the-show',
    title: 'After the Show',
    shortDescription:
      'A physical print from a post-performance portrait. Storefront link still needs to be confirmed before public sale.',
    availableFormats: ['8 x 10', '12 x 18', '16 x 24'],
    routeKeys: [],
    inquiryAllowed: true,
  },
  {
    slug: 'kitchen-window-print',
    status: 'draft',
    imageSlug: 'kitchen-window',
    title: 'Kitchen Window',
    shortDescription:
      'A physical print from a quiet domestic frame. Storefront link still needs to be confirmed before public sale.',
    availableFormats: ['8 x 10', '11 x 14', '16 x 20'],
    routeKeys: [],
    inquiryAllowed: true,
  },
  {
    slug: 'quiet-amp-print',
    status: 'draft',
    imageSlug: 'quiet-amp',
    title: 'Quiet Amp',
    shortDescription:
      'A physical print from a simple still life. Storefront link still needs to be confirmed before public sale.',
    availableFormats: ['12 x 12', '20 x 20', '24 x 24'],
    routeKeys: [],
    inquiryAllowed: true,
  },
  {
    slug: 'room-with-flowers-print',
    status: 'draft',
    imageSlug: 'room-with-flowers',
    title: 'Room with Flowers',
    shortDescription:
      'A physical print from an existing photograph. Storefront link still needs to be confirmed before public sale.',
    availableFormats: ['8 x 10', '12 x 16', '18 x 24'],
    routeKeys: [],
    inquiryAllowed: true,
  },
  {
    slug: 'star-trails-over-trees-print',
    status: 'public',
    imageSlug: 'star-trails-over-trees',
    title: 'Star Trails Over Trees',
    shortDescription:
      'A physical night-sky print from real on-location photography. Ask about sizing, paper, and availability.',
    availableFormats: ['Custom sizing by inquiry'],
    routeKeys: [],
    inquiryAllowed: true,
  },
  {
    slug: 'city-street-perspective-print',
    status: 'public',
    imageSlug: 'city-street-perspective',
    title: 'City street perspective',
    shortDescription:
      'A physical city print built around rail lines, architecture, and evening light.',
    availableFormats: ['8 x 10', '16 x 20', '16 x 24'],
    routeKeys: [],
    inquiryAllowed: true,
  },
  {
    slug: 'albany-skyline-at-night-print',
    status: 'public',
    imageSlug: 'albany-skyline-at-night',
    title: 'Albany Skyline at Night',
    shortDescription:
      'A physical panoramic print of Albany at night, available by custom sizing inquiry.',
    availableFormats: ['Custom sizing by inquiry'],
    routeKeys: [],
    inquiryAllowed: true,
  },
  {
    slug: 'milky-way-over-trees-print',
    status: 'public',
    imageSlug: 'milky-way-over-trees',
    title: 'Milky Way over trees',
    shortDescription:
      'A physical astrophotography print made from real on-location night-sky work.',
    availableFormats: ['Custom sizing by inquiry'],
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

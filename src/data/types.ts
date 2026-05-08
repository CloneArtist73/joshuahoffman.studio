import type { imageCategories } from './categories';

export type ImageCategory = (typeof imageCategories)[number]['slug'];

export type Orientation = 'vertical' | 'horizontal' | 'square';

export type ContentStatus = 'draft' | 'public';

export type Platform =
  | 'fine-art-america'
  | 'etsy'
  | 'shopify'
  | 'pixieset'
  | 'other';

export type ServiceSlug = 'prints' | 'astrophotography' | 'portrait' | 'legacy' | 'musician' | 'custom';

export type AnalyticsProps = Record<string, string | number | boolean>;

export type ExternalLink = {
  key: string;
  label: string;
  url: string;
  platform: Platform;
  note?: string;
};

export type ImageItem = {
  slug: string;
  status: ContentStatus;
  title: string;
  category: ImageCategory;
  tags: string[];
  imageSrc: string;
  alt: string;
  hook: string;
  story?: string;
  orientation?: Orientation;
  year?: string;
  location?: string;
  medium?: string;
  bestFormat?: string;
  featured?: boolean;
  printAvailable?: boolean;
  serviceCTA?: ServiceSlug;
  productSlug?: string;
};

export type ProductItem = {
  slug: string;
  status: ContentStatus;
  imageSlug: string;
  title: string;
  shortDescription: string;
  availableFormats: string[];
  routeKeys: string[];
  inquiryAllowed?: boolean;
};

export type ServiceItem = {
  slug: Exclude<ServiceSlug, 'custom'>;
  title: string;
  shortDescription: string;
  longDescription: string;
  startingPrice?: string;
  ctaLabel: string;
  imageSrc?: string;
  pageHref: string;
  heroTitle: string;
  heroBody: string;
  idealFor: string[];
  includes: string[];
  gallerySlugs: string[];
};

export type CtaItem = {
  label: string;
  href: string;
  eventName?: string;
  eventProps?: AnalyticsProps;
};

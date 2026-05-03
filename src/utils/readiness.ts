import type { ExternalLink, ImageItem, ProductItem } from '../data/types';

export const placeholderImagePathSegment = '/images/placeholders/';

export function isPlaceholderImagePath(imageSrc = '') {
  return imageSrc.includes(placeholderImagePathSegment);
}

export function isPublicReadyImage(image: ImageItem | null | undefined): image is ImageItem {
  return Boolean(image && image.status === 'public' && !isPlaceholderImagePath(image.imageSrc));
}

export function isPublicReadyProduct(
  product: ProductItem | null | undefined,
  image?: ImageItem | null,
): product is ProductItem {
  if (!product || product.status !== 'public') {
    return false;
  }

  return image === undefined ? true : isPublicReadyImage(image);
}

export function isLiveExternalRoute(route: ExternalLink | null | undefined) {
  if (!route) {
    return false;
  }

  const hasTemplateToken = route.url.includes('{imageSlug}') || route.url.includes('{productSlug}');
  const markedPlaceholder = /replace with|before launch|once .* finalized/i.test(route.note ?? '');
  const genericStorefrontUrl = [
    /^https:\/\/www\.etsy\.com\/search\?/i,
    /^https:\/\/shopify\.com\/products\//i,
    /^https:\/\/www\.pixieset\.com\/prints\//i,
  ].some((pattern) => pattern.test(route.url));

  return !hasTemplateToken && !markedPlaceholder && !genericStorefrontUrl;
}

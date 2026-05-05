import { existsSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { externalLinks } from '../data/externalLinks';
import { images } from '../data/images';
import { products } from '../data/products';
import { services } from '../data/services';
import { siteConfig } from '../data/site';
import type { ImageItem, ProductItem } from '../data/types';
import {
  isLiveExternalRoute,
  isPlaceholderImagePath,
  isPublicReadyImage,
} from './readiness';

type Severity = 'blocker' | 'warning';

type ReadinessIssue = {
  severity: Severity;
  area: 'analytics' | 'contact' | 'externalLinks' | 'images' | 'products' | 'services';
  id: string;
  message: string;
};

type LaunchGate = {
  key: string;
  label: string;
  status: 'ready' | 'blocked' | 'warning';
  message: string;
};

const temporaryCopyPattern =
  /\b(placeholder|draft|mvp|todo|tbd|sample|lorem|illustrative)\b|\[[^\]]+\]/i;
const genericAltPattern = /^(image|photo|portrait|gallery image)$/i;
const minimumPublicImages = 3;
const contactHandlerPath = '/contact.php';

function issue(
  issues: ReadinessIssue[],
  severity: Severity,
  area: ReadinessIssue['area'],
  id: string,
  message: string,
) {
  issues.push({ severity, area, id, message });
}

function publicFilePath(imageSrc: string) {
  if (!imageSrc.startsWith('/images/')) {
    return '';
  }

  return join(process.cwd(), 'public', ...imageSrc.split('/').filter(Boolean));
}

function publicRootFilePath(publicPath: string) {
  return join(process.cwd(), 'public', ...publicPath.split('/').filter(Boolean));
}

function readJpegDimensions(buffer: Buffer) {
  let offset = 2;

  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) {
      return null;
    }

    const marker = buffer[offset + 1];
    const length = buffer.readUInt16BE(offset + 2);

    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return {
        width: buffer.readUInt16BE(offset + 7),
        height: buffer.readUInt16BE(offset + 5),
      };
    }

    offset += 2 + length;
  }

  return null;
}

function readPngDimensions(buffer: Buffer) {
  if (buffer.length < 24 || buffer.toString('ascii', 1, 4) !== 'PNG') {
    return null;
  }

  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

function readSvgDimensions(buffer: Buffer) {
  const source = buffer.toString('utf8');
  const width = source.match(/\bwidth=["']?([\d.]+)/i)?.[1];
  const height = source.match(/\bheight=["']?([\d.]+)/i)?.[1];

  if (width && height) {
    return {
      width: Number(width),
      height: Number(height),
    };
  }

  const viewBox = source.match(/\bviewBox=["'][^"']*?\s([\d.]+)\s([\d.]+)["']/i);
  if (!viewBox) {
    return null;
  }

  return {
    width: Number(viewBox[1]),
    height: Number(viewBox[2]),
  };
}

function readImageDimensions(filePath: string) {
  const buffer = readFileSync(filePath);
  const extension = filePath.split('.').at(-1)?.toLowerCase();

  if (extension === 'jpg' || extension === 'jpeg') {
    return readJpegDimensions(buffer);
  }

  if (extension === 'png') {
    return readPngDimensions(buffer);
  }

  if (extension === 'svg') {
    return readSvgDimensions(buffer);
  }

  return null;
}

function scanTemporaryText(
  issues: ReadinessIssue[],
  area: ReadinessIssue['area'],
  id: string,
  fields: Record<string, string | undefined>,
  severity: Severity,
) {
  for (const [field, value] of Object.entries(fields)) {
    if (value && temporaryCopyPattern.test(value)) {
      issue(issues, severity, area, id, `${field} contains temporary or placeholder language.`);
    }
  }
}

function validatePublicImageAsset(issues: ReadinessIssue[], image: ImageItem) {
  const filePath = publicFilePath(image.imageSrc);

  if (!filePath || !existsSync(filePath)) {
    issue(issues, 'blocker', 'images', image.slug, `Public image asset is missing: ${image.imageSrc}`);
    return;
  }

  const stats = statSync(filePath);
  const fileSizeMb = stats.size / (1024 * 1024);

  if (fileSizeMb > 2.5) {
    issue(issues, 'blocker', 'images', image.slug, `Image is ${fileSizeMb.toFixed(2)}MB, above the 2.5MB launch limit.`);
  } else if (fileSizeMb > 1.5) {
    issue(issues, 'warning', 'images', image.slug, `Image is ${fileSizeMb.toFixed(2)}MB, above the 1.5MB optimization target.`);
  }

  const dimensions = readImageDimensions(filePath);
  if (!dimensions) {
    issue(issues, 'warning', 'images', image.slug, 'Image dimensions could not be read for readiness validation.');
    return;
  }

  const longEdge = Math.max(dimensions.width, dimensions.height);
  const shortEdge = Math.min(dimensions.width, dimensions.height);

  if (longEdge < 1600) {
    issue(issues, 'blocker', 'images', image.slug, `Image long edge is ${longEdge}px, below the 1600px minimum.`);
  }

  if (shortEdge < 900) {
    issue(issues, 'blocker', 'images', image.slug, `Image short edge is ${shortEdge}px, below the 900px minimum.`);
  }

  if (longEdge > 2560) {
    issue(issues, 'warning', 'images', image.slug, `Image long edge is ${longEdge}px, above the 2560px public-display target.`);
  }
}

function validateImage(issues: ReadinessIssue[], image: ImageItem) {
  if (isPlaceholderImagePath(image.imageSrc)) {
    issue(issues, image.status === 'public' ? 'blocker' : 'warning', 'images', image.slug, 'Image uses a placeholder asset path.');
  }

  if (image.status !== 'public') {
    return;
  }

  if (!isPublicReadyImage(image)) {
    issue(issues, 'blocker', 'images', image.slug, 'Image is marked public but is not public-ready.');
  }

  const requiredFields = ['title', 'category', 'imageSrc', 'alt', 'hook'] as const;
  for (const field of requiredFields) {
    if (!String(image[field] ?? '').trim()) {
      issue(issues, 'blocker', 'images', image.slug, `Public image is missing ${field}.`);
    }
  }

  if (!image.tags.length) {
    issue(issues, 'warning', 'images', image.slug, 'Public image has no tags for related-work matching.');
  }

  if (genericAltPattern.test(image.alt.trim())) {
    issue(issues, 'blocker', 'images', image.slug, 'Public image alt text is too generic.');
  }

  scanTemporaryText(
    issues,
    'images',
    image.slug,
    {
      title: image.title,
      alt: image.alt,
      hook: image.hook,
      story: image.story,
      location: image.location,
      medium: image.medium,
      bestFormat: image.bestFormat,
    },
    'blocker',
  );

  validatePublicImageAsset(issues, image);
}

function getImageForProduct(product: ProductItem) {
  return images.find((image) => image.slug === product.imageSlug);
}

function validateProduct(issues: ReadinessIssue[], product: ProductItem) {
  const image = getImageForProduct(product);

  if (product.status !== 'public') {
    return;
  }

  if (!image) {
    issue(issues, 'blocker', 'products', product.slug, `Linked image does not exist: ${product.imageSlug}`);
    return;
  }

  if (!isPublicReadyImage(image)) {
    issue(issues, 'blocker', 'products', product.slug, `Product links to a non-public image: ${product.imageSlug}`);
  }

  const title = typeof product.title === 'string' ? product.title : '';
  const shortDescription = typeof product.shortDescription === 'string' ? product.shortDescription : '';
  const availableFormats = Array.isArray(product.availableFormats) ? product.availableFormats : [];
  const routeKeys = Array.isArray(product.routeKeys) ? product.routeKeys : [];

  if (!title.trim()) {
    issue(issues, 'blocker', 'products', product.slug, 'Public product is missing a title.');
  }

  if (!shortDescription.trim()) {
    issue(issues, 'blocker', 'products', product.slug, 'Public product is missing a short description.');
  }

  if (!availableFormats.length) {
    issue(issues, 'blocker', 'products', product.slug, 'Public product has no available formats.');
  }

  scanTemporaryText(
    issues,
    'products',
    product.slug,
    {
      title,
      shortDescription,
    },
    'blocker',
  );

  const routes = routeKeys
    .map((routeKey) => externalLinks[routeKey])
    .filter(Boolean);
  const liveRoutes = routes.filter(isLiveExternalRoute);

  if (!liveRoutes.length && !product.inquiryAllowed) {
    issue(issues, 'blocker', 'products', product.slug, 'Public product has no live route and inquiry fallback is disabled.');
  }

  for (const routeKey of routeKeys) {
    const route = externalLinks[routeKey];
    if (!route) {
      issue(issues, 'warning', 'products', product.slug, `Route key is missing from externalLinks: ${routeKey}`);
      continue;
    }

    if (!isLiveExternalRoute(route)) {
      issue(issues, 'warning', 'products', product.slug, `Route key ${routeKey} is not live and will fall back to inquiry.`);
    }
  }
}

function validateServices(issues: ReadinessIssue[]) {
  for (const service of services) {
    scanTemporaryText(
      issues,
      'services',
      service.slug,
      {
        title: service.title,
        shortDescription: service.shortDescription,
        longDescription: service.longDescription,
        startingPrice: service.startingPrice,
        ctaLabel: service.ctaLabel,
        heroTitle: service.heroTitle,
        heroBody: service.heroBody,
      },
      'warning',
    );

    const readyGalleryImages = service.gallerySlugs
      .map((slug) => images.find((image) => image.slug === slug))
      .filter(isPublicReadyImage);

    if (service.gallerySlugs.length && !readyGalleryImages.length) {
      issue(issues, 'warning', 'services', service.slug, 'Service gallery slugs currently resolve only to draft or placeholder-backed images.');
    }
  }
}

function validateExternalLinks(issues: ReadinessIssue[]) {
  for (const [key, route] of Object.entries(externalLinks)) {
    if (!isLiveExternalRoute(route)) {
      issue(issues, 'warning', 'externalLinks', key, 'External route is a template, placeholder, or generic storefront URL.');
    }
  }
}

function validateContact(issues: ReadinessIssue[]) {
  const provider = String(siteConfig.contactForm?.provider ?? '');
  const action = String(siteConfig.contactForm?.action ?? '');
  const hasPhpHandler = existsSync(publicRootFilePath(contactHandlerPath));

  if (provider !== 'php') {
    issue(issues, 'blocker', 'contact', 'provider', 'Contact form provider should be set to php for InMotion contact handling.');
  }

  if (action !== contactHandlerPath) {
    issue(issues, 'blocker', 'contact', 'action', `Contact form action should point to ${contactHandlerPath}.`);
  }

  if (!hasPhpHandler) {
    issue(issues, 'blocker', 'contact', 'handler', `Contact handler is missing from public${contactHandlerPath}.`);
  }
}

function validateAnalytics(issues: ReadinessIssue[]) {
  const provider = String(siteConfig.analytics?.provider ?? '');
  const gaMeasurementId = String(siteConfig.analytics?.gaMeasurementId ?? '');

  if (provider !== 'ga4') {
    issue(issues, 'warning', 'analytics', 'provider', 'GA4 should be the configured analytics provider before launch verification.');
  }

  if (!gaMeasurementId.trim()) {
    issue(issues, 'warning', 'analytics', 'gaMeasurementId', 'GA4 measurement ID is missing.');
  }
}

function getLaunchGates(): LaunchGate[] {
  const publicImages = images.filter(isPublicReadyImage);
  const contactProvider = String(siteConfig.contactForm?.provider ?? '');
  const contactAction = String(siteConfig.contactForm?.action ?? '');
  const contactHandlerExists = existsSync(publicRootFilePath(contactHandlerPath));
  const analyticsProvider = String(siteConfig.analytics?.provider ?? '');
  const gaMeasurementId = String(siteConfig.analytics?.gaMeasurementId ?? '');
  const publicProducts = products.filter((product) => product.status === 'public');
  const publicProductIssues = publicProducts.filter((product) => {
    const image = getImageForProduct(product);
    const routes = product.routeKeys.map((routeKey) => externalLinks[routeKey]).filter(Boolean);
    return !image || !isPublicReadyImage(image) || (!routes.some(isLiveExternalRoute) && !product.inquiryAllowed);
  });
  const placeholderRouteKeys = new Set(
    Object.entries(externalLinks)
      .filter(([, route]) => !isLiveExternalRoute(route))
      .map(([key]) => key),
  );
  const visibleProductsUsingPlaceholderRoutes = publicProducts.filter((product) =>
    product.routeKeys.some((routeKey) => placeholderRouteKeys.has(routeKey)),
  );

  return [
    {
      key: 'contact',
      label: 'Contact',
      status: contactProvider === 'php' && contactAction === contactHandlerPath && contactHandlerExists ? 'ready' : 'blocked',
      message:
        contactProvider === 'php' && contactAction === contactHandlerPath && contactHandlerExists
          ? 'PHP contact handling is aligned for InMotion.'
          : `Set contactForm.provider to php, action to ${contactHandlerPath}, and keep public${contactHandlerPath} in the build.`,
    },
    {
      key: 'analytics',
      label: 'Analytics',
      status: analyticsProvider === 'ga4' && Boolean(gaMeasurementId.trim()) ? 'ready' : 'warning',
      message:
        analyticsProvider === 'ga4' && Boolean(gaMeasurementId.trim())
          ? 'GA4 is configured; verify events after deployment.'
          : 'Configure GA4 provider and measurement ID before launch verification.',
    },
    {
      key: 'content',
      label: 'Public images',
      status: publicImages.length >= minimumPublicImages ? 'ready' : 'blocked',
      message:
        publicImages.length >= minimumPublicImages
          ? `${publicImages.length} public-ready images are available.`
          : `Publish at least ${minimumPublicImages} real images; ${publicImages.length} are public-ready now.`,
    },
    {
      key: 'products',
      label: 'Products',
      status: publicProductIssues.length ? 'blocked' : 'ready',
      message: publicProductIssues.length
        ? `${publicProductIssues.length} public product needs a live route or inquiry fallback.`
        : 'Public products have live routes or inquiry fallback.',
    },
    {
      key: 'external-links',
      label: 'External links',
      status: visibleProductsUsingPlaceholderRoutes.length ? 'warning' : 'ready',
      message: visibleProductsUsingPlaceholderRoutes.length
        ? `${visibleProductsUsingPlaceholderRoutes.length} public product uses placeholder route keys and will fall back to inquiry.`
        : 'No public product depends on placeholder external routes.',
    },
  ];
}

export function getContentReadinessReport() {
  const issues: ReadinessIssue[] = [];

  images.forEach((image) => validateImage(issues, image));
  products.forEach((product) => validateProduct(issues, product));
  validateServices(issues);
  validateExternalLinks(issues);
  validateContact(issues);
  validateAnalytics(issues);

  const blockers = issues.filter((entry) => entry.severity === 'blocker');
  const warnings = issues.filter((entry) => entry.severity === 'warning');

  return {
    generatedAt: new Date().toISOString(),
    summary: {
      blockers: blockers.length,
      warnings: warnings.length,
      publicImages: images.filter(isPublicReadyImage).length,
      draftImages: images.filter((image) => image.status === 'draft').length,
      publicProducts: products.filter((product) => product.status === 'public').length,
      draftProducts: products.filter((product) => product.status === 'draft').length,
    },
    launch: {
      minimumPublicImages,
      contactHandlerPath,
      gates: getLaunchGates(),
    },
    issues,
  };
}

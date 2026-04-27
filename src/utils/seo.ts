import { siteConfig } from '../data/site';

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
};

export function absoluteUrl(path = '/') {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  return new URL(path, siteConfig.siteUrl).toString();
}

export function buildTitle(title?: string) {
  if (!title) {
    return siteConfig.defaultTitle;
  }

  return `${title} | ${siteConfig.brandName}`;
}

export function buildSeo({
  title,
  description,
  path = '/',
  image = '/images/placeholders/hero-memory.svg',
  type = 'website',
  noindex = false,
}: SeoInput) {
  return {
    title: buildTitle(title),
    description: description ?? siteConfig.defaultDescription,
    canonical: absoluteUrl(path),
    image: absoluteUrl(image),
    type,
    noindex,
  };
}

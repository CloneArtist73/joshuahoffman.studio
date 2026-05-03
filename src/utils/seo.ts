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

export function normalizeRoutePath(path = '/') {
  const pathname = path.startsWith('http://') || path.startsWith('https://')
    ? new URL(path).pathname
    : path.split(/[?#]/, 1)[0] || '/';
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;

  if (normalizedPath === '/') {
    return normalizedPath;
  }

  return normalizedPath.endsWith('/') || normalizedPath.includes('.')
    ? normalizedPath
    : `${normalizedPath}/`;
}

export function isNoindexPath(path = '/') {
  return (siteConfig.noindexPaths ?? [])
    .map(normalizeRoutePath)
    .includes(normalizeRoutePath(path));
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
  image = '/images/ice-formations-on-a-surface.jpeg',
  type = 'website',
  noindex = false,
}: SeoInput) {
  return {
    title: buildTitle(title),
    description: description ?? siteConfig.defaultDescription,
    canonical: absoluteUrl(path),
    image: absoluteUrl(image),
    type,
    noindex: noindex || isNoindexPath(path),
  };
}

import rawSiteConfig from '../../site.config.mjs';

export const siteConfig = rawSiteConfig;

export const primaryNavLinks = [
  { href: '/gallery/', label: 'Gallery' },
  { href: '/portraits/', label: 'Portraits' },
  { href: '/prints/', label: 'Prints' },
  { href: '/contact/', label: 'Contact' },
] as const;

export const secondaryNavLinks = [
  { href: '/legacy/', label: 'Legacy' },
  { href: '/musicians/', label: 'Musicians' },
  { href: '/about/', label: 'About' },
] as const;

export const socialLinks = [
  { href: siteConfig.instagramUrl, label: 'Instagram' },
] as const;

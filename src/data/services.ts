import type { ServiceItem } from './types';

export const services: ServiceItem[] = [
  {
    slug: 'portrait',
    title: 'Portrait Sessions',
    shortDescription:
      'Honest portrait sessions for people who want to be seen clearly, not overly posed.',
    longDescription:
      'Honest portrait sessions for people who want to be seen clearly, not overly posed. Built for individuals, families, artists, and anyone who needs images with presence.',
    startingPrice: 'Pricing by project after a short planning conversation',
    ctaLabel: 'Start an Inquiry',
    imageSrc: '/images/placeholders/portrait-session.svg',
    pageHref: '/portraits/',
    heroTitle: 'Honest portraits with enough room for a person to stay themselves.',
    heroBody:
      'These sessions are made for individuals, couples, families, and artists who want photographs that feel direct rather than over-managed.',
    idealFor: [
      'Individuals who need updated portraits with weight',
      'Families who want work that feels lived-in rather than staged',
      'Artists and makers who need photographs with presence',
    ],
    includes: [
      'Planning call and clear session outline',
      'A focused shoot built around direct portraiture',
      'Edited image delivery and simple licensing guidance',
    ],
    gallerySlugs: ['before-the-vow', 'studio-stillness', 'soft-jacket'],
  },
  {
    slug: 'legacy',
    title: 'Legacy / Memorial Work',
    shortDescription:
      'Sensitive photography built around memory, family, grief, and the people we do not want forgotten.',
    longDescription:
      'Sensitive photography built around memory, family, grief, and the people we do not want forgotten. These sessions are handled carefully and personally.',
    startingPrice: 'Pricing by project after a careful planning conversation',
    ctaLabel: 'Start a Conversation',
    imageSrc: '/images/placeholders/legacy-light.svg',
    pageHref: '/legacy/',
    heroTitle: 'Memory work handled carefully, without pushing people into performance.',
    heroBody:
      'Legacy sessions are built for families who need photographs that feel respectful, steady, and emotionally accurate.',
    idealFor: [
      'Families documenting elders, illness, or transitions',
      'People preserving domestic spaces and ordinary rituals',
      'Anyone needing images around remembrance, grief, or closeness',
    ],
    includes: [
      'A slower planning conversation before photographs are made',
      'Flexible pacing built around the people involved',
      'Image delivery suited to family sharing, albums, or prints',
    ],
    gallerySlugs: ['hands-at-rest', 'father-and-daughter', 'empty-chair-sunday'],
  },
  {
    slug: 'musician',
    title: 'Musician / Artist Portraits',
    shortDescription:
      'Portraits for musicians, performers, and artists who need images that feel like their work sounds.',
    longDescription:
      'Portraits for musicians, performers, and artists who need images that feel like their work sounds: direct, emotional, and usable across press, social, posters, and releases.',
    startingPrice: 'Pricing by project after a short planning conversation',
    ctaLabel: 'Start an Artist Inquiry',
    imageSrc: '/images/placeholders/musician-stage.svg',
    pageHref: '/musicians/',
    heroTitle: 'Portraits for artists who need more than promo gloss.',
    heroBody:
      'Built for musicians, bands, performers, and artists who need press photos, release visuals, promo frames, and portraits with a little friction in them.',
    idealFor: [
      'Press photos that feel like the work, not a template',
      'Album art, release campaigns, and poster visuals',
      'Social portraits and media kit updates',
    ],
    includes: [
      'Pre-shoot planning around sound, references, and usage',
      'Portraits made on location, backstage, or in simple studio setups',
      'Usable crops for posters, social, and streaming platforms',
    ],
    gallerySlugs: ['after-the-show', 'green-room', 'soft-jacket'],
  },
  {
    slug: 'prints',
    title: 'Fine-Art Prints',
    shortDescription:
      'Selected photographs are available as prints through trusted external platforms.',
    longDescription:
      'Selected photographs are available as prints through trusted external platforms. For custom sizing, signed work, or special requests, send a direct inquiry.',
    ctaLabel: 'View Print Options',
    imageSrc: '/images/placeholders/fine-art-quiet.svg',
    pageHref: '/prints/',
    heroTitle: 'Selected photographs available as prints, without building a custom store too early.',
    heroBody:
      'Print buyers can explore a small edited selection, choose a trusted checkout platform, or send a direct question for custom sizing or signed work.',
    idealFor: [
      'Collectors who want a small edited selection rather than a full archive dump',
      'Gift buyers looking for direct external checkout options',
      'People who need a custom size, signed print, or licensing conversation',
    ],
    includes: [
      'A concise print edit built from the strongest work',
      'Outbound buying links to trusted storefronts',
      'Direct inquiry fallback for custom requests',
    ],
    gallerySlugs: ['room-with-flowers', 'kitchen-window', 'quiet-amp'],
  },
];

export function getServiceBySlug(slug: ServiceItem['slug']) {
  return services.find((service) => service.slug === slug);
}

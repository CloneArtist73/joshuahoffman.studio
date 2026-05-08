import type { ServiceItem } from './types';

export const services: ServiceItem[] = [
  {
    slug: 'prints',
    title: 'Physical Prints',
    shortDescription:
      'Selected photographs available as physical prints through confirmed storefront links or direct inquiry.',
    longDescription:
      'Prints are the main commercial focus of the site. Each public print should lead to a real storefront when one is ready; custom sizes, signed work, and special requests can still start with a direct note.',
    ctaLabel: 'View Prints',
    pageHref: '/prints/',
    heroTitle: 'Physical prints from photographs that can hold a wall.',
    heroBody:
      'Browse the current print edit, use a confirmed buy link when it is available, or ask directly about sizing, paper, signed work, and availability.',
    idealFor: [
      'People looking for a finished wall print',
      'Buyers who need a specific size or paper choice',
      'Collectors asking about signed work or availability',
    ],
    includes: [
      'Confirmed storefront links when a product page is ready',
      'Direct inquiry for custom sizes, signed prints, and special requests',
      'Physical prints treated as the primary product',
      'Licensing and digital use handled separately by inquiry',
    ],
    gallerySlugs: [
      'star-trails-over-trees',
      'milky-way-over-trees',
      'albany-skyline-at-night',
      'city-street-perspective',
    ],
  },
  {
    slug: 'astrophotography',
    title: 'Astrophotography',
    shortDescription:
      'Real night-sky and skyscape photographs made on location, planned around the actual place and sky.',
    longDescription:
      'Astrophotography work is planned around darkness, weather, timing, access, moon phase, and the real setting. The skies and locations are photographed on location, not AI-generated and not fabricated composites.',
    startingPrice: 'Custom work quoted after location, timing, and conditions are discussed',
    ctaLabel: 'Ask About Astrophotography',
    imageSrc: '/images/star-trails-over-trees.jpg',
    pageHref: '/astrophotography/',
    heroTitle: 'Astrophotography planned around the real sky and the real place.',
    heroBody:
      'Night-sky work depends on weather, darkness, moon phase, timing, access, and the location itself. The plan starts there before a date is treated as workable.',
    idealFor: [
      'Print buyers drawn to night-sky and skyscape work',
      'People who want a real place photographed under the night sky',
      'Projects that need planning around darkness, timing, and access',
    ],
    includes: [
      'Planning around location, weather, moon phase, darkness, and timing',
      'A realistic conversation about access, safety, and what the sky may allow',
      'Photographs made from real on-location work',
      'Print and licensing questions handled directly after the image is selected',
    ],
    gallerySlugs: ['star-trails-over-trees', 'milky-way-over-trees', 'albany-skyline-at-night'],
  },
  {
    slug: 'portrait',
    title: 'Portrait Sessions',
    shortDescription:
      'Portraits for individuals, couples, families, artists, and personal work that needs to feel like the person.',
    longDescription:
      'Portrait sessions stay flexible and practical: individual portraits, couples, families, artists, and tasteful personal sessions, including weddings or boudoir when the fit is right.',
    startingPrice: 'Pricing by project after a short planning conversation',
    ctaLabel: 'Start a Portrait Inquiry',
    pageHref: '/portraits/',
    heroTitle: 'Portraits with direction, without turning the person into a template.',
    heroBody:
      'Sessions are planned around where the photographs need to live: a wall, a family record, a website, a press kit, or a private set of images.',
    idealFor: [
      'Individuals who need portraits that still feel like them',
      'Couples, families, weddings, or boudoir handled with taste and flexibility',
      'Artists and makers who need direct, usable photographs',
    ],
    includes: [
      'Planning around use, privacy, timing, and location',
      'A focused shoot with enough direction to make the session useful',
      'Edited image delivery with basic usage guidance',
      'Clear expectations before the date is set',
    ],
    gallerySlugs: ['before-the-vow', 'studio-stillness', 'soft-jacket'],
  },
  {
    slug: 'musician',
    title: 'Musician / Artist Portraits',
    shortDescription:
      'Portraits for musicians and artists who need images for press, releases, posters, and social use.',
    longDescription:
      'Artist sessions are built around where the image has to work first: press kits, release pages, posters, websites, social crops, and the look of the project itself.',
    startingPrice: 'Pricing by project after a short planning conversation',
    ctaLabel: 'Start an Artist Inquiry',
    pageHref: '/musicians/',
    heroTitle: 'Artist portraits that fit the project before they fit a template.',
    heroBody:
      'Planning starts with the project, references, use, and timing so the photographs have a clear job once they leave the session.',
    idealFor: [
      'Press photos that match the project',
      'Album art, release campaigns, and poster visuals',
      'Social portraits and media kit updates',
    ],
    includes: [
      'Pre-shoot planning around sound, references, and usage',
      'Portraits made on location, backstage, or in simple studio setups',
      'Usable crops for posters, social, and streaming platforms',
      'Usage planning for press, release, poster, and social needs',
    ],
    gallerySlugs: ['after-the-show', 'green-room', 'soft-jacket'],
  },
  {
    slug: 'legacy',
    title: 'Photo Restoration / Legacy Prints',
    shortDescription:
      'Old photo touchups, restoration-style edits, reprints, and fresh prints from existing photographs.',
    longDescription:
      'Legacy work is a quieter secondary service for people who already have a photograph that needs care: cleanup, restoration-style editing, reprints, or a fresh physical print.',
    startingPrice: 'Pricing by project after the image and print needs are reviewed',
    ctaLabel: 'Ask About Restoration',
    pageHref: '/legacy/',
    heroTitle: 'Old photographs cleaned up and printed with care.',
    heroBody:
      'Send the existing photograph, explain what you want improved, and start with a practical conversation about touchups, reprints, and fresh physical prints.',
    idealFor: [
      'Old photographs that need cleanup or touchups',
      'Family images that need a better print',
      'Existing photographs being prepared for display or sharing',
    ],
    includes: [
      'Review of the existing photograph before quoting',
      'Restoration-style edits and cleanup where the file allows it',
      'Reprints or fresh physical prints from existing images',
      'Privacy and handling expectations clarified before work begins',
    ],
    gallerySlugs: ['hands-at-rest', 'father-and-daughter', 'empty-chair-sunday'],
  },
];

export function getServiceBySlug(slug: ServiceItem['slug']) {
  return services.find((service) => service.slug === slug);
}

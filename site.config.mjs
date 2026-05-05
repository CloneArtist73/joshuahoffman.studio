const siteConfig = {
  siteUrl: 'https://joshuahoffman.studio',
  ownerName: 'Joshua Hoffman',
  brandName: 'Joshua Hoffman Studio',
  defaultTitle: 'Joshua Hoffman Studio',
  defaultDescription:
    'Photography for people, families, artists, and rooms that need something real.',
  heroHeadline:
    'Photography for people, families, artists, and rooms that need something real.',
  heroSupport:
    "A quiet visual home for Joshua's portrait work, legacy photography, musician images, and selected fine-art prints.",
  email: 'info@joshuahoffman.studio',
  serviceArea: 'Upstate New York',
  instagramUrl: 'https://www.instagram.com/joshuahoffmanphotography/',
  noindexPaths: ['/404.html', '/contact/thank-you/', '/entry/', '/entry/readiness.json'],
  localOnlyBuildPaths: ['/entry/'],
  analytics: {
    provider: 'ga4',
    // GA4 is configured. Keep Plausible empty unless switching providers later.
    plausibleDomain: '',
    gaMeasurementId: 'G-F3LFGP6E25',
  },
  contactForm: {
    provider: 'php',
    // InMotion runs this PHP handler from the static build output.
    action: '/contact.php',
  },
};

export default siteConfig;

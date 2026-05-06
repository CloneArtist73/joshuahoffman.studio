const siteConfig = {
  siteUrl: 'https://joshuahoffman.studio',
  ownerName: 'Joshua Hoffman',
  brandName: 'Joshua Hoffman Studio',
  defaultTitle: 'Joshua Hoffman Studio',
  defaultDescription:
    'Portraits, legacy photography, artist images, and fine-art print inquiries from Joshua Hoffman Studio in Upstate New York.',
  heroHeadline:
    'Portraits, legacy work, artist images, and prints with emotional weight.',
  heroSupport:
    'Direct photography for people, families, artists, and collectors who want the image to hold its ground.',
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

const siteConfig = {
  siteUrl: 'https://joshuahoffman.studio',
  ownerName: 'Joshua Hoffman',
  brandName: 'Joshua Hoffman Studio',
  defaultTitle: 'Joshua Hoffman Studio',
  defaultDescription:
    'Physical prints, real on-location astrophotography, portraits, and image licensing inquiries from Joshua Hoffman Studio in Upstate New York.',
  heroHeadline:
    'Physical prints from real photographs, with sessions and licensing handled directly.',
  heroSupport:
    'Photographs made on location, selected for print, and handled through clear storefront or inquiry paths.',
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

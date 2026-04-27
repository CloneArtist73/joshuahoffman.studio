const siteConfig = {
  // TODO: Replace this with the real production domain before launch.
  siteUrl: 'https://example.com',
  ownerName: 'Joshua [Last Name]',
  brandName: 'Joshua Photography',
  defaultTitle: 'Joshua Photography',
  defaultDescription:
    'Photography for people, families, artists, and rooms that need something real.',
  heroHeadline:
    'Photography for people, families, artists, and rooms that need something real.',
  heroSupport:
    "A quiet visual home for Joshua's portrait work, legacy photography, musician images, and selected fine-art prints.",
  email: 'email@example.com',
  serviceArea: '[Service Area]',
  instagramUrl: 'https://instagram.com/[Instagram URL]',
  analytics: {
    provider: 'none',
    // TODO: Set provider to "plausible" or "ga4" and add the matching ID when analytics is ready.
    plausibleDomain: '',
    gaMeasurementId: '',
  },
  contactForm: {
    provider: 'netlify',
    // TODO: Replace with a real form endpoint if you choose Formspree, Basin, Getform, or another static handler.
    action: '/contact/thank-you/',
  },
};

export default siteConfig;

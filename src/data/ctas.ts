import type { CtaItem } from './types';

export const ctas: Record<string, CtaItem> = {
  bookPortrait: {
    label: 'Start an Inquiry',
    href: '/contact/?type=Portrait%20session',
    eventName: 'book_session_click',
    eventProps: {
      service: 'portrait',
      location: 'shared_cta',
    },
  },
  exploreGallery: {
    label: 'Explore Gallery',
    href: '/gallery/',
    eventName: 'gallery_image_click',
    eventProps: {
      location: 'shared_cta',
      destination: 'gallery',
    },
  },
  viewPrints: {
    label: 'View Prints',
    href: '/prints/',
    eventName: 'print_buy_click',
    eventProps: {
      location: 'shared_cta',
      destination: 'prints_page',
    },
  },
  contactJoshua: {
    label: 'Contact Joshua',
    href: '/contact/',
    eventName: 'contact_click',
    eventProps: {
      location: 'shared_cta',
    },
  },
  legacyConversation: {
    label: 'Start a Conversation',
    href: '/contact/?type=Legacy%20%2F%20memorial%20work',
    eventName: 'book_session_click',
    eventProps: {
      service: 'legacy',
      location: 'shared_cta',
    },
  },
  musicianInquiry: {
    label: 'Start an Artist Inquiry',
    href: '/contact/?type=Musician%20%2F%20artist%20portraits',
    eventName: 'book_session_click',
    eventProps: {
      service: 'musician',
      location: 'shared_cta',
    },
  },
  customPrintInquiry: {
    label: 'Ask About Custom Print',
    href: '/contact/?type=Print%20or%20product%20question',
    eventName: 'contact_click',
    eventProps: {
      location: 'shared_cta',
      intent: 'custom_print',
    },
  },
};

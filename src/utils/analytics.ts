import type { AnalyticsProps, Platform } from '../data/types';

export type AnalyticsEventName =
  | 'contact_click'
  | 'inquiry_submit'
  | 'print_buy_click'
  | 'etsy_click'
  | 'fine_art_america_click'
  | 'shopify_click'
  | 'pixieset_click'
  | 'book_session_click'
  | 'gallery_image_click'
  | 'image_page_view';

type TrackingOptions = {
  secondaryEventName?: AnalyticsEventName;
  secondaryProps?: AnalyticsProps;
};

function serializeProps(props: AnalyticsProps = {}) {
  return JSON.stringify(props);
}

export function trackingAttributes(
  eventName: AnalyticsEventName,
  props: AnalyticsProps = {},
  options: TrackingOptions = {},
) {
  const attrs: Record<string, string> = {
    'data-track-event': eventName,
    'data-track-props': serializeProps(props),
  };

  if (options.secondaryEventName) {
    attrs['data-track-secondary-event'] = options.secondaryEventName;
    attrs['data-track-secondary-props'] = serializeProps(options.secondaryProps ?? props);
  }

  return attrs;
}

export function submitTrackingAttributes(
  eventName: AnalyticsEventName,
  props: AnalyticsProps = {},
  fieldName?: string,
) {
  const attrs: Record<string, string> = {
    'data-track-submit-event': eventName,
    'data-track-submit-props': serializeProps(props),
  };

  if (fieldName) {
    attrs['data-track-submit-field'] = fieldName;
  }

  return attrs;
}

export function platformEventName(platform: Platform) {
  switch (platform) {
    case 'etsy':
      return 'etsy_click';
    case 'fine-art-america':
      return 'fine_art_america_click';
    case 'shopify':
      return 'shopify_click';
    case 'pixieset':
      return 'pixieset_click';
    default:
      return undefined;
  }
}

export function contactClick(props: AnalyticsProps = {}) {
  return trackingAttributes('contact_click', props);
}

export function inquirySubmit(props: AnalyticsProps = {}, fieldName = 'inquiryType') {
  return submitTrackingAttributes('inquiry_submit', props, fieldName);
}

export function bookSessionClick(props: AnalyticsProps = {}) {
  return trackingAttributes('book_session_click', props);
}

export function galleryImageClick(props: AnalyticsProps = {}) {
  return trackingAttributes('gallery_image_click', props);
}

export function printBuyClick(props: AnalyticsProps = {}, platform?: Platform) {
  const secondaryEventName = platform ? platformEventName(platform) : undefined;

  return trackingAttributes(
    'print_buy_click',
    props,
    secondaryEventName
      ? {
          secondaryEventName,
          secondaryProps: props,
        }
      : {},
  );
}

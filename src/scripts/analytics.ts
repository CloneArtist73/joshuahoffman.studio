import { siteConfig } from '../data/site';
import type { AnalyticsProps } from '../data/types';
import type { AnalyticsEventName } from '../utils/analytics';

declare global {
  interface Window {
    __jhAnalyticsInitialized?: boolean;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    plausible?: (eventName: string, options?: { props?: AnalyticsProps }) => void;
    trackEvent?: (eventName: AnalyticsEventName, props?: AnalyticsProps) => void;
  }
}

function parseProps(raw?: string) {
  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw) as AnalyticsProps;
  } catch {
    return {};
  }
}

export function trackEvent(eventName: AnalyticsEventName, props: AnalyticsProps = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  if (
    siteConfig.analytics.provider === 'plausible' &&
    siteConfig.analytics.plausibleDomain &&
    typeof window.plausible === 'function'
  ) {
    window.plausible(eventName, { props });
    return;
  }

  if (
    siteConfig.analytics.provider === 'ga4' &&
    siteConfig.analytics.gaMeasurementId &&
    typeof window.gtag === 'function'
  ) {
    window.gtag('event', eventName, props);
  }
}

function fireTrackedEvent(element: HTMLElement) {
  const eventName = element.dataset.trackEvent as AnalyticsEventName | undefined;

  if (!eventName) {
    return;
  }

  const props = parseProps(element.dataset.trackProps);
  trackEvent(eventName, props);

  const secondaryEventName = element.dataset.trackSecondaryEvent as AnalyticsEventName | undefined;
  if (secondaryEventName) {
    const secondaryProps = parseProps(element.dataset.trackSecondaryProps);
    trackEvent(secondaryEventName, secondaryProps);
  }
}

function handleTrackedClicks(event: MouseEvent) {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const trackedElement = target.closest<HTMLElement>('[data-track-event]');
  if (trackedElement) {
    fireTrackedEvent(trackedElement);
  }
}

function handleTrackedSubmissions(event: Event) {
  const target = event.target;
  if (!(target instanceof HTMLFormElement)) {
    return;
  }

  const eventName = target.dataset.trackSubmitEvent as AnalyticsEventName | undefined;
  if (!eventName) {
    return;
  }

  const props = parseProps(target.dataset.trackSubmitProps);
  const fieldName = target.dataset.trackSubmitField;
  if (fieldName) {
    const fieldValue = new FormData(target).get(fieldName);
    if (typeof fieldValue === 'string' && fieldValue.trim()) {
      props.inquiryType = fieldValue.trim();
    }
  }

  trackEvent(eventName, props);
}

function handlePageView() {
  if (typeof document === 'undefined') {
    return;
  }

  const eventName = document.body.dataset.pageViewEvent as AnalyticsEventName | undefined;
  if (!eventName) {
    return;
  }

  const props = parseProps(document.body.dataset.pageViewProps);
  trackEvent(eventName, props);
}

export function initAnalytics() {
  if (typeof window === 'undefined' || window.__jhAnalyticsInitialized) {
    return;
  }

  window.__jhAnalyticsInitialized = true;
  window.trackEvent = trackEvent;
  document.addEventListener('click', handleTrackedClicks);
  document.addEventListener('submit', handleTrackedSubmissions);
  handlePageView();
}

import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

type Metric = {
  name: string;
  value: number;
  delta: number;
  id: string;
};

function sendToAnalytics(metric: Metric) {
  // Push to dataLayer for GTM
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'web_vitals',
      event_category: 'Web Vitals',
      event_action: metric.name,
      event_value: Math.round(metric.name === 'CLS' ? metric.delta * 1000 : metric.delta),
      event_label: metric.id,
      non_interaction: true,
    });
  }
}

export function reportWebVitals() {
  onCLS(sendToAnalytics);
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
  onINP(sendToAnalytics);
}

// Conversion event helpers
export function trackDemoRequested(source?: string) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'demo_requested',
      source: source || 'unknown',
    });
  }
}

export function trackFormSubmitted(formName?: string) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'form_submitted',
      form_name: formName || 'unknown',
    });
  }
}

export function trackCtaClicked(label?: string, destination?: string) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'cta_clicked',
      cta_label: label || 'unknown',
      cta_destination: destination || 'unknown',
    });
  }
}

export function trackChatbotOpened() {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'chatbot_opened',
    });
  }
}

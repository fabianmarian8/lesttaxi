import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
  }
}

export const useAnalytics = () => {
  useEffect(() => {
    // Core Web Vitals tracking
    const trackWebVitals = async () => {
      try {
        const { onCLS, onINP, onFCP, onLCP, onTTFB } = await import('web-vitals');
        
        // Track Core Web Vitals
        onCLS((metric) => {
          window.gtag?.('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'CLS',
            value: Math.round(metric.value * 1000),
            custom_map: { metric_id: 'cls' }
          });
        });

        onINP((metric) => {
          window.gtag?.('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'INP',
            value: Math.round(metric.value),
            custom_map: { metric_id: 'inp' }
          });
        });

        onFCP((metric) => {
          window.gtag?.('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'FCP',
            value: Math.round(metric.value),
            custom_map: { metric_id: 'fcp' }
          });
        });

        onLCP((metric) => {
          window.gtag?.('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'LCP',
            value: Math.round(metric.value),
            custom_map: { metric_id: 'lcp' }
          });
        });

        onTTFB((metric) => {
          window.gtag?.('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'TTFB',
            value: Math.round(metric.value),
            custom_map: { metric_id: 'ttfb' }
          });
        });
      } catch (error) {
        console.error('Failed to load web-vitals:', error);
      }
    };

    // Track page view
    const trackPageView = () => {
      window.gtag?.('config', 'G-XXXXXXXXXX', {
        page_title: document.title,
        page_location: window.location.href,
      });
    };

    // Initialize tracking
    trackPageView();
    trackWebVitals();

    // Track errors
    const handleError = (event: ErrorEvent) => {
      window.gtag?.('event', 'exception', {
        description: event.error?.message || event.message,
        fatal: false,
      });
    };

    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);
};
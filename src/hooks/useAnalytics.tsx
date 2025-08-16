import { useEffect, useState } from 'react';

declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
  }
}

export const useAnalytics = () => {
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    // Track user interaction for conditional loading
    const handleUserInteraction = () => {
      if (!userInteracted) {
        setUserInteracted(true);
        // Load web-vitals only after user interaction
        loadWebVitals();
      }
    };

    // Core Web Vitals tracking - lazy loaded
    const loadWebVitals = async () => {
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

    // Track page view (immediate)
    const trackPageView = () => {
      window.gtag?.('config', 'G-9HLRQ0J9S3', {
        page_title: document.title,
        page_location: window.location.href,
      });
    };

    // Initialize immediate tracking
    trackPageView();

    // Add event listeners for user interaction
    const events = ['scroll', 'click', 'keydown', 'mousemove', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true, passive: true });
    });

    // Fallback: load after 3 seconds if no interaction
    const fallbackTimer = setTimeout(() => {
      if (!userInteracted) {
        handleUserInteraction();
      }
    }, 3000);

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
      clearTimeout(fallbackTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, []);
};
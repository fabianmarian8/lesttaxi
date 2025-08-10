import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object;
}

const BUSINESS_ID = "https://www.lesttaxi.com/#taxi";

const BUSINESS_ENTITY = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BUSINESS_ID,
  "name": "Taxi Lešť",
  "telephone": "+421 919 040 118",
  "url": "https://www.lesttaxi.com/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Zvolenská cesta 52",
    "addressLocality": "Lešť",
    "postalCode": "962 63",
    "addressCountry": "SK"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 48.349999, "longitude": 19.306345 },
  "image": [
    "https://www.lesttaxi.com/images/cover-1200x630.jpg",
    "https://www.lesttaxi.com/images/logo-512.png"
  ],
  "priceRange": "€€"
};

// Normalize URLs for canonical/og:url
const normalizeCanonical = (input: string): string => {
  try {
    const base = typeof window !== 'undefined' ? window.location.origin : 'https://www.lesttaxi.com';
    const u = new URL(input, base);
    // Force https
    u.protocol = 'https:';
    // Strip query/hash for canonical
    u.search = '';
    u.hash = '';
    // Remove trailing /index.html
    if (u.pathname.endsWith('/index.html')) {
      u.pathname = u.pathname.replace(/\/index\.html$/, '/');
    }
    // Remove trailing slash except root
    if (u.pathname.length > 1 && u.pathname.endsWith('/')) {
      u.pathname = u.pathname.slice(0, -1);
    }
    return u.toString();
  } catch {
    return input;
  }
};

export const useSEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage = "https://www.lesttaxi.com/src/assets/hero-image.webp",
  jsonLd 
}: SEOProps) => {
  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = 'en';
    
    // Update title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update keywords if provided
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }
    
    // Update canonical URL and hreflang if provided
    if (canonical) {
      const normalized = normalizeCanonical(canonical);
      const isHomepage = normalized === 'https://www.lesttaxi.com' || normalized === 'https://www.lesttaxi.com/';
      
      // Remove all existing canonical and hreflang links
      const existingLinks = document.querySelectorAll('link[rel="canonical"], link[rel="alternate"]');
      existingLinks.forEach(link => link.remove());

      // Add canonical link
      const canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', normalized);
      document.head.insertBefore(canonicalLink, document.head.firstChild);

      // Add og:url right after canonical
      let ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
      if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrl);
      }
      ogUrl.setAttribute('content', normalized);
      canonicalLink.insertAdjacentElement('afterend', ogUrl);

      // Add hreflang="en" for all pages
      const hreflangEn = document.createElement('link');
      hreflangEn.setAttribute('rel', 'alternate');
      hreflangEn.setAttribute('hreflang', 'en');
      hreflangEn.setAttribute('href', normalized);
      ogUrl.insertAdjacentElement('afterend', hreflangEn);

      // Add hreflang="x-default" only for homepage
      if (isHomepage) {
        const hreflangDefault = document.createElement('link');
        hreflangDefault.setAttribute('rel', 'alternate');
        hreflangDefault.setAttribute('hreflang', 'x-default');
        hreflangDefault.setAttribute('href', 'https://www.lesttaxi.com/');
        hreflangEn.insertAdjacentElement('afterend', hreflangDefault);
      }
    }
    
    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    };
    
    updateOGTag('og:title', title);
    updateOGTag('og:description', description);
    updateOGTag('og:image', ogImage);
    updateOGTag('og:type', 'website');
    updateOGTag('og:site_name', 'LEST TAXI');
    updateOGTag('og:locale', 'en_US');
    
    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);
    };
    
    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', title);
    updateTwitterTag('twitter:description', description);
    updateTwitterTag('twitter:image', ogImage);
    updateTwitterTag('twitter:site', '@lesttaxi');
    
    // Add central business entity on all pages
    // Remove existing business script if any
    const existingBusinessScript = document.querySelector('script[type="application/ld+json"]#business-jsonld');
    if (existingBusinessScript) {
      existingBusinessScript.remove();
    }
    
    const businessScript = document.createElement('script');
    businessScript.type = 'application/ld+json';
    businessScript.id = 'business-jsonld';
    businessScript.textContent = JSON.stringify(BUSINESS_ENTITY);
    // Insert after canonical link
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.insertAdjacentElement('afterend', businessScript);
    } else {
      document.head.appendChild(businessScript);
    }

    // Add JSON-LD structured data if provided
    if (jsonLd) {
      const existingScript = document.querySelector('script[type="application/ld+json"]#page-jsonld');
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-jsonld';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonical, ogImage, jsonLd]);
};
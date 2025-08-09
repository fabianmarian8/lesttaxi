import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: object;
}

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
    
    // Update canonical URL if provided (remove any existing first)
    if (canonical) {
      const normalized = normalizeCanonical(canonical);
      // Remove all existing canonical links to prevent duplicates (even if placed outside <head>)
      const existingCanonicals = document.querySelectorAll('link[rel="canonical"]');
      existingCanonicals.forEach(link => link.remove());

      // Add the new canonical link at the start of <head>
      const canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', normalized);
      document.head.insertBefore(canonicalLink, document.head.firstChild);

      // Ensure og:url is present and matches canonical, placed right after canonical when created
      let ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
      if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        ogUrl.setAttribute('content', normalized);
        canonicalLink.insertAdjacentElement('afterend', ogUrl);
      } else {
        ogUrl.setAttribute('content', normalized);
        // If og:url somehow ended up outside <head>, move it into <head>
        if (ogUrl.parentElement !== document.head) {
          document.head.appendChild(ogUrl);
        }
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
    updateOGTag('og:locale', 'sk_SK');
    if (canonical) { /* og:url handled with canonical insertion above */ }
    
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
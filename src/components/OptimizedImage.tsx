import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  responsive?: boolean;
  sizes?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  loading,
  responsive = false,
  sizes
}) => {
  // Determine loading strategy
  const imageLoading = loading || (priority ? "eager" : "lazy");
  
  // Only optimize images from assets folder
  const isAssetImage = src.includes('/assets/');
  
  // Mobile-first breakpoints for better performance
  const mobileBreakpoints = [240, 320, 480, 640];
  const desktopBreakpoints = [800, 1200, 1600];
  
  // Detect if likely mobile (simple heuristic) - safe for SSR
  const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : false;
  
  // Use mobile-optimized breakpoints for smaller screens
  const breakpoints = isMobile ? mobileBreakpoints : [...mobileBreakpoints, ...desktopBreakpoints];
  
  // Generate srcset for responsive images
  const generateSrcSet = (basePath: string, extension: string) => {
    if (!responsive || !width) return undefined;
    
    const maxSize = isMobile ? Math.min(width * 2, 960) : width * 2;
    return breakpoints
      .filter(bp => bp <= maxSize)
      .map(bp => `${basePath}-${bp}w.${extension} ${bp}w`)
      .join(', ');
  };
  
  // Auto-enable responsive for larger images
  const shouldUseResponsive = responsive || (width && width > 300);
  
  if (!isAssetImage) {
    // For non-asset images (like lovable-uploads), use regular img tag
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={imageLoading}
        decoding="async"
        {...(priority && { fetchpriority: "high" })}
      />
    );
  }
  
  // Get base filename without extension for asset images
  const baseSrc = src.replace(/\.[^/.]+$/, "");
  const extension = src.split('.').pop() || 'webp';
  
  // Create modern format versions
  const avifSrc = `${baseSrc}.avif`;
  const webpSrc = `${baseSrc}.webp`;
  
  // Generate srcsets for responsive images
  const avifSrcSet = shouldUseResponsive ? generateSrcSet(baseSrc, 'avif') : undefined;
  const webpSrcSet = shouldUseResponsive ? generateSrcSet(baseSrc, 'webp') : undefined;
  const fallbackSrcSet = shouldUseResponsive ? generateSrcSet(baseSrc, extension) : undefined;
  
  // Mobile-optimized sizes attribute
  const defaultSizes = shouldUseResponsive && !sizes 
    ? isMobile 
      ? "(max-width: 480px) 100vw, (max-width: 768px) 90vw, 50vw"
      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    : sizes;
  
  // For mobile, prefer WebP over AVIF for faster decoding
  if (isMobile) {
    return (
      <picture>
        {/* WebP format for mobile - faster decoding */}
        <source 
          srcSet={webpSrcSet || webpSrc} 
          type="image/webp"
          {...(shouldUseResponsive && { sizes: defaultSizes })}
        />
        
        {/* Fallback to original format */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          loading={imageLoading}
          decoding="async"
          {...(priority && { fetchpriority: "high" })}
          {...(fallbackSrcSet && { srcSet: fallbackSrcSet })}
          {...(shouldUseResponsive && { sizes: defaultSizes })}
        />
      </picture>
    );
  }
  
  // Desktop version with AVIF support
  return (
    <picture>
      {/* AVIF format for desktop - best compression */}
      <source 
        srcSet={avifSrcSet || avifSrc} 
        type="image/avif"
        {...(shouldUseResponsive && { sizes: defaultSizes })}
      />
      
      {/* WebP format for better compression */}
      <source 
        srcSet={webpSrcSet || webpSrc} 
        type="image/webp"
        {...(shouldUseResponsive && { sizes: defaultSizes })}
      />
      
      {/* Fallback to original format */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={imageLoading}
        decoding="async"
        {...(priority && { fetchpriority: "high" })}
        {...(fallbackSrcSet && { srcSet: fallbackSrcSet })}
        {...(shouldUseResponsive && { sizes: defaultSizes })}
      />
    </picture>
  );
};
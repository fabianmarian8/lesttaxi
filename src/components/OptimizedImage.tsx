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
  breakpoints?: number[];
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
  sizes,
  breakpoints = [320, 640, 800, 1200, 1600]
}) => {
  // Determine loading strategy
  const imageLoading = loading || (priority ? "eager" : "lazy");
  // Only optimize images from assets folder or lovable-uploads that have WebP versions
  const isAssetImage = src.includes('/assets/');
  const isLovableUpload = src.includes('/lovable-uploads/');
  
  // Generate srcset for responsive images
  const generateSrcSet = (basePath: string, extension: string) => {
    if (!responsive || !width) return undefined;
    
    return breakpoints
      .filter(bp => bp <= (width * 2)) // Don't generate sizes larger than 2x original
      .map(bp => `${basePath}-${bp}w.${extension} ${bp}w`)
      .join(', ');
  };
  
  // Auto-enable responsive for large images
  const shouldUseResponsive = responsive || (width && width > 400);
  
  if (!isAssetImage && !isLovableUpload) {
    // For external images, use regular img tag
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={imageLoading}
        decoding="async"
        {...(priority && { fetchPriority: "high" })}
      />
    );
  }
  
  // Get base filename without extension for optimized images
  const baseSrc = src.replace(/\.[^/.]+$/, "");
  const extension = src.split('.').pop() || 'webp';
  
  // For lovable-uploads, check if it's already WebP, otherwise create WebP version
  const webpSrc = isLovableUpload && extension === 'webp' ? src : `${baseSrc}.webp`;
  
  // Generate srcsets for responsive images
  const webpSrcSet = shouldUseResponsive ? generateSrcSet(baseSrc, 'webp') : undefined;
  const fallbackSrcSet = shouldUseResponsive ? generateSrcSet(baseSrc, extension) : undefined;
  
  // Default sizes attribute for responsive images
  const defaultSizes = shouldUseResponsive && !sizes 
    ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    : sizes;
  
  return (
    <picture>
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
        {...(priority && { fetchPriority: "high" })}
        {...(fallbackSrcSet && { srcSet: fallbackSrcSet })}
        {...(shouldUseResponsive && { sizes: defaultSizes })}
      />
    </picture>
  );
};
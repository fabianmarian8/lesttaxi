import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false
}) => {
  // Check if it's a lovable-uploads image that we can optimize
  const isLovableUpload = src.includes('/lovable-uploads/');
  
  if (isLovableUpload) {
    // Create WebP version by replacing .png with .webp
    const webpSrc = src.replace(/\.png$/, '.webp');
    
    return (
      <picture>
        {/* WebP format for better compression */}
        <source srcSet={webpSrc} type="image/webp" />
        
        {/* Fallback to original PNG format */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
        />
      </picture>
    );
  }
  
  // For other images (assets folder), check if WebP exists
  const isAssetImage = src.includes('/assets/');
  
  if (isAssetImage) {
    // Get base filename without extension for asset images
    const baseSrc = src.replace(/\.[^/.]+$/, "");
    const webpSrc = `${baseSrc}.webp`;
    
    return (
      <picture>
        {/* WebP format for better compression */}
        <source srcSet={webpSrc} type="image/webp" />
        
        {/* Fallback to original format */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
        />
      </picture>
    );
  }
  
  // For all other images, use regular img tag
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
};
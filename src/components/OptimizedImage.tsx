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
  // Optimize images from assets folder and lovable-uploads with WebP versions
  const isAssetImage = src.includes('/assets/');
  const isUploadImage = src.includes('/lovable-uploads/');
  
  if (!isAssetImage && !isUploadImage) {
    // For other images, use regular img tag
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
  }
  
  // Get base filename without extension for asset images
  const baseSrc = src.replace(/\.[^/.]+$/, "");
  
  // Create WebP version (only for assets that have them)
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
};
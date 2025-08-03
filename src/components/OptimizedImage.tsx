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
  // Check if WebP version exists for lovable-uploads
  const isLovableUpload = src.includes('/lovable-uploads/');
  const isAssetImage = src.includes('/assets/');
  
  if (isLovableUpload) {
    // For lovable-uploads, try WebP version
    const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    
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
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            if (img.src.includes('.webp')) {
              img.src = src;
            }
          }}
        />
      </picture>
    );
  }
  
  if (!isAssetImage) {
    // For other non-asset images, use regular img tag
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
        onError={(e) => {
          const img = e.target as HTMLImageElement;
          if (img.src.includes('.webp')) {
            img.src = src;
          }
        }}
      />
    </picture>
  );
};
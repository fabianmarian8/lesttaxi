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
  // Get base filename without extension
  const baseSrc = src.replace(/\.[^/.]+$/, "");
  const extension = src.split('.').pop()?.toLowerCase();
  
  // Create WebP and AVIF versions
  const webpSrc = `${baseSrc}.webp`;
  const avifSrc = `${baseSrc}.avif`;
  
  return (
    <picture>
      {/* AVIF format for modern browsers */}
      <source srcSet={avifSrc} type="image/avif" />
      
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
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const FrankoPizzaBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldHide, setShouldHide] = useState(false);
  const [showPermanentPartial, setShowPermanentPartial] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Mobile: 5 seconds, Desktop: 10 seconds
    const duration = isMobile ? 5000 : 10000;
    
    const hideTimer = setTimeout(() => {
      setShouldHide(true);
      // After hide animation, show permanent partial on mobile
      setTimeout(() => {
        if (isMobile) {
          setShowPermanentPartial(true);
          setShouldHide(false);
        } else {
          setIsVisible(false);
        }
      }, 800);
    }, duration);

    return () => clearTimeout(hideTimer);
  }, [isMobile]);

  const handleClick = () => {
    window.gtag?.('event', 'franko_pizza_banner_click');
    window.open('https://franko-pizza.sk/?18868_product_cat%5B0%5D=73', '_blank');
  };

  if (!isVisible) return null;

  // Get the appropriate styling based on current state
  const getClassName = () => {
    const baseSize = isMobile ? 'w-18 h-12' : 'w-30 h-21'; // 40% smaller on mobile
    const baseClasses = `fixed top-80 z-40 cursor-pointer object-cover rounded-lg transition-all duration-700 ease-out ${baseSize}`;
    
    if (showPermanentPartial) {
      // Permanently visible, 40% showing from right
      return `${baseClasses} right-[-60%] opacity-80 hover:right-[-50%] hover:opacity-100`;
    }
    
    if (shouldHide) {
      return `${baseClasses} right-4 transform translate-x-full rotate-[50deg] opacity-0`;
    }
    
    return `${baseClasses} right-4 transform translate-x-0 rotate-0 opacity-100 hover:scale-105 drop-shadow-2xl hover:drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]`;
  };

  return (
    <img
      src="/lovable-uploads/6b139532-be46-4e61-972c-ee47d106909b.png"
      alt="Franko Pizza delivery"
      className={getClassName()}
      onClick={handleClick}
      style={{
        animation: shouldHide || showPermanentPartial ? 'none' : 'slideInFromRight 0.6s ease-out',
        filter: shouldHide ? 'none' : 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))'
      }}
      onError={(e) => {
        console.log('Failed to load banner image');
        e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="56"><rect width="80" height="56" fill="%23f97316"/><text x="40" y="30" text-anchor="middle" fill="white" font-size="12">Pizza</text></svg>';
      }}
    />
  );
};

export default FrankoPizzaBanner;
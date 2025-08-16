import React, { useState, useEffect } from 'react';

import { X, Pizza } from 'lucide-react';

export const FrankoPizzaBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.gtag?.('event', 'franko_pizza_click');
    window.open('https://franko-pizza.sk/?18868_product_cat%5B0%5D=73', '_blank');
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    window.gtag?.('event', 'franko_pizza_dismissed');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 right-2 z-30 sm:right-4 sm:top-24">
      <div className="relative tactical-card glass-effect p-3 rounded-xl border border-military-gold/30 hover:border-military-gold/60 transition-all duration-300 floating group hover:shadow-tactical">
        <button
          onClick={handleClick}
          className="group relative transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-military-gold/50 rounded-lg"
          aria-label="Order pizza delivery from Franko Pizza - Fast delivery to your location"
          title="🍕 Franko Pizza Delivery - Order now!"
        >
          <img
            src="/lovable-uploads/c673d198-bf62-4c01-8827-484fb2d3df6e.webp"
            srcSet="/lovable-uploads/c673d198-bf62-4c01-8827-484fb2d3df6e-80.webp 80w, /lovable-uploads/c673d198-bf62-4c01-8827-484fb2d3df6e-160.webp 160w"
            sizes="80px"
            alt="Franko Pizza"
            width="80"
            height="80"
            loading="lazy"
            decoding="async"
            className="w-20 h-15 object-contain group-hover:brightness-110 transition-all duration-300"
          />
          
          {/* Pizza icon overlay */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-tactical-orange to-military-gold rounded-full flex items-center justify-center shadow-lg animate-pulse-gentle">
            <Pizza className="w-3 h-3 text-white" />
          </div>
          
          {/* Delivery available indicator */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-combat-green text-white text-xs px-2 py-0.5 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Delivery
          </div>
        </button>
        
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-6 h-6 bg-military-gray/80 hover:bg-military-gray text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 opacity-60 hover:opacity-100"
          aria-label="Close pizza delivery banner"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
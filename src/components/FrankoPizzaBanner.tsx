import React from 'react';
import { OptimizedImage } from '@/components/OptimizedImage';

export const FrankoPizzaBanner = () => {
  const handleClick = () => {
    window.gtag?.('event', 'franko_pizza_click');
    window.open('https://franko-pizza.sk/?18868_product_cat%5B0%5D=73', '_blank');
  };

  return (
    <div className="fixed top-24 right-4 z-30">
      <button
        onClick={handleClick}
        className="group relative overflow-hidden rounded-lg bg-military-900/90 border border-military-700/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Order from Franko Pizza"
      >
        <div className="p-2">
          <OptimizedImage
            src="/lovable-uploads/c673d198-bf62-4c01-8827-484fb2d3df6e.png"
            alt="Franko Pizza - Order Now"
            width={80}
            height={60}
            className="w-20 h-15 object-contain"
          />
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-military-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
    </div>
  );
};
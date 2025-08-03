import React from 'react';
import { OptimizedImage } from '@/components/OptimizedImage';

export const FrankoPizzaBanner = () => {
  const handleClick = () => {
    window.gtag?.('event', 'franko_pizza_click');
    window.open('https://franko-pizza.sk/?18868_product_cat%5B0%5D=73', '_blank');
  };

  return (
    <div className="fixed top-88 right-2 z-30 sm:top-52 sm:right-4">
      <button
        onClick={handleClick}
        className="group transition-all duration-300 hover:scale-105"
        aria-label="Order from Franko Pizza"
      >
        <OptimizedImage
          src="/lovable-uploads/c673d198-bf62-4c01-8827-484fb2d3df6e.png"
          alt="Franko Pizza - Order Now"
          width={80}
          height={60}
          className="w-20 h-15 object-contain"
        />
      </button>
    </div>
  );
};
import { useState, useEffect } from 'react';

const FrankoPizzaBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    // After 5 seconds, start hiding animation
    const hideTimer = setTimeout(() => {
      setShouldHide(true);
      // Completely remove after animation
      setTimeout(() => {
        setIsVisible(false);
      }, 800);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, []);

  const handleClick = () => {
    window.gtag?.('event', 'franko_pizza_banner_click');
    window.open('https://franko-pizza.sk/?18868_product_cat%5B0%5D=73', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-24 right-4 z-40 cursor-pointer transition-all duration-700 ease-out bg-white rounded-xl shadow-2xl p-2 border-2 border-orange-500 ${
        shouldHide 
          ? 'transform translate-x-full rotate-45 opacity-0' 
          : 'transform translate-x-0 rotate-0 opacity-100 hover:scale-105'
      }`}
      onClick={handleClick}
      style={{
        animation: shouldHide ? 'none' : 'slideInFromRight 0.6s ease-out'
      }}
    >
      <div className="relative">
        <img
          src="/lovable-uploads/6b139532-be46-4e61-972c-ee47d106909b.png"
          alt="Franko Pizza delivery"
          className="w-20 h-14 object-cover rounded-lg"
          onError={(e) => {
            console.log('Failed to load banner image');
            e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="56"><rect width="80" height="56" fill="%23f97316"/><text x="40" y="30" text-anchor="middle" fill="white" font-size="12">Pizza</text></svg>';
          }}
        />
      </div>
    </div>
  );
};

export default FrankoPizzaBanner;
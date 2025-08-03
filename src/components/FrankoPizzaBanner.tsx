import { useState, useEffect } from 'react';

const FrankoPizzaBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    // Show banner after component mounts
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Hide banner after 3 seconds
    const hideTimer = setTimeout(() => {
      setIsHiding(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 600); // Wait for animation to complete
    }, 3500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleClick = () => {
    window.gtag?.('event', 'franko_pizza_banner_click');
    window.open('https://franko-pizza.sk/?18868_product_cat%5B0%5D=73', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 cursor-pointer transition-all duration-500 ${
        isHiding ? 'franko-banner-hide' : 'franko-banner-show'
      }`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      aria-label="Franko Pizza delivery banner - click to order"
    >
      <div className="relative group">
        <img
          src="/lovable-uploads/87d275c5-0f04-4fdc-893b-a932d305c7f0.png"
          alt="Franko Pizza delivery service"
          className="w-16 h-12 sm:w-20 sm:h-15 object-cover rounded-lg shadow-2xl group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg group-hover:from-black/30 transition-all duration-300" />
      </div>
    </div>
  );
};

export default FrankoPizzaBanner;
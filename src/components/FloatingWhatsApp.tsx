import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingWhatsApp = () => {
  const [showBounce, setShowBounce] = useState(false);

  useEffect(() => {
    // Trigger bounce animation and sound after 2 seconds
    const timer = setTimeout(() => {
      setShowBounce(true);
      
      // Play soft pop sound
      const audio = new Audio('/notification-pop.mp3');
      audio.volume = 0.3;
      audio.play().catch(() => {
        // Ignore if audio fails to play (user interaction required)
      });
      
      // Remove bounce class after animation completes
      setTimeout(() => setShowBounce(false), 600);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <Button
          variant="taxi"
          size="lg"
          className={`rounded-full w-16 h-16 shadow-2xl hover:scale-110 hover:shadow-[0_0_20px_rgba(255,212,56,0.6)] transition-all duration-300 ${
            showBounce ? 'animate-bounce-gentle' : ''
          }`}
          onClick={() => {
            window.gtag?.('event', 'whatsapp_click');
            window.open('https://wa.me/421919040118', '_blank');
          }}
          aria-label="Contact us on WhatsApp"
        >
          <Car className="h-8 w-8" />
        </Button>
        <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse-gentle"></div>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
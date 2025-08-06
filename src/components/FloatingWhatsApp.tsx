import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingWhatsApp = () => {
  const [showBounce, setShowBounce] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Create notification sound using Web Audio API
  const playNotificationSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
      gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.2);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.2);
      
      console.log('Notification sound played successfully');
    } catch (error) {
      console.log('Audio not supported or failed:', error);
    }
  };

  useEffect(() => {
    // Trigger bounce animation after 2 seconds
    const timer = setTimeout(() => {
      setShowBounce(true);
      
      // Remove bounce class after animation completes
      setTimeout(() => setShowBounce(false), 600);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    if (!hasInteracted) {
      playNotificationSound();
      setHasInteracted(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <Button
          variant="taxi"
          size="lg"
          className={`rounded-full w-16 h-16 shadow-2xl hover:scale-110 hover:shadow-[0_0_20px_rgba(255,212,56,0.6)] transition-all duration-300 ${
            showBounce ? 'animate-bounce-gentle' : ''
          }`}
          onMouseEnter={handleMouseEnter}
          onClick={() => {
            playNotificationSound();
            window.gtag?.('event', 'whatsapp_click');
            window.open('https://wa.me/421919040118', '_blank');
          }}
          aria-label="Contact us on WhatsApp"
        >
          <Car className="h-8 w-8" />
        </Button>
        <div className="absolute bottom-1 left-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse-gentle"></div>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
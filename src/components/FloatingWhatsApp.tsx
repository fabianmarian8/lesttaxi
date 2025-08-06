import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <Button
          variant="taxi"
          size="lg"
          className="rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-transform"
          onClick={() => {
            window.gtag?.('event', 'whatsapp_click');
            window.open('https://wa.me/421919040118', '_blank');
          }}
          aria-label="Contact us on WhatsApp"
        >
          <Car className="h-8 w-8" />
        </Button>
        <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
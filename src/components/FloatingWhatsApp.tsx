import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="whatsapp"
        size="lg"
        className="rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-transform"
        onClick={() => window.open('https://wa.me/421919040118', '_blank')}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;
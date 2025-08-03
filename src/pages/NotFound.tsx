import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { OptimizedImage } from "@/components/OptimizedImage";

const NotFound = () => {
  const location = useLocation();

  useSEO({
    title: "404 - Page Not Found | LEST TAXI",
    description: "Sorry, the page you are looking for does not exist. Return to LEST TAXI homepage for military transport services.",
    canonical: "https://lesttaxi.com/404"
  });

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-[hsl(var(--combat-green))] opacity-90" />
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl mx-auto">
          {/* Logo */}
          <OptimizedImage 
            src="/lovable-uploads/2ad8f836-e1ce-40fc-9862-88769a6f124f.png"
            alt="LEST TAXI Logo" 
            width={96}
            height={96}
            className="h-24 w-24 mx-auto mb-8 rounded-full bg-white/10 p-2 backdrop-blur-sm border border-white/30"
          />
          
          <h1 className="text-8xl font-black mb-6 combat-text text-[hsl(var(--military-gold))]">404</h1>
          <h2 className="text-3xl font-bold mb-4 text-foreground">Page Not Found</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Sorry, the page you are looking for does not exist or has been moved. 
            Return to our main services below or contact us directly.
          </p>
          
          {/* Navigation Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Link to="/">
              <Button className="tactical-card w-full p-6 flex flex-col items-center gap-3 h-auto">
                <Home className="h-8 w-8 text-[hsl(var(--military-gold))]" />
                <span className="font-semibold">Home</span>
              </Button>
            </Link>
            
            <Link to="/#booking-section">
              <Button className="tactical-card w-full p-6 flex flex-col items-center gap-3 h-auto">
                <CalendarCheck className="h-8 w-8 text-[hsl(var(--combat-green))]" />
                <span className="font-semibold">Booking</span>
              </Button>
            </Link>
            
            <a href="tel:+421919040118">
              <Button className="tactical-card w-full p-6 flex flex-col items-center gap-3 h-auto">
                <Phone className="h-8 w-8 text-[hsl(var(--tactical-orange))]" />
                <span className="font-semibold">Call Now</span>
              </Button>
            </a>
            
            <Link to="/#contact-section">
              <Button className="tactical-card w-full p-6 flex flex-col items-center gap-3 h-auto">
                <MessageCircle className="h-8 w-8 text-[hsl(var(--whatsapp-green))]" />
                <span className="font-semibold">Contact</span>
              </Button>
            </Link>
          </div>
          
          {/* Quick Links */}
          <div className="text-sm text-muted-foreground">
            <p className="mb-4">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/airport-transfer" className="hover:text-[hsl(var(--military-gold))] underline">
                Airport Transfer
              </Link>
              <Link to="/price-list" className="hover:text-[hsl(var(--military-gold))] underline">
                Price List
              </Link>
              <Link to="/fleet" className="hover:text-[hsl(var(--military-gold))] underline">
                Fleet
              </Link>
              <Link to="/faq" className="hover:text-[hsl(var(--military-gold))] underline">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

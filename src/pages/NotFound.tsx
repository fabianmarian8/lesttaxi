import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Phone, MessageCircle, Car } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    // Update page title for SEO
    document.title = "404 - Page Not Found | LEST TAXI";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content', 
      'Sorry, the page you are looking for does not exist. Return to LEST TAXI homepage for military transport services.'
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
          <img 
            src="/lovable-uploads/08bb4537-9151-4684-bf39-abc2900ea374.png" 
            alt="LEST TAXI Logo" 
            className="h-24 w-24 mx-auto mb-8 rounded-full bg-white/10 p-2 backdrop-blur-sm border border-white/30"
          />
          
          <h1 className="text-8xl font-black mb-6 combat-text text-[hsl(var(--military-gold))]">404</h1>
          <h2 className="text-3xl font-bold mb-4 text-foreground">Stránka nebola nájdená</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Ľutujeme, stránka ktorú hľadáte neexistuje alebo bola premiestnená.
          </p>
          
          {/* Navigation Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Link to="/">
              <Button className="tactical-card w-full p-6 flex flex-col items-center gap-3 h-auto">
                <Home className="h-8 w-8 text-[hsl(var(--military-gold))]" />
                <span className="font-semibold">Domov</span>
              </Button>
            </Link>
            
            <Link to="/base-taxi">
              <Button className="tactical-card w-full p-6 flex flex-col items-center gap-3 h-auto">
                <Car className="h-8 w-8 text-[hsl(var(--combat-green))]" />
                <span className="font-semibold">Base Taxi</span>
              </Button>
            </Link>
            
            <a href="tel:+421919040118">
              <Button className="tactical-card w-full p-6 flex flex-col items-center gap-3 h-auto">
                <Phone className="h-8 w-8 text-[hsl(var(--tactical-orange))]" />
                <span className="font-semibold">Zavolať</span>
              </Button>
            </a>
            
            <a href="https://wa.me/421919040118" target="_blank" rel="noopener noreferrer">
              <Button className="tactical-card w-full p-6 flex flex-col items-center gap-3 h-auto">
                <MessageCircle className="h-8 w-8 text-[hsl(var(--whatsapp-green))]" />
                <span className="font-semibold">WhatsApp</span>
              </Button>
            </a>
          </div>
          
          {/* Quick Links */}
          <div className="text-sm text-muted-foreground">
            <p className="mb-4">Populárne stránky:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/airport-transfer" className="hover:text-[hsl(var(--military-gold))] underline">
                Airport Transfer
              </Link>
              <Link to="/price-list" className="hover:text-[hsl(var(--military-gold))] underline">
                Cenník
              </Link>
              <Link to="/fleet" className="hover:text-[hsl(var(--military-gold))] underline">
                Vozový park
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

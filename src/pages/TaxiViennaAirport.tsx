import { Button } from "@/components/ui/button";
import { Plane, Phone, MessageCircle, Clock, Car, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useSEO } from "@/hooks/useSEO";
import { OptimizedImage } from "@/components/OptimizedImage";

const TaxiViennaAirport = () => {
  useSEO({
    title: "Taxi letisko Viedeň – prémiový transfer z Lešť",
    description: "Professional taxi service from Lešť Military Base to Vienna International Airport (VIE). Premium transfers, reliable service, military rates. WhatsApp +421 919 040 118",
    keywords: "taxi Vienna airport, Lešť to Vienna VIE, airport transfer Austria, military taxi Vienna, premium transfers",
    canonical: "https://lesttaxi.com/taxi-vienna-airport",
  });

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-effect backdrop-blur-xl py-4 px-6 relative z-10 border-b border-white/20">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <OptimizedImage 
              src="/lovable-uploads/482d3699-3421-4177-9fdd-3c3efbd47138.png" 
              alt="LEST TAXI Professional Military Transport Service" 
              className="h-16 w-16 rounded-full bg-white/10 p-2"
              width={64}
              height={64}
            />
          </Link>
          <Link to="/" className="text-[hsl(var(--military-gold))] hover:text-[hsl(var(--elite-gold))] transition-colors">
            ← Back to Home
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl lg:text-6xl font-black mb-6 combat-text">
            Premium Taxi Service to Vienna International Airport
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Professional transport from Lešť Military Base to Vienna International Airport (VIE) with premium service and punctual arrivals.
          </p>
          
          <div className="flex gap-4 flex-wrap mb-12">
            <a 
              href="https://wa.me/421919040118"
              target="_blank"
              rel="noopener noreferrer"
              className="tactical-card px-8 py-4 text-lg font-semibold bg-[hsl(var(--whatsapp-green))] text-white hover:scale-110 transition-all duration-300"
            >
              <MessageCircle className="h-6 w-6 mr-3 inline" />
              Book Premium Transfer
            </a>
            <a 
              href="tel:+421919040118"
              className="tactical-card px-8 py-4 text-lg font-semibold bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] text-black hover:scale-110 transition-all duration-300"
            >
              <Phone className="h-6 w-6 mr-3 inline" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--combat-green))]/10 to-[hsl(var(--military-gold))]/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center combat-text">
            Vienna Airport Premium Transfer Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="tactical-card text-center p-6">
              <Shield className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--military-gold))]" />
              <h3 className="text-xl font-bold mb-4">Premium Service</h3>
              <p className="text-muted-foreground">High-end vehicles and exceptional service standards for your Vienna Airport transfer.</p>
            </div>
            
            <div className="tactical-card text-center p-6">
              <Clock className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--military-gold))]" />
              <h3 className="text-xl font-bold mb-4">Punctual Timing</h3>
              <p className="text-muted-foreground">Precise departure times calculated for optimal arrival at Vienna International Airport.</p>
            </div>
            
            <div className="tactical-card text-center p-6">
              <Car className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--military-gold))]" />
              <h3 className="text-xl font-bold mb-4">Comfort & Style</h3>
              <p className="text-muted-foreground">Modern, comfortable vehicles perfect for the longer journey to Vienna.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center combat-text">
            Vienna Airport Transfer FAQ
          </h2>
          
          <div className="space-y-6">
            <div className="tactical-card p-6">
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--military-gold))]">
                How long is the journey from Lešť Base to Vienna Airport?
              </h3>
              <p className="text-muted-foreground">
                The journey takes approximately 4-4.5 hours including border crossings. We plan departure times to ensure comfortable arrival before your flight.
              </p>
            </div>
            
            <div className="tactical-card p-6">
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--military-gold))]">
                Which terminals does Vienna Airport have?
              </h3>
              <p className="text-muted-foreground">
                Vienna International Airport has multiple terminals. We deliver you directly to your specific terminal and can assist with finding your check-in counter.
              </p>
            </div>
            
            <div className="tactical-card p-6">
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--military-gold))]">
                When should I book pickup for Vienna flights?
              </h3>
              <p className="text-muted-foreground">
                We recommend booking pickup 5.5-6 hours before international flights to account for the longer travel time and allow comfortable check-in time.
              </p>
            </div>
            
            <div className="tactical-card p-6">
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--military-gold))]">
                Do you provide return transfers from Vienna Airport?
              </h3>
              <p className="text-muted-foreground">
                Absolutely! We offer return transport from Vienna Airport to Lešť Base. Please provide your arrival details when booking.
              </p>
            </div>
            
            <div className="tactical-card p-6">
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--military-gold))]">
                What makes Vienna Airport transfers premium service?
              </h3>
              <p className="text-muted-foreground">
                Our Vienna transfers include premium vehicles, experienced drivers familiar with international travel requirements, and extra comfort for the longer journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--combat-green))]/20 to-[hsl(var(--military-gold))]/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 combat-text">
            Ready for Your Vienna Airport Premium Transfer?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience our premium service to Vienna International Airport
          </p>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://wa.me/421919040118"
              target="_blank"
              rel="noopener noreferrer"
              className="tactical-card px-8 py-4 text-lg font-semibold bg-[hsl(var(--whatsapp-green))] text-white hover:scale-110 transition-all duration-300"
            >
              <MessageCircle className="h-6 w-6 mr-3 inline" />
              WhatsApp
            </a>
            <a 
              href="tel:+421919040118"
              className="tactical-card px-8 py-4 text-lg font-semibold bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] text-black hover:scale-110 transition-all duration-300"
            >
              <Phone className="h-6 w-6 mr-3 inline" />
              Call +421 919 040 118
            </a>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
};

export default TaxiViennaAirport;
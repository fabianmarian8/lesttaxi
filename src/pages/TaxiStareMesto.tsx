import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle, Clock, Car, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useSEO } from "@/hooks/useSEO";
import { OptimizedImage } from "@/components/OptimizedImage";

const TaxiStareMesto = () => {
  useSEO({
    title: "Taxi Staré Mesto Bratislava - Historic Center Transport from Lešť",
    description: "Professional taxi service from Lešť Military Base to Bratislava's historic Old Town (Staré Mesto). Historic center tours, shopping, dining. WhatsApp +421 919 040 118",
    keywords: "taxi Staré Mesto, Bratislava Old Town taxi, historic center transport, military taxi Slovakia, Lešť to Bratislava center",
    canonical: "https://lesttaxi.com/taxi-stare-mesto",
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
            Taxi to Bratislava Staré Mesto - Historic Old Town Transport
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover Bratislava's charming historic center with our professional transport service from Lešť Military Base.
          </p>
          
          <div className="flex gap-4 flex-wrap mb-12">
            <a 
              href="https://wa.me/421919040118"
              target="_blank"
              rel="noopener noreferrer"
              className="tactical-card px-8 py-4 text-lg font-semibold bg-[hsl(var(--whatsapp-green))] text-white hover:scale-110 transition-all duration-300"
            >
              <MessageCircle className="h-6 w-6 mr-3 inline" />
              Book Historic Tour
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

      {/* Staré Mesto Highlights */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--combat-green))]/10 to-[hsl(var(--military-gold))]/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center combat-text">
            Explore Bratislava's Historic Staré Mesto
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="tactical-card text-center p-6">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--military-gold))]" />
              <h3 className="text-xl font-bold mb-4">Bratislava Castle</h3>
              <p className="text-muted-foreground">Visit the iconic castle overlooking the Danube River with panoramic city views.</p>
            </div>
            
            <div className="tactical-card text-center p-6">
              <Shield className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--military-gold))]" />
              <h3 className="text-xl font-bold mb-4">Historic Streets</h3>
              <p className="text-muted-foreground">Wander through medieval cobblestone streets and admire baroque architecture.</p>
            </div>
            
            <div className="tactical-card text-center p-6">
              <Car className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--military-gold))]" />
              <h3 className="text-xl font-bold mb-4">Shopping & Dining</h3>
              <p className="text-muted-foreground">Enjoy traditional Slovak cuisine and browse unique shops in the old town.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center combat-text">
            Staré Mesto Transport FAQ
          </h2>
          
          <div className="space-y-6">
            <div className="tactical-card p-6">
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--military-gold))]">
                Where exactly is Staré Mesto in Bratislava?
              </h3>
              <p className="text-muted-foreground">
                Staré Mesto is Bratislava's historic Old Town, located in the heart of the city near the Danube River. It includes Bratislava Castle, St. Martin's Cathedral, and the main pedestrian zone.
              </p>
            </div>
            
            <div className="tactical-card p-6">
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--military-gold))]">
                Can you recommend the best time to visit Staré Mesto?
              </h3>
              <p className="text-muted-foreground">
                The old town is beautiful year-round, but spring and summer offer the best weather for walking. December brings magical Christmas markets to the historic squares.
              </p>
            </div>
            
            <div className="tactical-card p-6">
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--military-gold))]">
                Where do you drop off passengers in Staré Mesto?
              </h3>
              <p className="text-muted-foreground">
                We can drop you off at convenient locations near the pedestrian zone, such as near Hviezdoslav Square or close to Bratislava Castle, depending on your preference.
              </p>
            </div>
            
            <div className="tactical-card p-6">
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--military-gold))]">
                Do you offer guided tours of Staré Mesto?
              </h3>
              <p className="text-muted-foreground">
                While we provide transportation, we can recommend local tour guides and suggest the best walking routes through the historic center upon request.
              </p>
            </div>
            
            <div className="tactical-card p-6">
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--military-gold))]">
                Is parking difficult in Staré Mesto?
              </h3>
              <p className="text-muted-foreground">
                The historic center has limited parking and is mostly pedestrian-only. Our taxi service eliminates parking concerns, dropping you off at convenient locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--combat-green))]/20 to-[hsl(var(--military-gold))]/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 combat-text">
            Ready to Explore Bratislava's Historic Heart?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book your transport to Staré Mesto and discover centuries of Slovak history
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

export default TaxiStareMesto;
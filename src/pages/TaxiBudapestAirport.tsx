import { Button } from "@/components/ui/button";
import { Plane, Phone, MessageCircle, Clock, Car, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useSEO } from "@/hooks/useSEO";
import { OptimizedImage } from "@/components/OptimizedImage";

const TaxiBudapestAirport = () => {
  useSEO({
    title: "Taxi Budapest Airport - Direct Transfer from Lešť Military Base",
    description: "Professional taxi service from Lešť Military Base to Budapest Airport (BUD). Flight-timed transfers, reliable service, military rates. WhatsApp +421 919 040 118",
    keywords: "taxi Budapest airport, Lešť to Budapest BUD, airport transfer Hungary, military taxi Budapest, flight transfers",
    canonical: "https://lesttaxi.com/taxi-budapest-airport",
  });

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-effect backdrop-blur-xl py-4 px-6 relative z-10 border-b border-white/20">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <OptimizedImage 
              src="/src/assets/logo-main.webp" 
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
            Professional Taxi to Budapest Airport from Lešť Military Base
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Reliable airport transfers to Budapest Ferenc Liszt International Airport (BUD) with flight-timed departures and professional service.
          </p>
          
          <div className="flex gap-4 flex-wrap mb-12">
            <a 
              href="https://wa.me/421919040118"
              target="_blank"
              rel="noopener noreferrer"
              className="tactical-card px-8 py-4 text-lg font-semibold bg-[hsl(var(--whatsapp-green))] text-white hover:scale-110 transition-all duration-300"
            >
              <MessageCircle className="h-6 w-6 mr-3 inline" />
              Book Airport Transfer
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

      {/* Service Features */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--combat-green))]/10 to-[hsl(var(--military-gold))]/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center combat-text">
            Budapest Airport Transfer Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="tactical-card text-center p-6">
              <Clock className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--military-gold))]" />
              <h3 className="text-xl font-bold mb-4">Flight-Timed Service</h3>
              <p className="text-muted-foreground">Departure times calculated based on your flight schedule for optimal arrival timing.</p>
            </div>
            
            <div className="tactical-card text-center p-6">
              <Plane className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--military-gold))]" />
              <h3 className="text-xl font-bold mb-4">All Terminals</h3>
              <p className="text-muted-foreground">Direct transport to Terminal 2A, 2B, and all areas of Budapest Airport.</p>
            </div>
            
            <div className="tactical-card text-center p-6">
              <Car className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--military-gold))]" />
              <h3 className="text-xl font-bold mb-4">Luggage Assistance</h3>
              <p className="text-muted-foreground">Help with luggage and comfortable vehicles suitable for military travel gear.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center combat-text">
            Budapest Airport Transfer FAQ
          </h2>
          
          <div className="space-y-6">
            <div className="tactical-card p-6">
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--military-gold))]">
                How long does the journey take from Lešť Base to Budapest Airport?
              </h3>
              <p className="text-muted-foreground">
                The journey typically takes 3-3.5 hours depending on traffic conditions and border crossing times. We factor this into your departure time.
              </p>
            </div>
            
            <div className="tactical-card p-6">
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--military-gold))]">
                Do you handle passport and border procedures?
              </h3>
              <p className="text-muted-foreground">
                We ensure smooth border crossing between Slovakia and Hungary. Please have your passport and any required documents ready.
              </p>
            </div>
            
            <div className="tactical-card p-6">
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--military-gold))]">
                What time should I book pickup for my flight?
              </h3>
              <p className="text-muted-foreground">
                We recommend booking pickup 4.5-5 hours before international flights and 4 hours before domestic flights to account for travel time and check-in.
              </p>
            </div>
            
            <div className="tactical-card p-6">
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--military-gold))]">
                Can you pick up from Budapest Airport for return trips?
              </h3>
              <p className="text-muted-foreground">
                Yes! We provide return transport from Budapest Airport to Lešť Base. Please book in advance and provide your flight details.
              </p>
            </div>
            
            <div className="tactical-card p-6">
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--military-gold))]">
                Are there any additional fees for Budapest Airport transfers?
              </h3>
              <p className="text-muted-foreground">
                Our rates are fixed and include border crossing. No hidden fees or additional charges for Budapest Airport transfers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--combat-green))]/20 to-[hsl(var(--military-gold))]/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 combat-text">
            Ready for Your Budapest Airport Transfer?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book your professional airport transfer and travel with confidence
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

export default TaxiBudapestAirport;
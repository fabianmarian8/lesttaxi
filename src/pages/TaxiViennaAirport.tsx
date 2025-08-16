import { Button } from "@/components/ui/button";
import { Plane, Phone, MessageCircle, Clock, Car, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useSEO } from "@/hooks/useSEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import { BreadcrumbNavigation } from "@/components/BreadcrumbNavigation";

const TaxiViennaAirport = () => {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "Taxi Lešť → Vienna Airport (VIE)",
    description: "Premium taxi transfer from Lešť Military Base to Vienna International Airport (VIE). English-speaking drivers, precise timing.",
    provider: { "@type": "LocalBusiness", name: "LEST TAXI", telephone: "+421919040118", url: "https://www.lesttaxi.com" },
    areaServed: [ { "@type": "Place", name: "Lešť Military Base, Slovakia" }, { "@type": "Place", name: "Vienna International Airport, Austria" } ],
    offers: { "@type": "Offer", price: "290", priceCurrency: "EUR", description: "Lešť → Vienna Airport fixed fare" }
  } as const;

  useSEO({
    title: "Taxi Lešť → Vienna Airport (non-stop, fixné ceny)",
    description: "Prémiový transfer Lešť – Vienna (VIE). Anglicky hovoriaci vodiči, načasovanie k letu, pevné ceny. WhatsApp +421 919 040 118.",
    keywords: "taxi Vienna airport, Lešť Vienna transfer, VIE transfer, military taxi Austria",
    canonical: "https://www.lesttaxi.com/taxi-vienna-airport",
    jsonLd: serviceJsonLd,
  });

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <BreadcrumbNavigation />
      
      {/* Header */}
      <header className="glass-effect backdrop-blur-xl py-4 px-6 relative z-10 border-b border-white/20">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <OptimizedImage 
              src="/lovable-uploads/08bb4537-9151-4684-bf39-abc2900ea374.webp" 
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
            Taxi Lešť → Vienna Airport (VIE) – prémiový transfer
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

      {/* Unique Route Details */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-4xl">
          <article className="tactical-card p-6">
            <h2 className="text-2xl font-bold mb-4 combat-text">Lešť → Vienna Airport: Route details</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cesta na Vienna International Airport (VIE) trvá zvyčajne 4–4.5 hodiny. Pri diaľkových letoch odporúčame odchod 5.5–6 hodín pred odletom; zahŕňa to komfortnú rezervu na check‑in a bezpečnostné kontroly. Poznáme terminály aj dopravnú situáciu na okruhoch okolo Viedne a zvolíme trasu s najlepším časom dojazdu. Pri návrate z VIE sledujeme číslo letu a prispôsobíme čas vyzdvihnutia. Na požiadanie zabezpečíme väčšie vozidlá pre batožinu či tímové vybavenie.
            </p>
          </article>
        </div>
      </section>

      {/* Internal links for better navigation */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-4xl">
          <nav className="grid gap-3 md:grid-cols-2">
            <a href="/price-list" className="tactical-card p-4 hover:scale-[1.01] transition">
              <span className="font-semibold">Taxi Lešť ↔ Bratislava – cenník</span>
            </a>
            <a href="/airport-transfer" className="tactical-card p-4 hover:scale-[1.01] transition">
              <span className="font-semibold">Letiskové transfery v SR – prehľad služieb</span>
            </a>
            <a href="/taxi-budapest-airport" className="tactical-card p-4 hover:scale-[1.01] transition">
              <span className="font-semibold">Taxi Lešť ↔ Budapest (BUD) – informácie</span>
            </a>
            <a href="/taxi-banska-bystrica" className="tactical-card p-4 hover:scale-[1.01] transition">
              <span className="font-semibold">Banská Bystrica – mestská doprava z Lešť</span>
            </a>
          </nav>
        </div>
      </section>

      {/* Short route-specific reviews */}
      <section className="py-8 px-6 bg-gradient-to-r from-[hsl(var(--combat-green))]/10 to-[hsl(var(--military-gold))]/5">
        <div className="container mx-auto max-w-5xl grid gap-6 md:grid-cols-3">
          <div className="tactical-card p-6">
            <p className="italic">“Comfortable long ride, precise terminal drop‑off at VIE. Great planning for morning flight.”</p>
            <p className="mt-3 text-sm text-muted-foreground">– Daniel, US Army</p>
          </div>
          <div className="tactical-card p-6">
            <p className="italic">“WhatsApp updates on the way, clean vehicle, courteous driver. Would book again.”</p>
            <p className="mt-3 text-sm text-muted-foreground">– Linda, Civilian staff</p>
          </div>
          <div className="tactical-card p-6">
            <p className="italic">“Plenty of trunk space for gear. Smooth border crossing and coffee stop when needed.”</p>
            <p className="mt-3 text-sm text-muted-foreground">– Mark, USAF</p>
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
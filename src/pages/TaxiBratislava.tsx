import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageCircle, Clock, Car, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useSEO } from "@/hooks/useSEO";
import { OptimizedImage } from "@/components/OptimizedImage";

const TaxiBratislava = () => {
  // BreadcrumbList structured data
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.lesttaxi.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Taxi Services",
        "item": "https://www.lesttaxi.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Bratislava Taxi",
        "item": "https://www.lesttaxi.com/taxi-bratislava"
      }
    ]
  };

  // Service schema for Bratislava route
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Taxi Service to Bratislava",
    "description": "Professional taxi transport from Lešť Military Base to Bratislava with fixed rates",
    "provider": {
      "@type": "LocalBusiness",
      "name": "LEST TAXI",
      "telephone": "+421919040118",
      "url": "https://www.lesttaxi.com"
    },
    "serviceType": "Taxi Transport",
    "offers": {
      "@type": "Offer",
      "price": "220",
      "priceCurrency": "EUR",
      "description": "Fixed rate taxi service from Lešť Base to Bratislava - 235km, 2.5 hours"
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Lešť Military Base, Slovakia"
      },
      {
        "@type": "Place",
        "name": "Bratislava, Slovakia"
      }
    ]
  };

  useSEO({
    title: "Taxi Lešť → Bratislava (non-stop, fixné ceny)",
    description: "Rýchla doprava z Lešť Base do Bratislavy. 24/7, fixné ceny, anglicky hovoriaci vodiči. WhatsApp +421 919 040 118.",
    keywords: "taxi Bratislava, Lešť Bratislava taxi, military taxi Slovakia",
    canonical: "https://www.lesttaxi.com/taxi-bratislava",
    jsonLd: serviceJsonLd
  });

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      
      <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-effect backdrop-blur-xl py-4 px-6 relative z-10 border-b border-white/20">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/logo-144.webp" 
              alt="LEST TAXI Professional Military Transport Service"
              width={144}
              height={144}
              loading="eager"
              decoding="async"
              className="h-16 w-16 rounded-full bg-white/10 p-2"
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
            Taxi Lešť → Bratislava – non-stop, fixné ceny
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Safe, reliable transportation from Lešť Military Base to Bratislava with fixed rates and professional service.
          </p>
          
          <div className="flex gap-4 flex-wrap mb-12">
            <a 
              href="https://wa.me/421919040118"
              target="_blank"
              rel="noopener noreferrer"
              className="tactical-card px-8 py-4 text-lg font-semibold bg-[hsl(var(--whatsapp-green))] text-white hover:scale-110 transition-all duration-300"
            >
              <MessageCircle className="h-6 w-6 mr-3 inline" />
              Book on WhatsApp
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

      {/* Service Details */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--combat-green))]/10 to-[hsl(var(--military-gold))]/5 [content-visibility:auto] [contain:layout_paint_style]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center combat-text">
            Why Choose Our Bratislava Taxi Service?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="tactical-card text-center p-6">
              <Clock className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--military-gold))]" />
              <h3 className="text-xl font-bold mb-4">24/7 Availability</h3>
              <p className="text-muted-foreground">Round-the-clock service for all your transportation needs to Bratislava.</p>
            </div>
            
            <div className="tactical-card text-center p-6">
              <Shield className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--military-gold))]" />
              <h3 className="text-xl font-bold mb-4">Fixed Rates</h3>
              <p className="text-muted-foreground">Transparent pricing with no hidden fees or surprises.</p>
            </div>
            
            <div className="tactical-card text-center p-6">
              <Car className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--military-gold))]" />
              <h3 className="text-xl font-bold mb-4">Professional Drivers</h3>
              <p className="text-muted-foreground">Experienced drivers familiar with military protocols and Bratislava routes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 [content-visibility:auto] [contain:layout_paint_style]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center combat-text">
            Frequently Asked Questions - Bratislava Transport
          </h2>
          
          <div className="space-y-6">
            <div className="tactical-card p-6">
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--military-gold))]">
                How long does it take to get from Lešť Base to Bratislava?
              </h3>
              <p className="text-muted-foreground">
                The journey typically takes 2-2.5 hours depending on traffic conditions and your specific destination in Bratislava.
              </p>
            </div>
            
            <div className="tactical-card p-6">
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--military-gold))]">
                What are the rates for Bratislava transport?
              </h3>
              <p className="text-muted-foreground">
                We offer fixed rates for all Bratislava destinations. Contact us via WhatsApp for current pricing and to book your trip.
              </p>
            </div>
            
            <div className="tactical-card p-6">
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--military-gold))]">
                Do you provide transport to Bratislava Airport?
              </h3>
              <p className="text-muted-foreground">
                Yes, we provide professional transport to Bratislava Airport (BTS) with timing optimized for your flight schedule.
              </p>
            </div>
            
            <div className="tactical-card p-6">
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--military-gold))]">
                Can you pick up from locations in Bratislava?
              </h3>
              <p className="text-muted-foreground">
                Absolutely! We provide return transport from any location in Bratislava back to Lešť Base or other destinations.
              </p>
            </div>
            
            <div className="tactical-card p-6">
              <h3 className="text-xl font-bold mb-3 text-[hsl(var(--military-gold))]">
                Do you operate during holidays and weekends?
              </h3>
              <p className="text-muted-foreground">
                Yes, our Bratislava transport service operates 24/7, including holidays and weekends, ensuring you always have reliable transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Local Content */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-4xl">
          <article className="tactical-card p-6">
            <h2 className="text-2xl font-bold mb-4 combat-text">Lešť → Bratislava: rýchle fakty a tipy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Najčastejšia trasa do Bratislavy trvá približne 2–2.5 hodiny v závislosti od dennej doby. Pri ranných letoch z BTS odporúčame vyraziť min. 3 hodiny pred odletom. V rámci mesta vieme vysadiť pri hlavných uzloch (Hlavná stanica, Eurovea, Staré Mesto, letisko) podľa vašich plánov. Pri väčšej batožine alebo tímovom vybavení zabezpečíme vozidlo s väčším kufrom. Radi poradíme aj s optimálnym časovaním návratu cez diaľničné obchvaty.
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
              <span className="font-semibold">Letiskové transfery – prehľad služieb</span>
            </a>
            <a href="/taxi-budapest-airport" className="tactical-card p-4 hover:scale-[1.01] transition">
              <span className="font-semibold">Lešť ↔ Budapest (BUD) – transfer</span>
            </a>
            <a href="/taxi-vienna-airport" className="tactical-card p-4 hover:scale-[1.01] transition">
              <span className="font-semibold">Lešť ↔ Vienna (VIE) – premium transfer</span>
            </a>
          </nav>
        </div>
      </section>

      {/* Short route-specific reviews */}
      <section className="py-8 px-6 bg-gradient-to-r from-[hsl(var(--combat-green))]/10 to-[hsl(var(--military-gold))]/5">
        <div className="container mx-auto max-w-5xl grid gap-6 md:grid-cols-3">
          <div className="tactical-card p-6">
            <p className="italic">“Rýchly presun do centra, férová cena, komunikácia v angličtine bez problémov.”</p>
            <p className="mt-3 text-sm text-muted-foreground">– John, US Army</p>
          </div>
          <div className="tactical-card p-6">
            <p className="italic">“Načasovanie na letisko BTS výborné. Vodič pozná skratky cez mesto.”</p>
            <p className="mt-3 text-sm text-muted-foreground">– Petra, Contractor</p>
          </div>
          <div className="tactical-card p-6">
            <p className="italic">“Žiadne prekvapenia v cene, pohodlné auto a bezpečná jazda.”</p>
            <p className="mt-3 text-sm text-muted-foreground">– Mike, USAF</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--combat-green))]/20 to-[hsl(var(--military-gold))]/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 combat-text">
            Ready to Travel to Bratislava?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us now to book your professional transport service
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
    </>
  );
};

export default TaxiBratislava;
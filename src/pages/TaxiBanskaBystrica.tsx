import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, MapPin, Clock, Shield, Car } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { StandardHero } from "@/components/StandardHero";
import { OptimizedImage } from "@/components/OptimizedImage";

import { RelatedServices } from "@/components/RelatedServices";

const TaxiBanskaBystrica = () => {
  useSEO({
    title: "Taxi Banská Bystrica | Transport from Lešť Base | 24/7 Service",
    description: "Professional taxi Lešť service - airport transfers, Banská Bystrica, Zvolen, Budapest or anywhere 24/7 availability",
    keywords: "taxi banská bystrica, taxi lešť, lest base transport, banská bystrica transport, slovakia taxi service, airport transfer banská bystrica",
    canonical: "https://www.lesttaxi.com/taxi-banska-bystrica",
    ogImage: "https://www.lesttaxi.com/lovable-uploads/logo-144.webp",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "Taxi Banská Bystrica - Lešť Transport",
      "url": "https://www.lesttaxi.com/taxi-banska-bystrica",
      "provider": { "@id": "https://www.lesttaxi.com/#taxi" },
      "serviceArea": [
        {
          "@type": "City",
          "name": "Banská Bystrica",
          "addressCountry": "SK"
        },
        {
          "@type": "Place",
          "name": "Lešť Military Base",
          "addressCountry": "SK"
        }
      ],
      "description": "Professional taxi service between Lešť Base and Banská Bystrica. English-speaking drivers, fixed rates, 24/7 availability."
    }
  });

  const openWhatsApp = () => {
    window.open('https://wa.me/421919040118?text=Hello, I need a taxi to Banská Bystrica', '_blank');
  };

  const callPhone = () => {
    window.open('tel:+421919040118', '_self');
  };

  const features = [
    {
      icon: Shield,
      title: "English-Speaking Drivers",
      description: "Professional drivers with excellent English communication for US military personnel"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock service from Lešť Base to Banská Bystrica and surrounding areas"
    },
    {
      icon: Car,
      title: "Fixed Rate Pricing",
      description: "Transparent pricing with no hidden fees. Know your fare before you travel"
    },
    {
      icon: MapPin,
      title: "Direct Routes",
      description: "Fastest routes to Banská Bystrica city center, shopping areas, and train station"
    }
  ];

  const destinations = [
    {
      name: "Banská Bystrica City Center",
      distance: "60 km",
      time: "45 minutes",
      price: "€70"
    },
    {
      name: "Banská Bystrica Train Station",
      distance: "63 km", 
      time: "50 minutes",
      price: "€70"
    },
    {
      name: "Europa Shopping Center",
      distance: "60 km",
      time: "45 minutes", 
      price: "€70"
    },
    {
      name: "SNP Square",
      distance: "62 km",
      time: "48 minutes",
      price: "€70"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-effect backdrop-blur-xl py-4 px-6 relative z-10 border-b border-white/20">
        <nav className="container mx-auto flex justify-between items-center">
          <img 
            src="/lovable-uploads/logo-144.webp" 
            alt="LEST TAXI logo"
            width={144}
            height={144}
            loading="eager"
            decoding="async"
            className="h-16 w-16 rounded-full"
          />
          <div className="flex gap-4">
            <Button onClick={openWhatsApp} variant="whatsapp" size="sm">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
            <Button onClick={callPhone} variant="secondary" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <StandardHero
        title="Taxi Banská Bystrica from Lešť Base"
        description="Professional transport service from Lešť Military Base to Banská Bystrica. English-speaking drivers, fixed rates, and 24/7 availability for US military personnel."
        primaryButtonText="Book Banská Bystrica Trip"
        onPrimaryClick={openWhatsApp}
        onSecondaryClick={callPhone}
      />

      {/* Destinations Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 combat-text">
            Banská Bystrica Destinations & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <Card key={index} className="tactical-card">
                <CardHeader>
                  <CardTitle className="text-lg">{destination.name}</CardTitle>
                  <CardDescription>From Lešť Base</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm"><MapPin className="h-4 w-4 inline mr-2" />{destination.distance}</p>
                    <p className="text-sm"><Clock className="h-4 w-4 inline mr-2" />{destination.time}</p>
                    <p className="text-lg font-bold text-[hsl(var(--military-gold))]">{destination.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[hsl(var(--military-gold))]/10 to-[hsl(var(--combat-green))]/10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 combat-text">
            Why Choose Our Banská Bystrica Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="tactical-card text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[hsl(var(--military-gold))]">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Banská Bystrica */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 combat-text">
            About Banská Bystrica
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Banská Bystrica is the capital city of central Slovakia and the administrative center of the Banská Bystrica Region. 
              Known for its rich mining history and beautiful medieval architecture, the city offers excellent shopping, dining, and cultural experiences.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Typical travel time from Lešť Base is about 45–50 minutes. We can drop you at SNP Square, the train station, or the Europa Shopping Center. For shopping runs, we help with bags and suggest the most efficient pickup spot.
            </p>
            <p className="text-lg text-muted-foreground">
              For unique needs (extra luggage, group rides, late‑night returns), just note it in your WhatsApp message so we dispatch a suitable vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-4xl">
          <nav className="grid gap-3 md:grid-cols-2">
            <a href="/price-list" className="tactical-card p-4 hover:scale-[1.01] transition">
              <span className="font-semibold">Taxi Lešť ↔ Banská Bystrica – ceny</span>
            </a>
            <a href="/airport-transfer" className="tactical-card p-4 hover:scale-[1.01] transition">
              <span className="font-semibold">Letiskové transfery – prehľad</span>
            </a>
            <a href="/taxi-budapest-airport" className="tactical-card p-4 hover:scale-[1.01] transition">
              <span className="font-semibold">Transfer Lešť ↔ Budapest (BUD)</span>
            </a>
            <a href="/taxi-vienna-airport" className="tactical-card p-4 hover:scale-[1.01] transition">
              <span className="font-semibold">Transfer Lešť ↔ Vienna (VIE)</span>
            </a>
          </nav>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-8 px-6 bg-gradient-to-r from-[hsl(var(--combat-green))]/10 to-[hsl(var(--military-gold))]/5">
        <div className="container mx-auto max-w-5xl grid gap-6 md:grid-cols-3">
          <div className="tactical-card p-6">
            <p className="italic">“Quick run to SNP Square, driver advised best pickup spot for return.”</p>
            <p className="mt-3 text-sm text-muted-foreground">– Sarah, US Army</p>
          </div>
          <div className="tactical-card p-6">
            <p className="italic">“Fixed price as quoted, smooth communication in English.”</p>
            <p className="mt-3 text-sm text-muted-foreground">– Robert, USAF</p>
          </div>
          <div className="tactical-card p-6">
            <p className="italic">“Helpful with shopping bags at Europa. Thank you!”</p>
            <p className="mt-3 text-sm text-muted-foreground">– Olivia, Contractor</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[hsl(var(--combat-green))]/20 to-[hsl(var(--military-gold))]/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 combat-text">
            Ready to Travel to Banská Bystrica?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book your taxi from Lešť Base to Banská Bystrica today. Professional service, English-speaking drivers, fixed rates.
          </p>
          <div className="flex gap-6 justify-center">
            <Button onClick={openWhatsApp} variant="whatsapp" size="lg">
              <MessageCircle className="h-5 w-5 mr-2" />
              Book on WhatsApp
            </Button>
            <Button onClick={callPhone} variant="secondary" size="lg">
              <Phone className="h-5 w-5 mr-2" />
              Call +421 919 040 118
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices currentService="/taxi-banska-bystrica" category="city" />

    </div>
  );
};

export default TaxiBanskaBystrica;
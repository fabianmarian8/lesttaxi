import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Plane, Clock, Shield, MapPin } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { StandardHero } from "@/components/StandardHero";
import { OptimizedImage } from "@/components/OptimizedImage";
import { SiteFooter } from "@/components/SiteFooter";
import { RelatedServices } from "@/components/RelatedServices";

const AirportTransportSlovakia = () => {
  useSEO({
    title: "Airport Transport Slovakia | Taxi Airport from Lešť Base | 24/7 Service",
    description: "Professional airport transport Slovakia from Lešť Base. Taxi airport service to Budapest, Vienna, Bratislava. English-speaking drivers, fixed rates. Call +421 919 040 118",
    keywords: "taxi airport, airport transport slovakia, taxi lešť, budapest airport transfer, vienna airport transfer, bratislava airport taxi",
    canonical: "https://www.lesttaxi.com/airport-transport-slovakia",
    ogImage: "https://www.lesttaxi.com/lovable-uploads/08bb4537-9151-4684-bf39-abc2900ea374.webp",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "Airport Transport Slovakia - Lešť Taxi",
      "url": "https://www.lesttaxi.com/airport-transport-slovakia",
      "telephone": "+421919040118",
      "serviceArea": [
        {
          "@type": "Airport",
          "name": "Budapest Ferenc Liszt International Airport",
          "addressCountry": "HU"
        },
        {
          "@type": "Airport", 
          "name": "Vienna International Airport",
          "addressCountry": "AT"
        },
        {
          "@type": "Airport",
          "name": "M. R. Štefánik Airport Bratislava",
          "addressCountry": "SK"
        }
      ],
      "description": "Professional airport transport service from Lešť Base to major airports in Slovakia, Hungary, and Austria. English-speaking drivers, 24/7 availability."
    }
  });

  const openWhatsApp = () => {
    window.open('https://wa.me/421919040118?text=Hello, I need airport transport from Lešť Base', '_blank');
  };

  const callPhone = () => {
    window.open('tel:+421919040118', '_self');
  };

  const airports = [
    {
      name: "Budapest Airport (BUD)",
      country: "Hungary",
      distance: "180 km",
      time: "2 hours",
      price: "€120",
      description: "Ferenc Liszt International Airport - Major hub for Central Europe"
    },
    {
      name: "Vienna Airport (VIE)",
      country: "Austria", 
      distance: "220 km",
      time: "2.5 hours",
      price: "€150",
      description: "Vienna International Airport - Gateway to Austria and beyond"
    },
    {
      name: "Bratislava Airport (BTS)",
      country: "Slovakia",
      distance: "160 km", 
      time: "1.5 hours",
      price: "€100",
      description: "M. R. Štefánik Airport - Slovakia's main international airport"
    },
    {
      name: "Košice Airport (KSC)",
      country: "Slovakia",
      distance: "280 km",
      time: "3 hours", 
      price: "€180",
      description: "Košice International Airport - Eastern Slovakia gateway"
    }
  ];

  const features = [
    {
      icon: Plane,
      title: "All Major Airports",
      description: "Service to Budapest, Vienna, Bratislava, and Košice airports from Lešť Base"
    },
    {
      icon: Clock,
      title: "24/7 Availability", 
      description: "Round-the-clock airport transfers for early flights and late arrivals"
    },
    {
      icon: Shield,
      title: "Reliable & Punctual",
      description: "Never miss your flight with our professional, on-time service"
    },
    {
      icon: MapPin,
      title: "Door-to-Door Service",
      description: "Pickup from Lešť Base directly to airport terminal - no transfers needed"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-effect backdrop-blur-xl py-4 px-6 relative z-10 border-b border-white/20">
        <nav className="container mx-auto flex justify-between items-center">
          <OptimizedImage 
            src="/lovable-uploads/08bb4537-9151-4684-bf39-abc2900ea374.png" 
            alt="LEST TAXI logo" 
            className="h-16 w-16 rounded-full"
            width={64}
            height={64}
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
        title="Airport Transport Slovakia from Lešť Base"
        description="Professional taxi airport service from Lešť Military Base to major airports in Slovakia, Hungary, and Austria. English-speaking drivers, fixed rates, 24/7 availability."
        primaryButtonText="Book Airport Transfer"
        onPrimaryClick={openWhatsApp}
        onSecondaryClick={callPhone}
      />

      {/* Airports Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 combat-text">
            Airport Destinations & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {airports.map((airport, index) => (
              <Card key={index} className="tactical-card">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Plane className="h-5 w-5 mr-2 text-[hsl(var(--military-gold))]" />
                    {airport.name}
                  </CardTitle>
                  <CardDescription>{airport.country}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">{airport.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm"><MapPin className="h-4 w-4 inline mr-1" />{airport.distance}</span>
                      <span className="text-sm"><Clock className="h-4 w-4 inline mr-1" />{airport.time}</span>
                    </div>
                    <div className="text-2xl font-bold text-[hsl(var(--military-gold))]">{airport.price}</div>
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
            Why Choose Our Airport Transport?
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

      {/* Booking Info Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 combat-text">
            Airport Transfer Booking Information
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="tactical-card">
                <CardHeader>
                  <CardTitle>Advance Booking Recommended</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    For airport transfers, we recommend booking at least 24 hours in advance to ensure availability. 
                    However, we also accept last-minute bookings subject to driver availability.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="tactical-card">
                <CardHeader>
                  <CardTitle>Flight Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We monitor your flight status for delays and arrivals to ensure we're there when you land. 
                    No extra charges for flight delays - we adjust pickup time automatically.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[hsl(var(--combat-green))]/20 to-[hsl(var(--military-gold))]/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 combat-text">
            Ready for Your Airport Transfer?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book your taxi airport service from Lešť Base today. Professional drivers, comfortable vehicles, guaranteed punctuality.
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
      <RelatedServices currentService="/airport-transport-slovakia" category="airport" />

      {/* Footer */}
      <SiteFooter />
    </div>
  );
};

export default AirportTransportSlovakia;
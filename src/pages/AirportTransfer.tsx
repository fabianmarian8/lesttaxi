import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Clock, MapPin, Phone, MessageCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import { BreadcrumbNavigation } from "@/components/BreadcrumbNavigation";
import { StandardHero } from "@/components/StandardHero";
import { ServiceIcon } from "@/components/ServiceIcon";

const AirportTransfer = () => {
  useSEO({
    title: "Airport Transfer Slovakia - Sliač, Bratislava, Vienna | LEST TAXI",
    description: "Professional airport transfer service from Lest Base to major airports. Fixed rates, flight tracking, 24/7 service. Book via WhatsApp +421 919 040 118",
    keywords: "airport transfer Slovakia, Sliač airport taxi, Bratislava airport transfer, Vienna airport transport, military airport taxi",
    canonical: "https://www.lesttaxi.com/airport-transfer",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Airport Transfer Service",
      "description": "Professional airport transfer service from Lest Base to major airports",
      "provider": {
        "@type": "LocalBusiness",
        "name": "LEST TAXI",
        "telephone": "+421919040118"
      },
      "serviceType": "Airport Transportation"
    }
  });

  const airports = [
    { name: "Sliač Airport (SLD)", distance: "15 km", time: "40 min", price: "€55" },
    { name: "Budapest Airport (BUD)", distance: "180 km", time: "2 hours", price: "€200" },
    { name: "Vienna Airport (VIE)", distance: "283 km", time: "3 hours", price: "€290" },
    { name: "Bratislava Airport (BTS)", distance: "235 km", time: "2.5 hours", price: "€220" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <BreadcrumbNavigation />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(46,90%,45%)] text-white py-3 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <OptimizedImage 
              src="/lovable-uploads/08bb4537-9151-4684-bf39-abc2900ea374.png" 
              alt="LEST TAXI circular logo with military taxi car icon" 
              width={48}
              height={48}
              className="h-12 w-12 rounded-full bg-white p-1"
              loading="eager"
            />
            <span className="font-bold text-lg">LEST TAXI</span>
          </Link>
          <Button variant="whatsapp" size="sm" onClick={() => window.open('https://wa.me/421919040118', '_blank')}>
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </header>

      <StandardHero
        title="Sliač Airport Taxi & Shuttle"
        description="Professional airport transfer service for military personnel. We track your flights, provide buffer time for delays, and offer flat rates with no surprises. From Lest Base to any major airport in Central Europe."
        primaryButtonText="Book Airport Transfer"
      />

      {/* Airport Options */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Airport Transfer Destinations</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {airports.map((airport, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <ServiceIcon Icon={Plane} size="md" />
                    <div>
                      <CardTitle className="text-xl">{airport.name}</CardTitle>
                      <CardDescription>{airport.distance} • {airport.time}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      Direct transfer from Lest Base
                    </div>
                    <div className="text-2xl font-bold text-[hsl(var(--military-gold))]">
                      {airport.price}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--military-green))]/5 to-[hsl(var(--military-gold))]/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Airport Service?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <ServiceIcon Icon={Clock} className="mx-auto mb-4" />
                <CardTitle>Flight Tracking</CardTitle>
                <CardDescription>We monitor your flight status</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We track your flight in real-time and adjust pickup times for delays, ensuring you never miss your transport.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <ServiceIcon Icon={Shield} className="mx-auto mb-4" />
                <CardTitle>Arrival Buffer Time</CardTitle>
                <CardDescription>Extra time for unexpected delays</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We build in buffer time for customs, baggage claim, and unexpected delays to ensure stress-free transfers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <ServiceIcon Icon={MapPin} className="mx-auto mb-4" />
                <CardTitle>Flat Rate Pricing</CardTitle>
                <CardDescription>No meter, no surprises</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Fixed prices regardless of traffic or delays. What we quote is what you pay, including tolls and fuel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Route: Sliač Airport ↔ Lest Base</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d42736.97995!2d19.134!3d48.638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x4741c7d7d46969f3%3A0x1d4f3b7b3a8e9c2a!2sSlia%C4%8D%20Airport%2C%20Slovakia!3m2!1d48.6375!2d19.1341!4m5!1s0x4741c8a8a8a8a8a8%3A0x8a8a8a8a8a8a8a8a!2sLe%C5%A1%C5%A5%20Military%20Base%2C%20Slovakia!3m2!1d48.65!2d19.15!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Route from Sliač Airport to Lest Military Base"
                  />
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
              <div>
                <h4 className="font-semibold text-lg">Distance</h4>
                <p className="text-[hsl(var(--military-gold))] font-bold">15 km</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Travel Time</h4>
                <p className="text-[hsl(var(--military-gold))] font-bold">40 minutes</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Fixed Price</h4>
                <p className="text-[hsl(var(--military-gold))] font-bold">€55</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--whatsapp-green))] to-[hsl(142,60%,45%)] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Book Your Airport Transfer</h2>
          <p className="text-xl mb-8 opacity-90">
            Professional, reliable airport transfers for military personnel. Available 24/7.
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-xl px-12 py-6 h-auto bg-white text-[hsl(var(--whatsapp-green))] hover:bg-white/90"
            onClick={() => window.open('https://wa.me/421919040118', '_blank')}
          >
            <MessageCircle className="h-6 w-6 mr-3" />
            Book on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AirportTransfer;
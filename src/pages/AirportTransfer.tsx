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
        "@type": "TaxiService",
        "name": "Airport Transfer from Lešť Base",
        "description": "Professional airport transfers from Lešť Base to Sliač (SLD), Budapest (BUD), Vienna (VIE) and Bratislava (BTS) with fixed pricing and flight tracking.",
        "provider": { "@id": "https://www.lesttaxi.com/#taxi" },
        "serviceType": "Airport Transportation",
        "areaServed": [
          { "@type": "Place", "name": "Lešť Military Base, Slovakia" },
          { "@type": "Place", "name": "Sliač Airport (SLD)" },
          { "@type": "Place", "name": "Budapest Airport (BUD)" },
          { "@type": "Place", "name": "Vienna International Airport (VIE)" },
          { "@type": "Place", "name": "Bratislava Airport (BTS)" }
        ],
        "offers": [
          { "@type": "Offer", "price": "55", "priceCurrency": "EUR", "description": "Lešť → Sliač Airport fixed fare" },
          { "@type": "Offer", "price": "200", "priceCurrency": "EUR", "description": "Lešť → Budapest Airport fixed fare" },
          { "@type": "Offer", "price": "290", "priceCurrency": "EUR", "description": "Lešť → Vienna Airport fixed fare" },
          { "@type": "Offer", "price": "220", "priceCurrency": "EUR", "description": "Lešť → Bratislava Airport fixed fare" }
        ]
      }
  });

  const airports = [
    { name: "Sliač Airport (SLD)", distance: "48 km", time: "40 min", price: "€55" },
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
              src="/lovable-uploads/08bb4537-9151-4684-bf39-abc2900ea374.webp" 
              alt="LEST TAXI circular logo with military taxi car icon" 
              width={48}
              height={48}
              className="h-12 w-12 rounded-full bg-white p-1"
              loading="eager"
            />
            <span className="font-bold text-lg">LEST TAXI</span>
          </Link>
          <Button variant="whatsapp" size="sm" onClick={() => window.open('https://api.whatsapp.com/send?phone=421919040118', '_blank')}>
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

      {/* Unikátne miestne informácie pre letiskové transfery */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <article className="tactical-card p-6">
            <h2 className="text-2xl font-bold mb-4 combat-text">Praktické informácie pre letiskové transfery</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Z Lešť Base zvyčajne vyzdvihujeme pri tenisových kurtoch alebo pri hornom vstupe (upper gate) podľa dohody s personálom. Pre skoré ranné lety odporúčame pripraviť sa pár minút skôr – auto čaká na dohodnutom bode a dá o sebe vedieť cez WhatsApp. Na Budapest Airport (BUD) rátame s časom 3–3,5 hodiny (hraničný prechod Šahy/Parassapuszta), Vienna Airport (VIE) 4–4,5 hodiny a Bratislava (BTS) zhruba 2,5 hodiny. Pri odchodoch plánujeme rezervu na check‑in, bezpečnostnú kontrolu aj prípadné zápchy.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ceny sú pevné: príklady – Lešť → BUD €200, Lešť → VIE €290, Lešť → BTS €220, Lešť → Sliač €55. V cene je zahrnuté mýto aj palivo; nič neprekvapí pri dojazde. Ak máte viac batožiny alebo tímové vybavenie, dajte nám vedieť vopred – prispôsobíme typ vozidla a batožinový priestor. Pri návratových letoch sledujeme čísla letov a prispôsobíme čas vyzdvihnutia priamo k terminálu (T2A/T2B v Budapešti, terminály vo Viedni, BTS). 
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ak potrebujete krátku zastávku cestou (kaviareň, toaleta, rýchly nákup), vodič sa prispôsobí. Komunikujeme v angličtine, sme dostupní 24/7 a máme skúsenosť s vojenským protokolom pri presunoch.
            </p>
          </article>
        </div>
      </section>

      {/* Súvisiace trasy */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-4xl">
          <nav className="grid gap-3 md:grid-cols-2">
            <Link to="/price-list" className="tactical-card p-4 hover:scale-[1.01] transition">
              <span className="font-semibold">Pozrite aj cenník – fixné ceny a podmienky</span>
            </Link>
            <Link to="/taxi-vienna-airport" className="tactical-card p-4 hover:scale-[1.01] transition">
              <span className="font-semibold">Taxi Lešť ↔ Vienna Airport (VIE) – detaily</span>
            </Link>
            <Link to="/taxi-budapest-airport" className="tactical-card p-4 hover:scale-[1.01] transition">
              <span className="font-semibold">Taxi Lešť ↔ Budapest Airport (BUD) – informácie</span>
            </Link>
          </nav>
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
            onClick={() => window.open('https://api.whatsapp.com/send?phone=421919040118', '_blank')}
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
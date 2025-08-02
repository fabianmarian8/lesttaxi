import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, MessageCircle, Camera, Users, Euro, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const TaxiStareMesto = () => {
  useSEO({
    title: "Taxi Staré Mesto Bratislava – historické centrum | LEST TAXI",
    description: "Taxi služby v Starom Meste Bratislavy. Rýchly prevoz k pamiatkami, reštauráciám a obchodom. Bratislavský hrad, Hlavné námestie, Michalská brána. Rezervácia +421 919 040 118",
    keywords: "taxi Staré Mesto, Bratislavský hrad taxi, Hlavné námestie prevoz, historické centrum Bratislava, taxi pamiatky",
    canonical: "https://lesttaxi.com/taxi-stare-mesto",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "LEST TAXI - Taxi Staré Mesto Bratislava",
      "description": "Špecializované taxi služby v historickom centre Bratislavy",
      "url": "https://lesttaxi.com/taxi-stare-mesto",
      "telephone": "+421919040118",
      "serviceArea": {
        "@type": "Place",
        "name": "Staré Mesto",
        "containedInPlace": {
          "@type": "City",
          "name": "Bratislava",
          "addressCountry": "SK"
        }
      },
      "areaServed": {
        "@type": "Place",
        "name": "Staré Mesto, Bratislava"
      },
      "priceRange": "€12-€25",
      "availableLanguage": ["Slovak", "English"],
      "openingHours": "Mo-Su 00:00-23:59"
    }
  });

  const attractions = [
    {
      name: "Bratislavský hrad",
      description: "Dominanta mesta s nádherným výhľadom",
      fare: "€12-15",
      walkTime: "5 min",
      highlights: ["Múzeum", "Záhrady", "Výhľad na Dunaj"]
    },
    {
      name: "Hlavné námestie",
      description: "Srdce Starého Mesta s historickými budovami",
      fare: "€8-12",
      walkTime: "2 min",
      highlights: ["Stará radnica", "Reštaurácie", "Kaviarne"]
    },
    {
      name: "Michalská brána",
      description: "Jediná zachovaná brána z mestského opevnenia",
      fare: "€10-14",
      walkTime: "3 min",
      highlights: ["Múzeum zbraní", "Vyhliadka", "Historické pamiatky"]
    },
    {
      name: "Dóm sv. Martina",
      description: "Korunovačný chrám uhorských kráľov",
      fare: "€12-16",
      walkTime: "4 min",
      highlights: ["Gotická architektúra", "História", "Prehliadky"]
    }
  ];

  const restaurants = [
    {
      name: "Zylinder Café Restaurant",
      type: "Fine dining",
      priceRange: "€€€",
      specialty: "Európska kuchyňa"
    },
    {
      name: "Modra Hviezda",
      type: "Tradičná slovenská",
      priceRange: "€€",
      specialty: "Slovenské jedlá"
    },
    {
      name: "UFO Restaurant",
      type: "Vyhliadková reštaurácia",
      priceRange: "€€€€",
      specialty: "Medzinárodná kuchyňa"
    }
  ];

  const typicalFares = [
    { from: "Hlavné námestie", to: "Bratislavský hrad", price: "€8-12", time: "8 min" },
    { from: "Michalská brána", to: "Nový Most", price: "€10-15", time: "12 min" },
    { from: "Staré Mesto", to: "Hlavná stanica", price: "€15-20", time: "15 min" },
    { from: "Staré Mesto", to: "Letisko BTS", price: "€25-30", time: "25 min" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] text-background py-4 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <OptimizedImage 
              src="/lovable-uploads/08bb4537-9151-4684-bf39-abc2900ea374.png" 
              alt="LEST TAXI Logo" 
              className="h-16 w-16 rounded-full bg-white/10 p-2"
              width={64}
              height={64}
            />
            <span className="font-bold text-xl">LEST TAXI</span>
          </Link>
          <Button variant="whatsapp" size="sm" onClick={() => window.open('https://wa.me/421919040118', '_blank')}>
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--card))] to-[hsl(var(--muted))]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 combat-text">
              Taxi Staré Mesto Bratislava
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Profesionálne taxi služby v historickom centre Bratislavy. 
              Rýchly prevoz k všetkým hlavným pamiatkam, reštauráciám a kulturným objektom.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                variant="whatsapp" 
                size="lg" 
                onClick={() => window.open('https://wa.me/421919040118', '_blank')}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Rezervovať taxi
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/taxi-bratislava">
                  <MapPin className="h-5 w-5 mr-2" />
                  Celá Bratislava
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Hlavné atrakcie Starého Mesta</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {attractions.map((attraction, index) => (
              <Card key={index} className="tactical-card hover-scale">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-[hsl(var(--military-gold))]">{attraction.name}</CardTitle>
                      <CardDescription>{attraction.description}</CardDescription>
                    </div>
                    <Camera className="h-6 w-6 text-[hsl(var(--military-gold))]" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Euro className="h-4 w-4 text-[hsl(var(--military-gold))]" />
                        <span className="font-semibold">{attraction.fare}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-[hsl(var(--military-gold))]" />
                        <span className="text-sm">{attraction.walkTime} pešo</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Čo vidieť:</h4>
                      <div className="flex flex-wrap gap-2">
                        {attraction.highlights.map((highlight, i) => (
                          <span key={i} className="px-2 py-1 bg-[hsl(var(--muted))] rounded-md text-xs">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Fares Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--muted))] to-[hsl(var(--card))]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Typické ceny prepravy</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Cenník taxi zo Starého Mesta</CardTitle>
                <CardDescription>Fixné ceny bez skrytých poplatkov</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {typicalFares.map((fare, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                      <div>
                        <div className="font-semibold">{fare.from} → {fare.to}</div>
                        <div className="text-sm text-muted-foreground">Čas jazdy: {fare.time}</div>
                      </div>
                      <div className="text-xl font-bold text-[hsl(var(--military-gold))]">{fare.price}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Odporúčané reštaurácie</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {restaurants.map((restaurant, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Star className="h-8 w-8 text-[hsl(var(--military-gold))] mx-auto mb-2" />
                  <CardTitle className="text-lg">{restaurant.name}</CardTitle>
                  <CardDescription>{restaurant.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="font-semibold text-[hsl(var(--military-gold))]">{restaurant.priceRange}</div>
                    <div className="text-sm text-muted-foreground">{restaurant.specialty}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Potrebujete odvoz do reštaurácie alebo z nej? Kontaktujte nás!
            </p>
            <Button 
              variant="outline" 
              onClick={() => window.open('https://wa.me/421919040118', '_blank')}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Rezervovať odvoz
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--whatsapp-green))] to-[hsl(var(--tactical-orange))] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Taxi v Starom Meste?</h2>
          <p className="text-xl mb-8 opacity-90">
            Rýchly a pohodlný prevoz k všetkým pamiatkam historického centra
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-[hsl(var(--whatsapp-green))] hover:bg-white/90"
              onClick={() => window.open('https://wa.me/421919040118', '_blank')}
            >
              <MessageCircle className="h-6 w-6 mr-3" />
              Rezervovať teraz
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-[hsl(var(--tactical-orange))] hover:bg-white/90"
              asChild
            >
              <Link to="/price-list">
                <Euro className="h-6 w-6 mr-3" />
                Úplný cenník
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </div>
  );
};

export default TaxiStareMesto;
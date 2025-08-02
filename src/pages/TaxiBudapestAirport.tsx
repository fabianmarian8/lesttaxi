import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Clock, Phone, MessageCircle, MapPin, Euro, CheckCircle, Luggage } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const TaxiBudapestAirport = () => {
  useSEO({
    title: "Taxi Budapest Airport – Transfer to Ferenc Liszt International | LEST TAXI",
    description: "Professional airport transfer to Budapest Ferenc Liszt International Airport. 3-hour journey, fixed rates €180-200. Door-to-door service from Slovakia. Book +421 919 040 118",
    keywords: "Budapest airport transfer, Ferenc Liszt airport taxi, Slovakia to Budapest, airport transport, BUD airport transfer",
    canonical: "https://lesttaxi.com/taxi-budapest-airport",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "LEST TAXI - Budapest Airport Transfer",
      "description": "Professional airport transfer service to Budapest Ferenc Liszt International Airport",
      "url": "https://lesttaxi.com/taxi-budapest-airport",
      "telephone": "+421919040118",
      "serviceArea": {
        "@type": "Place",
        "name": "Budapest Ferenc Liszt International Airport",
        "addressCountry": "HU",
        "iataCode": "BUD"
      },
      "areaServed": [
        {
          "@type": "Place",
          "name": "Lešť Military Base, Slovakia"
        },
        {
          "@type": "Place",
          "name": "Bratislava, Slovakia"
        },
        {
          "@type": "Place",
          "name": "Central Slovakia"
        }
      ],
      "priceRange": "€180-€200",
      "availableLanguage": ["English", "Slovak", "Hungarian"],
      "openingHours": "Mo-Su 00:00-23:59",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Travel Time",
          "value": "3 hours"
        },
        {
          "@type": "PropertyValue", 
          "name": "Distance",
          "value": "280 km"
        }
      ]
    }
  });

  const serviceFeatures = [
    {
      icon: Plane,
      title: "Flight Tracking",
      description: "We monitor your flight status for delays and early arrivals"
    },
    {
      icon: Clock,
      title: "Punctual Service",
      description: "Pick up 3.5 hours before international departures"
    },
    {
      icon: Luggage,
      title: "Luggage Assistance",
      description: "Help with loading and unloading your baggage"
    },
    {
      icon: MapPin,
      title: "Door-to-Door",
      description: "Direct transfer from your location to the airport terminal"
    }
  ];

  const pricingOptions = [
    {
      route: "Lešť Base → Budapest Airport",
      distance: "280 km",
      time: "3 hours",
      price: "€200",
      includes: ["Tolls", "Fuel", "Waiting time"]
    },
    {
      route: "Bratislava → Budapest Airport", 
      distance: "200 km",
      time: "2.5 hours",
      price: "€180",
      includes: ["Tolls", "Fuel", "Border crossing"]
    },
    {
      route: "Central Slovakia → Budapest Airport",
      distance: "220-300 km", 
      time: "2.5-3.5 hours",
      price: "€180-220",
      includes: ["Tolls", "Fuel", "Professional service"]
    }
  ];

  const travelInfo = [
    {
      title: "Border Crossing",
      content: "Smooth EU border crossing between Slovakia and Hungary. Valid passport or ID required."
    },
    {
      title: "Travel Time",
      content: "Approximately 3 hours via highway M1/A4. We account for traffic and border procedures."
    },
    {
      title: "Airport Terminals",
      content: "Budapest Airport has terminals 2A and 2B. We drop you at the correct terminal for your airline."
    },
    {
      title: "Payment", 
      content: "Accept EUR cash payment. Fixed rates with no hidden fees or surcharges."
    }
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
              Taxi Budapest Airport Transfer
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Professional airport transfer service to Budapest Ferenc Liszt International Airport (BUD). 
              Reliable door-to-door service from Slovakia with flight monitoring and fixed rates.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                variant="whatsapp" 
                size="lg" 
                onClick={() => window.open('https://wa.me/421919040118', '_blank')}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Book Airport Transfer
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/airport-transfer">
                  <Plane className="h-5 w-5 mr-2" />
                  All Airports
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Airport Info Card */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto tactical-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Budapest Ferenc Liszt International Airport (BUD)</CardTitle>
              <CardDescription>Hungary's largest international airport</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <MapPin className="h-8 w-8 text-[hsl(var(--military-gold))] mx-auto mb-2" />
                  <h4 className="font-semibold">Distance</h4>
                  <p className="text-muted-foreground">280 km from Lešť Base</p>
                </div>
                <div>
                  <Clock className="h-8 w-8 text-[hsl(var(--military-gold))] mx-auto mb-2" />
                  <h4 className="font-semibold">Travel Time</h4>
                  <p className="text-muted-foreground">3 hours via highway</p>
                </div>
                <div>
                  <Euro className="h-8 w-8 text-[hsl(var(--military-gold))] mx-auto mb-2" />
                  <h4 className="font-semibold">Fixed Rate</h4>
                  <p className="text-muted-foreground">€200 from Lešť Base</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--muted))] to-[hsl(var(--card))]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Airport Transfer Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-[hsl(var(--military-gold))] mx-auto mb-4" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Transfer Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingOptions.map((option, index) => (
              <Card key={index} className="tactical-card">
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--military-gold))]">{option.route}</CardTitle>
                  <CardDescription>{option.distance} • {option.time}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-[hsl(var(--military-gold))]">{option.price}</div>
                    <div className="text-sm text-muted-foreground">Fixed rate</div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {option.includes.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-[hsl(var(--military-gold))]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Information */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--muted))] to-[hsl(var(--card))]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Travel Information</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {travelInfo.map((info, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--whatsapp-green))] to-[hsl(var(--tactical-orange))] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Budapest Airport?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your reliable airport transfer to Budapest Ferenc Liszt International Airport
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-[hsl(var(--whatsapp-green))] hover:bg-white/90"
              onClick={() => window.open('https://wa.me/421919040118', '_blank')}
            >
              <MessageCircle className="h-6 w-6 mr-3" />
              Book via WhatsApp
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-[hsl(var(--tactical-orange))] hover:bg-white/90"
              asChild
            >
              <Link to="/">
                <Phone className="h-6 w-6 mr-3" />
                Call +421 919 040 118
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </div>
  );
};

export default TaxiBudapestAirport;
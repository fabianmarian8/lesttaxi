import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Clock, Phone, MessageCircle, MapPin, Euro, CheckCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const TaxiViennaAirport = () => {
  useSEO({
    title: "Taxi Vienna Airport – Transfer to Schwechat (VIE) | LEST TAXI",
    description: "Professional airport transfer to Vienna International Airport (Schwechat). 2.5-hour journey, fixed rates €150-180. Door-to-door service from Slovakia. Book +421 919 040 118",
    keywords: "Vienna airport transfer, Schwechat airport taxi, Slovakia to Vienna, VIE airport transport, Vienna International Airport",
    canonical: "https://lesttaxi.com/taxi-vienna-airport",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "LEST TAXI - Vienna Airport Transfer",
      "description": "Professional airport transfer service to Vienna International Airport (Schwechat)",
      "url": "https://lesttaxi.com/taxi-vienna-airport",
      "telephone": "+421919040118",
      "serviceArea": {
        "@type": "Place",
        "name": "Vienna International Airport",
        "addressCountry": "AT",
        "iataCode": "VIE",
        "alternateName": "Schwechat Airport"
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
      "priceRange": "€150-€180",
      "availableLanguage": ["English", "Slovak", "German"],
      "openingHours": "Mo-Su 00:00-23:59",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Travel Time",
          "value": "2.5 hours"
        },
        {
          "@type": "PropertyValue",
          "name": "Distance", 
          "value": "220 km"
        }
      ]
    }
  });

  const serviceHighlights = [
    {
      icon: Shield,
      title: "Professional Drivers",
      description: "Licensed, experienced drivers familiar with Vienna routes"
    },
    {
      icon: Clock,
      title: "On-Time Service",
      description: "Pick up 3 hours before international departures"
    },
    {
      icon: Euro,
      title: "Fixed Pricing",
      description: "No meter, no surprises - agreed price includes everything"
    },
    {
      icon: MapPin,
      title: "Terminal Service",
      description: "Drop-off directly at your departure terminal"
    }
  ];

  const routeOptions = [
    {
      origin: "Lešť Military Base",
      destination: "Vienna Airport (VIE)",
      distance: "220 km",
      duration: "2.5 hours",
      price: "€180",
      route: "Via A1 highway"
    },
    {
      origin: "Bratislava",
      destination: "Vienna Airport (VIE)", 
      distance: "80 km",
      duration: "1 hour",
      price: "€150",
      route: "Via A4/A6 highway"
    },
    {
      origin: "Banská Bystrica",
      destination: "Vienna Airport (VIE)",
      distance: "280 km", 
      duration: "3 hours",
      price: "€220",
      route: "Via A1/A2 highway"
    }
  ];

  const airportInfo = [
    {
      title: "Terminal Information",
      items: [
        "Terminal 1: Non-Schengen flights",
        "Terminal 3: Schengen and domestic flights", 
        "Check-In areas: Sky Link connects terminals"
      ]
    },
    {
      title: "Arrival Services",
      items: [
        "Flight monitoring for delays",
        "Meet & greet at arrivals hall",
        "Assistance with luggage"
      ]
    },
    {
      title: "Departure Services", 
      items: [
        "Drop-off at correct terminal",
        "Allow 3 hours for international flights",
        "2 hours for European flights"
      ]
    }
  ];

  const faqs = [
    {
      question: "How long does the journey take from Bratislava?",
      answer: "The journey from Bratislava to Vienna Airport takes approximately 1 hour via the A6 highway, depending on traffic conditions."
    },
    {
      question: "Do you monitor flight delays?",
      answer: "Yes, we track your flight status and adjust pickup times accordingly for both departures and arrivals."
    },
    {
      question: "What is included in the price?",
      answer: "Our fixed rate includes fuel, tolls, driver service, and waiting time. No hidden fees or surcharges."
    },
    {
      question: "Can I book for early morning flights?",
      answer: "Absolutely! We operate 24/7 and can accommodate any departure time, including early morning flights."
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
              Taxi Vienna Airport Transfer
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Professional airport transfer service to Vienna International Airport (Schwechat). 
              Reliable, comfortable, and punctual transportation from Slovakia to Austria's main airport.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                variant="whatsapp" 
                size="lg" 
                onClick={() => window.open('https://wa.me/421919040118', '_blank')}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Book Transfer Now
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/airport-transfer">
                  <Plane className="h-5 w-5 mr-2" />
                  Other Airports
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Airport Overview */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto tactical-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Vienna International Airport (VIE)</CardTitle>
              <CardDescription>Austria's largest international airport in Schwechat</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <MapPin className="h-8 w-8 text-[hsl(var(--military-gold))] mx-auto mb-2" />
                  <h4 className="font-semibold">From Bratislava</h4>
                  <p className="text-muted-foreground">80 km • 1 hour</p>
                </div>
                <div>
                  <Clock className="h-8 w-8 text-[hsl(var(--military-gold))] mx-auto mb-2" />
                  <h4 className="font-semibold">From Lešť Base</h4>
                  <p className="text-muted-foreground">220 km • 2.5 hours</p>
                </div>
                <div>
                  <Euro className="h-8 w-8 text-[hsl(var(--military-gold))] mx-auto mb-2" />
                  <h4 className="font-semibold">Fixed Rates</h4>
                  <p className="text-muted-foreground">€150-€220</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--muted))] to-[hsl(var(--card))]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Vienna Airport Service</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceHighlights.map((highlight, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <highlight.icon className="h-12 w-12 text-[hsl(var(--military-gold))] mx-auto mb-4" />
                  <CardTitle className="text-lg">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Route Options */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Transfer Routes & Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {routeOptions.map((route, index) => (
              <Card key={index} className="tactical-card hover-scale">
                <CardHeader>
                  <CardTitle className="text-[hsl(var(--military-gold))] text-center">{route.origin}</CardTitle>
                  <CardDescription className="text-center">to {route.destination}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-[hsl(var(--military-gold))]">{route.price}</div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-between">
                        <span>Distance:</span>
                        <span>{route.distance}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Duration:</span>
                        <span>{route.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Route:</span>
                        <span>{route.route}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Airport Information */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--muted))] to-[hsl(var(--card))]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Vienna Airport Information</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {airportInfo.map((info, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {info.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-[hsl(var(--military-gold))] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--whatsapp-green))] to-[hsl(var(--tactical-orange))] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Book Your Vienna Airport Transfer</h2>
          <p className="text-xl mb-8 opacity-90">
            Reliable, comfortable, and professional airport transfer service to Vienna International Airport
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-[hsl(var(--whatsapp-green))] hover:bg-white/90"
              onClick={() => window.open('https://wa.me/421919040118', '_blank')}
            >
              <MessageCircle className="h-6 w-6 mr-3" />
              WhatsApp Booking
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-[hsl(var(--tactical-orange))] hover:bg-white/90"
              asChild
            >
              <Link to="/price-list">
                <Euro className="h-6 w-6 mr-3" />
                View All Prices
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </div>
  );
};

export default TaxiViennaAirport;
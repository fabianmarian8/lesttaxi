import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Plane, Clock, MapPin, Shield, Users, Calendar } from "lucide-react";

const AirportMilitary = () => {
  // BreadcrumbList structured data
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://lesttaxi.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Services",
        "item": "https://lesttaxi.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Airport Transfers",
        "item": "https://lesttaxi.com/airport-transfer"
      }
    ]
  };

  useSEO({
    title: "Military Airport Transfers | LEST TAXI",
    description: "Airport transfers for US soldiers. Bratislava, Vienna, Budapest airports. Military-friendly scheduling for leave and vacation.",
    keywords: "military airport transfer Slovakia, Bratislava Vienna Budapest airport US soldiers, leave transport military, vacation airport transfer Lest base, US military taxi airport",
    canonical: "https://www.lesttaxi.com/airport-military",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Airport Transfers for US Military",
      "description": "Specialized airport transfer service for American soldiers at Lest Base to major European airports",
      "provider": {
        "@type": "LocalBusiness",
        "name": "LEST TAXI",
        "telephone": "+421 948 141 414"
      },
      "areaServed": "Lest Military Base, Slovakia",
      "serviceType": "Airport Transfer Service",
      "audience": {
        "@type": "Audience",
        "audienceType": "US Military Personnel"
      }
    }
  });

  const airports = [
    {
      name: "Bratislava Airport (BTS)",
      distance: "245 km",
      time: "2h 15min",
      price: "€220",
      description: "Slovakia's main international airport with budget airlines",
      airlines: ["Ryanair", "Wizz Air", "Austrian Airlines"]
    },
    {
      name: "Vienna Airport (VIE)",
      distance: "280 km", 
      time: "2h 45min",
      price: "€290",
      description: "Major European hub with worldwide connections",
      airlines: ["Austrian Airlines", "Lufthansa", "Emirates", "Turkish Airlines"]
    },
    {
      name: "Budapest Airport (BUD)",
      distance: "187 km",
      time: "2h", 
      price: "€200",
      description: "Great connections to USA and Europe",
      airlines: ["Wizz Air", "Lufthansa", "Turkish Airlines", "Delta (seasonal)"]
    }
  ];

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Military Scheduling",
      description: "We understand leave schedules and military time constraints"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Advance Booking",
      description: "Book weeks ahead for your R&R or vacation travel"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Group Transfers",
      description: "Special rates for multiple soldiers traveling together"
    }
  ];

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      
      <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">LEST</span>
            <span className="text-2xl font-bold text-foreground">TAXI</span>
          </div>
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
            <a href="https://wa.me/421919040118" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Airport Transfers for US Military
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Heading home for leave or taking a European vacation? We provide reliable airport transfers 
            from Lest base to Bratislava, Vienna, and Budapest airports. Military-friendly scheduling and rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="https://wa.me/421919040118?text=Hi! I need airport transfer from Lest base." target="_blank" rel="noopener noreferrer">
                <Plane className="mr-2 h-5 w-5" />
                Book Airport Transfer
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+421919040118">
                <Phone className="mr-2 h-5 w-5" />
                Call +421 919 040 118
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Airport Destinations */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Airport Destinations</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {airports.map((airport, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{airport.name}</h3>
                  <p className="text-muted-foreground mb-4">{airport.description}</p>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Distance: {airport.distance}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Travel time: {airport.time}
                    </div>
                    <div className="text-lg font-bold text-primary">
                      {airport.price}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Popular Airlines:</p>
                    {airport.airlines.map((airline, idx) => (
                      <div key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded inline-block mr-1 mb-1">
                        {airline}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Military Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Military-Focused Service</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Travel Tips for US Military</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Best Airports for US Travel</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Vienna (VIE):</strong> Best for direct flights to major US cities</li>
                  <li>• <strong>Budapest (BUD):</strong> Good connections via Frankfurt/Amsterdam</li>
                  <li>• <strong>Bratislava (BTS):</strong> Budget options, great for European destinations</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Booking Recommendations</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Book transfers 2-3 days in advance</li>
                  <li>• Consider traffic during rush hours</li>
                  <li>• Group bookings available for cost savings</li>
                  <li>• Early morning flights? We start at 4 AM</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Airport Transfer Works</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold mb-2">Book in Advance</h3>
              <p className="text-sm text-muted-foreground">Tell us your flight details and pickup time</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold mb-2">Base Pickup</h3>
              <p className="text-sm text-muted-foreground">We pick you up at Lest base gate</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold mb-2">Direct Transfer</h3>
              <p className="text-sm text-muted-foreground">Non-stop ride to your airport terminal</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="font-semibold mb-2">Safe Arrival</h3>
              <p className="text-sm text-muted-foreground">Arrive relaxed and on time for your flight</p>
            </div>
          </div>
        </div>
      </section>

      {/* Group Booking */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Group Bookings & Special Rates</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Group Discounts</h3>
                  <p className="text-muted-foreground mb-4">Traveling with fellow soldiers? We offer special group rates for 3+ passengers going to the same airport.</p>
                  <p className="text-primary font-semibold">Save up to 20% on group bookings!</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Return Transfers</h3>
                  <p className="text-muted-foreground mb-4">Coming back from leave? Book your return transfer when you book your departure for additional savings.</p>
                  <p className="text-primary font-semibold">Round-trip discount available!</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Trip?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're heading home for leave or exploring Europe, we'll get you to the airport 
            safely and on time. Book your military-friendly airport transfer now.
          </p>
          <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <a href="https://wa.me/421919040118?text=Hi! I need airport transfer from Lest base." target="_blank" rel="noopener noreferrer">
              <Plane className="mr-2 h-5 w-5" />
              Book Airport Transfer Now
            </a>
          </Button>
        </div>
        </section>
      </div>
    </>
  );
};

export default AirportMilitary;
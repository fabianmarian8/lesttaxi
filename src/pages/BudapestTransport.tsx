import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, DollarSign, Phone, MessageCircle, Car, Shield, Star, Plane } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { OptimizedImage } from "@/components/OptimizedImage";

const BudapestTransport = () => {
  useSEO({
    title: "Budapest Transport for US Military | Lest Base to Budapest | FRANKO TAXI",
    description: "Professional long-distance transport from Lest Military Base to Budapest, Hungary. Airport transfers, city tours, business trips for US military personnel. English speaking drivers.",
    keywords: "Budapest transport military, US soldiers Budapest taxi, Lest to Budapest, military transport Hungary, American soldiers Budapest transfer",
    canonical: "https://www.lesttaxi.com/budapest-military-transport",
    ogImage: "/lovable-uploads/6ca94396-9524-4fbf-a518-111877aa3f81.png",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TaxiService", 
      "name": "FRANKO TAXI - Budapest Military Transport",
      "description": "Long-distance transport service from Lest Military Base to Budapest, Hungary for US military personnel",
      "serviceArea": {
        "@type": "Place",
        "name": "Budapest, Hungary"
      },
      "provider": {
        "@type": "LocalBusiness",
        "name": "FRANKO TAXI",
        "telephone": "+421919040118",
        "url": "https://www.lesttaxi.com",
        "serviceArea": "Slovakia, Hungary"
      },
      "availableLanguage": ["English", "Slovak"],
      "offers": {
        "@type": "Offer",
        "price": "180",
        "priceCurrency": "EUR",
        "description": "Transport from Lest Base to Budapest"
      }
    }
  });

  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=421919040118&text=Hello,%20I%20need%20transport%20to%20Budapest", "_blank");
  };

  const callPhone = () => {
    window.open("tel:+421919040118", "_self");
  };

  const features = [
    {
      icon: Shield,
      title: "Cross-Border Experience",
      description: "Experienced with Slovak-Hungarian border procedures and documentation"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling", 
      description: "Day trips, overnight stays, or extended Budapest visits"
    },
    {
      icon: Star,
      title: "Local Knowledge",
      description: "Expert knowledge of Budapest attractions, hotels, and business districts"
    },
    {
      icon: Car,
      title: "Comfortable Journey",
      description: "Premium vehicles for the 3-hour journey with rest stops if needed"
    }
  ];

  const destinations = [
    {
      name: "Budapest Airport (BUD)",
      distance: "150 km",
      time: "2h",
      price: "200€",
      description: "Flights, international connections",
      icon: Plane
    },
    {
      name: "Budapest City Center",
      distance: "140 km", 
      time: "2h 15min",
      price: "200€",
      description: "Parliament, Danube, historic districts",
      icon: MapPin
    },
    {
      name: "Business District",
      distance: "150 km",
      time: "2h 20min", 
      price: "200€",
      description: "Corporate meetings, embassies",
      icon: MapPin
    },
    {
      name: "Thermal Baths",
      distance: "150 km",
      time: "2h 10min",
      price: "200€",
      description: "Széchenyi, Gellért famous spas",
      icon: MapPin
    }
  ];

  const attractions = [
    "Hungarian Parliament Building",
    "Fisherman's Bastion", 
    "Széchenyi Thermal Baths",
    "Buda Castle",
    "Chain Bridge",
    "Central Market Hall",
    "Ruin Bars District",
    "Danube River Cruise"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <OptimizedImage 
              src="/lovable-uploads/6ca94396-9524-4fbf-a518-111877aa3f81.png" 
              alt="FRANKO TAXI circular logo with professional taxi service branding" 
              width={48}
              height={48}
              className="h-12 w-auto"
              loading="eager"
            />
            <span className="text-2xl font-bold text-primary">FRANKO TAXI</span>
          </div>
          <Button onClick={openWhatsApp} className="bg-green-600 hover:bg-green-700">
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Military Transport to Budapest
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professional long-distance transport from Lest Military Base to Budapest, Hungary. 
            Experience the beautiful capital city with our reliable military transport service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book Budapest Trip
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={callPhone}
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Budapest Destinations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <destination.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{destination.name}</CardTitle>
                  <CardDescription>{destination.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{destination.distance}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{destination.time}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <span className="text-2xl font-bold text-primary">{destination.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Budapest Service?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Budapest */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Discover Beautiful Budapest</h2>
              <p className="text-lg mb-6">
                Budapest, the "Pearl of the Danube," is one of Europe's most stunning capitals. 
                The city offers a perfect blend of historic architecture, thermal baths, vibrant 
                nightlife, and world-class cuisine.
              </p>
              <p className="text-lg mb-8">
                Our professional drivers will ensure you arrive safely and comfortably, with 
                expert knowledge of the best routes and local insights to make your Budapest 
                experience unforgettable.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Must-Visit Attractions:</h3>
              <div className="grid grid-cols-2 gap-2">
                {attractions.map((attraction, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm">{attraction}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Journey Details</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Journey Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">Approximately 3 hours via comfortable highway route through scenic Slovak and Hungarian countryside.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Border Crossing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">Smooth EU border crossing. Driver handles all documentation and procedures efficiently.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Car className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Comfort Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">Air conditioning, phone charging, bottled water, and rest stops included for your comfort.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Your Budapest Adventure?</h2>
          <p className="text-xl mb-8">
            Book your comfortable and reliable transport from Lest Military Base to Budapest today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book Budapest Trip
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={callPhone}
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +421 919 040 118
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BudapestTransport;
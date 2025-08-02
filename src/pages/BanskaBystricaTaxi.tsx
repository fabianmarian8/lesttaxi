import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, DollarSign, Phone, MessageCircle, Car, Shield, Star } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { OptimizedImage } from "@/components/OptimizedImage";

const BanskaBystricaTaxi = () => {
  useSEO({
    title: "Military Taxi Banská Bystrica | US Soldiers Transport | FRANKO TAXI",
    description: "Professional taxi service from Lešť Military Base to Banská Bystrica. 24/7 transport for US military personnel. English speaking drivers, fixed rates, reliable service.",
    keywords: "Banská Bystrica taxi military, US soldiers transport Banská Bystrica, Lešť base to Banská Bystrica, military taxi Slovakia, American soldiers taxi",
    canonical: "https://lesttaxi.com/banska-bystrica-military-taxi",
    ogImage: "/lovable-uploads/6ca94396-9524-4fbf-a518-111877aa3f81.png",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "FRANKO TAXI - Banská Bystrica Military Transport",
      "description": "Specialized taxi service from Lešť Military Base to Banská Bystrica for US military personnel",
      "serviceArea": {
        "@type": "Place",
        "name": "Banská Bystrica, Slovakia"
      },
      "provider": {
        "@type": "LocalBusiness",
        "name": "FRANKO TAXI",
        "telephone": "+421-XXX-XXX-XXX",
        "url": "https://lesttaxi.com",
        "serviceArea": "Slovakia"
      },
      "availableLanguage": ["English", "Slovak"],
      "offers": {
        "@type": "Offer",
        "price": "40",
        "priceCurrency": "EUR",
        "description": "Transport from Lešť Base to Banská Bystrica"
      }
    }
  });

  const openWhatsApp = () => {
    window.open("https://wa.me/421905123456?text=Hello,%20I%20need%20transport%20to%20Banská%20Bystrica", "_blank");
  };

  const callPhone = () => {
    window.open("tel:+421905123456", "_self");
  };

  const features = [
    {
      icon: Shield,
      title: "Security Clearance",
      description: "All drivers have proper security clearance for military base access"
    },
    {
      icon: Clock,
      title: "24/7 Availability", 
      description: "Round-the-clock service for all your Banská Bystrica transport needs"
    },
    {
      icon: Star,
      title: "English Speaking",
      description: "Fluent English communication for comfortable travel experience"
    },
    {
      icon: Car,
      title: "Modern Fleet",
      description: "Clean, comfortable vehicles perfect for longer distance travel"
    }
  ];

  const destinations = [
    {
      name: "Banská Bystrica City Center",
      distance: "25 km",
      time: "30 min",
      price: "40€",
      description: "Shopping, restaurants, historic center"
    },
    {
      name: "Banská Bystrica Mall",
      distance: "23 km", 
      time: "28 min",
      price: "38€",
      description: "Shopping center, cinema, food court"
    },
    {
      name: "Banská Bystrica Train Station",
      distance: "26 km",
      time: "32 min", 
      price: "42€",
      description: "Railway connections to major cities"
    },
    {
      name: "Banská Bystrica Hospital",
      distance: "24 km",
      time: "29 min",
      price: "39€",
      description: "Medical appointments and services"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <OptimizedImage 
              src="/lovable-uploads/6ca94396-9524-4fbf-a518-111877aa3f81.png" 
              alt="FRANKO TAXI Logo" 
              className="h-12 w-auto"
              width={48}
              height={48}
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
            Military Taxi to Banská Bystrica
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professional transport service from Lešť Military Base to Banská Bystrica. 
            Reliable, safe, and comfortable rides for US military personnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book via WhatsApp
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
            Banská Bystrica Destinations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
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
            Why Choose Our Banská Bystrica Service?
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

      {/* About Banská Bystrica */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">About Banská Bystrica</h2>
            <p className="text-lg mb-6">
              Banská Bystrica is a historic city in central Slovakia, known for its beautiful medieval old town, 
              vibrant cultural scene, and excellent shopping opportunities. The city offers modern amenities 
              including shopping centers, restaurants, medical facilities, and entertainment venues.
            </p>
            <p className="text-lg mb-8">
              Our reliable taxi service ensures US military personnel can easily access all that Banská Bystrica 
              has to offer, from business appointments to leisure activities, with the comfort of English-speaking 
              drivers who understand military schedules and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Travel to Banská Bystrica?</h2>
          <p className="text-xl mb-8">
            Book your reliable transport from Lešť Military Base to Banská Bystrica today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book via WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={callPhone}
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +421 905 123 456
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BanskaBystricaTaxi;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, DollarSign, Phone, MessageCircle, Car, Shield, Star, Hotel, Users } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { OptimizedImage } from "@/components/OptimizedImage";

const MilitaryAccommodation = () => {
  useSEO({
    title: "Military Accommodation Transport Slovakia | Hotel Transfers US Soldiers | FRANKO TAXI",
    description: "Reliable transport to hotels and accommodation for US military personnel in Slovakia. Airport pickups, hotel transfers, and accommodation services. English speaking drivers available 24/7.",
    keywords: "military accommodation transport, US soldiers hotel transfers, military housing Slovakia, American military hotel service, accommodation transport Lest",
    canonical: "https://lesttaxi.com/military-accommodation-transport",
    ogImage: "/lovable-uploads/6ca94396-9524-4fbf-a518-111877aa3f81.png",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "FRANKO TAXI - Military Accommodation Transport",
      "description": "Specialized accommodation transport service for US military personnel in Slovakia",
      "serviceArea": {
        "@type": "Place",
        "name": "Slovakia"
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
        "priceRange": "25-80 EUR",
        "description": "Hotel and accommodation transport services"
      }
    }
  });

  const openWhatsApp = () => {
    window.open("https://wa.me/421905123456?text=Hello,%20I%20need%20accommodation%20transport%20service", "_blank");
  };

  const callPhone = () => {
    window.open("tel:+421905123456", "_self");
  };

  const features = [
    {
      icon: Shield,
      title: "Security Clearance",
      description: "All drivers have proper military base access and security clearance"
    },
    {
      icon: Clock,
      title: "24/7 Service", 
      description: "Round-the-clock availability for all accommodation needs"
    },
    {
      icon: Star,
      title: "Hotel Partnerships",
      description: "Trusted relationships with military-friendly hotels across Slovakia"
    },
    {
      icon: Users,
      title: "Group Transport",
      description: "Accommodate single travelers or entire military units"
    }
  ];

  const accommodationAreas = [
    {
      name: "Banská Bystrica Hotels",
      distance: "25 km",
      time: "30 min",
      price: "40€",
      description: "City center hotels, business accommodations",
      icon: Hotel
    },
    {
      name: "Bratislava Hotels", 
      distance: "180 km",
      time: "2h 15min",
      price: "120€",
      description: "Capital city hotels, luxury accommodations",
      icon: Hotel
    },
    {
      name: "Airport Hotels",
      distance: "Variable",
      time: "Variable", 
      price: "From 35€",
      description: "Sliač, Bratislava, Vienna airport hotels",
      icon: Hotel
    },
    {
      name: "Thermal Spa Hotels",
      distance: "30-80 km",
      time: "45-90 min",
      price: "45-80€",
      description: "Wellness resorts, thermal spa accommodations",
      icon: Hotel
    }
  ];

  const services = [
    {
      title: "Airport Pickup to Hotels",
      description: "Direct transport from any airport to your accommodation",
      features: ["Flight tracking", "Meet & greet service", "Luggage assistance"]
    },
    {
      title: "Hotel to Base Transport",
      description: "Reliable morning transport from hotels to military base",
      features: ["Early morning availability", "Schedule coordination", "Group bookings"]
    },
    {
      title: "Multi-day Accommodation",
      description: "Support for extended stays and multiple hotel changes",
      features: ["Flexible scheduling", "Multiple stops", "Luggage transport"]
    },
    {
      title: "Emergency Transport",
      description: "24/7 emergency accommodation transport services",
      features: ["Immediate response", "Priority booking", "Crisis support"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <OptimizedImage 
              src="/lovable-uploads/logo.webp" 
              alt="US Army FRANKO TAXI Logo"
              className="h-12 w-auto"
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
            Military Accommodation Transport
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professional transport services connecting US military personnel with quality 
            accommodation across Slovakia. From airport pickups to hotel transfers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book Accommodation Transport
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

      {/* Accommodation Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Accommodation Transport Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accommodationAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <area.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{area.name}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{area.distance}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{area.time}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <span className="text-2xl font-bold text-primary">{area.price}</span>
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
            Why Choose Our Accommodation Service?
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

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Accommodation Transport Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Recommendations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Recommended Military-Friendly Hotels</h2>
            <p className="text-lg mb-6">
              We work with a network of hotels across Slovakia that understand and cater to the 
              specific needs of US military personnel, including:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Hotel className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Business Hotels</h3>
                  <p className="text-sm text-muted-foreground">Modern facilities, WiFi, business centers</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Group Accommodations</h3>
                  <p className="text-sm text-muted-foreground">Multiple rooms, unit bookings available</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Star className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Premium Options</h3>
                  <p className="text-sm text-muted-foreground">Luxury hotels, spa facilities, fine dining</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Accommodation Transport?</h2>
          <p className="text-xl mb-8">
            Let us handle your hotel transfers and accommodation transport needs in Slovakia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book Accommodation Transport
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

export default MilitaryAccommodation;
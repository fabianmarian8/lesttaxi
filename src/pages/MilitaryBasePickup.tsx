import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Shield, Clock, MapPin, Users, Star, CheckCircle } from "lucide-react";

const MilitaryBasePickup = () => {
  useSEO({
    title: "Base Gate Pickup | LEST TAXI",
    description: "Base gate pickup for US soldiers at Lest Base. 24/7 availability, security cleared drivers. Reliable military transport.",
    keywords: "Lest base gate pickup, US military taxi Slovakia, base transport service, American soldiers transport, military base pickup, Lest army base taxi",
    canonical: "https://www.lesttaxi.com/military-base-pickup",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Base Gate Pickup Service for US Military",
      "description": "Specialized pickup and transport service for American soldiers at Lest Military Base Slovakia",
      "provider": {
        "@type": "LocalBusiness",
        "name": "LEST TAXI",
        "telephone": "+421919040118"
      },
      "areaServed": "Lest Military Base, Slovakia",
      "serviceType": "Military Base Transport Service",
      "audience": {
        "@type": "Audience",
        "audienceType": "US Military Personnel"
      }
    }
  });

  const services = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Cleared",
      description: "Our drivers are familiar with base security protocols and procedures"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Available",
      description: "Round-the-clock service for all shifts and emergency transport needs"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "English Speaking",
      description: "All our drivers speak English and understand military terminology"
    }
  ];

  const pickupLocations = [
    {
      name: "Main Gate",
      description: "Primary entrance to Lest Military Base",
      features: ["Most common pickup point", "Easy identification", "Quick access"]
    },
    {
      name: "Secondary Gates",
      description: "Alternative base entrances",
      features: ["Less crowded", "Convenient for some areas", "Quick pickup"]
    },
    {
      name: "Inside Base",
      description: "Specific buildings or areas (with prior arrangement)",
      features: ["Direct pickup", "Weather protection", "Convenience"]
    }
  ];

  const commonDestinations = [
    "Zvolen City Center", "Banská Bystrica", "Europa Shopping Center", 
    "KFC/McDonald's", "Fitness Centers", "Train Station", "Bus Terminal", 
    "Hospitals", "Restaurants", "Bars & Pubs", "Local Attractions"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">LEST</span>
            <span className="text-2xl font-bold text-foreground">TAXI</span>
          </div>
          <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
            <a href="https://api.whatsapp.com/send?phone=421919040118" target="_blank" rel="noopener noreferrer">
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
            Base Gate Pickup Service
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Reliable pickup service directly from Lest Military Base gates. We understand military schedules, 
            security protocols, and provide 24/7 transport for American soldiers stationed in Slovakia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-white">
            <a href="https://api.whatsapp.com/send?phone=421919040118&text=Hi! I need pickup from Lest base gate." target="_blank" rel="noopener noreferrer">
                <Shield className="mr-2 h-5 w-5" />
                Request Base Pickup
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

      {/* Why Choose Us */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why US Military Chooses LEST TAXI</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pickup Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Base Pickup Locations</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pickupLocations.map((location, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                  <p className="text-muted-foreground mb-4">{location.description}</p>
                  <div className="space-y-2">
                    {location.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Destinations */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations from Base</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {commonDestinations.map((destination, index) => (
              <Card key={index} className="text-center border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-4">
                  <p className="font-medium text-sm">{destination}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Service Features</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Military-Friendly Service</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    Understanding of military schedules
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    Familiarity with base security procedures
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    Respect for military protocols
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    English-speaking drivers
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Reliable Transport</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    24/7 availability
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    Professional, clean vehicles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    GPS tracking and navigation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                    Fair, transparent pricing
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Base Pickup Works</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-sm text-muted-foreground">Call or WhatsApp us with your pickup request</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold mb-2">Confirm Details</h3>
              <p className="text-sm text-muted-foreground">We confirm pickup location, time, and destination</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold mb-2">Gate Pickup</h3>
              <p className="text-sm text-muted-foreground">Our driver meets you at the specified base gate</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="font-semibold mb-2">Safe Transport</h3>
              <p className="text-sm text-muted-foreground">Direct, safe transport to your destination</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Emergency & Off-Hours Service</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                  <p className="text-muted-foreground">We understand military schedules don't follow regular hours. Call us anytime, day or night.</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <Star className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Emergency Transport</h3>
                  <p className="text-muted-foreground">Medical appointments, emergency leave, or urgent transport needs - we're here to help.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Ride from Base?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether it's for duty, personal time, or emergency transport, we're your reliable 
            partner for all transportation needs from Lest Military Base.
          </p>
          <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-white">
            <a href="https://api.whatsapp.com/send?phone=421919040118&text=Hi! I need pickup from Lešť base gate." target="_blank" rel="noopener noreferrer">
              <Shield className="mr-2 h-5 w-5" />
              Request Base Pickup Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MilitaryBasePickup;
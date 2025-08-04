import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Users, Luggage, Shield, MessageCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import { BreadcrumbNavigation } from "@/components/BreadcrumbNavigation";

const Fleet = () => {
  useSEO({
    title: "Our Fleet - Professional Taxi Vehicles | LEST TAXI",
    description: "Modern and safe taxi fleet for military personnel. Sedans, SUVs, minivans available. Air conditioning, GPS tracking, professional drivers.",
    keywords: "taxi fleet Slovakia, military taxi vehicles, professional cars, safe transport, modern fleet",
    canonical: "https://lesttaxi.com/fleet"
  });

  const vehicles = [
    {
      name: "Toyota Corolla",
      type: "Economy Sedan",
      passengers: 4,
      luggage: "3 large bags",
      features: ["Air Conditioning", "GPS Navigation", "Phone Charging"],
      description: "Perfect for airport transfers and city trips"
    },
    {
      name: "Toyota Camry",
      type: "Premium Sedan", 
      passengers: 4,
      luggage: "4 large bags",
      features: ["Premium Comfort", "Extra Legroom", "Climate Control"],
      description: "Spacious and comfortable for longer journeys"
    },
    {
      name: "Toyota RAV4",
      type: "SUV",
      passengers: 4,
      luggage: "4 large bags",
      features: ["All-Weather Capable", "High Seating", "Cargo Space"],
      description: "Ideal for comfort and bulky equipment transport"
    }
  ];

  const equipment = [
    "Professional GPS Navigation Systems",
    "Mobile Phone Charging Stations",
    "Climate Control in All Vehicles", 
    "Child Safety Seats Available",
    "Emergency First Aid Kits",
    "24/7 Roadside Assistance",
    "Military Base Access Clearance",
    "Multilingual Drivers (EN/SK/DE)"
  ];

  const safety = [
    "Regular Vehicle Maintenance",
    "Comprehensive Insurance Coverage",
    "Professional Driver Training",
    "Background Checked Drivers",
    "Real-time Vehicle Tracking",
    "Emergency Communication Systems"
  ];

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
        "name": "About",
        "item": "https://lesttaxi.com/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Fleet",
        "item": "https://lesttaxi.com/fleet"
      }
    ]
  };

  // Product schemas for each vehicle
  const vehicleJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "LEST TAXI Vehicle Fleet",
    "description": "Professional taxi vehicles for military transport",
    "itemListElement": vehicles.map((vehicle, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": vehicle.name,
      "description": `${vehicle.type} - ${vehicle.description}`,
      "category": "Vehicle",
      "brand": {
        "@type": "Brand",
        "name": "Toyota"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "EUR",
        "description": `Available for taxi service - ${vehicle.passengers} passengers, ${vehicle.luggage}`
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Passenger Capacity",
          "value": vehicle.passengers
        },
        {
          "@type": "PropertyValue",
          "name": "Luggage Capacity",
          "value": vehicle.luggage
        },
        {
          "@type": "PropertyValue",
          "name": "Vehicle Type",
          "value": vehicle.type
        }
      ]
    }))
  };

  // Organization schema
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LEST TAXI",
    "description": "Professional taxi service specializing in military transport with modern fleet",
    "url": "https://lesttaxi.com",
    "logo": "https://lesttaxi.com/src/assets/logo-main.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+421919040118",
      "contactType": "customer service"
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Military Base Access Clearance"
    }
  };

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleJsonLd) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      
      <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <BreadcrumbNavigation />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(46,90%,45%)] text-white py-3 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <OptimizedImage 
              src="/src/assets/logo-main.webp"
              alt="LEST TAXI circular logo with military taxi car icon" 
              className="h-12 w-12 rounded-full bg-white p-1"
              width={48}
              height={48}
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

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[hsl(var(--military-gold))]/10 via-background to-[hsl(var(--military-green))]/10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            Our Vehicles & Equipment
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Modern, well-maintained fleet specifically chosen for military personnel comfort and safety. 
            From solo airport runs to group transport, we have the right vehicle for every journey.
          </p>
          <Badge variant="secondary" className="text-lg px-6 py-2 bg-[hsl(var(--military-gold))]/20">
            All vehicles under 5 years old • Professional maintenance
          </Badge>
        </div>
      </section>

      {/* Fleet Gallery */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Vehicle Fleet</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{vehicle.name}</CardTitle>
                      <CardDescription>{vehicle.type}</CardDescription>
                    </div>
                    <Car className="h-8 w-8 text-[hsl(var(--military-gold))]" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-[hsl(var(--military-gold))]" />
                      <span className="text-sm">{vehicle.passengers} passengers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Luggage className="h-5 w-5 text-[hsl(var(--military-gold))]" />
                      <span className="text-sm">{vehicle.luggage}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">{vehicle.description}</p>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm">Key Features:</h5>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Real Fleet Images */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <OptimizedImage 
                src="/lovable-uploads/6ca94396-9524-4fbf-a518-111877aa3f81.png" 
                alt="Professional white Toyota taxi vehicles lined up in formation ready for military transport service" 
                className="rounded-lg shadow-xl w-full mb-4"
                width={600}
                height={400}
                loading="lazy"
                responsive={true}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <h4 className="text-xl font-semibold mb-2">Professional Fleet</h4>
              <p className="text-muted-foreground">Clean, modern vehicles maintained to the highest standards</p>
            </div>
            <div className="text-center">
              <OptimizedImage 
                src="/lovable-uploads/83d79a32-aec1-47b1-b1a5-76fb5ba38e71.png" 
                alt="LEST TAXI white Toyota sedan parked at Europa Shopping Center parking area" 
                className="rounded-lg shadow-xl w-full mb-4"
                width={600}
                height={400}
                loading="lazy"
                responsive={true}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <h4 className="text-xl font-semibold mb-2">Local Expertise</h4>
              <p className="text-muted-foreground">We know every route and destination in Slovakia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Features */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--military-green))]/5 to-[hsl(var(--military-gold))]/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Standard Equipment</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-[hsl(var(--military-gold))]" />
                  Every Vehicle Includes
                </CardTitle>
                <CardDescription>Professional equipment for your comfort and safety</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {equipment.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[hsl(var(--military-gold))] mt-2 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Safety & Security</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-[hsl(var(--military-gold))]/10 to-[hsl(var(--military-green))]/10">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-[hsl(var(--military-gold))] mx-auto mb-4" />
                <CardTitle className="text-2xl">Professional Safety Standards</CardTitle>
                <CardDescription>Your security is our top priority</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {safety.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-[hsl(var(--military-gold))] mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-background rounded-lg text-center">
                  <p className="text-sm">
                    <strong>Military Base Clearance:</strong> All our drivers have proper clearance for base access and understand military security protocols.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vehicle Request */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--military-green))]/5 to-[hsl(var(--military-gold))]/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Vehicle</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Not sure which vehicle is right for your needs? Let us know your requirements and we'll recommend the perfect vehicle for your journey.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <Users className="h-8 w-8 text-[hsl(var(--military-gold))] mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Economy Choice</h4>
                <p className="text-sm text-muted-foreground">Toyota Corolla - 4 passengers</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <Users className="h-8 w-8 text-[hsl(var(--military-gold))] mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Premium Choice</h4>
                <p className="text-sm text-muted-foreground">Toyota Camry or RAV4 - 4 passengers</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--whatsapp-green))] to-[hsl(142,60%,45%)] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Ride?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your preferred vehicle now or ask for recommendations based on your needs
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-xl px-12 py-6 h-auto bg-white text-[hsl(var(--whatsapp-green))] hover:bg-white/90"
            onClick={() => window.open('https://wa.me/421919040118', '_blank')}
          >
            <MessageCircle className="h-6 w-6 mr-3" />
            Book Your Ride
          </Button>
        </div>
        </section>
      </div>
    </>
  );
};

export default Fleet;
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Clock, MapPin, Shield, Star } from "lucide-react";

const McdonaldsDelivery = () => {
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
        "name": "Food Delivery",
        "item": "https://lesttaxi.com/delivery"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "McDonald's Delivery",
        "item": "https://lesttaxi.com/mcdonalds-delivery"
      }
    ]
  };

  // DeliveryService schema
  const deliveryServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "DeliveryService",
    "name": "McDonald's Delivery for US Military",
    "description": "Specialized McDonald's delivery and pickup service for American soldiers at Lest Base Slovakia",
    "provider": {
      "@type": "LocalBusiness",
      "name": "LEST TAXI",
      "telephone": "+421 919 040 118",
      "url": "https://lesttaxi.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Lest Military Base, Slovakia"
    },
    "serviceType": "Food Delivery Service",
    "audience": {
      "@type": "Audience",
      "audienceType": "US Military Personnel"
    },
    "offers": {
      "@type": "Offer",
      "price": "45",
      "priceCurrency": "EUR",
      "description": "McDonald's delivery service to military base"
    },
    "hoursAvailable": "Mo-Su 00:00-23:59"
  };

  useSEO({
    title: "McDonald's Delivery | LEST TAXI",
    description: "McDonald's delivery for US soldiers at Lest Base. 24/7 delivery to base gate. Order your favorites via WhatsApp.",
    keywords: "McDonalds delivery military base, McDonalds pickup Lest, American food Slovakia, US soldiers McDonalds, military base food delivery, McDonalds Zvolen delivery",
    canonical: "https://www.lesttaxi.com/mcdonalds-delivery",
    jsonLd: deliveryServiceJsonLd
  });

  const mcdonaldsLocations = [
    { name: "McDonald's Zvolen", distance: "40 km", time: "30 min", address: "Zvolen Shopping Center" },
    { name: "McDonald's Banská Bystrica", distance: "70 km", time: "45 min", address: "Europa Shopping Center" },
    { name: "McDonald's Highway A1", distance: "45 km", time: "35 min", address: "Highway Rest Stop" },
  ];

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Military Friendly",
      description: "We understand base protocols and military schedules"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Service",
      description: "Available round the clock for all shifts and schedules"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Fresh Delivery",
      description: "Hot McDonald's meals delivered fresh to base gate"
    }
  ];

  const popularItems = [
    "Big Mac Meal", "Quarter Pounder", "Chicken McNuggets", "McChicken", 
    "Filet-O-Fish", "French Fries", "McFlurry", "McCafé Coffee"
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
            McDonald's Delivery for US Soldiers
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Missing that taste of home? We'll bring McDonald's straight to Lest base gate. 
            Order your favorite Big Mac, McNuggets, or any McDonald's meal - we've got you covered!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              <a href="https://wa.me/421919040118?text=Hi! I'd like to order McDonald's delivery to Lest base." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Order McDonald's via WhatsApp
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

      {/* McDonald's Locations */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Available McDonald's Locations</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mcdonaldsLocations.map((location, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {location.address}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {location.time} total delivery time
                    </div>
                    <div className="text-sm font-medium text-primary">
                      Distance: {location.distance}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular McDonald's Items</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {popularItems.map((item, index) => (
              <Card key={index} className="text-center border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-4">
                  <p className="font-medium">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6">
            And many more! Just tell us what you want and we'll get it for you.
          </p>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our McDonald's Delivery?</h2>
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

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How McDonald's Delivery Works</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold mb-2">Message Us</h3>
              <p className="text-sm text-muted-foreground">Send your McDonald's order via WhatsApp</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold mb-2">We Order</h3>
              <p className="text-sm text-muted-foreground">Our driver goes to McDonald's and places your order</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold mb-2">Quick Delivery</h3>
              <p className="text-sm text-muted-foreground">Fast delivery to Lest base gate</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="font-semibold mb-2">Enjoy!</h3>
              <p className="text-sm text-muted-foreground">Hot, fresh McDonald's at your location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Craving McDonald's?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get that taste of home delivered right to your base. Fast, reliable McDonald's delivery service for US military personnel.
          </p>
          <Button size="lg" asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            <a href="https://wa.me/421919040118?text=Hi! I'd like to order McDonald's delivery to Lest base." target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Order McDonald's Now
            </a>
          </Button>
        </div>
        </section>
      </div>
    </>
  );
};

export default McdonaldsDelivery;
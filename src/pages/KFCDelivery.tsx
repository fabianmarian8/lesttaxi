import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Clock, MapPin, Shield, Star } from "lucide-react";

const KFCDelivery = () => {
  useSEO({
    title: "KFC Delivery | LEST TAXI",
    description: "KFC delivery for US soldiers at Lest Base. Fast pickup and delivery to base gate. Order via WhatsApp.",
    keywords: "KFC delivery Lest base, KFC pickup Slovakia military, American fast food delivery, US soldiers KFC, military base food delivery, KFC Zvolen delivery",
    canonical: "https://www.lesttaxi.com/kfc-delivery",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "KFC Delivery for US Military",
      "description": "Specialized KFC delivery and pickup service for American soldiers at Lest Base Slovakia",
      "provider": {
        "@type": "LocalBusiness",
        "name": "LEST TAXI",
        "telephone": "+421 919 040 118"
      },
      "areaServed": "Lest Military Base, Slovakia",
      "serviceType": "Food Delivery Service",
      "audience": {
        "@type": "Audience",
        "audienceType": "US Military Personnel"
      }
    }
  });

  const kfcLocations = [
    { name: "KFC Zvolen", distance: "40 km", time: "15 min", address: "Zvolen City Center" },
    { name: "KFC Banská Bystrica", distance: "60 km", time: "30 min", address: "Europa Shopping Center" },
  ];

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Military Friendly",
      description: "We understand military schedules and base security protocols"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Available",
      description: "Order anytime - we're here for your shift schedules"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Base Gate Delivery",
      description: "Direct delivery to Lest base main gate for easy pickup"
    }
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
            KFC Delivery for US Military
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Craving KFC? We'll pick up your favorite meals from nearby KFC locations and deliver directly to Lest base gate. 
            Fast, reliable service for American soldiers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white">
              <a href="https://wa.me/421919040118?text=Hi! I'd like to order KFC delivery to Lest base." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Order KFC via WhatsApp
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

      {/* KFC Locations */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Available KFC Locations</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {kfcLocations.map((location, index) => (
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
                      {location.time} pickup + delivery time
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

      {/* Service Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our KFC Delivery?</h2>
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
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How KFC Delivery Works</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold mb-2">Order via WhatsApp</h3>
              <p className="text-sm text-muted-foreground">Send us your KFC order and delivery location at base</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold mb-2">We Pick Up</h3>
              <p className="text-sm text-muted-foreground">Our driver goes to KFC and places your order</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">Direct delivery to base gate for easy pickup</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="font-semibold mb-2">Enjoy Your Meal</h3>
              <p className="text-sm text-muted-foreground">Hot, fresh KFC delivered to your location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Some KFC?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't let hunger wait. Order your favorite KFC meals now and we'll deliver them fresh to Lest base gate.
          </p>
          <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-white">
            <a href="https://wa.me/421919040118?text=Hi! I'd like to order KFC delivery to Lest base." target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Order KFC Now via WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default KFCDelivery;
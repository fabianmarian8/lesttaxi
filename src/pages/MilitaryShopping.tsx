import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, ShoppingBag, MapPin, Clock, Dumbbell, Shield } from "lucide-react";

const MilitaryShopping = () => {
  useSEO({
    title: "Shopping Transport | LEST TAXI",
    description: "Shopping transport for US soldiers. Europa Shopping Center, fitness stores, protein supplements. Military-friendly trips.",
    keywords: "Europa Shopping Center transport military, shopping taxi Lest base, protein supplements delivery Slovakia, fitness shopping military, US soldiers shopping transport, military discount shopping",
    canonical: "https://www.lesttaxi.com/military-shopping",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Shopping Transport for US Military",
      "description": "Specialized shopping transport service for American soldiers at Lešť Base to shopping centers and stores in Slovakia",
      "provider": {
        "@type": "LocalBusiness",
        "name": "LEST TAXI",
        "telephone": "+421919040118"
      },
      "areaServed": "Lešť Military Base, Slovakia",
      "serviceType": "Shopping Transport Service",
      "audience": {
        "@type": "Audience",
        "audienceType": "US Military Personnel"
      }
    }
  });

  const shoppingDestinations = [
    {
      name: "Europa Shopping Center",
      distance: "60 km",
      time: "45 min",
      description: "Largest shopping mall in region with clothing, electronics, and more",
      features: ["200+ stores", "Food court", "Electronics", "Fashion brands"]
    },
    {
      name: "Fitness & Nutrition Stores",
      distance: "40-60 km",
      time: "30-45 min",
      description: "Specialized fitness stores for protein supplements and workout gear",
      features: ["Protein supplements", "Pre-workout", "Gym equipment", "Sports nutrition"]
    },
    {
      name: "Local Markets & Stores",
      distance: "30-45 km",
      time: "30-60 min",
      description: "Local grocery stores and specialty shops",
      features: ["Groceries", "Local products", "Electronics", "Personal items"]
    }
  ];

  const services = [
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Shopping Mall Trips",
      description: "Round trip transport to Europa Shopping Center and other malls"
    },
    {
      icon: <Dumbbell className="h-6 w-6" />,
      title: "Fitness Store Visits",
      description: "Transport to specialized fitness and nutrition stores"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Military Discounts",
      description: "We help you find stores that offer military discounts"
    }
  ];

  const popularStores = [
    "H&M", "Zara", "Nike", "Adidas", "MediaMarkt", "Tesco", "Kaufland", 
    "Decathlon", "Fitness stores", "Nutrition shops", "Electronics stores"
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
            Shopping Transport for US Military
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Need to go shopping? We provide reliable transport to Europa Shopping Center, fitness stores, 
            and all major shopping destinations. Perfect for protein supplements, clothing, electronics, and more!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="https://wa.me/421919040118?text=Hi! I need shopping transport from Lešť base." target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Book Shopping Trip
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

      {/* Shopping Destinations */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Shopping Destinations</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {shoppingDestinations.map((destination, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-muted-foreground mb-4">{destination.description}</p>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Distance: {destination.distance}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Travel time: {destination.time}
                    </div>
                  </div>
                  <div className="space-y-1">
                    {destination.features.map((feature, idx) => (
                      <div key={idx} className="text-sm bg-primary/10 text-primary px-2 py-1 rounded inline-block mr-2 mb-1">
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

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Shopping Transport Services</h2>
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

      {/* Popular Stores */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Stores & Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {popularStores.map((store, index) => (
              <Card key={index} className="text-center border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-4">
                  <p className="font-medium text-sm">{store}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Shopping Transport Works</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold mb-2">Book Your Trip</h3>
              <p className="text-sm text-muted-foreground">Tell us where you want to go shopping</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold mb-2">Pickup at Base</h3>
              <p className="text-sm text-muted-foreground">We pick you up at Lešť base gate</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold mb-2">Shop in Comfort</h3>
              <p className="text-sm text-muted-foreground">Take your time shopping at your destination</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="font-semibold mb-2">Return to Base</h3>
              <p className="text-sm text-muted-foreground">We bring you back to Lešť base with your purchases</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Special for US Military Personnel</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Group Shopping Trips</h3>
                  <p className="text-muted-foreground">Traveling with friends? We offer group rates for multiple soldiers going to the same destination.</p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Wait & Return Service</h3>
                  <p className="text-muted-foreground">For quick shopping trips, we can wait and bring you back immediately - no need to call again.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Shopping Trip?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need protein supplements, new clothes, or just want to explore Slovak shopping centers, 
            we'll get you there safely and comfortably.
          </p>
          <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <a href="https://wa.me/421919040118?text=Hi! I need shopping transport from Lešť base." target="_blank" rel="noopener noreferrer">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Book Your Shopping Trip Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MilitaryShopping;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Users, Car } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Airport Transportation",
      description: "Reliable transport to Budapest, Vienna, and Bratislava airports",
      destinations: ["Budapest Airport (BUD)", "Vienna Airport (VIE)", "Bratislava Airport (BTS)"],
      icon: <Car className="h-8 w-8" />
    },
    {
      title: "Local Cities",
      description: "Transportation to nearby Slovak cities",
      destinations: ["Zvolen", "Banská Bystrica", "Other local destinations"],
      icon: <MapPin className="h-8 w-8" />
    },
    {
      title: "Custom Destinations",
      description: "Need to go somewhere else? We'll get you there safely",
      destinations: ["Anywhere in Slovakia", "Cross-border travel", "Custom routes"],
      icon: <Users className="h-8 w-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">FRANKO TAXI</h1>
          <div className="flex items-center gap-4">
            <Phone className="h-5 w-5" />
            <span className="font-semibold">+421 XXX XXX XXX</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Professional Transportation Service
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Serving American Military Personnel at LEST Base
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Safe, reliable, and comfortable transportation to airports and cities across Slovakia and neighboring countries. 
            We understand the needs of military personnel and provide professional service you can trust.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8">
              Book Your Ride
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Get Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.destinations.map((dest, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        {dest}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">Why Choose FRANKO TAXI?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">24/7 Available</h4>
              <p className="text-muted-foreground">Round-the-clock service for your convenience</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Military Friendly</h4>
              <p className="text-muted-foreground">Understanding military schedules and needs</p>
            </div>
            <div className="text-center">
              <Car className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Modern Fleet</h4>
              <p className="text-muted-foreground">Clean, comfortable, and well-maintained vehicles</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Local Knowledge</h4>
              <p className="text-muted-foreground">Expert knowledge of routes and destinations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary text-primary-foreground py-16 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">Ready to Book Your Ride?</h3>
          <p className="text-xl mb-8 opacity-90">
            Contact us 24/7 for immediate booking or to get a quote
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 mb-3" />
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p>+421 XXX XXX XXX</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 mb-3" />
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p>info@frankotaxi.sk</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 mb-3" />
              <h4 className="font-semibold mb-2">Service Area</h4>
              <p>LEST Base & Beyond</p>
            </div>
          </div>
          <Button variant="secondary" size="lg" className="text-lg px-8">
            Contact Us Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-8 px-6">
        <div className="container mx-auto text-center">
          <h4 className="font-bold text-lg mb-2">FRANKO TAXI</h4>
          <p className="text-muted-foreground">
            Professional transportation service for LEST Base personnel
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

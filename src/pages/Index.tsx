import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Users, Car, MessageCircle, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactForm from "@/components/ContactForm";

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
      destinations: ["Zvolen", "Banská Bystrica", "Europa Shopping Center", "Other local destinations"],
      icon: <MapPin className="h-8 w-8" />
    },
    {
      title: "Food Delivery & Pickup Service",
      description: "McDonald's & KFC delivery, tennis court pickup near upper gate",
      destinations: ["McDonald's delivery", "KFC delivery", "Tennis court pickup", "Base transportation"],
      icon: <Users className="h-8 w-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Military Pattern Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/lovable-uploads/08bb4537-9151-4684-bf39-abc2900ea374.png')`,
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Header with Military Gold Theme */}
      <header className="bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(46,90%,45%)] text-white py-3 px-6 relative z-10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <img 
            src="/lovable-uploads/08bb4537-9151-4684-bf39-abc2900ea374.png" 
            alt="FRANKO TAXI Logo" 
            className="h-24 w-24 rounded-full bg-white p-2"
          />
          <Link to="/help">
            <Button variant="destructive" size="sm" className="bg-red-600 hover:bg-red-700">
              <HelpCircle className="h-4 w-4 mr-2" />
              Need help?
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section with Promotional Images */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--military-gold))]/10 via-background to-[hsl(var(--military-green))]/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="text-left">
              <h2 className="text-5xl font-bold mb-6 text-foreground bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(var(--military-green))] bg-clip-text text-transparent">
                READY TO GO from base?
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                Professional Transportation Service for American Military Personnel
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                24h/7days always ready • verified and fast taxi • Tennis court pickup • Food delivery
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button 
                  variant="whatsapp" 
                  size="lg" 
                  className="text-lg px-8 shadow-xl"
                  onClick={() => window.open('https://wa.me/421919040118', '_blank')}
                >
                  <MessageCircle className="h-6 w-6 mr-2" />
                  WhatsApp Now
                </Button>
                <Button variant="default" size="lg" className="text-lg px-8">
                  Call +421 919 040 118
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/d06e156c-11ad-4666-802d-c6279072dc7f.png" 
                alt="FRANKO TAXI Service Banner" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--military-green))]/5 to-[hsl(var(--military-gold))]/5">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">Book Your Ride</h3>
          <ContactForm />
        </div>
      </section>

      {/* Services Section with Real Photos */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-shadow duration-300 border-2 border-[hsl(var(--military-gold))]/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 text-[hsl(var(--military-gold))]">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.destinations.map((dest, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-[hsl(var(--military-gold))]" />
                        {dest}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Fleet Images */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <img 
                src="/lovable-uploads/6ca94396-9524-4fbf-a518-111877aa3f81.png" 
                alt="FRANKO TAXI Fleet - Professional Toyota Vehicles" 
                className="rounded-lg shadow-xl w-full mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">Modern Fleet</h4>
              <p className="text-muted-foreground">Clean, comfortable Toyota vehicles for airport transfers</p>
            </div>
            <div className="text-center">
              <img 
                src="/lovable-uploads/83d79a32-aec1-47b1-b1a5-76fb5ba38e71.png" 
                alt="FRANKO TAXI at Europa Shopping Center" 
                className="rounded-lg shadow-xl w-full mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">Local Knowledge</h4>
              <p className="text-muted-foreground">We know all the best routes to shopping centers and destinations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--military-green))]/5 to-[hsl(var(--military-gold))]/5">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">Why Choose FRANKO TAXI?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 text-[hsl(var(--military-gold))] mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">24/7 Available</h4>
              <p className="text-muted-foreground">Always ready, 7 days a week</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-[hsl(var(--military-gold))] mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Military Friendly</h4>
              <p className="text-muted-foreground">Understanding military schedules and base protocols</p>
            </div>
            <div className="text-center">
              <Car className="h-12 w-12 text-[hsl(var(--military-gold))] mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Modern Fleet</h4>
              <p className="text-muted-foreground">Clean, comfortable Toyota vehicles</p>
            </div>
            <div className="text-center">
              <MessageCircle className="h-12 w-12 text-[hsl(var(--military-gold))] mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">WhatsApp Ready</h4>
              <p className="text-muted-foreground">Instant communication for quick bookings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Large WhatsApp CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--whatsapp-green))] to-[hsl(142,60%,45%)] text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">Need a Ride Right Now?</h3>
          <p className="text-xl mb-8 opacity-90">
            Click the button below to chat with us on WhatsApp instantly!
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-2xl px-12 py-6 h-auto shadow-2xl bg-white text-[hsl(var(--whatsapp-green))] hover:bg-white/90"
            onClick={() => window.open('https://wa.me/421919040118', '_blank')}
          >
            <MessageCircle className="h-8 w-8 mr-4" />
            Chat on WhatsApp
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-[hsl(var(--military-green))] to-[hsl(120,45%,20%)] text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">Contact FRANKO TAXI</h3>
          <p className="text-xl mb-8 opacity-90">
            Professional transportation service for LEST Base personnel
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 mb-3" />
              <h4 className="font-semibold mb-2">Call / WhatsApp</h4>
              <p className="text-lg">+421 919 040 118</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 mb-3" />
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p>fabianmarian8@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 mb-3" />
              <h4 className="font-semibold mb-2">Service Area</h4>
              <p>LEST Base & All of Slovakia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(var(--military-green))]/80 py-8 px-6 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src="/lovable-uploads/08bb4537-9151-4684-bf39-abc2900ea374.png" 
              alt="FRANKO TAXI Logo" 
              className="h-10 w-10 rounded-full bg-white p-1"
            />
            <h4 className="font-bold text-lg">FRANKO TAXI</h4>
          </div>
          <p className="text-white/80 mb-2">
            Professional transportation service for American military personnel at LEST Base
          </p>
          <p className="text-white/60 text-sm">
            24/7 • Tennis Court Pickup • Airport Transfers • Food Delivery • Verified & Fast
          </p>
        </div>
      </footer>
      
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
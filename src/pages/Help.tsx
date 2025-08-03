import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Military Pattern Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/lovable-uploads/2ad8f836-e1ce-40fc-9862-88769a6f124f.png')`,
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(46,90%,45%)] text-white py-4 px-6 relative z-10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/2ad8f836-e1ce-40fc-9862-88769a6f124f.png"
              alt="LEST TAXI Professional Military Transport Service" 
              className="h-10 w-10 rounded-full bg-white p-1"
            />
            <h1 className="text-xl font-bold tracking-wider">FRANKO TAXI</h1>
          </div>
        </div>
      </header>

      {/* Help Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-foreground bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(var(--military-green))] bg-clip-text text-transparent">
              We're Here to Help
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trusted local guide for everything you need at LEST Base
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-xl border-2 border-[hsl(var(--military-gold))]/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 text-[hsl(var(--military-gold))]">
                  <MapPin className="h-12 w-12" />
                </div>
                <CardTitle className="text-2xl">Travel Planning & Tips</CardTitle>
                <CardDescription>Expert local knowledge at your service</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Looking for advice on where to go for your next adventure? Whether you're planning a weekend trip, 
                  exploring Slovakia's beautiful landscapes, or visiting nearby countries, we're here to help.
                </p>
                <p className="text-muted-foreground">
                  Tell us what you're interested in - culture, nature, nightlife, history, or adventure - 
                  and we'll provide personalized recommendations and help you plan the perfect trip.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-2 border-[hsl(var(--military-gold))]/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 text-[hsl(var(--military-gold))]">
                  <Heart className="h-12 w-12" />
                </div>
                <CardTitle className="text-2xl">Local Services & Information</CardTitle>
                <CardDescription>Connecting you with trusted local businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Need to know where to get quality services at fair prices? Looking for a reputable tattoo artist, 
                  reliable mechanic, or just need something explained about local customs and procedures?
                </p>
                <p className="text-muted-foreground">
                  As your local connection, we're here to guide you to trusted businesses and help you 
                  navigate life in Slovakia with confidence.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Options */}
          <Card className="shadow-2xl border-2 border-[hsl(var(--military-gold))]/20">
            <CardHeader className="text-center bg-gradient-to-r from-[hsl(var(--military-gold))]/10 to-[hsl(var(--military-green))]/10">
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
              <CardDescription>We're available 24/7 to help you with anything you need</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="whatsapp" 
                  size="lg" 
                  className="text-lg px-8"
                  onClick={() => window.open('https://wa.me/421919040118', '_blank')}
                >
                  <MessageCircle className="h-6 w-6 mr-2" />
                  Chat on WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8"
                  onClick={() => window.open('tel:+421919040118')}
                >
                  Call +421 919 040 118
                </Button>
              </div>
              <p className="text-center text-muted-foreground mt-4">
                Don't hesitate to reach out - we're always happy to help our fellow service members!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Help;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Heart, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Help = () => {
  const handleWhatsAppClick = () => {
    console.log("WhatsApp clicked");
    window.open('https://wa.me/421919040118', '_blank');
  };

  const handlePhoneClick = () => {
    console.log("Phone clicked");
    window.open('tel:+421919040118');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Military Pattern Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/lovable-uploads/08bb4537-9151-4684-bf39-abc2900ea374.png')`,
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
              src="/lovable-uploads/08bb4537-9151-4684-bf39-abc2900ea374.png" 
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
            <h1 className="text-4xl font-bold mb-4 text-white bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(var(--military-green))] bg-clip-text text-transparent">
              We're Here to Help
            </h1>
            <p className="text-xl text-gray-300">
              Your trusted local guide for everything you need at LEST Base
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-xl border-2 border-[hsl(var(--military-gold))]/20 bg-gray-900/50 backdrop-blur">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 text-[hsl(var(--military-gold))]">
                  <MapPin className="h-12 w-12" />
                </div>
                <CardTitle className="text-2xl text-white">Travel Planning & Tips</CardTitle>
                <CardDescription className="text-gray-300">Expert local knowledge at your service</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Looking for advice on where to go for your next adventure? Whether you're planning a weekend trip, 
                  exploring Slovakia's beautiful landscapes, or visiting nearby countries, we're here to help.
                </p>
                <p className="text-gray-300">
                  Tell us what you're interested in - culture, nature, nightlife, history, or adventure - 
                  and we'll provide personalized recommendations and help you plan the perfect trip.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-2 border-[hsl(var(--military-gold))]/20 bg-gray-900/50 backdrop-blur">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 text-[hsl(var(--military-gold))]">
                  <Heart className="h-12 w-12" />
                </div>
                <CardTitle className="text-2xl text-white">Local Services & Information</CardTitle>
                <CardDescription className="text-gray-300">Connecting you with trusted local businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Need to know where to get quality services at fair prices? Looking for a reputable tattoo artist, 
                  reliable mechanic, or just need something explained about local customs and procedures?
                </p>
                <p className="text-gray-300">
                  As your local connection, we're here to guide you to trusted businesses and help you 
                  navigate life in Slovakia with confidence.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-8">We're available 24/7 to help you with anything you need</p>
          </div>

          {/* Standalone Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="whatsapp" 
              size="lg" 
              className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700 text-white shadow-2xl"
              onClick={handleWhatsAppClick}
              type="button"
            >
              <MessageCircle className="h-6 w-6 mr-2" />
              Chat on WhatsApp
            </Button>

            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black shadow-2xl"
              onClick={handlePhoneClick}
              type="button"
            >
              <Phone className="h-6 w-6 mr-2" />
              Call +421 919 040 118
            </Button>
          </div>

          <p className="text-center text-gray-300 mt-8">
            Don't hesitate to reach out - we're always happy to help our fellow service members!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Help;
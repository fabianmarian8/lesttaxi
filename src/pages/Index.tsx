import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Car, MessageCircle, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ContactForm from "@/components/ContactForm";


const Index = () => {

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
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
        <nav className="container mx-auto flex justify-between items-center">
          <img 
            src="/lovable-uploads/08bb4537-9151-4684-bf39-abc2900ea374.png" 
            alt="FRANKO TAXI Logo" 
            className="h-24 w-24 rounded-full bg-white p-2"
          />
          <Link to="/help">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-8 px-3 text-xs bg-red-600 hover:bg-red-700 text-white">
              <HelpCircle className="h-4 w-4 mr-2" />
              Need help?
            </button>
          </Link>
        </nav>
      </header>

      {/* Hero Section with Promotional Images */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--military-gold))]/10 via-background to-[hsl(var(--military-green))]/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="text-left">
              <h1 className="text-5xl font-bold mb-6 text-foreground bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(var(--military-green))] bg-clip-text text-transparent">
                READY TO GO from base?
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Professional Transportation Service for American Military Personnel
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                24h/7days always ready • verified and fast taxi • Tennis court pickup • Food delivery
              </p>
              <div className="flex gap-4 flex-wrap">
                <a 
                  href="https://wa.me/421919040118"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-12 px-8 shadow-xl bg-[hsl(var(--whatsapp-green))] text-white hover:bg-[hsl(var(--whatsapp-green))]/90"
                >
                  <MessageCircle className="h-6 w-6 mr-2" />
                  WhatsApp Now
                </a>
                <a 
                  href="tel:+421919040118"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-12 px-8 bg-primary text-primary-foreground shadow hover:bg-primary/90"
                >
                  Call
                </a>
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

      {/* Our Services Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Car className="h-12 w-12 text-[hsl(var(--military-gold))] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Airport Transfers</h3>
              <p className="text-muted-foreground">Reliable transportation to Budapest, Vienna, and Bratislava airports with professional service.</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-[hsl(var(--military-gold))] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Military Base Taxi</h3>
              <p className="text-muted-foreground">Specialized taxi service for military personnel with base protocol understanding.</p>
            </div>
            <div className="text-center">
              <MessageCircle className="h-12 w-12 text-[hsl(var(--military-gold))] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">City Rides</h3>
              <p className="text-muted-foreground">Local transportation to cities, shopping centers, and other destinations across Slovakia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--military-green))]/5 to-[hsl(var(--military-gold))]/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Contact Us</h2>
          <ContactForm />
          
          <div className="flex justify-center gap-8 mt-12">
            <a 
              href="tel:+421919040118"
              className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-white/50 transition-colors"
            >
              <Phone className="h-8 w-8 text-[hsl(var(--military-gold))]" />
              <span className="text-sm font-medium">Call</span>
            </a>
            <a 
              href="https://wa.me/421919040118"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-white/50 transition-colors"
            >
              <MessageCircle className="h-8 w-8 text-[hsl(var(--whatsapp-green))]" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
            <a 
              href="mailto:fabianmarian8@gmail.com"
              className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-white/50 transition-colors"
            >
              <Mail className="h-8 w-8 text-[hsl(var(--military-gold))]" />
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[hsl(var(--military-green))]/80 py-8 px-6 text-white">
        <div className="container mx-auto text-center">
          <p>© 2024 Franko Taxi | All rights reserved.</p>
        </div>
      </footer>
      
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
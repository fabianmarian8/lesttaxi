import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";

export const SiteFooter = () => {
  const mainServices = [
    { title: "Base Taxi Service", href: "/base-taxi", description: "24/7 pickup from Lešť Base" },
    { title: "Airport Transport", href: "/airport-transport-slovakia", description: "Budapest, Vienna, Bratislava" },
    { title: "Taxi Banská Bystrica", href: "/taxi-banska-bystrica", description: "City center & shopping" },
    { title: "Budapest Transport", href: "/budapest-military-transport", description: "Direct transfers to Budapest" },
  ];

  const militaryServices = [
    { title: "Military Base Pickup", href: "/military-base-pickup", description: "Gate pickup service" },
    { title: "Military Shopping", href: "/military-shopping", description: "Shopping assistance" },
    { title: "Military Accommodation", href: "/military-accommodation-transport", description: "Lodging transport" },
    { title: "Airport Military", href: "/airport-military", description: "Military airport transfers" },
  ];

  const otherServices = [
    { title: "Taxi Bratislava", href: "/taxi-bratislava", description: "Capital city transport" },
    { title: "Taxi Vienna Airport", href: "/taxi-vienna-airport", description: "VIE airport transfers" },
    { title: "Taxi Budapest Airport", href: "/taxi-budapest-airport", description: "BUD airport transfers" },
    { title: "Taxi Staré Mesto", href: "/taxi-stare-mesto", description: "Old Town Bratislava" },
  ];

  const importantPages = [
    { title: "Price List", href: "/price-list", description: "Fixed rate pricing" },
    { title: "Fleet", href: "/fleet", description: "Our vehicles" },
    { title: "FAQ", href: "/faq", description: "Common questions" },
    { title: "Help", href: "/help", description: "Support center" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[hsl(var(--combat-green))]/20 to-[hsl(var(--military-gold))]/10 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <OptimizedImage 
                src="/lovable-uploads/08bb4537-9151-4684-bf39-abc2900ea374.png" 
                alt="LEST TAXI logo" 
                className="h-12 w-12 rounded-full"
                width={48}
                height={48}
              />
              <div>
                <h3 className="text-xl font-bold text-[hsl(var(--military-gold))]">LEST TAXI</h3>
                <p className="text-sm text-muted-foreground">Military Transport Service</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[hsl(var(--military-gold))]" />
                <span className="text-sm">+421 919 040 118</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-[hsl(var(--whatsapp-green))]" />
                <span className="text-sm">WhatsApp 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[hsl(var(--military-gold))]" />
                <span className="text-sm">contact@lesttaxi.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[hsl(var(--military-gold))]" />
                <span className="text-sm">Lešť, Slovakia 96263</span>
              </div>
            </div>
          </div>

          {/* Main Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[hsl(var(--military-gold))]">Main Services</h4>
            <ul className="space-y-3">
              {mainServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="block hover:text-[hsl(var(--military-gold))] transition-colors"
                  >
                    <div className="text-sm font-medium">{service.title}</div>
                    <div className="text-xs text-muted-foreground">{service.description}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Military Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[hsl(var(--military-gold))]">Military Services</h4>
            <ul className="space-y-3">
              {militaryServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="block hover:text-[hsl(var(--military-gold))] transition-colors"
                  >
                    <div className="text-sm font-medium">{service.title}</div>
                    <div className="text-xs text-muted-foreground">{service.description}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Services & Pages */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[hsl(var(--military-gold))]">Airport & City Transport</h4>
            <ul className="space-y-2 mb-6">
              {otherServices.slice(0, 3).map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href} 
                    className="text-sm hover:text-[hsl(var(--military-gold))] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-semibold mb-4 text-[hsl(var(--military-gold))]">Information</h4>
            <ul className="space-y-2">
              {importantPages.map((page, index) => (
                <li key={index}>
                  <Link 
                    to={page.href} 
                    className="text-sm hover:text-[hsl(var(--military-gold))] transition-colors"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <Card className="tactical-card p-6 mb-8">
          <h4 className="text-lg font-semibold mb-4 text-[hsl(var(--military-gold))]">Service Areas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <h5 className="font-medium mb-2">Slovakia</h5>
              <ul className="space-y-1 text-muted-foreground">
                <li>Lešť Military Base</li>
                <li>Banská Bystrica</li>
                <li>Bratislava</li>
                <li>Zvolen</li>
                <li>Sliač Airport</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">Hungary</h5>
              <ul className="space-y-1 text-muted-foreground">
                <li>Budapest</li>
                <li>Budapest Airport (BUD)</li>
                <li>Debrecen</li>
                <li>Miskolc</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">Austria</h5>
              <ul className="space-y-1 text-muted-foreground">
                <li>Vienna</li>
                <li>Vienna Airport (VIE)</li>
                <li>Salzburg</li>
                <li>Graz</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">Czech Republic</h5>
              <ul className="space-y-1 text-muted-foreground">
                <li>Prague</li>
                <li>Brno</li>
                <li>Ostrava</li>
                <li>Plzen</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 LEST TAXI. Professional military transport service in Slovakia.
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className="hover:text-[hsl(var(--military-gold))] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-[hsl(var(--military-gold))] transition-colors">
              Terms of Service
            </Link>
            <Link to="/feedback" className="hover:text-[hsl(var(--military-gold))] transition-colors">
              Feedback
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

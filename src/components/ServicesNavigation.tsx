
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowRight, Car, Plane, MapPin, Shield } from "lucide-react";

interface Service {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

export const ServicesNavigation = () => {
  const services: Service[] = [
    {
      title: "Airport Transfer Slovakia",
      href: "/airport-transfer",
      description: "Professional transfers to Vienna, Budapest, and Bratislava airports",
      icon: <Plane className="h-4 w-4" />,
      category: "airport"
    },
    {
      title: "Taxi Banská Bystrica",
      href: "/taxi-banska-bystrica", 
      description: "City center transport and shopping areas",
      icon: <Car className="h-4 w-4" />,
      category: "city"
    },
    {
      title: "Military Base Pickup",
      href: "/military-base-pickup",
      description: "Gate pickup service for military personnel",
      icon: <Shield className="h-4 w-4" />,
      category: "military"
    },
    {
      title: "Taxi Bratislava",
      href: "/taxi-bratislava",
      description: "Capital city transport services",
      icon: <MapPin className="h-4 w-4" />,
      category: "city"
    },
    {
      title: "Vienna Airport Transfer",
      href: "/taxi-vienna-airport",
      description: "Direct transfers to Vienna International Airport (VIE)",
      icon: <Plane className="h-4 w-4" />,
      category: "airport"
    },
    {
      title: "Military Shopping Transport",
      href: "/military-shopping",
      description: "Shopping assistance and transport for military personnel",
      icon: <Car className="h-4 w-4" />,
      category: "military"
    }
  ];

  return (
    <section className="py-6 px-4 bg-gradient-to-br from-[hsl(var(--military-gold))]/10 to-[hsl(var(--combat-green))]/5">
      <div className="container mx-auto">
        <h2 className="text-lg sm:text-2xl font-bold text-center mb-4 combat-text">
          Naše taxi služby na Slovensku
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service, index) => (
            <Card key={index} className="tactical-card group hover:shadow-lg transition-all duration-300 p-3">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] flex items-center justify-center text-black flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-[hsl(var(--military-gold))] transition-colors">
                    <Link to={service.href} className="hover:underline">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    to={service.href}
                    className="inline-flex items-center text-xs font-medium text-[hsl(var(--military-gold))] hover:text-[hsl(var(--elite-gold))] transition-colors"
                  >
                    Viac informácií
                    <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Important Pages Section */}
        <div className="mt-6 text-center">
          <h3 className="text-base font-semibold mb-3 text-[hsl(var(--military-gold))]">
            Dôležité stránky
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            <Link 
              to="/price-list" 
              className="inline-flex items-center px-3 py-1.5 bg-[hsl(var(--muted))] hover:bg-[hsl(var(--military-gold))]/20 rounded-lg text-xs font-medium transition-colors hover:text-[hsl(var(--military-gold))]"
            >
              Cenník taxi služieb
              <ArrowRight className="h-3 w-3 ml-1" />
            </Link>
            <Link 
              to="/fleet" 
              className="inline-flex items-center px-3 py-1.5 bg-[hsl(var(--muted))] hover:bg-[hsl(var(--military-gold))]/20 rounded-lg text-xs font-medium transition-colors hover:text-[hsl(var(--military-gold))]"
            >
              Naša flotila vozidiel
              <ArrowRight className="h-3 w-3 ml-1" />
            </Link>
            <Link 
              to="/faq" 
              className="inline-flex items-center px-3 py-1.5 bg-[hsl(var(--muted))] hover:bg-[hsl(var(--military-gold))]/20 rounded-lg text-xs font-medium transition-colors hover:text-[hsl(var(--military-gold))]"
            >
              Často kladené otázky
              <ArrowRight className="h-3 w-3 ml-1" />
            </Link>
            <Link 
              to="/sitemap" 
              className="inline-flex items-center px-3 py-1.5 bg-[hsl(var(--muted))] hover:bg-[hsl(var(--military-gold))]/20 rounded-lg text-xs font-medium transition-colors hover:text-[hsl(var(--military-gold))]"
            >
              Mapa stránok
              <ArrowRight className="h-3 w-3 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

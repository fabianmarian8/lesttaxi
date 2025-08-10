
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface RelatedService {
  title: string;
  href: string;
  description: string;
  category: string;
}

interface RelatedServicesProps {
  currentService?: string;
  category?: 'military' | 'airport' | 'city' | 'transport';
}

export const RelatedServices = ({ currentService, category = 'transport' }: RelatedServicesProps) => {
  const allServices: RelatedService[] = [
    // Military Services
    { title: "Base Taxi Service", href: "/base-taxi", description: "24/7 pickup from Lešť Military Base", category: "military" },
    { title: "Military Base Pickup", href: "/military-base-pickup", description: "Gate pickup service for military personnel", category: "military" },
    { title: "Military Shopping", href: "/military-shopping", description: "Shopping assistance and transport", category: "military" },
    { title: "Military Accommodation", href: "/military-accommodation-transport", description: "Transport to lodging facilities", category: "military" },
    
    // Airport Services
    { title: "Airport Transport Slovakia", href: "/airport-transport-slovakia", description: "Professional airport transfers to all major airports", category: "airport" },
    { title: "Taxi Vienna Airport", href: "/taxi-vienna-airport", description: "Direct transfers to Vienna International Airport", category: "airport" },
    { title: "Taxi Budapest Airport", href: "/taxi-budapest-airport", description: "Transport to Budapest Ferenc Liszt Airport", category: "airport" },
    { title: "Airport Military", href: "/airport-military", description: "Specialized military airport transfers", category: "airport" },
    
    // City Transport
    { title: "Taxi Banská Bystrica", href: "/taxi-banska-bystrica", description: "City center and shopping areas", category: "city" },
    { title: "Taxi Bratislava", href: "/taxi-bratislava", description: "Capital city transport services", category: "city" },
    { title: "Taxi Staré Mesto", href: "/taxi-stare-mesto", description: "Old Town Bratislava transport", category: "city" },
    { title: "Budapest Transport", href: "/budapest-military-transport", description: "Complete Budapest transportation", category: "city" },
  ];

  // Filter services based on category and exclude current service
  const getRelatedServices = () => {
    let filtered = allServices.filter(service => service.href !== currentService);
    
    if (category === 'military') {
      return filtered.filter(service => service.category === 'military').slice(0, 3);
    } else if (category === 'airport') {
      return filtered.filter(service => service.category === 'airport').slice(0, 3);
    } else if (category === 'city') {
      return filtered.filter(service => service.category === 'city').slice(0, 3);
    } else {
      // Mix of different categories
      return [
        ...filtered.filter(service => service.category === 'military').slice(0, 1),
        ...filtered.filter(service => service.category === 'airport').slice(0, 1),
        ...filtered.filter(service => service.category === 'city').slice(0, 1),
      ];
    }
  };

  const relatedServices = getRelatedServices();

  if (relatedServices.length === 0) return null;

  return (
    <section className="py-6 px-4 bg-gradient-to-br from-[hsl(var(--military-gold))]/5 to-[hsl(var(--combat-green))]/5">
      <div className="container mx-auto">
        <h2 className="text-lg sm:text-2xl font-bold text-center mb-4 combat-text">
          Related Transport Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {relatedServices.map((service, index) => (
            <Card key={index} className="tactical-card group hover:shadow-lg transition-all duration-300 p-3">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm sm:text-base group-hover:text-[hsl(var(--military-gold))] transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0 pb-2">
                <Link 
                  to={service.href}
                  className="inline-flex items-center text-xs font-medium text-[hsl(var(--military-gold))] hover:text-[hsl(var(--elite-gold))] transition-colors"
                >
                  Learn More
                  <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View All Services Link */}
        <div className="text-center mt-6">
          <Link 
            to="/price-list"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] text-black font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm"
          >
            View All Services & Prices
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, MessageCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";

const PriceList = () => {
  useSEO({
    title: "Taxi Prices Slovakia - Transparent Rates | LEST TAXI",
    description: "Transparent taxi pricing for military transport in Slovakia. Fixed rates, no hidden fees. Airport transfers, base transport, local services. Check our price list.",
    keywords: "taxi prices Slovakia, Lešť taxi rates, airport transfer prices, military taxi cost, transparent pricing",
    canonical: "https://lesttaxi.com/price-list"
  });

  const destinations = [
    { name: "Sliač Airport", distance: "15 km", price: 55, time: "40 min" },
    { name: "Zvolen City Center", distance: "20 km", price: 45, time: "30 min" },
    { name: "Banská Bystrica", distance: "45 km", price: 70, time: "45 min" },
    { name: "Bratislava", distance: "235 km", price: 220, time: "2.5 hours" },
    { name: "Budapest Airport", distance: "180 km", price: 200, time: "2.5 hours" },
    { name: "Vienna Airport", distance: "283 km", price: 290, time: "3 hours" },
    { name: "Bratislava Airport", distance: "235 km", price: 220, time: "2.5 hours" },
  ];

  const localServices = [
    { service: "McDonald's Delivery", price: 45, description: "Hot food delivery to base" },
    { service: "KFC Delivery", price: 45, description: "Fresh chicken delivery" },
    { service: "Europa Shopping Center", price: 45, description: "Shopping trip transport" },
    { service: "Hourly Rate", price: 25, description: "Per hour for multiple stops" },
    { service: "Waiting One Hour", price: 20, description: "Driver waiting time per hour" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(46,90%,45%)] text-white py-3 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/482d3699-3421-4177-9fdd-3c3efbd47138.png" 
              alt="LEST TAXI Professional Military Transport Service" 
              className="h-12 w-12 rounded-full bg-white p-1"
            />
            <span className="font-bold text-lg">LEST TAXI</span>
          </Link>
          <Button variant="whatsapp" size="sm" onClick={() => window.open('https://wa.me/421919040118', '_blank')}>
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[hsl(var(--military-gold))]/10 via-background to-[hsl(var(--military-green))]/10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            Transparent Pricing – No Hidden Fees
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Fixed rates for all destinations. What we quote is what you pay – including fuel, tolls, and professional service. 
            Special military discounts available for bulk bookings.
          </p>
          <Badge variant="secondary" className="text-lg px-6 py-2 bg-[hsl(var(--military-gold))]/20">
            All prices in EUR
          </Badge>
        </div>
      </section>

      {/* Main Destinations */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Main Destinations from Lešť Base</h2>
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-[hsl(var(--military-gold))]" />
                  Long Distance Transport
                </CardTitle>
                <CardDescription>Fixed rates to major cities and airports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Destination</th>
                        <th className="text-left py-3">Distance</th>
                        <th className="text-left py-3">Travel Time</th>
                        <th className="text-right py-3">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {destinations.map((dest, index) => (
                        <tr key={index} className="border-b border-border/50 hover:bg-muted/50">
                          <td className="py-4 font-medium">{dest.name}</td>
                          <td className="py-4 text-muted-foreground">{dest.distance}</td>
                          <td className="py-4 text-muted-foreground">{dest.time}</td>
                          <td className="py-4 text-right">
                            <span className="text-2xl font-bold text-[hsl(var(--military-gold))]">
                              €{dest.price}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Services */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--military-green))]/5 to-[hsl(var(--military-gold))]/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Local Services & Delivery</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-[hsl(var(--military-gold))]" />
                  Base Services
                </CardTitle>
                <CardDescription>Quick local transport and delivery services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {localServices.map((service, index) => (
                    <div key={index} className="flex justify-between items-center p-4 rounded-lg border border-border">
                      <div>
                        <h4 className="font-semibold">{service.service}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-bold text-[hsl(var(--military-gold))]">
                          €{service.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bulk Discount */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Lest Taxi?</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-[hsl(var(--military-gold))]/10 to-[hsl(var(--military-green))]/10">
              <CardHeader className="text-center">
                <Star className="h-12 w-12 text-[hsl(var(--military-gold))] mx-auto mb-4" />
                <CardTitle className="text-2xl">Professional Taxi Service</CardTitle>
                <CardDescription>Reliable transport you can count on</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 bg-background rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">24/7 Service</h4>
                    <div className="text-3xl font-bold text-[hsl(var(--military-gold))] mb-2">Always</div>
                    <p className="text-sm text-muted-foreground">Available when you need us most</p>
                  </div>
                  <div className="p-6 bg-background rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">Fixed Prices</h4>
                    <div className="text-3xl font-bold text-[hsl(var(--military-gold))] mb-2">No Surprise</div>
                    <p className="text-sm text-muted-foreground">What we quote is what you pay</p>
                  </div>
                  <div className="p-6 bg-background rounded-lg">
                    <h4 className="text-lg font-semibold mb-2">Base Experience</h4>
                    <div className="text-3xl font-bold text-[hsl(var(--military-gold))] mb-2">Military</div>
                    <p className="text-sm text-muted-foreground">We understand base protocols</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-background rounded-lg text-center">
                  <p className="text-sm">
                    <strong>Note:</strong> Professional drivers with clean vehicles and local knowledge of all destinations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--military-green))]/5 to-[hsl(var(--military-gold))]/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Payment Methods by Service</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">🚗 Taxi Rides</h4>
                    <p className="text-sm text-muted-foreground mb-2">Cash payments only</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Euro (EUR) only</li>
                      <li>• Exact change preferred</li>
                      <li>• All destinations & local trips</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-4">🍔 Food Delivery</h4>
                    <p className="text-sm text-muted-foreground mb-2">Cash & card payments accepted</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Euro (EUR) cash</li>
                      <li>• Visa & Mastercard</li>
                      <li>• Military Star Cards</li>
                      <li>• USAA Cards</li>
                      <li>• American Express</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[hsl(var(--whatsapp-green))] to-[hsl(142,60%,45%)] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get an instant quote or book your ride now on WhatsApp
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-xl px-12 py-6 h-auto bg-white text-[hsl(var(--whatsapp-green))] hover:bg-white/90"
            onClick={() => window.open('https://wa.me/421919040118', '_blank')}
          >
            <MessageCircle className="h-6 w-6 mr-3" />
            Get Quote on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PriceList;
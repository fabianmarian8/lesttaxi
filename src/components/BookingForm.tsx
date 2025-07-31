import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    destination: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.pickup || !formData.destination) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('sendLead', {
        body: formData
      });

      if (error) {
        throw error;
      }

      // Success - show appropriate toast based on email status
      if (data?.emailSent) {
        toast({
          title: "Booking Received ✔︎",
          description: "Email sent ✔︎ - We'll confirm within 10 minutes.",
        });
      } else {
        toast({
          title: "Booking Received",
          description: "Thanks, we'll confirm within 10 minutes.",
        });
      }

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        pickup: "",
        destination: "",
        message: "",
      });

    } catch (error: any) {
      console.error('Booking error:', error);
      
      // Show domain verification banner if email failed due to domain issues
      if (error.message?.includes('domain') || error.message?.includes('verified')) {
        toast({
          title: "Domain Verification Required",
          description: "Please verify lesttaxi.com domain in Resend settings.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Booking Failed",
          description: "Please WhatsApp +421 919 040 118.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Book Your Ride</CardTitle>
        <CardDescription>
          Fill out the form below and we'll confirm your booking within 10 minutes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+421 919 040 118"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email (Optional)</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pickup">Pickup Location *</Label>
              <Input
                id="pickup"
                name="pickup"
                value={formData.pickup}
                onChange={handleInputChange}
                placeholder="e.g. Bratislava Airport"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="destination">Destination *</Label>
              <Input
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                placeholder="e.g. Military Base Záhorie"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Date, time, special requirements, etc."
              rows={3}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Book Now"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
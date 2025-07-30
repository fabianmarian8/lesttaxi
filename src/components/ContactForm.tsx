import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  phone: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    pickup: '',
    destination: '',
    date: '',
    time: '',
    passengers: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData for Netlify Forms
      const netlifyFormData = new FormData();
      netlifyFormData.append('form-name', 'contact');
      netlifyFormData.append('name', formData.name);
      netlifyFormData.append('phone', formData.phone);
      netlifyFormData.append('pickup', formData.pickup);
      netlifyFormData.append('destination', formData.destination);
      netlifyFormData.append('date', formData.date);
      netlifyFormData.append('time', formData.time);
      netlifyFormData.append('passengers', formData.passengers);
      netlifyFormData.append('message', formData.message);
      netlifyFormData.append('_to', 'fabianmarian8@gmail.com');
      netlifyFormData.append('_subject', 'New Booking Request - LestTaxi');

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(netlifyFormData as any).toString()
      });

      if (response.ok) {
        toast({
          title: "Request sent successfully!",
          description: "Thanks, we'll confirm within 10 minutes.",
        });
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          pickup: '',
          destination: '',
          date: '',
          time: '',
          passengers: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send form');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      toast({
        title: "Error sending request",
        description: "Something went wrong, please WhatsApp +421 919 040 118",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto shadow-2xl border-2 border-[hsl(var(--military-gold))]/30">
      <CardHeader className="bg-gradient-to-r from-[hsl(var(--military-gold))]/10 to-[hsl(var(--military-green))]/10">
        <CardTitle className="text-2xl text-center">Transportation Request</CardTitle>
        <CardDescription className="text-center">Fill out the form and we'll contact you immediately</CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <div style={{ display: 'none' }}>
            <label>Don't fill this out: <input name="bot-field" /></label>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
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
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div>
                <Label htmlFor="pickup">Pickup Location *</Label>
                <Input
                  id="pickup"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleInputChange}
                  placeholder="e.g., Tennis court parking, Barracks..."
                  required
                />
              </div>
              <div>
                <Label htmlFor="destination">Destination *</Label>
                <Input
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  placeholder="e.g., Budapest Airport, Zvolen..."
                  required
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="date">Date *</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="time">Time *</Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="passengers">Number of Passengers</Label>
                <Input
                  id="passengers"
                  name="passengers"
                  type="number"
                  min="1"
                  max="4"
                  value={formData.passengers}
                  onChange={handleInputChange}
                  placeholder="1-4 passengers"
                />
              </div>
              <div>
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Any special requests, luggage, etc..."
                  rows={3}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button 
              type="submit"
              size="lg" 
              className="px-12 py-3 text-lg"
              disabled={isSubmitting}
            >
              <Send className="h-5 w-5 mr-2" />
              {isSubmitting ? "Sending..." : "Submit Request"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
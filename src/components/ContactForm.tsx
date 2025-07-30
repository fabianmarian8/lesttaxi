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
  console.log('ContactForm component rendered');
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    pickup: '',
    destination: '',
    date: '',
    time: '',
    passengers: '1',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    console.log('Input change detected:', e.target.name, e.target.value);
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submit triggered', formData);
    setIsSubmitting(true);

    try {
      // Simulate form submission - replace with actual email service
      await new Promise(resolve => setTimeout(resolve, 1500));
      
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
        passengers: '1',
        message: ''
      });
    } catch (error) {
      console.error('Error sending form:', error);
      toast({
        title: "Error sending request",
        description: "Please WhatsApp +421 919 040 118",
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
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your phone number"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="pickup">Pickup Location *</Label>
                <Input
                  id="pickup"
                  name="pickup"
                  type="text"
                  value={formData.pickup}
                  onChange={handleInputChange}
                  placeholder="e.g., Tennis court parking, Barracks..."
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="destination">Destination *</Label>
                <Input
                  id="destination"
                  name="destination"
                  type="text"
                  value={formData.destination}
                  onChange={handleInputChange}
                  placeholder="e.g., Budapest Airport, Zvolen..."
                  required
                  className="mt-1"
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
                  className="mt-1"
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
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="passengers">Number of Passengers</Label>
                <select
                  id="passengers"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="1">1 passenger</option>
                  <option value="2">2 passengers</option>
                  <option value="3">3 passengers</option>
                  <option value="4">4 passengers</option>
                </select>
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
                  className="mt-1"
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
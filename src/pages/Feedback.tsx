import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { toast } from "sonner";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useSEO({
    title: "Feedback and Complaints | Military Taxi Slovakia",
    description: "Leave us feedback or complaints. We value every feedback and continuously strive to improve our services.",
    keywords: "feedback, complaint, review, military taxi, Slovakia"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend
      // For now, we'll just show a success message
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Your feedback has been sent!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("An error occurred while sending. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90">
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to homepage
        </Link>

        <div className="max-w-2xl mx-auto">
          <Card className="tactical-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] bg-clip-text text-transparent">
                Feedback and Complaints
              </CardTitle>
              <CardDescription className="text-base sm:text-lg text-muted-foreground mt-4">
                If you were dissatisfied with the driver or ride or have suggestions for improvement, please write to us. 
                We value every feedback.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="tactical-input"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="tactical-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="tactical-input min-h-[120px]"
                    placeholder="Describe your feedback or complaint..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full tactical-card bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] hover:scale-105 transition-all duration-300"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
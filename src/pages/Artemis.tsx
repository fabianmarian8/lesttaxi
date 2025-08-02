import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Send, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { toast } from "sonner";

const Artemis = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useSEO({
    title: "Artemis Group - Web Development Services",
    description: "Professional web development services by Artemis Group. Contact us for modern, responsive websites tailored to your business needs.",
    keywords: "web development, website design, Artemis Group, Slovakia, professional websites"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Your message has been sent! We will contact you soon.");
      setFormData({ email: "", message: "" });
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
    <div className="min-h-screen bg-black text-green-500" style={{ fontFamily: 'Courier New, monospace' }}>
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors mb-8"
          style={{ fontFamily: 'Courier New, monospace' }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to homepage
        </Link>

        <div className="max-w-2xl mx-auto">
          <div className="border border-green-500 bg-black p-8 rounded-lg shadow-2xl">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Globe className="h-8 w-8 text-green-500" />
                <h1 className="text-2xl sm:text-3xl font-bold text-green-500" style={{ fontFamily: 'Courier New, monospace' }}>
                  ARTEMIS GROUP
                </h1>
              </div>
              <p className="text-base sm:text-lg text-green-500" style={{ fontFamily: 'Courier New, monospace' }}>
                {'>'} Interested in a website like this? Leave us a message.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label 
                  htmlFor="email" 
                  className="text-green-500"
                  style={{ fontFamily: 'Courier New, monospace' }}
                >
                  Email:
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-black border-green-500 text-green-500 placeholder:text-green-700 focus:border-green-400"
                  style={{ fontFamily: 'Courier New, monospace' }}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label 
                  htmlFor="message" 
                  className="text-green-500"
                  style={{ fontFamily: 'Courier New, monospace' }}
                >
                  Message:
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-black border-green-500 text-green-500 placeholder:text-green-700 focus:border-green-400 min-h-[120px]"
                  style={{ fontFamily: 'Courier New, monospace' }}
                  placeholder="Describe your project or requirements..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all duration-300"
                style={{ fontFamily: 'Courier New, monospace' }}
              >
                <Send className="h-4 w-4 mr-2" />
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artemis;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
      
      toast.success("Vaša správa bola odoslaná! Kontaktujeme vás čoskoro.");
      setFormData({ email: "", message: "" });
    } catch (error) {
      toast.error("Nastala chyba pri odosielaní. Skúste to prosím znovu.");
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
          Späť na hlavnú stránku
        </Link>

        <div className="max-w-2xl mx-auto">
          <Card className="tactical-card">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Globe className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Artemis Group
                </CardTitle>
              </div>
              <CardDescription className="text-base sm:text-lg text-muted-foreground">
                Mali by ste záujem o takýto web? Zanechajte nám správu.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="tactical-input"
                    placeholder="vas.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Správa</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="tactical-input min-h-[120px]"
                    placeholder="Opíšte váš projekt alebo požiadavky..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full tactical-card bg-gradient-to-r from-primary to-primary/80 hover:scale-105 transition-all duration-300"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Odosielam..." : "Odoslať správu"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Artemis;
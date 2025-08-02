import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Send, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Artemis = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useSEO({
    title: "Artemis Group - Tvorba webových stránok",
    description: "Profesionálne služby tvorby webových stránok od Artemis Group. Kontaktujte nás pre moderné, responzívne webové stránky šité na mieru vašim potrebám.",
    keywords: "tvorba webových stránok, dizajn webových stránok, Artemis Group, Slovensko, profesionálne webové stránky"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('sendInquiry', {
        body: formData
      });

      if (error) {
        throw error;
      }
      
      toast.success("Vaša správa bola odoslaná! Čoskoro vás budeme kontaktovať.");
      setFormData({ email: "", message: "" });
    } catch (error: any) {
      console.error('Error submitting inquiry:', error);
      let errorMessage = "Nastala chyba pri odosielaní. Skúste to prosím znova.";
      
      if (error.message?.includes('domain verification')) {
        errorMessage = "Problém s konfiguráciou e-mailovej služby. Kontaktujte podporu.";
      }
      
      toast.error(errorMessage);
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
          Späť na hlavnú stránku
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
                {'>'} Mali by ste záujem o takýto web? Zanechajte nám správu.
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
                  Správa:
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-black border-green-500 text-green-500 placeholder:text-green-700 focus:border-green-400 min-h-[120px]"
                  style={{ fontFamily: 'Courier New, monospace' }}
                  placeholder="Opíšte váš projekt alebo požiadavky..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all duration-300"
                style={{ fontFamily: 'Courier New, monospace' }}
              >
                <Send className="h-4 w-4 mr-2" />
                {isSubmitting ? "ODOSIELAM..." : "ODOSLAŤ SPRÁVU"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artemis;
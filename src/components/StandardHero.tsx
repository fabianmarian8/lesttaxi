import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { ReactNode } from "react";

interface StandardHeroProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  children?: ReactNode;
  className?: string;
}

export const StandardHero = ({
  title,
  description,
  primaryButtonText = "Book on WhatsApp",
  secondaryButtonText = "Call +421 919 040 118",
  onPrimaryClick = () => window.open('https://wa.me/421919040118', '_blank'),
  onSecondaryClick = () => window.open('tel:+421919040118', '_self'),
  children,
  className = ""
}: StandardHeroProps) => {
  return (
    <section className={`py-16 px-6 bg-gradient-to-br from-[hsl(var(--military-gold))]/10 via-background to-[hsl(var(--military-green))]/10 ${className}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-black mb-6 text-foreground combat-text">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              variant="whatsapp" 
              size="lg" 
              onClick={onPrimaryClick}
              className="h-auto px-8 py-4"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              {primaryButtonText}
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={onSecondaryClick}
              className="h-auto px-8 py-4"
            >
              <Phone className="h-5 w-5 mr-2" />
              {secondaryButtonText}
            </Button>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};
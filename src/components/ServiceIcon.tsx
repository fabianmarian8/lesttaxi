import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceIconProps {
  Icon: LucideIcon;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "military" | "gold" | "green";
  className?: string;
}

const sizeClasses = {
  sm: "h-6 w-6",
  md: "h-8 w-8", 
  lg: "h-12 w-12",
  xl: "h-16 w-16"
};

const containerSizeClasses = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-16 w-16", 
  xl: "h-20 w-20"
};

const variantClasses = {
  default: "bg-gradient-to-br from-primary/20 to-primary/10 text-primary border-primary/20",
  military: "bg-gradient-to-br from-[hsl(var(--military-gold))]/20 to-[hsl(var(--military-green))]/10 text-[hsl(var(--military-gold))] border-[hsl(var(--military-gold))]/20",
  gold: "bg-gradient-to-br from-[hsl(var(--military-gold))]/20 to-[hsl(var(--military-gold))]/10 text-[hsl(var(--military-gold))] border-[hsl(var(--military-gold))]/20",
  green: "bg-gradient-to-br from-[hsl(var(--military-green))]/20 to-[hsl(var(--military-green))]/10 text-[hsl(var(--military-green))] border-[hsl(var(--military-green))]/20"
};

export const ServiceIcon = ({ 
  Icon, 
  size = "lg", 
  variant = "military",
  className 
}: ServiceIconProps) => {
  return (
    <div className={cn(
      "rounded-full border-2 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg",
      containerSizeClasses[size],
      variantClasses[variant],
      className
    )}>
      <Icon className={sizeClasses[size]} />
    </div>
  );
};
import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AlertCircle, Check } from "lucide-react";

interface AnimatedFormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  error?: string;
  isValid?: boolean;
  isValidating?: boolean;
  required?: boolean;
  rows?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
}

export const AnimatedFormField = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  AnimatedFormFieldProps
>(({ 
  id, 
  name, 
  label, 
  type = "text", 
  placeholder, 
  value, 
  error, 
  isValid, 
  isValidating,
  required,
  rows,
  onChange, 
  onBlur,
  className,
  ...props 
}, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const Component = rows ? Textarea : Input;
  
  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <div className="space-y-2 animate-fade-in-up">
      <Label 
        htmlFor={id}
        className={cn(
          "transition-colors duration-200",
          isFocused && "text-primary",
          error && "text-destructive"
        )}
      >
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      
      <div className="relative">
        <Component
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          rows={rows}
          className={cn(
            "animated-form-field pr-10",
            isFocused && "focused",
            error && "border-destructive focus-visible:ring-destructive",
            isValid && !error && "border-green-500",
            className
          )}
          ref={ref as any}
          {...props}
        />
        
        {/* Validation indicators */}
        {isValidating && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 animate-scale-in">
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent" />
          </div>
        )}
        
        {isValid && !error && !isValidating && value && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 animate-scale-in">
            <Check className="h-4 w-4 text-green-500" />
          </div>
        )}
        
        {error && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 animate-scale-in">
            <AlertCircle className="h-4 w-4 text-destructive" />
          </div>
        )}
      </div>
      
      {/* Error message */}
      {error && (
        <p className="text-sm text-destructive flex items-center gap-1 animate-fade-in-up">
          <AlertCircle className="h-3 w-3" />
          {error}
        </p>
      )}
    </div>
  );
});

AnimatedFormField.displayName = "AnimatedFormField";
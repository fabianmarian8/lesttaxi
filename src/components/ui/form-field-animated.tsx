import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <motion.div 
      className="space-y-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
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
        <motion.div
          whileFocus={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
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
              "transition-all duration-200 pr-10",
              isFocused && "ring-2 ring-primary ring-offset-2",
              error && "border-destructive focus-visible:ring-destructive",
              isValid && !error && "border-green-500",
              className
            )}
            ref={ref as any}
            {...props}
          />
        </motion.div>
        
        {/* Validation indicators */}
        <AnimatePresence>
          {isValidating && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent" />
            </motion.div>
          )}
          
          {isValid && !error && !isValidating && value && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <Check className="h-4 w-4 text-green-500" />
            </motion.div>
          )}
          
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <AlertCircle className="h-4 w-4 text-destructive" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Error message */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="text-sm text-destructive flex items-center gap-1"
          >
            <AlertCircle className="h-3 w-3" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

AnimatedFormField.displayName = "AnimatedFormField";
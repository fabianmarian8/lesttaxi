import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { Loader2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        success: "bg-green-600 text-white hover:bg-green-700",
        loading: "bg-primary/70 text-primary-foreground cursor-not-allowed"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      state: {
        idle: "",
        loading: "",
        success: "",
        error: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      state: "idle"
    },
  }
);

export interface AnimatedButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 
    'onDrag' | 'onDragEnd' | 'onDragStart' | 'onAnimationStart' | 'onAnimationEnd' | 'onTransitionEnd'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  success?: boolean;
  loadingText?: string;
  successText?: string;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    asChild = false, 
    loading = false,
    success = false,
    loadingText = "Loading...",
    successText = "Success!",
    children,
    disabled,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : motion.button;
    
    const getVariant = () => {
      if (loading) return "loading";
      if (success) return "success";
      return variant;
    };

    const getContent = () => {
      if (success) {
        return (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="flex items-center gap-2"
          >
            <Check className="h-4 w-4" />
            {successText}
          </motion.div>
        );
      }
      
      if (loading) {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <Loader2 className="h-4 w-4 animate-spin" />
            {loadingText}
          </motion.div>
        );
      }
      
      return children;
    };

    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant: getVariant(), size, className }))}
          ref={ref}
          {...props}
        >
          {getContent()}
        </Slot>
      );
    }

    return (
      <motion.button
        className={cn(buttonVariants({ variant: getVariant(), size, className }))}
        ref={ref}
        disabled={disabled || loading}
        whileHover={!loading && !disabled ? { scale: 1.02 } : {}}
        whileTap={!loading && !disabled ? { scale: 0.98 } : {}}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        {...props}
      >
        {getContent()}
      </motion.button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton, buttonVariants };
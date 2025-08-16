import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { AnimatedFormField } from "@/components/ui/form-field-animated";
import { useToast } from "@/hooks/use-toast";
import { contactSchema, type ContactFormData } from "@/lib/formSchemas";
import { Sparkles } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
    reset,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange"
  });
  
  const watchedFields = watch();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://kkuybturazislquqaxci.supabase.co/functions/v1/send-contact-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSuccess(true);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      
      // Reset form after success animation
      setTimeout(() => {
        reset();
        setIsSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto"
    >
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center space-y-4 p-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"
            >
              <Sparkles className="h-8 w-8 text-green-600" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl font-semibold text-green-700"
            >
              Message Sent Successfully!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground"
            >
              We'll get back to you soon.
            </motion.p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <AnimatedFormField
              id="name"
              name="name"
              label="Name"
              placeholder="Your name"
              value={watchedFields.name || ""}
              error={errors.name?.message}
              isValid={!errors.name && touchedFields.name}
              required
              {...register("name")}
            />
            
            <AnimatedFormField
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="your@email.com"
              value={watchedFields.email || ""}
              error={errors.email?.message}
              isValid={!errors.email && touchedFields.email}
              required
              {...register("email")}
            />
            
            <AnimatedFormField
              id="message"
              name="message"
              label="Message"
              placeholder="Your message..."
              value={watchedFields.message || ""}
              error={errors.message?.message}
              isValid={!errors.message && touchedFields.message}
              rows={4}
              required
              {...register("message")}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <AnimatedButton
                type="submit"
                className="w-full"
                loading={isSubmitting}
                disabled={!isValid || isSubmitting}
                loadingText="Sending..."
              >
                Send Message
              </AnimatedButton>
            </motion.div>
          </form>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactForm;
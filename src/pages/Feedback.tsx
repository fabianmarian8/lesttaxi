import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { AnimatedFormField } from "@/components/ui/form-field-animated";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Send, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { feedbackSchema, type FeedbackFormData } from "@/lib/formSchemas";

const Feedback = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
    reset,
    watch
  } = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
    mode: "onChange"
  });
  
  const watchedFields = watch();

  useSEO({
    title: "Feedback | LEST TAXI",
    description: "Leave us feedback or complaints. We value every feedback and continuously strive to improve our services.",
    canonical: "/feedback"
  });

  const onSubmit = async (data: FeedbackFormData) => {
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('sendFeedback', {
        body: data
      });

      if (error) {
        throw error;
      }
      
      setIsSuccess(true);
      toast.success("Your feedback has been sent!");
      
      // Reset form after success animation
      setTimeout(() => {
        reset();
        setIsSuccess(false);
      }, 4000);
      
    } catch (error: any) {
      console.error('Error submitting feedback:', error);
      let errorMessage = "An error occurred while sending. Please try again.";
      
      if (error.message?.includes('domain verification')) {
        errorMessage = "Email service configuration needed. Please contact support.";
      }
      
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
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
              {isSuccess ? (
                <div className="text-center space-y-6 p-8 animate-scale-in">
                  <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center animate-bounce-gentle">
                    <Heart className="h-10 w-10 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-700 animate-fade-in-up">
                    Thank You for Your Feedback!
                  </h3>
                  <p className="text-muted-foreground text-lg animate-fade-in-up">
                    We value every feedback and continuously strive to improve our services.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <AnimatedFormField
                    id="name"
                    name="name"
                    label="Your Name"
                    placeholder="Your name"
                    value={watchedFields.name || ""}
                    error={errors.name?.message}
                    isValid={!errors.name && touchedFields.name}
                    required
                    className="tactical-input"
                    {...register("name")}
                  />

                  <AnimatedFormField
                    id="email"
                    name="email"
                    label="Your Email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={watchedFields.email || ""}
                    error={errors.email?.message}
                    isValid={!errors.email && touchedFields.email}
                    required
                    className="tactical-input"
                    {...register("email")}
                  />

                  <AnimatedFormField
                    id="message"
                    name="message"
                    label="Message"
                    placeholder="Describe your feedback or complaint..."
                    value={watchedFields.message || ""}
                    error={errors.message?.message}
                    isValid={!errors.message && touchedFields.message}
                    rows={5}
                    required
                    className="tactical-input"
                    {...register("message")}
                  />

                  <div className="animate-fade-in-up">
                    <AnimatedButton
                      type="submit"
                      className="w-full tactical-card bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] hover:scale-105 transition-all duration-300"
                      loading={isSubmitting}
                      disabled={!isValid || isSubmitting}
                      loadingText="Sending..."
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Submit Feedback
                    </AnimatedButton>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
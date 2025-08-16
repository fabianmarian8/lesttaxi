import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { AnimatedFormField } from "@/components/ui/form-field-animated";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { bookingSchema, type BookingFormData } from "@/lib/formSchemas";
import { Calendar, Clock, Users, Car } from "lucide-react";

export function BookingForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
    reset,
    watch
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: "onChange"
  });
  
  const watchedFields = watch();

  const onSubmit = async (data: BookingFormData) => {
    setIsLoading(true);

    try {
      const { error } = await supabase.functions.invoke('sendLead', {
        body: data
      });

      if (error) {
        throw error;
      }

      setIsSuccess(true);
      toast({
        title: "Booking Request Sent!",
        description: "We'll contact you soon to confirm your ride.",
      });
      
      // Reset form after success animation
      setTimeout(() => {
        reset();
        setIsSuccess(false);
      }, 4000);
      
    } catch (error: any) {
      console.error('Error submitting booking:', error);
      let errorMessage = "An error occurred while sending your booking. Please try again.";
      
      if (error.message?.includes('domain verification')) {
        errorMessage = "Email service configuration needed. Please contact support.";
      }
      
      toast({
        title: "Booking Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-fade-in-up">
      <Card className="tactical-card w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] bg-clip-text text-transparent">
            Book Your Ride
          </CardTitle>
          <CardDescription className="text-base sm:text-lg text-muted-foreground mt-4">
            Professional taxi service for military personnel and civilians. Fixed rates, reliable service.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isSuccess ? (
            <div className="text-center space-y-6 p-8 animate-scale-in">
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-bounce-gentle">
                <Car className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-700 animate-fade-in-up">
                Booking Request Sent!
              </h3>
              <p className="text-muted-foreground text-lg animate-fade-in-up">
                We'll contact you soon to confirm your ride details.
              </p>
              {/* Confetti animation */}
              <div className="flex justify-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-primary rounded-full animate-bounce-gentle"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatedFormField
                  id="name"
                  name="name"
                  label="Your Name"
                  placeholder="Full name"
                  value={watchedFields.name || ""}
                  error={errors.name?.message}
                  isValid={!errors.name && touchedFields.name}
                  required
                  {...register("name")}
                />
                
                <AnimatedFormField
                  id="phone"
                  name="phone"
                  label="Phone Number"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={watchedFields.phone || ""}
                  error={errors.phone?.message}
                  isValid={!errors.phone && touchedFields.phone}
                  required
                  {...register("phone")}
                />
              </div>

              <AnimatedFormField
                id="email"
                name="email"
                label="Email"
                type="email"
                placeholder="your.email@example.com"
                value={watchedFields.email || ""}
                error={errors.email?.message}
                isValid={!errors.email && touchedFields.email}
                {...register("email")}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatedFormField
                  id="pickup"
                  name="pickup"
                  label="Pickup Location"
                  placeholder="e.g., Lest Military Base"
                  value={watchedFields.pickup || ""}
                  error={errors.pickup?.message}
                  isValid={!errors.pickup && touchedFields.pickup}
                  required
                  {...register("pickup")}
                />
                
                <AnimatedFormField
                  id="destination"
                  name="destination"
                  label="Destination"
                  placeholder="e.g., Bratislava Airport"
                  value={watchedFields.destination || ""}
                  error={errors.destination?.message}
                  isValid={!errors.destination && touchedFields.destination}
                  required
                  {...register("destination")}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnimatedFormField
                  id="date"
                  name="date"
                  label="Date"
                  type="date"
                  value={watchedFields.date || ""}
                  error={errors.date?.message}
                  isValid={!errors.date && touchedFields.date}
                  required
                  {...register("date")}
                />
                
                <AnimatedFormField
                  id="time"
                  name="time"
                  label="Time"
                  type="time"
                  value={watchedFields.time || ""}
                  error={errors.time?.message}
                  isValid={!errors.time && touchedFields.time}
                  required
                  {...register("time")}
                />
                
                <div className="space-y-2">
                  <label htmlFor="passengers" className="text-sm font-medium flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Passengers
                    <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="passengers"
                    {...register("passengers")}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select passengers</option>
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num}>{num} passenger{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                  {errors.passengers && (
                    <p className="text-sm text-destructive">{errors.passengers.message}</p>
                  )}
                </div>
              </div>

              <AnimatedFormField
                id="message"
                name="message"
                label="Additional Message"
                placeholder="Any special requirements or additional information..."
                value={watchedFields.message || ""}
                error={errors.message?.message}
                isValid={!errors.message && touchedFields.message}
                rows={3}
                {...register("message")}
              />

              <div className="animate-fade-in-up">
                <AnimatedButton
                  type="submit"
                  className="w-full tactical-card bg-gradient-to-r from-[hsl(var(--military-gold))] to-[hsl(var(--elite-gold))] hover:scale-105 transition-all duration-300"
                  loading={isLoading}
                  disabled={!isValid || isLoading}
                  loadingText="Sending Request..."
                >
                  Send Booking Request
                </AnimatedButton>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
import { z } from "zod";

// Contact form schema
export const contactSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-ZÀ-ž\s'-]+$/, "Name can only contain letters, spaces, hyphens and apostrophes"),
  email: z.string()
    .email("Please enter a valid email address")
    .min(5, "Email is too short")
    .max(100, "Email is too long"),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
});

// Booking form schema
export const bookingSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-ZÀ-ž\s'-]+$/, "Name can only contain letters, spaces, hyphens and apostrophes"),
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number is too long")
    .regex(/^[\+]?[1]?[\s\-\(]?[0-9]{3}[\s\-\)]?[0-9]{3}[\s\-]?[0-9]{4}$/, "Please enter a valid US phone number"),
  email: z.string()
    .email("Please enter a valid email address")
    .min(5, "Email is too short")
    .max(100, "Email is too long"),
  pickup: z.string()
    .min(3, "Pickup location must be at least 3 characters")
    .max(200, "Pickup location is too long"),
  destination: z.string()
    .min(3, "Destination must be at least 3 characters")
    .max(200, "Destination is too long"),
  date: z.string()
    .min(1, "Please select a date"),
  time: z.string()
    .min(1, "Please select a time"),
  passengers: z.string()
    .min(1, "Please select number of passengers"),
  message: z.string()
    .max(500, "Message must be less than 500 characters")
    .optional()
});

// Feedback form schema
export const feedbackSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-ZÀ-ž\s'-]+$/, "Name can only contain letters, spaces, hyphens and apostrophes"),
  email: z.string()
    .email("Please enter a valid email address")
    .min(5, "Email is too short")
    .max(100, "Email is too long"),
  message: z.string()
    .min(10, "Feedback must be at least 10 characters")
    .max(1000, "Feedback must be less than 1000 characters")
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type BookingFormData = z.infer<typeof bookingSchema>;
export type FeedbackFormData = z.infer<typeof feedbackSchema>;
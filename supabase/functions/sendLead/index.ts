import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BookingRequest {
  name: string;
  phone: string;
  email?: string;
  pickup: string;
  destination: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const bookingData: BookingRequest = await req.json();
    console.log("Received booking data:", bookingData);

    // Validate required fields
    if (!bookingData.name || !bookingData.phone || !bookingData.pickup || !bookingData.destination) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: name, phone, pickup, destination" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Initialize Supabase client with service role key
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert booking data into leads table
    const { data: leadData, error: dbError } = await supabase
      .from("leads")
      .insert([
        {
          name: bookingData.name,
          phone: bookingData.phone,
          email: bookingData.email || null,
          pickup: bookingData.pickup,
          destination: bookingData.destination,
          message: bookingData.message || null,
        },
      ])
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save booking data" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Booking saved to database:", leadData);

    // Send notification email via Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      try {
        const emailResponse = await resend.emails.send({
          from: "booking@lesttaxi.com",
          to: "fabianmarian8@gmail.com",
          subject: "New Booking – LestTaxi",
          html: `
            <h2>New Booking</h2>
            <p><strong>Name:</strong> ${bookingData.name}</p>
            <p><strong>Phone:</strong> ${bookingData.phone}</p>
            ${bookingData.email ? `<p><strong>Email:</strong> ${bookingData.email}</p>` : ''}
            <p><strong>Route:</strong> ${bookingData.pickup} → ${bookingData.destination}</p>
            ${bookingData.message ? `<p><strong>Message:</strong> ${bookingData.message}</p>` : ''}
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          `,
        });

        console.log("Email sent successfully:", emailResponse);
      } catch (emailError) {
        console.error("Email error:", emailError);
        // Don't fail the entire request if email fails
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Booking received successfully",
        id: leadData.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in sendLead function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
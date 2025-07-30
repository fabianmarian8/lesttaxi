import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  phone: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  passengers: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form submission:", formData);

    // Send email to fabianmarian8@gmail.com
    const emailResponse = await resend.emails.send({
      from: "Base Taxi <onboarding@resend.dev>",
      to: ["fabianmarian8@gmail.com"],
      subject: `New Transportation Request from ${formData.name}`,
      html: `
        <h2>New Transportation Request</h2>
        <p><strong>Customer Details:</strong></p>
        <ul>
          <li><strong>Name:</strong> ${formData.name}</li>
          <li><strong>Phone:</strong> ${formData.phone}</li>
        </ul>
        
        <p><strong>Trip Details:</strong></p>
        <ul>
          <li><strong>Pickup Location:</strong> ${formData.pickup}</li>
          <li><strong>Destination:</strong> ${formData.destination}</li>
          <li><strong>Date:</strong> ${formData.date}</li>
          <li><strong>Time:</strong> ${formData.time}</li>
          <li><strong>Passengers:</strong> ${formData.passengers}</li>
        </ul>
        
        ${formData.message ? `
        <p><strong>Additional Information:</strong></p>
        <p>${formData.message}</p>
        ` : ''}
        
        <hr>
        <p><small>This request was submitted through the Base Taxi website.</small></p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Contact form submitted successfully" 
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
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface InquiryRequest {
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const inquiryData: InquiryRequest = await req.json();
    console.log("Received inquiry data:", inquiryData);

    // Validate required fields
    if (!inquiryData.email || !inquiryData.message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: email, message" }),
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

    // Insert inquiry data into inquiries table
    const { data: inquiryDbData, error: dbError } = await supabase
      .from("inquiries")
      .insert([
        {
          email: inquiryData.email,
          message: inquiryData.message,
        },
      ])
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save inquiry data" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Inquiry saved to database:", inquiryDbData);

    // Send notification email via Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    let emailSuccess = false;
    
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      try {
        const emailResponse = await resend.emails.send({
          from: "inquiry@resend.dev",
          to: "fabianmarian8@gmail.com",
          subject: "New Artemis Inquiry",
          html: `
            <h2>New Artemis Inquiry</h2>
            <p><strong>Email:</strong> ${inquiryData.email}</p>
            <p><strong>Message:</strong></p>
            <p>${inquiryData.message.replace(/\n/g, '<br>')}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          `,
        });

        console.log("Email sent successfully:", emailResponse);
        emailSuccess = true;
      } catch (emailError: any) {
        console.error("Resend email error details:", {
          message: emailError.message,
          name: emailError.name,
          stack: emailError.stack,
          response: emailError.response
        });
        emailSuccess = false;
      }
    } else {
      console.log("RESEND_API_KEY not configured, skipping email");
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Inquiry received successfully",
        id: inquiryDbData.id,
        emailSent: emailSuccess
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
    console.error("Error in sendInquiry function:", error);
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
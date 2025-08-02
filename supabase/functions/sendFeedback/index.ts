import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface FeedbackRequest {
  name: string;
  email?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const feedbackData: FeedbackRequest = await req.json();
    console.log("Received feedback data:", feedbackData);

    // Validate required fields
    if (!feedbackData.name || !feedbackData.message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: name, message" }),
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

    // Insert feedback data into feedback table
    const { data: feedbackDbData, error: dbError } = await supabase
      .from("feedback")
      .insert([
        {
          name: feedbackData.name,
          email: feedbackData.email || null,
          message: feedbackData.message,
        },
      ])
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save feedback data" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Feedback saved to database:", feedbackDbData);

    // Send notification email via Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    let emailSuccess = false;
    
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      try {
        const emailResponse = await resend.emails.send({
          from: "feedback@resend.dev",
          to: "fabianmarian8@gmail.com",
          subject: "New Feedback / Complaint",
          html: `
            <h2>New Feedback / Complaint</h2>
            <p><strong>Name:</strong> ${feedbackData.name}</p>
            ${feedbackData.email ? `<p><strong>Email:</strong> ${feedbackData.email}</p>` : ''}
            <p><strong>Message:</strong></p>
            <p>${feedbackData.message.replace(/\n/g, '<br>')}</p>
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
        message: "Feedback received successfully",
        id: feedbackDbData.id,
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
    console.error("Error in sendFeedback function:", error);
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
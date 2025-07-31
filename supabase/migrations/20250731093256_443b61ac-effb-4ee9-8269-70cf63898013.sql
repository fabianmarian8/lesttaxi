-- Create leads table for booking inquiries
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  pickup TEXT NOT NULL,
  destination TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert leads (public booking form)
CREATE POLICY "Anyone can create leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy for service role to read all leads (for admin purposes)
CREATE POLICY "Service role can read all leads" 
ON public.leads 
FOR SELECT 
USING (true);

-- Create index for better performance on created_at
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
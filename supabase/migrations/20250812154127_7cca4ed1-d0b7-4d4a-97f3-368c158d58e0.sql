
-- feedback
alter table public.feedback enable row level security;

drop policy if exists "Service role can read all feedback" on public.feedback;
drop policy if exists "Anyone can create feedback" on public.feedback;

create policy "Anon can insert feedback"
  on public.feedback
  for insert
  to anon
  with check (true);

-- inquiries
alter table public.inquiries enable row level security;

drop policy if exists "Service role can read all inquiries" on public.inquiries;
drop policy if exists "Anyone can create inquiries" on public.inquiries;

create policy "Anon can insert inquiries"
  on public.inquiries
  for insert
  to anon
  with check (true);

-- leads
alter table public.leads enable row level security;

drop policy if exists "Service role can read all leads" on public.leads;
drop policy if exists "Anyone can create leads" on public.leads;

create policy "Anon can insert leads"
  on public.leads
  for insert
  to anon
  with check (true);

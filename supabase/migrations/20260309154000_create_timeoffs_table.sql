-- Create timeoffs table
CREATE TABLE public.timeoffs (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    barber TEXT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Turn on RLS
ALTER TABLE public.timeoffs ENABLE ROW LEVEL SECURITY;

-- Allow read access for everyone (so booking page can check availability)
CREATE POLICY "Allow public read access to timeoffs" ON public.timeoffs
    FOR SELECT TO public USING (true);

-- Allow full access for service role (admin-data function)
CREATE POLICY "Allow service role full access to timeoffs" ON public.timeoffs
    FOR ALL TO service_role USING (true) WITH CHECK (true);

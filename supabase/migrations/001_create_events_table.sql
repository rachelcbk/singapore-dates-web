-- Create events table for Singapore date spots
-- Updated: event_date changed to event_date_range (TEXT) to support date ranges

create table if not exists public.events (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    organiser text,
    cost text, -- e.g., "Free", "$15", "$20-50"
    summary text,
    location text,
    event_date_range text, -- e.g., "Mar 15 - Mar 30, 2026" or "Every Saturday in April"
    event_time text, -- e.g., "10:00 AM - 6:00 PM"
    description text,
    image_url text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.events enable row level security;

-- Create policy for public read access
create policy "Allow public read access" on public.events
    for select using (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_events_updated_at 
    BEFORE UPDATE ON public.events 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

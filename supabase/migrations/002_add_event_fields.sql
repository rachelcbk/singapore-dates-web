-- Migration: Add new fields to events table
-- Created: 2026-03-25

-- Add new columns to events table
ALTER TABLE events
    ADD COLUMN IF NOT EXISTS start_date DATE,
    ADD COLUMN IF NOT EXISTS end_date DATE,
    ADD COLUMN IF NOT EXISTS category TEXT,
    ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'active';

-- Add comments for documentation
COMMENT ON COLUMN events.start_date IS 'Event start date for filtering/sorting';
COMMENT ON COLUMN events.end_date IS 'Event end date for multi-day events';
COMMENT ON COLUMN events.category IS 'Event category (e.g., Workshop, Concert, Exhibition, Food)';
COMMENT ON COLUMN events.status IS 'Event status: active, cancelled, postponed';

-- Create index on category for filtering
CREATE INDEX IF NOT EXISTS idx_events_category ON events(category);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_events_status ON events(status);

-- Create index on start_date for date range queries
CREATE INDEX IF NOT EXISTS idx_events_start_date ON events(start_date);

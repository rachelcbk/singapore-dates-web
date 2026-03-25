-- Migration: Add general_area field to events table
-- Created: 2026-03-25

-- Add general_area column
ALTER TABLE events
    ADD COLUMN IF NOT EXISTS general_area TEXT;

-- Add comment for documentation
COMMENT ON COLUMN events.general_area IS 'General area/region of the event (e.g., Orchard, Sentosa, Marina Bay)';

-- Create index for filtering by area
CREATE INDEX IF NOT EXISTS idx_events_general_area ON events(general_area);

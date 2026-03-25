export interface Event {
  id: string;
  title: string;
  organiser: string;
  cost: string;
  summary: string;
  location: string;
  event_date_range: string;
  event_time: string;
  description: string;
  image_url: string;
  created_at: string;
  updated_at: string;
  // New fields
  start_date: string | null;
  end_date: string | null;
  category: string | null;
  status: string;
  general_area: string | null;
}

// Helper function to format date range for display
export function formatDateRange(startDate: string | null, endDate: string | null, fallbackRange: string): string {
  if (!startDate) return fallbackRange;
  
  const start = new Date(startDate);
  const startFormatted = start.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });
  
  if (!endDate || startDate === endDate) {
    return startFormatted;
  }
  
  const end = new Date(endDate);
  const endFormatted = end.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });
  
  return `${startFormatted} - ${endFormatted}`;
}

// Helper function to get category display name
export function getCategoryLabel(category: string | null): string {
  if (!category) return 'Event';
  return category;
}

// Helper function to get status badge styles
export function getStatusStyles(status: string): { bg: string; text: string } {
  switch (status.toLowerCase()) {
    case 'active':
      return { bg: 'bg-tertiary-container', text: 'text-on-tertiary-container' };
    case 'cancelled':
      return { bg: 'bg-error-container', text: 'text-on-error-container' };
    case 'postponed':
      return { bg: 'bg-secondary-container', text: 'text-on-secondary-container' };
    default:
      return { bg: 'bg-surface-container-high', text: 'text-on-surface-variant' };
  }
}

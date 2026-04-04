import { getEventById } from '../../lib/supabase';
import { notFound } from 'next/navigation';
import { formatDateRange } from '../../types';
import Link from 'next/link';

interface EventPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: EventPageProps) {
  const { id } = await params;
  const event = await getEventById(id);
  
  if (!event) {
    return {
      title: 'Event Not Found | Head Out',
    };
  }
  
  return {
    title: `${event.title} | Head Out`,
    description: event.summary,
    openGraph: {
      title: event.title,
      description: event.summary,
      images: event.image_url ? [event.image_url] : [],
    },
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { id } = await params;
  const event = await getEventById(id);
  
  if (!event) {
    notFound();
  }
  
  const isFree = event.cost === 'FREE';
  const displayDate = formatDateRange(event.start_date, event.end_date, event.event_date_range);
  const shareUrl = `https://headout.sg/event/${event.id}`;
  
  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md">
        <nav className="flex items-center justify-between w-full px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-extrabold text-[#2c2f30] tracking-[-2%] brand-font">
            Head Out
          </Link>
          <Link 
            href="/" 
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="font-medium">Back to Events</span>
          </Link>
        </nav>
      </header>

      {/* Event Content */}
      <main className="max-w-3xl mx-auto px-6 py-8">
        {/* Cost Badge */}
        <div className="flex justify-center mb-6">
          <span className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm ${
            isFree 
              ? 'bg-tertiary-container text-on-tertiary-container' 
              : 'bg-secondary-container text-on-secondary-container'
          }`}>
            {event.cost}
          </span>
        </div>

        {/* Event Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-on-surface text-center mb-3 leading-tight">
          {event.title}
        </h1>

        {/* Organiser */}
        <p className="text-center text-on-surface-variant text-base mb-8">
          by <span className="font-semibold text-primary">{event.organiser}</span>
        </p>

        {/* Share Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: event.title,
                  text: `Check out ${event.title} on Head Out!`,
                  url: shareUrl,
                });
              } else {
                navigator.clipboard.writeText(shareUrl);
                alert('Link copied to clipboard!');
              }
            }}
            className="flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
          >
            <span className="material-symbols-outlined text-lg">share</span>
            Share Event
          </button>
        </div>

        {/* Hero Image */}
        <div className="aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
          <img 
            className="w-full h-full object-cover" 
            alt={event.title}
            src={event.image_url || '/placeholder.jpg'} 
          />
        </div>

        {/* Description */}
        <div className="mb-10 space-y-4">
          {event.description.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-on-surface-variant leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Info Bar */}
        <div className="bg-surface-container-low rounded-[2rem] p-8 md:p-12">
          {/* Location */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center mb-3 shadow-sm">
              <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-1">Location</p>
            <p className="text-sm text-on-surface font-semibold">{event.location}</p>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center mb-3 shadow-sm">
                <span className="material-symbols-outlined text-primary text-2xl">calendar_today</span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-1">Date</p>
              <p className="text-sm text-on-surface font-semibold">{displayDate}</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center mb-3 shadow-sm">
                <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-1">Time</p>
              <p className="text-sm text-on-surface font-semibold">{event.event_time}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

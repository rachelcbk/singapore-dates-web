'use client';

import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="group bg-surface-container-lowest rounded-DEFAULT overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(44,47,48,0.06)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          className="w-full h-full object-cover" 
          alt={event.title}
          src={event.image_url || '/placeholder.jpg'} 
        />
        <div className="absolute top-4 left-4">
          <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm ${
            event.cost === 'FREE' 
              ? 'bg-tertiary-container text-on-tertiary-container' 
              : 'bg-secondary-container text-on-secondary-container'
          }`}>
            {event.cost}
          </span>
        </div>
      </div>
      <div className="p-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-on-surface-variant mb-3">
          By: {event.organiser}
        </p>
        <h3 className="text-2xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
          {event.summary}
        </p>
        <div className="flex items-center text-xs text-on-surface-variant font-medium gap-4">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">calendar_today</span>
            <span>{event.event_date_range}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">location_on</span>
            <span>{event.location}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

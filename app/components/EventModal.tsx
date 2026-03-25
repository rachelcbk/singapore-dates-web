'use client';

import { Event, formatDateRange } from '../types';
import { useEffect } from 'react';

interface EventModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

export function EventModal({ event, isOpen, onClose }: EventModalProps) {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !event) return null;

  const isFree = event.cost === 'FREE';
  const displayDate = formatDateRange(event.start_date, event.end_date, event.event_date_range);

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-inverse-surface/60 backdrop-blur-md" />
      
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface-container-lowest rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-surface/80 backdrop-blur-md text-on-surface hover:bg-surface-container-high transition-all duration-200 shadow-lg"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Content Container */}
        <div className="p-6 md:p-10">
          {/* Category Badge (if available) */}
          {event.category && (
            <div className="flex justify-center mb-4">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary-container text-on-primary-container shadow-sm">
                {event.category}
              </span>
            </div>
          )}

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
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface text-center mb-3 leading-tight">
            {event.title}
          </h2>

          {/* Organiser */}
          <p className="text-center text-on-surface-variant text-base mb-8">
            by <span className="font-semibold text-on-surface">{event.organiser}</span>
          </p>

          {/* Hero Image */}
          <div className="aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              className="w-full h-full object-cover" 
              alt={event.title}
              src={event.image_url || '/placeholder.jpg'} 
            />
          </div>

          {/* Description */}
          <div className="mb-10">
            <p className="text-on-surface-variant leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Date Card */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-on-primary-container">calendar_today</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1">Date</p>
                <p className="text-sm font-semibold text-on-surface">{displayDate}</p>
              </div>
            </div>

            {/* Time Card */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-on-primary-container">schedule</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1">Time</p>
                <p className="text-sm font-semibold text-on-surface">{event.event_time}</p>
              </div>
            </div>

            {/* General Area Card */}
            {event.general_area && (
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-on-primary-container">map</span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1">Area</p>
                  <p className="text-sm font-semibold text-on-surface">{event.general_area}</p>
                </div>
              </div>
            )}

            {/* Location Card */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-on-primary-container">location_on</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1">Location</p>
                <p className="text-sm font-semibold text-on-surface">{event.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

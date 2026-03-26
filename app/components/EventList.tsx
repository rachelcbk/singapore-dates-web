'use client';

import { EventCard } from './EventCard';
import { Event } from '../types';

interface EventListProps {
  events: Event[];
}

export function EventList({ events }: EventListProps) {
  return (
    <>
      {/* TopAppBar Navigation Shell */}
      <header className="docked full-width top-0 z-50 bg-surface/80 backdrop-blur-md sticky">
        <nav className="flex flex-col w-full px-6 pt-4 pb-2 max-w-7xl mx-auto">
          <div className="flex items-center justify-between w-full">
            {/* Brand Logo (Identity Lock) */}
            <div className="text-2xl font-extrabold text-[#2c2f30] tracking-[-2%] brand-font">
              Head Out
            </div>
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a className="text-[#0052FF] border-b-2 border-[#0052FF] pb-1 font-medium transition-colors duration-300" href="#">All</a>
              <a className="text-[#595c5d] hover:text-[#2c2f30] transition-colors duration-300" href="#">Things to Do</a>
              <a className="text-[#595c5d] hover:text-[#2c2f30] transition-colors duration-300" href="#">Food</a>
              <a className="text-[#595c5d] hover:text-[#2c2f30] transition-colors duration-300" href="#">Concerts</a>
            </div>
            {/* Action Cluster */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-surface-container-low px-4 py-2 rounded-full">
                <span className="material-symbols-outlined text-on-surface-variant text-sm">search</span>
                <input className="bg-transparent border-none focus:ring-0 text-sm w-40 text-on-surface placeholder:text-on-surface-variant/60" placeholder="Explore Singapore" type="text" />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24">
        {/* Hero Editorial Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-6 leading-[1.1]">
                The City's <span className="text-primary italic">Pulse</span>, Curated.
              </h1>
              <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
                Discover exclusive workshops, underground pop-ups, and tech mixers hidden in the heart of Singapore.
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl transform rotate-2">
                <img className="w-full h-full object-cover" alt="Modern Singapore skyline at dusk with warm purple and blue ambient lighting reflecting off glass skyscrapers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDBsbkwyBIwv3NdYIc-eZM_AOZicvH1QQfByxwiJwZaWJd0cI1CiT-uHG8oyrnjIgWjBKXyOnIOjvuS7y0KVLqUMnfN2F59YGs7dpcwTvR3fEswK-nIE4h6xjs-xXoCk8366hXp-IlCGps2aGbdiJ99wGACEaBMBT-YYiROo5L1E5UB9zf2589-a9w32py7AXUu9v-5fjxHy2IasPnA_wsDTUOBinoG_8J-bLwcTADRr4ViAovpJqy4MAGL6qdqbCCeXRDCsAJsa0" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-container p-6 rounded-DEFAULT shadow-xl hidden md:block max-w-[240px]">
                <p className="text-on-primary-container font-bold text-sm uppercase tracking-wider mb-2">Featured This Week</p>
                <p className="text-on-primary-container text-lg font-semibold">Artisanal Rooftop Pottery Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Filter Tabs (Mobile Only Scroll) */}
        <div className="md:hidden flex overflow-x-auto space-x-4 pb-8 no-scrollbar">
          <button className="whitespace-nowrap bg-primary text-on-primary px-6 py-2 rounded-full font-medium">All Events</button>
          <button className="whitespace-nowrap bg-surface-container-low text-on-surface-variant px-6 py-2 rounded-full font-medium">Things to Do</button>
          <button className="whitespace-nowrap bg-surface-container-low text-on-surface-variant px-6 py-2 rounded-full font-medium">Food</button>
          <button className="whitespace-nowrap bg-surface-container-low text-on-surface-variant px-6 py-2 rounded-full font-medium">Concerts</button>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3 mb-10 overflow-x-auto no-scrollbar pb-2">
          <button className="whitespace-nowrap bg-primary text-on-primary px-8 py-3 rounded-full font-bold text-sm shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
            Today
          </button>
          <button className="whitespace-nowrap bg-surface-container-high text-on-surface-variant px-8 py-3 rounded-full font-bold text-sm transition-all hover:bg-surface-container-highest hover:scale-105 active:scale-95">
            This Weekend
          </button>
          <button className="whitespace-nowrap bg-surface-container-high text-on-surface-variant px-8 py-3 rounded-full font-bold text-sm transition-all hover:bg-surface-container-highest hover:scale-105 active:scale-95 flex items-center gap-2">
            Filter by Price
            <span className="material-symbols-outlined text-lg">expand_more</span>
          </button>
          <button className="whitespace-nowrap bg-surface-container-high text-on-surface-variant px-8 py-3 rounded-full font-bold text-sm transition-all hover:bg-surface-container-highest hover:scale-105 active:scale-95 flex items-center gap-2">
            Filter by Date
            <span className="material-symbols-outlined text-lg">expand_more</span>
          </button>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {events.length > 0 ? (
            events.map((event) => (
              <EventCard 
                key={event.id} 
                event={event} 
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-on-surface-variant text-lg">No events found. Check back soon!</p>
            </div>
          )}
        </div>

        {/* Pagination / Load More */}
        <div className="mt-20 flex justify-center">
          <button className="bg-surface-container-highest-30 hover-bg-surface-container-highest transition-colors px-12 py-4 rounded-full font-bold text-on-surface border border-outline-variant-20">
            Discover More
          </button>
        </div>
      </main>

      {/* Footer Shell */}
      <footer className="bg-surface-container-low mt-24 pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-extrabold text-on-surface mb-6 tracking-tight">Head Out</h2>
            <p className="text-on-surface-variant max-w-sm mb-8">Your digital curator for the best experiences in the Lion City. We cut through the noise to bring you what matters.</p>
            <div className="flex space-x-4">
              <a className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-all" href="#">
                <span className="material-symbols-outlined text-xl">public</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-primary hover:text-on-primary transition-all" href="#">
                <span className="material-symbols-outlined text-xl">chat</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-4 text-on-surface-variant text-sm">
              <li><a className="hover:text-primary" href="#">Featured Events</a></li>
              <li><a className="hover:text-primary" href="#">New Workshops</a></li>
              <li><a className="hover:text-primary" href="#">Tech Mixers</a></li>
              <li><a className="hover:text-primary" href="#">Community Board</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs">Connect</h4>
            <ul className="space-y-4 text-on-surface-variant text-sm">
              <li><a className="hover:text-primary" href="#">List an Event</a></li>
              <li><a className="hover:text-primary" href="#">Partner With Us</a></li>
              <li><a className="hover:text-primary" href="#">Support</a></li>
              <li><a className="hover:text-primary" href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-outline-variant/10">
          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest text-center md:text-left">© 2024 HEAD OUT SINGAPORE. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </>
  );
}
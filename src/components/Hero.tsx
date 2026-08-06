import React, { useState } from 'react';
import { Calendar, Users, ArrowRight, ShieldCheck, Sparkles, MessageCircle, MapPin } from 'lucide-react';
import { SearchState } from '../types';
import { OFFICIAL_WHATSAPP_NUMBER } from '../data/mockData';

interface HeroProps {
  onSearch: (searchState: SearchState) => void;
  onOpenWhatsApp: (roomName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onOpenWhatsApp }) => {
  const [checkIn, setCheckIn] = useState<string>('2026-08-10');
  const [checkOut, setCheckOut] = useState<string>('2026-08-14');
  const [guests, setGuests] = useState<number>(2);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ checkIn, checkOut, guests, suiteType: 'all' });
    const roomsElement = document.getElementById('rooms');
    if (roomsElement) {
      roomsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[620px] sm:min-h-[700px] flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#031632] border-b border-[#E2E8F0]">
      
      {/* Background Image filling the section */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80"
          alt="Damron Suites Mzuzu Background"
          className="w-full h-full object-cover object-center filter brightness-[0.8]"
        />
        {/* Dark overlay for optimal text contrast with Deep Navy tint */}
        <div className="absolute inset-0 bg-[#031632]/65 backdrop-blur-[2px]" />
      </div>

      {/* Centered Overlay Content Container */}
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center space-y-6 sm:space-y-8">
        
        {/* Header Text & Tag */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/50 text-[#031632] text-xs font-bold tracking-wide uppercase shadow-ambient">
            <Sparkles className="w-3.5 h-3.5 text-[#0060ac]" />
            <span>Mzuzu Guesthouse & Executive Suites</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] drop-shadow-md">
            Serene & Refined <br className="hidden sm:block" />
            <span className="text-[#a4c9ff] font-serif italic">
              Hospitality in Mzuzu
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#d2e4f9] max-w-2xl mx-auto font-normal leading-relaxed drop-shadow">
            Experience modern minimalism and warm Malawian hospitality in the heart of Mzuzu, Northern Malawi. Tailored for corporate executives, regional travelers, and holidaymakers.
          </p>
        </div>

        {/* Centered Booking Container Overlay */}
        <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-ambient-lg max-w-3xl mx-auto text-left text-[#151c27]">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E2E8F0]">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#031632]" />
              <h3 className="font-serif font-bold text-[#031632] text-lg">Check Availability & Book</h3>
            </div>
            <span className="text-xs font-semibold text-[#003e73] bg-[#d4e3ff]/60 px-3 py-1 rounded-full border border-[#a4c9ff]">
              Best Rate Guarantee
            </span>
          </div>

          <form onSubmit={handleSearchSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Check-In */}
              <div>
                <label className="block text-xs font-semibold text-[#44474d] uppercase tracking-wider mb-1.5">
                  Check-In Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 bg-white border border-[#c5c6ce] rounded-xl text-sm text-[#151c27] font-medium focus:outline-none focus:border-[#0060ac] focus:ring-1 focus:ring-[#0060ac] shadow-sm"
                    required
                  />
                </div>
              </div>

              {/* Check-Out */}
              <div>
                <label className="block text-xs font-semibold text-[#44474d] uppercase tracking-wider mb-1.5">
                  Check-Out Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 bg-white border border-[#c5c6ce] rounded-xl text-sm text-[#151c27] font-medium focus:outline-none focus:border-[#0060ac] focus:ring-1 focus:ring-[#0060ac] shadow-sm"
                    required
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-xs font-semibold text-[#44474d] uppercase tracking-wider mb-1.5">
                  Guests
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full pl-10 pr-8 py-2.5 bg-white border border-[#c5c6ce] rounded-xl text-sm text-[#151c27] font-medium focus:outline-none focus:border-[#0060ac] focus:ring-1 focus:ring-[#0060ac] shadow-sm"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={6}>5+ Guests (Family)</option>
                  </select>
                </div>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-[#031632] hover:bg-[#1a2b48] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 active:scale-[0.98]"
                id="check-availability-hero-btn"
              >
                <span>Check Suite Availability</span>
                <ArrowRight className="w-4 h-4 text-[#68abff]" />
              </button>

              <button
                type="button"
                onClick={() => onOpenWhatsApp()}
                className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>WhatsApp Desk ({OFFICIAL_WHATSAPP_NUMBER})</span>
              </button>
            </div>
          </form>

          {/* Badges footer inside card */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 mt-4 border-t border-[#E2E8F0] text-xs text-[#44474d] font-semibold">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Best Rate Guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Instant Room Inspection
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Direct WhatsApp Booking
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};


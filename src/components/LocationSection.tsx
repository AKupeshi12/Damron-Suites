import React, { useState } from 'react';
import { MapPin, Plane, ShoppingBag, Utensils, ExternalLink, Building, Landmark as BankIcon, Compass } from 'lucide-react';
import { LANDMARKS, OFFICIAL_LOCATION_ADDRESS } from '../data/mockData';
import { Landmark } from '../types';

export const LocationSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLandmark, setActiveLandmark] = useState<Landmark | null>(LANDMARKS[0]);

  const filteredLandmarks = selectedCategory === 'all'
    ? LANDMARKS
    : LANDMARKS.filter((l) => l.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'finance': return <BankIcon className="w-4 h-4 text-[#0060ac]" />;
      case 'shopping': return <ShoppingBag className="w-4 h-4 text-[#0060ac]" />;
      case 'education': return <Building className="w-4 h-4 text-[#0060ac]" />;
      case 'medical': return <Building className="w-4 h-4 text-[#0060ac]" />;
      case 'transport': return <Plane className="w-4 h-4 text-[#0060ac]" />;
      default: return <Compass className="w-4 h-4 text-[#031632]" />;
    }
  };

  return (
    <section id="location" className="py-16 sm:py-20 bg-[#f9f9ff] text-[#151c27]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f0f3ff] border border-[#a4c9ff] text-[#003e73] text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#0060ac]" />
            <span>Mzuzu City Center Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#031632] tracking-tight">
            Prime Mzuzu Location & Key Landmarks
          </h2>
          <p className="text-[#44474d] font-normal text-base mt-2">
            Located in Mzuzu ({OFFICIAL_LOCATION_ADDRESS}). Everything you need — from financial headquarters and shopping malls to healthcare and airport transit — is just minutes away.
          </p>
        </div>

        {/* Map & Landmark Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Map Component */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Interactive Map Visual Stage */}
            <div className="relative h-[420px] sm:h-[480px] rounded-2xl overflow-hidden border border-[#E2E8F0] bg-[#e2e8f8] shadow-ambient group">
              
              {/* Clean Map Stylized SVG */}
              <svg className="w-full h-full object-cover opacity-90" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d3daea" strokeWidth="1" />
                  </pattern>
                </defs>
                
                <rect width="100%" height="100%" fill="#f0f3ff" />
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Major Mzuzu Road Arteries */}
                <path d="M 50 0 L 250 500" stroke="#c5c6ce" strokeWidth="8" fill="none" />
                <path d="M 0 300 L 800 280" stroke="#c5c6ce" strokeWidth="8" fill="none" />
                <path d="M 100 150 C 300 200, 400 100, 700 350" stroke="#0060ac" strokeWidth="3" strokeDasharray="6 6" fill="none" />
              </svg>

              {/* Damron Suites Main HQ Pin */}
              <div className="absolute top-[45%] left-[42%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer">
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-12 h-12 bg-[#031632]/20 rounded-full animate-ping pointer-events-none" />
                  <div className="w-10 h-10 rounded-full bg-[#031632] border-2 border-white flex items-center justify-center shadow-ambient-lg text-white font-bold">
                    <Compass className="w-5 h-5 text-[#68abff]" />
                  </div>
                  <div className="absolute top-12 whitespace-nowrap bg-[#031632] text-white px-3 py-1 rounded-xl shadow-ambient text-xs font-serif font-bold">
                    Damron Suites (Mzuzu)
                  </div>
                </div>
              </div>

              {/* Dynamic Pins for Landmarks */}
              {LANDMARKS.map((landmark) => {
                const isActive = activeLandmark?.id === landmark.id;
                return (
                  <div
                    key={landmark.id}
                    onClick={() => setActiveLandmark(landmark)}
                    style={{ top: `${landmark.lat}%`, left: `${landmark.lng}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer transition-all ${
                      isActive ? 'scale-125 z-30' : 'hover:scale-110'
                    }`}
                  >
                    <div className={`p-2 rounded-full border-2 shadow-ambient flex items-center justify-center ${
                      isActive
                        ? 'bg-[#0060ac] border-white text-white ring-4 ring-[#0060ac]/20'
                        : 'bg-white border-[#c5c6ce] text-[#031632]'
                    }`}>
                      {getCategoryIcon(landmark.category)}
                    </div>
                  </div>
                );
              })}

              {/* Active Landmark Popover Banner */}
              {activeLandmark && (
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-[#E2E8F0] p-4 rounded-xl shadow-ambient-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fadeIn">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="p-1.5 rounded-lg bg-[#f0f3ff]">
                        {getCategoryIcon(activeLandmark.category)}
                      </span>
                      <h4 className="font-serif font-bold text-[#031632] text-sm">
                        {activeLandmark.name}
                      </h4>
                    </div>
                    <p className="text-xs text-[#44474d] font-normal">
                      {activeLandmark.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 whitespace-nowrap">
                    <div className="text-right">
                      <span className="text-xs font-bold text-[#031632] block">{activeLandmark.distance}</span>
                      <span className="text-[10px] text-[#75777e]">{activeLandmark.travelTime}</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Google Maps Directions Action Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl bg-white border border-[#E2E8F0] text-xs gap-3 shadow-ambient">
              <span className="text-[#44474d] font-medium">
                📍 Location: Damron Suites - Mzuzu, G2H4+WR3, Northern Malawi
              </span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Damron+Suites+Mzuzu"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#031632] hover:bg-[#1a2b48] text-white font-bold flex items-center gap-1.5 transition-colors shrink-0"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#68abff]" />
              </a>
            </div>

          </div>

          {/* Right Column: Landmark List & Category Filters */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 pb-2">
              {[
                { id: 'all', label: 'All Mzuzu Locations' },
                { id: 'finance', label: 'Banks' },
                { id: 'shopping', label: 'Malls & CBD' },
                { id: 'education', label: 'MZUNI' },
                { id: 'transport', label: 'Airport' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                    selectedCategory === tab.id
                      ? 'bg-[#031632] text-white shadow-ambient'
                      : 'bg-white border border-[#E2E8F0] text-[#44474d] hover:bg-[#f0f3ff]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* List of Landmarks */}
            <div className="space-y-3">
              {filteredLandmarks.map((landmark) => {
                const isSelected = activeLandmark?.id === landmark.id;
                return (
                  <div
                    key={landmark.id}
                    onClick={() => setActiveLandmark(landmark)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#f0f3ff] border-[#0060ac] ring-1 ring-[#0060ac] shadow-ambient'
                        : 'bg-white border-[#E2E8F0] hover:border-[#a4c9ff] hover:bg-[#f9f9ff]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-[#f0f3ff] border border-[#a4c9ff]/60 text-[#031632] mt-0.5">
                          {getCategoryIcon(landmark.category)}
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-[#031632] text-sm">
                            {landmark.name}
                          </h4>
                          <p className="text-xs text-[#44474d] mt-1 line-clamp-2 font-normal">
                            {landmark.description}
                          </p>
                        </div>
                      </div>

                      <div className="text-right whitespace-nowrap">
                        <span className="text-xs font-bold text-[#031632] block">{landmark.distance}</span>
                        <span className="text-[10px] text-[#75777e] block mt-0.5">{landmark.travelTime}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


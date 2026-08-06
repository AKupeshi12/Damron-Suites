import React, { useState } from 'react';
import { Wind, Wifi, Tv, Wine, Compass, Eye, MessageCircle, Star, Sparkles, Coffee } from 'lucide-react';
import { Room } from '../types';
import { OFFICIAL_WHATSAPP_NUMBER } from '../data/mockData';

interface RoomGalleryProps {
  rooms: Room[];
  onInspectRoom: (room: Room) => void;
  onWhatsAppInquiry: (room: Room) => void;
}

export const RoomGallery: React.FC<RoomGalleryProps> = ({
  rooms,
  onInspectRoom,
  onWhatsAppInquiry,
}) => {
  const [filterType, setFilterType] = useState<string>('all');

  const filteredRooms = filterType === 'all'
    ? rooms
    : rooms.filter((r) => r.type === filterType);

  return (
    <section id="rooms" className="py-16 sm:py-20 bg-[#f9f9ff] text-[#151c27]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0f3ff] border border-[#a4c9ff] text-[#003e73] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#0060ac]" />
              <span>Instant Room Inspection Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#031632] tracking-tight">
              Curated Suites at Damron Mzuzu
            </h2>
            <p className="text-[#44474d] font-normal text-base mt-2 max-w-xl">
              Inspect amenities, high-definition photo angles, and launch direct WhatsApp booking inquiries to {OFFICIAL_WHATSAPP_NUMBER}.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Suites' },
              { id: 'standard', label: 'Standard' },
              { id: 'deluxe', label: 'Deluxe' },
              { id: 'executive', label: 'Executive' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  filterType === tab.id
                    ? 'bg-[#031632] text-white shadow-ambient'
                    : 'bg-white border border-[#E2E8F0] text-[#44474d] hover:text-[#031632] hover:bg-[#f0f3ff]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Suites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="group bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#a4c9ff] overflow-hidden shadow-ambient hover:shadow-ambient-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Room Image Header */}
              <div>
                <div className="relative h-64 overflow-hidden bg-[#e2e8f8]">
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Price Tag Overlay */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#E2E8F0] text-[#031632] shadow-ambient">
                    <span className="text-base font-serif font-bold">MWK {room.price.toLocaleString()}</span>
                    <span className="text-xs text-[#75777e] font-medium"> / night</span>
                  </div>

                  {/* Rating Tag */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl border border-[#E2E8F0] text-amber-500 text-xs font-bold flex items-center gap-1 shadow-ambient">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{room.rating}</span>
                  </div>

                  {/* Room Type Pill */}
                  <div className="absolute bottom-4 left-4 bg-[#031632]/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {room.size} • {room.capacity}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-serif font-bold text-[#031632] group-hover:text-[#0060ac] transition-colors">
                    {room.name}
                  </h3>

                  <p className="text-xs text-[#44474d] line-clamp-2 leading-relaxed font-normal">
                    {room.description}
                  </p>

                  {/* Amenity Badges (AC, Wi-Fi, DSTV, Mini Bar) */}
                  <div className="pt-2 border-t border-[#E2E8F0]">
                    <span className="text-[10px] uppercase tracking-wider text-[#75777e] font-bold block mb-2">
                      Key Amenity Features
                    </span>
                    <div className="flex flex-wrap gap-1.5 text-xs">
                      {room.features.airConditioning && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#f0f3ff] text-[#003e73] border border-[#a4c9ff]/60 font-semibold text-[11px]">
                          <Wind className="w-3.5 h-3.5 text-[#0060ac]" /> AC
                        </span>
                      )}
                      {room.features.wifi && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#f0f3ff] text-[#003e73] border border-[#a4c9ff]/60 font-semibold text-[11px]">
                          <Wifi className="w-3.5 h-3.5 text-[#0060ac]" /> Wi-Fi
                        </span>
                      )}
                      {room.features.dstv && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#f0f3ff] text-[#003e73] border border-[#a4c9ff]/60 font-semibold text-[11px]">
                          <Tv className="w-3.5 h-3.5 text-[#0060ac]" /> DSTV
                        </span>
                      )}
                      {room.features.miniBar && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#f0f3ff] text-[#003e73] border border-[#a4c9ff]/60 font-semibold text-[11px]">
                          <Wine className="w-3.5 h-3.5 text-[#0060ac]" /> Mini Bar
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2.5">
                
                {/* Instant Inspection Button */}
                <button
                  onClick={() => onInspectRoom(room)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#f0f3ff] hover:bg-[#d4e3ff] text-[#003e73] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-[#a4c9ff]"
                  id={`inspect-${room.id}-btn`}
                >
                  <Eye className="w-4 h-4 text-[#0060ac]" />
                  <span>Inspect Suite Details & Photos</span>
                </button>

                {/* Tap-To-Book via WhatsApp */}
                <button
                  onClick={() => onWhatsAppInquiry(room)}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2 active:scale-95"
                  id={`whatsapp-${room.id}-btn`}
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Inquire via WhatsApp</span>
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


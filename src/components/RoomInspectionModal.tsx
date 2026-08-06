import React, { useState } from 'react';
import { X, Check, MessageCircle, Wind, Wifi, Tv, Wine, Coffee, Compass, Bath, Users, Maximize, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Room } from '../types';
import { OFFICIAL_WHATSAPP_NUMBER } from '../data/mockData';

interface RoomInspectionModalProps {
  room: Room | null;
  onClose: () => void;
  onWhatsAppInquiry: (room: Room, customDates?: { checkIn: string; checkOut: string; guests: number }) => void;
}

export const RoomInspectionModal: React.FC<RoomInspectionModalProps> = ({
  room,
  onClose,
  onWhatsAppInquiry,
}) => {
  if (!room) return null;

  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [checkInDate, setCheckInDate] = useState('2026-08-10');
  const [checkOutDate, setCheckOutDate] = useState('2026-08-14');
  const [guestsCount, setGuestsCount] = useState(2);

  const nextImage = () => {
    setActiveImgIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setActiveImgIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const calculateNights = () => {
    const d1 = new Date(checkInDate);
    const d2 = new Date(checkOutDate);
    const diff = Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 3600 * 24));
    return diff > 0 ? diff : 1;
  };

  const nights = calculateNights();
  const totalPrice = room.price * nights;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-8 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#f0f3ff] border-b border-[#E2E8F0]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-white text-[#003e73] border border-[#a4c9ff] text-xs font-bold uppercase tracking-wider">
              Instant Suite Inspection
            </span>
            <h3 className="text-xl font-serif font-bold text-[#031632]">
              {room.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#75777e] hover:text-[#031632] hover:bg-[#d4e3ff]/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 max-h-[80vh] overflow-y-auto">
          
          {/* Left Column: Image Viewer */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Active Image Stage */}
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-[#E2E8F0] bg-[#e2e8f8] group shadow-ambient">
              <img
                src={room.images[activeImgIndex]}
                alt={`${room.name} angle ${activeImgIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-500"
              />

              {/* Navigation Arrows */}
              {room.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#031632]/80 text-white hover:bg-[#031632] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#031632]/80 text-white hover:bg-[#031632] transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-[#031632]/90 text-xs font-semibold text-white">
                Photo {activeImgIndex + 1} of {room.images.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {room.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIndex(idx)}
                  className={`relative h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImgIndex === idx
                      ? 'border-[#0060ac] ring-2 ring-[#0060ac]/20'
                      : 'border-[#E2E8F0] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Description & Highlights */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-[#75777e] uppercase tracking-wider">
                Suite Overview
              </h4>
              <p className="text-sm text-[#44474d] leading-relaxed font-normal">
                {room.longDescription}
              </p>

              <div className="pt-2">
                <span className="text-xs font-bold text-[#031632] uppercase tracking-wider block mb-2">
                  Suite Highlights
                </span>
                <div className="flex flex-wrap gap-2">
                  {room.highlights.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#f0f3ff] text-xs text-[#003e73] border border-[#a4c9ff]/60 font-semibold"
                    >
                      <Check className="w-3.5 h-3.5 text-[#0060ac]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Specs, Price & WhatsApp Quick Inquire */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            <div className="space-y-5">
              
              {/* Pricing Header */}
              <div className="p-4 rounded-xl bg-[#f0f3ff] border border-[#a4c9ff] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#75777e] uppercase tracking-wider block font-bold">Nightly Rate</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-[#031632]">MWK {room.price.toLocaleString()}</span>
                    <span className="text-xs text-[#75777e]">/ night</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-3 py-1.5 rounded-lg border border-amber-200 text-xs font-bold">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span>{room.rating} ({room.reviewsCount})</span>
                </div>
              </div>

              {/* Room Key Specs */}
              <div className="grid grid-cols-2 gap-3 text-xs text-[#151c27]">
                <div className="p-3 rounded-xl bg-white border border-[#E2E8F0] flex items-center gap-2 shadow-ambient">
                  <Maximize className="w-4 h-4 text-[#0060ac]" />
                  <div>
                    <span className="text-[#75777e] block text-[10px]">Room Size</span>
                    <span className="font-bold text-[#031632]">{room.size}</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E2E8F0] flex items-center gap-2 shadow-ambient">
                  <Users className="w-4 h-4 text-[#0060ac]" />
                  <div>
                    <span className="text-[#75777e] block text-[10px]">Capacity</span>
                    <span className="font-bold text-[#031632]">{room.capacity}</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E2E8F0] flex items-center gap-2 col-span-2 shadow-ambient">
                  <Bath className="w-4 h-4 text-[#0060ac]" />
                  <div>
                    <span className="text-[#75777e] block text-[10px]">Bedding</span>
                    <span className="font-bold text-[#031632]">{room.bedType}</span>
                  </div>
                </div>
              </div>

              {/* Included Amenities Icons */}
              <div>
                <span className="text-xs font-bold text-[#75777e] uppercase tracking-wider block mb-2.5">
                  Included Amenities
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {room.amenities.map((amenity) => (
                    <div key={amenity.id} className="flex items-center gap-2 text-[#003e73] bg-[#f0f3ff] p-2 rounded-lg border border-[#a4c9ff]/60 font-medium">
                      <Check className="w-3.5 h-3.5 text-[#0060ac]" />
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dates Calculation Form */}
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-ambient space-y-3">
                <span className="text-xs font-bold text-[#031632] uppercase tracking-wider block">
                  Select Stay Dates
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <label className="text-[#44474d] block mb-1 font-medium">Check-in</label>
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full bg-[#f9f9ff] border border-[#E2E8F0] rounded-lg p-2 text-[#031632] focus:outline-none focus:border-[#0060ac]"
                    />
                  </div>
                  <div>
                    <label className="text-[#44474d] block mb-1 font-medium">Check-out</label>
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="w-full bg-[#f9f9ff] border border-[#E2E8F0] rounded-lg p-2 text-[#031632] focus:outline-none focus:border-[#0060ac]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 text-xs text-[#44474d] border-t border-[#E2E8F0]">
                  <span>Total for {nights} Night{nights > 1 ? 's' : ''}:</span>
                  <span className="text-base font-serif font-bold text-[#031632]">MWK {totalPrice.toLocaleString()}</span>
                </div>
              </div>

            </div>

            {/* Tap-To-Book via WhatsApp Action */}
            <div className="space-y-2 pt-4">
              <button
                onClick={() => {
                  onWhatsAppInquiry(room, {
                    checkIn: checkInDate,
                    checkOut: checkOutDate,
                    guests: guestsCount,
                  });
                  onClose();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
                id="modal-whatsapp-book-btn"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Inquire via WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-[#75777e] font-medium">
                ⚡ Direct message pre-filled to Damron Suites Concierge ({OFFICIAL_WHATSAPP_NUMBER}).
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};


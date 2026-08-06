import React, { useState } from 'react';
import { X, MessageCircle, Send, Coffee, Plane } from 'lucide-react';
import { Room } from '../types';
import { OFFICIAL_WHATSAPP_NUMBER } from '../data/mockData';

interface WhatsAppBookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoom: Room | null;
  allRooms: Room[];
  initialSearch?: {
    checkIn?: string;
    checkOut?: string;
    guests?: number;
  };
}

export const WhatsAppBookingDrawer: React.FC<WhatsAppBookingDrawerProps> = ({
  isOpen,
  onClose,
  selectedRoom,
  allRooms,
  initialSearch,
}) => {
  if (!isOpen) return null;

  const [roomId, setRoomId] = useState<string>(selectedRoom ? selectedRoom.id : allRooms[0]?.id || '');
  const [checkIn, setCheckIn] = useState<string>(initialSearch?.checkIn || '2026-08-10');
  const [checkOut, setCheckOut] = useState<string>(initialSearch?.checkOut || '2026-08-14');
  const [guests, setGuests] = useState<number>(initialSearch?.guests || 2);
  const [guestName, setGuestName] = useState<string>('');
  const [includeBreakfast, setIncludeBreakfast] = useState<boolean>(true);
  const [airportTransfer, setAirportTransfer] = useState<boolean>(false);
  const [specialNote, setSpecialNote] = useState<string>('');
  const [whatsappNumber] = useState<string>(OFFICIAL_WHATSAPP_NUMBER); // Official Mzuzu WhatsApp

  const activeRoom = allRooms.find((r) => r.id === roomId) || selectedRoom || allRooms[0];

  // Calculate nights
  const calculateNights = () => {
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diff = Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 3600 * 24));
    return diff > 0 ? diff : 1;
  };

  const nights = calculateNights();
  const estimatedCost = activeRoom ? activeRoom.price * nights : 0;

  // Generate structured message
  const generateMessage = () => {
    const nameStr = guestName ? `Guest Name: ${guestName}\n` : '';
    const roomStr = activeRoom ? `Suite Requested: ${activeRoom.name} (MWK ${activeRoom.price.toLocaleString()}/night)\n` : '';
    const breakfastStr = includeBreakfast ? '• Daily Mzuzu Highland Breakfast included\n' : '';
    const transferStr = airportTransfer ? '• Requesting Mzuzu Airport Transfer Service\n' : '';
    const noteStr = specialNote ? `Special Request: ${specialNote}\n` : '';

    return `Hello Damron Suites Mzuzu Reservation Team! 👋\n\nI would like to inquire about suite availability at Damron Suites (G2H4+WR3, Mzuzu):\n\n${nameStr}${roomStr}Check-In: ${checkIn}\nCheck-Out: ${checkOut} (${nights} Night${nights > 1 ? 's' : ''})\nGuests: ${guests} Guest${guests > 1 ? 's' : ''}\nEstimated Total: MWK ${estimatedCost.toLocaleString()}\n\nAdditional Requests:\n${breakfastStr}${transferStr}${noteStr}\nPlease confirm availability and booking instructions for Damron Suites Mzuzu. Thank you!`;
  };

  const formattedMsg = generateMessage();

  const handleLaunchWhatsApp = () => {
    const encodedMsg = encodeURIComponent(formattedMsg);
    // Clean phone for wa.me URL
    const cleanPhone = whatsappNumber.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-8 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#031632] text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-md">
              <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-white leading-tight">
                Tap-to-Book via WhatsApp
              </h3>
              <p className="text-xs text-[#a4c9ff]">
                Damron Suites Mzuzu Concierge • {OFFICIAL_WHATSAPP_NUMBER}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#a4c9ff] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Step 1: Booking Details Selector */}
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#031632] block">
              1. Customize Your Mzuzu Stay Request
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              
              {/* Select Room */}
              <div className="sm:col-span-2">
                <label className="block text-[#44474d] mb-1 font-semibold">Selected Suite</label>
                <select
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full bg-[#f9f9ff] border border-[#E2E8F0] rounded-xl p-2.5 text-[#031632] font-semibold text-sm focus:border-[#0060ac] focus:outline-none"
                >
                  {allRooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} - MWK {room.price.toLocaleString()}/night ({room.capacity})
                    </option>
                  ))}
                </select>
              </div>

              {/* Guest Name */}
              <div>
                <label className="block text-[#44474d] mb-1 font-semibold">Your Name (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Kondwani Phiri"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-[#f9f9ff] border border-[#E2E8F0] rounded-xl p-2.5 text-[#031632] focus:border-[#0060ac] focus:outline-none"
                />
              </div>

              {/* Guests Count */}
              <div>
                <label className="block text-[#44474d] mb-1 font-semibold">Number of Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-[#f9f9ff] border border-[#E2E8F0] rounded-xl p-2.5 text-[#031632] focus:border-[#0060ac] focus:outline-none"
                >
                  <option value={1}>1 Adult</option>
                  <option value={2}>2 Adults</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                </select>
              </div>

              {/* Check-In */}
              <div>
                <label className="block text-[#44474d] mb-1 font-semibold">Check-In Date</label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-[#f9f9ff] border border-[#E2E8F0] rounded-xl p-2.5 text-[#031632] focus:border-[#0060ac] focus:outline-none"
                />
              </div>

              {/* Check-Out */}
              <div>
                <label className="block text-[#44474d] mb-1 font-semibold">Check-Out Date</label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-[#f9f9ff] border border-[#E2E8F0] rounded-xl p-2.5 text-[#031632] focus:border-[#0060ac] focus:outline-none"
                />
              </div>

            </div>

            {/* Checkboxes for Add-ons */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs">
              <label className="flex items-center gap-2 cursor-pointer bg-[#f0f3ff] p-2.5 rounded-xl border border-[#a4c9ff]/60 hover:border-[#0060ac]">
                <input
                  type="checkbox"
                  checked={includeBreakfast}
                  onChange={(e) => setIncludeBreakfast(e.target.checked)}
                  className="rounded text-[#0060ac] focus:ring-[#0060ac]"
                />
                <Coffee className="w-4 h-4 text-[#0060ac]" />
                <span className="text-[#003e73] font-semibold">Include Mzuzu Highland Breakfast</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer bg-[#f0f3ff] p-2.5 rounded-xl border border-[#a4c9ff]/60 hover:border-[#0060ac]">
                <input
                  type="checkbox"
                  checked={airportTransfer}
                  onChange={(e) => setAirportTransfer(e.target.checked)}
                  className="rounded text-[#0060ac] focus:ring-[#0060ac]"
                />
                <Plane className="w-4 h-4 text-[#0060ac]" />
                <span className="text-[#003e73] font-semibold">Request Mzuzu Airport Transfer</span>
              </label>
            </div>

            {/* Special Request */}
            <div>
              <label className="block text-xs font-semibold text-[#44474d] mb-1">
                Special Requests or Expected Arrival Time
              </label>
              <input
                type="text"
                placeholder="e.g. Arriving around 2:00 PM from Mzuzu Airport, prefer quiet room"
                value={specialNote}
                onChange={(e) => setSpecialNote(e.target.value)}
                className="w-full bg-[#f9f9ff] border border-[#E2E8F0] rounded-xl p-2.5 text-xs text-[#031632] focus:border-[#0060ac] focus:outline-none"
              />
            </div>

          </div>

          {/* Step 2: Message Live Preview Box */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold uppercase tracking-wider text-[#031632]">
                2. Live WhatsApp Message Preview
              </span>
              <span className="text-[#75777e] font-medium">Pre-filled automatically</span>
            </div>

            <div className="p-4 rounded-xl bg-[#031632] font-mono text-xs text-[#a4c9ff] whitespace-pre-wrap leading-relaxed shadow-inner border border-[#0060ac]/30">
              {formattedMsg}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#f0f3ff] border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-[#75777e] block font-medium">Official WhatsApp Desk:</span>
            <span className="text-sm font-bold text-[#031632] font-mono">{whatsappNumber}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-3 rounded-xl bg-white border border-[#E2E8F0] hover:bg-[#d4e3ff]/40 text-[#44474d] text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handleLaunchWhatsApp}
              className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
              id="send-whatsapp-drawer-btn"
            >
              <Send className="w-4 h-4 fill-white text-emerald-600" />
              <span>Send Message via WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};


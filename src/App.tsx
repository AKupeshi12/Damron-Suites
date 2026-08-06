/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyStayWithUs } from './components/WhyStayWithUs';
import { RoomGallery } from './components/RoomGallery';
import { RoomInspectionModal } from './components/RoomInspectionModal';
import { WhatsAppBookingDrawer } from './components/WhatsAppBookingDrawer';
import { DiningSection } from './components/DiningSection';
import { LocationSection } from './components/LocationSection';
import { CuratedSpaces } from './components/CuratedSpaces';
import { Footer } from './components/Footer';

import { ROOMS_DATA } from './data/mockData';
import { Room, SearchState, MenuItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [inspectedRoom, setInspectedRoom] = useState<Room | null>(null);
  const [whatsappDrawerOpen, setWhatsappDrawerOpen] = useState<boolean>(false);
  const [selectedWhatsAppRoom, setSelectedWhatsAppRoom] = useState<Room | null>(null);
  const [searchParams, setSearchParams] = useState<SearchState>({
    checkIn: '2026-08-10',
    checkOut: '2026-08-14',
    guests: 2,
    suiteType: 'all',
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenWhatsApp = (room?: Room | null) => {
    setSelectedWhatsAppRoom(room || ROOMS_DATA[0]);
    setWhatsappDrawerOpen(true);
  };

  const handleSearch = (searchState: SearchState) => {
    setSearchParams(searchState);
    triggerToast(`Searching availability for ${searchState.guests} guest(s) from ${searchState.checkIn} to ${searchState.checkOut}...`);
  };

  const handleOrderRoomService = (item: MenuItem) => {
    triggerToast(`Requested "${item.name}" for in-suite delivery! Our concierge will contact your room.`);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-xs font-semibold animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onSearch={handleSearch}
          onOpenWhatsApp={() => handleOpenWhatsApp()}
        />

        {/* Why Stay With Us Feature Highlights */}
        <WhyStayWithUs />

        {/* Feature 1: The "Instant Room Inspection" Gallery */}
        <RoomGallery
          rooms={ROOMS_DATA}
          onInspectRoom={(room) => setInspectedRoom(room)}
          onWhatsAppInquiry={(room) => handleOpenWhatsApp(room)}
        />

        {/* Curated Spaces Bento Gallery */}
        <CuratedSpaces
          onExploreRooms={() => {
            const roomsElem = document.getElementById('rooms');
            if (roomsElem) roomsElem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Feature 3: Dining & Location Integration */}
        <DiningSection
          onOrderRoomService={handleOrderRoomService}
        />

        <LocationSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenWhatsApp={() => handleOpenWhatsApp()}
        onNavigate={(tab) => setActiveTab(tab)}
      />

      {/* Feature 2: Floating "Tap-to-Book via WhatsApp" CTA Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => handleOpenWhatsApp()}
          className="group relative inline-flex items-center gap-3 px-5 py-3.5 rounded-full bg-slate-900 border border-slate-700 text-white font-semibold text-xs sm:text-sm shadow-2xl hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 ring-4 ring-slate-900/10"
          id="floating-whatsapp-btn"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-md">
            <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
          </div>
          <span className="pr-1 font-serif font-bold tracking-tight text-white">
            Inquire via WhatsApp (+265887444100)
          </span>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
        </button>
      </div>

      {/* Modals & Drawers */}
      <RoomInspectionModal
        room={inspectedRoom}
        onClose={() => setInspectedRoom(null)}
        onWhatsAppInquiry={(room) => handleOpenWhatsApp(room)}
      />

      <WhatsAppBookingDrawer
        isOpen={whatsappDrawerOpen}
        onClose={() => setWhatsappDrawerOpen(false)}
        selectedRoom={selectedWhatsAppRoom}
        allRooms={ROOMS_DATA}
        initialSearch={{
          checkIn: searchParams.checkIn,
          checkOut: searchParams.checkOut,
          guests: searchParams.guests,
        }}
      />

    </div>
  );
}

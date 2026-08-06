import React, { useState } from 'react';
import { MessageCircle, Menu, X, Compass, MapPin } from 'lucide-react';
import { OFFICIAL_WHATSAPP_NUMBER } from '../data/mockData';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenWhatsApp: (roomName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenWhatsApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Suites & Inspection' },
    { id: 'dining', label: 'Mzuzu Dining' },
    { id: 'location', label: 'Mzuzu Map & Landmarks' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] text-[#151c27] transition-all shadow-ambient">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 rounded-xl bg-[#031632] flex items-center justify-center text-white shadow-sm group-hover:bg-[#1a2b48] transition-all">
              <Compass className="w-6 h-6 text-[#68abff]" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#031632] block leading-none">
                Damron Suites
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#75777e] flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3 text-[#0060ac] inline" /> Mzuzu • Northern Malawi
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4 text-sm font-semibold">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg transition-all relative ${
                  activeTab === item.id
                    ? 'text-[#031632] font-bold bg-[#f0f3ff]'
                    : 'text-[#44474d] hover:text-[#031632] hover:bg-[#f9f9ff]'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0060ac] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenWhatsApp()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
              id="whatsapp-header-btn"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-100 text-emerald-600" />
              <span>WhatsApp: {OFFICIAL_WHATSAPP_NUMBER}</span>
            </button>

            <button
              onClick={() => handleNavClick('rooms')}
              className="px-5 py-2.5 rounded-lg bg-[#031632] hover:bg-[#1a2b48] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenWhatsApp()}
              className="p-2 rounded-lg bg-emerald-600 text-white"
              title="WhatsApp Booking"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#151c27] hover:bg-[#f0f3ff] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E2E8F0] px-4 pt-2 pb-6 space-y-2 animate-fadeIn shadow-ambient-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-semibold ${
                activeTab === item.id
                  ? 'bg-[#f0f3ff] text-[#031632] font-bold'
                  : 'text-[#44474d] hover:bg-[#f9f9ff] hover:text-[#031632]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-[#E2E8F0] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp: {OFFICIAL_WHATSAPP_NUMBER}
            </button>
            <button
              onClick={() => handleNavClick('rooms')}
              className="w-full py-3 rounded-lg bg-[#031632] text-white font-bold text-xs uppercase tracking-wider"
            >
              Browse Suites & Book
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


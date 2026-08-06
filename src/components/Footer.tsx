import React, { useState } from 'react';
import { Compass, MessageCircle, Phone, Mail, MapPin, Send, Check } from 'lucide-react';
import { OFFICIAL_LOCATION_ADDRESS, OFFICIAL_WHATSAPP_NUMBER } from '../data/mockData';

interface FooterProps {
  onOpenWhatsApp: () => void;
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp, onNavigate }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setContactName('');
      setContactEmail('');
      setContactMsg('');
    }, 4000);
  };

  return (
    <footer id="contact" className="bg-[#031632] text-slate-300 pt-16 pb-12 border-t border-[#0060ac]/30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quick Contact Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#0060ac]/20">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0060ac] flex items-center justify-center text-white font-bold shadow-md">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white block leading-none">
                  Damron Suites
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#a4c9ff] block mt-1">
                  Mzuzu • Northern Malawi
                </span>
              </div>
            </div>

            <p className="text-sm text-[#a4c9ff]/80 font-normal leading-relaxed max-w-sm">
              Refined Northern Malawian hospitality for business travelers, tourists, and diplomats. Modern minimalism, peaceful ambiance, and 24/7 dedicated concierge service.
            </p>

            <div className="space-y-2 text-xs text-slate-200 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#68abff] shrink-0 mt-0.5" />
                <span>Damron Suites - Mzuzu ({OFFICIAL_LOCATION_ADDRESS})</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#68abff] shrink-0" />
                <span>{OFFICIAL_WHATSAPP_NUMBER} (Direct Concierge Desk)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#68abff] shrink-0" />
                <span>reservations@damronsuitesmzuzu.com</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenWhatsApp}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>WhatsApp Desk ({OFFICIAL_WHATSAPP_NUMBER})</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8 text-xs">
            <div>
              <h4 className="font-serif font-bold text-white uppercase tracking-wider mb-4">
                Explore
              </h4>
              <ul className="space-y-2.5 text-[#a4c9ff]/80">
                <li>
                  <button onClick={() => onNavigate('rooms')} className="hover:text-white transition-colors">
                    Suites & Rates
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('dining')} className="hover:text-white transition-colors">
                    Dining & Bar
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('location')} className="hover:text-white transition-colors">
                    Mzuzu Landmarks & Map
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                    About Damron Mzuzu
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-white uppercase tracking-wider mb-4">
                Nearby
              </h4>
              <ul className="space-y-2.5 text-[#a4c9ff]/80">
                <li>Reserve Bank Mzuzu</li>
                <li>National Bank Mzuzu</li>
                <li>Shoprite Mall CBD</li>
                <li>Mzuzu University</li>
                <li>Mzuzu Airport</li>
              </ul>
            </div>
          </div>

          {/* Quick Message Form */}
          <div id="about" className="lg:col-span-5 bg-[#010b1a] p-6 rounded-2xl border border-[#0060ac]/30">
            <h4 className="font-serif font-bold text-white text-base mb-1">
              Direct Suite Inquiry
            </h4>
            <p className="text-xs text-[#a4c9ff]/80 mb-4 font-normal">
              Have a special request, group reservation, or airport transfer question? Send us a message below.
            </p>

            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>Thank you! Your message has been received. Our Damron Suites Mzuzu concierge will reach out shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-[#031632] border border-[#0060ac]/40 rounded-xl p-2.5 text-white placeholder:text-[#a4c9ff]/50 focus:border-[#68abff] focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full bg-[#031632] border border-[#0060ac]/40 rounded-xl p-2.5 text-white placeholder:text-[#a4c9ff]/50 focus:border-[#68abff] focus:outline-none"
                  />
                </div>
                <textarea
                  required
                  rows={2}
                  placeholder="How can Damron Suites Mzuzu assist you?"
                  value={contactMsg}
                  onChange={(e) => setContactMsg(e.target.value)}
                  className="w-full bg-[#031632] border border-[#0060ac]/40 rounded-xl p-2.5 text-white placeholder:text-[#a4c9ff]/50 focus:border-[#68abff] focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-white hover:bg-[#d4e3ff] text-[#031632] font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5 text-[#031632]" />
                  <span>Send Direct Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#a4c9ff]/60 gap-4">
          <p>© 2026 Damron Suites Mzuzu. All rights reserved.</p>
          <p className="text-[#a4c9ff]/60">Damron Suites - Mzuzu, G2H4+WR3, Northern Malawi</p>
        </div>

      </div>
    </footer>
  );
};


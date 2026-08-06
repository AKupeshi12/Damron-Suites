import React from 'react';
import { Sparkles, ConciergeBell, MapPin, Feather, Wifi, Coffee, Shield } from 'lucide-react';

export const WhyStayWithUs: React.FC = () => {
  const pillars = [
    {
      icon: Feather,
      title: 'Serene Mzuzu Climate Comfort',
      description:
        'Sink into plush cotton linens and climate-controlled serenity with AC in every suite, perfectly crafted for cool Mzuzu highland comfort.',
    },
    {
      icon: ConciergeBell,
      title: 'Refined Malawian Service',
      description:
        'Experience attentive yet unobtrusive hospitality, dedicated 24/7 security, and direct WhatsApp concierge assistance.',
    },
    {
      icon: MapPin,
      title: 'Prime Mzuzu City Center Access',
      description:
        'Located at G2H4+WR3, Mzuzu — minutes from Reserve Bank of Malawi, National Bank, Shoprite Mall, and Mzuzu Airport.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-b border-[#E2E8F0] text-[#151c27]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#031632] tracking-tight mb-3">
            Why Stay With Us in Mzuzu
          </h2>
          <p className="text-base sm:text-lg text-[#44474d] font-normal leading-relaxed">
            Elevating hospitality in Northern Malawi with meticulous attention to detail, premium security, and calm sanctuary comfort.
          </p>
        </div>

        {/* 3 Column Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="group p-8 rounded-2xl bg-[#f9f9ff] border border-[#E2E8F0] hover:border-[#a4c9ff] transition-all duration-300 shadow-ambient hover:shadow-ambient-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-[#031632] text-white flex items-center justify-center mb-6 group-hover:bg-[#0060ac] transition-all shadow-sm">
                  <Icon className="w-6 h-6 text-[#68abff]" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#031632] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#44474d] leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick Amenity Banner */}
        <div className="mt-14 pt-8 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-6 text-xs text-[#003e73] uppercase tracking-wider font-semibold">
          <div className="flex items-center gap-2 bg-[#d4e3ff]/40 px-3.5 py-1.5 rounded-full border border-[#a4c9ff]">
            <Wifi className="w-4 h-4 text-[#0060ac]" />
            <span>High-Speed Fiber Wi-Fi</span>
          </div>
          <div className="flex items-center gap-2 bg-[#d4e3ff]/40 px-3.5 py-1.5 rounded-full border border-[#a4c9ff]">
            <Shield className="w-4 h-4 text-[#0060ac]" />
            <span>24/7 Security & Gated Parking</span>
          </div>
          <div className="flex items-center gap-2 bg-[#d4e3ff]/40 px-3.5 py-1.5 rounded-full border border-[#a4c9ff]">
            <Coffee className="w-4 h-4 text-[#0060ac]" />
            <span>Mzuzu Highland Coffee Station</span>
          </div>
          <div className="flex items-center gap-2 bg-[#d4e3ff]/40 px-3.5 py-1.5 rounded-full border border-[#a4c9ff]">
            <Sparkles className="w-4 h-4 text-[#0060ac]" />
            <span>Daily Housekeeping & Turndown</span>
          </div>
        </div>

      </div>
    </section>
  );
};


import React from 'react';
import { Wifi, Tv, Coffee, ArrowRight } from 'lucide-react';
import { GALLERY_HIGHLIGHTS } from '../data/mockData';

interface CuratedSpacesProps {
  onExploreRooms: () => void;
}

export const CuratedSpaces: React.FC<CuratedSpacesProps> = ({ onExploreRooms }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#f9f9ff] border-t border-[#E2E8F0] text-[#151c27]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#031632] tracking-tight">
              Curated Spaces for Restful Stays in Mzuzu
            </h2>

            <p className="text-[#44474d] font-normal text-base leading-relaxed">
              Every suite at Damron Suites Mzuzu is crafted with modern minimalism, utilizing warm lighting and premium comforts to offer a serene sanctuary in Northern Malawi.
            </p>

            <div className="pt-2 border-t border-[#E2E8F0] flex flex-wrap gap-3 text-xs font-semibold text-[#003e73]">
              <span className="flex items-center gap-2 bg-[#d4e3ff]/50 px-3 py-1.5 rounded-full border border-[#a4c9ff]">
                <Wifi className="w-4 h-4 text-[#0060ac]" /> High-Speed Wi-Fi
              </span>
              <span className="flex items-center gap-2 bg-[#d4e3ff]/50 px-3 py-1.5 rounded-full border border-[#a4c9ff]">
                <Tv className="w-4 h-4 text-[#0060ac]" /> DSTV Premium
              </span>
              <span className="flex items-center gap-2 bg-[#d4e3ff]/50 px-3 py-1.5 rounded-full border border-[#a4c9ff]">
                <Coffee className="w-4 h-4 text-[#0060ac]" /> Mzuzu Coffee
              </span>
            </div>

            <div className="pt-4">
              <button
                onClick={onExploreRooms}
                className="px-6 py-3 rounded-xl bg-[#031632] hover:bg-[#1a2b48] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-ambient group"
              >
                <span>Explore All Suites</span>
                <ArrowRight className="w-4 h-4 text-[#68abff] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Bento Gallery */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4">
            
            {/* Top Large Photo */}
            <div className="col-span-12 rounded-2xl overflow-hidden h-72 border border-[#E2E8F0] relative group shadow-ambient bg-[#f0f3ff]">
              <img
                src={GALLERY_HIGHLIGHTS[0].image}
                alt={GALLERY_HIGHLIGHTS[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031632]/85 via-transparent to-transparent flex flex-col justify-end p-6">
                <h4 className="text-lg font-serif font-bold text-white">
                  {GALLERY_HIGHLIGHTS[0].title}
                </h4>
                <p className="text-xs text-[#d2e4f9]">
                  {GALLERY_HIGHLIGHTS[0].subtitle}
                </p>
              </div>
            </div>

            {/* Bottom Left Photo */}
            <div className="col-span-6 rounded-2xl overflow-hidden h-56 border border-[#E2E8F0] relative group shadow-ambient bg-[#f0f3ff]">
              <img
                src={GALLERY_HIGHLIGHTS[1].image}
                alt={GALLERY_HIGHLIGHTS[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031632]/85 via-transparent to-transparent flex flex-col justify-end p-4">
                <h4 className="text-sm font-serif font-bold text-white">
                  {GALLERY_HIGHLIGHTS[1].title}
                </h4>
              </div>
            </div>

            {/* Bottom Right Photo */}
            <div className="col-span-6 rounded-2xl overflow-hidden h-56 border border-[#E2E8F0] relative group shadow-ambient bg-[#f0f3ff]">
              <img
                src={GALLERY_HIGHLIGHTS[2].image}
                alt={GALLERY_HIGHLIGHTS[2].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031632]/85 via-transparent to-transparent flex flex-col justify-end p-4">
                <h4 className="text-sm font-serif font-bold text-white">
                  {GALLERY_HIGHLIGHTS[2].title}
                </h4>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


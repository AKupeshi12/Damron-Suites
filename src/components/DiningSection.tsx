import React, { useState } from 'react';
import { Utensils, Coffee, Clock } from 'lucide-react';
import { MENU_ITEMS } from '../data/mockData';
import { MenuItem } from '../types';

interface DiningSectionProps {
  onOrderRoomService: (item: MenuItem) => void;
}

export const DiningSection: React.FC<DiningSectionProps> = ({ onOrderRoomService }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'breakfast' | 'dining' | 'cocktails' | 'in_room'>('all');

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="dining" className="py-16 sm:py-20 bg-[#f9f9ff] border-t border-b border-[#E2E8F0] text-[#151c27]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f0f3ff] border border-[#a4c9ff] text-[#003e73] text-xs font-bold uppercase tracking-wider">
              <Utensils className="w-3.5 h-3.5 text-[#0060ac]" />
              <span>Damron Suites Mzuzu Restaurant & Bar</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#031632] tracking-tight">
              Culinary Elegance & Regional Malawian Flavors
            </h2>

            <p className="text-[#44474d] font-normal text-base leading-relaxed">
              At Damron Suites Mzuzu, dining combines fresh regional ingredients with international standard recipes. Enjoy freshly pan-roasted Lake Malawi Chambo, authentic Nali chilli grilled meats, artisanal Mzuzu highland coffee, and signature cocktails.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-[#151c27]">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-center gap-3 shadow-ambient">
                <Coffee className="w-5 h-5 text-[#0060ac]" />
                <div>
                  <span className="font-bold text-[#031632] block">Mzuzu Highland Breakfast</span>
                  <span className="text-[#75777e] font-normal">Daily 06:30 - 10:30 AM</span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-center gap-3 shadow-ambient">
                <Clock className="w-5 h-5 text-[#0060ac]" />
                <div>
                  <span className="font-bold text-[#031632] block">24/7 Suite Room Service</span>
                  <span className="text-[#75777e] font-normal">Delivered hot directly to suite</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden h-64 border border-[#E2E8F0] shadow-ambient bg-white">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="Damron Suites Mzuzu Restaurant"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-64 border border-[#E2E8F0] shadow-ambient mt-6 bg-white">
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80"
                alt="Mzuzu Highland Coffee & Cocktails"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>

        {/* Menu Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-[#E2E8F0] gap-4">
          <h3 className="text-xl font-serif font-bold text-[#031632]">
            Signature Menu Highlights
          </h3>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Full Menu' },
              { id: 'breakfast', label: 'Breakfast' },
              { id: 'dining', label: 'All-Day Dining' },
              { id: 'cocktails', label: 'Cocktails & Bar' },
              { id: 'in_room', label: '24/7 Room Service' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#031632] text-white shadow-ambient'
                    : 'bg-white border border-[#E2E8F0] text-[#44474d] hover:text-[#031632] hover:bg-[#f0f3ff]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden flex flex-col justify-between hover:border-[#a4c9ff] transition-all shadow-ambient hover:shadow-ambient-lg group"
            >
              <div>
                <div className="h-48 overflow-hidden relative bg-[#f0f3ff]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#031632] text-white font-serif font-bold text-xs px-3 py-1.5 rounded-lg shadow-ambient">
                    {item.price}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags?.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-bold uppercase tracking-wider text-[#003e73] bg-[#d4e3ff]/60 px-2.5 py-0.5 rounded-full border border-[#a4c9ff]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-lg font-serif font-bold text-[#031632]">
                    {item.name}
                  </h4>

                  <p className="text-xs text-[#44474d] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => onOrderRoomService(item)}
                  className="w-full py-2.5 bg-[#031632] hover:bg-[#1a2b48] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-ambient"
                >
                  <Utensils className="w-3.5 h-3.5 text-[#68abff]" />
                  <span>Request Suite Delivery</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


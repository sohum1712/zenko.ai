import React from 'react';
import { Store, UtensilsCrossed, Shirt, Landmark, GraduationCap, Home } from 'lucide-react';

const industries = [
  { icon: Store, title: 'Retail & Kirana', desc: 'Catalog, WhatsApp orders, local SEO' },
  { icon: UtensilsCrossed, title: 'Restaurants', desc: 'Menu, QR ordering, Google reviews' },
  { icon: Shirt, title: 'Garments & Boutiques', desc: 'Lookbook, Instagram shop' },
  { icon: Landmark, title: 'Mandir/NGO', desc: 'Events, donations, volunteers' },
  { icon: GraduationCap, title: 'Coaching/Schools', desc: 'Admissions, results, notices' },
  { icon: Home, title: 'Real Estate', desc: 'Projects, site visits, leads' },
];

const Industries: React.FC = () => {
  return (
    <section className="py-14 bg-[#171717]" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-[#DEDEDE] text-center mb-8">Industries we serve (ગુજરાત)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl bg-[#4D4D4D] p-6 hover-lift overflow-hidden border border-[#171717]">
              {/* Accent stripe */}
              <div className="absolute -top-6 -left-6 w-40 h-40 rotate-[-25deg] bg-[#171717]/20" />
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#F25C23]" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#F25C23] text-[#171717] flex items-center justify-center mb-4 shadow-md">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-extrabold text-[#DEDEDE] mb-1">{title}</h3>
                <p className="text-sm text-[#DEDEDE]/85 mb-4">{desc}</p>
                <button className="text-xs font-semibold tracking-wider px-3 py-2 rounded-lg border border-[#DEDEDE]/20 text-[#DEDEDE] hover:bg-[#171717]">Explore</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;

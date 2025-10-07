import React from 'react';
import { Star } from 'lucide-react';

const TrustBar: React.FC = () => {
  return (
    <section className="bg-[#171717] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} className="text-[#F25C23]" />
          ))}
          <span className="text-[#DEDEDE] text-sm">4.9/5 • 120+ Google Reviews</span>
        </div>
        <div className="text-[#DEDEDE]/80 text-sm">
          Ahmedabad • Surat • Vadodara • Rajkot
        </div>
      </div>
    </section>
  );
};

export default TrustBar;

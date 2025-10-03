import React from 'react';
import { ArrowUpRight } from 'lucide-react';

// Professional service images - using local assets for better performance
import BrandImage from '@/components/assets/Brand.jpg';
import MarketingImage from '@/components/assets/Marketing.png';
import DigitalImage from '@/components/assets/Digital.png';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#1b1b1b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 bg-[#D1FF00] rounded-full flex items-center justify-center animate-pulse">
              <span className="block w-3 h-3 bg-black rounded-full"></span>
            </div>
            <p className="text-[#D1FF00] text-sm tracking-widest font-bold uppercase">WHAT WE DO</p>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 max-w-4xl mx-auto">
            DESIGNING FOR <span className="text-[#D1FF00]">SEAMLESS</span> AND<br className="hidden sm:block" />
            <span className="text-[#D1FF00]">ENJOYABLE</span> INTERACTIONS.
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            We create digital experiences that not only look stunning but also drive meaningful engagement and business growth.
          </p>
          <button className="bg-transparent border-2 border-[#D1FF00] px-8 py-4 rounded-full font-bold text-white hover:bg-[#D1FF00] hover:text-black transition-all duration-300 flex items-center gap-3 mx-auto transform hover:scale-105">
            VIEW ALL SERVICES <ArrowUpRight className="h-5 w-5" />
          </button>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Brand Building Card */}
          <div className="rounded-2xl bg-[#242424] p-8 flex flex-col shadow-xl min-h-[400px] relative hover-lift group border border-transparent hover:border-[#D1FF00]/30 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="uppercase text-white font-black text-2xl leading-tight group-hover:text-[#D1FF00] transition-colors duration-300">
                BRAND BUILDING &<br />STRATEGY
              </h3>
              <span className="inline-flex items-center justify-center w-10 h-10 bg-[#D1FF00] rounded-full group-hover:bg-white transition-all duration-300 group-hover:scale-110">
                <ArrowUpRight className="h-6 w-6 text-black group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </div>
            <p className="text-white/80 text-base mb-6 leading-relaxed">
              We develop comprehensive brand strategies that resonate with your audience and create lasting emotional connections.
            </p>
            <div className="mt-auto">
              <img
                src={BrandImage}
                alt="Comprehensive brand building and strategy services showcasing professional brand identity development"
                className="rounded-xl w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>

          {/* Creative Solutions Card */}
          <div className="rounded-2xl bg-[#111ac3] p-8 flex flex-col shadow-xl min-h-[400px] relative hover-lift group border border-transparent hover:border-[#D1FF00]/30 transition-all duration-300 neon-glow-blue">
            <div className="flex justify-between items-start mb-4">
              <h3 className="uppercase text-white font-black text-2xl leading-tight group-hover:text-[#D1FF00] transition-colors duration-300">
                CREATIVE DIGITAL<br />SOLUTIONS
              </h3>
              <span className="inline-flex items-center justify-center w-10 h-10 bg-[#D1FF00] rounded-full group-hover:bg-white transition-all duration-300 group-hover:scale-110">
                <ArrowUpRight className="h-6 w-6 text-black group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </div>
            <p className="text-white/90 text-base mb-6 leading-relaxed">
              From web development to mobile apps, we craft innovative digital solutions that push boundaries and exceed expectations.
            </p>
            <div className="mt-auto">
              <img
                src={DigitalImage}
                alt="Innovative digital solutions including web development, mobile apps, and creative technology implementations"
                className="rounded-xl w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>

          {/* Marketing Card */}
          <div className="rounded-2xl bg-[#242424] p-8 flex flex-col shadow-xl min-h-[400px] relative hover-lift group border border-transparent hover:border-[#D1FF00]/30 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="uppercase text-white font-black text-2xl leading-tight group-hover:text-[#D1FF00] transition-colors duration-300">
                MARKETING &<br />CAMPAIGNS
              </h3>
              <span className="inline-flex items-center justify-center w-10 h-10 bg-[#D1FF00] rounded-full group-hover:bg-white transition-all duration-300 group-hover:scale-110">
                <ArrowUpRight className="h-6 w-6 text-black group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </div>
            <p className="text-white/80 text-base mb-6 leading-relaxed">
              Strategic marketing campaigns that amplify your reach, engage your audience, and drive measurable business growth.
            </p>
            <div className="mt-auto">
              <img
                src={MarketingImage}
                alt="Strategic marketing campaigns and digital advertising solutions for business growth and audience engagement"
                className="rounded-xl w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

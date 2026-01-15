import React from 'react';
import { ArrowUpRight } from 'lucide-react';

import BrandImage from '@/components/assets/Brand.jpg';
import MarketingImage from '@/components/assets/Marketing.png';
import DigitalImage from '@/components/assets/Digital.png';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#01583F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#F56013] rounded-full flex items-center justify-center">
                <span className="block w-3 h-3 bg-[#01583F] rounded-full"></span>
              </div>
              <p className="text-[#CDF546] text-sm tracking-widest font-bold uppercase font-sans">WHAT WE DO</p>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#FDF9DC] leading-tight mb-8 max-w-4xl mx-auto font-display">
              DESIGNING FOR <span className="text-[#CDF546]">SEAMLESS</span> AND<br className="hidden sm:block" />
              <span className="text-[#CDF546]">ENJOYABLE</span> INTERACTIONS.
            </h2>
            <p className="text-[#FDF9DC]/70 text-lg max-w-2xl mx-auto mb-8 font-sans">
              We create digital experiences that not only look stunning but also drive meaningful engagement and business growth.
            </p>
            <button className="bg-transparent border-2 border-[#CDF546] px-8 py-4 rounded-full font-bold text-[#FDF9DC] font-sans hover:bg-[#CDF546] hover:text-[#01583F] transition-all duration-300 flex items-center gap-3 mx-auto transform hover:scale-105">
              VIEW ALL SERVICES <ArrowUpRight className="h-5 w-5" />
            </button>
          </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Brand Building Card */}
            <div className="rounded-2xl bg-[#1A6950] p-8 flex flex-col shadow-xl min-h-[400px] relative hover-lift group border border-transparent hover:border-[#CDF546]/40 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="uppercase text-[#FDF9DC] font-black text-2xl leading-tight font-display group-hover:text-[#CDF546] transition-colors duration-300">
                  BRAND BUILDING &<br />STRATEGY
                </h3>
                <span className="inline-flex items-center justify-center w-10 h-10 bg-[#F56013] rounded-full transition-all duration-300 group-hover:scale-110">
                  <ArrowUpRight className="h-6 w-6 text-[#01583F] group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </div>
              <p className="text-[#FDF9DC]/80 text-base mb-6 leading-relaxed font-sans">
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
            <div className="rounded-2xl bg-[#1A6950] p-8 flex flex-col shadow-xl min-h-[400px] relative hover-lift group border border-transparent hover:border-[#CDF546]/40 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="uppercase text-[#FDF9DC] font-black text-2xl leading-tight font-display group-hover:text-[#CDF546] transition-colors duration-300">
                  CREATIVE DIGITAL<br />SOLUTIONS
                </h3>
                <span className="inline-flex items-center justify-center w-10 h-10 bg-[#CDF546] rounded-full transition-all duration-300 group-hover:scale-110">
                  <ArrowUpRight className="h-6 w-6 text-[#01583F] group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </div>
              <p className="text-[#FDF9DC]/90 text-base mb-6 leading-relaxed font-sans">
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
            <div className="rounded-2xl bg-[#1A6950] p-8 flex flex-col shadow-xl min-h-[400px] relative hover-lift group border border-transparent hover:border-[#CDF546]/40 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="uppercase text-[#FDF9DC] font-black text-2xl leading-tight font-display group-hover:text-[#CDF546] transition-colors duration-300">
                  MARKETING &<br />CAMPAIGNS
                </h3>
                <span className="inline-flex items-center justify-center w-10 h-10 bg-[#F56013] rounded-full transition-all duration-300 group-hover:scale-110">
                  <ArrowUpRight className="h-6 w-6 text-[#01583F] group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </div>
              <p className="text-[#FDF9DC]/80 text-base mb-6 leading-relaxed font-sans">
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

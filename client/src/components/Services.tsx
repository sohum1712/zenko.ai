import React from 'react';
import { ArrowUpRight } from 'lucide-react';

import BrandImage from '@/components/assets/Brand.jpg';
import MarketingImage from '@/components/assets/Marketing.png';
import DigitalImage from '@/components/assets/Digital.png';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#f8fbfe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4d8af0]/10 rounded-full border border-[#4d8af0]/20 mb-6">
            <span className="w-2 h-2 bg-[#4d8af0] rounded-full"></span>
            <span className="text-[#4d8af0] text-sm font-medium tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>OUR SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#1a1a2e] leading-tight mb-6" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            What We <span className="text-[#4d8af0]">Offer</span>
          </h2>
          <p className="text-[#6b7280] text-base md:text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            We create digital experiences that not only look stunning but also drive meaningful engagement and business growth.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Brand Building Card */}
          <div className="group rounded-2xl md:rounded-3xl bg-white border border-gray-100 p-6 md:p-8 hover:border-[#4d8af0]/30 transition-all duration-300 hover:shadow-xl shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-[#1a1a2e] font-semibold text-xl md:text-2xl leading-tight group-hover:text-[#4d8af0] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                Brand Building &<br />Strategy
              </h3>
              <span className="w-10 h-10 md:w-12 md:h-12 bg-[#4d8af0] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-200/50">
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </span>
            </div>
            <p className="text-[#6b7280] text-sm md:text-base mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              We develop comprehensive brand strategies that resonate with your audience and create lasting emotional connections.
            </p>
            <div className="overflow-hidden rounded-xl md:rounded-2xl">
              <img
                src={BrandImage}
                alt="Brand Building Services"
                className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Creative Solutions Card */}
          <div className="group rounded-2xl md:rounded-3xl bg-white border border-gray-100 p-6 md:p-8 hover:border-[#4d8af0]/30 transition-all duration-300 hover:shadow-xl shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-[#1a1a2e] font-semibold text-xl md:text-2xl leading-tight group-hover:text-[#4d8af0] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                Creative Digital<br />Solutions
              </h3>
              <span className="w-10 h-10 md:w-12 md:h-12 bg-[#e8f4fc] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-[#4d8af0]/20">
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-[#4d8af0]" />
              </span>
            </div>
            <p className="text-[#6b7280] text-sm md:text-base mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              From web development to mobile apps, we craft innovative digital solutions that push boundaries and exceed expectations.
            </p>
            <div className="overflow-hidden rounded-xl md:rounded-2xl">
              <img
                src={DigitalImage}
                alt="Digital Solutions"
                className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Marketing Card */}
          <div className="group rounded-2xl md:rounded-3xl bg-white border border-gray-100 p-6 md:p-8 hover:border-[#4d8af0]/30 transition-all duration-300 hover:shadow-xl shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-[#1a1a2e] font-semibold text-xl md:text-2xl leading-tight group-hover:text-[#4d8af0] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                Marketing &<br />Campaigns
              </h3>
              <span className="w-10 h-10 md:w-12 md:h-12 bg-[#4d8af0] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-200/50">
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </span>
            </div>
            <p className="text-[#6b7280] text-sm md:text-base mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Strategic marketing campaigns that amplify your reach, engage your audience, and drive measurable business growth.
            </p>
            <div className="overflow-hidden rounded-xl md:rounded-2xl">
              <img
                src={MarketingImage}
                alt="Marketing Services"
                className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-[#4d8af0] text-[#4d8af0] px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-sm md:text-base hover:bg-[#4d8af0] hover:text-white transition-all duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            View All Services
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

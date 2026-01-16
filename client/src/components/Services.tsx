import React from 'react';
import { ArrowUpRight } from 'lucide-react';

import BrandImage from '@/components/assets/Brand.jpg';
import MarketingImage from '@/components/assets/Marketing.png';
import DigitalImage from '@/components/assets/Digital.png';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#11120D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#565449]/30 rounded-full border border-[#565449] mb-6">
            <span className="w-2 h-2 bg-[#D8CFBC] rounded-full"></span>
            <span className="text-[#D8CFBC] text-sm font-medium tracking-wide">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-[#FFFBF4] leading-tight mb-6">
            What We <span className="text-[#D8CFBC]">Offer</span>
          </h2>
          <p className="text-[#D8CFBC] text-lg max-w-2xl mx-auto font-sans">
            We create digital experiences that not only look stunning but also drive meaningful engagement and business growth.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Building Card */}
          <div className="group rounded-3xl bg-[#565449]/20 border border-[#565449]/50 p-8 hover:border-[#D8CFBC]/50 transition-all duration-300 hover-lift">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-[#FFFBF4] font-display font-bold text-2xl leading-tight group-hover:text-[#D8CFBC] transition-colors">
                Brand Building &<br />Strategy
              </h3>
              <span className="w-12 h-12 bg-[#D8CFBC] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-6 h-6 text-[#11120D]" />
              </span>
            </div>
            <p className="text-[#D8CFBC] text-base mb-6 leading-relaxed font-sans">
              We develop comprehensive brand strategies that resonate with your audience and create lasting emotional connections.
            </p>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={BrandImage}
                alt="Brand Building Services"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Creative Solutions Card */}
          <div className="group rounded-3xl bg-[#565449]/20 border border-[#565449]/50 p-8 hover:border-[#D8CFBC]/50 transition-all duration-300 hover-lift">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-[#FFFBF4] font-display font-bold text-2xl leading-tight group-hover:text-[#D8CFBC] transition-colors">
                Creative Digital<br />Solutions
              </h3>
              <span className="w-12 h-12 bg-[#565449] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-[#D8CFBC]/50">
                <ArrowUpRight className="w-6 h-6 text-[#D8CFBC]" />
              </span>
            </div>
            <p className="text-[#D8CFBC] text-base mb-6 leading-relaxed font-sans">
              From web development to mobile apps, we craft innovative digital solutions that push boundaries and exceed expectations.
            </p>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={DigitalImage}
                alt="Digital Solutions"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Marketing Card */}
          <div className="group rounded-3xl bg-[#565449]/20 border border-[#565449]/50 p-8 hover:border-[#D8CFBC]/50 transition-all duration-300 hover-lift">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-[#FFFBF4] font-display font-bold text-2xl leading-tight group-hover:text-[#D8CFBC] transition-colors">
                Marketing &<br />Campaigns
              </h3>
              <span className="w-12 h-12 bg-[#D8CFBC] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-6 h-6 text-[#11120D]" />
              </span>
            </div>
            <p className="text-[#D8CFBC] text-base mb-6 leading-relaxed font-sans">
              Strategic marketing campaigns that amplify your reach, engage your audience, and drive measurable business growth.
            </p>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={MarketingImage}
                alt="Marketing Services"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-[#D8CFBC] text-[#D8CFBC] px-8 py-4 rounded-full font-bold font-sans hover:bg-[#D8CFBC] hover:text-[#11120D] transition-all duration-300"
          >
            View All Services
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;


export default Services;
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

// Dummy image URLs; replace with your own images as needed
const dummy1 = "https://placehold.co/340x140/222/fff?text=Brand+Image";
const dummy2 = "https://placehold.co/340x140/222/fff?text=Campaign+Image";
const dummy3 = "https://placehold.co/340x140/111ac3/fff?text=Creative+Image";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-[#1b1b1b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Heading and Button */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div className="flex items-center gap-3 mb-8 md:mb-0">
            <div className="w-6 h-6 bg-[#D1FF00] rounded-full flex items-center justify-center">
              <span className="block w-2 h-2 bg-black rounded-full"></span>
            </div>
            <p className="text-[#D1FF00] text-base tracking-widest font-bold uppercase">WHAT WE DO</p>
          </div>
          <h2 className="flex-1 text-center md:text-left text-3xl md:text-5xl font-black text-white leading-normal tracking-tight">
            DESIGNING FOR SEAMLESS AND<br />
            <span className="text-[#D1FF00]">ENJOYABLE INTERACTIONS.</span>
          </h2>
          <button className="ml-0 md:ml-6 mt-6 md:mt-0 bg-transparent border border-[#D1FF00] px-7 py-3 rounded-full font-bold text-xs md:text-base text-white hover:bg-[#D1FF00] hover:text-black transition-colors duration-300 flex items-center gap-2">
            ALL SERVICES <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Card */}
          <div className="rounded-xl bg-[#242424] p-6 flex flex-col shadow-lg min-h-[370px] relative">
            <div className="flex justify-between items-start mb-2">
              <h3 className="uppercase text-white font-black text-xl leading-tight">
                BRAND BUILDING &<br />STRATEGY.
              </h3>
              <span className="inline-flex items-center justify-center w-8 h-8 bg-[#D1FF00] rounded-full">
                <ArrowUpRight className="h-5 w-5 text-black" />
              </span>
            </div>
            <p className="text-white/70 text-sm mb-3">
              Lorem ipsum do adipiscing elit ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
            </p>
            <div className="mt-auto">
              <img
                src={dummy1}
                alt="brand"
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>

          {/* Center Card (dark blue same as hero bg) */}
          <div className="rounded-xl bg-[#111ac3] p-6 flex flex-col shadow-lg min-h-[370px] relative">
            <div className="flex justify-between items-start mb-2">
              <h3 className="uppercase text-white font-black text-xl leading-tight">
                CREATIVE DIGITAL<br />SOLUTION.
              </h3>
              <span className="inline-flex items-center justify-center w-8 h-8 bg-[#D1FF00] rounded-full">
                <ArrowUpRight className="h-5 w-5 text-black" />
              </span>
            </div>
            <p className="text-white/90 text-sm mb-3">
              Lorem ipsum do adipiscing elit ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
            </p>
            <div className="mt-auto">
              <img
                src={dummy3}
                alt="creative"
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-xl bg-[#242424] p-6 flex flex-col shadow-lg min-h-[370px] relative">
            <div className="flex justify-between items-start mb-2">
              <h3 className="uppercase text-white font-black text-xl leading-tight">
                MARKETING &<br />CAMPAIGN.
              </h3>
              <span className="inline-flex items-center justify-center w-8 h-8 bg-[#D1FF00] rounded-full">
                <ArrowUpRight className="h-5 w-5 text-black" />
              </span>
            </div>
            <p className="text-white/70 text-sm mb-3">
              Lorem ipsum do adipiscing elit ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
            </p>
            <div className="mt-auto">
              <img
                src={dummy2}
                alt="campaign"
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import Main from "@/components/assets/Main.png";
import PythonIcon from '@/components/assets/python.png';
import NodeIcon from '@/components/assets/Node.jpeg';
import ReactIcon from '@/components/assets/React.jpeg';
import MongoIcon from '@/components/assets/Mongo.jpeg';
import JsIcon from '@/components/assets/js.jpeg';
import TsIcon from '@/components/assets/Tsx.jpeg';
import DockerIcon from '@/components/assets/Docker.jpeg';

const TechIconBar: React.FC = () => {
  return (
    <div className="mt-16 flex justify-center">
      <div className="bg-[#242424] rounded-3xl px-8 py-5 flex items-center gap-11">
        <img src={PythonIcon} alt="Python" className="w-12 h-12 object-contain rounded-full" />
        <img src={NodeIcon} alt="Node.js" className="w-12 h-12 object-contain rounded-full" />
        <img src={ReactIcon} alt="React" className="w-12 h-12 object-contain rounded-full" />
        <img src={MongoIcon} alt="MongoDB" className="w-12 h-12 object-contain rounded-full" />
        <img src={JsIcon} alt="JavaScript" className="w-12 h-12 object-contain rounded-full" />
        <img src={TsIcon} alt="TypeScript" className="w-12 h-12 object-contain rounded-full" />
        <img src={DockerIcon} alt="Docker" className="w-12 h-12 object-contain rounded-full" />
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#1b1b1b] min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-[#D1FF00] rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full" />
              </div>
              <span className="uppercase text-xs font-bold tracking-widest text-[#D1FF00]">Who We Are</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black leading-[1.05] mb-6 text-white uppercase">
              Creativity<br />meets strategy.
            </h2>
            <p className="text-[#f3f3f3] text-base md:text-lg mb-7" style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}>
              With a team of passionate designers, marketers, and innovators, we specialize in delivering unique solutions that elevate your brand and captivate your audience.
            </p>
            {/* Neon Highlight Stats */}
            <div className="flex flex-col gap-6 mb-7">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D1FF00] flex items-center justify-center text-2xl">
                  <span role="img" aria-label="brain">🧠</span>
                </div>
                <span className="font-black text-xl text-white tracking-wider uppercase">
                  Over 10 years of experience
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#111ac3] flex items-center justify-center text-2xl">
                  <span role="img" aria-label="megaphone">📣</span>
                </div>
                <span className="font-black text-xl text-white tracking-wider uppercase">
                  Trusted by Global Brands
                </span>
              </div>
            </div>
          </div>
          {/* Right Column: Image and Right Side Stats */}
          <div className="relative flex flex-col">
            {/* Main Girl Image with frame */}
            <div className="relative flex justify-center pb-12">
              <div className="absolute -top-7 right-0 z-0 rounded-[2rem] h-[410px] w-[440px] border-8 border-[#111ac3] bg-[#242424]"></div>
              <div className="relative z-10 rounded-[2rem] overflow-hidden h-[410px] w-[380px] bg-[#111ac3] border-4 border-[#D1FF00] flex items-center justify-center">
                <img
                  src={Main}
                  alt="about-main"
                  className="object-cover w-full h-full rounded-[1.5rem] border-8 border-[#242424]"
                />
              </div>
            </div>
            {/* Stats/Progress Bars and about column */}
            <div className="pr-4">
              <div className="flex items-center gap-3 mb-4">
                <img src="https://placehold.co/90x50" className="rounded-lg object-cover w-24 h-12" alt="project" />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-black text-base text-white uppercase tracking-wider">
                      Successful Campaign Launches
                    </span>
                    <span className="font-black text-base text-[#D1FF00]">95%</span>
                  </div>
                  <div className="w-full bg-[#242424] rounded-full h-3">
                    <div className="bg-[#D1FF00] h-3 rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div style={{ width: 96, height: 0 }} />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-black text-base text-white uppercase tracking-wider">
                      Innovative Design
                    </span>
                    <span className="font-black text-base text-[#D1FF00]">85%</span>
                  </div>
                  <div className="w-full bg-[#242424] rounded-full h-3">
                    <div className="bg-[#111ac3] h-3 rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div style={{ width: 96, height: 0 }} />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-black text-base text-white uppercase tracking-wider">
                      High Impact Project
                    </span>
                    <span className="font-black text-base text-[#D1FF00]">100%</span>
                  </div>
                  <div className="w-full bg-[#242424] rounded-full h-3">
                    <div className="bg-white h-3 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>
              <p className="text-[#e3e3e3] text-base mt-4 mb-5" style={{ fontFamily: "'Montserrat', Arial, sans-serif" }}>
                Consectetuer adipiscing congue aptent placera senec efficitur aptent malesuada sit conubia tincidunt iaculis
              </p>
              <button className="px-8 py-4 border-2 border-[#111ac3] rounded-full text-[#D1FF00] font-bold uppercase text-base hover:bg-[#111ac3] hover:text-white transition-colors tracking-wider">
                About us
              </button>
            </div>
          </div>
        </div>
      </div>
      <TechIconBar/>
    </section>
  );
};

export default About;

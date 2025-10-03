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
  const technologies = [
    { src: PythonIcon, alt: "Python" },
    { src: NodeIcon, alt: "Node.js" },
    { src: ReactIcon, alt: "React" },
    { src: MongoIcon, alt: "MongoDB" },
    { src: JsIcon, alt: "JavaScript" },
    { src: TsIcon, alt: "TypeScript" },
    { src: DockerIcon, alt: "Docker" }
  ];

  return (
    <div className="mt-20 flex justify-center">
      <div className="bg-gradient-to-r from-[#242424] via-[#2a2a2a] to-[#242424] rounded-3xl px-12 py-8 shadow-2xl border border-[#D1FF00]/20">
        <div className="flex items-center gap-8 lg:gap-12">
          {technologies.map((tech, index) => (
            <div 
              key={tech.alt}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-[#1b1b1b] rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#D1FF00] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#D1FF00]/30">
                <img 
                  src={tech.src} 
                  alt={tech.alt} 
                  className="w-10 h-10 object-contain rounded-xl transition-all duration-300 group-hover:scale-110" 
                />
              </div>
              {/* Tooltip */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-[#1b1b1b] text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap border border-[#D1FF00]/30">
                  {tech.alt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#1b1b1b] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left Column */}
          <div className="lg:pr-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#D1FF00] rounded-full flex items-center justify-center animate-pulse">
                <div className="w-3 h-3 bg-black rounded-full" />
              </div>
              <span className="uppercase text-sm font-bold tracking-widest text-[#D1FF00]">WHO WE ARE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-8 text-white uppercase">
              Creativity<br />
              <span className="text-[#D1FF00]">meets</span> strategy.
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              With a team of passionate designers, marketers, and innovators, we specialize in delivering unique solutions that elevate your brand and captivate your audience in the digital landscape.
            </p>
            {/* Experience Highlights */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#242424] hover:bg-[#2a2a2a] transition-colors duration-300">
                <div className="w-14 h-14 rounded-xl bg-[#D1FF00] flex items-center justify-center text-2xl animate-float">
                  <span role="img" aria-label="brain">🧠</span>
                </div>
                <div>
                  <span className="font-black text-lg text-white block">
                    10+ Years Experience
                  </span>
                  <span className="text-white/60 text-sm">
                    Delivering excellence since 2014
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#242424] hover:bg-[#2a2a2a] transition-colors duration-300">
                <div className="w-14 h-14 rounded-xl bg-[#111ac3] flex items-center justify-center text-2xl animate-float" style={{animationDelay: '0.2s'}}>
                  <span role="img" aria-label="megaphone">📣</span>
                </div>
                <div>
                  <span className="font-black text-lg text-white block">
                    Global Brand Trust
                  </span>
                  <span className="text-white/60 text-sm">
                    Partners worldwide choose us
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: Image and Stats */}
          <div className="relative flex flex-col">
            {/* Main Image with enhanced styling */}
            <div className="relative flex justify-center mb-12">
              {/* Background decoration */}
              <div className="absolute -top-8 -right-8 z-0 rounded-3xl h-[420px] w-[360px] bg-gradient-to-br from-[#111ac3] to-[#1b1b1b] opacity-80"></div>
              <div className="absolute -bottom-8 -left-8 z-0 rounded-3xl h-[300px] w-[280px] bg-[#D1FF00]/20"></div>
              
              {/* Main image container */}
              <div className="relative z-10 rounded-3xl overflow-hidden h-[420px] w-[340px] bg-gradient-to-br from-[#111ac3] to-[#1b1b1b] p-3 shadow-2xl hover-lift">
                <div className="rounded-2xl overflow-hidden h-full w-full border-4 border-[#D1FF00] relative">
                  <img
                    src={Main}
                    alt="Creative Team Member"
                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                  />
                  {/* Overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111ac3]/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
            {/* Performance Stats */}
            <div className="space-y-6">
              <div className="bg-[#242424] rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D1FF00] to-[#D1FF00]/80 rounded-xl flex items-center justify-center">
                    <span className="text-black font-bold text-lg">✓</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-white text-sm uppercase tracking-wider">
                        Successful Campaign Launches
                      </span>
                      <span className="font-black text-lg text-[#D1FF00]">95%</span>
                    </div>
                    <div className="w-full bg-[#1b1b1b] rounded-full h-2">
                      <div className="bg-gradient-to-r from-[#D1FF00] to-[#D1FF00]/80 h-2 rounded-full transition-all duration-1000" style={{ width: '95%' }} />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#111ac3] to-[#111ac3]/80 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">★</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-white text-sm uppercase tracking-wider">
                        Innovative Design Solutions
                      </span>
                      <span className="font-black text-lg text-[#D1FF00]">92%</span>
                    </div>
                    <div className="w-full bg-[#1b1b1b] rounded-full h-2">
                      <div className="bg-gradient-to-r from-[#111ac3] to-[#111ac3]/80 h-2 rounded-full transition-all duration-1000" style={{ width: '92%' }} />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-white to-white/90 rounded-xl flex items-center justify-center">
                    <span className="text-black font-bold text-lg">✨</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-white text-sm uppercase tracking-wider">
                        Client Satisfaction Rate
                      </span>
                      <span className="font-black text-lg text-[#D1FF00]">98%</span>
                    </div>
                    <div className="w-full bg-[#1b1b1b] rounded-full h-2">
                      <div className="bg-gradient-to-r from-white to-white/90 h-2 rounded-full transition-all duration-1000" style={{ width: '98%' }} />
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-white/80 text-base leading-relaxed">
                Our commitment to excellence drives us to continuously innovate and exceed expectations, creating digital experiences that resonate with audiences worldwide.
              </p>
              
              <button className="px-8 py-4 bg-transparent border-2 border-[#D1FF00] rounded-full text-[#D1FF00] font-bold uppercase text-sm hover:bg-[#D1FF00] hover:text-black transition-all duration-300 tracking-wider transform hover:scale-105">
                Learn More About Us
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

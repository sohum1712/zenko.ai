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
      <div className="bg-[#01583F] rounded-3xl px-12 py-8 shadow-2xl border border-[#1A6950]">
        <div className="flex items-center gap-8 lg:gap-12">
          {technologies.map((tech, index) => (
            <div 
              key={tech.alt}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-[#1A6950] rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#CDF546] group-hover:scale-110">
                <img 
                  src={tech.src} 
                  alt={tech.alt} 
                  className="w-10 h-10 object-contain rounded-xl transition-all duration-300 group-hover:scale-110" 
                />
              </div>
              {/* Tooltip */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-[#01583F] text-[#FDF9DC] text-xs px-3 py-1 rounded-lg whitespace-nowrap border border-[#1A6950]">
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
    <section id="about" className="py-20 bg-[#01583F] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:pr-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#F56013] rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#01583F] rounded-full" />
                </div>
                <span className="uppercase text-sm font-bold tracking-widest text-[#CDF546] font-sans">WHO WE ARE</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-8 text-[#FDF9DC] uppercase font-display">
                Creativity<br />
                <span className="text-[#CDF546]">meets</span> strategy.
              </h2>
              <p className="text-[#FDF9DC]/90 text-lg leading-relaxed mb-8 font-sans">
              With a team of passionate designers, marketers, and innovators, we specialize in delivering unique solutions that elevate your brand and captivate your audience in the digital landscape.
            </p>
            {/* Experience Highlights */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#1A6950] hover:bg-[#1A6950] transition-colors duration-300">
                <div className="w-14 h-14 rounded-xl bg-[#F56013] flex items-center justify-center text-2xl">
                  <span role="img" aria-label="brain">🧠</span>
                </div>
                  <div>
                    <span className="font-black text-lg text-[#FDF9DC] block font-display">
                      10+ Years Experience
                    </span>
                    <span className="text-[#FDF9DC]/60 text-sm font-sans">
                      Delivering excellence since 2014
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#1A6950] hover:bg-[#1A6950] transition-colors duration-300">
                  <div className="w-14 h-14 rounded-xl bg-[#CDF546] flex items-center justify-center text-2xl" style={{animationDelay: '0.2s'}}>
                    <span role="img" aria-label="megaphone">📣</span>
                  </div>
                  <div>
                    <span className="font-black text-lg text-[#FDF9DC] block font-display">
                      Global Brand Trust
                    </span>
                    <span className="text-[#FDF9DC]/60 text-sm font-sans">
                      Partners worldwide choose us
                    </span>
                  </div>
                </div>
              </div>
            </div>
          {/* Right Column: Image and Stats */}
          <div className="relative flex flex-col mt-4 lg:mt-0">
            {/* Main Image with enhanced styling */}
            <div className="relative flex justify-center mb-8">
              {/* Background decoration */}
              <div className="absolute -top-6 -right-6 z-0 rounded-3xl h-[360px] w-[300px] bg-[#1A6950] opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 z-0 rounded-3xl h-[240px] w-[220px] bg-[#F56013]/20"></div>
              
              {/* Main image container */}
              <div className="relative z-10 rounded-3xl overflow-hidden h-[380px] w-[320px] bg-[#1A6950] p-3 shadow-2xl hover-lift">
                <div className="rounded-2xl overflow-hidden h-full w-full border-4 border-[#CDF546] relative">
                  <img
                    src={Main}
                    alt="Creative Team Member"
                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                  />
                  {/* Overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#01583F]/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
            {/* Performance Stats */}
            <div className="space-y-6">
              <div className="bg-[#1A6950] rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#F56013] rounded-xl flex items-center justify-center">
                    <span className="text-[#01583F] font-bold text-lg">✓</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-[#FDF9DC] text-sm uppercase tracking-wider font-sans">
                        Successful Campaign Launches
                      </span>
                      <span className="font-black text-lg text-[#CDF546] font-display">95%</span>
                    </div>
                    <div className="w-full bg-[#01583F] rounded-full h-2">
                      <div className="bg-[#CDF546] h-2 rounded-full transition-all duration-1000" style={{ width: '95%' }} />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#1A6950] rounded-xl flex items-center justify-center border border-[#CDF546]">
                    <span className="text-[#CDF546] font-bold text-lg">★</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-[#FDF9DC] text-sm uppercase tracking-wider font-sans">
                        Innovative Design Solutions
                      </span>
                      <span className="font-black text-lg text-[#CDF546] font-display">92%</span>
                    </div>
                    <div className="w-full bg-[#01583F] rounded-full h-2">
                      <div className="bg-[#F56013] h-2 rounded-full transition-all duration-1000" style={{ width: '92%' }} />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#CDF546] rounded-xl flex items-center justify-center">
                    <span className="text-[#01583F] font-bold text-lg">✨</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-[#FDF9DC] text-sm uppercase tracking-wider font-sans">
                        Client Satisfaction Rate
                      </span>
                      <span className="font-black text-lg text-[#CDF546] font-display">98%</span>
                    </div>
                    <div className="w-full bg-[#01583F] rounded-full h-2">
                      <div className="bg-[#FDF9DC] h-2 rounded-full transition-all duration-1000" style={{ width: '98%' }} />
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-[#FDF9DC]/80 text-base leading-relaxed font-sans">
                Our commitment to excellence drives us to continuously innovate and exceed expectations, creating digital experiences that resonate with audiences worldwide.
              </p>
              
              <button className="px-8 py-4 bg-transparent border-2 border-[#CDF546] rounded-full text-[#CDF546] font-bold uppercase text-sm font-sans hover:bg-[#CDF546] hover:text-[#01583F] transition-all duration-300 tracking-wider transform hover:scale-105">
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

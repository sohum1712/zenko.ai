import React from 'react';
import Main from "@/components/assets/Main.png";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#11120D] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative">
              {/* Background shapes */}
              <div className="absolute -top-8 -left-8 w-full h-full bg-[#565449]/30 rounded-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-3/4 h-3/4 border-2 border-[#D8CFBC]/30 rounded-3xl"></div>
              
              {/* Main image */}
              <div className="relative z-10 rounded-3xl overflow-hidden bg-[#565449] p-3">
                <img
                  src={Main}
                  alt="Creative Team"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
              
              {/* Stats card */}
              <div className="absolute -bottom-6 -right-6 z-20 bg-[#D8CFBC] rounded-2xl p-6 shadow-2xl">
                <div className="text-center">
                  <span className="text-4xl font-display font-black text-[#11120D]">10+</span>
                  <p className="text-[#565449] text-sm font-medium mt-1">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#565449]/30 rounded-full border border-[#565449]">
                <span className="w-2 h-2 bg-[#D8CFBC] rounded-full"></span>
                <span className="text-[#D8CFBC] text-sm font-medium tracking-wide">ABOUT US</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-[#FFFBF4] leading-tight">
                Creativity Meets
                <span className="text-[#D8CFBC]"> Strategy</span>
              </h2>
              
              <p className="text-[#D8CFBC] text-lg leading-relaxed font-sans">
                With a team of passionate designers, marketers, and innovators, we specialize in delivering unique solutions that elevate your brand and captivate your audience in the digital landscape.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#565449]/20 rounded-2xl p-6 border border-[#565449]/50 hover:border-[#D8CFBC]/50 transition-colors">
                <div className="w-12 h-12 bg-[#D8CFBC] rounded-xl flex items-center justify-center mb-4">
                  <span className="text-[#11120D] text-xl">✦</span>
                </div>
                <h3 className="text-[#FFFBF4] font-display font-bold text-lg mb-2">Expert Team</h3>
                <p className="text-[#D8CFBC] text-sm font-sans">Skilled professionals dedicated to excellence</p>
              </div>
              
              <div className="bg-[#565449]/20 rounded-2xl p-6 border border-[#565449]/50 hover:border-[#D8CFBC]/50 transition-colors">
                <div className="w-12 h-12 bg-[#565449] rounded-xl flex items-center justify-center mb-4">
                  <span className="text-[#FFFBF4] text-xl">◆</span>
                </div>
                <h3 className="text-[#FFFBF4] font-display font-bold text-lg mb-2">Global Reach</h3>
                <p className="text-[#D8CFBC] text-sm font-sans">Partners worldwide choose us</p>
              </div>
            </div>

            {/* Progress bars */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-[#FFFBF4] font-medium text-sm">Client Satisfaction</span>
                  <span className="text-[#D8CFBC] font-bold">98%</span>
                </div>
                <div className="w-full bg-[#565449] rounded-full h-2">
                  <div className="bg-[#D8CFBC] h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-[#FFFBF4] font-medium text-sm">Project Success Rate</span>
                  <span className="text-[#D8CFBC] font-bold">95%</span>
                </div>
                <div className="w-full bg-[#565449] rounded-full h-2">
                  <div className="bg-[#FFFBF4] h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-[#D8CFBC] text-[#D8CFBC] px-8 py-4 rounded-full font-bold font-sans hover:bg-[#D8CFBC] hover:text-[#11120D] transition-all duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

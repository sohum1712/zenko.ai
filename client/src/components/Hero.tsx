import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import Marquee from 'react-fast-marquee';

const HeroImage = '/src/components/assets/image.png';

const Hero: React.FC = () => {
  const marqueeContent = [
    "BRANDING",
    "•",
    "WEB DESIGN",
    "•",
    "DIGITAL MARKETING",
    "•",
    "SEO",
    "•",
    "DEVELOPMENT",
    "•",
  ];

  return (
    <section id="home" className="relative bg-[#11120D] overflow-hidden min-h-screen">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-pattern-grid opacity-5"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#11120D] via-[#11120D] to-[#565449]/20"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#565449]/30 rounded-full border border-[#565449]">
              <span className="w-2 h-2 bg-[#D8CFBC] rounded-full animate-pulse"></span>
              <span className="text-[#D8CFBC] text-sm font-medium tracking-wide">CREATIVE DIGITAL AGENCY</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-[#FFFBF4] leading-[0.9] tracking-tight">
                WE BUILD
              </h1>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] tracking-tight">
                <span className="text-[#D8CFBC]">DIGITAL</span>
              </h1>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-[#FFFBF4] leading-[0.9] tracking-tight">
                EXPERIENCES
              </h1>
            </div>

            {/* Description */}
            <p className="text-[#D8CFBC] text-lg md:text-xl max-w-xl leading-relaxed font-sans">
              Transform your brand with cutting-edge design, strategic marketing, and innovative digital solutions that drive real results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-[#D8CFBC] text-[#11120D] px-8 py-4 rounded-full font-bold text-lg font-sans hover:bg-[#FFFBF4] transition-all duration-300 transform hover:scale-105 group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-[#565449] text-[#FFFBF4] px-8 py-4 rounded-full font-bold text-lg font-sans hover:border-[#D8CFBC] hover:text-[#D8CFBC] transition-all duration-300 group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Showreel
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8 border-t border-[#565449]/50">
              <div>
                <span className="text-4xl md:text-5xl font-display font-black text-[#FFFBF4]">50+</span>
                <p className="text-[#D8CFBC] text-sm mt-1 font-sans">Happy Clients</p>
              </div>
              <div>
                <span className="text-4xl md:text-5xl font-display font-black text-[#FFFBF4]">60+</span>
                <p className="text-[#D8CFBC] text-sm mt-1 font-sans">Projects Done</p>
              </div>
              <div>
                <span className="text-4xl md:text-5xl font-display font-black text-[#FFFBF4]">5+</span>
                <p className="text-[#D8CFBC] text-sm mt-1 font-sans">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative flex items-center justify-center animate-slide-in-right">
            {/* Background shapes */}
            <div className="absolute w-[500px] h-[500px] bg-[#565449]/20 rounded-full blur-3xl"></div>
            <div className="absolute w-[300px] h-[300px] bg-[#D8CFBC]/10 rounded-full blur-2xl -top-10 -right-10"></div>
            
            {/* Image container */}
            <div className="relative z-10">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-[#565449] rounded-3xl transform rotate-3"></div>
              <div className="absolute -inset-8 border border-[#565449]/50 rounded-3xl transform -rotate-2"></div>
              
              {/* Main image */}
              <div className="relative bg-gradient-to-br from-[#565449] to-[#11120D] rounded-2xl p-2 shadow-2xl">
                <img
                  src={HeroImage}
                  alt="Creative Professional"
                  className="w-full max-w-md h-auto object-cover rounded-xl"
                  style={{ 
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4))'
                  }}
                  loading="eager"
                />
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#D8CFBC] rounded-2xl flex items-center justify-center shadow-xl animate-float">
                <span className="text-[#11120D] font-display font-black text-xl">Z</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#565449] rounded-full flex items-center justify-center shadow-xl" style={{animationDelay: '1s'}}>
                <span className="text-[#FFFBF4] text-xl">✦</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-[#D8CFBC] py-4">
          <Marquee
            direction="left"
            speed={80}
            gradient={false}
            pauseOnHover={false}
            loop={0}
          >
            {marqueeContent.map((word, idx) => (
              <span
                key={idx}
                className={`mx-6 text-2xl md:text-3xl font-display font-black uppercase tracking-wider ${
                  word === '•' ? 'text-[#565449]' : 'text-[#11120D]'
                }`}
              >
                {word}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Hero;

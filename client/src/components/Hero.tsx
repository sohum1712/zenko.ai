
import React from 'react';
import { Play, Star } from 'lucide-react';
import Marquee from 'react-fast-marquee';
// Using a professional hero image
const HeroImage = '/src/components/assets/image.png';

const Hero: React.FC = () => {
  const marqueeContent = [
    "BRANDING",
    "+",
    "GRAPHIC DESIGN",
    "+",
    "WEB DESIGN",
    "+",
    "DIGITAL MARKETING",
    "+",
    "SEO OPTIMIZATION",
    "+",
    "HOSTING SERVICES",
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-[#111ac3] via-[#1b1b1b] to-[#1b1b1b] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>

      {/* Hero content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left: intro text and stats */}
          <div className="lg:col-span-1 space-y-8 animate-slide-in-left">
            <p className="text-[#D1FF00] uppercase tracking-widest font-bold text-sm leading-relaxed">
              THE EXPERT TEAM BRINGS CREATIVITY TO EVERY PROJECT.
            </p>
            
            {/* Team avatars */}
            <div className="flex space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center animate-float">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '0.2s'}}>
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '0.4s'}}>
                <span className="text-white font-bold text-lg">C</span>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <div className="flex flex-col items-start space-y-2">
                <span className="text-white font-bold text-5xl lg:text-6xl animate-fade-in-up">500+</span>
                <span className="text-white/80 text-sm font-medium tracking-wider">HAPPY CLIENTS</span>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <span className="text-white font-bold text-5xl lg:text-6xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>125+</span>
                <span className="text-white/80 text-sm font-medium tracking-wider">PROJECTS DONE</span>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <span className="text-white font-bold text-5xl lg:text-6xl animate-fade-in-up" style={{animationDelay: '0.4s'}}>450+</span>
                <span className="text-white/80 text-sm font-medium tracking-wider">MEDIA FEATURED</span>
              </div>
            </div>
          </div>

          {/* Center: big title + image */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center space-y-8 animate-fade-in-up">
            <div className="text-center relative">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-white leading-none mb-2">
                CREATIVE
              </h1>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-[#D1FF00] leading-none relative z-10">
                AGENCY
              </h1>
              {/* Subtle background text */}
              <div className="absolute inset-0 text-white/5 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black -z-10 transform rotate-12 translate-x-4 translate-y-4">
                CREATIVE
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] overflow-visible -mt-16">
              {/* Background circles for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D1FF00]/20 to-transparent rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-4 bg-gradient-to-tl from-[#111ac3]/30 to-transparent rounded-full animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#D1FF00] rounded-2xl animate-float opacity-80 blur-sm" style={{animationDelay: '1s'}}></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#111ac3] rounded-full animate-float opacity-60 blur-sm" style={{animationDelay: '2s'}}></div>
              
              <img
                src={HeroImage}
                alt="Creative Team Member - Professional web developer and designer"
                className="relative z-10 w-full h-full object-contain hover-lift transition-all duration-700 hover:scale-105"
                style={{ 
                  filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))',
                  transform: 'rotate(3deg)'
                }}
                loading="eager"
              />
              
              {/* Glow effect */}
              <div className="absolute inset-8 bg-gradient-to-r from-[#D1FF00]/10 to-[#111ac3]/10 rounded-full blur-3xl animate-pulse-slow opacity-50"></div>
            </div>
          </div>

          {/* Right: description + buttons */}
          <div className="lg:col-span-1 space-y-8 animate-slide-in-right">
            <p className="text-white/90 text-base leading-relaxed">
              We create innovative digital solutions that transform your business vision into reality. Our expert team combines creativity with strategy to deliver exceptional results.
            </p>
            
            <div className="space-y-4">
              <button className="bg-[#111ac3] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all duration-300 neon-glow-blue transform hover:scale-105">
                GET STARTED WITH US
              </button>
              
              <div className="flex items-center space-x-4">
                <button className="w-16 h-16 bg-[#D1FF00] rounded-full flex items-center justify-center hover-scale neon-glow group">
                  <Play className="w-6 h-6 text-black ml-1 group-hover:scale-110 transition-transform" />
                </button>
                <span className="text-white/90 text-sm font-medium">Watch Our Story</span>
              </div>
            </div>
            
            {/* Floating star element */}
            <div className="w-12 h-12 bg-[#D1FF00] rounded-full flex items-center justify-center animate-neon-pulse hover-scale">
              <Star className="w-6 h-6 text-black" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Service Marquee Banner */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none -mt-20">
        <div className="relative transform -skew-y-2 origin-bottom">
          <div className="bg-[#D1FF00] py-8">
            <div className="transform skew-y-2">
              <Marquee
                direction="right"
                speed={80}
                gradient={false}
                pauseOnHover={false}
                loop={0}
                className="flex items-center whitespace-nowrap"
              >
                {marqueeContent.map((word, idx) => (
                  <span
                    key={idx}
                    className={`mx-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-widest ${
                      word === '+' ? 'text-[#111ac3]' : 'text-[#1b1b1b]'
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

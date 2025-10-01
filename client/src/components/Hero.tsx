import React from 'react';
import { Play, Star } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import HeroImage from '@/components/assets/image.png';

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

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen bg-[#111ac3] overflow-hidden pb-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="lg:col-span-1 space-y-8 animate-slide-in-left">
            <p className="text-white/80 text-sm font-medium tracking-wider uppercase">
              THE EXPERT TEAM BRINGS CREATIVITY TO EVERY PROJECT.
            </p>
            <div className="flex space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col items-start space-y-1">
                <span className="text-white font-bold text-5xl">500+</span>
                <span className="text-white/80 text-sm font-medium">HAPPY CLIENT</span>
              </div>
              <div className="flex flex-col items-start space-y-1">
                <span className="text-white font-bold text-5xl">125+</span>
                <span className="text-white/80 text-sm font-medium">PROJECT DONE</span>
              </div>
              <div className="flex flex-col items-start space-y-1">
                <span className="text-white font-bold text-5xl">450+</span>
                <span className="text-white/80 text-sm font-medium">MEDIA FEATURED</span>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center space-y-8 animate-fade-in-up">
            <div className="text-center relative">
              <h1 className="text-6xl md:text-8xl font-display font-black text-white leading-none">
                CREATIVE
              </h1>
              <h1 className="text-6xl md:text-8xl font-display font-black text-[#D1FF00] leading-none">
                AGENCY
              </h1>
            </div>

            {/* Center Image without circles or background */}
            <div className="relative w-70 h-70 md:w-100 md:h-100 transform -translate-y-10 -translate-x-10">
              <img
                src={HeroImage}
                alt="Team Member"
                className="object-contain w-full h-full"
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-1 space-y-8 animate-slide-in-right">
            <p className="text-white/80 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-[#0A0F4B] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all duration-300 neon-glow-blue">
              GET STARTED   WITH US
            </button>
            <div className="flex items-center space-x-4">
              <button className="w-16 h-16 bg-[#D1FF00] rounded-full flex items-center justify-center hover-scale">
                <Play className="w-6 h-6 text-black ml-1" />
              </button>
              <span className="text-white/80 text-sm font-medium">Watch Our Story</span>
            </div>
            <div className="w-12 h-12 bg-[#D1FF00] rounded-full flex items-center justify-center animate-neon-pulse">
              <Star className="w-6 h-6 text-black" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Service Marquee Banner */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <div className="relative transform -skew-y-3 -skew-x-3 origin-top">
          <div className="bg-[#D1FF00] py-6">
            <div className="transform skew-y-9">
              <Marquee
                direction="right"
                speed={60}
                gradient={false}
                pauseOnHover={false}
                loop={0}
                className="flex items-center whitespace-nowrap"
              >
                {marqueeContent.map((word, idx) => (
                  <span
                    key={idx}
                    className="mx-6 text-4xl md:text-5xl font-black uppercase tracking-widest text-[#0A0F4B]"
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


import React from 'react';
import { Play, Star } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import { useGujaratiAudience } from '@/hooks/useGujaratiAudience';
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

  const audience = useGujaratiAudience();
  return (
    <section id="home" className="relative bg-gradient-to-br from-[#171717] via-[#4D4D4D] to-[#171717] overflow-visible">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>

      {/* Hero content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center min-h-[65vh]">
          {/* Left: intro text and stats */}
          <div className="lg:col-span-1 space-y-8 animate-slide-in-left">
            <p className="text-[#F25C23] uppercase tracking-widest font-bold text-sm leading-relaxed">
              {audience.isGujarati ? 'અમારી ટીમ દરેક પ્રોજેક્ટમાં સર્જનાત્મકતા લાવે છે.' : 'THE EXPERT TEAM BRINGS CREATIVITY TO EVERY PROJECT.'}
            </p>
            
            {/* Team avatars */}
            <div className="flex space-x-4">
              <div className="w-16 h-16 bg-[#4D4D4D] rounded-full flex items-center justify-center animate-float">
                <span className="text-[#DEDEDE] font-bold text-lg">A</span>
              </div>
              <div className="w-16 h-16 bg-[#4D4D4D] rounded-full flex items-center justify-center animate-float" style={{animationDelay: '0.2s'}}>
                <span className="text-[#DEDEDE] font-bold text-lg">B</span>
              </div>
              <div className="w-16 h-16 bg-[#4D4D4D] rounded-full flex items-center justify-center animate-float" style={{animationDelay: '0.4s'}}>
                <span className="text-[#DEDEDE] font-bold text-lg">C</span>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <div className="flex flex-col items-start space-y-2">
                <span className="text-[#DEDEDE] font-bold text-5xl lg:text-6xl animate-fade-in-up">50+</span>
                <span className="text-[#DEDEDE]/80 text-sm font-medium tracking-wider">HAPPY CLIENTS</span>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <span className="text-[#DEDEDE] font-bold text-5xl lg:text-6xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>60+</span>
                <span className="text-[#DEDEDE]/80 text-sm font-medium tracking-wider">PROJECTS DONE</span>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <span className="text-[#DEDEDE] font-bold text-5xl lg:text-6xl animate-fade-in-up" style={{animationDelay: '0.4s'}}>40+</span>
                <span className="text-[#DEDEDE]/80 text-sm font-medium tracking-wider">MEDIA FEATURED</span>
              </div>
            </div>
          </div>

          {/* Center: big title + image */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center space-y-8 animate-fade-in-up">
            <div className="text-center relative">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-[#DEDEDE] leading-none mb-2">
                CREATIVE
              </h1>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-[#F25C23] leading-none relative z-10">
                AGENCY
              </h1>
              {/* Subtle background text */}
              <div className="absolute inset-0 text-[#DEDEDE]/5 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black -z-10 transform rotate-12 translate-x-4 translate-y-4">
                CREATIVE
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[26rem] lg:h-[26rem] overflow-visible -mt-10">
              {/* Background circles for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F25C23]/20 to-transparent rounded-full " ></div>
              <div className="absolute inset-4 bg-gradient-to-tl from-[#4D4D4D]/30 to-transparent rounded-full" style={{animationDelay: '0.5s'}}></div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#F25C23] rounded-2xl opacity-80" style={{animationDelay: '1s'}}></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#4D4D4D] rounded-full opacity-60" style={{animationDelay: '2s'}}></div>
              
              <img
                src={HeroImage}
                alt="Creative Team Member - Professional web developer and designer"
                className="relative z-30 w-full h-full object-contain hover-lift transition-all duration-700 hover:scale-105"
                style={{ 
                  filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))',
                  transform: 'rotate(-4deg)',
                   bottom: '6rem'
                }}
                loading="eager"
              />
              
              {/* Glow effect */}
              <div className="absolute inset-8 bg-gradient-to-r from-[#F25C23]/10 to-[#4D4D4D]/10 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>

          {/* Right: description + buttons */}
            <div className="lg:col-span-1 space-y-8 animate-slide-in-right" style={{bottom: '3'}}>
            <p className="text-[#DEDEDE]/90 text-base leading-relaxed">
              {audience.isGujarati
                ? 'અમે ગુજરાતી વ્યવસાયો માટે ઉપયુક્ત ડિજિટલ સોલ્યુશન્સ બનાવીએ છીએ — વેબસાઇટ, બ્રાન્ડિંગ અને માર્કેટિંગ જે ખરેખર પરિણામ આપે.'
                : 'We create innovative digital solutions that transform your business vision into reality. Our expert team combines creativity with strategy to deliver exceptional results.'}
            </p>
            
            <div className="space-y-4">
              <button className="bg-[#4D4D4D] text-[#DEDEDE] px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                {audience.primaryCTA}
              </button>
              
              <div className="flex items-center space-x-4">
                <button className="w-16 h-16 bg-[#F25C23] rounded-full flex items-center justify-center hover-scale group">
                  <Play className="w-6 h-6 text-[#171717] ml-1 group-hover:scale-110 transition-transform" />
                </button>
                <span className="text-[#DEDEDE]/90 text-sm font-medium">Watch Our Story</span>
              </div>
            </div>
            
            {/* Floating star element */}
            <div className="w-12 h-12 bg-[#F25C23] rounded-full flex items-center justify-center hover-scale">
              <Star className="w-6 h-6 text-[#171717]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Service Marquee Banner (moved up and tilted 5deg) */}
      <div className="absolute left-0 right-0 pointer-events-none select-none z-20" style={{ bottom: '4rem' }}>
        <div className="relative transform origin-left rotate-[-3deg]">
          <div className="bg-[#F25C23] py-6">
            <div className="transform">
              <Marquee
                direction="right"
                speed={200}
                gradient={false}
                pauseOnHover={false}
                loop={0}
                className="flex items-center whitespace-nowrap"
              >
                {marqueeContent.map((word, idx) => (
                  <span
                    key={idx}
                    className={`mx-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-widest ${
                      word === '+' ? 'text-[#4D4D4D]' : 'text-[#171717]'
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

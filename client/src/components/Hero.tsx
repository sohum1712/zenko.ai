import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Sky Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8f4fc] via-[#f0f7fc] to-[#f8fbfe]"></div>
      
      {/* Cloud Images - Using CSS for cloud-like shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top left cloud cluster - Adjusted to stay in view */}
        <div className="absolute top-0 left-6 w-[500px] h-[300px] bg-white rounded-full blur-3xl opacity-90"></div>
        <div className="absolute top-10 left-10 w-[400px] h-[250px] bg-[#4d8af0]/20 rounded-full blur-2xl opacity-80"></div>
        <div className="absolute top-20 left-40 w-[300px] h-[200px] bg-white rounded-full blur-2xl opacity-70"></div>
        
        {/* Top right cloud cluster - Adjusted to stay in view */}
        <div className="absolute top-0 right-8 w-[500px] h-[300px] bg-[#4d8af0]/20 rounded-full blur-3xl opacity-90"></div>
        <div className="absolute top-20 right-10 w-[400px] h-[250px] bg-white rounded-full blur-2xl opacity-80"></div>
        <div className="absolute top-32 right-32 w-[300px] h-[200px] bg-[#4d8af0]/20 rounded-full blur-2xl opacity-70"></div>
        
        {/* Center top cloud */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[350px] h-[200px] bg-white rounded-full blur-2xl opacity-60"></div>
        
        {/* Left side clouds - Lowered position */}
        <div className="absolute top-60 left-2 w-[300px] h-[180px] bg-[#4d8af0]/20 rounded-full blur-2xl opacity-80"></div>
        <div className="absolute top-80 left-8 w-[250px] h-[150px] bg-white rounded-full blur-xl opacity-70"></div>
        
        {/* Right side clouds - Lowered position */}
        <div className="absolute top-60 right-2 w-[300px] h-[180px] bg-white rounded-full blur-2xl opacity-80"></div>
        <div className="absolute top-80 right-16 w-[250px] h-[150px] bg-[#4d8af0]/20 rounded-full blur-xl opacity-70"></div>
      </div>

      {/* Floating Tags - Left Side */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        {/* Left tags */}
        <div className="absolute top-36 left-12 animate-float" style={{ animationDelay: '0s' }}>
          <span className="px-5 py-2.5 bg-white rounded-full text-[#1a1a2e] text-sm font-normal shadow-lg border border-gray-100 italic">
            #writing
          </span>
        </div>
        <div className="absolute top-56 left-6 animate-float" style={{ animationDelay: '0.5s' }}>
          <span className="px-5 py-2.5 bg-white rounded-full text-[#1a1a2e] text-sm font-normal shadow-lg border border-gray-100 italic">
            #Art work
          </span>
        </div>
        <div className="absolute top-72 left-20 animate-float" style={{ animationDelay: '1s' }}>
          <span className="px-5 py-2.5 bg-white rounded-full text-[#1a1a2e] text-sm font-normal shadow-lg border border-gray-100 italic">
            #Drawing
          </span>
        </div>
        
        {/* Right tags */}
        <div className="absolute top-36 right-12 animate-float" style={{ animationDelay: '0.3s' }}>
          <span className="px-5 py-2.5 bg-white rounded-full text-[#1a1a2e] text-sm font-normal shadow-lg border border-gray-100 italic">
            #Creative
          </span>
        </div>
        <div className="absolute top-52 right-6 animate-float" style={{ animationDelay: '0.8s' }}>
          <span className="px-5 py-2.5 bg-white rounded-full text-[#1a1a2e] text-sm font-normal shadow-lg border border-gray-100 italic">
            #Visual Art
          </span>
        </div>
        <div className="absolute top-68 right-16 animate-float" style={{ animationDelay: '1.2s' }}>
          <span className="px-5 py-2.5 bg-white rounded-full text-[#1a1a2e] text-sm font-normal shadow-lg border border-gray-100 italic">
            #Creative
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Oval Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-full border-2 border-[#1a1a2e] flex items-center justify-center">
              <div className="w-6 h-8 border-2 border-[#1a1a2e] rounded-full"></div>
            </div>
          </div>

          {/* Main Headline - Exact font style */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal text-[#1a1a2e] leading-tight tracking-tight mb-6" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            Creative Digital Agency
          </h1>

          {/* Subtitle */}
          <p className="text-[#6b7280] text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
            Zenko Digital provides a nurturing environment where brands can flourish and explore their creative potential.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#4d8af0] text-white px-7 py-3.5 rounded-full font-medium text-base hover:bg-[#3b7ae0] transition-all duration-300 shadow-lg shadow-blue-200/50"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
            <button 
              className="inline-flex items-center justify-center gap-3 text-[#1a1a2e] px-6 py-3.5 rounded-full font-medium text-base hover:bg-black/5 transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <Play className="w-4 h-4 text-[#1a1a2e] ml-0.5" fill="#1a1a2e" />
              </div>
              Watch Video
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - White Background */}
      <div className="relative z-10 bg-[#fafbfc] py-16 mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            {/* Why choose section */}
            <div className="text-left">
              <h3 className="text-3xl md:text-4xl font-normal text-[#1a1a2e] mb-1" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                Why choose
              </h3>
              <h3 className="text-3xl md:text-4xl font-normal text-[#9ca3af] mb-4" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                Zenko?
              </h3>
              <p className="text-[#6b7280] text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Our clients are chosen to work with us because of the high quality of our creative solutions and dedication to excellence.
              </p>
            </div>

            {/* Full Development */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-[#4d8af0] rounded-xl flex items-center justify-center transform rotate-12 shadow-lg shadow-blue-200/50">
                  <svg className="w-6 h-6 text-white transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-[#1a1a2e] mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                Full Development
              </h4>
              <p className="text-[#6b7280] text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                We believe that design should contribute to the full development of each project.
              </p>
            </div>

            {/* Client Focused */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-[#e8f4fc] rounded-xl flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6 text-[#4d8af0]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-[#1a1a2e] mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                Client Focused
              </h4>
              <p className="text-[#6b7280] text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Our team is always ready to provide clients with exceptional service and warmth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

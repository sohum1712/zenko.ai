import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const floatingTags = [
    { text: '#Branding', position: 'top-32 left-16', delay: '0s' },
    { text: '#WebDesign', position: 'top-48 left-8', delay: '0.5s' },
    { text: '#Marketing', position: 'top-64 left-24', delay: '1s' },
    { text: '#Creative', position: 'top-32 right-16', delay: '0.3s' },
    { text: '#Digital', position: 'top-48 right-8', delay: '0.8s' },
    { text: '#Strategy', position: 'top-64 right-24', delay: '1.2s' },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#D8CFBC] via-[#FFFBF4] to-[#D8CFBC]/30">
      {/* Cloud-like decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-[#FFFBF4] rounded-full blur-3xl opacity-80 -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-[#FFFBF4] rounded-full blur-3xl opacity-80 translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute top-20 left-1/4 w-[300px] h-[200px] bg-[#FFFBF4] rounded-full blur-2xl opacity-60"></div>
        <div className="absolute top-16 right-1/4 w-[350px] h-[220px] bg-[#FFFBF4] rounded-full blur-2xl opacity-60"></div>
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[400px] h-[250px] bg-[#FFFBF4] rounded-full blur-3xl opacity-70"></div>
      </div>

      {/* Floating Tags */}
      <div className="absolute inset-0 hidden lg:block">
        {floatingTags.map((tag, idx) => (
          <div
            key={idx}
            className={`absolute ${tag.position} animate-float`}
            style={{ animationDelay: tag.delay }}
          >
            <span className="px-5 py-2.5 bg-[#FFFBF4] rounded-full text-[#11120D] text-sm font-medium shadow-lg border border-[#D8CFBC]/50 backdrop-blur-sm">
              {tag.text}
            </span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="text-center">
          {/* Logo Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full border-2 border-[#11120D] flex items-center justify-center">
              <div className="w-8 h-10 border-2 border-[#11120D] rounded-full"></div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-[#11120D] leading-tight tracking-tight mb-6">
            Creative Digital Agency
          </h1>

          {/* Subtitle */}
          <p className="text-[#565449] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-sans mb-10">
            Zenko Digital provides innovative solutions where brands can flourish and explore their creative potential.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-[#11120D] text-[#FFFBF4] px-8 py-4 rounded-full font-bold text-lg font-sans hover:bg-[#565449] transition-all duration-300 transform hover:scale-105 group shadow-xl"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="inline-flex items-center justify-center gap-3 bg-transparent text-[#11120D] px-8 py-4 rounded-full font-bold text-lg font-sans hover:bg-[#11120D]/10 transition-all duration-300 group">
              <div className="w-10 h-10 bg-[#FFFBF4] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 text-[#11120D] ml-0.5" fill="#11120D" />
              </div>
              Watch Video
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Features */}
      <div className="relative z-10 bg-[#FFFBF4] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-display font-black text-[#11120D] mb-2">
                Why choose
              </h3>
              <h3 className="text-2xl md:text-3xl font-display font-black text-[#565449] mb-4">
                Zenko?
              </h3>
              <p className="text-[#565449] text-sm leading-relaxed font-sans">
                Our clients choose us because of our commitment to excellence, innovative approach, and proven track record of delivering exceptional results.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#11120D] rounded-2xl flex items-center justify-center mx-auto mb-4 transform rotate-12">
                <span className="text-[#FFFBF4] text-2xl transform -rotate-12">◆</span>
              </div>
              <h4 className="text-xl font-display font-bold text-[#11120D] mb-2">Full Development</h4>
              <p className="text-[#565449] text-sm leading-relaxed font-sans">
                We believe that design should contribute to the full development of each project.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D8CFBC] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-[#11120D] text-2xl">♥</span>
              </div>
              <h4 className="text-xl font-display font-bold text-[#11120D] mb-2">Client Focused</h4>
              <p className="text-[#565449] text-sm leading-relaxed font-sans">
                Our team is always ready to provide clients with exceptional service and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

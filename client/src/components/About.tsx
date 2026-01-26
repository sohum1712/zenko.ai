import React from 'react';
import Main from "@/assets/Corporate.jpg";
import TranslatedText from './TranslatedText';
import HighlightedTranslatedText from './HighlightedTranslatedText';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Background shapes */}
              <div className="absolute -top-4 md:-top-8 -left-4 md:-left-8 w-full h-full bg-[#4d8af0]/10 rounded-2xl md:rounded-3xl"></div>
              <div className="absolute -bottom-4 md:-bottom-8 -right-4 md:-right-8 w-3/4 h-3/4 border-2 border-[#4d8af0]/20 rounded-2xl md:rounded-3xl"></div>
              
              {/* Main image */}
              <div className="relative z-10 rounded-2xl md:rounded-3xl overflow-hidden bg-[#e8f4fc] p-2 md:p-3">
                <img
                  src={Main}
                  alt="Get Started with Zenko"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-xl md:rounded-2xl"
                />
              </div>
              
              {/* Stats card */}
              <div className="absolute -bottom-4 md:-bottom-6 -right-2 md:-right-6 z-20 bg-[#4d8af0] rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl shadow-blue-200/50">
                <div className="text-center">
                  <span className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>24/7</span>
                  <p className="text-white/80 text-xs md:text-sm font-medium mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <TranslatedText>Support Ready</TranslatedText>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4d8af0]/10 rounded-full border border-[#4d8af0]/20">
                <span className="w-2 h-2 bg-[#4d8af0] rounded-full"></span>
                <span className="text-[#4d8af0] text-sm font-medium tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <TranslatedText>GET STARTED</TranslatedText>
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#1a1a2e] leading-tight" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                <TranslatedText>Ready to Begin with</TranslatedText>
                <span className="text-[#4d8af0]"> <HighlightedTranslatedText>Zenko</HighlightedTranslatedText>?</span>
              </h2>
              
              <p className="text-[#6b7280] text-base md:text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                <TranslatedText>Transform your business with</TranslatedText> <HighlightedTranslatedText>Zenko's</HighlightedTranslatedText> <TranslatedText>innovative solutions. From concept to execution, we're here to guide you through every step of your digital transformation journey.</TranslatedText>
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-[#f8fbfe] rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-100 hover:border-[#4d8af0]/30 transition-colors">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#4d8af0] rounded-xl flex items-center justify-center mb-3 md:mb-4 shadow-lg shadow-blue-200/50">
                  <span className="text-white text-lg md:text-xl">🚀</span>
                </div>
                <h3 className="text-[#1a1a2e] font-semibold text-base md:text-lg mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <TranslatedText>Quick Setup</TranslatedText>
                </h3>
                <p className="text-[#6b7280] text-xs md:text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <TranslatedText>Get up and running with</TranslatedText> <HighlightedTranslatedText>Zenko</HighlightedTranslatedText> <TranslatedText>in minutes</TranslatedText>
                </p>
              </div>
              
              <div className="bg-[#f8fbfe] rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-100 hover:border-[#4d8af0]/30 transition-colors">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#e8f4fc] rounded-xl flex items-center justify-center mb-3 md:mb-4">
                  <span className="text-[#4d8af0] text-lg md:text-xl">💡</span>
                </div>
                <h3 className="text-[#1a1a2e] font-semibold text-base md:text-lg mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <TranslatedText>Smart Solutions</TranslatedText>
                </h3>
                <p className="text-[#6b7280] text-xs md:text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <TranslatedText>AI-powered tools that adapt to your needs</TranslatedText>
                </p>
              </div>
            </div>

            {/* Progress bars */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-[#1a1a2e] font-medium text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <TranslatedText>Setup Progress</TranslatedText>
                  </span>
                  <span className="text-[#4d8af0] font-bold text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <TranslatedText>Ready</TranslatedText>
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#4d8af0] h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-[#1a1a2e] font-medium text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <TranslatedText>Your Success Journey</TranslatedText>
                  </span>
                  <span className="text-[#4d8af0] font-bold text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <TranslatedText>Let's Begin</TranslatedText>
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#1a1a2e] h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#4d8af0] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-sm md:text-base hover:bg-[#3d7bd1] transition-all duration-300 shadow-lg shadow-blue-200/50"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <TranslatedText>Get Started with</TranslatedText> <HighlightedTranslatedText className="text-white">Zenko</HighlightedTranslatedText>
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

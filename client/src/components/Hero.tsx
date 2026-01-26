import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import HighlightedTranslatedText from './HighlightedTranslatedText';
import CloudElement from './common/CloudElement';
import FloatingTag from './common/FloatingTag';
import { cloudElements, floatingTags } from '@/data/heroElements';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Sky Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8f4fc] via-[#f0f7fc] to-[#f8fbfe]"></div>
      
      {/* Cloud Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {cloudElements.map((cloud) => (
          <CloudElement key={cloud.id} cloud={cloud} />
        ))}
      </div>

      {/* Floating Tags */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        {floatingTags.map((tag) => (
          <FloatingTag key={tag.id} tag={tag} />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 flex flex-col justify-center min-h-screen">
        <div className="text-center flex-1 flex flex-col justify-center">
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal leading-relaxed tracking-tight mb-8 bg-gradient-to-r from-[#1a1a2e] via-[#4d8af0] to-[#1a1a2e] bg-clip-text text-transparent min-h-[120px] sm:min-h-[140px] md:min-h-[160px] flex flex-col items-center justify-center font-serif">
            <div className="text-center">
              <HighlightedTranslatedText>{t('hero.zenko')}</HighlightedTranslatedText>: {t('hero.tagline')}
            </div>
          </h1>

          {/* Subtitle */}
          <p className="text-[#6b7280] text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 font-sans">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#4d8af0] text-white px-7 py-3.5 rounded-full font-medium text-base hover:bg-[#3b7ae0] transition-all duration-300 shadow-lg shadow-blue-200/50 font-sans"
            >
              {t('hero.cta_start')} <HighlightedTranslatedText className="text-white">{t('hero.zenko')}</HighlightedTranslatedText>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button 
              className="inline-flex items-center justify-center gap-3 text-[#1a1a2e] px-6 py-3.5 rounded-full font-medium text-base hover:bg-black/5 transition-all duration-300 font-sans"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <Play className="w-4 h-4 text-[#1a1a2e] ml-0.5" fill="#1a1a2e" />
              </div>
              {t('hero.cta_see')} <HighlightedTranslatedText>{t('hero.zenko')}</HighlightedTranslatedText> {t('hero.cta_action')}
            </button>
          </div>
        </div>

        {/* Trust Section - As Footer within Hero */}
        <div className="mt-auto">
          <div className="text-center mb-6">
            <p className="text-[#6b7280] text-sm font-medium font-sans">
              {t('hero.trusted_by')}
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center opacity-50">
            {/* Company Logo Placeholders */}
            {['TechCorp', 'InnovateLab', 'DataFlow', 'CloudSync', 'SmartSys', 'FutureTech'].map((company) => (
              <div key={company} className="flex items-center justify-center h-10 w-20 bg-white/80 rounded-lg border border-gray-200 backdrop-blur-sm">
                <span className="text-[#6b7280] text-xs font-semibold">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Separate component for the bottom section
export const HeroBottomSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative z-10 bg-[#fafbfc] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Why choose section */}
          <div className="text-left">
            <h3 className="text-3xl md:text-4xl font-normal text-[#1a1a2e] mb-1 font-serif">
              {t('about.why_choose')}
            </h3>
            <h3 className="text-3xl md:text-4xl font-normal text-[#9ca3af] mb-4 font-serif">
              <HighlightedTranslatedText>{t('about.zenko_question')}</HighlightedTranslatedText>
            </h3>
            <p className="text-[#6b7280] text-sm leading-relaxed font-sans">
              {t('about.description')}
            </p>
          </div>

          {/* AI-Powered Solutions */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-[#4d8af0] rounded-xl flex items-center justify-center transform rotate-12 shadow-lg shadow-blue-200/50">
                <svg className="w-6 h-6 text-white transform -rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
            <h4 className="text-lg font-semibold text-[#1a1a2e] mb-2 font-sans">
              {t('about.ai_solutions')}
            </h4>
            <p className="text-[#6b7280] text-sm leading-relaxed font-sans">
              {t('about.ai_description')}
            </p>
          </div>

          {/* Smart Integration */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-[#e8f4fc] rounded-xl flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6 text-[#4d8af0]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
            </div>
            <h4 className="text-lg font-semibold text-[#1a1a2e] mb-2 font-sans">
              {t('about.smart_integration')}
            </h4>
            <p className="text-[#6b7280] text-sm leading-relaxed font-sans">
              {t('about.integration_description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
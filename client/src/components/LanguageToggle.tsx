import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#4d8af0] to-[#3b7ae0] hover:from-[#3b7ae0] hover:to-[#2a6bc7] text-white px-4 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-lg shadow-blue-200/50 flex items-center gap-2 border-2 border-white/20 backdrop-blur-sm min-w-[80px] justify-center"
      style={{ fontFamily: "'Inter', sans-serif" }}
      aria-label={`Switch to ${language === 'en' ? 'Gujarati' : 'English'}`}
    >
      <span className="text-base font-bold">
        {language === 'en' ? 'GU' : 'EN'}
      </span>
      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
    </button>
  );
};

export default LanguageToggle;
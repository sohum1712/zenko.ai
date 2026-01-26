import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { Language } from '@/types';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Get language from localStorage or default to 'en'
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('zenko-language') as Language) || 'en';
    }
    return 'en';
  });

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'en' ? 'gu' : 'en';
      // Save to localStorage for persistence
      if (typeof window !== 'undefined') {
        localStorage.setItem('zenko-language', newLang);
      }
      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
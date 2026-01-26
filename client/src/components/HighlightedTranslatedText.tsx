import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';
import type { HighlightedTranslatedTextProps } from '@/types';

const HighlightedTranslatedText: React.FC<HighlightedTranslatedTextProps> = ({ 
  children, 
  className = '',
  style = {}
}) => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  
  // For backward compatibility, try to translate the text directly
  const translatedText = t(children) !== children ? t(children) : children;

  // Apply Shrikhand font for Gujarati highlighted text with proper spacing
  const fontStyle = language === 'gu' 
    ? { 
        fontFamily: "'Shrikhand', cursive", 
        lineHeight: '1.2',
        display: 'inline-block',
        ...style 
      }
    : style;

  return (
    <span 
      className={`${className} ${language === 'gu' ? 'gujarati-text shrikhand-font' : ''}`} 
      style={fontStyle}
      lang={language === 'gu' ? 'gu' : 'en'}
    >
      {translatedText}
    </span>
  );
};

export default React.memo(HighlightedTranslatedText);
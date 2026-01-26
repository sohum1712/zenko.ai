import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface TranslatedInputProps {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
}

interface TranslatedTextareaProps {
  rows?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
}

const placeholderTranslations: { [key: string]: { [key: string]: string } } = {
  'Your name': { 'gu': 'તમારું નામ' },
  'your.email@example.com': { 'gu': 'તમારું.ઈમેઈલ@ઉદાહરણ.com' },
  '+91 98765 43210': { 'gu': '+91 98765 43210' },
  'Tell us about your project requirements': { 'gu': 'તમારી પ્રોજેક્ટ આવશ્યકતાઓ વિશે અમને જણાવો' }
};

export const TranslatedInput: React.FC<TranslatedInputProps> = ({ 
  placeholder, 
  required,
  ...props 
}) => {
  const { language } = useLanguage();
  const translatedPlaceholder = language === 'gu' 
    ? placeholderTranslations[placeholder]?.['gu'] || placeholder
    : placeholder;

  return (
    <Input
      {...props}
      placeholder={translatedPlaceholder}
      required={required}
    />
  );
};

export const TranslatedTextarea: React.FC<TranslatedTextareaProps> = ({ 
  placeholder, 
  required,
  ...props 
}) => {
  const { language } = useLanguage();
  const translatedPlaceholder = language === 'gu' 
    ? placeholderTranslations[placeholder]?.['gu'] || placeholder
    : placeholder;

  return (
    <Textarea
      {...props}
      placeholder={translatedPlaceholder}
      required={required}
    />
  );
};
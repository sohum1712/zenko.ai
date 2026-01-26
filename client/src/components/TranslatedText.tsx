import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import type { TranslatedTextProps } from '@/types';

const TranslatedText: React.FC<TranslatedTextProps> = ({ children, className, style }) => {
  const { t } = useTranslation();
  
  // For backward compatibility, try to translate the text directly
  // In the future, all components should use translation keys
  const translatedText = t(children) !== children ? t(children) : children;

  return (
    <span className={className} style={style}>
      {translatedText}
    </span>
  );
};

export default React.memo(TranslatedText);
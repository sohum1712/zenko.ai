import { useLanguage } from '@/contexts/LanguageContext';
import enTranslations from '@/locales/en.json';
import guTranslations from '@/locales/gu.json';

type TranslationKey = string;
type Translations = typeof enTranslations;

const translations: Record<string, Translations> = {
  en: enTranslations,
  gu: guTranslations,
};

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: TranslationKey): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if key not found
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            console.warn(`Translation key "${key}" not found`);
            return key; // Return the key itself as fallback
          }
        }
        break;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return { t, language };
};

export default useTranslation;
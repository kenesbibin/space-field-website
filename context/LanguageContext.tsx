'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the available languages
export type Language = 'en' | 'fr' | 'de' | 'es' | 'ar' | 'ms' | 'zh';

export const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load translations on mount or language change
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const langData = await import(`../locales/${language}.json`);
        setTranslations(langData.default || langData);
      } catch (error) {
        console.error(`Failed to load translations for ${language}`, error);
        // Fallback to English if loading fails and we are not already on English
        if (language !== 'en') {
          try {
            const enData = await import(`../locales/en.json`);
            setTranslations(enData.default || enData);
          } catch (e) {
            console.error("Critical: Failed to load fallback English translations", e);
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();

    // Update document direction for Arabic
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;

  }, [language]);

  // Load persisted language from localStorage
  useEffect(() => {
    const storedLang = localStorage.getItem('app-language') as Language;
    if (storedLang && languages.some(l => l.code === storedLang)) {
      setLanguageState(storedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app-language', lang);
  };

  // Translation function to handle nested keys like 'navbar.home'
  const t = (key: string): string => {
    const keys = key.split('.');
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

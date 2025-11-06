import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'nl' | 'pt';

interface LanguageContextType {
  currentLang: Language;
  setCurrentLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLang, setCurrentLangState] = useState<Language>('nl');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang && ['en', 'nl', 'pt'].includes(savedLang)) {
      setCurrentLangState(savedLang);
    }
  }, []);

  // Save language to localStorage when it changes
  const setCurrentLang = (lang: Language) => {
    setCurrentLangState(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

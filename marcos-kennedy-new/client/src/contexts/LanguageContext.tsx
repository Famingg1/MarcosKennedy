import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { translations, type Language } from '../i18n/translations'

type TranslationType = typeof translations[Language]

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationType
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Country to language mapping
const countryToLanguage: Record<string, Language> = {
  // Dutch-speaking
  NL: 'nl',
  BE: 'nl',
  SR: 'nl',
  // Portuguese-speaking
  PT: 'pt',
  BR: 'pt',
  AO: 'pt',
  MZ: 'pt',
  CV: 'pt',
  GW: 'pt',
  ST: 'pt',
  TL: 'pt',
  // English as default for others
}

async function detectLanguageFromLocation(): Promise<Language> {
  try {
    // Use IP-based geolocation API
    const response = await fetch('https://ipapi.co/json/', {
      signal: AbortSignal.timeout(3000) // 3 second timeout
    })

    if (!response.ok) throw new Error('Geolocation failed')

    const data = await response.json()
    const countryCode = data.country_code as string

    return countryToLanguage[countryCode] || 'en'
  } catch {
    // Fallback: check browser language
    const browserLang = navigator.language.split('-')[0].toLowerCase()
    if (browserLang === 'nl') return 'nl'
    if (browserLang === 'pt') return 'pt'
    return 'en'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage first
    const stored = localStorage.getItem('language') as Language
    if (stored && ['nl', 'en', 'pt'].includes(stored)) {
      return stored
    }
    // Default to Dutch while detecting
    return 'nl'
  })

  const [hasAutoDetected, setHasAutoDetected] = useState(false)

  useEffect(() => {
    // Only auto-detect if no stored preference
    const stored = localStorage.getItem('language')
    if (!stored && !hasAutoDetected) {
      setHasAutoDetected(true)
      detectLanguageFromLocation().then((detectedLang) => {
        setLanguageState(detectedLang)
        localStorage.setItem('language', detectedLang)
      })
    }
  }, [hasAutoDetected])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Hook for getting language-specific content outside of React components
export function getLanguageFromStorage(): Language {
  const stored = localStorage.getItem('language') as Language
  if (stored && ['nl', 'en', 'pt'].includes(stored)) {
    return stored
  }
  return 'nl'
}

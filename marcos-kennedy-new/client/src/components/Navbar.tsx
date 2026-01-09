import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useLanguage } from '../contexts/LanguageContext'
import type { Language } from '../i18n/translations'

const languageLabels: Record<Language, { short: string; full: string; flag: string }> = {
  nl: { short: 'NL', full: 'Nederlands', flag: 'NL' },
  en: { short: 'EN', full: 'English', flag: 'EN' },
  pt: { short: 'PT', full: 'Portugues', flag: 'PT' },
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const location = useLocation()
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.gallery, href: '/galerij' },
    { name: t.nav.about, href: '/over-mij' },
    { name: t.nav.contact, href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setLangMenuOpen(false)
  }, [location])

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.lang-menu')) {
        setLangMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-brand-darker/95 backdrop-blur-md py-4 shadow-lg shadow-black/20'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-brand-primary">MARCOS</span>
              <span className="text-white"> KENNEDY</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200 hover:text-brand-primary',
                  location.pathname === link.href
                    ? 'text-brand-primary'
                    : 'text-white/80'
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="relative lang-menu">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setLangMenuOpen(!langMenuOpen)
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-brand-primary/30 transition-all text-white/80 hover:text-white"
              >
                <Globe size={16} />
                <span className="text-sm font-medium">{languageLabels[language].short}</span>
                <ChevronDown size={14} className={cn('transition-transform', langMenuOpen && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-40 py-2 bg-brand-darker/98 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl"
                  >
                    {(Object.keys(languageLabels) as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang)
                          setLangMenuOpen(false)
                        }}
                        className={cn(
                          'w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors',
                          language === lang
                            ? 'text-brand-primary bg-brand-primary/10'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        )}
                      >
                        <span className="font-medium">{languageLabels[lang].short}</span>
                        <span className="text-white/50">{languageLabels[lang].full}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className="btn-primary text-sm px-6 py-3"
            >
              {t.nav.book}
            </Link>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            {/* Mobile Language Switcher */}
            <div className="relative lang-menu">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setLangMenuOpen(!langMenuOpen)
                }}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80"
              >
                <Globe size={14} />
                <span className="text-xs font-medium">{languageLabels[language].short}</span>
              </button>

              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-36 py-2 bg-brand-darker/98 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl"
                  >
                    {(Object.keys(languageLabels) as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang)
                          setLangMenuOpen(false)
                        }}
                        className={cn(
                          'w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors',
                          language === lang
                            ? 'text-brand-primary bg-brand-primary/10'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        )}
                      >
                        <span className="font-medium">{languageLabels[lang].short}</span>
                        <span className="text-white/50 text-xs">{languageLabels[lang].full}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-darker/98 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'block text-lg font-medium py-2 transition-colors',
                    location.pathname === link.href
                      ? 'text-brand-primary'
                      : 'text-white/80 hover:text-brand-primary'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary block text-center mt-4"
              >
                {t.nav.book}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

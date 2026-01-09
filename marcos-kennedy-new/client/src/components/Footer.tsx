import { Link } from 'react-router-dom'
import { Instagram, Music2, Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/marcoskennedy16',
    icon: Instagram,
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@marcos.twd',
    icon: Music2,
  },
]

export default function Footer() {
  const { t } = useLanguage()

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.gallery, href: '/galerij' },
    { name: t.nav.about, href: '/over-mij' },
    { name: t.nav.contact, href: '/contact' },
  ]

  return (
    <footer className="bg-gradient-to-b from-brand-dark to-brand-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">
                <span className="text-brand-primary">MARCOS</span>
                <span className="text-white"> KENNEDY</span>
              </span>
            </Link>
            <p className="text-white/60 mb-6 max-w-md">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-brand-primary hover:text-white transition-all duration-300"
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{t.footer.navigation}</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-brand-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{t.nav.contact}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@marcoskennedy.com"
                  className="flex items-center gap-3 text-white/60 hover:text-brand-primary transition-colors"
                >
                  <Mail size={18} />
                  <span>info@marcoskennedy.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+31614871373"
                  className="flex items-center gap-3 text-white/60 hover:text-brand-primary transition-colors"
                >
                  <Phone size={18} />
                  <span>+31 6 14871373</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin size={18} />
                  <span>{t.contact.info.worldwide}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Marcos Kennedy. {t.footer.rights}
            </p>
            <p className="text-white/40 text-sm">
              Professional The Weeknd Tribute Artist
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

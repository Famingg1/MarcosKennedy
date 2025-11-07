import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { currentLang } = useLanguage();

  const translations = {
    en: { availableWorldwide: 'Available Worldwide' },
    nl: { availableWorldwide: 'Beschikbaar Wereldwijd' },
    pt: { availableWorldwide: 'Disponível em Todo o Mundo' }
  };

  const t = translations[currentLang as keyof typeof translations];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      platform: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/marcoskennedy16'
    },
    {
      platform: 'TikTok',
      icon: 'fab fa-tiktok',
      url: 'https://www.tiktok.com/@marcos.twd'
    },
    {
      platform: 'YouTube',
      icon: 'fab fa-youtube',
      url: '#'
    },
    {
      platform: 'Spotify',
      icon: 'fab fa-spotify',
      url: '#'
    }
  ];

  const quickLinks = [
    { name: 'Home', section: 'hero' },
    { name: 'About', section: 'about' },
    { name: 'Gallery', section: 'gallery' },
    { name: 'Services', section: 'services' },
    { name: 'Contact', section: 'contact' }
  ];

  return (
    <footer className="bg-black border-t border-primary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4">
              <span className="text-white">Marcos</span> Kennedy
            </div>
            <p className="text-gray-400 mb-6 max-w-md" data-testid="text-footer-description">
              The ultimate Weeknd tribute experience. Professional entertainment 
              for events, venues, and celebrations worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-primary transition-colors text-xl"
                  data-testid={`link-footer-social-${social.platform.toLowerCase()}`}
                  onClick={(e) => {
                    if (social.url === '#') {
                      e.preventDefault();
                      console.log(`Footer ${social.platform} clicked`);
                    } else {
                      window.open(social.url, '_blank');
                    }
                  }}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                    data-testid={`link-footer-nav-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <a 
                href="mailto:marcos@weekndtribute.com"
                className="text-gray-400 hover:text-primary transition-colors block"
                data-testid="link-footer-email"
              >
                <i className="fas fa-envelope mr-2"></i>
                marcos@weekndtribute.com
              </a>
              <a 
                href="tel:+15551234567"
                className="text-gray-400 hover:text-primary transition-colors block"
                data-testid="link-footer-phone"
              >
                <i className="fas fa-phone mr-2"></i>
                +1 (555) 123-4567
              </a>
              <div className="text-gray-400">
                <i className="fas fa-map-marker-alt mr-2"></i>
                {t.availableWorldwide}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0" data-testid="text-copyright">
            © {currentYear} Marcos Kennedy. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <button 
              className="text-gray-400 hover:text-primary transition-colors"
              onClick={() => console.log('Privacy Policy clicked')}
              data-testid="link-privacy-policy"
            >
              Privacy Policy
            </button>
            <button 
              className="text-gray-400 hover:text-primary transition-colors"
              onClick={() => console.log('Terms clicked')}
              data-testid="link-terms"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
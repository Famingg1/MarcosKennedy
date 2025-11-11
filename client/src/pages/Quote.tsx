import { useState } from 'react';
import { useLocation } from 'wouter';
import { ChevronDown, Phone, Mail, Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      gallery: "Gallery",
      bookNow: "Book Now"
    },
    quote: {
      title: "Get Your Personalized Quote",
      subtitle: "Let's discuss your event and create an unforgettable experience",
      description: "Ready to book Marcos Kennedy for your event? Contact us directly or fill out the form below to receive a personalized quote tailored to your specific needs.",
      contactInfo: "Contact Information",
      phone: "Phone",
      email: "Email",
      form: {
        title: "Request a Quote",
        subtitle: "Tell us about your event",
        name: "Your Name",
        namePlaceholder: "Enter your full name",
        email: "Email Address",
        emailPlaceholder: "your@email.com",
        eventType: "Event Type",
        eventTypePlaceholder: "Wedding, Corporate, Private Party, etc.",
        eventDate: "Preferred Event Date",
        eventDatePlaceholder: "Select a date",
        location: "Location/Venue",
        locationPlaceholder: "City or Venue Name (optional: Company)",
        guestCount: "Estimated Guest Count",
        guestCountPlaceholder: "How many guests?",
        message: "Additional Details",
        messagePlaceholder: "Tell us more about your event, special requests, or any specific songs you'd like...",
        submit: "Send Quote Request",
        submitting: "Sending...",
        success: "Quote request sent successfully! We'll be in touch soon."
      }
    },
    footer: {
      availableWorldwide: "Available Worldwide",
      links: "Links",
      home: "Home",
      gallery: "Gallery",
      copyright: "© 2024 Marcos Kennedy. All rights reserved.",
      tagline: "The Ultimate Weeknd Experience",
      description: "Authentic tribute performances worldwide"
    },
    contact: {
      phone: "+31614871373",
      phoneDisplay: "+31 6 14871373"
    }
  },
  nl: {
    nav: {
      home: "Home",
      about: "Over Ons",
      services: "Services",
      gallery: "Galerij",
      bookNow: "Boek Nu"
    },
    quote: {
      title: "Krijg Uw Persoonlijke Offerte",
      subtitle: "Laten we uw evenement bespreken en een onvergetelijke ervaring creëren",
      description: "Klaar om Marcos Kennedy voor uw evenement in te boeken? Neem direct contact met ons op of vul het formulier hieronder in voor een persoonlijke offerte op maat van uw wensen.",
      contactInfo: "Contact Informatie",
      phone: "Telefoon",
      email: "E-mailadres",
      form: {
        title: "Offerte Aanvragen",
        subtitle: "Vertel ons over uw evenement",
        name: "Uw Naam",
        namePlaceholder: "Voer uw volledige naam in",
        email: "E-mailadres",
        emailPlaceholder: "uw@email.com",
        eventType: "Type Evenement",
        eventTypePlaceholder: "Bruiloft, Bedrijfsfeest, Privéfeest, etc.",
        eventDate: "Gewenste Datum Evenement",
        eventDatePlaceholder: "Selecteer een datum",
        location: "Locatie/Venue",
        locationPlaceholder: "Stad of Venue Naam (optioneel: Bedrijf)",
        guestCount: "Geschatte Aantal Gasten",
        guestCountPlaceholder: "Hoeveel gasten?",
        message: "Aanvullende Details",
        messagePlaceholder: "Vertel ons meer over uw evenement, speciale wensen, of nummers die u graag wilt...",
        submit: "Offerte Aanvragen Verzenden",
        submitting: "Verzenden...",
        success: "Offerte aanvraag succesvol verzonden! We nemen binnenkort contact op."
      }
    },
    footer: {
      availableWorldwide: "Beschikbaar Wereldwijd",
      links: "Links",
      home: "Home",
      gallery: "Galerij",
      copyright: "© 2024 Marcos Kennedy. Alle rechten voorbehouden.",
      tagline: "De Ultieme Weeknd Ervaring",
      description: "Authentieke tributeoptredens wereldwijd"
    },
    contact: {
      phone: "+31614871373",
      phoneDisplay: "+31 6 14871373"
    }
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      gallery: "Galeria",
      bookNow: "Reserve Agora"
    },
    quote: {
      title: "Obtenha Sua Cotação Personalizada",
      subtitle: "Vamos discutir seu evento e criar uma experiência inesquecível",
      description: "Pronto para reservar Marcos Kennedy para seu evento? Entre em contato conosco diretamente ou preencha o formulário abaixo para receber uma cotação personalizada de acordo com suas necessidades específicas.",
      contactInfo: "Informações de Contato",
      phone: "Telefone",
      email: "E-mail",
      form: {
        title: "Solicitar Cotação",
        subtitle: "Conte-nos sobre seu evento",
        name: "Seu Nome",
        namePlaceholder: "Digite seu nome completo",
        email: "Endereço de E-mail",
        emailPlaceholder: "seu@email.com",
        eventType: "Tipo de Evento",
        eventTypePlaceholder: "Casamento, Corporativo, Festa Privada, etc.",
        eventDate: "Data Preferida do Evento",
        eventDatePlaceholder: "Selecione uma data",
        location: "Local/Venue",
        locationPlaceholder: "Cidade ou Nome do Venue (opcional: Empresa)",
        guestCount: "Número Estimado de Convidados",
        guestCountPlaceholder: "Quantos convidados?",
        message: "Detalhes Adicionais",
        messagePlaceholder: "Conte-nos mais sobre seu evento, pedidos especiais, ou músicas específicas que gostaria...",
        submit: "Enviar Solicitação de Cotação",
        submitting: "Enviando...",
        success: "Solicitação de cotação enviada com sucesso! Entraremos em contato em breve."
      }
    },
    footer: {
      availableWorldwide: "Disponível em Todo o Mundo",
      links: "Links",
      home: "Início",
      gallery: "Galeria",
      copyright: "© 2024 Marcos Kennedy. Todos os direitos reservados.",
      tagline: "A Definitiva Experiência Weeknd",
      description: "Performances tribute autênticas em todo o mundo"
    },
    contact: {
      phone: "+5521974922020",
      phoneDisplay: "+55 21 97492-2020"
    }
  }
};

export default function Quote() {
  const [, navigate] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLang, setCurrentLang } = useLanguage();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    eventDate: '',
    location: '',
    guestCount: '',
    message: ''
  });

  const t = translations[currentLang as keyof typeof translations];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - in a real app, this would send to a backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        eventType: '',
        eventDate: '',
        location: '',
        guestCount: '',
        message: ''
      });
      setTimeout(() => setSubmitSuccess(false), 4000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black/95 backdrop-blur-sm border-b border-red-900/30 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex-shrink-0">
              <button
                onClick={() => navigate('/')}
                className="text-lg sm:text-xl font-bold text-red-500 hover:text-red-400 transition-colors"
              >
                MARCOS KENNEDY
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <button onClick={() => navigate('/')} className="px-3 py-2 text-gray-300 hover:text-red-500 transition-colors">
                {t.nav.home}
              </button>
              <button className="px-3 py-2 text-red-500 font-semibold">
                {t.nav.bookNow}
              </button>
            </div>

            {/* Language Selector and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center space-x-1 px-3 py-2 text-gray-300 hover:text-red-500 transition-colors"
                >
                  <span className="text-sm font-medium">{currentLang.toUpperCase()}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isLangDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-gray-900 border border-red-900/30 rounded-lg shadow-lg py-2 z-50">
                    {['en', 'nl', 'pt'].map(lang => (
                      <button
                        key={lang}
                        onClick={() => {
                          setCurrentLang(lang);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          currentLang === lang ? 'text-red-500 bg-red-900/10' : 'text-gray-300 hover:text-red-500'
                        } transition-colors`}
                      >
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-red-900/20 transition-colors"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className={`h-0.5 bg-red-500 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`h-0.5 bg-red-500 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`h-0.5 bg-red-500 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-red-900/30 py-4 space-y-2">
              <button onClick={() => navigate('/')} className="block w-full text-left px-4 py-2 text-gray-300 hover:text-red-500">
                {t.nav.home}
              </button>
              <button className="block w-full text-left px-4 py-2 text-red-500 font-semibold">
                {t.nav.bookNow}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            {t.quote.title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-6 sm:mb-8">
            {t.quote.subtitle}
          </p>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            {t.quote.description}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-12">
          {/* Contact Info */}
          <div className="bg-gray-900/50 border border-red-900/30 rounded-lg p-6 sm:p-8 h-fit">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-red-500">
              {t.quote.contactInfo}
            </h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-red-900/20 p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {t.quote.phone}
                  </h3>
                  <a href={`tel:${t.contact.phone}`} className="text-xl font-bold text-red-500 hover:text-red-400 transition-colors">
                    {t.contact.phoneDisplay}
                  </a>
                  <p className="text-sm text-gray-400 mt-1">Available for calls and WhatsApp</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-red-900/20 p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {t.quote.email}
                  </h3>
                  <a href="mailto:info@marcoskennedy.com" className="text-red-500 hover:text-red-400 transition-colors break-all">
                    info@marcoskennedy.com
                  </a>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-8 pt-8 border-t border-red-900/30">
                <p className="text-sm text-gray-400 mb-4">
                  {currentLang === 'nl' ? 'Voor het snelste antwoord, bel of stuur ons direct een bericht!' : currentLang === 'pt' ? 'Para a resposta mais rápida, ligue ou envie mensagem diretamente!' : 'For the quickest response, call or text us directly!'}
                </p>
                <a
                  href={`tel:${t.contact.phone}`}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>{currentLang === 'nl' ? 'Bel Nu' : currentLang === 'pt' ? 'Ligar Agora' : 'Call Now'}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
                {t.quote.form.title}
              </h2>
              <p className="text-gray-400 mb-6">
                {t.quote.form.subtitle}
              </p>

              {submitSuccess && (
                <div className="bg-green-900/20 border border-green-600 text-green-400 p-4 rounded-lg text-sm">
                  {t.quote.form.success}
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t.quote.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t.quote.form.namePlaceholder}
                  required
                  className="w-full bg-gray-900 border border-red-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t.quote.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t.quote.form.emailPlaceholder}
                  required
                  className="w-full bg-gray-900 border border-red-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t.quote.form.eventType}
                </label>
                <input
                  type="text"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  placeholder={t.quote.form.eventTypePlaceholder}
                  className="w-full bg-gray-900 border border-red-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              {/* Event Date */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t.quote.form.eventDate}
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900 border border-red-900/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t.quote.form.location}
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder={t.quote.form.locationPlaceholder}
                  className="w-full bg-gray-900 border border-red-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              {/* Guest Count */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t.quote.form.guestCount}
                </label>
                <input
                  type="text"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleInputChange}
                  placeholder={t.quote.form.guestCountPlaceholder}
                  className="w-full bg-gray-900 border border-red-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t.quote.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t.quote.form.messagePlaceholder}
                  rows={4}
                  className="w-full bg-gray-900 border border-red-900/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 disabled:from-gray-600 disabled:to-gray-500 px-6 py-3 rounded-full text-base font-semibold transition-all transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(220,38,38,0.4)] flex items-center justify-center space-x-2"
              >
                <span>{isSubmitting ? t.quote.form.submitting : t.quote.form.submit}</span>
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-red-900/30 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-3 sm:mb-4">MARCOS KENNEDY</h3>
              <p className="text-sm sm:text-base text-gray-300">{t.footer.tagline}</p>
              <p className="text-sm text-gray-400 mt-2">
                {t.footer.description}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <a href="mailto:info@marcoskennedy.com" className="text-gray-300 hover:text-red-400 transition-colors">info@marcoskennedy.com</a>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <a href={`tel:${t.contact.phone}`} className="text-gray-300 hover:text-red-400 transition-colors">{t.contact.phoneDisplay}</a>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">{t.footer.availableWorldwide}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">{t.footer.links}</h4>
              <div className="space-y-2">
                <button onClick={() => navigate('/')} className="block text-gray-300 hover:text-red-400 transition-colors text-sm">{t.footer.home}</button>
                <button onClick={() => navigate('/gallery')} className="block text-gray-300 hover:text-red-400 transition-colors text-sm">{t.footer.gallery}</button>
              </div>
            </div>
          </div>

          <div className="border-t border-red-900/30 pt-6 text-center">
            <p className="text-gray-500 text-xs">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

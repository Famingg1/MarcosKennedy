import { useState } from 'react';
import { ChevronDown, Star, Mic, Users, Play, Camera, Calendar, Heart } from 'lucide-react';

// Language translations
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      gallery: "Gallery",
      bookNow: "Book Now"
    },
    hero: {
      title: "THE ULTIMATE",
      subtitle: "WEEKND EXPERIENCE",
      description: "Professional The Weeknd tribute artist bringing authentic performances to events worldwide. Book Marcos Kennedy for an unforgettable experience.",
      bookPerformance: "Book Performance",
      watchDemo: "Watch Demo"
    },
    features: {
      title: "Why Choose Marcos Kennedy?",
      subtitle: "Experience the perfect blend of authenticity, professionalism, and entertainment",
      authentic: {
        title: "Authentic Performance",
        desc: "Perfect vocal resemblance and stage presence that captures The Weeknd's essence"
      },
      lookalike: {
        title: "Look-Alike Perfection",
        desc: "Striking visual similarity with authentic styling and choreography"
      },
      professional: {
        title: "Professional Experience",
        desc: "Years of experience performing at high-profile events and venues"
      }
    },
    about: {
      title: "Meet Marcos Kennedy",
      subtitle: "The world's most authentic The Weeknd tribute artist",
      description: "Marcos Kennedy is the ultimate The Weeknd look-alike who has captivated audiences worldwide. With over 1 million followers across all platforms and 500+ successful performances, he brings an unparalleled level of authenticity to every show.",
      stats: {
        followers: "1M+ Followers",
        performances: "500+ Shows",
        years: "5+ Years Experience",
        countries: "15+ Countries"
      }
    },
    services: {
      title: "Our Services",
      subtitle: "Tailored performances for every occasion",
      live: {
        title: "Live Performances",
        desc: "Full tribute shows with The Weeknd's greatest hits",
        price: "From €1,500"
      },
      private: {
        title: "Private Events",
        desc: "Weddings, parties, and corporate functions",
        price: "From €1,200"
      },
      meetgreet: {
        title: "Meet & Greet",
        desc: "Personal interactions and photo opportunities",
        price: "From €500"
      }
    },
    gallery: {
      title: "See Me Perform",
      subtitle: "Professional photos and videos from recent shows"
    },
    cta: {
      title: "Ready to Book?",
      subtitle: "Contact us today to discuss your event and get a personalized quote",
      getQuote: "Get Quote",
      call: "Call: +31 6 XX XX XX XX"
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
    hero: {
      title: "DE ULTIEME",
      subtitle: "WEEKND ERVARING",
      description: "Professionele The Weeknd tribute artiest die authentieke optredens brengt naar evenementen wereldwijd. Boek Marcos Kennedy voor een onvergetelijke ervaring.",
      bookPerformance: "Boek Optreden",
      watchDemo: "Bekijk Demo"
    },
    features: {
      title: "Waarom Marcos Kennedy?",
      subtitle: "Ervaar de perfecte mix van authenticiteit, professionaliteit en entertainment",
      authentic: {
        title: "Authentiek Optreden",
        desc: "Perfecte vocale gelijkenis en stage presence die The Weeknd's essentie vastlegt"
      },
      lookalike: {
        title: "Look-Alike Perfectie",
        desc: "Opvallende visuele gelijkenis met authentieke styling en choreografie"
      },
      professional: {
        title: "Professionele Ervaring",
        desc: "Jaren ervaring met optreden op high-profile evenementen en venues"
      }
    },
    about: {
      title: "Ontmoet Marcos Kennedy",
      subtitle: "'s Werelds meest authentieke The Weeknd tribute artiest",
      description: "Marcos Kennedy is de ultieme The Weeknd look-alike die publiek wereldwijd heeft betoverd. Met meer dan 1 miljoen volgers op alle platformen en 500+ succesvolle optredens, brengt hij een ongeëvenaard niveau van authenticiteit naar elke show.",
      stats: {
        followers: "1M+ Volgers",
        performances: "500+ Shows",
        years: "5+ Jaar Ervaring",
        countries: "15+ Landen"
      }
    },
    services: {
      title: "Onze Services",
      subtitle: "Op maat gemaakte optredens voor elke gelegenheid",
      live: {
        title: "Live Optredens",
        desc: "Volledige tribute shows met The Weeknd's grootste hits",
        price: "Vanaf €1.500"
      },
      private: {
        title: "Privé Evenementen",
        desc: "Bruiloften, feesten en bedrijfsfuncties",
        price: "Vanaf €1.200"
      },
      meetgreet: {
        title: "Meet & Greet",
        desc: "Persoonlijke interacties en foto mogelijkheden",
        price: "Vanaf €500"
      }
    },
    gallery: {
      title: "Zie Mij Optreden",
      subtitle: "Professionele foto's en video's van recente shows"
    },
    cta: {
      title: "Klaar om te Boeken?",
      subtitle: "Neem vandaag contact met ons op om je evenement te bespreken en een persoonlijke offerte te krijgen",
      getQuote: "Krijg Offerte",
      call: "Bel: +31 6 XX XX XX XX"
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
    hero: {
      title: "A DEFINITIVA",
      subtitle: "EXPERIÊNCIA WEEKND",
      description: "Artista tribute profissional do The Weeknd trazendo performances autênticas para eventos em todo o mundo. Reserve Marcos Kennedy para uma experiência inesquecível.",
      bookPerformance: "Reserve Performance",
      watchDemo: "Assista Demo"
    },
    features: {
      title: "Por que Escolher Marcos Kennedy?",
      subtitle: "Experimente a mistura perfeita de autenticidade, profissionalismo e entretenimento",
      authentic: {
        title: "Performance Autêntica",
        desc: "Semelhança vocal perfeita e presença de palco que captura a essência do The Weeknd"
      },
      lookalike: {
        title: "Perfeição Look-Alike",
        desc: "Semelhança visual impressionante com estilo autêntico e coreografia"
      },
      professional: {
        title: "Experiência Profissional",
        desc: "Anos de experiência se apresentando em eventos de alto perfil e venues"
      }
    },
    about: {
      title: "Conheça Marcos Kennedy",
      subtitle: "O artista tribute mais autêntico do The Weeknd do mundo",
      description: "Marcos Kennedy é o definitivo look-alike do The Weeknd que cativou audiências em todo o mundo. Com mais de 1 milhão de seguidores em todas as plataformas e 500+ performances bem-sucedidas, ele traz um nível incomparável de autenticidade para cada show.",
      stats: {
        followers: "1M+ Seguidores",
        performances: "500+ Shows",
        years: "5+ Anos Experiência",
        countries: "15+ Países"
      }
    },
    services: {
      title: "Nossos Serviços",
      subtitle: "Performances sob medida para cada ocasião",
      live: {
        title: "Performances Ao Vivo",
        desc: "Shows tribute completos com os maiores hits do The Weeknd",
        price: "A partir de €1.500"
      },
      private: {
        title: "Eventos Privados",
        desc: "Casamentos, festas e funções corporativas",
        price: "A partir de €1.200"
      },
      meetgreet: {
        title: "Meet & Greet",
        desc: "Interações pessoais e oportunidades de fotos",
        price: "A partir de €500"
      }
    },
    gallery: {
      title: "Me Veja Performar",
      subtitle: "Fotos e vídeos profissionais de shows recentes"
    },
    cta: {
      title: "Pronto para Reservar?",
      subtitle: "Entre em contato conosco hoje para discutir seu evento e obter uma cotação personalizada",
      getQuote: "Obter Cotação",
      call: "Ligue: +31 6 XX XX XX XX"
    }
  }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const t = translations[currentLang as keyof typeof translations];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-lg z-50 border-b border-red-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold text-red-500">
              MARCOS KENNEDY
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-red-500 transition-colors">{t.nav.home}</a>
              <a href="#about" className="text-white hover:text-red-500 transition-colors">{t.nav.about}</a>
              <a href="#services" className="text-white hover:text-red-500 transition-colors">{t.nav.services}</a>
              <a href="#gallery" className="text-white hover:text-red-500 transition-colors">{t.nav.gallery}</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-red-500 transition-colors p-2 -mr-2"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className={`w-full h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                  <div className={`w-full h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`w-full h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                </div>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center space-x-1 text-white hover:text-red-500 transition-colors"
                >
                  <span className="text-sm font-medium">{currentLang.toUpperCase()}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isLangDropdownOpen && (
                  <div className="absolute right-0 mt-2 py-2 w-24 bg-black/95 backdrop-blur-lg border border-red-900/30 rounded-lg shadow-xl">
                    {['en', 'nl', 'pt'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setCurrentLang(lang);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-red-900/20 transition-colors ${
                          currentLang === lang ? 'text-red-500' : 'text-white'
                        }`}
                      >
                        {lang === 'en' ? 'English' : lang === 'nl' ? 'Nederlands' : 'Português'}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 px-6 py-2 rounded-full transition-all transform hover:scale-105">
                {t.nav.bookNow}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/98 backdrop-blur-lg border-t border-red-900/20">
            <div className="px-4 sm:px-6 py-4 space-y-2">
              <a
                href="#home"
                className="block text-white hover:text-red-500 transition-colors py-3 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.home}
              </a>
              <a
                href="#about"
                className="block text-white hover:text-red-500 transition-colors py-3 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.about}
              </a>
              <a
                href="#services"
                className="block text-white hover:text-red-500 transition-colors py-3 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.services}
              </a>
              <a
                href="#gallery"
                className="block text-white hover:text-red-500 transition-colors py-3 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.gallery}
              </a>
              <button className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 px-6 py-3 rounded-full transition-all transform hover:scale-105 mt-4">
                {t.nav.bookNow}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/10 to-black"></div>

        {/* Animated Stars Background */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              <Star className="w-2 h-2 text-red-500 animate-twinkle" />
            </div>
          ))}

          {/* Larger moving stars */}
          {[...Array(10)].map((_, i) => (
            <div
              key={`large-${i}`}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            >
              <Star className="w-3 h-3 text-red-400/60" />
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent animate-pulse">
              {t.hero.title}
            </span>
            <br />
            <span className="text-red-500">{t.hero.subtitle}</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(220,38,38,0.4)] group">
              <div className="flex items-center justify-center space-x-2">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{t.hero.bookPerformance}</span>
              </div>
            </button>
            <button className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105 group">
              <div className="flex items-center justify-center space-x-2">
                <Camera className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{t.hero.watchDemo}</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* About Marcos Kennedy Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-4">{t.about.title}</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              {t.about.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                {t.about.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="bg-black/50 border border-red-900/30 rounded-xl p-4 sm:p-6 text-center hover:border-red-500/50 transition-all animate-float">
                  <div className="flex items-center justify-center mb-3">
                    <Users className="w-8 h-8 text-red-500" />
                  </div>
                  <div className="text-2xl font-bold text-red-500">{t.about.stats.followers}</div>
                  <div className="text-sm text-gray-400">Social Media</div>
                </div>

                <div className="bg-black/50 border border-red-900/30 rounded-xl p-6 text-center hover:border-red-500/50 transition-all animate-float" style={{animationDelay: '0.5s'}}>
                  <div className="flex items-center justify-center mb-3">
                    <Play className="w-8 h-8 text-red-500" />
                  </div>
                  <div className="text-2xl font-bold text-red-500">{t.about.stats.performances}</div>
                  <div className="text-sm text-gray-400">Performances</div>
                </div>

                <div className="bg-black/50 border border-red-900/30 rounded-xl p-6 text-center hover:border-red-500/50 transition-all animate-float" style={{animationDelay: '1s'}}>
                  <div className="flex items-center justify-center mb-3">
                    <Calendar className="w-8 h-8 text-red-500" />
                  </div>
                  <div className="text-2xl font-bold text-red-500">{t.about.stats.years}</div>
                  <div className="text-sm text-gray-400">In Business</div>
                </div>

                <div className="bg-black/50 border border-red-900/30 rounded-xl p-6 text-center hover:border-red-500/50 transition-all animate-float" style={{animationDelay: '1.5s'}}>
                  <div className="flex items-center justify-center mb-3">
                    <Heart className="w-8 h-8 text-red-500" />
                  </div>
                  <div className="text-2xl font-bold text-red-500">{t.about.stats.countries}</div>
                  <div className="text-sm text-gray-400">Countries</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-red-900 rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="w-full h-full flex items-center justify-center text-white/70 relative z-10">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎤</div>
                    <div className="text-xl font-semibold">Marcos Kennedy</div>
                    <div className="text-sm text-gray-300">The Weeknd Tribute</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-4">{t.features.title}</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-b from-gray-900 to-black border border-red-900/30 rounded-2xl p-6 sm:p-8 text-center hover:border-red-500/50 transition-all hover:transform hover:scale-105 group">
              <div className="flex items-center justify-center mb-6">
                <Mic className="w-12 h-12 text-red-500 group-hover:animate-glow" />
              </div>
              <h3 className="text-xl font-bold text-red-500 mb-4">{t.features.authentic.title}</h3>
              <p className="text-gray-300">{t.features.authentic.desc}</p>
            </div>

            <div className="bg-gradient-to-b from-gray-900 to-black border border-red-900/30 rounded-2xl p-6 sm:p-8 text-center hover:border-red-500/50 transition-all hover:transform hover:scale-105 group">
              <div className="flex items-center justify-center mb-6">
                <Users className="w-12 h-12 text-red-500 group-hover:animate-glow" />
              </div>
              <h3 className="text-xl font-bold text-red-500 mb-4">{t.features.lookalike.title}</h3>
              <p className="text-gray-300">{t.features.lookalike.desc}</p>
            </div>

            <div className="bg-gradient-to-b from-gray-900 to-black border border-red-900/30 rounded-2xl p-6 sm:p-8 text-center hover:border-red-500/50 transition-all hover:transform hover:scale-105 group">
              <div className="flex items-center justify-center mb-6">
                <Star className="w-12 h-12 text-red-500 group-hover:animate-glow" />
              </div>
              <h3 className="text-xl font-bold text-red-500 mb-4">{t.features.professional.title}</h3>
              <p className="text-gray-300">{t.features.professional.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-4">{t.services.title}</h2>
            <p className="text-lg sm:text-xl text-gray-300">{t.services.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-black/50 border border-red-900/30 rounded-2xl p-6 hover:border-red-500/50 transition-all group hover:transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <Mic className="w-10 h-10 text-red-500 group-hover:animate-glow" />
              </div>
              <h3 className="text-xl font-bold text-red-500 mb-3">{t.services.live.title}</h3>
              <p className="text-gray-300 mb-4">{t.services.live.desc}</p>
              <div className="text-red-500 font-bold text-lg">{t.services.live.price}</div>
            </div>

            <div className="bg-black/50 border border-red-900/30 rounded-2xl p-6 hover:border-red-500/50 transition-all group hover:transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <Heart className="w-10 h-10 text-red-500 group-hover:animate-glow" />
              </div>
              <h3 className="text-xl font-bold text-red-500 mb-3">{t.services.private.title}</h3>
              <p className="text-gray-300 mb-4">{t.services.private.desc}</p>
              <div className="text-red-500 font-bold text-lg">{t.services.private.price}</div>
            </div>

            <div className="bg-black/50 border border-red-900/30 rounded-2xl p-6 hover:border-red-500/50 transition-all group hover:transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <Camera className="w-10 h-10 text-red-500 group-hover:animate-glow" />
              </div>
              <h3 className="text-xl font-bold text-red-500 mb-3">{t.services.meetgreet.title}</h3>
              <p className="text-gray-300 mb-4">{t.services.meetgreet.desc}</p>
              <div className="text-red-500 font-bold text-lg">{t.services.meetgreet.price}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-4">{t.gallery.title}</h2>
            <p className="text-lg sm:text-xl text-gray-300">{t.gallery.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { type: 'stage', title: 'Live Concert' },
              { type: 'studio', title: 'Studio Session' },
              { type: 'event', title: 'Private Event' },
              { type: 'meetgreet', title: 'Meet & Greet' },
              { type: 'backstage', title: 'Backstage' },
              { type: 'performance', title: 'On Stage' },
              { type: 'crowd', title: 'With Fans' },
              { type: 'setup', title: 'Sound Check' }
            ].map((item, index) => (
              <div
                key={index}
                className="aspect-square bg-gradient-to-br from-gray-800 via-gray-700 to-red-900 rounded-xl overflow-hidden hover:scale-105 transition-all cursor-pointer group relative"
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                <div className="w-full h-full flex flex-col items-center justify-center text-white/80 relative z-10">
                  <div className="mb-3">
                    {item.type === 'stage' && <Mic className="w-8 h-8 text-red-400" />}
                    {item.type === 'studio' && <Play className="w-8 h-8 text-red-400" />}
                    {item.type === 'event' && <Users className="w-8 h-8 text-red-400" />}
                    {item.type === 'meetgreet' && <Camera className="w-8 h-8 text-red-400" />}
                    {item.type === 'backstage' && <Star className="w-8 h-8 text-red-400" />}
                    {item.type === 'performance' && <Heart className="w-8 h-8 text-red-400" />}
                    {item.type === 'crowd' && <Users className="w-8 h-8 text-red-400" />}
                    {item.type === 'setup' && <Calendar className="w-8 h-8 text-red-400" />}
                  </div>
                  <div className="text-sm font-medium text-center px-2">{item.title}</div>
                  <div className="text-xs text-gray-300 mt-1">Marcos Kennedy</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Fake play button for video previews */}
                {['studio', 'stage', 'performance'].includes(item.type) && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-red-500/80 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* View All Gallery Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 group">
              <div className="flex items-center justify-center space-x-2">
                <Camera className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>View Full Gallery</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-red-900/20 to-black relative overflow-hidden">
        {/* Floating stars in CTA */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              <Star className="w-1 h-1 text-red-500" />
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate-glow">{t.cta.title}</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(220,38,38,0.4)] group">
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{t.cta.getQuote}</span>
              </div>
            </button>
            <button className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105 group">
              <div className="flex items-center justify-center space-x-2">
                <Mic className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{t.cta.call}</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-red-900/30 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-3 sm:mb-4">MARCOS KENNEDY</h3>
              <p className="text-sm sm:text-base text-gray-300">The Ultimate Weeknd Experience</p>
              <p className="text-sm text-gray-400 mt-2">
                Authentic tribute performances worldwide
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">info@marcoskennedy.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">+31 6 XX XX XX XX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">Available Worldwide</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/marcoskennedy16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center hover:from-red-500 hover:to-red-400 transition-all transform hover:scale-110 cursor-pointer group"
                >
                  <Camera className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.tiktok.com/@marcos.twd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center hover:from-red-500 hover:to-red-400 transition-all transform hover:scale-110 cursor-pointer group"
                >
                  <Play className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
                <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center hover:from-red-500 hover:to-red-400 transition-all transform hover:scale-110 cursor-pointer group">
                  <Mic className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center hover:from-red-500 hover:to-red-400 transition-all transform hover:scale-110 cursor-pointer group">
                  <Heart className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-red-900/30 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 Marcos Kennedy - All rights reserved</p>
            <p className="text-sm text-gray-500 mt-2">Professional The Weeknd Tribute Artist | Worldwide Bookings</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
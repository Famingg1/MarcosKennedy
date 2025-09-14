import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-lg z-50 border-b border-red-900/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-red-500">
              MARCOS KENNEDY
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-red-500 transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-red-500 transition-colors">About</a>
              <a href="#services" className="text-white hover:text-red-500 transition-colors">Services</a>
              <a href="#gallery" className="text-white hover:text-red-500 transition-colors">Gallery</a>
            </div>
            <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 px-6 py-2 rounded-full transition-all transform hover:scale-105">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/10 to-black"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-red-600 rounded-full animate-pulse"></div>
          <div className="absolute top-2/5 right-1/5 w-0.5 h-0.5 bg-red-600 rounded-full animate-ping"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent animate-pulse">
              THE ULTIMATE
            </span>
            <br />
            <span className="text-red-500">WEEKND EXPERIENCE</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Professional The Weeknd tribute artist bringing authentic performances to events worldwide.
            Book Marcos Kennedy for an unforgettable experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(220,38,38,0.4)]">
              Book Performance
            </button>
            <button className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-4">Why Choose Marcos Kennedy?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the perfect blend of authenticity, professionalism, and entertainment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-gray-900 to-black border border-red-900/30 rounded-2xl p-8 text-center hover:border-red-500/50 transition-all hover:transform hover:scale-105">
              <div className="text-4xl mb-6">🎤</div>
              <h3 className="text-xl font-bold text-red-500 mb-4">Authentic Performance</h3>
              <p className="text-gray-300">Perfect vocal resemblance and stage presence that captures The Weeknd's essence</p>
            </div>

            <div className="bg-gradient-to-b from-gray-900 to-black border border-red-900/30 rounded-2xl p-8 text-center hover:border-red-500/50 transition-all hover:transform hover:scale-105">
              <div className="text-4xl mb-6">🎭</div>
              <h3 className="text-xl font-bold text-red-500 mb-4">Look-Alike Perfection</h3>
              <p className="text-gray-300">Striking visual similarity with authentic styling and choreography</p>
            </div>

            <div className="bg-gradient-to-b from-gray-900 to-black border border-red-900/30 rounded-2xl p-8 text-center hover:border-red-500/50 transition-all hover:transform hover:scale-105">
              <div className="text-4xl mb-6">⭐</div>
              <h3 className="text-xl font-bold text-red-500 mb-4">Professional Experience</h3>
              <p className="text-gray-300">Years of experience performing at high-profile events and venues</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-4">Our Services</h2>
            <p className="text-xl text-gray-300">Tailored performances for every occasion</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/50 border border-red-900/30 rounded-2xl p-6 hover:border-red-500/50 transition-all">
              <div className="text-3xl mb-4">🎵</div>
              <h3 className="text-xl font-bold text-red-500 mb-3">Live Performances</h3>
              <p className="text-gray-300 mb-4">Full tribute shows with The Weeknd's greatest hits</p>
              <div className="text-red-500 font-bold">From €1,500</div>
            </div>

            <div className="bg-black/50 border border-red-900/30 rounded-2xl p-6 hover:border-red-500/50 transition-all">
              <div className="text-3xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-red-500 mb-3">Private Events</h3>
              <p className="text-gray-300 mb-4">Weddings, parties, and corporate functions</p>
              <div className="text-red-500 font-bold">From €1,200</div>
            </div>

            <div className="bg-black/50 border border-red-900/30 rounded-2xl p-6 hover:border-red-500/50 transition-all">
              <div className="text-3xl mb-4">📸</div>
              <h3 className="text-xl font-bold text-red-500 mb-3">Meet & Greet</h3>
              <p className="text-gray-300 mb-4">Personal interactions and photo opportunities</p>
              <div className="text-red-500 font-bold">From €500</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-4">See Me Perform</h2>
            <p className="text-xl text-gray-300">Professional photos and videos from recent shows</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-gradient-to-br from-gray-800 to-red-900 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                <div className="w-full h-full flex items-center justify-center text-white/50">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📸</div>
                    <div className="text-sm">Performance {item}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-900/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your event and get a personalized quote
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
              Get Quote
            </button>
            <button className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
              Call: +31 6 XX XX XX XX
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-red-900/30 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-4">MARCOS KENNEDY</h3>
              <p className="text-gray-300">The Ultimate Weeknd Experience</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <p className="text-gray-300">Email: info@marcoskennedy.com</p>
              <p className="text-gray-300">Phone: +31 6 XX XX XX XX</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-400 transition-colors cursor-pointer">
                  📷
                </div>
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-400 transition-colors cursor-pointer">
                  📺
                </div>
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-400 transition-colors cursor-pointer">
                  🎵
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-red-900/30 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 Marcos Kennedy - All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
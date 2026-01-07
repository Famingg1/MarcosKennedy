import { Button } from '@/components/ui/button';
import heroImage from "@assets/Foto's en video's/optimized/IMG_8068.webp";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Marcos Kennedy Performance"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-destructive/20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-destructive rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-destructive rounded-full animate-ping delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent leading-tight">
          Marcos Kennedy
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 font-light">
          The Ultimate Weeknd Experience
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Professional tribute performances that capture the essence, sound, and energy of The Weeknd. 
          Available for events, venues, and private celebrations worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-destructive hover:from-primary/90 hover:to-destructive/90"
            data-testid="button-book-performance"
          >
            <i className="fas fa-star mr-3"></i>
            Book Performance
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('gallery')}
            className="text-lg px-8 py-4 border-2 border-primary bg-black/50 hover:bg-primary/10 backdrop-blur-sm"
            data-testid="button-view-gallery"
          >
            <i className="fas fa-play mr-3"></i>
            View Gallery
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-primary text-2xl"></i>
        </div>
      </div>
    </section>
  );
}
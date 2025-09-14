import { Card, CardContent } from '@/components/ui/card';
import aboutImage from '@assets/generated_images/Professional_headshot_portrait_44efe930.png';

export default function About() {
  // Todo: remove mock functionality - replace with real experience data
  const features = [
    {
      icon: 'fas fa-microphone',
      title: 'Authentic Performance',
      description: 'Precise vocal styling and stage presence that captures The Weeknd\'s signature sound'
    },
    {
      icon: 'fas fa-music',
      title: 'Full Repertoire',
      description: 'Complete catalog from House of Balloons to After Hours and beyond'
    },
    {
      icon: 'fas fa-users',
      title: 'Professional Experience',
      description: 'Performed at major venues and events across the country'
    },
    {
      icon: 'fas fa-award',
      title: 'Premium Quality',
      description: 'High-end production, costumes, and attention to detail'
    }
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About the Artist
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-destructive mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage}
                alt="Marcos Kennedy - The Weeknd Tribute Artist"
                className="w-full h-96 lg:h-[500px] object-cover"
                data-testid="img-about-photo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-destructive rounded-full opacity-80 blur-xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-4">
              The Ultimate Weeknd Experience
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed" data-testid="text-about-description">
              Marcos Kennedy brings an unparalleled tribute to The Weeknd, combining precise vocal 
              technique with authentic stage presence. With years of professional performance experience, 
              Marcos captures not just the sound, but the entire essence of The Weeknd's artistry.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              From intimate venue performances to large-scale events, every show delivers the same 
              level of professionalism and attention to detail that has made The Weeknd a global phenomenon. 
              The performance includes full costume design, lighting coordination, and a complete setlist 
              spanning The Weeknd's entire discography.
            </p>

            <div className="pt-4">
              <h4 className="text-xl font-semibold text-white mb-4">Performance Highlights:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center" data-testid="text-highlight-1">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Authentic vocal styling and range
                </li>
                <li className="flex items-center" data-testid="text-highlight-2">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Professional stage presence and choreography
                </li>
                <li className="flex items-center" data-testid="text-highlight-3">
                  <i className="fas fa-check text-primary mr-3"></i>
                  High-quality sound and lighting production
                </li>
                <li className="flex items-center" data-testid="text-highlight-4">
                  <i className="fas fa-check text-primary mr-3"></i>
                  Complete song catalog from all eras
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover-elevate" data-testid={`card-feature-${index}`}>
              <CardContent className="p-6">
                <div className="text-3xl text-primary mb-4">
                  <i className={feature.icon}></i>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm" data-testid={`text-feature-description-${index}`}>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
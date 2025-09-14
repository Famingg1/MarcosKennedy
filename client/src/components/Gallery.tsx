import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import heroImage from '@assets/generated_images/Hero_performance_photo_491c1e0f.png';
import concertImage from '@assets/generated_images/Concert_stage_performance_42515ff2.png';
import backstageImage from '@assets/generated_images/Behind_the_scenes_ff9f0668.png';
import aboutImage from '@assets/generated_images/Professional_headshot_portrait_44efe930.png';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Todo: remove mock functionality - replace with real gallery images
  const galleryImages = [
    {
      id: 1,
      src: heroImage,
      title: "Live Performance",
      category: "concert"
    },
    {
      id: 2,
      src: concertImage,
      title: "Stage Show",
      category: "concert"
    },
    {
      id: 3,
      src: aboutImage,
      title: "Professional Portrait",
      category: "portrait"
    },
    {
      id: 4,
      src: backstageImage,
      title: "Behind the Scenes",
      category: "backstage"
    },
    {
      id: 5,
      src: heroImage,
      title: "Event Performance",
      category: "concert"
    },
    {
      id: 6,
      src: concertImage,
      title: "Venue Show",
      category: "concert"
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Performance Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-destructive mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto" data-testid="text-gallery-description">
            Experience the energy and professionalism of Marcos Kennedy's Weeknd tribute performances 
            through these captured moments from venues and events.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image) => (
            <Card 
              key={image.id} 
              className="group overflow-hidden hover-elevate cursor-pointer"
              onClick={() => openLightbox(image.src)}
              data-testid={`gallery-item-${image.id}`}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg mb-2" data-testid={`text-image-title-${image.id}`}>
                      {image.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-primary text-sm capitalize">
                        <i className="fas fa-tag mr-1"></i>
                        {image.category}
                      </span>
                      <i className="fas fa-expand text-white text-lg"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Want to see more? Follow on social media for the latest performance updates.
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => console.log('Instagram clicked')}
              data-testid="button-instagram"
            >
              <i className="fab fa-instagram mr-2"></i>
              Instagram
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => console.log('YouTube clicked')}
              data-testid="button-youtube"
            >
              <i className="fab fa-youtube mr-2"></i>
              YouTube
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          data-testid="lightbox-overlay"
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain"
              data-testid="lightbox-image"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={closeLightbox}
              data-testid="button-close-lightbox"
            >
              <i className="fas fa-times text-2xl"></i>
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
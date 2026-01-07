import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Import optimized photos (WebP)
import img0210 from "@assets/Foto's en video's/optimized/IMG_0210.webp";
import img1415 from "@assets/Foto's en video's/optimized/IMG_1415.webp";
import img2210 from "@assets/Foto's en video's/optimized/IMG_2210.webp";
import img2211 from "@assets/Foto's en video's/optimized/IMG_2211.webp";
import img2607 from "@assets/Foto's en video's/optimized/IMG_2607.webp";
import img2608 from "@assets/Foto's en video's/optimized/IMG_2608.webp";
import img2762 from "@assets/Foto's en video's/optimized/IMG_2762.webp";
import img3112 from "@assets/Foto's en video's/optimized/IMG_3112.webp";
import img3118 from "@assets/Foto's en video's/optimized/IMG_3118.webp";
import img3125 from "@assets/Foto's en video's/optimized/IMG_3125.webp";
import img3127 from "@assets/Foto's en video's/optimized/IMG_3127.webp";
import img3130 from "@assets/Foto's en video's/optimized/IMG_3130.webp";
import img4028 from "@assets/Foto's en video's/optimized/IMG_4028.webp";
import img4148 from "@assets/Foto's en video's/optimized/IMG_4148.webp";
import img4541 from "@assets/Foto's en video's/optimized/IMG_4541.webp";
import img4583 from "@assets/Foto's en video's/optimized/IMG_4583.webp";
import img4598 from "@assets/Foto's en video's/optimized/IMG_4598.webp";
import img4613 from "@assets/Foto's en video's/optimized/IMG_4613.webp";
import img4615 from "@assets/Foto's en video's/optimized/IMG_4615.webp";
import img4892 from "@assets/Foto's en video's/optimized/IMG_4892.webp";
import img4893 from "@assets/Foto's en video's/optimized/IMG_4893.webp";
import img4936 from "@assets/Foto's en video's/optimized/IMG_4936.webp";
import img5114 from "@assets/Foto's en video's/optimized/IMG_5114.webp";
import img5115 from "@assets/Foto's en video's/optimized/IMG_5115.webp";
import img5117 from "@assets/Foto's en video's/optimized/IMG_5117.webp";
import img5429 from "@assets/Foto's en video's/optimized/IMG_5429.JPEG.webp";
import img8121 from "@assets/Foto's en video's/optimized/IMG_8121.webp";

// Import optimized videos (MP4)
import video2691 from "@assets/Foto's en video's/optimized/IMG_2691.mp4";
import video3401 from "@assets/Foto's en video's/optimized/IMG_3401.mp4";
import video3522 from "@assets/Foto's en video's/optimized/IMG_3522.mp4";
import video5030 from "@assets/Foto's en video's/optimized/IMG_5030.mp4";
import video8754 from "@assets/Foto's en video's/optimized/IMG_8754.mp4";
import video8755 from "@assets/Foto's en video's/optimized/IMG_8755.mp4";
import video8756 from "@assets/Foto's en video's/optimized/IMG_8756.mp4";
import video8757 from "@assets/Foto's en video's/optimized/IMG_8757.mp4";
import video9166 from "@assets/Foto's en video's/optimized/IMG_9166.mp4";

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState<{src: string, type: 'image' | 'video', title: string} | null>(null);
  const [showAll, setShowAll] = useState(false);

  const galleryItems = [
    { id: 1, src: video8754, type: 'video' as const, title: "Live Performance", category: "concert" },
    { id: 2, src: img0210, type: 'image' as const, title: "Stage Show", category: "concert" },
    { id: 3, src: video8755, type: 'video' as const, title: "Event Performance", category: "concert" },
    { id: 4, src: img4541, type: 'image' as const, title: "Professional Portrait", category: "portrait" },
    { id: 5, src: video8756, type: 'video' as const, title: "Venue Show", category: "concert" },
    { id: 6, src: img4028, type: 'image' as const, title: "Behind the Scenes", category: "backstage" },
    { id: 7, src: video8757, type: 'video' as const, title: "Concert Moment", category: "concert" },
    { id: 8, src: img4892, type: 'image' as const, title: "On Stage", category: "concert" },
    { id: 9, src: video2691, type: 'video' as const, title: "Performance Highlight", category: "concert" },
    { id: 10, src: img4936, type: 'image' as const, title: "Stage Presence", category: "concert" },
    { id: 11, src: video3401, type: 'video' as const, title: "Live Show", category: "concert" },
    { id: 12, src: img5114, type: 'image' as const, title: "Performing", category: "concert" },
    { id: 13, src: video3522, type: 'video' as const, title: "Stage Performance", category: "concert" },
    { id: 14, src: img5115, type: 'image' as const, title: "Concert Photo", category: "concert" },
    { id: 15, src: video5030, type: 'video' as const, title: "Event Highlight", category: "concert" },
    { id: 16, src: img5117, type: 'image' as const, title: "Performance Shot", category: "concert" },
    { id: 17, src: video9166, type: 'video' as const, title: "Show Moment", category: "concert" },
    { id: 18, src: img4583, type: 'image' as const, title: "Stage Energy", category: "concert" },
    { id: 19, src: img2210, type: 'image' as const, title: "Live Event", category: "concert" },
    { id: 20, src: img3118, type: 'image' as const, title: "Concert Vibes", category: "concert" },
    { id: 21, src: img4613, type: 'image' as const, title: "Performance", category: "concert" },
    { id: 22, src: img4893, type: 'image' as const, title: "Show Time", category: "concert" },
    { id: 23, src: img1415, type: 'image' as const, title: "Event Photo", category: "backstage" },
    { id: 24, src: img2607, type: 'image' as const, title: "Backstage", category: "backstage" },
    { id: 25, src: img3125, type: 'image' as const, title: "Prep Time", category: "backstage" },
    { id: 26, src: img4148, type: 'image' as const, title: "Getting Ready", category: "backstage" }
  ];

  const displayedItems = showAll ? galleryItems : galleryItems.slice(0, 6);

  const openLightbox = (item: {src: string, type: 'image' | 'video', title: string}) => {
    setSelectedMedia(item);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
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
          {displayedItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden hover-elevate cursor-pointer"
              onClick={() => openLightbox(item)}
              data-testid={`gallery-item-${item.id}`}
            >
              <div className="relative aspect-square overflow-hidden">
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="relative w-full h-full bg-gray-900">
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                      onError={(e) => {
                        console.error('Video failed to load:', item.src);
                        e.currentTarget.style.display = 'none';
                      }}
                      onLoadStart={(e) => {
                        e.currentTarget.style.opacity = '0.5';
                      }}
                      onLoadedData={(e) => {
                        e.currentTarget.style.opacity = '1';
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
                      <div className="bg-primary/90 rounded-full p-4 group-hover:scale-110 transition-transform shadow-lg">
                        <i className="fas fa-play text-white text-2xl ml-1"></i>
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg mb-2" data-testid={`text-image-title-${item.id}`}>
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-primary text-sm capitalize">
                        <i className={`fas ${item.type === 'video' ? 'fa-video' : 'fa-tag'} mr-1`}></i>
                        {item.category}
                      </span>
                      <i className="fas fa-expand text-white text-lg"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View Full Gallery Button */}
        {!showAll && galleryItems.length > 6 && (
          <div className="text-center mb-12">
            <Button
              size="lg"
              onClick={() => setShowAll(true)}
              className="bg-gradient-to-r from-primary to-destructive hover:from-primary/90 hover:to-destructive/90"
              data-testid="button-view-full-gallery"
            >
              <i className="fas fa-images mr-2"></i>
              View Full Gallery ({galleryItems.length} items)
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Want to see more? Follow on social media for the latest performance updates.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://www.instagram.com/marcoskennedy16', '_blank')}
              data-testid="button-instagram"
            >
              <i className="fab fa-instagram mr-2"></i>
              Instagram
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://www.tiktok.com/@marcos.twd', '_blank')}
              data-testid="button-tiktok"
            >
              <i className="fab fa-tiktok mr-2"></i>
              TikTok
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          data-testid="lightbox-overlay"
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.title}
                className="max-w-full max-h-[90vh] object-contain mx-auto"
                data-testid="lightbox-image"
                onClick={(e) => e.stopPropagation()}
                loading="eager"
                decoding="async"
              />
            ) : (
              <video
                key={selectedMedia.src}
                src={selectedMedia.src}
                controls
                autoPlay
                preload="auto"
                playsInline
                className="max-w-full max-h-[90vh] object-contain mx-auto bg-black"
                data-testid="lightbox-video"
                onClick={(e) => e.stopPropagation()}
                onError={(e) => {
                  console.error('Modal video failed to load:', selectedMedia.src);
                  e.currentTarget.poster = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23111" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23ef4444" font-family="sans-serif" font-size="18"%3EVideo could not be loaded%3C/text%3E%3C/svg%3E';
                }}
              />
            )}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold bg-black/50 px-6 py-2 rounded-full">
              {selectedMedia.title}
            </div>
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
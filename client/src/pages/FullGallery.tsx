import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';

// Import all photos and videos
import img0210 from "@assets/Foto's en video's/IMG_0210.JPG";
import img1415 from "@assets/Foto's en video's/IMG_1415.PNG";
import img2210 from "@assets/Foto's en video's/IMG_2210.JPG";
import img2211 from "@assets/Foto's en video's/IMG_2211.JPG";
import img2607 from "@assets/Foto's en video's/IMG_2607.JPG";
import img2608 from "@assets/Foto's en video's/IMG_2608.JPG";
import img2762 from "@assets/Foto's en video's/IMG_2762.JPG";
import img3112 from "@assets/Foto's en video's/IMG_3112.JPG";
import img3118 from "@assets/Foto's en video's/IMG_3118.JPG";
import img3125 from "@assets/Foto's en video's/IMG_3125.JPG";
import img3127 from "@assets/Foto's en video's/IMG_3127.JPG";
import img3130 from "@assets/Foto's en video's/IMG_3130.JPG";
import img4028 from "@assets/Foto's en video's/IMG_4028.JPG";
import img4148 from "@assets/Foto's en video's/IMG_4148.JPG";
import img4541 from "@assets/Foto's en video's/IMG_4541.JPG";
import img4583 from "@assets/Foto's en video's/IMG_4583.JPG";
import img4598 from "@assets/Foto's en video's/IMG_4598.JPG";
import img4613 from "@assets/Foto's en video's/IMG_4613.JPG";
import img4615 from "@assets/Foto's en video's/IMG_4615.JPG";
import img4892 from "@assets/Foto's en video's/IMG_4892.JPG";
import img4893 from "@assets/Foto's en video's/IMG_4893.PNG";
import img4936 from "@assets/Foto's en video's/IMG_4936.JPG";
import img5114 from "@assets/Foto's en video's/IMG_5114.JPG";
import img5115 from "@assets/Foto's en video's/IMG_5115.JPG";
import img5117 from "@assets/Foto's en video's/IMG_5117.JPG";
import img5429 from "@assets/Foto's en video's/IMG_5429.JPEG.jpg";
import img8121 from "@assets/Foto's en video's/IMG_8121.JPG";
import video2691 from "@assets/Foto's en video's/IMG_2691.MOV";
import video3401 from "@assets/Foto's en video's/IMG_3401.MOV";
import video3522 from "@assets/Foto's en video's/IMG_3522.MOV";
import video5030 from "@assets/Foto's en video's/IMG_5030.MOV";
import video8754 from "@assets/Foto's en video's/IMG_8754.MOV";
import video8755 from "@assets/Foto's en video's/IMG_8755.MOV";
import video8756 from "@assets/Foto's en video's/IMG_8756.MOV";
import video8757 from "@assets/Foto's en video's/IMG_8757.MOV";
import video9166 from "@assets/Foto's en video's/IMG_9166.MOV";

const translations = {
  en: {
    title: "Full Gallery",
    subtitle: "All photos and videos from performances and events",
    items: "items"
  },
  nl: {
    title: "Volledige Galerij",
    subtitle: "Alle foto's en video's van optredens en evenementen",
    items: "items"
  },
  pt: {
    title: "Galeria Completa",
    subtitle: "Todas as fotos e vídeos de apresentações e eventos",
    items: "itens"
  }
};

export default function FullGallery() {
  const [, navigate] = useLocation();
  const { currentLang } = useLanguage();
  const [selectedMedia, setSelectedMedia] = useState<{src: string, type: 'image' | 'video', title: string} | null>(null);

  const t = translations[currentLang as keyof typeof translations];

  // Scroll to top when component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allGalleryItems = [
    { src: video8754, type: 'video' as const, title: 'Live Concert' },
    { src: img0210, type: 'image' as const, title: 'Stage Performance' },
    { src: video8755, type: 'video' as const, title: 'Event Highlight' },
    { src: img4541, type: 'image' as const, title: 'Professional Portrait' },
    { src: video8756, type: 'video' as const, title: 'Performance Video' },
    { src: img4028, type: 'image' as const, title: 'Behind the Scenes' },
    { src: video8757, type: 'video' as const, title: 'Concert Moment' },
    { src: img4892, type: 'image' as const, title: 'On Stage' },
    { src: video2691, type: 'video' as const, title: 'Live Show' },
    { src: img4936, type: 'image' as const, title: 'Stage Presence' },
    { src: video3401, type: 'video' as const, title: 'Event Performance' },
    { src: img5114, type: 'image' as const, title: 'Performing Live' },
    { src: video3522, type: 'video' as const, title: 'Stage Action' },
    { src: img5115, type: 'image' as const, title: 'Concert Photo' },
    { src: video5030, type: 'video' as const, title: 'Show Highlight' },
    { src: img5117, type: 'image' as const, title: 'Performance Shot' },
    { src: video9166, type: 'video' as const, title: 'Live Moment' },
    { src: img4583, type: 'image' as const, title: 'Stage Energy' },
    { src: img2210, type: 'image' as const, title: 'Live Event' },
    { src: img2211, type: 'image' as const, title: 'Performance' },
    { src: img3118, type: 'image' as const, title: 'Concert Vibes' },
    { src: img3127, type: 'image' as const, title: 'On Stage' },
    { src: img3130, type: 'image' as const, title: 'Show Time' },
    { src: img4613, type: 'image' as const, title: 'Stage Moment' },
    { src: img4615, type: 'image' as const, title: 'Live Performance' },
    { src: img4893, type: 'image' as const, title: 'Concert Night' },
    { src: img4598, type: 'image' as const, title: 'Performing' },
    { src: img1415, type: 'image' as const, title: 'Event Photo' },
    { src: img2607, type: 'image' as const, title: 'Backstage' },
    { src: img2608, type: 'image' as const, title: 'Behind Scenes' },
    { src: img2762, type: 'image' as const, title: 'Preparation' },
    { src: img3112, type: 'image' as const, title: 'Getting Ready' },
    { src: img3125, type: 'image' as const, title: 'Backstage Moment' },
    { src: img4148, type: 'image' as const, title: 'Pre-Show' },
    { src: img5429, type: 'image' as const, title: 'Portrait' },
    { src: img8121, type: 'image' as const, title: 'Photo Shoot' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-black/95 backdrop-blur-lg border-b border-red-900/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="text-white hover:text-red-500 transition-colors flex items-center space-x-2"
            >
              <span className="text-2xl">←</span>
              <span className="text-xl font-bold">MARCOS KENNEDY</span>
            </button>
            <div className="text-gray-400">
              {allGalleryItems.length} {t.items}
            </div>
          </div>
        </div>
      </div>

      {/* Full Gallery Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-500 mb-4">
              {t.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              {t.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {allGalleryItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedMedia(item)}
                className="aspect-square rounded-xl overflow-hidden hover:scale-105 transition-all cursor-pointer group relative"
              >
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
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
                      <div className="w-16 h-16 bg-red-500/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="text-sm font-medium text-white">{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.title}
                className="max-w-full max-h-[90vh] object-contain mx-auto"
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
                onClick={(e) => e.stopPropagation()}
                onError={(e) => {
                  console.error('Modal video failed to load:', selectedMedia.src);
                  e.currentTarget.poster = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23111" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23ef4444" font-family="sans-serif" font-size="18"%3EVideo kon niet worden geladen%3C/text%3E%3C/svg%3E';
                }}
              />
            )}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold bg-black/50 px-6 py-2 rounded-full">
              {selectedMedia.title}
            </div>
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
            >
              <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-red-500/20">
                <span className="text-2xl">&times;</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

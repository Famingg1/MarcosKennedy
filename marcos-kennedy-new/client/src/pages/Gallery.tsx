import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const images = [
  { src: '/images/IMG_4541.webp', alt: 'Red suit performance', category: 'performance' },
  { src: '/images/IMG_5114.webp', alt: 'Black and white portrait', category: 'portrait' },
  { src: '/images/IMG_4148.webp', alt: 'TV appearance with award', category: 'event' },
  { src: '/images/IMG_3118.webp', alt: 'Crowd interaction', category: 'performance' },
  { src: '/images/IMG_4892.webp', alt: 'Stage performance', category: 'performance' },
  { src: '/images/IMG_4613.webp', alt: 'Live concert', category: 'performance' },
  { src: '/images/IMG_8068.webp', alt: 'Professional shot', category: 'portrait' },
  { src: '/images/IMG_3127.webp', alt: 'Event photo', category: 'event' },
  { src: '/images/IMG_4598.webp', alt: 'Performance shot', category: 'performance' },
  { src: '/images/IMG_5115.webp', alt: 'Portrait', category: 'portrait' },
  { src: '/images/IMG_5117.webp', alt: 'Performance', category: 'performance' },
  { src: '/images/IMG_4583.webp', alt: 'Stage shot', category: 'performance' },
  { src: '/images/IMG_2210.webp', alt: 'Event', category: 'event' },
  { src: '/images/IMG_4615.webp', alt: 'Concert', category: 'performance' },
  { src: '/images/IMG_4936.webp', alt: 'Portrait shot', category: 'portrait' },
  { src: '/images/IMG_3125.webp', alt: 'Live show', category: 'performance' },
  { src: '/images/IMG_0210.webp', alt: 'Performance', category: 'performance' },
  { src: '/images/IMG_3130.webp', alt: 'Event photo', category: 'event' },
]

export default function Gallery() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [videoLightboxOpen, setVideoLightboxOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState<{ src: string; thumbnail: string; titleKey: keyof typeof t.galleryPage.videoTitles } | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const videos = [
    { src: '/videos/IMG_3522.mp4', thumbnail: '/images/IMG_4541.webp', titleKey: 'liveHighlight' as const },
    { src: '/videos/IMG_2691.mp4', thumbnail: '/images/IMG_4892.webp', titleKey: 'concertFootage' as const },
    { src: '/videos/IMG_8754.mp4', thumbnail: '/images/IMG_3118.webp', titleKey: 'showRecap' as const },
    { src: '/videos/IMG_5030.mp4', thumbnail: '/images/IMG_4613.webp', titleKey: 'stagePerformance' as const },
    { src: '/videos/IMG_3401.mp4', thumbnail: '/images/IMG_8068.webp', titleKey: 'behindScenes' as const },
    { src: '/videos/IMG_8755.mp4', thumbnail: '/images/IMG_3127.webp', titleKey: 'fanMoments' as const },
    { src: '/videos/IMG_8756.mp4', thumbnail: '/images/IMG_4598.webp', titleKey: 'liveShowMoments' as const },
    { src: '/videos/IMG_8757.mp4', thumbnail: '/images/IMG_5114.webp', titleKey: 'performanceHighlights' as const },
    { src: '/videos/IMG_9166.mp4', thumbnail: '/images/IMG_4936.webp', titleKey: 'eventFootage' as const },
  ]

  const categories = [
    { id: 'all', nameKey: 'all' as const },
    { id: 'performance', nameKey: 'performance' as const },
    { id: 'portrait', nameKey: 'portrait' as const },
    { id: 'event', nameKey: 'event' as const },
  ]

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter((img) => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }

  const openVideoLightbox = (video: typeof videos[0]) => {
    setCurrentVideo(video)
    setVideoLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeVideoLightbox = () => {
    setVideoLightboxOpen(false)
    setCurrentVideo(null)
    document.body.style.overflow = 'auto'
  }

  // Auto-play video when lightbox opens
  useEffect(() => {
    if (videoLightboxOpen && videoRef.current) {
      videoRef.current.play()
    }
  }, [videoLightboxOpen, currentVideo])

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A] via-[#111827] to-[#0A0F1A]" />
        <div className="ambient-orb ambient-orb-red w-[400px] h-[400px] -top-20 right-1/4 opacity-30" />
        <div className="ambient-orb ambient-orb-blue w-[500px] h-[500px] top-1/2 -left-40 opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-brand-primary font-medium mb-4 block">{t.galleryPage.heroLabel}</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-gradient">{t.galleryPage.heroTitle}</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              {t.galleryPage.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="relative py-8 sticky top-[72px] z-40">
        <div className="absolute inset-0 bg-[#0A0F1A]/95 backdrop-blur-xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-brand-primary text-white shadow-lg'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
                style={{
                  boxShadow: selectedCategory === cat.id ? '0 4px 20px rgba(225, 29, 72, 0.3)' : 'none'
                }}
              >
                {t.galleryPage.categories[cat.nameKey]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="relative py-16 overflow-hidden section-vivid-1">
        <div className="ambient-orb ambient-orb-blue w-[400px] h-[400px] top-1/4 -left-20 opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-brand-primary rounded-full" />
            <span className="text-gradient">{t.galleryPage.photos}</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group image-hover"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">{image.alt}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="relative py-16 overflow-hidden section-vivid-2">
        <div className="ambient-orb ambient-orb-red w-[400px] h-[400px] top-0 right-1/4 opacity-20" />
        <div className="ambient-orb ambient-orb-blue w-[350px] h-[350px] bottom-0 left-1/3 opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-brand-primary rounded-full" />
            <span className="text-gradient">{t.galleryPage.videos}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <motion.div
                key={video.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative aspect-video overflow-hidden rounded-2xl group cursor-pointer"
                onClick={() => openVideoLightbox(video)}
              >
                {/* Thumbnail */}
                <img
                  src={video.thumbnail}
                  alt={t.galleryPage.videoTitles[video.titleKey]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center">
                  {/* Play Button */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-primary flex items-center justify-center group-hover:scale-110 transition-all shadow-lg"
                    style={{ boxShadow: '0 4px 30px rgba(225, 29, 72, 0.5)' }}
                  >
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="white" />
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-white font-medium text-sm md:text-base">{t.galleryPage.videoTitles[video.titleKey]}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 via-rose-600/85 to-brand-primary/90" />
        <div className="absolute inset-0 bg-[url('/images/IMG_3118.webp')] bg-cover bg-center opacity-20 mix-blend-overlay" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.galleryPage.cta.title}
            </h2>
            <p className="text-white/90 text-lg max-w-xl mx-auto mb-8">
              {t.galleryPage.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/marcoskennedy16"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-primary font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2 hover:scale-105 shadow-xl"
              >
                {t.galleryPage.cta.instagram}
              </a>
              <a
                href="https://www.tiktok.com/@marcos.twd"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
              >
                {t.galleryPage.cta.tiktok}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0F1A]/98 flex items-center justify-center backdrop-blur-xl"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-50 bg-white/10 rounded-full hover:bg-white/20 transition-all"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 text-white/80 hover:text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"
            >
              <ChevronLeft size={48} />
            </button>

            <motion.img
              key={filteredImages[currentIndex].src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={filteredImages[currentIndex].src}
              alt={filteredImages[currentIndex].alt}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white/80 hover:text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"
            >
              <ChevronRight size={48} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Lightbox - Portrait Format */}
      <AnimatePresence>
        {videoLightboxOpen && currentVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-xl"
            onClick={closeVideoLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeVideoLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-50 bg-white/10 rounded-full hover:bg-white/20 transition-all"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative h-[90vh] max-h-[900px] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Title at top */}
              <div className="mb-4 px-6 py-2 bg-[#1a1a1a]/90 rounded-full backdrop-blur-sm">
                <h3 className="text-white text-lg font-medium">{t.galleryPage.videoTitles[currentVideo.titleKey]}</h3>
              </div>

              {/* Video in portrait format */}
              <div className="relative h-full aspect-[9/16] max-w-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <video
                  ref={videoRef}
                  src={currentVideo.src}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  playsInline
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Play, Calendar, Users, Globe, Award, Mic2, PartyPopper, Camera, ArrowRight, Star } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const galleryImages = [
  { src: '/images/IMG_4541.webp', alt: 'Live performance' },
  { src: '/images/IMG_5114.webp', alt: 'Portrait' },
  { src: '/images/IMG_4148.webp', alt: 'TV appearance' },
  { src: '/images/IMG_3118.webp', alt: 'Crowd interaction' },
  { src: '/images/IMG_4892.webp', alt: 'Stage performance' },
  { src: '/images/IMG_4613.webp', alt: 'Concert' },
]

export default function Home() {
  const { t, language } = useLanguage()

  const stats = [
    { icon: Users, value: '1M+', label: t.stats.followers },
    { icon: Mic2, value: '500+', label: t.stats.shows },
    { icon: Calendar, value: '5+', label: t.stats.experience },
    { icon: Globe, value: '15+', label: t.stats.countries },
  ]

  const services = [
    {
      icon: Mic2,
      title: t.services.live.title,
      description: t.services.live.description,
    },
    {
      icon: PartyPopper,
      title: t.services.private.title,
      description: t.services.private.description,
    },
    {
      icon: Camera,
      title: t.services.meet.title,
      description: t.services.meet.description,
    },
  ]

  const testimonials = language === 'nl' ? [
    {
      text: 'Marcos was de ster van ons bedrijfsfeest. Iedereen dacht dat The Weeknd zelf was gekomen!',
      author: 'Sarah M.',
      role: 'Event Manager',
    },
    {
      text: 'Ongelooflijke performance op onze bruiloft. De gasten waren helemaal in shock!',
      author: 'Michael & Lisa',
      role: 'Bruidspaar',
    },
    {
      text: 'Professioneel, vriendelijk en een geweldige show. Zeker een aanrader voor elk evenement.',
      author: 'David K.',
      role: 'Festival Organisator',
    },
  ] : language === 'pt' ? [
    {
      text: 'Marcos foi a estrela da nossa festa corporativa. Todos pensaram que o The Weeknd tinha vindo!',
      author: 'Sarah M.',
      role: 'Gerente de Eventos',
    },
    {
      text: 'Performance incrivel no nosso casamento. Os convidados ficaram em choque!',
      author: 'Michael & Lisa',
      role: 'Noivos',
    },
    {
      text: 'Profissional, simpatico e um show fantastico. Recomendo para qualquer evento.',
      author: 'David K.',
      role: 'Organizador de Festival',
    },
  ] : [
    {
      text: 'Marcos was the star of our corporate party. Everyone thought The Weeknd himself had come!',
      author: 'Sarah M.',
      role: 'Event Manager',
    },
    {
      text: 'Incredible performance at our wedding. The guests were completely in shock!',
      author: 'Michael & Lisa',
      role: 'Newlyweds',
    },
    {
      text: 'Professional, friendly and an amazing show. Highly recommend for any event.',
      author: 'David K.',
      role: 'Festival Organizer',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/IMG_8068.webp"
            alt="Marcos Kennedy performing"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A]/70 via-[#0A0F1A]/50 to-[#0A0F1A]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/20 via-transparent to-transparent" />
        </div>

        {/* Subtle ambient lighting */}
        <div className="ambient-orb ambient-orb-blue w-[600px] h-[600px] -top-40 -left-40" />
        <div className="ambient-orb ambient-orb-red w-[400px] h-[400px] bottom-20 right-10 opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-sm font-medium mb-6">
              {t.hero.badge}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="text-white">{t.hero.title1} </span>
              <span className="text-gradient">{t.hero.titleHighlight1}</span>
              <br />
              <span className="text-white">{t.hero.title2} </span>
              <span className="text-white">{t.hero.titleHighlight2}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                <Calendar size={20} />
                <span>{t.hero.cta}</span>
              </Link>
              <Link to="/galerij" className="btn-secondary inline-flex items-center justify-center gap-2">
                <Play size={20} />
                <span>{t.hero.ctaSecondary}</span>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0F1A] to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="relative py-24 overflow-hidden section-vivid-1">
        <div className="ambient-orb ambient-orb-blue w-[400px] h-[400px] top-0 left-1/4 opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="stat-card group hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-brand-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="relative py-24 overflow-hidden section-vivid-2">
        <div className="ambient-orb ambient-orb-red w-[500px] h-[500px] top-1/4 -right-40 opacity-20" />
        <div className="ambient-orb ambient-orb-blue w-[400px] h-[400px] bottom-0 -left-20 opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src="/images/IMG_5114.webp"
                  alt="Marcos Kennedy"
                  className="rounded-3xl shadow-2xl image-hover"
                />
                <div className="absolute -bottom-6 -right-6 bg-brand-primary rounded-2xl p-6 shadow-xl">
                  <Award className="w-8 h-8 text-white mb-2" />
                  <div className="text-white font-bold">500+</div>
                  <div className="text-white/80 text-sm">{t.stats.shows}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-primary font-medium mb-4 block">{t.about.label}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t.about.title} <span className="text-gradient">{t.about.titleHighlight}</span>
              </h2>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                {t.about.paragraph1}
              </p>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                {t.about.paragraph2}
              </p>
              <Link
                to="/over-mij"
                className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-4 transition-all group"
              >
                <span>{t.about.readMore}</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 overflow-hidden section-vivid-3">
        <div className="ambient-orb ambient-orb-blue w-[500px] h-[500px] top-0 left-1/3 opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-primary font-medium mb-4 block">Services</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t.services.title} <span className="text-gradient">{t.services.titleHighlight}</span>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                {t.services.subtitle}
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="relative py-24 overflow-hidden section-vivid-1">
        <div className="ambient-orb ambient-orb-blue w-[400px] h-[400px] top-1/4 -left-20 opacity-20" />
        <div className="ambient-orb ambient-orb-red w-[350px] h-[350px] bottom-1/4 -right-10 opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-primary font-medium mb-4 block">{t.gallery.label}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t.gallery.title} <span className="text-gradient">{t.gallery.titleHighlight}</span>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                {t.gallery.subtitle}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer image-hover"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/galerij" className="btn-secondary inline-flex items-center gap-2">
              <span>{t.gallery.viewAll}</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 overflow-hidden section-vivid-2">
        <div className="ambient-orb ambient-orb-blue w-[500px] h-[500px] top-0 right-1/4 opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-primary font-medium mb-4 block">{t.testimonials.label}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t.testimonials.title} <span className="text-gradient">{t.testimonials.titleHighlight}</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-primary text-brand-primary" />
                  ))}
                </div>
                <p className="text-white/80 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-white/50 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background */}
            <div className="absolute inset-0">
              <img
                src="/images/IMG_3118.webp"
                alt="Crowd"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 via-rose-600/85 to-brand-primary/90" />
            </div>

            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t.cta.title}
                </h2>
                <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
                  {t.cta.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-white text-brand-primary font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2 hover:scale-105 shadow-xl"
                  >
                    <Calendar size={20} />
                    <span>{t.cta.button}</span>
                  </Link>
                  <a
                    href="tel:+31614871373"
                    className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
                  >
                    <span>{t.cta.call}</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

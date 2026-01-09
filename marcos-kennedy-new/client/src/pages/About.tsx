import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Users, Mic2, Calendar, Globe, Award, Star, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  const stats = [
    { icon: Users, value: '1M+', labelKey: 'followers' as const },
    { icon: Mic2, value: '500+', labelKey: 'shows' as const },
    { icon: Calendar, value: '5+', labelKey: 'years' as const },
    { icon: Globe, value: '15+', labelKey: 'countries' as const },
  ]

  const timelineYears = ['2019', '2020', '2021', '2022', '2023', '2024'] as const

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A] via-[#111827] to-[#0A0F1A]" />
        <div className="ambient-orb ambient-orb-red w-[500px] h-[500px] top-1/4 left-1/4 opacity-25" />
        <div className="ambient-orb ambient-orb-blue w-[400px] h-[400px] bottom-0 right-1/4 opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-brand-primary font-medium mb-4 block">{t.aboutPage.heroLabel}</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Marcos Kennedy
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              {t.aboutPage.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="relative py-24 overflow-hidden section-vivid-1">
        <div className="ambient-orb ambient-orb-blue w-[400px] h-[400px] top-0 right-0 opacity-20" />
        <div className="ambient-orb ambient-orb-red w-[350px] h-[350px] bottom-1/3 left-0 opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="/images/IMG_4148.webp"
                  alt="Marcos Kennedy"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 glass-card p-6 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-primary text-brand-primary" />
                    ))}
                  </div>
                  <span className="text-white font-medium">500+ {t.aboutPage.successfulShows}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                {t.aboutPage.mainTitle} <span className="text-gradient">{t.aboutPage.mainTitleHighlight}</span>
              </h2>
              <div className="space-y-4 text-white/70 text-lg leading-relaxed">
                <p>{t.aboutPage.paragraph1}</p>
                <p>{t.aboutPage.paragraph2}</p>
                <p>{t.aboutPage.paragraph3}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 overflow-hidden section-vivid-2">
        <div className="ambient-orb ambient-orb-red w-[400px] h-[400px] top-1/2 left-1/4 opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.labelKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-brand-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/60">{t.aboutPage.stats[stat.labelKey]}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="relative py-24 overflow-hidden section-vivid-1">
        <div className="ambient-orb ambient-orb-blue w-[500px] h-[500px] bottom-0 left-0 opacity-15" />
        <div className="ambient-orb ambient-orb-red w-[350px] h-[350px] top-1/4 right-0 opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                {t.aboutPage.highlightsTitle} <span className="text-gradient">{t.aboutPage.highlightsTitleHighlight}</span>
              </h2>
              <div className="space-y-4">
                {t.aboutPage.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/IMG_3118.webp"
                alt="Marcos with fans"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-24 overflow-hidden section-vivid-2">
        <div className="ambient-orb ambient-orb-red w-[400px] h-[400px] top-1/3 left-0 opacity-15" />
        <div className="ambient-orb ambient-orb-blue w-[350px] h-[350px] bottom-1/4 right-0 opacity-20" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-primary font-medium mb-4 block">{t.aboutPage.timelineLabel}</span>
              <h2 className="text-4xl font-bold text-white">
                {t.aboutPage.timelineTitle} <span className="text-gradient">{t.aboutPage.timelineTitleHighlight}</span>
              </h2>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-primary/30" />

            {timelineYears.map((year, index) => {
              const item = t.aboutPage.timeline[year]
              if (!item) return null

              return (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-20 md:pl-0`}>
                    <span className="text-brand-primary font-bold text-lg">{year === '2024' ? '2024+' : year}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                    <p className="text-white/60 mt-2">{item.description}</p>
                  </div>

                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-brand-primary -translate-x-1/2 ring-4 ring-[#0A0F1A]" />

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 via-rose-600/85 to-brand-primary/90" />
        <div className="ambient-orb ambient-orb-blue w-[500px] h-[500px] top-0 left-1/4 opacity-20" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {t.aboutPage.ctaTitle}
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              {t.aboutPage.ctaSubtitle}
            </p>
            <Link
              to="/contact"
              className="bg-white text-brand-primary font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-all inline-flex items-center gap-2 hover:scale-105 shadow-xl"
            >
              <span>{t.aboutPage.ctaButton}</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

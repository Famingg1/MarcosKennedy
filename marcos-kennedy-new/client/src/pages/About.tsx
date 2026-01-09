import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Users, Mic2, Calendar, Globe, Award, Star, ArrowRight, CheckCircle2 } from 'lucide-react'

const stats = [
  { icon: Users, value: '1M+', label: 'Social media volgers' },
  { icon: Mic2, value: '500+', label: 'Succesvolle shows' },
  { icon: Calendar, value: '5+', label: 'Jaar actief' },
  { icon: Globe, value: '15+', label: 'Landen bezocht' },
]

const highlights = [
  'Opgetreden op internationale festivals en grote venues',
  'Verschenen op Braziliaanse nationale televisie',
  'Gewonnen prijzen als beste tribute artiest',
  'Samengewerkt met bekende eventorganisatoren',
  'Opgebouwd publiek van meer dan 1 miljoen volgers',
  'Uitgevoerd voor bedrijven, bruiloften en privéfeesten',
]

const timeline = [
  {
    year: '2019',
    title: 'Het begin',
    description: 'Eerste optredens als The Weeknd tribute artiest in lokale clubs en evenementen.',
  },
  {
    year: '2020',
    title: 'Online groei',
    description: 'Explosieve groei op sociale media met virale video\'s die miljoenen views behaalden.',
  },
  {
    year: '2021',
    title: 'Internationale doorbraak',
    description: 'Eerste internationale boekingen en optredens in meerdere Europese landen.',
  },
  {
    year: '2022',
    title: 'TV-optredens',
    description: 'Verschenen op nationale televisie in Brazilië en andere grote mediaplatforms.',
  },
  {
    year: '2023',
    title: 'Wereldwijde erkenning',
    description: 'Erkend als een van de beste The Weeknd tribute artiesten ter wereld.',
  },
  {
    year: '2024+',
    title: 'Blijven groeien',
    description: 'Continu nieuwe shows, samenwerkingen en steeds grotere events.',
  },
]

export default function About() {
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
            <span className="text-brand-primary font-medium mb-4 block">Over mij</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Marcos Kennedy
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              De meest authentieke The Weeknd tribute ervaring ter wereld.
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
                  <span className="text-white font-medium">500+ succesvolle shows</span>
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
                De ultieme <span className="text-gradient">The Weeknd ervaring</span>
              </h2>
              <div className="space-y-4 text-white/70 text-lg leading-relaxed">
                <p>
                  Marcos Kennedy is de meest authentieke The Weeknd tribute artiest ter wereld.
                  Met zijn opvallende gelijkenis, perfecte vocalen en authentieke podiumaanwezigheid
                  brengt hij de magie van The Weeknd tot leven op elk evenement.
                </p>
                <p>
                  Wat begon als een passie voor de muziek van The Weeknd is uitgegroeid tot een
                  internationale carrière met optredens in meer dan 15 landen. Van intieme privéfeesten
                  tot grote festivals en TV-shows - Marcos levert altijd een onvergetelijke ervaring.
                </p>
                <p>
                  Met meer dan 1 miljoen volgers op sociale media en honderden succesvolle shows
                  achter zijn naam, is Marcos Kennedy de eerste keuze voor organisatoren die op
                  zoek zijn naar de ultieme The Weeknd tribute.
                </p>
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
                key={stat.label}
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
                <div className="text-white/60">{stat.label}</div>
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
                Highlights & <span className="text-gradient">prestaties</span>
              </h2>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
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
              <span className="text-brand-primary font-medium mb-4 block">Mijn reis</span>
              <h2 className="text-4xl font-bold text-white">
                De <span className="text-gradient">tijdlijn</span>
              </h2>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-primary/30" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-20 md:pl-0`}>
                  <span className="text-brand-primary font-bold text-lg">{item.year}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                  <p className="text-white/60 mt-2">{item.description}</p>
                </div>

                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-brand-primary -translate-x-1/2 ring-4 ring-[#0A0F1A]" />

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
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
              Boek Marcos voor jouw evenement
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Klaar om de ultieme The Weeknd ervaring naar jouw evenement te brengen?
              Neem vandaag contact op voor een vrijblijvende offerte.
            </p>
            <Link
              to="/contact"
              className="bg-white text-brand-primary font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-all inline-flex items-center gap-2 hover:scale-105 shadow-xl"
            >
              <span>Neem contact op</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

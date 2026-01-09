import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Music2, Send, CheckCircle, Calendar, Users, Clock, Loader2 } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const socialLinks = [
  {
    icon: Instagram,
    name: 'Instagram',
    handle: '@marcoskennedy16',
    href: 'https://www.instagram.com/marcoskennedy16',
  },
  {
    icon: Music2,
    name: 'TikTok',
    handle: '@marcos.twd',
    href: 'https://www.tiktok.com/@marcos.twd',
  },
]

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.info.email,
      value: 'info@marcoskennedy.com',
      href: 'mailto:info@marcoskennedy.com',
    },
    {
      icon: Phone,
      label: t.contact.info.phone,
      value: '+31 6 14871373',
      href: 'tel:+31614871373',
    },
    {
      icon: MapPin,
      label: t.contact.info.location,
      value: t.contact.info.worldwide,
      href: null,
    },
  ]

  const eventTypes = [
    { key: 'corporate', label: t.contact.eventTypes.corporate },
    { key: 'wedding', label: t.contact.eventTypes.wedding },
    { key: 'private', label: t.contact.eventTypes.private },
    { key: 'festival', label: t.contact.eventTypes.festival },
    { key: 'club', label: t.contact.eventTypes.club },
    { key: 'media', label: t.contact.eventTypes.media },
    { key: 'other', label: t.contact.eventTypes.other },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formDataToSend = new FormData(e.target as HTMLFormElement)
    formDataToSend.append('access_key', '8f4ae245-4489-4e5f-8482-a577392c1614')
    formDataToSend.append('subject', 'New Booking Inquiry - Marcos Kennedy')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          guestCount: '',
          message: '',
        })
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A] via-[#111827] to-[#0A0F1A]" />
        <div className="ambient-orb ambient-orb-red w-[500px] h-[500px] top-1/4 left-1/4 opacity-20" />
        <div className="ambient-orb ambient-orb-blue w-[400px] h-[400px] bottom-0 right-1/3 opacity-25" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-brand-primary font-medium mb-4 block">{t.contact.label}</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t.contact.title}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 overflow-hidden section-vivid-1">
        <div className="ambient-orb ambient-orb-blue w-[400px] h-[400px] top-0 right-0 opacity-20" />
        <div className="ambient-orb ambient-orb-red w-[350px] h-[350px] bottom-1/3 left-0 opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                {t.contact.info.title}
              </h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <div className="text-white/50 text-sm">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-brand-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-white">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">{t.contact.social.title}</h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-primary/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                      <social.icon className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{social.name}</div>
                      <div className="text-white/50 text-sm">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Info */}
              <div className="mt-12 glass-card p-6">
                <h3 className="text-lg font-bold text-white mb-4">{t.contact.quickInfo.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/70">
                    <Calendar className="w-5 h-5 text-brand-primary" />
                    <span>{t.contact.quickInfo.booking}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Users className="w-5 h-5 text-brand-primary" />
                    <span>{t.contact.quickInfo.guests}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Clock className="w-5 h-5 text-brand-primary" />
                    <span>{t.contact.quickInfo.response}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {t.contact.success.title}
                    </h3>
                    <p className="text-white/70 max-w-md mx-auto">
                      {t.contact.success.message}
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-6">
                      {t.contact.form.title}
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot spam protection */}
                      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                            {t.contact.form.name} *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                            placeholder={t.contact.form.namePlaceholder}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                            {t.contact.form.email} *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                            placeholder={t.contact.form.emailPlaceholder}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-white/80 text-sm font-medium mb-2">
                            {t.contact.form.phone}
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                            placeholder={t.contact.form.phonePlaceholder}
                          />
                        </div>
                        <div>
                          <label htmlFor="eventType" className="block text-white/80 text-sm font-medium mb-2">
                            {t.contact.form.eventType} *
                          </label>
                          <select
                            id="eventType"
                            name="eventType"
                            required
                            value={formData.eventType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                          >
                            <option value="" className="bg-[#0A0F1A]">{t.contact.form.eventTypePlaceholder}</option>
                            {eventTypes.map((type) => (
                              <option key={type.key} value={type.label} className="bg-[#0A0F1A]">
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="eventDate" className="block text-white/80 text-sm font-medium mb-2">
                            {t.contact.form.eventDate}
                          </label>
                          <input
                            type="date"
                            id="eventDate"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="guestCount" className="block text-white/80 text-sm font-medium mb-2">
                            {t.contact.form.guestCount}
                          </label>
                          <input
                            type="text"
                            id="guestCount"
                            name="guestCount"
                            value={formData.guestCount}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
                            placeholder={t.contact.form.guestCountPlaceholder}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                          {t.contact.form.message} *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all resize-none"
                          placeholder={t.contact.form.messagePlaceholder}
                        />
                      </div>

                      {error && (
                        <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400">
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={20} className="animate-spin" />
                            <span>{t.contact.form.sending}</span>
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            <span>{t.contact.form.submit}</span>
                          </>
                        )}
                      </button>

                      <p className="text-white/40 text-sm text-center">
                        {t.contact.form.responseNote}
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden section-vivid-2">
        <div className="ambient-orb ambient-orb-blue w-[400px] h-[400px] top-0 left-1/4 opacity-20" />
        <div className="ambient-orb ambient-orb-red w-[350px] h-[350px] bottom-0 right-1/4 opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0">
              <img
                src="/images/IMG_4892.webp"
                alt="Performance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 via-rose-600/85 to-brand-primary/90" />
            </div>
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t.contact.directContact.title}
              </h2>
              <p className="text-white/90 text-lg max-w-xl mx-auto mb-8">
                {t.contact.directContact.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+31614871373"
                  className="bg-white text-brand-primary font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2 hover:scale-105 shadow-xl"
                >
                  <Phone size={20} />
                  <span>{t.contact.directContact.call}</span>
                </a>
                <a
                  href="mailto:info@marcoskennedy.com"
                  className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  <span>{t.contact.directContact.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

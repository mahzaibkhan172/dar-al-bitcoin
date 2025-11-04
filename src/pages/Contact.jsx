import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, MessageCircle, Twitter, Youtube, Instagram, Send, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const socialLinks = [
    { icon: Send, name: 'Telegram', url: 'https://t.me/daralbitcoin', color: 'hover:bg-blue-500' },
    { icon: Twitter, name: 'Twitter/X', url: 'https://twitter.com/DarAlBitcoin', color: 'hover:bg-sky-500' },
    { icon: Youtube, name: 'YouTube', url: 'https://youtube.com/@daralbitcoin', color: 'hover:bg-red-500' },
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com/daralbitcoin', color: 'hover:bg-pink-500' },
  ]

  const faqs = [
    { q: 'Bitcoin est-il halal?', link: '/blog/bitcoin-halal' },
    { q: 'Comment commencer?', link: '/formation' },
    { q: 'Combien coûte la formation?', link: '/formation#pricing' },
  ]

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-5"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-outfit font-bold text-white mb-6">
              Contactez-Nous
            </h1>
            <p className="text-xl text-gray-300">
              Une question? Une suggestion? Parlons-en.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-outfit font-bold text-navy-900 mb-8">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bitcoin-500"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bitcoin-500"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Sujet *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bitcoin-500"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="formation">Question sur la formation</option>
                    <option value="religieux">Question religieuse</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="media">Média</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bitcoin-500 resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-primary w-full"
                >
                  Envoyer le message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-outfit font-bold text-navy-900 mb-8">
                  Rejoignez la Communauté
                </h2>

                {/* Email */}
                <div className="card p-6 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-bitcoin-500/10 rounded-full flex items-center justify-center">
                      <Mail className="text-bitcoin-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-1">Email</h3>
                      <a href="mailto:contact@daralbitcoin.com" className="text-bitcoin-500 hover:underline">
                        contact@daralbitcoin.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="card p-6">
                  <h3 className="font-semibold text-navy-900 mb-4">Réseaux Sociaux</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className={`flex items-center space-x-3 p-3 bg-gray-50 rounded-lg ${social.color} transition-colors group`}
                      >
                        <social.icon className="text-gray-700 group-hover:text-white transition-colors" size={20} />
                        <span className="text-sm font-semibold text-gray-700 group-hover:text-white transition-colors">
                          {social.name}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="card p-6">
                <h3 className="font-semibold text-navy-900 mb-4">Questions fréquentes :</h3>
                <ul className="space-y-3">
                  {faqs.map((faq, index) => (
                    <li key={index}>
                      <a href={faq.link} className="text-bitcoin-500 hover:underline flex items-center space-x-2">
                        <span>→</span>
                        <span>{faq.q}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Office Hours */}
              <div className="card p-6 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="text-bitcoin-400" size={24} />
                  <h3 className="font-semibold text-lg">Disponibilité</h3>
                </div>
                <p className="text-gray-300">
                  Nous répondons généralement sous 24-48h.
                  <br />
                  Pour les urgences, contactez-nous sur Telegram.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map or Additional CTA */}
      <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <MessageCircle className="w-16 h-16 text-bitcoin-400 mx-auto mb-6" />
            <h2 className="text-4xl font-outfit font-bold text-white mb-6">
              Rejoignez Notre Communauté Telegram
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Échangez avec des centaines de musulmans passionnés par Bitcoin et la souveraineté financière
            </p>
            <motion.a
              href="https://t.me/daralbitcoin"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Send size={20} />
              <span>Rejoindre le groupe Telegram</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact

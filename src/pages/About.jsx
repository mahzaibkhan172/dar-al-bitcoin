import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Users, Shield, Heart, Target, MapPin, Clock, Award, MessageCircle, Instagram, Twitter, Youtube } from 'lucide-react'
import EventRegistrationModal from '../components/EventRegistrationModal'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (event) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedEvent(null)
  }

  const values = [
    { icon: Heart, title: 'Honnêteté Intellectuelle', desc: 'Nous ne cachons rien. Bitcoin a des avantages mais aussi des défis. Nous en parlons ouvertement.' },
    { icon: BookOpen, title: 'Conformité Islamique', desc: 'Chaque enseignement est vérifié à la lumière des sources islamiques authentiques.' },
    { icon: Shield, title: 'Indépendance', desc: 'Nous ne sommes affiliés à aucune plateforme d\'échange ou entreprise Bitcoin.' },
    { icon: Users, title: 'Accessibilité', desc: 'Nous rendons Bitcoin compréhensible pour tous, quel que soit votre niveau technique.' },
    { icon: Target, title: 'Communauté', desc: 'Nous croyons en la force du collectif et créons un réseau de soutien mutuel.' },
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
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-outfit font-bold text-white mb-6">
              Qui Sommes-Nous?
            </h1>
            <p className="text-2xl text-bitcoin-400 font-semibold">
              Notre Mission : Éclairer la Communauté Musulmane sur Bitcoin
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story - Image Left, Text Right */}
      <section ref={ref} className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80" 
                alt="Bitcoin et Finance Islamique" 
                className="rounded-xl md:rounded-2xl shadow-2xl w-full"
              />
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-navy-900 mb-6">
                Pourquoi Dar Al Bitcoin Existe
              </h2>
              <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                <p>
                  Nous avons observé un problème majeur dans la communauté musulmane : la confusion entre Bitcoin et "la crypto". 
                  Cette confusion est dangereuse car elle empêche de voir la vraie valeur de Bitcoin comme solution au Riba systémique.
                </p>
                <p>
                  Le système monétaire FIAT (euro, dollar) est basé sur la création monétaire par la dette. 
                  Chaque unité monétaire en circulation contient du Riba à sa création même. 
                  C'est un système usuraire par design, mais personne ne vous le dit.
                </p>
                <p className="text-lg md:text-xl font-semibold text-navy-900">
                  Notre mission est de corriger cette vision et de montrer que Bitcoin n'est pas un gadget technologique, 
                  mais une réponse islamique à un problème réel.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-navy-900 mb-6">
              Nos Principes Fondamentaux
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-bitcoin-500 to-bitcoin-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-outfit font-bold text-navy-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section - HIDDEN */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-navy-900 mb-6">
              Événements à Venir
            </h2>
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {[
              {
                date: { day: '15', month: 'DÉC', year: '2024' },
                title: 'Webinaire : Bitcoin, est-ce vraiment Halal?',
                type: 'Webinaire',
                description: 'Débat avec des savants et experts en finance islamique. Questions/réponses en direct avec la communauté.',
                location: 'En ligne (Zoom)',
                time: '20h00 - 22h00 CET',
                spots: 'Places illimitées',
                price: 'Gratuit',
                image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80'
              },
              {
                date: { day: '20', month: 'JAN', year: '2025' },
                title: 'Atelier Pratique : Sécuriser vos Bitcoin',
                type: 'Atelier',
                description: 'Formation hands-on sur le self-custody. Apportez votre ordinateur et repartez avec votre premier wallet sécurisé.',
                location: 'Bruxelles, Belgique',
                time: '14h00 - 18h00',
                spots: '15 places restantes / 30',
                price: '49€',
                image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&q=80'
              },
              {
                date: { day: '10', month: 'FÉV', year: '2025' },
                title: 'Conférence : L\'Avenir de la Finance Islamique avec Bitcoin',
                type: 'Conférence',
                description: 'Intervenants experts en finance islamique et Bitcoin. Networking et discussions approfondies.',
                location: 'Paris, France',
                time: '10h00 - 17h00',
                spots: 'Complet (liste d\'attente)',
                price: '99€',
                image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80'
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="card overflow-hidden"
              >
                <div className="grid md:grid-cols-[200px_1fr] gap-0">
                  <div className="relative">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-500/90 to-bitcoin-600/90 flex flex-col items-center justify-center text-white">
                      <span className="text-5xl font-bold">{event.date.day}</span>
                      <span className="text-xl font-semibold uppercase">{event.date.month}</span>
                      <span className="text-sm">{event.date.year}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <span className="inline-block bg-bitcoin-500/10 text-bitcoin-500 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {event.type}
                    </span>
                    <h3 className="text-2xl font-outfit font-bold text-navy-900 mb-4">{event.title}</h3>
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-3 text-gray-700">
                        <MapPin size={20} className="text-bitcoin-500" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-700">
                        <Clock size={20} className="text-bitcoin-500" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-700">
                        <Users size={20} className="text-bitcoin-500" />
                        <span>{event.spots}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl font-bold text-bitcoin-500">{event.price}</span>
                      </div>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.02 }} 
                      onClick={() => openModal(event)}
                      className="btn-primary w-full md:w-auto"
                    >
                      S'inscrire maintenant
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-outfit font-bold text-navy-900 mb-6">
              Pourquoi Dar Al Bitcoin Existe
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nous avons constaté que la communauté musulmane connaît déjà le monde des cryptomonnaies, 
              mais avec une compréhension infectée par la culture du casino et de la spéculation.
            </p>
            <p className="text-xl text-navy-900 font-semibold max-w-4xl mx-auto mt-4">
              Notre mission : Corriger cette vision et vous montrer que Bitcoin n'est pas un gadget, 
              mais une réponse islamique à un problème réel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: BookOpen,
                title: 'Éducation',
                description: 'Nous formons la communauté musulmane à comprendre :',
                points: [
                  'Le problème du Riba dans le système FIAT',
                  'La différence entre Bitcoin et "la crypto"',
                  'Comment utiliser Bitcoin en toute sécurité'
                ]
              },
              {
                icon: Users,
                title: 'Communauté',
                description: 'Nous créons un espace d\'échange entre musulmans conscients des enjeux de souveraineté financière et désireux d\'adopter des solutions conformes aux principes islamiques.'
              },
              {
                icon: Shield,
                title: 'Recherche',
                description: 'Nous publions des analyses sur l\'intersection entre finance islamique, Bitcoin, et souveraineté monétaire pour élever le niveau de compréhension.'
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="card p-8 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-bitcoin-500 to-bitcoin-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform duration-300">
                  <pillar.icon className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {pillar.description}
                </p>
                {pillar.points && (
                  <ul className="text-left space-y-2">
                    {pillar.points.map((point, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-bitcoin-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <Link to="/formation">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Commencer ma formation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Past Events - HIDDEN */}
      {/* <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-navy-900 mb-6">
              Événements Passés
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Meetup Bitcoin & Islam - Bruxelles', date: 'Octobre 2024', attendees: 45, image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80' },
              { title: 'Webinaire : Introduction à Bitcoin', date: 'Septembre 2024', attendees: 120, image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80' }
            ].map((event, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.2 }} whileHover={{ y: -5 }} className="card overflow-hidden">
                <div className="relative h-48">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm mb-1">{event.date}</p>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users size={20} className="text-bitcoin-500" />
                    <span>{event.attendees} participants</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}



      {/* Social Media Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-navy-900 mb-6">
              Suivez-nous
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rejoignez notre communauté sur les réseaux sociaux pour rester informé et échanger avec d'autres musulmans intéressés par Bitcoin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Telegram',
                icon: MessageCircle,
                url: 'https://t.me/daralbitcoin',
                color: 'from-blue-500 to-blue-600',
                description: 'Rejoignez notre communauté'
              },
              {
                name: 'Instagram',
                icon: Instagram,
                url: 'https://instagram.com/dar.al.bitcoin',
                color: 'from-pink-500 to-purple-600',
                description: 'Suivez nos actualités'
              },
              {
                name: 'Twitter',
                icon: Twitter,
                url: 'https://twitter.com/Amgad_Khafagy',
                color: 'from-blue-400 to-blue-500',
                description: 'Suivez @Amgad_Khafagy'
              },
              {
                name: 'YouTube',
                icon: Youtube,
                url: 'https://youtube.com/@daralbitcoin',
                color: 'from-red-500 to-red-600',
                description: 'Vidéos éducatives'
              }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="card p-8 text-center group cursor-pointer"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <social.icon className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-outfit font-bold text-navy-900 mb-2 group-hover:text-bitcoin-500 transition-colors">
                  {social.name}
                </h3>
                <p className="text-gray-600">
                  {social.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
            <h2 className="text-4xl font-outfit font-bold text-navy-900 mb-8">
              Rejoignez notre mission
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <Link to="/formation" className="w-full sm:w-auto">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary w-full sm:w-auto">
                  Commencer la formation
                </motion.button>
              </Link>
              <a href="mailto:daralbitcoin.pro@gmail.com" className="w-full sm:w-auto">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-secondary w-full sm:w-auto">
                  Nous contacter
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Modal */}
      <EventRegistrationModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        event={selectedEvent}
      />
    </div>
  )
}

export default About

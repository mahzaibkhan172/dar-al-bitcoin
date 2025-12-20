import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Calendar, MapPin, Clock, Users, Award } from 'lucide-react'
import EventRegistrationModal from '../components/EventRegistrationModal'

const Events = () => {
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

  const events = [
    {
      date: { day: '25', month: 'JAN', year: '2025' },
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
      date: { day: '15', month: 'FÉV', year: '2025' },
      title: 'Atelier Pratique : Sécuriser vos Bitcoin',
      type: 'Atelier',
      description: 'Formation hands-on sur le self-custody. Apportez votre ordinateur et repartez avec votre premier wallet sécurisé.',
      location: 'Bruxelles, Belgique',
      time: '14h00 - 18h00',
      spots: '20 places restantes / 30',
      price: '49€',
      image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&q=80'
    },
    {
      date: { day: '10', month: 'MAR', year: '2025' },
      title: 'Conférence : L\'Avenir de la Finance Islamique avec Bitcoin',
      type: 'Conférence',
      description: 'Intervenants experts en finance islamique et Bitcoin. Networking et discussions approfondies.',
      location: 'Paris, France',
      time: '10h00 - 17h00',
      spots: '25 places restantes / 50',
      price: '99€',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80'
    }
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
              Événements
            </h1>
            <p className="text-2xl text-gray-300">
              Rejoignez-nous pour des événements enrichissants sur Bitcoin et l'Islam
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section ref={ref} className="section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 islamic-pattern opacity-5"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-outfit font-bold text-white mb-6">
              Prochains Événements
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-navy-800/50 backdrop-blur-sm border border-bitcoin-500/30 rounded-xl md:rounded-2xl overflow-hidden hover:border-bitcoin-500 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Date Badge */}
                  <div className="bg-gradient-to-br from-bitcoin-500 to-bitcoin-600 p-4 sm:p-6 flex flex-row sm:flex-col items-center justify-center sm:min-w-[100px]">
                    <span className="text-3xl sm:text-4xl font-bold text-white">{event.date.day}</span>
                    <span className="text-sm font-semibold text-white uppercase ml-2 sm:ml-0">{event.date.month}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 sm:p-6">
                    <span className="inline-block bg-bitcoin-500/20 text-bitcoin-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {event.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-outfit font-bold text-white mb-2 leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start space-x-2 text-gray-400 text-xs sm:text-sm">
                        <MapPin size={16} className="text-bitcoin-400 flex-shrink-0 mt-0.5" />
                        <span className="break-words">{event.location}</span>
                      </div>
                      <div className="flex items-start space-x-2 text-gray-400 text-xs sm:text-sm">
                        <Clock size={16} className="text-bitcoin-400 flex-shrink-0 mt-0.5" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-start space-x-2 text-gray-400 text-xs sm:text-sm">
                        <Users size={16} className="text-bitcoin-400 flex-shrink-0 mt-0.5" />
                        <span>{event.spots}</span>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <span className="text-xl sm:text-2xl font-bold text-bitcoin-400">{event.price}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openModal(event)}
                        className="bg-bitcoin-500 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-bitcoin-600 transition-colors text-sm w-full sm:w-auto"
                      >
                        S'inscrire
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      <EventRegistrationModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        event={selectedEvent}
      />

      {/* Host Event CTA */}
      <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="max-w-3xl mx-auto text-center">
            <Award className="w-16 h-16 text-bitcoin-400 mx-auto mb-6" />
            <h2 className="text-4xl font-outfit font-bold text-white mb-6">
              Organiser un Événement Dar Al Bitcoin dans Votre Ville
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Vous souhaitez organiser un meetup, une conférence ou un atelier Dar Al Bitcoin dans votre ville? Contactez-nous!
            </p>
            <div className="bg-navy-800/50 backdrop-blur-sm border border-bitcoin-500/30 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Nous fournissons:</h3>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Support organisationnel</li>
                <li>✓ Matériel de formation</li>
                <li>✓ Promotion</li>
                <li>✓ Intervenant (si possible)</li>
              </ul>
            </div>
            <a href="mailto:contact@daralbitcoin.com">
              <motion.button whileHover={{ scale: 1.05 }} className="btn-secondary">
                Proposer un événement
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Events
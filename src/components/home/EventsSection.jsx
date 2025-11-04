import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, Clock, Users } from 'lucide-react'

const EventsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const events = [
    {
      date: { day: '15', month: 'DÉC' },
      title: 'Webinaire : Bitcoin, est-ce vraiment Halal?',
      type: 'Webinaire',
      description: 'Débat avec des savants et experts en finance islamique',
      location: 'En ligne (Zoom)',
      time: '20h00 - 22h00',
      spots: 'Places illimitées',
      price: 'Gratuit'
    },
    {
      date: { day: '20', month: 'JAN' },
      title: 'Atelier Pratique : Sécuriser vos Bitcoin',
      type: 'Atelier',
      description: 'Formation hands-on sur le self-custody',
      location: 'Bruxelles',
      time: '14h00 - 18h00',
      spots: '15 places restantes / 30',
      price: '49€'
    }
  ]

  return (
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-navy-800/50 backdrop-blur-sm border border-bitcoin-500/30 rounded-2xl overflow-hidden hover:border-bitcoin-500 transition-all duration-300"
            >
              <div className="flex">
                {/* Date Badge */}
                <div className="bg-gradient-to-br from-bitcoin-500 to-bitcoin-600 p-6 flex flex-col items-center justify-center min-w-[100px]">
                  <span className="text-4xl font-bold text-white">{event.date.day}</span>
                  <span className="text-sm font-semibold text-white uppercase">{event.date.month}</span>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <span className="inline-block bg-bitcoin-500/20 text-bitcoin-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {event.type}
                  </span>
                  <h3 className="text-xl font-outfit font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {event.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <MapPin size={16} className="text-bitcoin-400" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Clock size={16} className="text-bitcoin-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Users size={16} className="text-bitcoin-400" />
                      <span>{event.spots}</span>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-bitcoin-400">{event.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-bitcoin-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-bitcoin-600 transition-colors"
                    >
                      S'inscrire
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link to="/evenements">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Voir tous les événements
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default EventsSection

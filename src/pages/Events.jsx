import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, Clock, Users, Video, Award } from 'lucide-react'

const Events = () => {
  const upcomingEvents = [
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
  ]

  const pastEvents = [
    {
      title: 'Meetup Bitcoin & Islam - Bruxelles',
      date: 'Octobre 2024',
      attendees: 45,
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80'
    },
    {
      title: 'Webinaire : Introduction à Bitcoin',
      date: 'Septembre 2024',
      attendees: 120,
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80'
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
              Événements & Rencontres
            </h1>
            <p className="text-xl text-gray-300">
              Rejoignez la communauté Dar Al Bitcoin lors de nos événements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-navy-900 mb-6">
              Événements à Venir
            </h2>
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="card overflow-hidden"
              >
                <div className="grid md:grid-cols-[200px_1fr] gap-0">
                  {/* Date & Image */}
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-500/90 to-bitcoin-600/90 flex flex-col items-center justify-center text-white">
                      <span className="text-5xl font-bold">{event.date.day}</span>
                      <span className="text-xl font-semibold uppercase">{event.date.month}</span>
                      <span className="text-sm">{event.date.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="inline-block bg-bitcoin-500/10 text-bitcoin-500 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                          {event.type}
                        </span>
                        <h3 className="text-2xl font-outfit font-bold text-navy-900">
                          {event.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">
                      {event.description}
                    </p>

                    {/* Details */}
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

                    {/* CTA */}
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-primary w-full md:w-auto"
                      >
                        S'inscrire maintenant
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-navy-900 mb-6">
              Événements Passés
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="card overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
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
      </section>

      {/* Host Event CTA */}
      <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
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
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="btn-secondary"
              >
                Proposer un événement
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Events

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Calendar, MapPin, Clock, Users, X, Mail, User, Phone, MessageSquare } from 'lucide-react'

const EventRegistrationModal = ({ isOpen, onClose, event }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Prepare complete registration data with event details
    const registrationData = {
      // User form data
      ...formData,
      // Event details as hidden fields
      eventTitle: event?.title || '',
      eventDate: event?.date ? `${event.date.day} ${event.date.month} ${event.date.year || ''}` : '',
      eventTime: event?.time || '',
      eventLocation: event?.location || '',
      eventType: event?.type || '',
      eventPrice: event?.price || '',
      eventSpots: event?.spots || '',
      // Timestamp
      registrationTimestamp: new Date().toISOString(),
      // Source page
      sourcePage: window.location.pathname
    }
    
    // Handle form submission here
    console.log('Complete Registration Data:', registrationData)
    
    // In a real application, you would send this data to your backend
    // Example: await submitRegistration(registrationData)
    
    alert(`Inscription envoyée avec succès pour "${event?.title}"! Nous vous contacterons bientôt.`)
    onClose()
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleClose = () => {
    onClose()
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-bitcoin-500 to-bitcoin-600 p-6 text-white relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-outfit font-bold mb-2">
                Inscription à l'événement
              </h2>
              {event && (
                <p className="text-bitcoin-100">
                  {event.title}
                </p>
              )}
            </div>

            {/* Event Details */}
            {event && (
              <div className="p-6 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-bitcoin-500" size={20} />
                    <span className="text-gray-700">
                      {event.date?.day} {event.date?.month} {event.date?.year}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="text-bitcoin-500" size={20} />
                    <span className="text-gray-700">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-bitcoin-500" size={20} />
                    <span className="text-gray-700">{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="text-bitcoin-500" size={20} />
                    <span className="text-gray-700">{event.spots}</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-bitcoin-50 rounded-lg">
                  <p className="text-gray-700">{event.description}</p>
                  <p className="text-2xl font-bold text-bitcoin-500 mt-2">{event.price}</p>
                </div>
              </div>
            )}

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="p-6">
              {/* Hidden Fields for Event Details */}
              {event && (
                <>
                  <input type="hidden" name="eventTitle" value={event.title || ''} />
                  <input type="hidden" name="eventDate" value={event.date ? `${event.date.day} ${event.date.month} ${event.date.year || ''}` : ''} />
                  <input type="hidden" name="eventTime" value={event.time || ''} />
                  <input type="hidden" name="eventLocation" value={event.location || ''} />
                  <input type="hidden" name="eventType" value={event.type || ''} />
                  <input type="hidden" name="eventPrice" value={event.price || ''} />
                  <input type="hidden" name="eventSpots" value={event.spots || ''} />
                  <input type="hidden" name="registrationTimestamp" value={new Date().toISOString()} />
                  <input type="hidden" name="sourcePage" value={window.location.pathname} />
                </>
              )}
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bitcoin-500 focus:border-transparent"
                      placeholder="Votre nom complet"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bitcoin-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bitcoin-500 focus:border-transparent"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message (optionnel)
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bitcoin-500 focus:border-transparent resize-none"
                      placeholder="Questions ou commentaires..."
                    />
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  En vous inscrivant, vous acceptez de recevoir des informations sur cet événement et nos futures activités. 
                  Vos données sont traitées conformément à notre politique de confidentialité.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-bitcoin-500 to-bitcoin-600 text-white rounded-lg hover:from-bitcoin-600 hover:to-bitcoin-700 transition-all font-semibold shadow-lg"
                >
                  Confirmer l'inscription
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default EventRegistrationModal
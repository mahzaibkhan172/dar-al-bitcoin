import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Send, Lock } from 'lucide-react'

const NewsletterSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <section ref={ref} className="section-padding bg-gradient-to-r from-bitcoin-500 to-bitcoin-600 relative overflow-hidden">
      {/* Animated background circles */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Mail className="text-bitcoin-500" size={40} />
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-6">
            Restez Informés
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Recevez nos derniers articles, analyses et événements directement dans votre boîte mail.
          </p>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-6"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-navy-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-800 transition-colors flex items-center justify-center space-x-2 text-lg"
            >
              <span>S'abonner</span>
              <Send size={20} />
            </motion.button>
          </motion.form>

          {/* Privacy Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/80 text-sm flex items-center justify-center space-x-2"
          >
            <Lock size={16} />
            <span>Nous respectons votre vie privée. Désinscription à tout moment.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsletterSection

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Rocket, Phone } from 'lucide-react'

const FinalCTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-5"></div>
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-bitcoin-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
      />

      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-24 h-24 bg-gradient-to-br from-bitcoin-500 to-bitcoin-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
          >
            <Rocket className="text-white" size={48} />
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-outfit font-bold text-white mb-6 leading-tight">
            Prêt à Prendre Votre{' '}
            <span className="text-gradient bg-gradient-to-r from-bitcoin-400 to-gold-500 bg-clip-text text-transparent">
              Souveraineté Financière
            </span>
            ?
          </h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
          >
            Rejoignez des centaines de musulmans qui ont choisi de se libérer du système FIAT 
            et d'embrasser Bitcoin.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/formation">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(247, 147, 26, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-12 py-6 flex items-center space-x-3 shadow-2xl"
              >
                <Rocket size={24} />
                <span>Commencer la formation maintenant</span>
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-12 py-6 flex items-center space-x-3"
              >
                <Phone size={24} />
                <span>Réserver un appel découverte</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-bitcoin-400 mb-2">500+</div>
              <div className="text-gray-400 text-sm">Étudiants formés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-bitcoin-400 mb-2">4.9/5</div>
              <div className="text-gray-400 text-sm">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-bitcoin-400 mb-2">100%</div>
              <div className="text-gray-400 text-sm">Conforme Charia</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA

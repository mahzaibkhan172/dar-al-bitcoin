import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle, Lock, Globe, Users, Play, BookOpen } from 'lucide-react'

const HeroSection = () => {
  const trustElements = [
    { icon: CheckCircle, text: 'Conforme aux principes islamiques' },
    { icon: BookOpen, text: 'Formateur certifié' },
    { icon: Lock, text: 'Souveraineté financière' },
    { icon: Users, text: 'Communauté active' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-10"></div>
      
      {/* Animated Circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-bitcoin-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
      />

      <div className="container-custom px-6 py-32 relative z-10">
        <div className="max-w-6xl">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-outfit font-extrabold text-white mb-8 leading-tight">
              Bitcoin, la monnaie{' '}
              <span className="text-gradient">la plus halal</span>
            </h1>
          </motion.div>

          {/* Arabic Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-navy-800/50 backdrop-blur-sm border border-gold-500/30 rounded-2xl p-8 mb-8 max-w-3xl shadow-2xl"
          >
            <p className="arabic-text text-3xl md:text-4xl mb-4 leading-relaxed">
              يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَذَرُوا مَا بَقِيَ مِنَ الرِّبَا
            </p>
            <p className="text-gray-300 text-lg italic">
              "Ô croyants, craignez Allah et renoncez au reste de l'usure"
            </p>
            <p className="text-gold-500 text-sm mt-2">(Sourate Al-Baqara, 2:278)</p>
          </motion.div>

          {/* Hero Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed"
          >
            Comprends le Bitcoin et commence ta hijra financière ! Dar Al Bitcoin vous aide à sortir de la riba en vous formant sur cette révolution monétaire en toute sérénité.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 mb-16"
          >
            <Link to="/formation">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-10 py-5 flex items-center space-x-2"
              >
                <BookOpen size={24} />
                <span>Découvrir notre formation</span>
              </motion.button>
            </Link>
            <a href="#problem">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-10 py-5 flex items-center space-x-2"
              >
                <Play size={24} />
                <span>Comprendre le problème</span>
              </motion.button>
            </a>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
          >
            {trustElements.map((element, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center space-y-2 p-4 bg-navy-800/30 backdrop-blur-sm rounded-xl border border-bitcoin-500/20 shadow-lg"
              >
                <element.icon className="text-bitcoin-400" size={32} />
                <p className="text-white text-sm text-center">{element.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-bitcoin-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-bitcoin-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection

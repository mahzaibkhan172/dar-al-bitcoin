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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-outfit font-extrabold text-white mb-6 md:mb-8 leading-tight">
              Bitcoin, la monnaie{' '}
              <span className="text-gradient">la plus halal</span>
            </h1>

            {/* Arabic Quote */}
            <div className="bg-navy-800/50 backdrop-blur-sm border border-gold-500/30 rounded-xl md:rounded-2xl p-4 md:p-6 mb-4 md:mb-6 shadow-2xl">
              <p className="arabic-text text-xl sm:text-2xl md:text-3xl mb-2 md:mb-3 leading-relaxed break-words">
                يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَذَرُوا مَا بَقِيَ مِنَ الرِّبَا
              </p>
              <p className="text-gray-300 text-sm md:text-base italic">
                "Ô croyants, craignez Allah et renoncez au reste de l'usure"
              </p>
              <p className="text-gold-500 text-xs md:text-sm mt-2">(Sourate Al-Baqara, 2:278)</p>
            </div>

            {/* Hero Description */}
            <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Comprends le Bitcoin et commence ta hijra financière ! Dar Al Bitcoin vous aide à sortir de la riba en vous formant sur cette révolution monétaire en toute sérénité.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
              <Link to="/formation" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full sm:w-auto flex items-center justify-center space-x-2"
                >
                  <BookOpen size={20} className="flex-shrink-0" />
                  <span className="truncate">Découvrir notre formation</span>
                </motion.button>
              </Link>
              <a href="#problem" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary w-full sm:w-auto flex items-center justify-center space-x-2"
                >
                  <Play size={20} className="flex-shrink-0" />
                  <span className="truncate">Comprendre le problème</span>
                </motion.button>
              </a>
            </div>

            {/* Trust Elements */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {trustElements.map((element, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center space-y-2 p-3 md:p-4 bg-navy-800/30 backdrop-blur-sm rounded-lg md:rounded-xl border border-bitcoin-500/20 shadow-lg"
                >
                  <element.icon className="text-bitcoin-400 flex-shrink-0" size={24} />
                  <p className="text-white text-xs text-center leading-tight">{element.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 lg:mt-0"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&q=80" 
                alt="Bitcoin Islamic Finance" 
                className="rounded-xl md:rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent rounded-xl md:rounded-2xl"></div>
            </div>
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

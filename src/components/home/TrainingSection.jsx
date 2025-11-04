import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Shield, Zap, Award, CheckCircle, Clock, Users, Lock, AlertCircle } from 'lucide-react'

const TrainingSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const modules = [
    {
      icon: AlertCircle,
      title: 'Le Problème FIAT',
      points: ['Comprendre le Riba systémique', 'Histoire de la monnaie et de la dette', 'Pourquoi l\'euro/dollar ne sont pas neutres']
    },
    {
      icon: Zap,
      title: 'Bitcoin 101',
      points: ['Qu\'est-ce que Bitcoin vraiment?', 'Différence entre Bitcoin et "crypto"', 'Pourquoi 21 millions est crucial']
    },
    {
      icon: BookOpen,
      title: 'Bitcoin & Islam',
      points: ['Les avis des savants sur Bitcoin', 'Bitcoin est-il halal?', 'Réfuter les objections communes']
    },
    {
      icon: Shield,
      title: 'Pratique & Sécurité',
      points: ['Comment acheter du Bitcoin', 'Sécuriser vos Bitcoin (self-custody)', 'Utiliser Bitcoin au quotidien']
    }
  ]

  const features = [
    { icon: Clock, text: '100% en ligne' },
    { icon: Lock, text: 'Accessible à vie' },
    { icon: Award, text: 'Certificat de fin de formation' },
    { icon: Users, text: 'Groupe Telegram privé' },
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 islamic-pattern opacity-5"></div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-bitcoin-500/10 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-outfit font-bold text-white mb-6">
            Notre Formation : De la Confusion à la Clarté
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un parcours complet pour passer de spectateur à acteur de votre souveraineté financière islamique
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-navy-800/50 backdrop-blur-sm border border-bitcoin-500/30 rounded-xl p-6 hover:border-bitcoin-500 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-bitcoin-500 to-bitcoin-600 rounded-xl flex items-center justify-center mb-4">
                <module.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-outfit font-bold text-white mb-4">
                Module {index + 1}: {module.title}
              </h3>
              <ul className="space-y-2">
                {module.points.map((point, i) => (
                  <li key={i} className="flex items-start space-x-2 text-gray-300 text-sm">
                    <CheckCircle size={16} className="text-bitcoin-400 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-navy-800/30 backdrop-blur-sm border border-bitcoin-500/20 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-outfit font-bold text-white text-center mb-8">
            Ce Qui Est Inclus
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center space-y-3"
              >
                <div className="w-12 h-12 bg-bitcoin-500/20 rounded-full flex items-center justify-center">
                  <feature.icon className="text-bitcoin-400" size={24} />
                </div>
                <p className="text-white text-sm">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link to="/formation">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg"
            >
              Rejoindre la prochaine session
            </motion.button>
          </Link>
          <Link to="/formation">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg"
            >
              Voir le programme complet
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default TrainingSection

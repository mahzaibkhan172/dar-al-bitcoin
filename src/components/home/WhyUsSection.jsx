import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Users, Shield, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const WhyUsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const pillars = [
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
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
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
          {pillars.map((pillar, index) => (
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
          <Link to="/qui-sommes-nous">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              En savoir plus sur notre mission
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUsSection

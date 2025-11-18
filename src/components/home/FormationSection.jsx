import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Users, Shield, Zap, Award, ArrowRight } from 'lucide-react'

const FormationSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: BookOpen,
      title: 'Modules progressifs',
      desc: 'Comprendre Bitcoin techniquement, économiquement et éthiquement'
    },
    {
      icon: Shield,
      title: 'Finance islamique',
      desc: 'Approche alignée avec la finance islamique et la justice sociale'
    },
    {
      icon: Zap,
      title: 'Explications concrètes',
      desc: 'Exemples et cas pratiques sans jargon inutile'
    },
    {
      icon: Users,
      title: 'Encadrement humain',
      desc: 'Support bienveillant et sans pression'
    },
    {
      icon: Award,
      title: 'Espace de questions',
      desc: 'Poser toutes tes questions, sans jugement'
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-5"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-8">
            Tu as le droit de comprendre
          </h2>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Chez Dar Al Bitcoin, nous croyons que chaque personne a le droit — et même le devoir — de comprendre comment fonctionne l'argent, le système monétaire actuel et les alternatives éthiques qui s'offrent à elle.
            </p>
            
            <p>
              Personne ne devrait dépendre d'experts, de banques ou d'institutions pour prendre des décisions essentielles concernant sa propre richesse.
            </p>
            
            <p className="text-xl font-semibold text-bitcoin-400">
              Nos formations ont un objectif simple : t'aider à comprendre Bitcoin en profondeur, avec clarté, rigueur et pédagogie. Pas de jargon inutile. Pas de spéculation. Pas de promesses.
            </p>
            
            <p className="text-xl text-bitcoin-300">
              Juste le savoir, accessible à tous, pour te permettre de faire des choix éclairés, alignés avec tes valeurs et ta vision du long terme.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-navy-800/50 backdrop-blur-sm border border-bitcoin-500/30 rounded-xl p-6 text-center hover:border-bitcoin-500 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-bitcoin-500 to-bitcoin-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Bitcoin n'est pas réservé aux experts, aux ingénieurs ou aux financiers : tu as le droit de comprendre — et nous sommes là pour t'y aider.
          </p>

          <Link to="/formation">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-12 py-5 inline-flex items-center space-x-2"
            >
              <span>Commencer ma formation</span>
              <ArrowRight size={24} />
            </motion.button>
          </Link>
        </motion.div>

        {/* Payment Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Paiement en Bitcoin disponible</p>
          <a 
            href="https://go.daralbitcoin.fr/paiementenbitc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-bitcoin-400 hover:text-bitcoin-300 transition-colors"
          >
            <span>Payer en Bitcoin</span>
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FormationSection

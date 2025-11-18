import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Shield, Zap, Users, Target, Award, CheckCircle } from 'lucide-react'

const LearningExamplesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const modules = [
    {
      icon: BookOpen,
      title: 'Fondamentaux Bitcoin',
      topics: [
        'Qu\'est-ce que Bitcoin réellement ?',
        'Histoire et création de Bitcoin',
        'Différence entre Bitcoin et les cryptos',
        'Pourquoi Bitcoin est unique'
      ]
    },
    {
      icon: Shield,
      title: 'Bitcoin & Islam',
      topics: [
        'Bitcoin est-il halal selon la Charia ?',
        'Avis des savants contemporains',
        'Calcul de la Zakât sur Bitcoin',
        'Éthique islamique et technologie'
      ]
    },
    {
      icon: Zap,
      title: 'Technique Simplifiée',
      topics: [
        'Comment fonctionne la blockchain ?',
        'Qu\'est-ce que le minage ?',
        'Clés privées et sécurité',
        'Wallets et stockage sécurisé'
      ]
    },
    {
      icon: Target,
      title: 'Économie & Riba',
      topics: [
        'Le système monétaire actuel',
        'Création monétaire et dette',
        'Inflation : le vol silencieux',
        'Bitcoin comme solution au Riba'
      ]
    },
    {
      icon: Users,
      title: 'Pratique & Sécurité',
      topics: [
        'Comment acheter du Bitcoin ?',
        'Éviter les arnaques et pièges',
        'Stockage à long terme',
        'Transmission et héritage'
      ]
    },
    {
      icon: Award,
      title: 'Vision Long Terme',
      topics: [
        'Stratégie d\'accumulation (DCA)',
        'Psychologie et patience',
        'Bitcoin dans 10-20 ans',
        'Construire sa souveraineté'
      ]
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-navy-900 mb-6">
            Exemples de ce que vous allez apprendre
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos formations sont conçues pour t'offrir une vision complète, solide et accessible de Bitcoin. 
            Que tu démarres de zéro ou que tu cherches à approfondir tes connaissances, tu vas acquérir une 
            compréhension claire de ses fondations techniques, économiques et éthiques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card p-8 border-2 border-transparent hover:border-bitcoin-400 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-bitcoin-500 to-bitcoin-600 rounded-xl flex items-center justify-center mb-6">
                <module.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-outfit font-bold text-navy-900 mb-4">
                {module.title}
              </h3>
              
              <ul className="space-y-3">
                {module.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-start space-x-3">
                    <CheckCircle className="text-bitcoin-500 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm leading-relaxed">{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-bitcoin-500/10 to-gold-500/10 border-l-4 border-bitcoin-500 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
              Une approche complète et éthique
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Chaque module combine théorie et pratique, avec des exemples concrets et des cas d'usage réels. 
              Notre pédagogie respecte les principes islamiques tout en restant accessible à tous, 
              quel que soit votre niveau technique initial.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LearningExamplesSection
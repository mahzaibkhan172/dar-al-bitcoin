import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Shield, Lightbulb, Users, Target, Zap } from 'lucide-react'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const principles = [
    {
      icon: Heart,
      title: 'Transparence et intégrité',
      desc: 'Information honnête, claire et vérifiable. Pas de promesses, pas de spéculation, pas de marketing trompeur.'
    },
    {
      icon: Shield,
      title: 'Conformité éthique et finance islamique',
      desc: 'Rejet du riba, de la fraude, de l\'injustice et de l\'exploitation. Cadre spirituel et moral.'
    },
    {
      icon: Lightbulb,
      title: 'Souveraineté individuelle',
      desc: 'Reprendre le contrôle de sa richesse, de son épargne et de ses choix financiers.'
    },
    {
      icon: Users,
      title: 'Éducation avant l\'action',
      desc: 'Formation, rigueur intellectuelle et réflexion. Communauté éclairée et capable de décider.'
    },
    {
      icon: Target,
      title: 'Indépendance et neutralité',
      desc: 'Non lié à aucun projet Crypto. Focus unique sur Bitcoin pour des raisons techniques, économiques et éthiques.'
    },
    {
      icon: Zap,
      title: 'Vision long terme',
      desc: 'Bitcoin est un processus historique de restauration monétaire. Patience, discipline et stratégie.'
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-navy-900 mb-8">
            Qui sommes-nous ?
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Dar Al Bitcoin est une plateforme d'éducation et d'accompagnement dédiée à la compréhension de Bitcoin à travers le prisme de l'éthique islamique, de la justice économique et de la souveraineté financière.
            </p>
            
            <p>
              Notre mission est simple : aider la communauté à se réapproprier son rapport à l'argent, à comprendre les enjeux du système monétaire actuel, et à saisir l'opportunité unique que représente Bitcoin pour construire un avenir plus équitable.
            </p>
            
            <p>
              Nous rassemblons des ressources, des formations, des analyses et des conseils pratiques pour permettre à chacun — débutant comme initié — de comprendre Bitcoin en profondeur, loin du bruit, des spéculations et des narratifs trompeurs.
            </p>
            
            <p>
              Nous mettons l'accent sur une approche pédagogique, éthique et accessible, fondée sur la transparence et la rigueur intellectuelle.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-r from-bitcoin-500/10 to-gold-500/10 border-l-4 border-bitcoin-500 rounded-lg p-8 mt-8"
          >
            <p className="text-xl text-navy-900 font-semibold mb-4">
              Chez Dar Al Bitcoin, nous croyons que Bitcoin n'est pas seulement une technologie :
            </p>
            <p className="text-lg text-gray-700">
              c'est un outil de justice, de responsabilité et de libération face à un système monétaire fondé sur le riba, l'inflation et l'injustice structurelle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 p-8 bg-navy-900/5 rounded-lg"
          >
            <h3 className="text-2xl font-outfit font-bold text-navy-900 mb-4">Notre engagement :</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="text-bitcoin-500 font-bold mt-1">•</span>
                <span>Une éducation claire et fiable</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-bitcoin-500 font-bold mt-1">•</span>
                <span>Une analyse alignée avec les principes de la finance islamique</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-bitcoin-500 font-bold mt-1">•</span>
                <span>Une vision long terme, loin de la spéculation</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-bitcoin-500 font-bold mt-1">•</span>
                <span>Un accompagnement sérieux et humain</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-bitcoin-500 font-bold mt-1">•</span>
                <span>Un effort constant pour éclairer, guider et élever notre communauté</span>
              </li>
            </ul>
            <p className="text-center text-bitcoin-500 font-semibold text-lg mt-6">
              Dar Al Bitcoin : comprendre, se libérer, transmettre.
            </p>
          </motion.div>
        </motion.div>

        {/* Principles Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-navy-900 mb-12 text-center">
            Nos principes fondamentaux
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card p-8 border-2 border-transparent hover:border-bitcoin-400 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-bitcoin-500 to-bitcoin-600 rounded-xl flex items-center justify-center mb-6">
                  <principle.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-outfit font-bold text-navy-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection

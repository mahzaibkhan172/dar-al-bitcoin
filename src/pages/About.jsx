import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Users, Shield, Heart, Target, Lightbulb } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const values = [
    { icon: Heart, title: 'Honnêteté Intellectuelle', desc: 'Nous ne cachons rien. Bitcoin a des avantages mais aussi des défis. Nous en parlons ouvertement.' },
    { icon: BookOpen, title: 'Conformité Islamique', desc: 'Chaque enseignement est vérifié à la lumière des sources islamiques authentiques.' },
    { icon: Shield, title: 'Indépendance', desc: 'Nous ne sommes affiliés à aucune plateforme d\'échange ou entreprise Bitcoin.' },
    { icon: Users, title: 'Accessibilité', desc: 'Nous rendons Bitcoin compréhensible pour tous, quel que soit votre niveau technique.' },
    { icon: Target, title: 'Communauté', desc: 'Nous croyons en la force du collectif et créons un réseau de soutien mutuel.' },
  ]

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-5"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-outfit font-bold text-white mb-6">
              Qui Sommes-Nous?
            </h1>
            <p className="text-2xl text-bitcoin-400 font-semibold">
              Notre Mission : Éclairer la Communauté Musulmane sur Bitcoin
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section ref={ref} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-navy-900 mb-8">
              Pourquoi Dar Al Bitcoin Existe
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                Nous avons observé un problème majeur dans la communauté musulmane : la confusion entre Bitcoin et "la crypto". 
                Cette confusion est dangereuse car elle empêche de voir la vraie valeur de Bitcoin comme solution au Riba systémique.
              </p>
              <p>
                Le système monétaire FIAT (euro, dollar) est basé sur la création monétaire par la dette. 
                Chaque unité monétaire en circulation contient du Riba à sa création même. 
                C'est un système usuraire par design, mais personne ne vous le dit.
              </p>
              <p className="text-xl font-semibold text-navy-900">
                Notre mission est de corriger cette vision et de montrer que Bitcoin n'est pas un gadget technologique, 
                mais une réponse islamique à un problème réel.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-navy-900 mb-6">
              Nos Principes Fondamentaux
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-bitcoin-500 to-bitcoin-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-outfit font-bold text-navy-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-4xl font-outfit font-bold text-white mb-8">
              Rejoignez notre mission
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/formation">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="btn-primary"
                >
                  Commencer la formation
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="btn-secondary"
                >
                  Nous contacter
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

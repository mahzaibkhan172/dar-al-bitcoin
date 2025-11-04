import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { X, Check } from 'lucide-react'

const ComparisonSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const fiatPoints = [
    { title: 'Création par la Dette', desc: 'Chaque euro est créé par un prêt = Riba institutionnalisé' },
    { title: 'Inflation Permanente', desc: 'Votre argent perd de la valeur chaque jour (vol silencieux)' },
    { title: 'Contrôle Centralisé', desc: 'Les banques centrales décident de votre pouvoir d\'achat' },
    { title: 'Surveillance Totale', desc: 'Chaque transaction est tracée et peut être bloquée' },
    { title: 'Monnaie Illimitée', desc: 'Impression monétaire sans fin = dilution de votre richesse' }
  ]

  const bitcoinPoints = [
    { title: 'Création Transparente', desc: 'Aucune dette, aucun Riba. Émission programmée et prévisible' },
    { title: 'Réserve de Valeur', desc: '21 millions max = impossible de diluer votre richesse' },
    { title: 'Décentralisation', desc: 'Aucune autorité centrale ne peut manipuler Bitcoin' },
    { title: 'Souveraineté Financière', desc: 'Vos Bitcoin = Vos clés = Votre propriété absolue' },
    { title: 'Monnaie Limitée', desc: 'Offre fixe = protection contre l\'inflation et le vol' }
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-outfit font-bold text-white mb-6">
            FIAT vs Bitcoin : Une Question de Principes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* FIAT Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-red-900/30 to-red-800/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-red-500/30"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">💸</span>
              </div>
              <h3 className="text-3xl font-outfit font-bold text-white">Système FIAT</h3>
            </div>

            <div className="space-y-6">
              {fiatPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex space-x-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <X size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{point.title}</h4>
                    <p className="text-gray-300 text-sm">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bitcoin Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-bitcoin-500/30 to-bitcoin-600/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-bitcoin-500/50 relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-500/10 to-transparent animate-pulse"></div>

            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-bitcoin-500 to-bitcoin-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">₿</span>
                </div>
                <h3 className="text-3xl font-outfit font-bold text-white">Bitcoin</h3>
              </div>

              <div className="space-y-6">
                {bitcoinPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex space-x-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-bitcoin-500 rounded-full flex items-center justify-center mt-1">
                      <Check size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{point.title}</h4>
                      <p className="text-gray-300 text-sm">{point.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 max-w-4xl mx-auto bg-navy-800/50 backdrop-blur-sm border border-gold-500/30 rounded-2xl p-8 text-center"
        >
          <p className="arabic-text text-2xl md:text-3xl mb-4">
            "الَّذِينَ يَكْنِزُونَ الذَّهَبَ وَالْفِضَّةَ"
          </p>
          <p className="text-gray-300 text-lg italic mb-2">
            "Celui qui thésaurise l'or et l'argent..."
          </p>
          <p className="text-gold-500 text-sm mb-4">(Sourate At-Tawbah, 9:34)</p>
          <p className="text-white text-lg">
            Bitcoin permet de stocker de la valeur <span className="text-bitcoin-400 font-semibold">sans Riba ni confiscation</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ComparisonSection

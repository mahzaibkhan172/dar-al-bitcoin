import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { CheckCircle, Clock, Users, Award, Lock, BookOpen, Shield, Zap, ChevronDown, ChevronUp } from 'lucide-react'

const Formation = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [openModule, setOpenModule] = useState(null)

  const modules = [
    {
      number: 1,
      title: 'Le Problème FIAT & le Riba Systémique',
      duration: '3h',
      lessons: [
        'Histoire de la monnaie (de l\'or au papier)',
        'Comment les euros sont créés (spoiler: par la dette)',
        'Le Riba invisible dans le système bancaire moderne',
        'Inflation = vol silencieux de votre richesse',
        'Quiz de fin de module'
      ]
    },
    {
      number: 2,
      title: 'Bitcoin 101 - Qu\'est-ce Que C\'est Vraiment?',
      duration: '4h',
      lessons: [
        'Histoire de Bitcoin (2008-2024)',
        'Comment fonctionne Bitcoin (blockchain expliqué simplement)',
        'Pourquoi 21 millions? (la rareté programmée)',
        'Bitcoin vs "la crypto" (les différences fondamentales)',
        'Les mythes sur Bitcoin (énergie, criminalité, etc.)',
        'Quiz de fin de module'
      ]
    },
    {
      number: 3,
      title: 'Bitcoin & Islam - Est-ce Halal?',
      duration: '3h',
      lessons: [
        'Les critères de la monnaie en Islam',
        'Bitcoin à la lumière de la Charia',
        'Les avis des savants sur Bitcoin',
        'Répondre aux objections courantes',
        'Bitcoin vs l\'or (quel est le meilleur selon l\'Islam?)',
        'La Zakât sur Bitcoin',
        'Quiz de fin de module'
      ]
    },
    {
      number: 4,
      title: 'Sécurité & Souveraineté Pratique',
      duration: '5h',
      lessons: [
        'Où et comment acheter du Bitcoin (sans Riba)',
        'Self-custody: être sa propre banque',
        'Wallets: Hardware vs Software',
        'Sécuriser vos clés privées (seed phrase)',
        'Envoyer et recevoir du Bitcoin',
        'Les pièges à éviter (scams, arnaques)',
        'Utiliser Bitcoin au quotidien',
        'Exercice pratique guidé'
      ]
    }
  ]

  const features = [
    { icon: Clock, title: 'Accès à Vie', desc: 'Accès illimité à tous les modules' },
    { icon: Users, title: 'Communauté Privée', desc: 'Groupe Telegram exclusif' },
    { icon: Award, title: 'Certificat', desc: 'Certificat de fin de formation' },
    { icon: Lock, title: 'Support Continu', desc: 'Sessions Q&A 2x/mois' },
  ]

  const faqs = [
    {
      q: 'Ai-je besoin de connaissances techniques pour suivre cette formation?',
      a: 'Non. La formation est conçue pour les débutants complets. Nous expliquons tout depuis zéro.'
    },
    {
      q: 'La formation est-elle conforme aux principes islamiques?',
      a: 'Oui. Nous basons nos enseignements sur le Coran, la Sunna, et les avis de savants reconnus.'
    },
    {
      q: 'Combien de temps dure la formation?',
      a: 'Environ 15 heures de contenu vidéo + exercices. Vous avancez à votre rythme.'
    },
    {
      q: 'Puis-je payer en Bitcoin?',
      a: 'Oui! Et vous bénéficiez même de 5% de réduction en payant en BTC.'
    }
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
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-outfit font-bold text-white mb-6">
              Formation Bitcoin & Islam
            </h1>
            <p className="text-2xl text-gray-300">
              De la confusion à la clarté : Maîtrisez Bitcoin avec une perspective islamique
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why This Training */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-4xl font-outfit font-bold text-navy-900 mb-8">
              Vous Avez un Problème (Et Vous Ne le Savez Peut-Être Pas)
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Vous utilisez l'euro ou le dollar chaque jour. Vous payez vos factures, vous épargnez, vous investissez.
              </p>
              <p className="text-xl font-semibold text-navy-900">
                Mais saviez-vous que chaque euro dans votre poche contient du Riba à sa création même?
              </p>
              <p>
                Le système monétaire moderne est basé sur la création par la dette = un système usuraire par design.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section ref={ref} className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-navy-900 mb-6">
              Ce Que Vous Allez Apprendre
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <button
                  onClick={() => setOpenModule(openModule === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-bitcoin-500 to-bitcoin-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      {module.number}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-outfit font-bold text-navy-900">
                        {module.title}
                      </h3>
                      <p className="text-sm text-gray-500">{module.duration}</p>
                    </div>
                  </div>
                  {openModule === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                
                {openModule === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    className="px-6 pb-6"
                  >
                    <ul className="space-y-2 ml-16">
                      {module.lessons.map((lesson, i) => (
                        <li key={i} className="flex items-start space-x-2 text-gray-700">
                          <CheckCircle size={20} className="text-bitcoin-500 mt-0.5 flex-shrink-0" />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-outfit font-bold text-navy-900 text-center mb-12">
            Ce Qui Est Inclus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 bg-bitcoin-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-bitcoin-500" size={32} />
                </div>
                <h3 className="font-bold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-navy-800/50 backdrop-blur-sm border-2 border-bitcoin-500 rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-outfit font-bold text-white mb-4">
                Formation Complète Bitcoin & Islam
              </h2>
              <div className="mb-8">
                <span className="text-gray-400 line-through text-2xl">299€</span>
                <span className="text-6xl font-bold text-bitcoin-400 ml-4">199€</span>
                <p className="text-gray-300 mt-2">Offre de lancement</p>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center space-x-2 text-white">
                  <CheckCircle className="text-bitcoin-400" size={20} />
                  <span>Tous les modules (15h+ de contenu)</span>
                </li>
                <li className="flex items-center space-x-2 text-white">
                  <CheckCircle className="text-bitcoin-400" size={20} />
                  <span>Accès à vie</span>
                </li>
                <li className="flex items-center space-x-2 text-white">
                  <CheckCircle className="text-bitcoin-400" size={20} />
                  <span>Communauté Telegram</span>
                </li>
                <li className="flex items-center space-x-2 text-white">
                  <CheckCircle className="text-bitcoin-400" size={20} />
                  <span>Certificat</span>
                </li>
              </ul>
              <a href="#contact" className="block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="btn-primary w-full text-xl py-6"
                >
                  Rejoindre la Formation Maintenant
                </motion.button>
              </a>
              <p className="text-gray-400 text-sm mt-6">
                🛡️ Garantie Satisfait ou Remboursé 30 jours
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl font-outfit font-bold text-navy-900 text-center mb-12">
            Questions Fréquentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card p-6">
                <h3 className="font-bold text-navy-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Formation

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Clock, Users, Award, Lock, BookOpen, Shield, Zap, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react'
import LearningExamplesSection from '../components/home/LearningExamplesSection'
import FormationSection from '../components/home/FormationSection'
import ComparisonSection from '../components/home/ComparisonSection'

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-outfit font-bold text-white mb-6">
              Formation Bitcoin & Islam
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              De la confusion à la clarté : Maîtrisez Bitcoin avec une perspective islamique
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why This Training */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-navy-900 mb-4 md:mb-6">
              Vous Avez un Problème (Et Vous Ne le Savez Peut-Être Pas)
            </h2>
            <div className="prose prose-base sm:prose-lg max-w-none text-gray-700 space-y-3 md:space-y-4">
              <p className="text-base sm:text-lg">
                Vous utilisez l'euro ou le dollar chaque jour. Vous payez vos factures, vous épargnez, vous investissez.
              </p>
              <p className="text-lg sm:text-xl font-semibold text-navy-900">
                Mais saviez-vous que chaque euro dans votre poche contient du Riba à sa création même?
              </p>
              <p className="text-base sm:text-lg">
                Le système monétaire moderne est basé sur la création par la dette = un système usuraire par design.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules - HIDDEN */}
      {/* <section ref={ref} className="section-padding bg-gradient-to-b from-gray-50 to-white">
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
      </section> */}

      {/* Moved Sections from Homepage - Now with Better Layout */}
      
      {/* Section 1: Tu as le droit de comprendre - Image Left, Content Right */}
      <section className="section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80" 
                alt="Formation Bitcoin" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-white mb-4 md:mb-6">
                Tu as le droit de comprendre
              </h2>
              <div className="space-y-3 md:space-y-4 text-base sm:text-lg text-gray-300">
                <p>
                  Chez Dar Al Bitcoin, nous croyons que chaque personne a le droit — et même le devoir — de comprendre comment fonctionne l'argent, le système monétaire actuel et les alternatives éthiques qui s'offrent à elle.
                </p>
                <p>
                  Personne ne devrait dépendre d'experts, de banques ou d'institutions pour prendre des décisions essentielles concernant sa propre richesse.
                </p>
                <p className="text-lg sm:text-xl font-semibold text-bitcoin-400">
                  Nos formations ont un objectif simple : t'aider à comprendre Bitcoin en profondeur, avec clarté, rigueur et pédagogie.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Fiat vs Bitcoin - Content Left, Image Right */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-navy-900 mb-4 md:mb-6">
                FIAT vs Bitcoin : Une Question de Principes
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 sm:p-6 rounded-lg">
                  <h3 className="font-bold text-navy-900 mb-2 md:mb-3 flex items-center text-lg sm:text-xl">
                    <span className="text-2xl mr-2">💸</span> Système FIAT
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li>✗ Création par la Dette (Riba)</li>
                    <li>✗ Inflation Permanente</li>
                    <li>✗ Contrôle Centralisé</li>
                    <li>✗ Surveillance Totale</li>
                  </ul>
                </div>
                <div className="bg-bitcoin-50 border-l-4 border-bitcoin-500 p-4 sm:p-6 rounded-lg">
                  <h3 className="font-bold text-navy-900 mb-2 md:mb-3 flex items-center text-lg sm:text-xl">
                    <span className="text-2xl mr-2">₿</span> Bitcoin
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li>✓ Création Transparente (Sans Riba)</li>
                    <li>✓ Réserve de Valeur (21M max)</li>
                    <li>✓ Décentralisation Totale</li>
                    <li>✓ Souveraineté Financière</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&q=80" 
                alt="Bitcoin vs FIAT" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Learning Examples - Full Width with Cards */}
      <LearningExamplesSection />

      {/* Training Overview Section */}
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-white mb-4 md:mb-6">
              Notre Formation : De la Confusion à la Clarté
            </h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-300">
              Un parcours complet pour passer de spectateur à acteur de votre souveraineté financière islamique
            </p>
          </motion.div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 md:mb-12">
            {[
              {
                icon: AlertCircle,
                number: '01',
                title: 'Introduction et mise en perspective',
                points: ['Comprendre le Riba systémique', 'Histoire de la monnaie et de la dette', 'Pourquoi l\'euro/dollar ne sont pas neutres']
              },
              {
                icon: Zap,
                number: '02',
                title: 'Le problème monétaire et la naissance du Bitcoin',
                points: ['Qu\'est-ce que Bitcoin vraiment?', 'Différence entre Bitcoin et "crypto"', 'Pourquoi 21 millions est crucial']
              },
              {
                icon: BookOpen,
                number: '03',
                title: 'L\'ingéniosité de la solution proposée par Bitcoin',
                points: ['Les avis des savants sur Bitcoin', 'Bitcoin est-il halal?', 'Réfuter les objections communes']
              },
              {
                icon: Shield,
                number: '04',
                title: 'L\'analyse du prix et ce qu\'il révèle',
                points: ['Comment acheter du Bitcoin', 'Sécuriser vos Bitcoin (self-custody)', 'Utiliser Bitcoin au quotidien']
              },
              {
                icon: BookOpen,
                number: '05',
                title: 'Conformité du Bitcoin à la Shariah',
                points: ['Comprendre l\'alignement de Bitcoin à l\'éthique islamique', 'Ce qu\'est une monnaie saine en Islam', 'L\'histoire de la monnaie dans la civilisation musulmane', 'La divergence des avis contemporains']
              },
              {
                icon: Lock,
                number: '06',
                title: 'Maîtriser le stockage, l\'achat et l\'utilisation de Bitcoin',
                points: ['Comprendre les différents types de portefeuille', 'Les clés privées et publiques', 'L\'interaction avec le réseau Bitcoin et les meilleurs outils', 'L\'utilisation du réseau Lightning']
              }
            ].map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-navy-800/50 backdrop-blur-sm border border-bitcoin-500/30 rounded-xl p-4 sm:p-6 hover:border-bitcoin-500 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-bitcoin-500 to-bitcoin-600 rounded-xl flex items-center justify-center mb-4">
                  <module.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg sm:text-xl font-outfit font-bold text-white mb-3 md:mb-4">
                  Module {module.number}: {module.title}
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
            className="bg-navy-800/30 backdrop-blur-sm border border-bitcoin-500/20 rounded-2xl p-6 sm:p-8 mb-8 md:mb-12"
          >
            <h3 className="text-xl sm:text-2xl font-outfit font-bold text-white text-center mb-6 md:mb-8">
              Ce Qui Est Inclus
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Clock, text: '100% en ligne' },
                { icon: Lock, text: 'Accessible à vie' },
                { icon: Award, text: 'Certificat de fin de formation' },
                { icon: Users, text: 'Groupe Telegram privé' },
              ].map((feature, index) => (
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
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
          >
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-base sm:text-lg w-full sm:w-auto"
              >
                Rejoindre la prochaine session
              </motion.button>
            </a>
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-navy-900 transition-all duration-300 text-base sm:text-lg w-full sm:w-auto"
              >
                Voir le programme complet
              </motion.button>
            </a>
          </motion.div>
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
              <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-white mb-4">
                Formation Complète Bitcoin & Islam
              </h2>
              <div className="mb-8">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-bitcoin-400">500€</span>
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
      <section id="contact" className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-outfit font-bold text-navy-900 mb-6">
              Questions Fréquentes
            </h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card p-6"
              >
                <h3 className="font-bold text-navy-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Formation

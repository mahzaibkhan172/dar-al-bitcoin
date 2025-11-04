import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { AlertCircle, TrendingDown, Dices, Unlock } from 'lucide-react'

const ProblemSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const problems = [
    {
      icon: AlertCircle,
      title: 'Le Riba Invisible',
      description: 'La monnaie FIAT (euro, dollar) est basée sur le système de création monétaire par la dette = Riba systémique.',
      detail: 'Chaque euro dans votre poche contient du Riba à sa création même.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Dices,
      title: 'La Confusion Crypto',
      description: 'On vous a vendu "la crypto" comme un casino de spéculation.',
      detail: 'Résultat : Vous associez Bitcoin au gambling, aux shitcoins, aux arnaques... et vous passez à côté de la vraie révolution.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Unlock,
      title: 'La Solution Bitcoin',
      description: 'Bitcoin n\'est pas une crypto parmi d\'autres.',
      detail: 'C\'est une monnaie décentralisée, limitée (21M), sans autorité centrale = une monnaie qui ne peut pas être corrompue par le Riba.',
      color: 'from-bitcoin-500 to-bitcoin-600'
    }
  ]

  return (
    <section id="problem" ref={ref} className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-outfit font-bold text-navy-900 mb-6">
            Le Problème que Personne ne Vous Dit
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Vous pensez que le Bitcoin est juste une crypto parmi d'autres ?<br />
            <span className="text-bitcoin-500 font-semibold">C'est exactement ce que le système FIAT veut vous faire croire.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="card p-8 h-full border-2 border-transparent hover:border-bitcoin-400 transition-all duration-300">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 bg-gradient-to-br ${problem.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <problem.icon className="text-white" size={32} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                  {problem.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {problem.description}
                </p>

                {/* Detail */}
                <p className="text-gray-600 text-sm leading-relaxed italic border-l-4 border-bitcoin-400 pl-4">
                  {problem.detail}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link to="/formation">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg"
            >
              Comprendre pourquoi Bitcoin est différent
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSection

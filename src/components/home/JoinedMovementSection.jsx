import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, TrendingUp, Heart } from 'lucide-react'

const JoinedMovementSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    {
      icon: Users,
      number: '5000+',
      label: 'Membres actifs'
    },
    {
      icon: TrendingUp,
      number: '100+',
      label: 'Heures de contenu'
    },
    {
      icon: Heart,
      number: '98%',
      label: 'Satisfaction'
    }
  ]

  const testimonials = [
    {
      name: 'Ahmed M.',
      role: 'Entrepreneur',
      text: 'Enfin une explication claire de Bitcoin sans spéculation. Dar Al Bitcoin m\'a permis de comprendre les vrais enjeux.',
      avatar: '👨‍💼'
    },
    {
      name: 'Fatima K.',
      role: 'Étudiante',
      text: 'La formation est excellente. J\'ai appris comment protéger ma richesse de manière éthique et islamique.',
      avatar: '👩‍🎓'
    },
    {
      name: 'Hassan B.',
      role: 'Investisseur',
      text: 'Enfin une communauté qui parle de Bitcoin avec rigueur et éthique. C\'est exactement ce que je cherchais.',
      avatar: '👨‍💼'
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
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-navy-900 mb-6">
            Ils en parlent mieux que nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des milliers de personnes ont déjà commencé leur voyage vers la compréhension et la souveraineté financière
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-bitcoin-50 to-gold-50 rounded-xl border border-bitcoin-200"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-bitcoin-500 to-bitcoin-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-white" size={24} />
              </div>
              <p className="text-3xl font-outfit font-bold text-navy-900 mb-2">{stat.number}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-outfit font-bold text-navy-900 text-center mb-12">
            Ce qu'ils en disent
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="card p-8 border-2 border-transparent hover:border-bitcoin-400 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold text-navy-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold-500">★</span>
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-700 mb-6">
            Prêt à rejoindre la communauté ?
          </p>
          <a href="#formation" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-12 py-5"
            >
              Commencer maintenant
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default JoinedMovementSection

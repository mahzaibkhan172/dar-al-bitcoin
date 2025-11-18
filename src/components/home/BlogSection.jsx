import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Clock, User, ArrowRight } from 'lucide-react'

const BlogSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const posts = [
    {
      id: 1,
      category: 'Finance Islamique',
      categoryColor: 'bg-blue-500',
      title: 'Pourquoi la Banque Centrale est un Système de Riba',
      excerpt: 'La création monétaire moderne repose sur un mécanisme fondamentalement usuraire...',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
      author: 'Mohammed A.',
      readTime: '5 min',
      date: '15 Nov 2024'
    },
    {
      id: 2,
      category: 'Bitcoin & Islam',
      categoryColor: 'bg-bitcoin-500',
      title: 'Bitcoin et la Zakât : Comment Calculer l\'Aumône sur vos BTC',
      excerpt: 'Posséder du Bitcoin implique-t-il de payer la Zakât? Voici les réponses...',
      image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&q=80',
      author: 'Fatima L.',
      readTime: '7 min',
      date: '12 Nov 2024'
    },
    {
      id: 3,
      category: 'Actualités',
      categoryColor: 'bg-green-500',
      title: 'Pourquoi l\'Adoption de Bitcoin Accélère dans les Pays Musulmans',
      excerpt: 'De l\'Indonésie au Moyen-Orient, découvrez pourquoi Bitcoin séduit...',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
      author: 'Ahmed K.',
      readTime: '6 min',
      date: '10 Nov 2024'
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-outfit font-bold text-navy-900 mb-6">
            Nos Dernières Actualités
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Approfondissez votre compréhension avec nos analyses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <motion.article
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="card overflow-hidden group cursor-pointer"
              >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <span className={`absolute top-4 left-4 ${post.categoryColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-outfit font-bold text-navy-900 mb-3 group-hover:text-bitcoin-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="text-bitcoin-500 group-hover:translate-x-2 transition-transform" size={20} />
                </div>
              </div>
            </motion.article>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Voir toutes les actualités
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection

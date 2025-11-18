import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Clock, User, ArrowRight } from 'lucide-react'

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'Tous les articles' },
    { id: 'finance', name: 'Finance Islamique' },
    { id: 'bitcoin', name: 'Bitcoin & Islam' },
    { id: 'security', name: 'Sécurité & Souveraineté' },
    { id: 'news', name: 'Actualités Bitcoin' },
  ]

  const articles = [
    {
      id: 1,
      category: 'finance',
      categoryName: 'Finance Islamique',
      categoryColor: 'bg-blue-500',
      title: 'Pourquoi la Banque Centrale est un Système de Riba',
      excerpt: 'La création monétaire moderne repose sur un mécanisme fondamentalement usuraire. Découvrez comment chaque euro contient du Riba à sa création...',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
      author: 'Mohammed A.',
      date: '15 Nov 2024',
      readTime: '5 min',
      featured: true
    },
    {
      id: 2,
      category: 'bitcoin',
      categoryName: 'Bitcoin & Islam',
      categoryColor: 'bg-bitcoin-500',
      title: 'Bitcoin et la Zakât : Comment Calculer l\'Aumône sur vos BTC',
      excerpt: 'Posséder du Bitcoin implique-t-il de payer la Zakât? Voici les réponses basées sur les avis des savants...',
      image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&q=80',
      author: 'Fatima L.',
      date: '12 Nov 2024',
      readTime: '7 min'
    },
    {
      id: 3,
      category: 'news',
      categoryName: 'Actualités',
      categoryColor: 'bg-green-500',
      title: 'Pourquoi l\'Adoption de Bitcoin Accélère dans les Pays Musulmans',
      excerpt: 'De l\'Indonésie au Moyen-Orient, découvrez pourquoi Bitcoin séduit de plus en plus de musulmans...',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
      author: 'Ahmed K.',
      date: '10 Nov 2024',
      readTime: '6 min'
    },
    {
      id: 4,
      category: 'security',
      categoryName: 'Sécurité',
      categoryColor: 'bg-purple-500',
      title: 'Guide Complet : Acheter du Bitcoin Sans Riba',
      excerpt: 'Pas à pas, découvrez comment acquérir du Bitcoin de manière conforme aux principes islamiques...',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      author: 'Youssef M.',
      date: '8 Nov 2024',
      readTime: '10 min'
    },
    {
      id: 5,
      category: 'bitcoin',
      categoryName: 'Bitcoin & Islam',
      categoryColor: 'bg-bitcoin-500',
      title: 'Bitcoin vs l\'Or : Quel Est le Meilleur Selon l\'Islam?',
      excerpt: 'Comparaison approfondie entre Bitcoin et l\'or du point de vue de la Charia...',
      image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80',
      author: 'Mohammed A.',
      date: '5 Nov 2024',
      readTime: '8 min'
    },
    {
      id: 6,
      category: 'finance',
      categoryName: 'Finance Islamique',
      categoryColor: 'bg-blue-500',
      title: 'L\'Inflation: Le Vol Silencieux que l\'Islam Interdit',
      excerpt: 'Comment l\'inflation systémique constitue une forme de vol et pourquoi Bitcoin offre une alternative...',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
      author: 'Fatima L.',
      date: '2 Nov 2024',
      readTime: '6 min'
    }
  ]

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory
    const matchesSearch = searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredArticle = articles.find(a => a.featured)

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-outfit font-bold text-white mb-6">
              Actualités
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Analyses, réflexions et actualités sur Bitcoin et l'Islam
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher un article..."
                className="w-full px-6 py-4 pl-14 rounded-lg bg-navy-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bitcoin-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-bitcoin-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {activeCategory === 'all' && featuredArticle && (
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <Link to={`/blog/${featuredArticle.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="card overflow-hidden max-w-5xl mx-auto group cursor-pointer"
              >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-bitcoin-500 text-white text-xs font-bold px-4 py-2 rounded-full">
                    Article à la Une
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className={`inline-block ${featuredArticle.categoryColor} text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit`}>
                    {featuredArticle.categoryName}
                  </span>
                  <h2 className="text-3xl font-outfit font-bold text-navy-900 mb-4 group-hover:text-bitcoin-500 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User size={16} />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="text-bitcoin-500 group-hover:translate-x-2 transition-transform" size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                Aucun article trouvé
              </h3>
              <p className="text-gray-600 mb-8">
                Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setActiveCategory('all')
                }}
                className="btn-primary"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
              <Link key={article.id} to={`/blog/${article.id}`}>
                <motion.article
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="card overflow-hidden group cursor-pointer"
                >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <span className={`absolute top-4 left-4 ${article.categoryColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {article.categoryName}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-outfit font-bold text-navy-900 mb-3 group-hover:text-bitcoin-500 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="text-bitcoin-500 group-hover:translate-x-2 transition-transform" size={20} />
                  </div>
                </div>
              </motion.article>
              </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Blog

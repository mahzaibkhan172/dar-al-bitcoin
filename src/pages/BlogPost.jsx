import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { Clock, User, ArrowLeft, Share2, Calendar } from 'lucide-react'

const BlogPost = () => {
  const { id } = useParams()

  // Blog posts data (same as in Blog.jsx)
  const articles = [
    {
      id: 1,
      category: 'finance',
      categoryName: 'Finance Islamique',
      categoryColor: 'bg-blue-500',
      title: 'Pourquoi la Banque Centrale est un Système de Riba',
      excerpt: 'La création monétaire moderne repose sur un mécanisme fondamentalement usuraire. Découvrez comment chaque euro contient du Riba à sa création...',
      content: `
        <p>La création monétaire moderne constitue l'un des mécanismes les plus pernicieux du système financier actuel. Contrairement à ce que beaucoup pensent, l'argent n'est pas créé par l'État, mais par les banques commerciales à travers le processus de crédit.</p>
        
        <h3>Le Mécanisme de Création Monétaire</h3>
        <p>Lorsqu'une banque accorde un prêt, elle ne prête pas l'argent des déposants. Elle crée littéralement de l'argent ex nihilo, à partir de rien. Cette création monétaire s'accompagne automatiquement d'intérêts, ce qui signifie que chaque euro en circulation porte en lui une dette avec intérêts.</p>
        
        <h3>Le Riba Systémique</h3>
        <p>Cette mécanique constitue un Riba systémique car :</p>
        <ul>
          <li>L'argent est créé avec une dette automatique</li>
          <li>Les intérêts sont exigés sur de l'argent qui n'existe pas encore</li>
          <li>Le système force l'endettement perpétuel</li>
          <li>Il enrichit automatiquement les créanciers</li>
        </ul>
        
        <h3>La Solution Bitcoin</h3>
        <p>Bitcoin offre une alternative révolutionnaire en proposant une monnaie :</p>
        <ul>
          <li>Sans création par la dette</li>
          <li>Sans autorité centrale</li>
          <li>Avec une offre limitée et prévisible</li>
          <li>Basée sur la preuve de travail</li>
        </ul>
        
        <p>En adoptant Bitcoin, nous pouvons nous libérer de ce système usuraire et retrouver une monnaie saine, conforme aux principes islamiques.</p>
      `,
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
      content: `
        <p>La question de la Zakât sur Bitcoin est devenue cruciale avec l'adoption croissante de cette cryptomonnaie par les musulmans. Voici un guide complet basé sur les avis des savants contemporains.</p>
        
        <h3>Bitcoin est-il Soumis à la Zakât ?</h3>
        <p>La majorité des savants considèrent que Bitcoin est soumis à la Zakât car il constitue une forme de richesse (maal) qui peut être évaluée et échangée.</p>
        
        <h3>Méthodes de Calcul</h3>
        <p>Deux approches principales existent :</p>
        
        <h4>1. Assimilation à l'Or et l'Argent</h4>
        <ul>
          <li>Nisab : Équivalent de 85g d'or</li>
          <li>Taux : 2,5% de la valeur</li>
          <li>Condition : Possession pendant une année lunaire</li>
        </ul>
        
        <h4>2. Assimilation aux Biens Commerciaux</h4>
        <ul>
          <li>Évaluation à la valeur marchande</li>
          <li>Même taux de 2,5%</li>
          <li>Calcul annuel</li>
        </ul>
        
        <h3>Exemple Pratique</h3>
        <p>Si vous possédez 1 BTC d'une valeur de 40 000€ depuis plus d'un an :</p>
        <p>Zakât = 40 000€ × 2,5% = 1 000€</p>
        
        <h3>Recommandations</h3>
        <ul>
          <li>Consultez un savant qualifié</li>
          <li>Tenez un registre précis</li>
          <li>Calculez sur la valeur en monnaie locale</li>
          <li>Payez en Bitcoin ou en équivalent fiat</li>
        </ul>
      `,
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
      content: `
        <p>L'adoption de Bitcoin connaît une croissance remarquable dans les pays à majorité musulmane. Cette tendance s'explique par plusieurs facteurs convergents.</p>
        
        <h3>Les Facteurs d'Adoption</h3>
        
        <h4>1. Conformité aux Principes Islamiques</h4>
        <p>Bitcoin répond aux critères de la finance islamique :</p>
        <ul>
          <li>Absence de Riba (intérêts)</li>
          <li>Transparence totale</li>
          <li>Actif tangible et vérifiable</li>
          <li>Pas de spéculation excessive (Gharar)</li>
        </ul>
        
        <h4>2. Protection contre l'Inflation</h4>
        <p>Dans des pays comme la Turquie ou le Liban, Bitcoin offre une protection contre la dévaluation monétaire.</p>
        
        <h4>3. Inclusion Financière</h4>
        <p>Bitcoin permet l'accès aux services financiers sans passer par le système bancaire traditionnel.</p>
        
        <h3>Exemples par Région</h3>
        
        <h4>Moyen-Orient</h4>
        <ul>
          <li>EAU : Réglementation favorable</li>
          <li>Bahreïn : Hub crypto régional</li>
          <li>Arabie Saoudite : Investissements institutionnels</li>
        </ul>
        
        <h4>Asie du Sud-Est</h4>
        <ul>
          <li>Indonésie : Plus grande population musulmane</li>
          <li>Malaisie : Cadre réglementaire clair</li>
          <li>Brunei : Adoption gouvernementale</li>
        </ul>
        
        <h3>Défis et Opportunités</h3>
        <p>Malgré cette croissance, des défis subsistent :</p>
        <ul>
          <li>Éducation nécessaire</li>
          <li>Réglementation en évolution</li>
          <li>Infrastructure technique</li>
        </ul>
        
        <p>L'avenir semble prometteur pour Bitcoin dans le monde musulman, avec une adoption qui devrait continuer à s'accélérer.</p>
      `,
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
      author: 'Ahmed K.',
      date: '10 Nov 2024',
      readTime: '6 min'
    }
  ]

  const article = articles.find(a => a.id === parseInt(id))

  if (!article) {
    return (
      <div className="pt-24 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-outfit font-bold text-navy-900 mb-4">Article non trouvé</h1>
          <Link to="/blog" className="btn-primary">
            Retour au blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link to="/blog" className="inline-flex items-center text-bitcoin-500 hover:text-bitcoin-400 mb-6 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Retour aux actualités
            </Link>
            
            <span className={`inline-block ${article.categoryColor} text-white text-sm font-semibold px-4 py-2 rounded-full mb-6`}>
              {article.categoryName}
            </span>
            
            <h1 className="text-4xl md:text-6xl font-outfit font-bold text-white mb-6">
              {article.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-300 mb-8">
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>{article.readTime}</span>
              </div>
            </div>
            
            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: article.title,
                    text: article.excerpt,
                    url: window.location.href
                  })
                } else {
                  navigator.clipboard.writeText(window.location.href)
                  alert('Lien copié dans le presse-papiers!')
                }
              }}
              className="flex items-center space-x-2 text-bitcoin-500 hover:text-bitcoin-400 transition-colors"
            >
              <Share2 size={18} />
              <span>Partager l'article</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Share Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-outfit font-bold text-navy-900 mb-2">
                    Partager cet article
                  </h3>
                  <p className="text-gray-600">
                    Aidez-nous à diffuser ces connaissances
                  </p>
                </div>
                <button 
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: article.title,
                        text: article.excerpt,
                        url: window.location.href
                      })
                    } else {
                      navigator.clipboard.writeText(window.location.href)
                      alert('Lien copié dans le presse-papiers!')
                    }
                  }}
                  className="btn-primary"
                >
                  <Share2 size={20} className="mr-2" />
                  Partager
                </button>
              </div>
            </motion.div>

            {/* Back to Blog */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-12 text-center"
            >
              <Link to="/blog" className="btn-secondary">
                Voir plus d'articles
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPost
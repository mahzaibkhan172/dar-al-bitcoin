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
    },
    {
      id: 4,
      category: 'security',
      categoryName: 'Sécurité',
      categoryColor: 'bg-purple-500',
      title: 'Guide Complet : Acheter du Bitcoin Sans Riba',
      excerpt: 'Pas à pas, découvrez comment acquérir du Bitcoin de manière conforme aux principes islamiques...',
      content: `
        <p>Acheter du Bitcoin de manière conforme aux principes islamiques nécessite une approche réfléchie. Voici un guide complet pour éviter le Riba.</p>
        
        <h3>Méthodes Conformes à la Charia</h3>
        
        <h4>1. Achat Direct (Spot)</h4>
        <p>L'achat immédiat de Bitcoin contre de l'argent est généralement considéré comme halal :</p>
        <ul>
          <li>Échange immédiat</li>
          <li>Pas de crédit ou d'intérêts</li>
          <li>Possession réelle de l'actif</li>
        </ul>
        
        <h4>2. Plateformes Recommandées</h4>
        <ul>
          <li>Kraken (frais transparents)</li>
          <li>Bitstamp (régulé en Europe)</li>
          <li>Coinbase Pro (interface simple)</li>
        </ul>
        
        <h3>Méthodes à Éviter</h3>
        
        <h4>Trading sur Marge</h4>
        <p>Le trading avec effet de levier implique :</p>
        <ul>
          <li>Emprunt avec intérêts (Riba)</li>
          <li>Spéculation excessive (Gharar)</li>
          <li>Risque de perte supérieure à l'investissement</li>
        </ul>
        
        <h4>Contrats à Terme (Futures)</h4>
        <p>Problématiques car :</p>
        <ul>
          <li>Vente de ce qu'on ne possède pas</li>
          <li>Spéculation pure</li>
          <li>Pas de livraison réelle</li>
        </ul>
        
        <h3>Guide Pratique d'Achat</h3>
        
        <h4>Étape 1 : Choisir une Plateforme</h4>
        <p>Critères de sélection :</p>
        <ul>
          <li>Régulation claire</li>
          <li>Frais transparents</li>
          <li>Sécurité éprouvée</li>
          <li>Pas de services Riba</li>
        </ul>
        
        <h4>Étape 2 : Vérification d'Identité</h4>
        <p>Processus KYC (Know Your Customer) obligatoire pour la conformité réglementaire.</p>
        
        <h4>Étape 3 : Achat et Stockage</h4>
        <ul>
          <li>Achat immédiat (ordre au marché)</li>
          <li>Transfert vers wallet personnel</li>
          <li>Sauvegarde des clés privées</li>
        </ul>
        
        <h3>Stockage Sécurisé</h3>
        
        <h4>Hardware Wallets Recommandés</h4>
        <ul>
          <li>Ledger Nano S Plus</li>
          <li>Trezor Model T</li>
          <li>BitBox02</li>
        </ul>
        
        <p>Rappel : "Not your keys, not your Bitcoin" - La possession des clés privées est essentielle pour la vraie propriété.</p>
      `,
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
      content: `
        <p>La comparaison entre Bitcoin et l'or du point de vue islamique soulève des questions fascinantes sur la nature de la monnaie et de la valeur.</p>
        
        <h3>L'Or dans l'Islam</h3>
        
        <h4>Statut Traditionnel</h4>
        <p>L'or occupe une place spéciale dans l'Islam :</p>
        <ul>
          <li>Mentionné dans le Coran comme richesse</li>
          <li>Utilisé pour le calcul de la Zakât</li>
          <li>Réserve de valeur historique</li>
          <li>Protection contre l'inflation</li>
        </ul>
        
        <h4>Avantages de l'Or</h4>
        <ul>
          <li>Valeur intrinsèque reconnue</li>
          <li>Stabilité sur le long terme</li>
          <li>Acceptation universelle</li>
          <li>Tangibilité physique</li>
        </ul>
        
        <h4>Inconvénients de l'Or</h4>
        <ul>
          <li>Difficulté de transport</li>
          <li>Coûts de stockage</li>
          <li>Risque de vol</li>
          <li>Divisibilité limitée</li>
        </ul>
        
        <h3>Bitcoin dans l'Islam</h3>
        
        <h4>Statut Contemporain</h4>
        <p>Bitcoin présente des caractéristiques uniques :</p>
        <ul>
          <li>Rareté programmée (21 millions max)</li>
          <li>Transparence totale</li>
          <li>Décentralisation</li>
          <li>Résistance à la censure</li>
        </ul>
        
        <h4>Avantages de Bitcoin</h4>
        <ul>
          <li>Portabilité parfaite</li>
          <li>Divisibilité extrême (8 décimales)</li>
          <li>Transferts rapides</li>
          <li>Pas de confiscation possible</li>
          <li>Offre limitée et prévisible</li>
        </ul>
        
        <h4>Défis de Bitcoin</h4>
        <ul>
          <li>Volatilité à court terme</li>
          <li>Complexité technique</li>
          <li>Adoption encore limitée</li>
          <li>Consommation énergétique</li>
        </ul>
        
        <h3>Comparaison Islamique</h3>
        
        <h4>Critères de la Charia</h4>
        <table>
          <tr><th>Critère</th><th>Or</th><th>Bitcoin</th></tr>
          <tr><td>Rareté</td><td>✓ Naturelle</td><td>✓ Programmée</td></tr>
          <tr><td>Durabilité</td><td>✓ Physique</td><td>✓ Numérique</td></tr>
          <tr><td>Divisibilité</td><td>✓ Limitée</td><td>✓ Parfaite</td></tr>
          <tr><td>Portabilité</td><td>✗ Difficile</td><td>✓ Parfaite</td></tr>
          <tr><td>Vérifiabilité</td><td>✓ Tests</td><td>✓ Cryptographie</td></tr>
        </table>
        
        <h3>Conclusion</h3>
        
        <h4>Complémentarité</h4>
        <p>Plutôt que de choisir, une approche équilibrée peut inclure :</p>
        <ul>
          <li>Or pour la stabilité à long terme</li>
          <li>Bitcoin pour l'innovation et la croissance</li>
          <li>Diversification selon les objectifs</li>
        </ul>
        
        <h4>Perspective Islamique</h4>
        <p>Les deux actifs peuvent être considérés comme halal s'ils sont :</p>
        <ul>
          <li>Achetés sans Riba</li>
          <li>Détenus comme réserve de valeur</li>
          <li>Utilisés de manière éthique</li>
        </ul>
      `,
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
      content: `
        <p>L'inflation monétaire constitue l'une des formes les plus pernicieuses de vol dans nos sociétés modernes. L'Islam, avec sa vision holistique de la justice économique, nous éclaire sur cette problématique.</p>
        
        <h3>Qu'est-ce que l'Inflation?</h3>
        
        <h4>Définition Simple</h4>
        <p>L'inflation est la diminution du pouvoir d'achat de la monnaie au fil du temps. Concrètement :</p>
        <ul>
          <li>Ce qui coûtait 100€ en 2000 coûte 150€ aujourd'hui</li>
          <li>Votre épargne perd de la valeur chaque année</li>
          <li>Les salaires n'augmentent pas au même rythme</li>
        </ul>
        
        <h4>Les Causes de l'Inflation</h4>
        <p>L'inflation moderne provient principalement de :</p>
        <ul>
          <li>Création monétaire excessive</li>
          <li>Politique des banques centrales</li>
          <li>Système de réserves fractionnaires</li>
          <li>Dette publique croissante</li>
        </ul>
        
        <h3>L'Inflation comme Vol selon l'Islam</h3>
        
        <h4>Le Principe de Justice (‘Adl)</h4>
        <p>L'Islam exige la justice dans tous les échanges. L'inflation viole ce principe car :</p>
        <ul>
          <li>Elle transfert la richesse sans consentement</li>
          <li>Elle pénalise l'épargne et la prudence</li>
          <li>Elle enrichit les débiteurs au détriment des créanciers</li>
          <li>Elle crée des inégalités artificielles</li>
        </ul>
        
        <h4>Hadith sur la Monnaie</h4>
        <p>Le Prophète (paix et bénédictions sur lui) a dit : "Celui qui thesaurise est un pécheur", mais il parlait de la rétention de biens nécessaires, pas de la protection contre l'inflation.</p>
        
        <h3>Les Victimes de l'Inflation</h3>
        
        <h4>Les Plus Vulnérables</h4>
        <ul>
          <li>Retraités avec pensions fixes</li>
          <li>Salariés à revenus stables</li>
          <li>Épargnants prudents</li>
          <li>Pays en développement</li>
        </ul>
        
        <h4>Les Bénéficiaires</h4>
        <ul>
          <li>Gouvernements endettés</li>
          <li>Banques centrales</li>
          <li>Propriétaires d'actifs réels</li>
          <li>Emprunteurs à taux fixe</li>
        </ul>
        
        <h3>Bitcoin : Une Solution Islamique</h3>
        
        <h4>Monnaie Saine</h4>
        <p>Bitcoin offre les caractéristiques d'une monnaie saine :</p>
        <ul>
          <li>Offre limitée (21 millions maximum)</li>
          <li>Pas de création arbitraire</li>
          <li>Transparence totale</li>
          <li>Décentralisation</li>
        </ul>
        
        <h4>Protection contre l'Inflation</h4>
        <p>Historiquement, Bitcoin a servi de couverture contre l'inflation :</p>
        <ul>
          <li>Croissance de valeur à long terme</li>
          <li>Adoption croissante</li>
          <li>Réserve de valeur numérique</li>
          <li>Indépendance des politiques monétaires</li>
        </ul>
        
        <h3>Perspective Islamique sur Bitcoin</h3>
        
        <h4>Conformité aux Principes</h4>
        <p>Bitcoin respecte les principes islamiques :</p>
        <ul>
          <li>Pas de Riba (intérêts)</li>
          <li>Transparence (pas de Gharar)</li>
          <li>Justice dans les échanges</li>
          <li>Protection de la propriété privée</li>
        </ul>
        
        <h4>Action Recommandée</h4>
        <p>Pour se protéger de l'inflation de manière halal :</p>
        <ul>
          <li>Éducation sur Bitcoin</li>
          <li>Allocation progressive</li>
          <li>Stockage sécurisé</li>
          <li>Vision à long terme</li>
        </ul>
        
        <p>En conclusion, l'inflation constitue une forme de vol systémique que l'Islam condamne. Bitcoin offre une alternative éthique pour préserver la richesse et restaurer la justice monétaire.</p>
      `,
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
      author: 'Fatima L.',
      date: '2 Nov 2024',
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
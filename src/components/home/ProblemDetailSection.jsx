import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { AlertCircle, TrendingDown, Zap } from 'lucide-react'

const ProblemDetailSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-outfit font-bold text-navy-900 mb-8">
            Le problème dont personne ne vous parle
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Beaucoup veulent croire que le système monétaire actuel, aussi imparfait soit-il, peut être corrigé, adapté, "rendu plus éthique".
            </p>
            
            <p>
              On se dit qu'avec de bonnes intentions, de la rigueur et quelques ajustements, il serait possible de vivre en paix avec une économie fondée sur la dette et l'intérêt.
            </p>
            
            <p>
              Qu'en évitant les excès, on pourrait rester intègre.
            </p>
            
            <p className="text-xl font-semibold text-navy-900">
              Mais la réalité finit toujours par s'imposer : le problème n'est pas dans les abus du système, mais dans la nature même de la monnaie que nous utilisons.
            </p>
            
            <p className="text-xl font-semibold text-bitcoin-500">
              C'est là que réside le cœur du mal — un mal devenu invisible à force d'être normalisé.
            </p>
          </div>
        </motion.div>

        {/* Visible Symptoms */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-outfit font-bold text-navy-900 mb-8 flex items-center space-x-3">
            <TrendingDown className="text-red-500" size={32} />
            <span>Les symptômes visibles</span>
          </h3>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Le problème structurel se traduit par des conséquences que chacun peut constater au quotidien :
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex space-x-4">
              <span className="text-bitcoin-500 font-bold text-xl">•</span>
              <div>
                <p className="font-semibold text-navy-900">Inflation et perte de pouvoir d'achat</p>
                <p>Les prix grimpent, tandis que l'épargne fond comme neige au soleil.</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <span className="text-bitcoin-500 font-bold text-xl">•</span>
              <div>
                <p className="font-semibold text-navy-900">Endettement chronique</p>
                <p>Individus, entreprises et États vivent à crédit pour maintenir un niveau de vie ou financer leurs dépenses.</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <span className="text-bitcoin-500 font-bold text-xl">•</span>
              <div>
                <p className="font-semibold text-navy-900">Inégalités croissantes</p>
                <p>La richesse se concentre dans les mains de ceux qui contrôlent la création monétaire et ont accès au crédit.</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <span className="text-bitcoin-500 font-bold text-xl">•</span>
              <div>
                <p className="font-semibold text-navy-900">Spéculation et volatilité</p>
                <p>L'économie réelle est subordonnée aux mouvements financiers, souvent détachés de la valeur réelle.</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <span className="text-bitcoin-500 font-bold text-xl">•</span>
              <div>
                <p className="font-semibold text-navy-900">Précarité et insécurité économique</p>
                <p>La majorité des citoyens n'ont aucune autonomie face aux cycles de crise.</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <span className="text-bitcoin-500 font-bold text-xl">•</span>
              <div>
                <p className="font-semibold text-navy-900">Dépendance à une élite centrale</p>
                <p>Banques centrales et institutions financières dictent les règles, la population y est contrainte et perd toute souveraineté face à la répression financière.</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 p-6 bg-red-50 border-l-4 border-red-500 rounded-lg"
          >
            <p className="text-gray-700 leading-relaxed">
              Ces symptômes sont les signes d'un système malade : l'injustice et la fragilité ne sont pas des accidents, elles sont les conséquences directes de la structure de la monnaie.
            </p>
          </motion.div>
        </motion.div>

        {/* Invisible Riba */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-outfit font-bold text-navy-900 mb-8 flex items-center space-x-3">
            <AlertCircle className="text-bitcoin-500" size={32} />
            <span>Le Riba invisible</span>
          </h3>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              La vérité, c'est que le système financier moderne est fondamentalement en contradiction avec nos principes. Le riba (intérêt) n'y apparaît pas comme une erreur isolée, mais comme un pilier central :
            </p>

            <div className="space-y-3 ml-4">
              <div className="flex space-x-3">
                <span className="text-bitcoin-500 font-bold">•</span>
                <span>la monnaie est créée à partir de la dette, et non d'une valeur réelle,</span>
              </div>
              <div className="flex space-x-3">
                <span className="text-bitcoin-500 font-bold">•</span>
                <span>cette dette repose sur un riba systémique,</span>
              </div>
              <div className="flex space-x-3">
                <span className="text-bitcoin-500 font-bold">•</span>
                <span>et ce riba exige de nouvelles dettes pour être remboursé, gonflant sans cesse une bulle financière qui est vouée à s'effondrer.</span>
              </div>
            </div>

            <p>
              Ce système donne l'illusion de prospérité tout en générant injustice, dépendance et perte de sens.
            </p>

            <p className="text-xl font-semibold text-navy-900">
              Le problème n'est pas seulement économique : il est profondément spirituel.
            </p>

            <p className="text-lg font-semibold text-bitcoin-500">
              Tant que la monnaie reposera sur l'injustice, aucune réforme, aucun effort individuel, aucune bonne intention ne suffira à rendre le système sain et durable.
            </p>
          </div>

          {/* Quranic Verse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 bg-navy-900/5 border-l-4 border-gold-500 rounded-lg p-8"
          >
            <p className="arabic-text text-2xl md:text-3xl mb-4 leading-relaxed text-center">
              يَمْحَقُ اللَّهُ الرِّبَا وَيُرْبِي الصَّدَقَاتِ
            </p>
            <p className="text-center text-gray-700 text-lg italic mb-2">
              "Allah détruit le riba (intérêts) et fait prospérer les aumônes."
            </p>
            <p className="text-center text-gold-500 text-sm mb-4">(Sourate Al-Baqara, 2:276)</p>
            
            <div className="border-t border-gold-500/30 pt-6 mt-6">
              <p className="text-gray-700 mb-3">
                <span className="font-semibold">Hadith :</span> "Il viendra un temps où il ne restera personne qui ne mange le riba ; et celui qui ne le mange pas en sera atteint par sa poussière."
              </p>
              <p className="text-gray-600 text-sm">Sunan Ibn Majah n° 2278</p>
              
              <p className="arabic-text text-lg mt-4 leading-relaxed">
                « لَيَأْتِيَنَّ عَلَى النَّاسِ زَمَانٌ لاَ يَبْقَى مِنْهُمْ أَحَدٌ إِلاَّ أَكَلَ الرِّبَا فَمَنْ لَمْ يَأْكُلْهُ أَصَابَهُ مِنْ غُبَارِهِ »
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Crypto Confusion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-outfit font-bold text-navy-900 mb-8 flex items-center space-x-3">
            <Zap className="text-yellow-500" size={32} />
            <span>La confusion Crypto</span>
          </h3>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Depuis quelques années, on entend partout parler de "crypto" ou de "blockchain".
            </p>
            
            <p>
              Derrière ces mots à la mode se cache une vraie confusion qui cultive la spéculation et détourne de la révolution monétaire.
            </p>
            
            <p className="font-semibold text-navy-900">
              La plupart des projets crypto ne font que reproduire les mêmes mécanismes de spéculation et de dette que le système qu'ils prétendent remplacer :
            </p>

            <div className="space-y-3 ml-4">
              <div className="flex space-x-3">
                <span className="text-yellow-500 font-bold">•</span>
                <span>des promesses de gains rapides et irréalistes,</span>
              </div>
              <div className="flex space-x-3">
                <span className="text-yellow-500 font-bold">•</span>
                <span>des tokens créés sans création de valeur ou d'effort dépensé,</span>
              </div>
              <div className="flex space-x-3">
                <span className="text-yellow-500 font-bold">•</span>
                <span>des systèmes centralisés déguisés en "décentralisation",</span>
              </div>
              <div className="flex space-x-3">
                <span className="text-yellow-500 font-bold">•</span>
                <span>de la Finance Décentralisée qui s'appuie sur l'inflation et le riba.</span>
              </div>
            </div>

            <p>
              Pour beaucoup, crypto rime avec argent facile, et non avec justice économique ou liberté monétaire.
            </p>

            <p className="text-lg font-semibold text-navy-900">
              Cette confusion détourne l'attention du vrai enjeu : la nature de la monnaie et la manière dont elle peut être utilisée pour libérer ou asservir les individus.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 p-6 bg-bitcoin-50 border-l-4 border-bitcoin-500 rounded-lg"
            >
              <p className="text-lg text-navy-900 leading-relaxed">
                <span className="font-semibold">Bitcoin reste l'exception :</span> rare, s'appuyant sur un effort dans le monde réel, transparent et résistant à la censure, il réveille l'idée qu'une monnaie peut être autre chose qu'un outil de domination.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemDetailSection

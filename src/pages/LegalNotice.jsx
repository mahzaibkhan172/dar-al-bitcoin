import { motion } from 'framer-motion'

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-outfit font-bold text-navy-900 mb-8">
            Mentions Légales
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                Informations sur le site
              </h2>
              <p>
                Le site daralbitcoin.com est édité par Dar Al Bitcoin, une plateforme d'éducation et d'accompagnement dédiée à la compréhension de Bitcoin à travers le prisme de l'éthique islamique.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                Responsable de la publication
              </h2>
              <p>
                Responsable : Anas Skalesy<br />
                Email : daralbitcoin.pro@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                Hébergement
              </h2>
              <p>
                Le site est hébergé par Vercel, Inc.<br />
                Adresse : 340 S Lemon Ave, Walnut, CA 91789, USA
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                Propriété intellectuelle
              </h2>
              <p>
                Tous les contenus du site (textes, images, vidéos, etc.) sont la propriété exclusive de Dar Al Bitcoin ou de ses partenaires. Toute reproduction, distribution ou transmission sans autorisation préalable est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                Limitation de responsabilité
              </h2>
              <p>
                Les informations fournies sur ce site sont à titre informatif uniquement. Dar Al Bitcoin ne peut être tenu responsable des erreurs, omissions ou inexactitudes. Les utilisateurs utilisent les informations à leurs propres risques.
              </p>
              <p className="mt-4">
                Bitcoin et les cryptomonnaies comportent des risques. Consultez un professionnel avant de prendre toute décision financière.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                Liens externes
              </h2>
              <p>
                Dar Al Bitcoin n'est pas responsable du contenu des sites externes auxquels il renvoie. Les liens sont fournis à titre informatif.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                Données personnelles
              </h2>
              <p>
                Voir notre Politique de Confidentialité pour plus d'informations sur le traitement de vos données personnelles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                Droit applicable
              </h2>
              <p>
                Ces mentions légales sont régies par la loi française. Tout litige sera soumis aux tribunaux compétents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                Contact
              </h2>
              <p>
                Pour toute question concernant ces mentions légales :<br />
                Email : daralbitcoin.pro@gmail.com
              </p>
            </section>
          </div>

          <div className="mt-12 p-6 bg-bitcoin-50 border-l-4 border-bitcoin-500 rounded-lg">
            <p className="text-gray-700">
              <span className="font-semibold">Dernière mise à jour :</span> 2025
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default LegalNotice

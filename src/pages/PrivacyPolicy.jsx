import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-outfit font-bold text-navy-900 mb-8">
            Politique de Confidentialité
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                1. Introduction
              </h2>
              <p>
                Dar Al Bitcoin ("nous", "notre" ou "nos") s'engage à protéger votre vie privée. Cette Politique de Confidentialité explique comment nous collectons, utilisons, divulguons et sauvegardons vos informations lorsque vous visitez notre site web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                2. Informations que nous collectons
              </h2>
              <p>
                Nous collectons les informations que vous nous fournissez volontairement, notamment :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nom et adresse email (lors de l'inscription)</li>
                <li>Informations de contact (téléphone, adresse)</li>
                <li>Données de paiement (traitées de manière sécurisée)</li>
                <li>Commentaires et messages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                3. Utilisation de vos informations
              </h2>
              <p>
                Nous utilisons les informations collectées pour :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fournir et maintenir nos services</li>
                <li>Traiter vos transactions</li>
                <li>Vous envoyer des mises à jour et des communications (avec votre consentement)</li>
                <li>Améliorer notre site et nos services</li>
                <li>Respecter les obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                4. Partage de vos informations
              </h2>
              <p>
                Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles à des tiers, sauf :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Aux prestataires de services qui nous aident à exploiter notre site</li>
                <li>Lorsque la loi l'exige</li>
                <li>Avec votre consentement explicite</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                5. Sécurité de vos données
              </h2>
              <p>
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre l'accès non autorisé, la modification, la divulgation ou la destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                6. Cookies
              </h2>
              <p>
                Notre site utilise des cookies pour améliorer votre expérience utilisateur. Vous pouvez contrôler l'utilisation des cookies via les paramètres de votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                7. Vos droits
              </h2>
              <p>
                Vous avez le droit de :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accéder à vos données personnelles</li>
                <li>Corriger vos données inexactes</li>
                <li>Demander la suppression de vos données</li>
                <li>Vous opposer au traitement de vos données</li>
                <li>Retirer votre consentement à tout moment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                8. Modifications de cette politique
              </h2>
              <p>
                Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre. Les modifications seront publiées sur cette page avec une date de mise à jour.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                9. Nous contacter
              </h2>
              <p>
                Si vous avez des questions concernant cette Politique de Confidentialité, veuillez nous contacter à :
              </p>
              <p className="mt-4">
                Email : daralbitcoin.pro@gmail.com<br />
                Responsable : Anas Skalesy
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-outfit font-bold text-navy-900 mb-4">
                10. Conformité RGPD
              </h2>
              <p>
                Nous nous conformons au Règlement Général sur la Protection des Données (RGPD) de l'Union Européenne. Vos données sont traitées de manière légale, loyale et transparente.
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

export default PrivacyPolicy

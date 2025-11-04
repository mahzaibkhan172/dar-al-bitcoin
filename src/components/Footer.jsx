import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Send, MessageCircle, Twitter, Youtube, Instagram, Mail } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    navigation: [
      { name: 'Accueil', path: '/' },
      { name: 'Qui Sommes-Nous?', path: '/qui-sommes-nous' },
      { name: 'Formation', path: '/formation' },
      { name: 'Blog', path: '/blog' },
      { name: 'Événements', path: '/evenements' },
      { name: 'Contact', path: '/contact' },
    ],
    resources: [
      { name: 'Articles phares', path: '/blog' },
      { name: 'FAQ Bitcoin & Islam', path: '/faq' },
      { name: 'Livres recommandés', path: '/ressources' },
      { name: 'Outils Bitcoin', path: '/outils' },
      { name: 'Glossaire', path: '/glossaire' },
    ]
  }

  const socialLinks = [
    { icon: Send, name: 'Telegram', url: 'https://t.me/daralbitcoin' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/DarAlBitcoin' },
    { icon: Youtube, name: 'YouTube', url: 'https://youtube.com/@daralbitcoin' },
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com/daralbitcoin' },
  ]

  return (
    <footer className="bg-black text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-bitcoin-500 to-bitcoin-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">₿</span>
              </div>
              <div>
                <h3 className="font-outfit font-bold text-xl">Dar Al Bitcoin</h3>
              </div>
            </div>
            <p className="text-bitcoin-400 font-semibold mb-3">Libérez-vous du Riba, Adoptez Bitcoin</p>
            <p className="text-gray-400 text-sm mb-6">
              Éduquer la communauté musulmane sur Bitcoin comme solution au Riba systémique.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-bitcoin-500 transition-colors duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-outfit font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-bitcoin-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-outfit font-bold text-lg mb-6">Ressources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-bitcoin-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-outfit font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@daralbitcoin.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-bitcoin-400 transition-colors"
              >
                <Mail size={20} />
                <span>contact@daralbitcoin.com</span>
              </a>
              <a
                href="https://t.me/daralbitcoin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-bitcoin-400 transition-colors"
              >
                <MessageCircle size={20} />
                <span>Communauté Telegram</span>
              </a>
            </div>
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 bg-navy-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-bitcoin-500"
                />
                <button className="bg-bitcoin-500 px-4 py-2 rounded-r-lg hover:bg-bitcoin-600 transition-colors">
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2024 Dar Al Bitcoin. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/mentions-legales" className="hover:text-bitcoin-400 transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="hover:text-bitcoin-400 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

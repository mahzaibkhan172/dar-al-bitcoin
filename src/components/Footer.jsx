import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Send, MessageCircle, Twitter, Youtube, Instagram, Mail } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    navigation: [
      { name: 'Accueil', path: '/' },
      { name: 'Qui Sommes-Nous?', path: '/qui-sommes-nous' },
      { name: 'Formation', path: '/formation' },
      { name: 'Actualités', path: '/blog' },
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
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/Amgad_Khafagy' },
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com/dar.al.bitcoin' },
  ]

  return (
    <footer className="bg-black text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4 group cursor-pointer">
              <img 
                src="/logo.webp" 
                alt="Dar Al Bitcoin Logo" 
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div>
                <h3 className="font-outfit font-bold text-xl group-hover:text-bitcoin-400 transition-colors">Dar Al Bitcoin</h3>
              </div>
            </Link>
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

          {/* Column 2: Empty - Hidden on mobile */}
          <div className="hidden md:block"></div>

          {/* Column 3: Empty - Hidden on mobile */}
          <div className="hidden md:block"></div>

          {/* Column 4: Contact */}
          <div className="md:col-span-1">
            <h4 className="font-outfit font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:daralbitcoin.pro@gmail.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-bitcoin-400 transition-colors break-all"
              >
                <Mail size={20} className="flex-shrink-0" />
                <span className="text-sm">daralbitcoin.pro@gmail.com</span>
              </a>
              <a
                href="https://t.me/daralbitcoin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-bitcoin-400 transition-colors"
              >
                <MessageCircle size={20} className="flex-shrink-0" />
                <span>Communauté Telegram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2025 Dar Al Bitcoin. Tous droits réservés.</p>
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

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Qui Sommes-Nous?', path: '/qui-sommes-nous' },
    { name: 'Formation', path: '/formation' },
    { 
      name: 'Blog', 
      path: '/blog',
      dropdown: [
        { name: 'Finance Islamique', path: '/blog/finance-islamique' },
        { name: 'Bitcoin & Islam', path: '/blog/bitcoin-islam' },
        { name: 'Sécurité & Souveraineté', path: '/blog/securite' },
        { name: 'Actualités Bitcoin', path: '/blog/actualites' },
      ]
    },
    { name: 'Événements', path: '/evenements' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy-900 shadow-lg' : 'bg-navy-900/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-bitcoin-500 to-bitcoin-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-xl">₿</span>
            </div>
            <div>
              <h1 className="text-white font-outfit font-bold text-xl">Dar Al Bitcoin</h1>
              <p className="text-bitcoin-400 text-xs">Libérez-vous du Riba</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <button
                      className={`text-white hover:text-bitcoin-400 transition-colors duration-300 flex items-center space-x-1 ${
                        location.pathname.startsWith(link.path) ? 'text-bitcoin-400' : ''
                      }`}
                      onMouseEnter={() => setIsBlogDropdownOpen(true)}
                      onMouseLeave={() => setIsBlogDropdownOpen(false)}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {isBlogDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-navy-800 rounded-lg shadow-xl overflow-hidden"
                          onMouseEnter={() => setIsBlogDropdownOpen(true)}
                          onMouseLeave={() => setIsBlogDropdownOpen(false)}
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-4 py-3 text-white hover:bg-bitcoin-500 hover:text-white transition-colors duration-200"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-white hover:text-bitcoin-400 transition-colors duration-300 ${
                      location.pathname === link.path ? 'text-bitcoin-400' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link to="/formation" className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Commencer ma formation
            </motion.button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4"
            >
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-white hover:text-bitcoin-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 text-gray-300 hover:text-bitcoin-400 text-sm"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/formation" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="btn-primary w-full mt-4">
                  Commencer ma formation
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header

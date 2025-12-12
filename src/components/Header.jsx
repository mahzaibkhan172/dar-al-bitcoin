import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Qui sommes nous', path: '/qui-sommes-nous' },
    { name: 'Actualités', path: '/blog' },
    { name: 'Évènement', path: '/evenements' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy-900 shadow-lg' : 'bg-navy-900/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <img 
              src="/logo.webp" 
              alt="Dar Al Bitcoin Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain transform group-hover:scale-110 transition-transform duration-300"
            />
            <div>
              <h1 className="text-white font-outfit font-bold text-base sm:text-xl">Dar Al Bitcoin</h1>
              <p className="text-bitcoin-400 text-xs hidden sm:block">Libérez-vous du Riba</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-white hover:text-bitcoin-400 transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-bitcoin-400' : ''
                }`}
              >
                {link.name}
              </Link>
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
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-white hover:text-bitcoin-400 transition-colors"
                >
                  {link.name}
                </Link>
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

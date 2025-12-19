import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Formation from './pages/Formation'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Events from './pages/Events'
import LegalNotice from './pages/LegalNotice'
import PrivacyPolicy from './pages/PrivacyPolicy'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qui-sommes-nous" element={<About />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/evenements" element={<Events />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

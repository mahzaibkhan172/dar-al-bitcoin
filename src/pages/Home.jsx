import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle, Lock, Globe, Users, BookOpen, Shield, TrendingUp, AlertCircle, Zap, Award, Calendar, ArrowRight, Star } from 'lucide-react'
import HeroSection from '../components/home/HeroSection'
import ProblemSection from '../components/home/ProblemSection'
import ComparisonSection from '../components/home/ComparisonSection'
import BlogSection from '../components/home/BlogSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import NewsletterSection from '../components/home/NewsletterSection'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <ComparisonSection />
      <BlogSection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  )
}

export default Home

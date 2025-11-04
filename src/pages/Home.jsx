import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle, Lock, Globe, Users, BookOpen, Shield, TrendingUp, AlertCircle, Zap, Award, Calendar, ArrowRight, Star } from 'lucide-react'
import HeroSection from '../components/home/HeroSection'
import ProblemSection from '../components/home/ProblemSection'
import ComparisonSection from '../components/home/ComparisonSection'
import WhyUsSection from '../components/home/WhyUsSection'
import TrainingSection from '../components/home/TrainingSection'
import BlogSection from '../components/home/BlogSection'
import EventsSection from '../components/home/EventsSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import NewsletterSection from '../components/home/NewsletterSection'
import FinalCTA from '../components/home/FinalCTA'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <ComparisonSection />
      <WhyUsSection />
      <TrainingSection />
      <BlogSection />
      <EventsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <FinalCTA />
    </div>
  )
}

export default Home

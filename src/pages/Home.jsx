import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSection from '../components/home/HeroSection'
import ProblemSection from '../components/home/ProblemSection'
import JoinedMovementSection from '../components/home/JoinedMovementSection'
import BlogSection from '../components/home/BlogSection'
import TestimonialsSection from '../components/home/TestimonialsSection'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <JoinedMovementSection />
      <BlogSection />
      <TestimonialsSection />
    </div>
  )
}

export default Home

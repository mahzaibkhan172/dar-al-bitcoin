import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import ProblemDetailSection from '../components/home/ProblemDetailSection'
import ProblemSection from '../components/home/ProblemSection'
import ComparisonSection from '../components/home/ComparisonSection'
import JoinedMovementSection from '../components/home/JoinedMovementSection'
import FormationSection from '../components/home/FormationSection'
import BlogSection from '../components/home/BlogSection'
import TestimonialsSection from '../components/home/TestimonialsSection'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ProblemDetailSection />
      <ProblemSection />
      <ComparisonSection />
      <JoinedMovementSection />
      <FormationSection />
      <BlogSection />
      <TestimonialsSection />
    </div>
  )
}

export default Home

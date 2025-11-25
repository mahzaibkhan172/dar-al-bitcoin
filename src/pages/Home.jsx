import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSection from '../components/home/HeroSection'
import ProblemSection from '../components/home/ProblemSection'
import ComparisonSection from '../components/home/ComparisonSection'
import JoinedMovementSection from '../components/home/JoinedMovementSection'
import FormationSection from '../components/home/FormationSection'
import LearningExamplesSection from '../components/home/LearningExamplesSection'
import BlogSection from '../components/home/BlogSection'
import TestimonialsSection from '../components/home/TestimonialsSection'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <ComparisonSection />
      <JoinedMovementSection />
      <FormationSection />
      <LearningExamplesSection />
      <BlogSection />
      <TestimonialsSection />
    </div>
  )
}

export default Home

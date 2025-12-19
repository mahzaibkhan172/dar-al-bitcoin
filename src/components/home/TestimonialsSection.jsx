import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const TestimonialsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      text: "Dar Al Bitcoin m'a ouvert les yeux sur le problème du Riba dans notre système monétaire. Je comprends maintenant pourquoi Bitcoin est une solution et non une spéculation.",
      author: 'Ahmed K.',
      role: 'Entrepreneur',
      rating: 5
    },
    {
      text: "J'avais une vision casino de la crypto. Cette formation m'a montré la différence fondamentale entre Bitcoin et le reste. C'est un game changer pour moi en tant que musulman.",
      author: 'Fatima L.',
      role: 'Professionnelle en finance',
      rating: 5
    },
    {
      text: "Enfin une ressource sérieuse qui traite de Bitcoin avec une perspective islamique claire et sans compromis. Merci Dar Al Bitcoin!",
      author: 'Youssef M.',
      role: 'Étudiant',
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-outfit font-bold text-navy-900 mb-6">
            Ils en parlent mieux que nous
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-12 text-center relative overflow-hidden"
          >
            {/* Quote marks */}
            <div className="absolute top-8 left-8 text-bitcoin-500/20 text-8xl font-serif">"</div>
            <div className="absolute bottom-8 right-8 text-bitcoin-500/20 text-8xl font-serif">"</div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-bitcoin-500 fill-bitcoin-500" size={24} />
                ))}
              </div>

              {/* Text */}
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed italic">
                {testimonials[currentIndex].text}
              </p>

              {/* Author */}
              <div>
                <p className="text-bitcoin-400 font-bold text-lg">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-gray-400">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center text-white hover:bg-bitcoin-500 transition-colors"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center text-white hover:bg-bitcoin-500 transition-colors"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-bitcoin-500 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

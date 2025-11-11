import { Button } from "./ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArtisticBackground, FloatingElement } from "./ArtisticBackground";
import { motion } from "motion/react";
import holographicImage from 'figma:asset/c198aaf2b673adc933bbe626ad34624e707f307e.png';

interface HeroProps {
  onLoginClick?: () => void;
}

export function Hero({ onLoginClick }: HeroProps) {
  return (
    <section id="home" className="w-full min-h-screen  items-center relative overflow-hidden">
      <ArtisticBackground variant="hero">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Additional cosmic elements specific to hero */}
        <FloatingElement delay={1} className="top-32 left-10" size="w-4 h-4" color="bg-yellow-300/40 shadow-yellow-300/30" type="star" />
        <FloatingElement delay={3} className="top-20 right-20" size="w-6 h-6" color="bg-gradient-to-r from-emerald-400/30 to-teal-400/25" type="planet" />
        <FloatingElement delay={5} className="bottom-32 left-20" size="w-3 h-3" color="bg-pink-300/50 shadow-pink-300/40" type="comet" />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center space-x-2 mb-4"
              >
                <Sparkles className="w-6 h-6 text-yellow-500" />
                <span className="text-sm font-medium text-cyan-200 uppercase tracking-wider">Transform Your Life</span>
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl leading-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Your journey to
                <motion.span 
                  className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                > mental wellness</motion.span> starts here
              </motion.h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                Professional, compassionate mental health support tailored to your unique needs. Take the first step towards a healthier, happier you.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {[
                "Licensed & experienced therapists",
                "Confidential & secure sessions",
                "Flexible scheduling options",
                "Insurance accepted"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/20 hover:text-white hover:border-cyan-300 backdrop-blur-sm transition-all duration-300"
                onClick={onLoginClick}
              >
                Login / Sign Up
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-600/30">
              <p className="text-sm text-gray-300 mb-4">Trusted by over 10,000 clients</p>
              <div className="flex space-x-8 text-sm text-gray-300">
                <div>⭐⭐⭐⭐⭐ <span className="ml-1">4.9/5 rating</span></div>
                <div>🔒 <span className="ml-1">100% confidential</span></div>
                <div>📅 <span className="ml-1">Same-day appointments</span></div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="lg:order-last"
            initial={{ opacity: 0, x: 50, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/40 to-purple-500/40 rounded-3xl transform"
                animate={{ rotate: [6, -2, 6] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-violet-400/30 to-pink-400/30 rounded-3xl transform"
                animate={{ rotate: [-4, 8, -4] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              <motion.div 
                className="relative bg-white rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={holographicImage}
                  alt="Holographic 3D wellness visualization"
                  className="w-full h-[500px] object-cover"
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <p className="text-white text-sm opacity-90">Transformative holographic wellness experience</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      </ArtisticBackground>
    </section>
  );
}
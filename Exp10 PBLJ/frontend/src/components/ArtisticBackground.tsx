import { motion } from "motion/react";

interface FloatingElementProps {
  delay?: number;
  duration?: number;
  size?: string;
  color?: string;
  className?: string;
}

export function FloatingElement({ delay = 0, duration = 20, size = "w-4 h-4", color = "bg-blue-400/10", className = "" }: FloatingElementProps) {
  return (
    <motion.div
      className={`absolute rounded-full ${size} ${color} ${className}`}
      animate={{
        y: [-20, -100, -20],
        x: [-10, 10, -10],
        rotate: [0, 180, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

export function GradientOrb({ className = "", size = "w-64 h-64", color = "from-blue-400/30 to-purple-400/30" }: { className?: string; size?: string; color?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-br ${color} blur-3xl ${size} ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function GeometricPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        className="absolute inset-0"
      >
        <defs>
          <pattern
            id="geometric-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="50,10 90,35 90,75 50,100 10,75 10,35"
              fill="none"
              stroke="rgba(147, 197, 253, 0.2)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
      </svg>
      
      {/* Animated lines */}
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        className="absolute inset-0"
      >
        <motion.path
          d="M0,300 Q250,200 500,300 T1000,300"
          fill="none"
          stroke="rgba(251, 191, 36, 0.15)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M0,700 Q250,600 500,700 T1000,700"
          fill="none"
          stroke="rgba(139, 92, 246, 0.12)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.svg>
    </div>
  );
}

export function ArtisticBackground({ children, variant = "hero" }: { children: React.ReactNode; variant?: "hero" | "section" | "dark" }) {
  const variants = {
    hero: "bg-gradient-to-br from-black via-slate-900 to-purple-900/90",
    section: "bg-gradient-to-br from-black/95 via-slate-900/90 to-purple-900/95",
    dark: "bg-gradient-to-br from-black via-gray-900 to-purple-900/80"
  };

  return (
    <div className={`relative overflow-hidden ${variants[variant]}`}>
      {/* Gradient Orbs */}
      <GradientOrb className="top-10 left-10" color="from-blue-500/30 to-cyan-300/20" />
      <GradientOrb className="top-32 right-20" size="w-48 h-48" color="from-purple-500/25 to-pink-400/20" />
      <GradientOrb className="bottom-20 left-32" size="w-80 h-80" color="from-indigo-500/15 to-violet-400/10" />
      
      {/* Floating Elements */}
      <FloatingElement delay={0} className="top-20 left-1/4" size="w-3 h-3" color="bg-yellow-300/60 shadow-yellow-300/50" />
      <FloatingElement delay={2} className="top-40 right-1/3" size="w-2 h-2" color="bg-blue-300/50 shadow-blue-300/40" />
      <FloatingElement delay={4} className="top-60 left-1/2" size="w-4 h-4" color="bg-gradient-to-r from-orange-400/40 to-red-400/30" />
      <FloatingElement delay={6} className="bottom-40 right-1/4" size="w-3 h-3" color="bg-purple-300/60" />
      
      {/* Geometric Pattern */}
      <GeometricPattern />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
    </div>
  );
}
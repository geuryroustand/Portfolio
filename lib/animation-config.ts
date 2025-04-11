// Central configuration for animations throughout the site
export const animationConfig = {
  // Timing (in ms)
  timing: {
    fast: 200,
    medium: 300,
    slow: 500,
    extraSlow: 800,
  },

  // Easing functions
  easing: {
    // Standard easing
    standard: [0.4, 0, 0.2, 1], // Material Design standard easing
    decelerate: [0, 0, 0.2, 1], // Deceleration curve (fast to slow)
    accelerate: [0.4, 0, 1, 1], // Acceleration curve (slow to fast)
    sharp: [0.4, 0, 0.6, 1], // Sharp curve for emphasis

    // CSS easing strings (for Tailwind transitions)
    css: {
      standard: "cubic-bezier(0.4, 0, 0.2, 1)",
      decelerate: "cubic-bezier(0, 0, 0.2, 1)",
      accelerate: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },

  // Animation variants for Framer Motion
  variants: {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
    staggerChildren: {
      visible: { transition: { staggerChildren: 0.1 } },
    },
  },

  // Default transition settings
  defaultTransition: {
    duration: 0.3, // 300ms
    ease: [0.4, 0, 0.2, 1], // Standard easing
  },
}

// Helper function to get transition with reduced motion support
export const getTransition = (prefersReducedMotion: boolean, customTransition = {}) => {
  if (prefersReducedMotion) {
    return { duration: 0 }
  }

  return {
    ...animationConfig.defaultTransition,
    ...customTransition,
  }
}

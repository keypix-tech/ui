export const animations = {
  // Fade animations
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: 200,
  },
  fadeOut: {
    from: { opacity: 1 },
    to: { opacity: 0 },
    duration: 200,
  },
  
  // Slide animations
  slideInFromTop: {
    from: { transform: 'translateY(-100%)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    duration: 300,
  },
  slideInFromBottom: {
    from: { transform: 'translateY(100%)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    duration: 300,
  },
  slideInFromLeft: {
    from: { transform: 'translateX(-100%)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
    duration: 300,
  },
  slideInFromRight: {
    from: { transform: 'translateX(100%)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
    duration: 300,
  },
  
  // Scale animations
  scaleIn: {
    from: { transform: 'scale(0.95)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
    duration: 200,
  },
  scaleOut: {
    from: { transform: 'scale(1)', opacity: 1 },
    to: { transform: 'scale(0.95)', opacity: 0 },
    duration: 200,
  },
  
  // Bounce animations
  bounce: {
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.05)' },
    duration: 100,
  },
  
  // Shake animation
  shake: {
    from: { transform: 'translateX(0)' },
    to: [
      { transform: 'translateX(-5px)' },
      { transform: 'translateX(5px)' },
      { transform: 'translateX(-5px)' },
      { transform: 'translateX(0)' },
    ],
    duration: 400,
  },
  
  // Pulse animation
  pulse: {
    from: { opacity: 1 },
    to: { opacity: 0.5 },
    duration: 1000,
    repeat: Infinity,
    repeatType: 'reverse',
  },
  
  // Spin animation
  spin: {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
    duration: 1000,
    repeat: Infinity,
  },
} as const

export const transitions = {
  fast: '150ms ease-in-out',
  normal: '250ms ease-in-out',
  slow: '350ms ease-in-out',
  bounce: '250ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  elastic: '400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
} as const 
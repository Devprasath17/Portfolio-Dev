export const pageTransition = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
  exit: { opacity: 0, y: -24, transition: { duration: 0.45, ease: 'easeInOut' } }
};

export const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.78, ease: 'easeOut' } }
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.14 } }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: 'easeOut' } }
};

export const fadeInDelay = (delay = 0.2) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: 'easeOut', delay } }
});

export const floatPulse = {
  initial: { y: 0, rotate: 0 },
  animate: { y: [0, -12, 0], rotate: [0, 1, 0], transition: { duration: 6.2, repeat: Infinity, ease: 'easeInOut' } }
};

export const hoverLift = {
  hover: { y: -8, scale: 1.02, boxShadow: '0 28px 60px rgba(255, 85, 69, 0.16)' },
  tap: { scale: 0.98 }
};

export const buttonTap = {
  hover: { scale: 1.03 },
  tap: { scale: 0.96 }
};

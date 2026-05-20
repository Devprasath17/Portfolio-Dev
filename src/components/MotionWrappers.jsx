import { motion } from 'framer-motion';
import { hoverLift, sectionReveal, staggerContainer } from '../utils/animations';

export function SectionReveal({ className = '', children, ...props }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function StaggeredSection({ className = '', children, ...props }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function MotionCard({ className = '', children, ...props }) {
  return (
    <motion.div
      whileHover="hover"
      whileTap="tap"
      variants={hoverLift}
      transition={{ type: 'spring', stiffness: 210, damping: 22 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

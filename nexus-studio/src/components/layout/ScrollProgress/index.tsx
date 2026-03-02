"use client";

import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import styles from './scroll-progress.module.css';

export default function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      className={styles.progress}
      style={{ scaleX, opacity: 1 }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progresso de rolagem"
    />
  );
}

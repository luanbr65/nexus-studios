"use client";

import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './scroll-progress.module.css';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  return <motion.div className={styles.progress} style={{ scaleX }} />;
}

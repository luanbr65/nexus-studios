"use client";

import { motion } from 'framer-motion';
import styles from './techstrip.module.css';
import { useAnimate } from '@/hooks/useAnimate';

const techs = ['NEXT.JS', 'REACT', 'TYPESCRIPT', 'VERCEL', 'NODE.JS', 'AWS'] as const;
const marqueeTechs = [...techs, ...techs];

type Tech = typeof techs[number];

export default function TechStrip() {
  const { shouldReduceMotion } = useAnimate();

  return (
    <motion.div
      className={styles.strip}
      initial={shouldReduceMotion ? {} : { opacity: 0 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <span className={styles.label}>Powered by:</span>
        <div className={styles.marquee}>
          <div className={styles.list}>
            {marqueeTechs.map((tech, index) => (
              <span key={`${tech}-${index}`} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from 'framer-motion';
import styles from './techstrip.module.css';
import { useAnimate } from '@/hooks/useAnimate';

const strips = [
  'Next.js',
  'React',
  'TypeScript',
  'Design systems',
  'Automation',
  'Operational dashboards',
  'Conversion flows',
  'Vercel',
] as const;

const marqueeItems = [...strips, ...strips];

export default function TechStrip() {
  const { shouldReduceMotion } = useAnimate();

  return (
    <motion.section
      className={styles.strip}
      initial={shouldReduceMotion ? {} : { opacity: 0 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <div className={styles.lead}>
          <span className={styles.label}>Camadas que costumamos integrar</span>
          <strong>produto, identidade, interface e operacao</strong>
        </div>

        <div className={styles.marquee}>
          <div className={styles.list}>
            {marqueeItems.map((item, index) => (
              <span key={`${item}-${index}`} className={styles.tech}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

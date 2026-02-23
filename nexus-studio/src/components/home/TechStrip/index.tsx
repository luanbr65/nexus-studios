"use client";

import { motion } from 'framer-motion';
import styles from './techstrip.module.css';

export default function TechStrip() {
  const techs = ['NEXT.JS', 'REACT', 'TYPESCRIPT', 'VERCEL', 'NODE.JS', 'AWS'];
  const marqueeTechs = [...techs, ...techs];

  return (
    <motion.div
      className={styles.strip}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <span className={styles.label}>Powered by:</span>
        <div className={styles.marquee}>
          <div className={styles.list}>
            {marqueeTechs.map((tech, index) => (
              <span key={`${tech}-${index}`} className={styles.tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

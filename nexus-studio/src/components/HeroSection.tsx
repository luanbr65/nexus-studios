'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.h1 
          className={styles.headline}
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          Construímos produtos digitais que fazem seu projeto{' '}
          <span className={styles.highlight}>
            crescer, converter e ser lembrado.
          </span>
        </motion.h1>

        <motion.p 
          className={styles.subheadline}
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4 }}
        >
          A Nexus Studio funde engenharia de software complexa com design de vanguarda. 
          Não fazemos sites, construímos ecossistemas digitais.
        </motion.p>

        <motion.button
          className={styles.mainCta}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Quero lançar meu projeto com o Nexus
          <ArrowRight size={18} />
        </motion.button>
      </div>
    </section>
  );
}

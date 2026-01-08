'use client';

import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={styles.header}
    >
      <div className={styles.navContainer}>
        {/* Logo */}
        <motion.a
          href="#"
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Brain className="w-6 h-6" style={{ marginRight: '8px' }} />
          nexus studio
        </motion.a>

        {/* Navigation Links */}
        <nav className={styles.navLinks}>
          {['services', 'cases', 'about'].map((link, index) => (
            <motion.a
              key={link}
              href={`#${link}`}
              className={styles.link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -2 }}
            >
              {link}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.button
          className={styles.ctaButton}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
        </motion.button>
      </div>
    </motion.header>
  );
}

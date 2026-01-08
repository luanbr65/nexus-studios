'use client';

import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={styles.nav}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo */}
          <motion.a
            href="#"
            className={styles.logo}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className={styles.logoIcon}>
              <Brain className="w-5 h-5" />
            </div>
            <span>nexus studio</span>
          </motion.a>

          {/* Navigation Links */}
          <div className={styles.navLinks}>
            {['services', 'cases', 'about'].map((link, index) => (
              <motion.a
                key={link}
                href={`#${link}`}
                className={styles.navLink}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -2 }}
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            className={styles.ctaBtn}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

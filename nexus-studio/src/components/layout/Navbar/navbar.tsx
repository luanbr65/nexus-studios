"use client";

import { motion } from 'framer-motion';
import styles from './navbar.module.css';

const links = [
  { href: '#services', label: 'Expertise' },
  { href: '#cases', label: 'Projetos' },
  { href: '#footer', label: 'Contato' },
];

export default function Navbar() {
  return (
    <motion.nav
      className={styles.nav}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <motion.a href="#top" className={styles.logo} whileHover={{ letterSpacing: '0.06em' }}>
          Nexus Studio.
        </motion.a>
        <ul className={styles.menu}>
          {links.map((link, index) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + index * 0.08 }}
            >
              <a href={link.href} className={styles.link}>{link.label}</a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

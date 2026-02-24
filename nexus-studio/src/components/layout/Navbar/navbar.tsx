"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { MOTION_TRANSITION, fadeUp } from '@/lib/motion';
import styles from './navbar.module.css';

const links = [
  { href: '#services', label: 'Expertise' },
  { href: '#cases', label: 'Projetos' },
  { href: '#footer', label: 'Contato' },
];

export default function Navbar() {
  const shouldReduceMotion = useReducedMotion();
  const navVariants = fadeUp(18);

  return (
    <motion.nav
      className={styles.nav}
      initial={shouldReduceMotion ? false : 'hidden'}
      animate={shouldReduceMotion ? undefined : 'show'}
      variants={navVariants}
      transition={MOTION_TRANSITION}
    >
      <div className={styles.container}>
        <motion.a
          href="#top"
          className={styles.logo}
          whileHover={shouldReduceMotion ? undefined : { y: -1 }}
          transition={MOTION_TRANSITION}
        >
          Nexus Studio.
        </motion.a>
        <ul className={styles.menu}>
          {links.map((link, index) => (
            <motion.li
              key={link.href}
              initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : { ...MOTION_TRANSITION, delay: 0.08 + index * 0.05 }
              }
            >
              <a href={link.href} className={styles.link}>{link.label}</a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

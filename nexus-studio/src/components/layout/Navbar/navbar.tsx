"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimate } from '@/hooks/useAnimate';
import DarkModeToggle from '@/components/DarkModeToggle';
import styles from './navbar.module.css';

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: '#services', label: 'Expertise' },
  { href: '#cases', label: 'Projetos' },
  { href: '#footer', label: 'Contato' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { shouldReduceMotion, listItem } = useAnimate();

  const toggleMenu = () => setMenuOpen((open) => !open);

  // close menu when escape pressed
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [menuOpen]);

  return (
    <motion.nav
      className={styles.nav}
      role="navigation"
      aria-label="Principal"
      initial={shouldReduceMotion ? false : 'hidden'}
      animate={shouldReduceMotion ? undefined : 'show'}
      variants={shouldReduceMotion ? undefined : { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
      transition={shouldReduceMotion ? undefined : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.container}>
        <motion.a
          href="#top"
          className={styles.logo}
          whileHover={shouldReduceMotion ? undefined : { y: -1 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.2 }}
        >
          Nexus Studio.
        </motion.a>
        <div className={styles.toggleWrapper}>
          <DarkModeToggle />
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          onClick={toggleMenu}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={styles.menu} id="nav-menu">
          {links.map((link, index) => (
            <motion.li key={link.href} {...listItem(index)}>
              <a href={link.href} className={styles.link} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}> 
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

import styles from './navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>Nexus Studio.</div>
        <ul className={styles.menu}>
          <li><Link href="/" className={styles.link}>Expertise</Link></li>
          <li><Link href="/" className={styles.link}>Projetos</Link></li>
          <li><Link href="/" className={styles.link}>Contato</Link></li>
        </ul>
      </div>
    </nav>
  );
}

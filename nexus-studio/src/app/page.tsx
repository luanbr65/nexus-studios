import styles from './page.module.css';
import Navbar from '../components/layout/Navbar/navbar';
import Hero from '../components/home/Hero/hero';
import TechStrip from '../components/home/TechStrip';
import Services from '../components/home/Services';
import Projects from '../components/home/Projects';

export default function Home() {
  return (
    <main>
      <Navbar />
      
      <Hero />

      <TechStrip />

      <Services />

      <Projects />

      {/* Footer */}
      <footer className={styles.footer}>
        <div>
            <span className={styles.footerLogo}>NEXUS STUDIO</span>
            <p className={styles.footerCopy}>© 2024 Digital Engineering.</p>
        </div>
        <div className={styles.socialIcons}>
          <span className={styles.socialIcon}>IG</span>
          <span className={styles.socialIcon}>LI</span>
          <span className={styles.socialIcon}>GH</span>
        </div>
      </footer>
    </main>
  );
}

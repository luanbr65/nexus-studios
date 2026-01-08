import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Parte de Cima: Marca e Links */}
        <div className={styles.topSection}>
          <div className={styles.brandBlock}>
            <span className={styles.logo}>NEXUS STUDIO.</span>
            <p className={styles.tagline}>
              Engenharia de software focada em performance e solidez. 
              Construímos a infraestrutura do seu crescimento.
            </p>
          </div>

          <div className={styles.linksBlock}>
            <div className={styles.linkGroup}>
              <span className={styles.groupTitle}>Social</span>
              
              {/* GitHub */}
              <Link 
                href="https://github.com/luanbr65" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
              >
                GitHub
              </Link>
              
              {/* Instagram */}
              <Link 
                href="https://www.instagram.com/luan_78/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
              >
                Instagram
              </Link>
              
              {/* LinkedIn (Deixei placeholder, se tiver manda que eu coloco) */}
              <Link href="#" className={styles.link}>LinkedIn</Link>
            </div>

            <div className={styles.linkGroup}>
              <span className={styles.groupTitle}>Contato</span>
              <a href="mailto:contato@nexusstudio.com" className={styles.link}>contato@nexus.studio</a>
              <span className={styles.link}>São Paulo, BR</span>
            </div>
          </div>
        </div>

        {/* Parte de Baixo: Copyright e Status */}
        <div className={styles.bottomSection}>
          <span className={styles.copy}>
            &copy; {currentYear} Nexus Studio. Todos os direitos reservados.
          </span>
          
          <div className={styles.status}>
            <span className={styles.indicator}></span>
            ALL SYSTEMS OPERATIONAL
          </div>
        </div>

      </div>
    </footer>
  );
}

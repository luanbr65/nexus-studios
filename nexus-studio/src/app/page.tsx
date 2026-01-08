import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.glassCard}>
        <h1 className={styles.title}>
          NEXUS <span className={styles.accent}>STUDIO</span>
        </h1>
        <p style={{ color: '#94a3b8', marginTop: '1rem' }}>Elite Digital Crafting & AI Solutions</p>
        <button className={styles.btn}>Iniciar Projeto</button>
      </div>
    </main>
  );
}

import styles from './page.module.css';
import { Cpu, Layout, Terminal, ArrowRight, Instagram, Linkedin, Github } from 'lucide-react';

export default function Home() {
  const services = [
    { title: "Soluções em IA", icon: <Cpu color="#6366f1" size={32} />, desc: "Automatizamos processos complexos com inteligência artificial sob medida." },
    { title: "Design de Elite", icon: <Layout color="#6366f1" size={32} />, desc: "Interfaces que encantam usuários e elevam o valor da sua marca." },
    { title: "Dev Fullstack", icon: <Terminal color="#6366f1" size={32} />, desc: "Sistemas robustos e escaláveis construídos com tecnologia de ponta." }
  ];

  return (
    <main style={{ background: '#030712' }}>
      {/* Hero Section (Preservando o estilo atual) */}
      <section className={styles.main}>
        <div className={styles.glassCard}>
          <h1 className={styles.title}>NEXUS <span className={styles.accent}>STUDIO</span></h1>
          <p style={{ color: '#94a3b8', marginTop: '1rem', fontSize: '1.2rem' }}>Elite Digital Crafting & AI Solutions</p>
          <button className={styles.btn}>Iniciar Projeto</button>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '800' }}>Nossas <span className={styles.accent}>Expertises</span></h2>
        </div>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={i} className={styles.card}>
              {s.icon}
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '10px', color: '#6366f1', fontWeight: 'bold', cursor: 'pointer' }}>
                Saber mais <ArrowRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className={styles.portfolioSection}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Projetos <span className={styles.accent}>Selecionados</span></h2>
        <div className={styles.portfolioGrid}>
          <div className={styles.projectCard}><div className={styles.projectOverlay}><h3>Plataforma Alpha</h3></div></div>
          <div className={styles.projectCard}><div className={styles.projectOverlay}><h3>Luxe Marketplace</h3></div></div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div><span className={styles.footerLogo}>NEXUS STUDIO</span><p>© 2024 Design de Elite.</p></div>
        <div style={{ display: 'flex', gap: '1.5rem' }}><Instagram size={20} /><Linkedin size={20} /><Github size={20} /></div>
      </footer>
    </main>
  );
}

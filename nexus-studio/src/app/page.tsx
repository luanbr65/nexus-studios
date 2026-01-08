"use client";
import styles from './page.module.css';
import Navbar from '../components/Navbar';
import { Cpu, Layout, Terminal, ArrowRight, Instagram, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const services = [
    { title: "Soluções em IA", icon: <Cpu color="#6366f1" size={32} />, desc: "Automatizamos processos complexos com inteligência artificial sob medida." },
    { title: "Design de Elite", icon: <Layout color="#6366f1" size={32} />, desc: "Interfaces que encantam usuários e elevam o valor da sua marca." },
    { title: "Dev Fullstack", icon: <Terminal color="#6366f1" size={32} />, desc: "Sistemas robustos e escaláveis construídos com tecnologia de ponta." }
  ];

  return (
    <main>
      <Navbar />
      
      {/* Nova Hero Section: Sem Card, Direto na Grade */}
      <section className={styles.main}>
        <div className={styles.glowOrb}></div>
        
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        >
          We craft <br />
          digital <span className={styles.accent}>futures.</span>
        </motion.h1>

        <motion.div 
          className={styles.descriptionWrapper}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        >
          <p className={styles.description}>
            A Nexus Studio funde engenharia de software complexa com design de vanguarda. 
            Não fazemos sites, construímos ecossistemas digitais.
          </p>
          <button className={styles.btn}>Start Project</button>
        </motion.div>
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

'use client';
import styles from './page.module.css';
import Navbar from '../components/Navbar';
import MainHero from '../components/MainHero';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Linkedin, Github, CheckCircle } from 'lucide-react';

export default function Home() {
  const projects = [
    {
      category: "Case de Sucesso",
      title: "Nexus Portfolio",
      description: "Vitrine interativa de alta performance. Desenvolvida para demonstrar domínio em animações complexas, Next.js e arquitetura de componentes escalável.",
      link: "https://nexus-phi-two.vercel.app/",
      status: "online"
    },
    {
      category: "Em Desenvolvimento",
      title: "Próximo Case",
      description: "Nova solução SaaS focada em automação com IA. Estamos desenhando a arquitetura neste momento.",
      link: "#",
      status: "building"
    }
  ];

  return (
    <main>
      <Navbar />
      
      <MainHero />

      {/* Portfolio Section */}
      <section className={styles.portfolioSection}>
        <h2>Projetos <span style={{color: '#3b82f6'}}>Selecionados</span></h2>
        <div className={styles.portfolioGrid}>
          {projects.map((project, index) => (
            project.status === "online" ? (
              // TIPO 1: PROJETO REAL (Com link e estilo ativo)
              <motion.a 
                href={project.link}
                target="_blank"
                key={index} 
                className={styles.card}
                whileHover={{ y: -8 }}
                style={{ textDecoration: 'none', display: 'block', borderLeft: '4px solid #3b82f6' }}
              >
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'0.5rem'}}>
                    <span style={{ color: '#3b82f6', fontWeight:'700', fontSize:'0.75rem', letterSpacing:'1px', textTransform:'uppercase' }}>
                      {project.category}
                    </span>
                    <span style={{background:'#DBEAFE', color:'#1e40af', padding:'2px 8px', borderRadius:'12px', fontSize:'0.7rem', fontWeight:'bold'}}>ONLINE</span>
                </div>
                
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.5rem' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#a0aec0', lineHeight: '1.6', fontSize: '1rem' }}>
                  {project.description}
                </p>
                
                <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff', fontWeight: '600', fontSize: '0.9rem' }}>
                  Ver Case <ArrowRight size={16} />
                </div>
              </motion.a>
            ) : (
              // TIPO 2: PLACEHOLDER (Tracejado e Opaco)
              <div 
                key={index} 
                className={styles.card}
                style={{ 
                  textDecoration: 'none', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  border: '2px dashed #475569', /* Borda tracejada sutil */
                  background: 'transparent', /* Sem fundo branco */
                  boxShadow: 'none' /* Sem sombra */
                }}
              >
                 <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#1e293b',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    width: 'fit-content',
                    marginBottom: '1rem'
                 }}>
                    <span style={{color:'#64748b', fontWeight:'600', fontSize:'0.8rem', textTransform:'uppercase'}}>🚧 Em construção...</span>
                 </div>
                 
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#64748b', marginBottom: '0.5rem' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  {project.description}
                </p>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div>
            <span className={styles.footerLogo}>NEXUS STUDIO</span>
            <p className={styles.footerCopy}>© 2024 Design de Elite.</p>
        </div>
        <div className={styles.socialIcons}>
          <Instagram size={22} className={styles.socialIcon} />
          <Linkedin size={22} className={styles.socialIcon} />
          <Github size={22} className={styles.socialIcon} />
        </div>
      </footer>
    </main>
  );
}

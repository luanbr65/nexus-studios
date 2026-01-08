'use client';
import styles from './page.module.css';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Linkedin, Github, CheckCircle, Code2 } from 'lucide-react';

export default function Home() {
  const projects = [
    {
      category: "Case de Sucesso",
      title: "Nexus Portfolio",
      description: "Vitrine interativa de alta performance. Desenvolvida para demonstrar domínio em animações complexas, Next.js e arquitetura de componentes escalável.",
      link: "https://nexus-phi-two.vercel.app/",
      status: "online" // Flag para identificar projeto real
    },
    {
      category: "Em Desenvolvimento",
      title: "Próximo Case",
      description: "Nova solução SaaS focada em automação com IA. Estamos desenhando a arquitetura neste momento.",
      link: "#",
      status: "building" // Flag para identificar placeholder
    }
  ];

  return (
    <main>
      <Navbar />
      
      <section className={styles.main}>
        {/* Aurora Background */}
        <div className={styles.glowOrb}></div>
        
        {/* Headline com Span Indigo Sutil */}
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        >
          Construímos produtos digitais que fazem seu projeto <span style={{color: '#6366f1'}}>crescer, converter e ser lembrado.</span>
        </motion.h1>

        <motion.div 
          className={styles.descriptionWrapper}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        >
          <p className={styles.description}>
            A Nexus Studio funde engenharia de software complexa com design de vanguarda. 
            Não fazemos sites, construímos ecossistemas digitais.
          </p>

          <ul className={styles.benefitList}>
            <li className={styles.benefitItem}>
              <CheckCircle size={20} />
              <span>Performance otimizada para conversão</span>
            </li>
            <li className={styles.benefitItem}>
              <CheckCircle size={20} />
              <span>Design que encanta e retém usuários</span>
            </li>
            <li className={styles.benefitItem}>
              <CheckCircle size={20} />
              <span>Arquitetura escalável para crescimento</span>
            </li>
          </ul>

          {/* CTA COM COPY REFINADA */}
          <button className={styles.btn}>
            Quero lançar meu projeto com o Nexus
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section className={styles.portfolioSection}>
        <h2>Projetos <span style={{color: '#6366f1'}}>Selecionados</span></h2>
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
                style={{ textDecoration: 'none', display: 'block', borderLeft: '4px solid #6366f1' }}
              >
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'0.5rem'}}>
                    <span style={{ color: '#6366f1', fontWeight:'700', fontSize:'0.75rem', letterSpacing:'1px', textTransform:'uppercase' }}>
                      {project.category}
                    </span>
                    <span style={{background:'#E0E7FF', color:'#4338ca', padding:'2px 8px', borderRadius:'12px', fontSize:'0.7rem', fontWeight:'bold'}}>ONLINE</span>
                </div>
                
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--text-headline)', marginBottom: '0.5rem' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>
                  {project.description}
                </p>
                
                <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px', color: '#111', fontWeight: '600', fontSize: '0.9rem' }}>
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
                  border: '2px dashed #E5E7EB', /* Borda tracejada sutil */
                  background: 'transparent', /* Sem fundo branco */
                  boxShadow: 'none' /* Sem sombra */
                }}
              >
                 <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#F3F4F6',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    width: 'fit-content',
                    marginBottom: '1rem'
                 }}>
                    <Code2 size={16} color="#6B7280" />
                    <span style={{color:'#6B7280', fontWeight:'600', fontSize:'0.8rem', textTransform:'uppercase'}}>Cozinhando...</span>
                 </div>
                 
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#9CA3AF', marginBottom: '0.5rem' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#9CA3AF', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  {project.description}
                </p>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Footer Limpo (Sem estilos inline nos ícones) */}
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

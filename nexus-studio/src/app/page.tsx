'use client';
import styles from './page.module.css';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Linkedin, Github, CheckCircle } from 'lucide-react';

export default function Home() {
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

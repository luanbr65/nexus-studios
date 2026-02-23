"use client";

import { motion } from 'framer-motion';
import styles from './projects.module.css';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65 },
};

export default function Projects() {
  return (
    <section className={styles.section} id="cases">
      <div className={styles.container}>
        <motion.div className={styles.header} {...fadeUp}>
          <span className={styles.sectionTitle}>Selected Works // 2024-2025</span>
          <h2 className={styles.mainTitle}>System Logs</h2>
        </motion.div>

        <motion.div className={styles.projectRow} {...fadeUp} transition={{ duration: 0.6, delay: 0.05 }}>
          <div className={styles.projectInfo}>
            <h3 className={styles.projectName}>Nexus Portfolio</h3>
            <p className={styles.projectDesc}>
              Hub pessoal de projetos. Interface experimental focada em
              branding e apresentação visual de alto impacto (Identity Design).
            </p>
          </div>
          <div className={styles.projectMeta}>
            <div className={styles.statusLine}>
              <span className={`${styles.dot} ${styles.online}`}></span>
              <span>SYSTEM ONLINE</span>
            </div>
            <div className={styles.statusLine}>
              <span>Tech: Next.js / Framer Motion / Node.js</span>
            </div>
            <a href="#" className={styles.linkButton}>
              Em produção &rarr;
            </a>
          </div>
        </motion.div>

        <motion.div className={styles.projectRow} {...fadeUp} transition={{ duration: 0.6, delay: 0.12 }}>
          <div className={styles.projectInfo}>
            <h3 className={styles.projectName} style={{ color: '#6366f1' }}>Pulse CRM</h3>
            <p className={styles.projectDesc}>
              Plataforma completa de gestão de relacionamento (CRM) com pipeline visual Kanban,
              métricas em tempo real e automação de follow-ups. Projetado para acelerar o ciclo de vendas.
            </p>
          </div>
          <div className={styles.projectMeta}>
            <div className={styles.statusLine}>
              <span className={`${styles.dot} ${styles.online}`}></span>
              <span>SAAS LIVE</span>
            </div>
            <div className={styles.statusLine}>
              <span>Tech: Next.js 14 / Dashboard UI / Realtime</span>
            </div>
            <Link href="/pulse-crm" className={styles.linkButton}>
              Ver Sistema Online &rarr;
            </Link>
          </div>
        </motion.div>

        <motion.div className={styles.projectRow} {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className={styles.projectInfo}>
            <h3 className={styles.projectName} style={{ color: '#ddd' }}>Vortex Analytics</h3>
            <p className={styles.projectDesc}>
              Plataforma SaaS B2B para visualização de Big Data em tempo real.
              Dashboard administrativo com processamento de milhões de registros.
            </p>
          </div>
          <div className={styles.projectMeta}>
            <div className={styles.statusLine}>
              <span className={`${styles.dot} ${styles.building}`}></span>
              <span style={{ color: '#ffbd2e' }}>PRIVATE BETA</span>
            </div>
            <div className={styles.statusLine}>
              <span>Tech: Python / AWS / WebGL</span>
            </div>

            <Link
              href="/vortex"
              className={styles.linkButton}
              style={{
                color: '#888',
                textDecoration: 'none',
                border: '1px solid #333',
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '0.75rem',
                background: 'rgba(0,0,0,0.5)',
                display: 'inline-block',
                transition: 'all 0.2s',
              }}
            >
              Solicitar Acesso 🔒
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

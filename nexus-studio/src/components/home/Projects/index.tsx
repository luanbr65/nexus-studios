import styles from './projects.module.css';
import Link from 'next/link';

export default function Projects() {
  return (
    <section className={styles.section} id="cases">
      <div className={styles.container}>
        
        {/* Cabeçalho da Seção */}
        <div className={styles.header}>
          <span className={styles.sectionTitle}>Selected Works // 2024-2025</span>
          <h2 className={styles.mainTitle}>System Logs</h2>
        </div>

        {/* PROJETO 1: O Nexus Portfolio (Ativo) */}
        <div className={styles.projectRow}>
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
              <span>Tech: Next.js 14 / Framer</span>
            </div>
            <Link href="https://nexus-phi-two.vercel.app/" target="_blank" className={styles.linkButton}>
              Acessar Live &rarr;
            </Link>
          </div>
        </div>

        {/* PROJETO 2: Vortex (Novo Projeto SaaS) */}
        <div className={styles.projectRow}>
          <div className={styles.projectInfo}>
            <h3 className={styles.projectName} style={{color: '#ddd'}}>Vortex Analytics</h3>
            <p className={styles.projectDesc}>
              Plataforma SaaS B2B para visualização de Big Data em tempo real. 
              Dashboard administrativo com processamento de milhões de registros.
            </p>
          </div>
          <div className={styles.projectMeta}>
            <div className={styles.statusLine}>
              <span className={`${styles.dot} ${styles.building}`}></span>
              <span style={{color: '#ffbd2e'}}>PRIVATE BETA</span>
            </div>
            <div className={styles.statusLine}>
              <span>Tech: Python / AWS / WebGL</span>
            </div>
            
            {/* ATUALIZAÇÃO: Link funcional para a página Vortex */}
            <Link href="/vortex" className={styles.linkButton} style={{
              color: '#888', 
              textDecoration: 'none', 
              border: '1px solid #333',
              padding: '6px 12px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              background: 'rgba(0,0,0,0.5)',
              display: 'inline-block',
              transition: 'all 0.2s'
            }}>
              Solicitar Acesso 🔒
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

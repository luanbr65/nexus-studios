import styles from './page.module.css';
import Navbar from '../components/layout/Navbar/navbar';
import Hero from '../components/home/Hero/hero';
import TechStrip from '../components/home/TechStrip';
import Services from '../components/home/Services';

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
      
      <Hero />

      <TechStrip />

      <Services />

      {/* Portfolio Section */}
      <section className={styles.portfolioSection}>
        <h2>Projetos Selecionados</h2>
        <div className={styles.portfolioGrid}>
          {projects.map((project, index) => (
            project.status === "online" ? (
              // TIPO 1: PROJETO REAL (Com link e estilo ativo)
              <a 
                href={project.link}
                target="_blank"
                key={index} 
                className={styles.card}
              >
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'0.5rem'}}>
                    <span style={{ color: '#888', fontWeight:'700', fontSize:'0.75rem', letterSpacing:'1px', textTransform:'uppercase' }}>
                      {project.category}
                    </span>
                    <span style={{background:'#333', color:'#fff', padding:'2px 8px', borderRadius:'12px', fontSize:'0.7rem', fontWeight:'bold'}}>ONLINE</span>
                </div>
                
                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.5rem' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#888', lineHeight: '1.6', fontSize: '1rem' }}>
                  {project.description}
                </p>
                
                <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff', fontWeight: '600', fontSize: '0.9rem' }}>
                  Ver Case →
                </div>
              </a>
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
                  border: '2px dashed #333',
                  background: 'transparent',
                }}
              >
                 <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#111',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    width: 'fit-content',
                    marginBottom: '1rem'
                 }}>
                    <span style={{color:'#666', fontWeight:'600', fontSize:'0.8rem', textTransform:'uppercase'}}>🚧 Em construção...</span>
                 </div>
                 
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#666', marginBottom: '0.5rem' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
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

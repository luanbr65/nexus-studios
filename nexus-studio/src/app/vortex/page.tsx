import styles from './vortex.module.css';

export default function VortexPage() {
  return (
    <div className={styles.container}>
      <div className={styles.scanlines}></div>

      {/* Header estilo Terminal */}
      <header className={styles.header}>
        <div className={styles.brand}>
          <span style={{color: '#fff'}}>VORTEX</span>_ANALYTICS
        </div>
        <div className={styles.status}>
          SERVER: <span style={{color: '#fff'}}>US-EAST-1</span>
          <div className={styles.blink}></div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.panel}>
          <h1 className={styles.title}>System Locked</h1>
          <p className={styles.subtitle}>
            Vortex v2.4.0 (Beta Privado).<br/>
            Plataforma de inteligência de dados de alta frequência.
            Acesso restrito a usuários corporativos autorizados.
          </p>

          {/* Dados Fakes para impressionar */}
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Data Stream</span>
              <span className={styles.statValue}>45.2 TB/s</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Active Nodes</span>
              <span className={styles.statValue}>8,402</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Latency</span>
              <span className={styles.statValue}>12ms</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Encryption</span>
              <span className={styles.statValue}>AES-256</span>
            </div>
          </div>

          {/* Formulário de "Login" que na verdade é captura */}
          <form className={styles.formGroup} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="ENTER CORPORATE ID..." 
              className={styles.input}
              disabled // Deixamos desabilitado de propósito para parecer exclusivo
            />
            <button className={styles.button}>
              Request Access Key
            </button>
          </form>
          
          <p style={{marginTop: '1rem', fontSize: '0.7rem', color: '#666'}}>
            * Security protocol initiated. IP logged.
          </p>
        </div>
      </main>

      {/* Footer Técnico */}
      <footer className={styles.footer}>
        <div>SYSTEM_ID: VTX-9928-X</div>
        <div>POWERED BY NEXUS STUDIO ENGINE</div>
      </footer>
    </div>
  );
}

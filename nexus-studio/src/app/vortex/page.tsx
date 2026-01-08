"use client"; // Necessário para usar animações no Next.js

import { useState, useEffect } from 'react';
import styles from './vortex.module.css';

export default function VortexPage() {
  // Estados para simular dados mudando
  const [dataStream, setDataStream] = useState(45.2);
  const [nodes, setNodes] = useState(8402);
  const [latency, setLatency] = useState(12);

  // O "Motor" de simulação
  useEffect(() => {
    const interval = setInterval(() => {
      // Flutua o Data Stream levemente
      setDataStream(prev => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1));
      
      // Muda a latência aleatoriamente
      setLatency(Math.floor(Math.random() * (15 - 8 + 1) + 8));
      
      // Ocasionalmente muda o número de nós
      if (Math.random() > 0.9) {
        setNodes(prev => prev + (Math.random() > 0.5 ? 1 : -1));
      }
    }, 1500); // Atualiza a cada 1.5 segundos

    return () => clearInterval(interval);
  }, []);

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

          {/* Dados Animados */}
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Data Stream</span>
              {/* Exibe o número animado */}
              <span className={styles.statValue}>{dataStream} TB/s</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Active Nodes</span>
              <span className={styles.statValue}>{nodes.toLocaleString()}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Latency</span>
              {/* Muda a cor se a latência subir muito (Detalhe técnico visual) */}
              <span className={styles.statValue} style={{color: latency > 14 ? '#ffbd2e' : '#00ff41'}}>
                {latency}ms
              </span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Encryption</span>
              <span className={styles.statValue}>AES-256</span>
            </div>
          </div>

          <form className={styles.formGroup} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="ENTER CORPORATE ID..." 
              className={styles.input}
              disabled 
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

      <footer className={styles.footer}>
        <div>SYSTEM_ID: VTX-9928-X</div>
        <div>POWERED BY NEXUS STUDIO ENGINE</div>
      </footer>
    </div>
  );
}

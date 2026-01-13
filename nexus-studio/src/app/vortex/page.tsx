"use client";

import { useState, useEffect } from 'react';
import styles from './vortex.module.css';

// Dados simulados para o gráfico
const data = [
  { name: '00:00', stream: 4000, nodes: 2400 },
  { name: '04:00', stream: 3000, nodes: 1398 },
  { name: '08:00', stream: 2000, nodes: 9800 },
  { name: '12:00', stream: 2780, nodes: 3908 },
  { name: '16:00', stream: 1890, nodes: 4800 },
  { name: '20:00', stream: 2390, nodes: 3800 },
  { name: '23:59', stream: 3490, nodes: 4300 },
];

export default function VortexPage() {
  const [isLocked, setIsLocked] = useState(true); // Controla se está na tela de login ou dashboard
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Estados "Vivos"
  const [streamSpeed, setStreamSpeed] = useState(45.2);

  // Simulação de dados vivos
  useEffect(() => {
    if (!isLocked) {
      const interval = setInterval(() => {
        setStreamSpeed(prev => +(prev + (Math.random() * 2 - 1)).toFixed(1));
      }, 800);
      return () => clearInterval(interval);
    }
  }, [isLocked]);

  // Função de Login Fake
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    // Simula tempo de processamento
    setTimeout(() => {
      if (password === 'ADMIN' || password === 'admin') {
        setIsLocked(false); // Libera o acesso
      } else {
        setError(true);
      }
      setLoading(false);
    }, 1500);
  };

  // --- TELA 1: LOGIN (O que já tínhamos, levemente ajustado) ---
  if (isLocked) {
    return (
      <div className={styles.container}>
        <div className={styles.scanlines}></div>
        <div className={styles.main}>
          <div className={styles.panel}>
            <h1 className={styles.title}>System Locked</h1>
            <p className={styles.subtitle}>ACCESS RESTRICTED TO AUTHORIZED PERSONNEL ONLY.</p>
            
            <form className={styles.formGroup} onSubmit={handleLogin}>
              <input 
                type="password" 
                placeholder="ENTER ACCESS KEY..." 
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
              <button className={styles.button} disabled={loading}>
                {loading ? 'AUTHENTICATING...' : 'UNLOCK SYSTEM'}
              </button>
              {error && <p style={{color: 'red', marginTop: 10, fontSize: '0.8rem'}}>ACCESS DENIED: INVALID CREDENTIALS</p>}
            </form>
            
            <div style={{marginTop: '2rem', borderTop: '1px solid #333', paddingTop: '1rem'}}>
              <p style={{fontSize: '0.7rem', color: '#444'}}>HINT FOR DEMO: Type "ADMIN"</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- TELA 2: DASHBOARD (A Novidade) ---
  return (
    <div className={styles.container}>
      {/* Header do Dashboard */}
      <header className={styles.header} style={{borderColor: '#333'}}>
        <div className={styles.brand}>
          <span style={{color: '#fff'}}>VORTEX</span>_DASHBOARD
        </div>
        <div className={styles.status}>
          LIVE CONNECTION <div className={styles.blink}></div>
        </div>
      </header>

      {/* Grid Principal */}
      <div className={styles.dashboardGrid}>
        
        {/* Widget 1: Visão Geral */}
        <div className={styles.widget}>
          <h3 className={styles.widgetTitle}>REAL-TIME THROUGHPUT</h3>
          <div className={styles.bigNumber}>{streamSpeed} <span style={{fontSize: '1rem', color:'#666'}}>TB/s</span></div>
          <div className={styles.chartContainer}>
            <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="colorStream" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="5%" stopColor="#00ff41" stopOpacity="0.3"/>
                  <stop offset="95%" stopColor="#00ff41" stopOpacity="0"/>
                </linearGradient>
              </defs>
              
              {/* Grid lines */}
              {[...Array(5)].map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="0"
                  y1={i * 40}
                  x2="400"
                  y2={i * 40}
                  stroke="#222"
                  strokeDasharray="3 3"
                />
              ))}
              
              {[...Array(8)].map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={i * 57}
                  y1="0"
                  x2={i * 57}
                  y2="200"
                  stroke="#222"
                  strokeDasharray="3 3"
                />
              ))}
              
              {/* Area chart */}
              <path
                d={`M 0,${200 - (data[0].stream / 100)} ${data.map((d, i) => 
                  `L ${i * 66},${200 - (d.stream / 100)}`
                ).join(' ')} L 400,200 L 0,200 Z`}
                fill="url(#colorStream)"
                stroke="#00ff41"
                strokeWidth="2"
                fillOpacity="1"
              />
            </svg>
          </div>
        </div>

        {/* Widget 2: Status dos Nós */}
        <div className={styles.widget}>
          <h3 className={styles.widgetTitle}>CLUSTER HEALTH</h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem'}}>
             <div className={styles.healthRow}>
                <span>US-EAST-1</span>
                <span style={{color: '#00ff41'}}>OPERATIONAL</span>
             </div>
             <div className={styles.healthRow}>
                <span>EU-WEST-2</span>
                <span style={{color: '#00ff41'}}>OPERATIONAL</span>
             </div>
             <div className={styles.healthRow}>
                <span>AP-SOUTH-1</span>
                <span style={{color: '#ffbd2e'}}>WARNING (Latency High)</span>
             </div>
             <div className={styles.healthRow}>
                <span>SA-EAST-1</span>
                <span style={{color: '#00ff41'}}>OPERATIONAL</span>
             </div>
          </div>
        </div>

         {/* Widget 3: Terminal de Logs */}
         <div className={styles.widget} style={{gridColumn: '1 / -1'}}>
            <h3 className={styles.widgetTitle}>SYSTEM LOGS</h3>
            <div className={styles.logs}>
                <p>[20:42:01] Ingesting shard #88291... OK</p>
                <p>[20:42:02] Optimizing indexes for cluster Alpha...</p>
                <p>[20:42:05] <span style={{color: '#ffbd2e'}}>WARNING: Spike detected in region AP-SOUTH</span></p>
                <p>[20:42:06] Auto-scaling initiated. Provisioning +50 nodes.</p>
            </div>
         </div>

      </div>
    </div>
  );
}

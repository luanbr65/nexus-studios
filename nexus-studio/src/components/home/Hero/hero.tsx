import styles from './hero.module.css';

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Lado Esquerdo (Texto) - MANTENHA IGUAL */}
        <div className={styles.content}>
          <span className={styles.label}>Est. 2024 &mdash; São Paulo</span>
          
          <h1 className={styles.headline}>
            Arquitetura digital <br />
            para negócios <br />
            de escala.
          </h1>
          
          <p className={styles.description}>
            A Nexus Studio é uma firma de engenharia de software focada em 
            performance, solidez e design sistêmico. Não seguimos tendências, 
            construímos infraestrutura.
          </p>

          <button className={styles.cta}>Iniciar Consultoria</button>
        </div>

        {/* Lado Direito (NOVO: Terminal Visual) */}
        <div className={styles.visual}>
            <div className={styles.terminalWindow}>
                <div className={styles.terminalHeader}>
                    <div className={styles.dot} style={{background: '#ff5f56'}}></div>
                    <div className={styles.dot} style={{background: '#ffbd2e'}}></div>
                    <div className={styles.dot} style={{background: '#27c93f'}}></div>
                    <span className={styles.fileName}>nexus_core.tsx</span>
                </div>
                <div className={styles.terminalBody}>
                    <div className={styles.codeLine}>
                        <span className={styles.purple}>const</span> <span className={styles.yellow}>NexusStudio</span> = <span className={styles.purple}>async</span> () <span className={styles.purple}>{`=>`}</span> <span className={styles.blue}>{`{`}</span>
                    </div>
                    <div className={styles.codeLine} style={{paddingLeft: '20px'}}>
                        <span className={styles.gray}>// Engineering excellence</span>
                    </div>
                    <div className={styles.codeLine} style={{paddingLeft: '20px'}}>
                        <span className={styles.purple}>await</span> <span className={styles.blue}>buildEcosystem</span>(<span className={styles.blue}>{`{`}</span>
                    </div>
                    <div className={styles.codeLine} style={{paddingLeft: '40px'}}>
                        performance: <span className={styles.green}>'100%'</span>,
                    </div>
                    <div className={styles.codeLine} style={{paddingLeft: '40px'}}>
                        security: <span className={styles.green}>'Enterprise'</span>,
                    </div>
                    <div className={styles.codeLine} style={{paddingLeft: '40px'}}>
                        design: <span className={styles.green}>'Swiss_Minimal'</span>
                    </div>
                    <div className={styles.codeLine} style={{paddingLeft: '20px'}}>
                        <span className={styles.blue}>{`}`}</span>);
                    </div>
                    <div className={styles.codeLine}>
                        <span className={styles.blue}>{`}`}</span>
                    </div>
                    <div className={styles.cursor}>_</div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}

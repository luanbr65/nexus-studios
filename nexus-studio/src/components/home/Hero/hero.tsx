import styles from './hero.module.css';

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
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

        {/* Lado Direito: Espaço para Imagem/Vídeo sóbrio */}
        <div className={styles.visual}>
            [Imagem Arquitetônica / Grid 3D]
        </div>

      </div>
    </section>
  );
}

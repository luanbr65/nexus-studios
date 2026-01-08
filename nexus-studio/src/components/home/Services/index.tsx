import styles from './services.module.css';

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Engenharia Frontend",
      desc: "Desenvolvimento de interfaces reativas complexas. Foco em performance (Core Web Vitals) e micro-interações.",
      stack: "React / Next.js / Framer"
    },
    {
      id: "02",
      title: "Design de Produto",
      desc: "UI/UX que converte. Criamos sistemas de design escaláveis, não apenas telas bonitas.",
      stack: "Figma / Design Systems"
    },
    {
      id: "03",
      title: "Backend & Integrações",
      desc: "Arquitetura serverless robusta para suportar escala. APIs seguras e bancos de dados otimizados.",
      stack: "Node.js / PostgreSQL / AWS"
    }
  ];

  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        {services.map((service) => (
          <div key={service.id} className={styles.card}>
            <div>
              <span className={styles.number}>{service.id} //</span>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.desc}</p>
            </div>
            <div className={styles.techStack}>
              stack: {service.stack}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

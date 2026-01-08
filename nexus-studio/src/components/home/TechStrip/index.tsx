import styles from './techstrip.module.css';

export default function TechStrip() {
  const techs = ["NEXT.JS", "REACT", "TYPESCRIPT", "VERCEL", "NODE.JS", "AWS"];

  return (
    <div className={styles.strip}>
      <div className={styles.container}>
        <span className={styles.label}>Powered by:</span>
        <div className={styles.list}>
          {techs.map((tech) => (
            <span key={tech} className={styles.tech}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

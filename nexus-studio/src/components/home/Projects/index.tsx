"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './projects.module.css';
import { useAnimate } from '@/hooks/useAnimate';

const projects = [
  {
    name: 'Pulse CRM',
    description:
      'Camada comercial com pipeline, automacao e leitura operacional desenhada para parecer produto real, nao demo vazia.',
    tech: 'Next.js 14 / dashboard UI / operator states',
    status: 'live',
    note: 'Sistema demonstravel com landing e painel de comando.',
    linkText: 'Abrir produto',
    linkHref: '/pulse-crm',
  },
  {
    name: 'Nexus Portfolio',
    description:
      'A propria superficie institucional do estudio, tratada como produto vivo e usada para provar criterio visual e tecnico.',
    tech: 'Next.js / motion / content architecture',
    status: 'online',
    note: 'Base para narrativa comercial, cases e captacao.',
    linkText: 'Voltar ao topo',
    linkHref: '#top',
  },
  {
    name: 'Vortex Analytics',
    description:
      'Ambiente de analytics para leitura executiva e simulacao de telemetria com linguagem visual mais tecnica.',
    tech: 'dashboard systems / synthetic data / B2B analytics',
    status: 'beta',
    note: 'Em evolucao controlada, com acesso restrito.',
    linkText: 'Ver ambiente',
    linkHref: '/vortex',
  },
];

export default function Projects() {
  const { shouldReduceMotion, fade } = useAnimate();

  const inViewProps = shouldReduceMotion
    ? {}
    : {
        initial: 'hidden' as const,
        whileInView: 'show' as const,
        viewport: { once: true, amount: 0.22 },
      };

  return (
    <section className={styles.section} id="cases">
      <div className={styles.container}>
        <motion.div {...fade(24)} {...inViewProps} className={styles.header}>
          <span className={styles.sectionTitle}>Produtos e ambientes</span>
          <h2 className={styles.mainTitle}>Superficies que mostram o nivel da entrega.</h2>
          <p className={styles.headerCopy}>
            Cada item abaixo existe para apresentar uma camada diferente da Nexus: produto, narrativa visual e
            operacao de interface.
          </p>
        </motion.div>

        {projects.map((proj, idx) => (
          <motion.article
            key={proj.name}
            className={styles.projectRow}
            {...fade(20)}
            transition={{
              ...(shouldReduceMotion ? {} : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }),
              delay: 0.04 + idx * 0.05,
            }}
            {...inViewProps}
          >
            <div className={styles.projectInfo}>
              <div className={styles.projectHeading}>
                <h3 className={styles.projectName}>{proj.name}</h3>
                <span className={`${styles.statusPill} ${styles[proj.status]}`}>
                  {proj.status === 'beta' ? 'private beta' : proj.status === 'live' ? 'live build' : 'studio online'}
                </span>
              </div>
              <p className={styles.projectDesc}>{proj.description}</p>
              <p className={styles.projectNote}>{proj.note}</p>
            </div>

            <div className={styles.projectMeta}>
              <div className={styles.statusLine}>
                <span className={styles.metaLabel}>stack</span>
                <span>{proj.tech}</span>
              </div>
              <Link href={proj.linkHref} className={styles.linkButton}>
                {proj.linkText}
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

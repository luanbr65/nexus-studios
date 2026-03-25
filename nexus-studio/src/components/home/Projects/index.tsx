"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './projects.module.css';
import { useAnimate } from '@/hooks/useAnimate';

type Project = {
  name: string;
  description: string;
  tech: string;
  status: 'online' | 'live';
  note: string;
  linkText: string;
  linkHref: string;
  previewTitle: string;
  previewValues: string[];
  accent: 'cyan' | 'emerald' | 'amber';
};

const projects: Project[] = [
  {
    name: 'Pulse CRM',
    description:
      'Camada comercial com pipeline, automação e leitura operacional desenhada para parecer produto real, não demo vazia.',
    tech: 'Next.js 14 / dashboard UI / operator states',
    status: 'live',
    note: 'Sistema demonstrável com landing e painel de comando.',
    linkText: 'Abrir produto',
    linkHref: '/pulse-crm',
    previewTitle: 'Sinais comerciais',
    previewValues: ['R$ 393k pipeline', '87% próxima ação', '14 rotinas ativas'],
    accent: 'cyan',
  },
  {
    name: 'Beacon Ops',
    description:
      'Plataforma de operação para field service, SLA e coordenação de squads técnicas com leitura de fila, agenda e risco.',
    tech: 'field ops / service desk / SLA orchestration',
    status: 'live',
    note: 'Terceiro demo de produto da Nexus, pensado para operações de serviço e atendimento técnico.',
    linkText: 'Abrir produto',
    linkHref: '/beacon-ops',
    previewTitle: 'Operação de campo',
    previewValues: ['146 ordens abertas', '18 min resposta média', '12 squads monitoradas'],
    accent: 'emerald',
  },
  {
    name: 'Vortex Analytics',
    description:
      'Plataforma de analytics para leitura executiva de telemetria, cluster e risco operacional em ambiente distribuído.',
    tech: 'distributed analytics / telemetry / executive monitoring',
    status: 'live',
    note: 'Demo posicionada como produto B2B mais maduro para o portfólio da Nexus.',
    linkText: 'Ver ambiente',
    linkHref: '/vortex',
    previewTitle: 'Leitura de infraestrutura',
    previewValues: ['48,6 TB/s tráfego', '12 regiões ativas', '98,2% confiança analítica'],
    accent: 'amber',
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
          <h2 className={styles.mainTitle}>Superfícies que mostram o nível da entrega.</h2>
          <p className={styles.headerCopy}>
            Os projetos abaixo foram escolhidos para mostrar capacidade de interface, operação e raciocínio de
            produto em contextos diferentes.
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
                  {proj.status === 'live' ? 'live build' : 'studio online'}
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

              <div className={`${styles.previewCard} ${styles[proj.accent]}`}>
                <div className={styles.previewGlow} aria-hidden="true" />
                <span className={styles.previewTitle}>{proj.previewTitle}</span>
                <div className={styles.previewBars} aria-hidden="true">
                  <span className={styles.previewBar}></span>
                  <span className={styles.previewBar}></span>
                  <span className={styles.previewBar}></span>
                </div>
                <div className={styles.previewValues}>
                  {proj.previewValues.map((value) => (
                    <span key={value}>{value}</span>
                  ))}
                </div>
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

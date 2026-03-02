"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './projects.module.css';
import { useAnimate } from '@/hooks/useAnimate';

interface Project {
  name: string;
  description: string;
  tech: string;
  status: 'online' | 'live' | 'beta';
  href?: string;
  highlightColor?: string;
  linkText: string;
  linkHref: string;
  linkSecondary?: boolean;
}

const projects: Project[] = [
  {
    name: 'Nexus Portfolio',
    description:
      'Hub pessoal de projetos. Interface experimental focada em branding e apresentação visual de alto impacto (Identity Design).',
    tech: 'Next.js / Framer Motion / Node.js',
    status: 'online',
    linkText: 'Em produção →',
    linkHref: '#',
  },
  {
    name: 'Pulse CRM',
    description:
      'Plataforma completa de gestão de relacionamento (CRM) com pipeline visual Kanban, métricas em tempo real e automação de follow-ups. Projetado para acelerar o ciclo de vendas.',
    tech: 'Next.js 14 / Dashboard UI / Realtime',
    status: 'live',
    highlightColor: '#6366f1',
    linkText: 'Ver Sistema Online →',
    linkHref: '/pulse-crm',
  },
  {
    name: 'Vortex Analytics',
    description:
      'Plataforma SaaS B2B para visualização de Big Data em tempo real. Dashboard administrativo com processamento de milhões de registros.',
    tech: 'Python / AWS / WebGL',
    status: 'beta',
    highlightColor: '#ddd',
    linkText: 'Solicitar Acesso 🔒',
    linkHref: '/vortex',
    linkSecondary: true,
  },
];

export default function Projects() {
  const { shouldReduceMotion, fade, listItem } = useAnimate();

  const inViewProps = shouldReduceMotion
    ? {}
    : {
        initial: 'hidden' as const,
        whileInView: 'show' as const,
        viewport: { once: true, amount: 0.25 },
      };

  return (
    <section className={styles.section} id="cases">
      <div className={styles.container}>
        <motion.div {...fade(24)} {...inViewProps} className={styles.header}>
          <span className={styles.sectionTitle}>Selected Works // 2024-2025</span>
          <h2 className={styles.mainTitle}>System Logs</h2>
        </motion.div>

        {projects.map((proj, idx) => (
          <motion.div
            key={proj.name}
            className={styles.projectRow}
            {...fade(20)}
            transition={{ ...(shouldReduceMotion ? {} : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }), delay: 0.04 + idx * 0.04 }}
            {...inViewProps}
          >
            <div className={styles.projectInfo}>
              <h3
                className={styles.projectName}
                style={{ color: proj.highlightColor || 'inherit' }}
              >
                {proj.name}
              </h3>
              <p className={styles.projectDesc}>{proj.description}</p>
            </div>
            <div className={styles.projectMeta}>
              <div className={styles.statusLine}>
                <span
                  className={`${styles.dot} ${
                    proj.status === 'online' ? styles.online : proj.status === 'live' ? styles.online : styles.building
                  }`}
                ></span>
                <span>{proj.status === 'beta' ? 'PRIVATE BETA' : proj.status === 'live' ? 'SAAS LIVE' : 'SYSTEM ONLINE'}</span>
              </div>
              <div className={styles.statusLine}>
                <span>Tech: {proj.tech}</span>
              </div>
              {proj.linkSecondary ? (
                <Link href={proj.linkHref} className={styles.linkButtonSecondary}>
                  {proj.linkText}
                </Link>
              ) : (
                <Link href={proj.linkHref} className={styles.linkButton}>
                  {proj.linkText}
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

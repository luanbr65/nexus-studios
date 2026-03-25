"use client";

import { motion } from 'framer-motion';
import { Layers3, Monitor, Waypoints } from 'lucide-react';
import styles from './services.module.css';
import { useAnimate } from '@/hooks/useAnimate';

const services = [
  {
    id: '01',
    title: 'Estrutura de produto',
    desc: 'Desenhamos a arquitetura da experiência, a hierarquia de interface e a lógica do fluxo principal.',
    stack: 'UX systems / page architecture / operator flow',
    icon: Layers3,
  },
  {
    id: '02',
    title: 'Front-end de alto critério',
    desc: 'Interfaces com ritmo visual, performance real e componentes que não colapsam na manutenção.',
    stack: 'Next.js / React / motion / component systems',
    icon: Monitor,
  },
  {
    id: '03',
    title: 'Integração e operação',
    desc: 'Conectamos automação, telemetria e regras para que a camada visual tenha suporte operacional.',
    stack: 'APIs / workflows / analytics / delivery cadence',
    icon: Waypoints,
  },
];

export default function Services() {
  const { shouldReduceMotion, fade } = useAnimate();

  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <motion.div
          className={styles.intro}
          {...fade(20)}
          transition={shouldReduceMotion ? undefined : { duration: 0.6 }}
        >
          <span className={styles.eyebrow}>Capacidades centrais</span>
          <h2>Menos fornecedor de tela, mais parceiro de sistema.</h2>
          <p>
            A entrega da Nexus parte de uma leitura única: aparência, produto e execução técnica precisam subir
            juntas. Quando uma camada anda sozinha, a percepção do negócio quebra.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.id}
                className={styles.card}
                {...fade(24)}
                whileInView={shouldReduceMotion ? undefined : 'show'}
                viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.25 }}
                transition={
                  shouldReduceMotion ? undefined : { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }
                }
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.number}>{service.id}</span>
                  <span className={styles.iconWrap}>
                    <Icon size={17} strokeWidth={1.9} />
                  </span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.title}>{service.title}</h3>
                  <p className={styles.description}>{service.desc}</p>
                </div>

                <div className={styles.techStack}>{service.stack}</div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

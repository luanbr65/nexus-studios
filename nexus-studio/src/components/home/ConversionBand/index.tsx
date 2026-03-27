"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CircleDashed, Layers3, MessagesSquare, Workflow } from 'lucide-react';
import { useAnimate } from '@/hooks/useAnimate';
import styles from './conversionband.module.css';

const phases = [
  {
    icon: MessagesSquare,
    label: 'Diagnóstico enxuto',
    copy: 'A Nexus entra rápido no problema, define recorte e transforma demanda aberta em direção prática.',
  },
  {
    icon: Layers3,
    label: 'Produto com forma',
    copy: 'A camada visual sobe junto com estrutura, fluxo e lógica operacional, sem separar estética e uso.',
  },
  {
    icon: Workflow,
    label: 'Entrega com continuidade',
    copy: 'O projeto sai apresentável, demonstrável e pronto para evoluir com critério técnico.',
  },
];

const proofPoints = [
  { value: '03', label: 'demos de produto ativas no portfólio' },
  { value: '1 fluxo', label: 'marca, interface e operação no mesmo eixo' },
  { value: 'próximo passo', label: 'clareza comercial sem depender de call longa' },
];

const whatsappMessage =
  'Olá! Vim pelo site da Nexus Studio e quero entender como vocês estruturam uma consultoria.';

export default function ConversionBand() {
  const { shouldReduceMotion, fade } = useAnimate();

  return (
    <section className={styles.section} id="processo">
      <div className={styles.container}>
        <motion.div
          className={styles.intro}
          {...fade(20)}
          transition={shouldReduceMotion ? undefined : { duration: 0.6 }}
        >
          <span className={styles.eyebrow}>Como a Nexus conduz</span>
          <h2>Consultoria que vira direção visível, não só diagnóstico solto.</h2>
          <p>
            Para quem chega pela home, a proposta precisa ficar clara cedo: entramos para organizar problema,
            desenhar superfície e entregar uma camada que já agregue percepção e operação.
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.phaseGrid}
            {...fade(22)}
            transition={shouldReduceMotion ? undefined : { duration: 0.6, delay: 0.04 }}
          >
            {phases.map((phase, index) => {
              const Icon = phase.icon;

              return (
                <article key={phase.label} className={styles.phaseCard}>
                  <div className={styles.phaseHeader}>
                    <span className={styles.phaseIndex}>0{index + 1}</span>
                    <span className={styles.phaseIcon}>
                      <Icon size={16} strokeWidth={1.9} />
                    </span>
                  </div>
                  <strong>{phase.label}</strong>
                  <p>{phase.copy}</p>
                </article>
              );
            })}
          </motion.div>

          <motion.aside
            className={styles.signalPanel}
            {...fade(18)}
            transition={shouldReduceMotion ? undefined : { duration: 0.6, delay: 0.1 }}
          >
            <div className={styles.panelHeader}>
              <span className={styles.panelEyebrow}>Sinal comercial</span>
              <span className={styles.panelMeta}>NXS / conversion layer</span>
            </div>

            <div className={styles.panelBody}>
              <div>
                <span className={styles.panelLabel}>Leitura para decisão</span>
                <h3>Se a demanda pede clareza, a próxima etapa já pode sair daqui.</h3>
              </div>

              <div className={styles.proofGrid}>
                {proofPoints.map((item) => (
                  <div key={item.label} className={styles.proofCard}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <div className={styles.track}>
                <div className={styles.trackLabel}>
                  <CircleDashed size={15} strokeWidth={1.8} />
                  <span>Fluxo sugerido</span>
                </div>
                <div className={styles.trackSteps}>
                  <span>brief</span>
                  <span>recorte</span>
                  <span>superfície</span>
                  <span>entrega</span>
                </div>
              </div>
            </div>

            <div className={styles.actions}>
              <a
                href={`https://wa.me/qr/T73YZS6YWDZLP1?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className={styles.primaryLink}
              >
                Iniciar conversa
              </a>
              <Link href="#cases" className={styles.secondaryLink}>
                Ver produtos <ArrowRight size={16} />
              </Link>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock3, ShieldCheck, Workflow } from 'lucide-react';
import { useAnimate } from '@/hooks/useAnimate';
import styles from './hero.module.css';

const whatsappMessage =
  'Ola! Vim pelo site da Nexus Studio e gostaria de iniciar uma consultoria.';

const trustSignals = [
  { label: 'entrega orientada a sistema', value: 'produto, marca e operacao no mesmo fluxo' },
  { label: 'tempo de resposta', value: 'escopo claro em poucas interacoes' },
  { label: 'camada tecnica', value: 'arquitetura, front-end e integracoes' },
];

const commandCards = [
  {
    icon: Workflow,
    title: 'Arquitetura de produto',
    copy: 'Estruturamos fluxos, interfaces e governanca para produtos que precisam operar com clareza.',
  },
  {
    icon: Clock3,
    title: 'Entrega com ritmo',
    copy: 'Projetos saem de ideia para interface utilizavel com recorte tecnico e prioridade definida.',
  },
  {
    icon: ShieldCheck,
    title: 'Solidez operacional',
    copy: 'Cada camada entra pensando em manutencao, performance e leitura de negocio.',
  },
];

export default function Hero() {
  const { shouldReduceMotion, fade } = useAnimate();

  return (
    <section className={styles.section}>
      <div className={styles.background} aria-hidden="true" />

      <header className={styles.container}>
        <div className={styles.content}>
          <motion.span className={styles.label} {...fade(18)}>
            Nexus Studio / Sao Paulo / engenharia para produto e operacao
          </motion.span>

          <motion.h1
            className={styles.headline}
            {...fade(24)}
            transition={shouldReduceMotion ? undefined : { duration: 0.6, delay: 0.06 }}
          >
            Sistemas digitais com forma, criterio e capacidade de execucao.
          </motion.h1>

          <motion.p
            className={styles.description}
            {...fade(20)}
            transition={shouldReduceMotion ? undefined : { duration: 0.6, delay: 0.12 }}
          >
            A Nexus Studio desenha superficies, fluxos e infraestrutura para negocios que precisam parecer
            consistentes e operar melhor. Nao tratamos design, produto e engenharia como trilhas separadas.
          </motion.p>

          <motion.div
            className={styles.actions}
            {...fade(16)}
            transition={shouldReduceMotion ? undefined : { duration: 0.6, delay: 0.18 }}
          >
            <motion.a
              href={`https://wa.me/qr/T73YZS6YWDZLP1?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className={styles.primaryCta}
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { y: 0 }}
            >
              Iniciar consultoria
            </motion.a>

            <Link href="/pulse-crm" className={styles.secondaryCta}>
              Ver Pulse CRM <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.trustGrid}
            {...fade(18)}
            transition={shouldReduceMotion ? undefined : { duration: 0.6, delay: 0.24 }}
          >
            {trustSignals.map((item) => (
              <div key={item.label} className={styles.trustCard}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </motion.div>
        </div>

        <div className={styles.visual}>
          <motion.div
            className={styles.console}
            {...(shouldReduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 26 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.65, delay: 0.18 },
                })}
          >
            <div className={styles.consoleHeader}>
              <span className={styles.consoleLabel}>command surface</span>
              <span className={styles.consoleMeta}>NXS / studio / private build</span>
            </div>

            <div className={styles.consoleHero}>
              <div>
                <span className={styles.kicker}>foco atual</span>
                <h2>Produtos mais apresentaveis e mais utilizaveis.</h2>
              </div>
              <div className={styles.consoleStat}>
                <span>camadas integradas</span>
                <strong>03</strong>
              </div>
            </div>

            <div className={styles.commandList}>
              {commandCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article key={card.title} className={styles.commandCard}>
                    <div className={styles.commandIcon}>
                      <Icon size={16} strokeWidth={1.9} />
                    </div>
                    <div>
                      <h3>{card.title}</h3>
                      <p>{card.copy}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className={styles.consoleFooter}>
              <div className={styles.footerMetric}>
                <span>tempo de implantacao</span>
                <strong>escopo modular</strong>
              </div>
              <div className={styles.footerMetric}>
                <span>tipo de entrega</span>
                <strong>interfaces, produto, automacao</strong>
              </div>
            </div>
          </motion.div>
        </div>
      </header>
    </section>
  );
}

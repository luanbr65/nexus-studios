"use client";

import { motion } from 'framer-motion';
import { useAnimate } from '@/hooks/useAnimate';
import styles from './hero.module.css';

export default function Hero() {
  const { shouldReduceMotion, fade } = useAnimate();

  return (
    <section className={styles.section}>
      <header className={styles.container}>
        <div className={styles.content}>
          <motion.span
            className={styles.label}
            {...fade(20)}
          >
            Est. 2024 &mdash; São Paulo
          </motion.span>

          <motion.h1
            className={styles.headline}
            {...fade(28)}
            transition={shouldReduceMotion ? undefined : { duration: 0.6, delay: 0.08 }}
          >
            Arquitetura digital <br />
            para negócios <br />
            de escala.
          </motion.h1>

          <motion.p
            className={styles.description}
            {...fade(18)}
            transition={shouldReduceMotion ? undefined : { duration: 0.6, delay: 0.16 }}
          >
            A Nexus Studio é uma firma de engenharia de software focada em
            performance, solidez e design sistêmico. Não seguimos tendências,
            construímos infraestrutura.
          </motion.p>

          <motion.button
            type="button"
            className={styles.cta}
            {...(shouldReduceMotion
              ? {}
              : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.24 } })}
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { y: 0 }}
          >
            Iniciar Consultoria
          </motion.button>
        </div>

        <div className={styles.visual}>
          <motion.div
            className={styles.terminalWindow}
            {...(shouldReduceMotion
              ? {}
              : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 } })}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
          >
            <div className={styles.terminalHeader}>
              <div className={styles.dot} style={{ background: '#ff5f56' }}></div>
              <div className={styles.dot} style={{ background: '#ffbd2e' }}></div>
              <div className={styles.dot} style={{ background: '#27c93f' }}></div>
              <span className={styles.fileName}>nexus_core.tsx</span>
            </div>
            <div className={styles.terminalBody}>
              <div className={styles.codeLine}>
                <span className={styles.purple}>const</span>{' '}
                <span className={styles.yellow}>NexusStudio</span> ={' '}
                <span className={styles.purple}>async</span> (){' '}
                <span className={styles.purple}>{`=>`}</span>{' '}
                <span className={styles.blue}>{`{`}</span>
              </div>
              <div className={styles.codeLine} style={{ paddingLeft: '20px' }}>
                <span className={styles.gray}>// Engineering excellence</span>
              </div>
              <div className={styles.codeLine} style={{ paddingLeft: '20px' }}>
                <span className={styles.purple}>await</span>{' '}
                <span className={styles.blue}>buildEcosystem</span>(
                <span className={styles.blue}>{`{`}</span>
              </div>
              <div className={styles.codeLine} style={{ paddingLeft: '40px' }}>
                performance: <span className={styles.green}>'100%'</span>,
              </div>
              <div className={styles.codeLine} style={{ paddingLeft: '40px' }}>
                security: <span className={styles.green}>'Enterprise'</span>,
              </div>
              <div className={styles.codeLine} style={{ paddingLeft: '40px' }}>
                design: <span className={styles.green}>'Swiss_Minimal'</span>
              </div>
              <div className={styles.codeLine} style={{ paddingLeft: '20px' }}>
                <span className={styles.blue}>{`}`}</span>);
              </div>
              <div className={styles.codeLine}>
                <span className={styles.blue}>{`}`}</span>
              </div>
              <div className={styles.cursor}>_</div>
            </div>
          </motion.div>
        </div>
      </header>
    </section>
  );
}

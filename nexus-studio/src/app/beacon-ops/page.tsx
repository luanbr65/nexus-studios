import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  AlertTriangle,
  ArrowRight,
  Gauge,
  MapPinned,
  ShieldCheck,
  Users2,
  Workflow,
} from 'lucide-react';
import styles from './page.module.css';

const modules: Array<{ icon: LucideIcon; title: string; copy: string; meta: string }> = [
  {
    icon: Workflow,
    title: 'Orquestração de chamados',
    copy: 'Fila técnica com prioridade, dono, histórico e próximo passo sem depender de planilha paralela.',
    meta: 'sla / owner / queue',
  },
  {
    icon: MapPinned,
    title: 'Operação em campo',
    copy: 'Equipes, rotas e janelas de atendimento aparecem na mesma superfície para reduzir atrito operacional.',
    meta: 'dispatch / field / routing',
  },
  {
    icon: Gauge,
    title: 'Leitura de SLA',
    copy: 'Tempo de resposta, backlog crítico e risco de atraso entram na interface antes do problema estourar.',
    meta: 'latency / risk / response',
  },
  {
    icon: Users2,
    title: 'Coordenação de squads',
    copy: 'Cada célula técnica opera com carga, contexto e cobertura visíveis para o time inteiro.',
    meta: 'teams / shifts / capacity',
  },
  {
    icon: AlertTriangle,
    title: 'Incidentes e escalonamento',
    copy: 'Eventos críticos são roteados com regra, severidade e trilha clara de atuação.',
    meta: 'incidents / severity / escalation',
  },
  {
    icon: ShieldCheck,
    title: 'Ambiente pronto para demo séria',
    copy: 'Produto posicionado como plataforma B2B, não como rascunho visual ou conceito solto.',
    meta: 'platform / governance / product',
  },
];

const metrics = [
  { value: '146', label: 'ordens abertas' },
  { value: '18 min', label: 'tempo médio de resposta' },
  { value: '93%', label: 'SLA sob controle' },
  { value: '12', label: 'squads monitoradas' },
];

const tracks = [
  {
    label: 'Core',
    title: 'Times que precisam sair do caos operacional',
    copy: 'Centraliza chamados, prioridade, squads e leitura de backlog para operações em crescimento.',
  },
  {
    label: 'Field',
    title: 'Operações com atendimento em campo',
    copy: 'Adiciona rotas, janelas de visita e visão de cobertura por técnico ou célula regional.',
  },
  {
    label: 'Scale',
    title: 'Ambientes com SLA, risco e governança',
    copy: 'Estrutura para filas múltiplas, escalonamento e leitura executiva de capacidade.',
  },
];

const workflow = [
  { stage: 'Entrada', fill: '82%', note: 'tickets triados em até 8 min' },
  { stage: 'Diagnóstico', fill: '66%', note: 'classificação por severidade' },
  { stage: 'Despacho', fill: '54%', note: 'squad ou técnico atribuído' },
  { stage: 'Fechamento', fill: '39%', note: 'SLA e evidência registrados' },
];

export default function BeaconOpsPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Produto Nexus / Beacon Ops</span>
          <h1 className={styles.heroTitle}>Operação de campo, SLA e resposta técnica em uma única camada de comando.</h1>
          <p className={styles.heroText}>
            O Beacon Ops foi pensado para times que precisam coordenar chamados, squads e atendimento externo com
            menos ruído e mais previsibilidade. É uma demo de produto para operações técnicas, suporte e serviços.
          </p>

          <div className={styles.actionRow}>
            <Link href="/beacon-ops/dashboard" className={styles.primaryLink}>
              Abrir dashboard <ArrowRight size={16} />
            </Link>
            <a href="#modules" className={styles.secondaryLink}>
              Ver módulos
            </a>
          </div>

          <div className={styles.metricGrid}>
            {metrics.map((metric) => (
              <article key={metric.label} className={styles.metricCard}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className={styles.heroPanel}>
          <div className={styles.panelHeader}>
            <span className={styles.panelEyebrow}>Posicionamento do produto</span>
            <span className={styles.panelMeta}>operações técnicas / field service / service desk</span>
          </div>

          <div className={styles.panelBlock}>
            <span className={styles.panelLabel}>O que essa superfície resolve</span>
            <ul className={styles.panelList}>
              <li>backlog sem dono e sem prioridade clara</li>
              <li>equipes de campo operando com pouca visibilidade</li>
              <li>gestão de SLA feita por planilha e improviso</li>
            </ul>
          </div>

          <div className={styles.panelBlock}>
            <span className={styles.panelLabel}>Como a demo agrega ao portfólio</span>
            <p>
              Complementa o Pulse e o Vortex com um terceiro contexto B2B: coordenação operacional, dispatch, squads
              e gestão de resposta técnica.
            </p>
          </div>
        </aside>
      </section>

      <section id="modules" className={styles.section}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionEyebrow}>Módulos centrais</span>
          <h2>Uma linguagem visual de produto aplicada a operações de serviço e campo.</h2>
        </div>

        <div className={styles.moduleGrid}>
          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <article key={module.title} className={styles.moduleCard}>
                <span className={styles.moduleIcon}>
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <div className={styles.moduleBody}>
                  <h3>{module.title}</h3>
                  <p>{module.copy}</p>
                  <span>{module.meta}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={`${styles.section} ${styles.previewSection}`}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionEyebrow}>Preview operacional</span>
          <h2>O dashboard foi desenhado para mostrar fila, risco e ritmo de execução sem cara de template.</h2>
        </div>

        <div className={styles.previewShell}>
          <div className={styles.previewSidebar}>
            <span className={styles.previewLabel}>Views</span>
            <span>visão geral</span>
            <span>fila crítica</span>
            <span>equipes</span>
            <span>agenda</span>
            <span>automações</span>
          </div>

          <div className={styles.previewWorkspace}>
            <div className={styles.previewStats}>
              <article>
                <span>tickets críticos</span>
                <strong>17</strong>
              </article>
              <article>
                <span>visitas do dia</span>
                <strong>34</strong>
              </article>
              <article>
                <span>backlog em risco</span>
                <strong>9%</strong>
              </article>
            </div>

            <div className={styles.workflowList}>
              {workflow.map((item) => (
                <div key={item.stage} className={styles.workflowRow}>
                  <div className={styles.workflowHead}>
                    <strong>{item.stage}</strong>
                    <span>{item.note}</span>
                  </div>
                  <span className={styles.workflowBar}>
                    <span style={{ width: item.fill }} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionEyebrow}>Faixas de implantação</span>
          <h2>Um terceiro demo de portfólio para mostrar profundidade em operações, e não só em CRM e analytics.</h2>
        </div>

        <div className={styles.trackGrid}>
          {tracks.map((track) => (
            <article key={track.label} className={styles.trackCard}>
              <span>{track.label}</span>
              <h3>{track.title}</h3>
              <p>{track.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

import Link from 'next/link';
import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BarChart3,
  Bot,
  CircleAlert,
  Database,
  MessagesSquare,
  ShieldCheck,
  Target,
  Workflow,
} from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Pulse CRM - Nexus Studio',
  description: 'Sistema comercial com pipeline, automações e visibilidade operacional para equipes de vendas.',
};

const principles = [
  {
    index: '01',
    title: 'Operação visível',
    copy: 'Cada oportunidade nasce com dono, contexto, próximo passo e sinal de risco. Nada fica preso em memória dispersa.',
  },
  {
    index: '02',
    title: 'Leitura priorizada',
    copy: 'A interface mostra primeiro o que move receita, cadência e resposta. O resto fica em segundo plano.',
  },
  {
    index: '03',
    title: 'Automação com critério',
    copy: 'Playbooks aceleram o time sem esconder o estado real de cada conta, deal ou etapa.',
  },
];

const modules: Array<{ icon: LucideIcon; title: string; copy: string; meta: string }> = [
  {
    icon: Workflow,
    title: 'Board comercial orientado a dono',
    copy: 'Pipeline com regra de passagem, próxima ação e responsabilidade explícita por oportunidade.',
    meta: 'board / handoff / ownership',
  },
  {
    icon: Bot,
    title: 'Rotinas de execução',
    copy: 'Follow-ups, digests e filas de risco entram como camada operacional, e não como recurso solto.',
    meta: 'playbooks / alerts / cadence',
  },
  {
    icon: BarChart3,
    title: 'Telemetria de receita',
    copy: 'Forecast, velocidade e cobertura do pipeline aparecem em um formato mais legível para o operador.',
    meta: 'forecast / coverage / cycle',
  },
  {
    icon: MessagesSquare,
    title: 'Memória da conta',
    copy: 'Interações, objeções e contexto ficam colados na conta para evitar perda de sinal entre membros do time.',
    meta: 'timeline / notes / meetings',
  },
  {
    icon: Database,
    title: 'Modelo de dados comercial',
    copy: 'Fontes, segmentos e níveis de qualificação seguem um padrão útil para decisão e relatório.',
    meta: 'schema / quality / sync',
  },
  {
    icon: ShieldCheck,
    title: 'Ambiente controlado',
    copy: 'Papéis, histórico e proteções básicas deixam o produto pronto para implantação privada e demos reais.',
    meta: 'roles / audit / privacy',
  },
];

const heroSignals = [
  { value: 'R$ 393k', label: 'pipeline monitorado' },
  { value: '87%', label: 'deals com próxima ação' },
  { value: '8h', label: 'tempo médio de resposta' },
  { value: '14', label: 'rotinas ativas' },
];

const operatingLayers = [
  {
    title: 'Camada de comando',
    copy: 'Visão geral para leitura de sinal, fila operacional e risco comercial sem ruído desnecessário.',
  },
  {
    title: 'Camada de pipeline',
    copy: 'Kanban com valor, etapa, próxima ação e contexto mínimo suficiente para mover cada conta.',
  },
  {
    title: 'Camada de automação',
    copy: 'Regras que cobrem silêncio, propostas paradas, digests e recomendações de ajuste operacional.',
  },
];

const outcomes = [
  { icon: Target, title: 'Menos deals silenciosos', copy: 'Cobertura de próxima ação sobe quando o board obriga contexto e dono.' },
  { icon: CircleAlert, title: 'Risco mais explícito', copy: 'Contas frias, propostas paradas e gargalos entram na superfície cedo.' },
  { icon: Workflow, title: 'Ritmo mais claro', copy: 'A equipe consegue operar com cadência visível e menos dependência de memória.' },
];

const deploymentTracks = [
  {
    label: 'Piloto',
    title: 'Organizar um comercial ainda pulverizado',
    copy: 'Board, ownership e memória compartilhada para equipes que precisam sair do improviso.',
    metric: '2 a 4 semanas',
  },
  {
    label: 'Ops',
    title: 'Formalizar cadência e visibilidade de receita',
    copy: 'Entram automações, governança básica de pipeline e leitura mais executiva dos sinais.',
    metric: '4 a 8 semanas',
  },
  {
    label: 'Scale',
    title: 'Consolidar operação com múltiplos operadores',
    copy: 'Estrutura com níveis de acesso, ritos de acompanhamento e regras mais densas por etapa.',
    metric: 'escopo customizado',
  },
];

export default function PulseCRM() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Produto Nexus / Pulse CRM</span>
            <h1 className={styles.heroTitle}>Um sistema comercial desenhado para operar melhor na vida real.</h1>
            <p className={styles.heroText}>
              O Pulse CRM não tenta parecer um SaaS genérico. Ele foi modelado como uma camada de controle para
              times comerciais que precisam acompanhar pipeline, contexto e cadência com mais precisão.
            </p>

            <div className={styles.heroActions}>
              <Link href="/pulse-crm/dashboard" className={styles.primaryLink}>
                Abrir demo do produto <ArrowRight size={16} />
              </Link>
              <a href="#deployment" className={styles.secondaryLink}>
                Ver implantacao
              </a>
            </div>

            <div className={styles.metricRow}>
              {heroSignals.map((signal) => (
                <div key={signal.label} className={styles.metricCard}>
                  <span className={styles.metricValue}>{signal.value}</span>
                  <span className={styles.metricLabel}>{signal.label}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className={styles.heroPanel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelEyebrow}>Leitura operacional</span>
              <span className={styles.panelTimestamp}>ambiente demo atualizado há 2 min</span>
            </div>

            <div className={styles.panelBlock}>
              <span className={styles.panelBlockLabel}>O que essa interface prioriza</span>
              <ul className={styles.panelList}>
                <li>negociações com risco crescente</li>
                <li>falta de próxima ação por owner</li>
                <li>tempo de resposta e cobertura do pipeline</li>
              </ul>
            </div>

            <div className={styles.panelGrid}>
              <div className={styles.signalCard}>
                <span className={styles.signalValue}>94 pts</span>
                <span className={styles.signalLabel}>saúde do pipeline</span>
              </div>
              <div className={styles.signalCard}>
                <span className={styles.signalValue}>31%</span>
                <span className={styles.signalLabel}>conversao de proposta</span>
              </div>
            </div>

            <div className={styles.panelBlock}>
              <span className={styles.panelBlockLabel}>Postura de produto</span>
              <p className={styles.panelText}>
                Denso onde precisa, silencioso no resto. O objetivo é melhorar a leitura do operador, não inflar a
                interface com decoração.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionEyebrow}>Princípios de produto</span>
          <h2 className={styles.sectionTitle}>A linguagem visual da Nexus aplicada a uma superfície comercial.</h2>
        </div>

        <div className={styles.principlesGrid}>
          {principles.map((principle) => (
            <article key={principle.index} className={styles.principleCard}>
              <span className={styles.principleIndex}>{principle.index}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionEyebrow}>Camadas de operação</span>
          <h2 className={styles.sectionTitle}>O produto foi pensado para acompanhar o ritmo do time, não para enfeitar a demo.</h2>
        </div>

        <div className={styles.layerGrid}>
          {operatingLayers.map((layer) => (
            <article key={layer.title} className={styles.layerCard}>
              <h3>{layer.title}</h3>
              <p>{layer.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className={styles.section}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionEyebrow}>Módulos centrais</span>
          <h2 className={styles.sectionTitle}>Uma camada comercial mais enxuta do primeiro contato ao fechamento.</h2>
        </div>

        <div className={styles.moduleGrid}>
          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <article key={module.title} className={styles.moduleCard}>
                <div className={styles.moduleIcon}>
                  <Icon size={18} strokeWidth={1.8} />
                </div>
                <div className={styles.moduleBody}>
                  <h3>{module.title}</h3>
                  <p>{module.copy}</p>
                  <span className={styles.moduleMeta}>{module.meta}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={`${styles.section} ${styles.previewSection}`}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionEyebrow}>Preview de interface</span>
          <h2 className={styles.sectionTitle}>Um painel de comando comercial com mais capacidade de ação e menos atrito visual.</h2>
        </div>

        <div className={styles.previewShell}>
          <div className={styles.previewRail}>
            <div className={styles.previewRailBlock}>
              <span className={styles.previewRailLabel}>Views ativas</span>
              <span className={styles.previewRailItem}>visão geral</span>
              <span className={styles.previewRailItem}>pipeline</span>
              <span className={styles.previewRailItem}>contatos</span>
              <span className={styles.previewRailItem}>automações</span>
            </div>
            <div className={styles.previewRailBlock}>
              <span className={styles.previewRailLabel}>Estado do ambiente</span>
              <span className={styles.previewRailMuted}>demo privada / dados limpos / modo operador</span>
            </div>
          </div>

          <div className={styles.previewWorkspace}>
            <div className={styles.previewStats}>
              <div className={styles.previewStat}>
                <span>qualidade de pipeline</span>
                <strong>94 pts</strong>
              </div>
              <div className={styles.previewStat}>
                <span>deals com risco alto</span>
                <strong>05</strong>
              </div>
              <div className={styles.previewStat}>
                <span>regras em execução</span>
                <strong>14</strong>
              </div>
            </div>

            <div className={styles.previewFlow}>
              <div className={styles.flowStage}>
                <span className={styles.flowLabel}>Lead</span>
                <span className={styles.flowBar}>
                  <span style={{ width: '74%' }} />
                </span>
              </div>
              <div className={styles.flowStage}>
                <span className={styles.flowLabel}>Qualificado</span>
                <span className={styles.flowBar}>
                  <span style={{ width: '59%' }} />
                </span>
              </div>
              <div className={styles.flowStage}>
                <span className={styles.flowLabel}>Proposta</span>
                <span className={styles.flowBar}>
                  <span style={{ width: '46%' }} />
                </span>
              </div>
              <div className={styles.flowStage}>
                <span className={styles.flowLabel}>Negociacao</span>
                <span className={styles.flowBar}>
                  <span style={{ width: '31%' }} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionEyebrow}>Ganhos esperados</span>
          <h2 className={styles.sectionTitle}>O valor do produto aparece quando a equipe para de operar no improviso.</h2>
        </div>

        <div className={styles.outcomeGrid}>
          {outcomes.map((outcome) => {
            const Icon = outcome.icon;

            return (
              <article key={outcome.title} className={styles.outcomeCard}>
                <div className={styles.outcomeIcon}>
                  <Icon size={18} strokeWidth={1.85} />
                </div>
                <h3>{outcome.title}</h3>
                <p>{outcome.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="deployment" className={styles.section}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionEyebrow}>Faixas de implantação</span>
          <h2 className={styles.sectionTitle}>Escopos diferentes, a mesma disciplina operacional e visual.</h2>
        </div>

        <div className={styles.deploymentGrid}>
          {deploymentTracks.map((track) => (
            <article key={track.label} className={styles.deploymentCard}>
              <span className={styles.deploymentTag}>{track.label}</span>
              <h3>{track.title}</h3>
              <p>{track.copy}</p>
              <strong>{track.metric}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

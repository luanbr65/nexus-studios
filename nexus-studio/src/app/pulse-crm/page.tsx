import Link from 'next/link';
import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BarChart3,
  Bot,
  Database,
  MessagesSquare,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Pulse CRM - Nexus Studio',
  description: 'Sistema comercial com pipeline, automacoes e visibilidade operacional para equipes de vendas.',
};

const principles = [
  {
    index: '01',
    title: 'Fluxo comercial estruturado',
    copy: 'Cada lead, proposta e handoff opera dentro de uma sequencia clara, com dono, contexto e proximo passo.',
  },
  {
    index: '02',
    title: 'Leitura rapida de sinal',
    copy: 'A interface prioriza decisao operacional. Menos ornamento, mais clareza para quem precisa agir rapido.',
  },
  {
    index: '03',
    title: 'Automacao com contexto',
    copy: 'Playbooks aceleram follow-ups e qualificacao sem apagar a nuance de cada conta e cada negociacao.',
  },
];

const modules: Array<{ icon: LucideIcon; title: string; copy: string; meta: string }> = [
  {
    icon: Workflow,
    title: 'Orquestracao de pipeline',
    copy: 'Regras de etapa, responsabilidade por deal e higiene de pipeline embutidas na camada operacional.',
    meta: 'kanban / handoff / SLAs',
  },
  {
    icon: Bot,
    title: 'Automacoes comerciais',
    copy: 'Dispare follow-ups, priorize contas quentes e reduza o tempo gasto em trabalho repetitivo.',
    meta: 'rotinas / alertas / gatilhos',
  },
  {
    icon: BarChart3,
    title: 'Telemetria de receita',
    copy: 'Leia conversao, velocidade e previsao em uma superficie mais enxuta e util para o time.',
    meta: 'forecast / cadencia / conversao',
  },
  {
    icon: MessagesSquare,
    title: 'Memoria compartilhada da conta',
    copy: 'Notas, reunioes, objeccoes e historico comercial ficam ligados ao deal, nao espalhados em chat.',
    meta: 'timeline / contexto / historico',
  },
  {
    icon: Database,
    title: 'Base operacional limpa',
    copy: 'Fontes de lead, padroes de qualificacao e saida comercial ficam normalizados para decisao futura.',
    meta: 'modelo / fontes / sincronizacao',
  },
  {
    icon: ShieldCheck,
    title: 'Controle de acesso',
    copy: 'Demos privadas, papeis do time e protecoes operacionais deixam a superficie pronta para uso real.',
    meta: 'roles / auditoria / governanca',
  },
];

const deploymentTracks = [
  {
    label: 'Piloto',
    title: 'Para equipes validando um novo modelo comercial',
    copy: 'Ideal para times compactos que precisam organizar a operacao antes de ampliar a complexidade do processo.',
    metric: '2 a 4 semanas',
  },
  {
    label: 'Ops',
    title: 'Para equipes formalizando operacao de receita',
    copy: 'Adiciona automacoes, superficies de relatorio e mais clareza de responsabilidade em pipeline ativo.',
    metric: '4 a 8 semanas',
  },
  {
    label: 'Scale',
    title: 'Para ambientes comerciais com multiplos operadores',
    copy: 'Pensado para workflows em camadas, visibilidade cruzada e restricoes de implantacao privada.',
    metric: 'Escopo customizado',
  },
];

const heroSignals = [
  { value: 'R$ 393k', label: 'pipeline ativo' },
  { value: '31%', label: 'conversao de proposta' },
  { value: '8 dias', label: 'ciclo medio de resposta' },
];

export default function PulseCRM() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Sistema de produto Nexus / Pulse CRM</span>
            <h1 className={styles.heroTitle}>Uma camada de controle comercial para equipes que vendem com precisao.</h1>
            <p className={styles.heroText}>
              Pulse CRM reorganiza leads, propostas e follow-ups em uma unica superficie operacional. A proposta nao
              e parecer uma landing generica de SaaS, e sim uma ferramenta que transmite controle, leitura e ritmo de
              execucao.
            </p>

            <div className={styles.heroActions}>
              <Link href="/pulse-crm/dashboard" className={styles.primaryLink}>
                Abrir demo do produto <ArrowRight size={16} />
              </Link>
              <a href="#deployment" className={styles.secondaryLink}>
                Ver faixas de implantacao
              </a>
            </div>

            <div className={styles.metricRow}>
              <div className={styles.metricCard}>
                <span className={styles.metricValue}>247</span>
                <span className={styles.metricLabel}>contas monitoradas</span>
              </div>
              <div className={styles.metricCard}>
                <span className={styles.metricValue}>14</span>
                <span className={styles.metricLabel}>automacoes ativas</span>
              </div>
              <div className={styles.metricCard}>
                <span className={styles.metricValue}>99,2%</span>
                <span className={styles.metricLabel}>completude de dados</span>
              </div>
            </div>
          </div>

          <aside className={styles.heroPanel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelEyebrow}>Leitura operacional</span>
              <span className={styles.panelTimestamp}>atualizado ha 2 min</span>
            </div>

            <div className={styles.signalGrid}>
              {heroSignals.map((signal) => (
                <div key={signal.label} className={styles.signalCard}>
                  <span className={styles.signalValue}>{signal.value}</span>
                  <span className={styles.signalLabel}>{signal.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.panelBlock}>
              <span className={styles.panelBlockLabel}>Estrutura do operador</span>
              <ul className={styles.panelList}>
                <li>Governanca do pipeline com dono por oportunidade</li>
                <li>Gatilhos de follow-up para contas sem movimento</li>
                <li>Visibilidade compartilhada entre qualificacao e proposta</li>
              </ul>
            </div>

            <div className={styles.panelBlock}>
              <span className={styles.panelBlockLabel}>Por que a leitura muda</span>
              <p className={styles.panelText}>
                O Pulse foi desenhado como sistema operacional comercial, nao como vitrine. A interface fica densa
                onde precisa e silenciosa no resto.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionEyebrow}>Principios de produto</span>
          <h2 className={styles.sectionTitle}>A mesma disciplina visual da Nexus aplicada a um produto comercial.</h2>
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

      <section id="features" className={styles.section}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionEyebrow}>Modulos centrais</span>
          <h2 className={styles.sectionTitle}>Uma superficie comercial mais enxuta do primeiro contato ao deal fechado.</h2>
        </div>

        <div className={styles.moduleGrid}>
          {modules.map((module) => (
            <article key={module.title} className={styles.moduleCard}>
              <div className={styles.moduleIcon}>
                <module.icon size={18} strokeWidth={1.8} />
              </div>
              <div className={styles.moduleBody}>
                <h3>{module.title}</h3>
                <p>{module.copy}</p>
                <span className={styles.moduleMeta}>{module.meta}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.previewSection}`}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionEyebrow}>Preview de interface</span>
          <h2 className={styles.sectionTitle}>Um painel de comando comercial com menos ruido e mais capacidade de acao.</h2>
        </div>

        <div className={styles.previewShell}>
          <div className={styles.previewRail}>
            <div className={styles.previewRailBlock}>
              <span className={styles.previewRailLabel}>Views</span>
              <span className={styles.previewRailItem}>visao geral</span>
              <span className={styles.previewRailItem}>pipeline</span>
              <span className={styles.previewRailItem}>contatos</span>
              <span className={styles.previewRailItem}>automacoes</span>
            </div>
            <div className={styles.previewRailBlock}>
              <span className={styles.previewRailLabel}>Estado do ambiente</span>
              <span className={styles.previewRailMuted}>demo privada / dados limpos / modo operador</span>
            </div>
          </div>

          <div className={styles.previewWorkspace}>
            <div className={styles.previewStats}>
              <div className={styles.previewStat}>
                <span>velocidade de proposta</span>
                <strong>+18%</strong>
              </div>
              <div className={styles.previewStat}>
                <span>qualidade do pipeline</span>
                <strong>94 pts</strong>
              </div>
              <div className={styles.previewStat}>
                <span>cobertura de proxima acao</span>
                <strong>87%</strong>
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

      <section id="deployment" className={styles.section}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionEyebrow}>Faixas de implantacao</span>
          <h2 className={styles.sectionTitle}>Niveis diferentes de implementacao, uma linguagem operacional consistente.</h2>
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

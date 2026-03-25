"use client";

import { useMemo, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  BrainCircuit,
  Database,
  Globe2,
  Radar,
  Server,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import styles from './vortex.module.css';

type Timeframe = '24h' | '7d' | '30d';
type RegionId = 'global' | 'sa-east' | 'us-east' | 'eu-west';

type RegionView = {
  id: RegionId;
  label: string;
  headline: string;
  note: string;
  metrics: Array<{ label: string; value: string; detail: string }>;
  chart: number[];
  clusters: Array<{ name: string; latency: string; status: string; tone: 'healthy' | 'watch' | 'risk' }>;
  workloads: Array<{ name: string; throughput: string; fill: string; owner: string }>;
  alerts: Array<{ title: string; copy: string; tone: 'healthy' | 'watch' | 'risk' }>;
  automations: Array<{ title: string; state: string; copy: string }>;
};

const timeframeLabels: Record<Timeframe, string> = {
  '24h': 'Últimas 24h',
  '7d': 'Últimos 7 dias',
  '30d': 'Últimos 30 dias',
};

const platformModules: Array<{ icon: LucideIcon; title: string; copy: string; meta: string }> = [
  {
    icon: Database,
    title: 'Telemetria distribuída',
    copy: 'Coleta contínua de eventos, volumes e comportamento de cluster em uma superfície única.',
    meta: 'streams / logs / ingestão',
  },
  {
    icon: Radar,
    title: 'Leitura de risco operacional',
    copy: 'Incidentes, latência e gargalos aparecem cedo para orientar priorização técnica e executiva.',
    meta: 'alertas / risco / resposta',
  },
  {
    icon: BrainCircuit,
    title: 'Camada de análise assistida',
    copy: 'Sugestões de correção e mudanças de capacidade entram como apoio, sem esconder o dado bruto.',
    meta: 'insights / forecast / capacity',
  },
];

const regionViews: Record<RegionId, RegionView> = {
  global: {
    id: 'global',
    label: 'Global',
    headline: 'Leitura consolidada de infraestrutura, tráfego e anomalia em múltiplas regiões.',
    note: 'Visão executiva para acompanhar capacidade, estabilidade e custo operacional em escala.',
    metrics: [
      { label: 'Tráfego processado', value: '48,6 TB/s', detail: '+12% sobre a janela anterior' },
      { label: 'Eventos analisados', value: '2,8 bi', detail: 'cobertura de 99,4% da malha' },
      { label: 'Confiança analítica', value: '98,2%', detail: 'modelos de detecção calibrados' },
      { label: 'Regiões ativas', value: '12', detail: '4 com redundância reforçada' },
    ],
    chart: [42, 44, 45, 47, 46, 49, 51, 50, 48, 52, 54, 53],
    clusters: [
      { name: 'Global mesh', latency: '42 ms', status: 'estável', tone: 'healthy' },
      { name: 'Data lake replication', latency: '58 ms', status: 'atenção moderada', tone: 'watch' },
      { name: 'Anomaly engine', latency: '39 ms', status: 'saudável', tone: 'healthy' },
      { name: 'Cold storage bridge', latency: '71 ms', status: 'janela degradada', tone: 'risk' },
    ],
    workloads: [
      { name: 'Ingestão de telemetria bruta', throughput: '12,1 TB/s', fill: '84%', owner: 'core pipeline' },
      { name: 'Normalização de eventos críticos', throughput: '8,7 TB/s', fill: '68%', owner: 'stream ops' },
      { name: 'Predição de anomalia regional', throughput: '6,4 TB/s', fill: '59%', owner: 'analytics' },
    ],
    alerts: [
      { title: 'Replicação fria acima da meta', copy: 'A ponte de armazenamento excedeu a janela média em 13%.', tone: 'risk' },
      { title: 'Oscilação em ingestão asiática', copy: 'A malha absorveu o pico sem perda, mas pede revisão de capacidade.', tone: 'watch' },
      { title: 'Motor de detecção estável', copy: 'Nenhuma queda de confiança na rodada atual.', tone: 'healthy' },
    ],
    automations: [
      { title: 'Escalonamento de ingestão', state: 'ativo', copy: 'Reforça nós de stream quando a taxa ultrapassa 47 TB/s.' },
      { title: 'Proteção de latência', state: 'ativo', copy: 'Redistribui consultas pesadas para regiões com folga operacional.' },
      { title: 'Digest executivo', state: 'agendado', copy: 'Consolida anomalias e custo estimado no fechamento diário.' },
    ],
  },
  'sa-east': {
    id: 'sa-east',
    label: 'São Paulo',
    headline: 'Monitoramento de carga e latência na operação latino-americana.',
    note: 'Região de referência para clientes no Brasil, com foco em throughput, risco e previsibilidade.',
    metrics: [
      { label: 'Tráfego processado', value: '9,4 TB/s', detail: '+8% sobre a janela anterior' },
      { label: 'Eventos analisados', value: '612 mi', detail: 'pico puxado por integração financeira' },
      { label: 'Latência média', value: '33 ms', detail: 'abaixo da meta operacional' },
      { label: 'Alertas ativos', value: '2', detail: 'sem incidente crítico aberto' },
    ],
    chart: [24, 26, 28, 27, 29, 31, 30, 33, 34, 33, 35, 36],
    clusters: [
      { name: 'São Paulo edge', latency: '33 ms', status: 'saudável', tone: 'healthy' },
      { name: 'Finance replication', latency: '41 ms', status: 'estável', tone: 'healthy' },
      { name: 'ML inference lane', latency: '54 ms', status: 'atenção moderada', tone: 'watch' },
      { name: 'Audit archive', latency: '61 ms', status: 'sob observação', tone: 'watch' },
    ],
    workloads: [
      { name: 'Conciliação em tempo real', throughput: '3,1 TB/s', fill: '73%', owner: 'finance ops' },
      { name: 'Enriquecimento de evento', throughput: '2,8 TB/s', fill: '66%', owner: 'data products' },
      { name: 'Cluster de busca operacional', throughput: '1,9 TB/s', fill: '58%', owner: 'platform' },
    ],
    alerts: [
      { title: 'Inferência com fila acima do ideal', copy: 'Revisar reserva de capacidade para a janela do início da tarde.', tone: 'watch' },
      { title: 'Replicação financeira estável', copy: 'Sem perda ou atraso relevante na última rodada.', tone: 'healthy' },
      { title: 'Pico previsto para fechamento', copy: 'O forecast indica alta de 11% nas próximas 6 horas.', tone: 'watch' },
    ],
    automations: [
      { title: 'Balanceamento de consultas', state: 'ativo', copy: 'Protege a camada de busca quando o tráfego regional sobe.' },
      { title: 'Detecção de atraso contábil', state: 'ativo', copy: 'Abre alerta quando a fila financeira perde cadência.' },
      { title: 'Revisão de capacidade', state: 'rascunho', copy: 'Sugere expansão preventiva para o ciclo de faturamento.' },
    ],
  },
  'us-east': {
    id: 'us-east',
    label: 'US East',
    headline: 'Base principal para ingestão pesada e sincronização entre ambientes corporativos.',
    note: 'Região com maior volume bruto, usada para absorção inicial e distribuição para processamento.',
    metrics: [
      { label: 'Tráfego processado', value: '18,2 TB/s', detail: '+15% na última janela' },
      { label: 'Eventos analisados', value: '1,2 bi', detail: 'forte concentração em streaming bruto' },
      { label: 'Latência média', value: '46 ms', detail: 'dentro da faixa de tolerância' },
      { label: 'Alertas ativos', value: '3', detail: '1 com resposta em andamento' },
    ],
    chart: [32, 35, 36, 38, 40, 39, 43, 45, 47, 46, 48, 50],
    clusters: [
      { name: 'Primary ingest mesh', latency: '46 ms', status: 'saudável', tone: 'healthy' },
      { name: 'Cold archive relay', latency: '69 ms', status: 'janela degradada', tone: 'risk' },
      { name: 'Realtime compute lane', latency: '52 ms', status: 'atenção moderada', tone: 'watch' },
      { name: 'Cross-region broker', latency: '48 ms', status: 'estável', tone: 'healthy' },
    ],
    workloads: [
      { name: 'Absorção de dados brutos', throughput: '6,8 TB/s', fill: '87%', owner: 'stream core' },
      { name: 'Replicação entre regiões', throughput: '4,4 TB/s', fill: '71%', owner: 'infra platform' },
      { name: 'Filtragem de anomalias', throughput: '3,3 TB/s', fill: '63%', owner: 'analytics' },
    ],
    alerts: [
      { title: 'Arquivo frio degradado', copy: 'Tempo de escrita acima do esperado em um dos bridges de storage.', tone: 'risk' },
      { title: 'Tráfego bruto acima do normal', copy: 'A capacidade seguiu íntegra, mas a margem caiu 7 pontos.', tone: 'watch' },
      { title: 'Malha principal íntegra', copy: 'Nenhum erro em replicação inter-regional nesta janela.', tone: 'healthy' },
    ],
    automations: [
      { title: 'Scale-out preventivo', state: 'ativo', copy: 'Reserva computação extra quando a ingestão cruza a faixa de risco.' },
      { title: 'Proteção de storage', state: 'ativo', copy: 'Redireciona escrita para trilhas secundárias em caso de degradação.' },
      { title: 'Digest técnico', state: 'agendado', copy: 'Entrega resumo operacional para o time de plataforma.' },
    ],
  },
  'eu-west': {
    id: 'eu-west',
    label: 'EU West',
    headline: 'Ambiente de analytics com foco em compliance, auditoria e estabilidade de consulta.',
    note: 'Região mais sensível para governança, rastreio de evento e consulta executiva.',
    metrics: [
      { label: 'Tráfego processado', value: '11,0 TB/s', detail: '+6% sobre a janela anterior' },
      { label: 'Eventos analisados', value: '834 mi', detail: 'alto volume em trilhas auditáveis' },
      { label: 'Latência média', value: '38 ms', detail: 'consistente nas últimas 24h' },
      { label: 'Alertas ativos', value: '1', detail: 'ambiente com baixo ruído' },
    ],
    chart: [27, 28, 29, 31, 30, 32, 34, 35, 36, 37, 38, 39],
    clusters: [
      { name: 'Compliance core', latency: '38 ms', status: 'saudável', tone: 'healthy' },
      { name: 'Audit query mesh', latency: '44 ms', status: 'estável', tone: 'healthy' },
      { name: 'Historical lake sync', latency: '57 ms', status: 'atenção moderada', tone: 'watch' },
      { name: 'Governance relay', latency: '41 ms', status: 'saudável', tone: 'healthy' },
    ],
    workloads: [
      { name: 'Consulta auditável', throughput: '3,6 TB/s', fill: '76%', owner: 'governance' },
      { name: 'Enriquecimento regulatório', throughput: '2,2 TB/s', fill: '62%', owner: 'risk systems' },
      { name: 'Exportação executiva', throughput: '1,7 TB/s', fill: '49%', owner: 'reporting' },
    ],
    alerts: [
      { title: 'Sincronização histórica acima da meta', copy: 'O lago histórico teve leve aumento de latência no começo da manhã.', tone: 'watch' },
      { title: 'Consultas críticas estáveis', copy: 'Nenhuma interrupção nas rotas executivas da região.', tone: 'healthy' },
      { title: 'Compliance sem desvio', copy: 'As trilhas auditáveis mantiveram integridade total na janela.', tone: 'healthy' },
    ],
    automations: [
      { title: 'Proteção de trilha auditável', state: 'ativo', copy: 'Congela mudanças de schema quando detecta divergência sensível.' },
      { title: 'Digest de compliance', state: 'ativo', copy: 'Resumo diário com eventos críticos e integridade regulatória.' },
      { title: 'Forecast de consulta', state: 'rascunho', copy: 'Modelo para prever pressão de demanda em relatórios executivos.' },
    ],
  },
};

export default function VortexClient() {
  const [timeframe, setTimeframe] = useState<Timeframe>('24h');
  const [activeRegion, setActiveRegion] = useState<RegionId>('global');

  const currentView = useMemo(() => regionViews[activeRegion], [activeRegion]);
  const chartMax = useMemo(() => Math.max(...currentView.chart), [currentView.chart]);

  const linePath = useMemo(() => {
    return currentView.chart
      .map((value, index) => {
        const x = (index / (currentView.chart.length - 1)) * 100;
        const y = 100 - (value / chartMax) * 100;
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
      })
      .join(' ');
  }, [chartMax, currentView.chart]);

  return (
    <main className={styles.page}>
      <div className={styles.backdrop} aria-hidden="true" />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Produto Nexus / Vortex Analytics</span>
          <h1 className={styles.heroTitle}>Leitura executiva de dados distribuídos, sem teatralidade de beta.</h1>
          <p className={styles.heroText}>
            O Vortex foi redesenhado como uma plataforma de analytics para infraestrutura, telemetria e risco
            operacional. A proposta é mostrar capacidade de produto, interface e raciocínio de dados em um contexto
            mais valioso para o portfólio da Nexus.
          </p>

          <div className={styles.actionRow}>
            <button type="button" className={styles.primaryAction} onClick={() => setTimeframe('24h')}>
              Atualizar leitura de agora
            </button>
            <a href="#workspace" className={styles.secondaryAction}>
              Explorar ambiente <ArrowUpRight size={16} />
            </a>
          </div>

          <div className={styles.metricGrid}>
            {currentView.metrics.map((metric) => (
              <article key={metric.label} className={styles.metricCard}>
                <span className={styles.metricLabel}>{metric.label}</span>
                <strong className={styles.metricValue}>{metric.value}</strong>
                <p>{metric.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className={styles.heroPanel}>
          <div className={styles.panelHeader}>
            <span className={styles.panelEyebrow}>Controle de leitura</span>
            <span className={styles.panelMeta}>{timeframeLabels[timeframe]}</span>
          </div>

          <div className={styles.segmentedRow}>
            {(['24h', '7d', '30d'] as Timeframe[]).map((item) => (
              <button
                key={item}
                type="button"
                className={`${styles.segmentedButton} ${timeframe === item ? styles.segmentedButtonActive : ''}`}
                onClick={() => setTimeframe(item)}
              >
                {timeframeLabels[item]}
              </button>
            ))}
          </div>

          <div className={styles.regionList}>
            {(['global', 'sa-east', 'us-east', 'eu-west'] as RegionId[]).map((regionId) => (
              <button
                key={regionId}
                type="button"
                className={`${styles.regionButton} ${activeRegion === regionId ? styles.regionButtonActive : ''}`}
                onClick={() => setActiveRegion(regionId)}
              >
                <Globe2 size={15} strokeWidth={1.8} />
                <span>{regionViews[regionId].label}</span>
              </button>
            ))}
          </div>

          <div className={styles.panelBlock}>
            <span className={styles.panelLabel}>Leitura atual</span>
            <h2>{currentView.label}</h2>
            <p>{currentView.headline}</p>
          </div>

          <div className={styles.panelFoot}>
            <ShieldCheck size={16} strokeWidth={1.8} />
            <span>Superfície pensada para times executivos, plataforma e analytics.</span>
          </div>
        </aside>
      </section>

      <section className={styles.moduleGrid}>
        {platformModules.map((module) => {
          const Icon = module.icon;

          return (
            <article key={module.title} className={styles.moduleCard}>
              <div className={styles.moduleIcon}>
                <Icon size={18} strokeWidth={1.8} />
              </div>
              <div className={styles.moduleBody}>
                <h3>{module.title}</h3>
                <p>{module.copy}</p>
                <span>{module.meta}</span>
              </div>
            </article>
          );
        })}
      </section>

      <section id="workspace" className={styles.workspaceGrid}>
        <section className={`${styles.panel} ${styles.chartPanel}`}>
          <div className={styles.panelHeader}>
            <div>
              <span className={styles.panelEyebrow}>Mapa de throughput</span>
              <h2>{currentView.label}</h2>
            </div>
            <span className={styles.panelMeta}>{timeframeLabels[timeframe]}</span>
          </div>

          <p className={styles.panelCopy}>{currentView.note}</p>

          <div className={styles.chartShell}>
            <div className={styles.chartLegend}>
              <span>Taxa observada</span>
              <strong>{currentView.metrics[0].value}</strong>
            </div>

            <svg viewBox="0 0 100 100" className={styles.chart} preserveAspectRatio="none" aria-hidden="true">
              {[20, 40, 60, 80].map((y) => (
                <line key={y} x1="0" y1={y} x2="100" y2={y} className={styles.chartLine} />
              ))}
              <path d={linePath} className={styles.chartPath} />
            </svg>
          </div>

          <div className={styles.workloadRow}>
            {currentView.workloads.map((item) => (
              <article key={item.name} className={styles.workloadCard}>
                <div className={styles.workloadHead}>
                  <strong>{item.name}</strong>
                  <span>{item.throughput}</span>
                </div>
                <span className={styles.workloadBar}>
                  <span style={{ width: item.fill }} />
                </span>
                <p>{item.owner}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.panel} ${styles.alertPanel}`}>
          <div className={styles.panelHeader}>
            <div>
              <span className={styles.panelEyebrow}>Radar operacional</span>
              <h2>Alertas e prioridades</h2>
            </div>
            <AlertTriangle size={18} strokeWidth={1.8} className={styles.warningIcon} />
          </div>

          <div className={styles.alertList}>
            {currentView.alerts.map((alert) => (
              <article key={alert.title} className={styles.alertCard}>
                <span className={`${styles.toneDot} ${styles[alert.tone]}`} />
                <div>
                  <strong>{alert.title}</strong>
                  <p>{alert.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.panel} ${styles.clusterPanel}`}>
          <div className={styles.panelHeader}>
            <div>
              <span className={styles.panelEyebrow}>Estado de cluster</span>
              <h2>Regiões monitoradas</h2>
            </div>
            <Server size={18} strokeWidth={1.8} className={styles.panelAccent} />
          </div>

          <div className={styles.clusterList}>
            {currentView.clusters.map((cluster) => (
              <div key={cluster.name} className={styles.clusterRow}>
                <div>
                  <strong>{cluster.name}</strong>
                  <p>{cluster.latency}</p>
                </div>
                <span className={`${styles.statusTag} ${styles[cluster.tone]}`}>{cluster.status}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.panel} ${styles.automationPanel}`}>
          <div className={styles.panelHeader}>
            <div>
              <span className={styles.panelEyebrow}>Camada de automação</span>
              <h2>Playbooks em execução</h2>
            </div>
            <Zap size={18} strokeWidth={1.8} className={styles.panelAccent} />
          </div>

          <div className={styles.automationList}>
            {currentView.automations.map((item) => (
              <article key={item.title} className={styles.automationCard}>
                <div className={styles.automationHead}>
                  <strong>{item.title}</strong>
                  <span>{item.state}</span>
                </div>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.panel} ${styles.insightPanel}`}>
          <div className={styles.panelHeader}>
            <div>
              <span className={styles.panelEyebrow}>Resumo analítico</span>
              <h2>O que o Vortex entrega ao portfólio</h2>
            </div>
            <Activity size={18} strokeWidth={1.8} className={styles.panelAccent} />
          </div>

          <div className={styles.insightList}>
            <article className={styles.insightCard}>
              <strong>Contexto de produto</strong>
              <p>Mostra a Nexus operando além de sites institucionais, com uma demo SaaS mais madura e estratégica.</p>
            </article>
            <article className={styles.insightCard}>
              <strong>Interface com densidade útil</strong>
              <p>Trabalha métrica, risco, cluster e automação em uma linguagem que parece produto real.</p>
            </article>
            <article className={styles.insightCard}>
              <strong>Valor comercial claro</strong>
              <p>Ajuda a apresentar capacidade em dashboards, plataformas internas e superfícies B2B complexas.</p>
            </article>
          </div>
        </section>
      </section>
    </main>
  );
}

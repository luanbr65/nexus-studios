'use client';

import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  ArrowUpRight,
  Bell,
  Bot,
  Briefcase,
  Building2,
  CheckCircle2,
  CircleAlert,
  Clock3,
  Layers3,
  Mail,
  MessagesSquare,
  Phone,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

type TabId = 'overview' | 'pipeline' | 'contacts' | 'automation';

const navigation: Array<{ id: TabId; label: string; icon: LucideIcon }> = [
  { id: 'overview', label: 'Visão geral', icon: Activity },
  { id: 'pipeline', label: 'Pipeline', icon: Workflow },
  { id: 'contacts', label: 'Contatos', icon: Users },
  { id: 'automation', label: 'Automações', icon: Bot },
];

const signalCards = [
  { label: 'Pipeline ativo', value: 'R$ 393k', delta: '+18%', note: 'contra o mes anterior' },
  { label: 'Propostas em revisão', value: '12', delta: '+4', note: 'contas com alta intenção' },
  { label: 'Cobertura de próxima ação', value: '87%', delta: '+9%', note: 'deals com próximo passo definido' },
  { label: 'Tempo médio de resposta', value: '8h', delta: '-2h', note: 'após rotinas de automação' },
];

const healthSignals = [
  { label: 'Saúde do pipeline', value: '94 pts', tone: 'live', copy: 'Board sem gargalo estrutural nesta rodada.' },
  { label: 'Deals em risco', value: '05', tone: 'hot', copy: 'Contas com silêncio ou dependência de aprovação.' },
  { label: 'Cadência do time', value: 'forte', tone: 'qualified', copy: 'Owners com follow-up consistente nas últimas 48h.' },
];

const deals = [
  {
    id: 1,
    company: 'Atlas Health',
    owner: 'Marina Costa',
    value: 'R$ 48k',
    stage: 'Proposta',
    stageId: 'proposal',
    probability: '72%',
    nextStep: 'Revisão final de precificação com CFO',
    priority: 'hot',
    health: 'risco de atraso',
  },
  {
    id: 2,
    company: 'Northline Commerce',
    owner: 'Igor Lima',
    value: 'R$ 31k',
    stage: 'Qualificado',
    stageId: 'qualified',
    probability: '54%',
    nextStep: 'Mapear bloqueios jurídicos',
    priority: 'warm',
    health: 'esperando resposta',
  },
  {
    id: 3,
    company: 'Vertex Mobility',
    owner: 'Julia Prado',
    value: 'R$ 19k',
    stage: 'Lead',
    stageId: 'lead',
    probability: '29%',
    nextStep: 'Rodar call de discovery',
    priority: 'watch',
    health: 'descoberta inicial',
  },
  {
    id: 4,
    company: 'Blue Sigma',
    owner: 'Luan Borges',
    value: 'R$ 64k',
    stage: 'Negociação',
    stageId: 'negotiation',
    probability: '81%',
    nextStep: 'Aprovar escopo final',
    priority: 'hot',
    health: 'alta aderencia',
  },
  {
    id: 5,
    company: 'Aurora Retail',
    owner: 'Paula Souza',
    value: 'R$ 27k',
    stage: 'Qualificado',
    stageId: 'qualified',
    probability: '47%',
    nextStep: 'Confirmar checklist de integração',
    priority: 'warm',
    health: 'aguardando integração',
  },
  {
    id: 6,
    company: 'Prime Field',
    owner: 'Rafa Mendes',
    value: 'R$ 15k',
    stage: 'Lead',
    stageId: 'lead',
    probability: '24%',
    nextStep: 'Primeiro follow-up apos inbound',
    priority: 'watch',
    health: 'baixo contexto',
  },
];

const tasks = [
  { id: 1, title: 'Enviar proposta revisada para Atlas Health', due: 'Hoje / 17:30', owner: 'Marina', tone: 'hot' },
  { id: 2, title: 'Revisar notas jurídicas de Blue Sigma', due: 'Hoje / 19:00', owner: 'Luan', tone: 'warm' },
  { id: 3, title: 'Rodar checklist de qualificação em Aurora Retail', due: 'Amanhã / 10:00', owner: 'Paula', tone: 'warm' },
  { id: 4, title: 'Fechar loop do inbound de Prime Field', due: 'Amanhã / 14:00', owner: 'Rafa', tone: 'watch' },
];

const riskItems = [
  { id: 1, title: 'Atlas Health sem retorno do financeiro', impact: 'pode atrasar fechamento em 48h', tone: 'hot' },
  { id: 2, title: 'Northline depende de validação jurídica', impact: 'chance de estagnar em proposta', tone: 'warm' },
  { id: 3, title: 'Prime Field entrou com dados incompletos', impact: 'risco de qualificação fraca', tone: 'watch' },
];

const pipelineStages = [
  { id: 'lead', label: 'Lead', count: 14, value: 'R$ 84k', fill: '76%' },
  { id: 'qualified', label: 'Qualificado', count: 9, value: 'R$ 132k', fill: '61%' },
  { id: 'proposal', label: 'Proposta', count: 6, value: 'R$ 103k', fill: '44%' },
  { id: 'negotiation', label: 'Negociação', count: 3, value: 'R$ 74k', fill: '28%' },
];

const contacts = [
  {
    id: 1,
    name: 'Marina Costa',
    company: 'Atlas Health',
    role: 'Diretora de Receita',
    channel: 'Email + WhatsApp',
    health: 'alta aderência',
    nextTouch: 'Revisão de proposta hoje',
    segment: 'enterprise',
  },
  {
    id: 2,
    name: 'Igor Lima',
    company: 'Northline Commerce',
    role: 'Head de Sales Ops',
    channel: 'Email',
    health: 'pedir follow-up',
    nextTouch: 'Responder objeções jurídicas',
    segment: 'mid-market',
  },
  {
    id: 3,
    name: 'Julia Prado',
    company: 'Vertex Mobility',
    role: 'Growth Manager',
    channel: 'Ligação agendada',
    health: 'etapa inicial',
    nextTouch: 'Discovery call em 24h',
    segment: 'growth',
  },
  {
    id: 4,
    name: 'Paula Souza',
    company: 'Aurora Retail',
    role: 'Líder comercial',
    channel: 'Email + ligação',
    health: 'alta aderência',
    nextTouch: 'Validar integrações com o time',
    segment: 'mid-market',
  },
];

const automationRules = [
  {
    id: 1,
    title: 'Recuperação de proposta parada',
    statusId: 'live',
    statusLabel: 'ativa',
    copy: 'Dispara lembrete e revisão do owner quando uma proposta fica 72 horas sem movimento.',
  },
  {
    id: 2,
    title: 'Roteamento de inbound com alta intenção',
    statusId: 'testing',
    statusLabel: 'teste',
    copy: 'Pontua pedidos de entrada e encaminha contas quentes para o operador com resposta mais rápida.',
  },
  {
    id: 3,
    title: 'Digest executivo diário',
    statusId: 'live',
    statusLabel: 'ativa',
    copy: 'Consolida pipeline, deals bloqueados e sinais principais em um resumo da manhã.',
  },
];

const automationQueue = [
  { id: 1, title: '6 deals qualificados sem toque recente', action: 'criar regra de lembrete por owner' },
  { id: 2, title: '2 propostas com escopo em revisão há mais de 48h', action: 'disparar alerta para financeiro e comercial' },
  { id: 3, title: 'variação em tags de responsável', action: 'normalizar nomes antes do próximo relatório' },
];

const activityFeed = [
  { id: 1, title: 'Proposta atualizada', meta: 'Atlas Health / 18 min atrás', tone: 'hot' },
  { id: 2, title: 'Automação executada', meta: 'Recuperação de proposta parada / 51 min atrás', tone: 'warm' },
  { id: 3, title: 'Novo lead qualificado', meta: 'Northline Commerce / 2h atrás', tone: 'live' },
  { id: 4, title: 'Reunião concluída', meta: 'Aurora Retail / 3h atrás', tone: 'live' },
];

export default function PulseDashboard() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  return (
    <div className={styles.shell}>
      <aside className={styles.rail}>
        <div className={styles.brandBlock}>
          <Link href="/pulse-crm" className={styles.brand}>
            <Layers3 size={18} strokeWidth={1.8} />
            <span>Pulse CRM</span>
          </Link>
          <p className={styles.brandText}>Superfície comercial privada desenhada pela Nexus Studio.</p>
        </div>

        <nav className={styles.nav} aria-label="Seções do Pulse CRM">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                className={`${styles.navButton} ${activeTab === item.id ? styles.navButtonActive : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon size={16} strokeWidth={1.9} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className={styles.railCard}>
          <span className={styles.cardLabel}>Modo do sistema</span>
          <strong>Leitura operacional ativada</strong>
          <p>O painel foi desenhado para reduzir ruído visual e destacar prioridades comerciais reais.</p>
          <div className={styles.railMeta}>
            <span>
              <ShieldCheck size={14} strokeWidth={1.8} />
              demo privada
            </span>
            <span>
              <Sparkles size={14} strokeWidth={1.8} />
              dados consistentes
            </span>
          </div>
        </div>

        <div className={styles.railCard}>
          <span className={styles.cardLabel}>Resumo da rodada</span>
          <div className={styles.miniList}>
            <div>
              <strong>05</strong>
              <span>deals em risco</span>
            </div>
            <div>
              <strong>14</strong>
              <span>rotinas ativas</span>
            </div>
            <div>
              <strong>87%</strong>
              <span>próxima ação coberta</span>
            </div>
          </div>
        </div>
      </aside>

      <main className={styles.workspace}>
        <header className={styles.topbar}>
          <div className={styles.topbarCopy}>
            <span className={styles.topline}>Pulse CRM / painel de comando / São Paulo</span>
            <h1>Controle comercial sem ruído de template.</h1>
            <p>Leia sinal, mova deals e acompanhe risco a partir de uma superfície única.</p>
          </div>

          <div className={styles.topbarActions}>
            <label className={styles.search}>
              <Search size={16} strokeWidth={1.8} />
              <input type="search" placeholder="Buscar contas, contatos ou responsáveis" />
            </label>
            <button type="button" className={styles.iconButton} aria-label="Notificações">
              <Bell size={18} strokeWidth={1.8} />
              <span className={styles.badge}>3</span>
            </button>
            <button type="button" className={styles.primaryButton}>
              <Plus size={16} strokeWidth={2} />
              Novo deal
            </button>
          </div>
        </header>

        <div className={styles.commandStrip}>
          <span className={styles.commandChip}>qualidade de dados 99,2%</span>
          <span className={styles.commandChip}>cobertura de follow-up 87%</span>
          <span className={styles.commandChip}>confiança de forecast alta</span>
        </div>

        {activeTab === 'overview' && (
          <div className={styles.viewStack}>
            <section className={styles.signalGrid}>
              {signalCards.map((signal) => (
                <article key={signal.label} className={styles.signalCard}>
                  <span className={styles.signalLabel}>{signal.label}</span>
                  <strong className={styles.signalValue}>{signal.value}</strong>
                  <div className={styles.signalMeta}>
                    <span>{signal.delta}</span>
                    <span>{signal.note}</span>
                  </div>
                </article>
              ))}
            </section>

            <section className={styles.healthGrid}>
              {healthSignals.map((item) => (
                <article key={item.label} className={styles.healthCard}>
                  <div className={styles.healthTop}>
                    <span className={styles.cardLabel}>{item.label}</span>
                    <span className={`${styles.ruleStatus} ${styles[item.tone]}`}>{item.value}</span>
                  </div>
                  <p>{item.copy}</p>
                </article>
              ))}
            </section>

            <div className={styles.overviewGrid}>
              <section className={`${styles.panel} ${styles.priorityPanel}`}>
                <div className={styles.panelHeader}>
                  <div>
                    <span className={styles.cardLabel}>Deals prioritarios</span>
                    <h2>Contas que pedem leitura imediata do operador.</h2>
                  </div>
                  <button type="button" className={styles.textButton}>
                    Abrir board <ArrowUpRight size={14} />
                  </button>
                </div>

                <div className={styles.dealList}>
                  {deals.slice(0, 4).map((deal) => (
                    <article key={deal.id} className={styles.dealCard}>
                      <div className={styles.dealCardTop}>
                        <div>
                          <h3>{deal.company}</h3>
                          <p>{deal.owner}</p>
                        </div>
                        <span className={`${styles.stageBadge} ${styles[deal.stageId]}`}>{deal.stage}</span>
                      </div>
                      <div className={styles.dealCardMeta}>
                        <span>{deal.value}</span>
                        <span>{deal.probability} de confiança</span>
                      </div>
                      <div className={styles.nextStep}>
                        <Clock3 size={14} strokeWidth={1.8} />
                        <span>{deal.nextStep}</span>
                      </div>
                      <span className={styles.inlineNote}>{deal.health}</span>
                    </article>
                  ))}
                </div>
              </section>

              <section className={`${styles.panel} ${styles.queuePanel}`}>
                <div className={styles.panelHeader}>
                  <div>
                    <span className={styles.cardLabel}>Fila operacional</span>
                    <h2>Trabalho que mantém o pipeline honesto.</h2>
                  </div>
                </div>

                <div className={styles.queueList}>
                  {tasks.map((task) => (
                    <div key={task.id} className={styles.queueItem}>
                      <span className={`${styles.queueTone} ${styles[task.tone]}`}></span>
                      <div>
                        <strong>{task.title}</strong>
                        <p>
                          {task.due} / {task.owner}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.stateNote}>
                  <CheckCircle2 size={16} strokeWidth={1.8} />
                  <span>Nenhum bloqueio crítico fora do radar nesta rodada.</span>
                </div>
              </section>

              <section className={`${styles.panel} ${styles.pipelinePanel}`}>
                <div className={styles.panelHeader}>
                  <div>
                    <span className={styles.cardLabel}>Forma do pipeline</span>
                    <h2>Distribuição das oportunidades ao longo do fluxo comercial.</h2>
                  </div>
                </div>

                <div className={styles.stageList}>
                  {pipelineStages.map((stage) => (
                    <div key={stage.id} className={styles.stageRow}>
                      <div className={styles.stageCopy}>
                        <strong>{stage.label}</strong>
                        <span>
                          {stage.count} contas / {stage.value}
                        </span>
                      </div>
                      <span className={styles.stageBar}>
                        <span style={{ width: stage.fill }} />
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section className={`${styles.panel} ${styles.activityPanel}`}>
                <div className={styles.panelHeader}>
                  <div>
                    <span className={styles.cardLabel}>Atividade recente</span>
                    <h2>Sinais novos entrando na camada operacional.</h2>
                  </div>
                </div>

                <div className={styles.activityList}>
                  {activityFeed.map((item) => (
                    <div key={item.id} className={styles.activityItem}>
                      <span className={`${styles.activityTone} ${styles[item.tone]}`}></span>
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.meta}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className={`${styles.panel} ${styles.riskPanel}`}>
                <div className={styles.panelHeader}>
                  <div>
                    <span className={styles.cardLabel}>Radar de risco</span>
                    <h2>Onde a rodada pode perder velocidade.</h2>
                  </div>
                </div>

                <div className={styles.riskList}>
                  {riskItems.map((risk) => (
                    <div key={risk.id} className={styles.riskItem}>
                      <span className={`${styles.activityTone} ${styles[risk.tone]}`}></span>
                      <div>
                        <strong>{risk.title}</strong>
                        <p>{risk.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        )}

        {activeTab === 'pipeline' && (
          <div className={styles.viewStack}>
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.cardLabel}>Board comercial</span>
                <h2>Mova contas com contexto completo preso ao deal.</h2>
              </div>
              <p>Valor total monitorado: R$ 393k</p>
            </div>

            <div className={styles.board}>
              {pipelineStages.map((stage) => {
                const stageDeals = deals.filter((deal) => deal.stageId === stage.id);

                return (
                  <section key={stage.id} className={styles.boardColumn}>
                    <div className={styles.boardColumnHeader}>
                      <div>
                        <strong>{stage.label}</strong>
                        <span>{stage.count} contas</span>
                      </div>
                      <span>{stage.value}</span>
                    </div>

                    <div className={styles.boardCards}>
                      {stageDeals.length > 0 ? (
                        stageDeals.map((deal) => (
                          <article key={deal.id} className={styles.boardCard}>
                            <div className={styles.boardCardTop}>
                              <h3>{deal.company}</h3>
                              <span className={`${styles.priorityDot} ${styles[deal.priority]}`}></span>
                            </div>
                            <p>{deal.owner}</p>
                            <strong>{deal.value}</strong>
                            <div className={styles.boardMeta}>
                              <span>{deal.probability} de confiança</span>
                              <span>{deal.health}</span>
                            </div>
                            <div className={styles.boardFooter}>{deal.nextStep}</div>
                          </article>
                        ))
                      ) : (
                        <div className={styles.emptyState}>
                          <span>Nenhum deal nesta etapa agora.</span>
                        </div>
                      )}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className={styles.viewStack}>
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.cardLabel}>Camada de contato</span>
                <h2>Memória compartilhada da conta, não notas quebradas em vários lugares.</h2>
              </div>
              <button type="button" className={styles.secondaryButton}>
                <Plus size={16} strokeWidth={2} />
                Novo contato
              </button>
            </div>

            <div className={styles.contactGrid}>
              {contacts.map((contact) => (
                <article key={contact.id} className={styles.contactCard}>
                  <div className={styles.contactHeader}>
                    <div className={styles.contactAvatar}>
                      {contact.name
                        .split(' ')
                        .map((part) => part[0])
                        .join('')}
                    </div>
                    <div>
                      <h3>{contact.name}</h3>
                      <p>{contact.role}</p>
                    </div>
                  </div>

                  <div className={styles.contactMeta}>
                    <span>
                      <Building2 size={14} strokeWidth={1.8} />
                      {contact.company}
                    </span>
                    <span>
                      <MessagesSquare size={14} strokeWidth={1.8} />
                      {contact.channel}
                    </span>
                    <span>
                      <Briefcase size={14} strokeWidth={1.8} />
                      {contact.health}
                    </span>
                  </div>

                  <div className={styles.contactStateRow}>
                    <div className={styles.contactState}>
                      <Clock3 size={14} strokeWidth={1.8} />
                      <span>{contact.nextTouch}</span>
                    </div>
                    <span className={styles.segmentTag}>{contact.segment}</span>
                  </div>

                  <div className={styles.contactActions}>
                    <button type="button" className={styles.iconButton}>
                      <Mail size={16} strokeWidth={1.8} />
                    </button>
                    <button type="button" className={styles.iconButton}>
                      <Phone size={16} strokeWidth={1.8} />
                    </button>
                    <button type="button" className={styles.iconButton}>
                      <ArrowUpRight size={16} strokeWidth={1.8} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'automation' && (
          <div className={styles.viewStack}>
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.cardLabel}>Camada de automação</span>
                <h2>Playbooks que aceleram a execução sem tirar contexto do operador.</h2>
              </div>
              <button type="button" className={styles.secondaryButton}>
                <Settings2 size={16} strokeWidth={1.8} />
                Configurar regras
              </button>
            </div>

            <div className={styles.automationGrid}>
              <section className={`${styles.panel} ${styles.automationPanel}`}>
                <div className={styles.panelHeader}>
                  <div>
                    <span className={styles.cardLabel}>Regras em uso</span>
                    <h2>Stack atual de automação</h2>
                  </div>
                </div>

                <div className={styles.ruleList}>
                  {automationRules.map((rule) => (
                    <article key={rule.id} className={styles.ruleCard}>
                      <div className={styles.ruleHeader}>
                        <strong>{rule.title}</strong>
                        <span className={`${styles.ruleStatus} ${styles[rule.statusId]}`}>{rule.statusLabel}</span>
                      </div>
                      <p>{rule.copy}</p>
                    </article>
                  ))}
                </div>

                <div className={styles.stateNote}>
                  <CheckCircle2 size={16} strokeWidth={1.8} />
                  <span>Nenhuma automação com falha crítica neste ambiente.</span>
                </div>
              </section>

              <section className={`${styles.panel} ${styles.automationPanel}`}>
                <div className={styles.panelHeader}>
                  <div>
                    <span className={styles.cardLabel}>Fila de ajuste</span>
                    <h2>Próximos movimentos recomendados</h2>
                  </div>
                </div>

                <div className={styles.guidanceList}>
                  {automationQueue.map((item) => (
                    <div key={item.id} className={styles.guidanceItem}>
                      <Target size={16} strokeWidth={1.8} />
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.action}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.inlineNotice}>
                  <CircleAlert size={16} strokeWidth={1.8} />
                  <span>3 recomendações novas desde a última sincronização.</span>
                </div>
              </section>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

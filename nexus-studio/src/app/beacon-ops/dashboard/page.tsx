'use client';

import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  AlertTriangle,
  ArrowUpRight,
  Bell,
  CalendarRange,
  CheckCircle2,
  ClipboardList,
  Clock3,
  MapPinned,
  MessageSquareWarning,
  Plus,
  Search,
  ShieldCheck,
  Truck,
  Users2,
  Workflow,
  Wrench,
} from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

type TabId = 'overview' | 'queue' | 'teams' | 'automation';

const navigation: Array<{ id: TabId; label: string; icon: LucideIcon }> = [
  { id: 'overview', label: 'Visão geral', icon: ClipboardList },
  { id: 'queue', label: 'Fila crítica', icon: AlertTriangle },
  { id: 'teams', label: 'Equipes', icon: Users2 },
  { id: 'automation', label: 'Automações', icon: Workflow },
];

const metrics = [
  { label: 'Ordens ativas', value: '146', note: '27 com risco de SLA' },
  { label: 'Tempo médio de resposta', value: '18 min', note: 'abaixo da meta do turno' },
  { label: 'Visitas planejadas', value: '34', note: '12 já em campo' },
  { label: 'Cobertura de equipe', value: '93%', note: 'capacidade saudável' },
];

const queue = [
  { id: 1, code: 'INC-2041', title: 'Falha de energia em unidade hospitalar', owner: 'Squad Alfa', severity: 'critical', eta: 'agora' },
  { id: 2, code: 'SRV-1920', title: 'Roteador de filial operando com perda intermitente', owner: 'Squad Delta', severity: 'high', eta: '22 min' },
  { id: 3, code: 'OPS-1407', title: 'Checklist de abertura sem confirmação de técnico', owner: 'Field Sul', severity: 'medium', eta: '39 min' },
  { id: 4, code: 'INC-1982', title: 'Backlog de manutenção corretiva acima da meta', owner: 'Squad Beta', severity: 'high', eta: '48 min' },
];

const teamLoad = [
  { name: 'Squad Alfa', region: 'capital', load: '82%', note: 'prioridade em incidentes críticos' },
  { name: 'Field Sul', region: 'sul e interior', load: '67%', note: 'janela com 4 visitas em andamento' },
  { name: 'Squad Delta', region: 'nordeste', load: '58%', note: 'capacidade boa para novos despachos' },
];

const schedule = [
  { time: '08:30', title: 'Despacho técnico para Hospital Veredas', status: 'em rota' },
  { time: '10:00', title: 'Revisão de SLA com coordenação regional', status: 'confirmado' },
  { time: '11:40', title: 'Troca de equipamento em loja âncora', status: 'pendente de estoque' },
];

const automations = [
  { title: 'Escalonamento de SLA crítico', state: 'ativo', copy: 'Notifica coordenação e reabre capacidade da squad quando uma ordem entra em risco.' },
  { title: 'Digest de turno', state: 'ativo', copy: 'Resumo com backlog, deslocamento e incidentes críticos enviado no fechamento de cada janela.' },
  { title: 'Despacho assistido por região', state: 'teste', copy: 'Sugere técnico ou célula ideal a partir de skill, carga e distância.' },
];

export default function BeaconOpsDashboard() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  return (
    <div className={styles.shell}>
      <aside className={styles.rail}>
        <div className={styles.brandBlock}>
          <Link href="/beacon-ops" className={styles.brand}>
            <Wrench size={18} strokeWidth={1.8} />
            <span>Beacon Ops</span>
          </Link>
          <p>Camada de operação para field service, filas críticas e coordenação de SLA.</p>
        </div>

        <nav className={styles.nav} aria-label="Seções do Beacon Ops">
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

        <div className={styles.sideCard}>
          <span className={styles.cardLabel}>Modo operacional</span>
          <strong>Despacho e SLA ativos</strong>
          <p>Interface pensada para priorizar risco, cobertura de squad e leitura de agenda.</p>
          <div className={styles.sideMeta}>
            <span>
              <ShieldCheck size={14} strokeWidth={1.8} />
              dados controlados
            </span>
            <span>
              <Truck size={14} strokeWidth={1.8} />
              campo em movimento
            </span>
          </div>
        </div>
      </aside>

      <main className={styles.workspace}>
        <header className={styles.topbar}>
          <div className={styles.topbarCopy}>
            <span className={styles.topline}>Beacon Ops / command surface / São Paulo</span>
            <h1>Fila crítica, agenda e resposta técnica em uma única leitura.</h1>
            <p>Produto-demo para operações de serviço, campo e atendimento técnico com foco em ritmo e visibilidade.</p>
          </div>

          <div className={styles.topbarActions}>
            <label className={styles.search}>
              <Search size={16} strokeWidth={1.8} />
              <input type="search" placeholder="Buscar ordem, unidade ou squad" />
            </label>
            <button type="button" className={styles.iconButton} aria-label="Notificações">
              <Bell size={18} strokeWidth={1.8} />
              <span className={styles.badge}>5</span>
            </button>
            <button type="button" className={styles.primaryButton}>
              <Plus size={16} strokeWidth={2} />
              Nova ordem
            </button>
          </div>
        </header>

        <div className={styles.commandStrip}>
          <span className={styles.commandChip}>SLA em risco 9%</span>
          <span className={styles.commandChip}>12 equipes em campo</span>
          <span className={styles.commandChip}>cobertura regional estável</span>
        </div>

        {activeTab === 'overview' && (
          <div className={styles.viewStack}>
            <section className={styles.metricGrid}>
              {metrics.map((item) => (
                <article key={item.label} className={styles.metricCard}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <p>{item.note}</p>
                </article>
              ))}
            </section>

            <div className={styles.mainGrid}>
              <section className={`${styles.panel} ${styles.queuePanel}`}>
                <div className={styles.panelHeader}>
                  <div>
                    <span className={styles.cardLabel}>Fila prioritária</span>
                    <h2>Ordens que pedem leitura imediata.</h2>
                  </div>
                  <button type="button" className={styles.textButton}>
                    Abrir fila <ArrowUpRight size={14} />
                  </button>
                </div>

                <div className={styles.list}>
                  {queue.slice(0, 3).map((item) => (
                    <article key={item.id} className={styles.queueItem}>
                      <div className={styles.queueHead}>
                        <div>
                          <strong>{item.code}</strong>
                          <h3>{item.title}</h3>
                        </div>
                        <span className={`${styles.severityTag} ${styles[item.severity]}`}>{item.severity}</span>
                      </div>
                      <div className={styles.queueMeta}>
                        <span>{item.owner}</span>
                        <span>ETA {item.eta}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className={`${styles.panel} ${styles.schedulePanel}`}>
                <div className={styles.panelHeader}>
                  <div>
                    <span className={styles.cardLabel}>Agenda do turno</span>
                    <h2>Despachos e checkpoints do dia.</h2>
                  </div>
                </div>

                <div className={styles.list}>
                  {schedule.map((item) => (
                    <article key={item.time} className={styles.scheduleItem}>
                      <span className={styles.scheduleTime}>{item.time}</span>
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.status}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className={styles.notice}>
                  <CheckCircle2 size={16} strokeWidth={1.8} />
                  <span>Sem ruptura crítica de escala nesta janela.</span>
                </div>
              </section>

              <section className={`${styles.panel} ${styles.teamPanel}`}>
                <div className={styles.panelHeader}>
                  <div>
                    <span className={styles.cardLabel}>Carga de equipe</span>
                    <h2>Leitura rápida de capacidade por célula.</h2>
                  </div>
                </div>

                <div className={styles.list}>
                  {teamLoad.map((team) => (
                    <article key={team.name} className={styles.teamCard}>
                      <div className={styles.teamHead}>
                        <div>
                          <strong>{team.name}</strong>
                          <p>{team.region}</p>
                        </div>
                        <span>{team.load}</span>
                      </div>
                      <p>{team.note}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>
        )}

        {activeTab === 'queue' && (
          <div className={styles.viewStack}>
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.cardLabel}>Fila crítica</span>
                <h2>Incidentes e ordens em risco de SLA.</h2>
              </div>
              <p>17 itens pedindo atuação priorizada</p>
            </div>

            <div className={styles.queueBoard}>
              {queue.map((item) => (
                <article key={item.id} className={styles.queueBoardCard}>
                  <div className={styles.queueHead}>
                    <div>
                      <strong>{item.code}</strong>
                      <h3>{item.title}</h3>
                    </div>
                    <span className={`${styles.severityTag} ${styles[item.severity]}`}>{item.severity}</span>
                  </div>
                  <div className={styles.queueMeta}>
                    <span>{item.owner}</span>
                    <span>ETA {item.eta}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'teams' && (
          <div className={styles.viewStack}>
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.cardLabel}>Equipes e agenda</span>
                <h2>Despacho, cobertura regional e checkpoints do dia.</h2>
              </div>
              <button type="button" className={styles.secondaryButton}>
                <CalendarRange size={16} strokeWidth={1.8} />
                Reorganizar agenda
              </button>
            </div>

            <div className={styles.teamGrid}>
              {teamLoad.map((team) => (
                <article key={team.name} className={styles.teamPanelCard}>
                  <div className={styles.teamHead}>
                    <div>
                      <strong>{team.name}</strong>
                      <p>{team.region}</p>
                    </div>
                    <span>{team.load}</span>
                  </div>
                  <p>{team.note}</p>
                  <div className={styles.inlineMeta}>
                    <span>
                      <MapPinned size={14} strokeWidth={1.8} />
                      cobertura ativa
                    </span>
                    <span>
                      <Clock3 size={14} strokeWidth={1.8} />
                      turno até 18:00
                    </span>
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
                <span className={styles.cardLabel}>Automações</span>
                <h2>Playbooks para despachar, escalar e fechar ciclo operacional.</h2>
              </div>
              <button type="button" className={styles.secondaryButton}>
                <Workflow size={16} strokeWidth={1.8} />
                Configurar regras
              </button>
            </div>

            <div className={styles.automationGrid}>
              {automations.map((item) => (
                <article key={item.title} className={styles.automationCard}>
                  <div className={styles.automationHead}>
                    <strong>{item.title}</strong>
                    <span>{item.state}</span>
                  </div>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>

            <div className={styles.notice}>
              <MessageSquareWarning size={16} strokeWidth={1.8} />
              <span>3 recomendações novas de ajuste desde o último fechamento.</span>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

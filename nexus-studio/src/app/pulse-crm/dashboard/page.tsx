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
  Users,
  Workflow,
} from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

type TabId = 'overview' | 'pipeline' | 'contacts' | 'automation';

const navigation: Array<{ id: TabId; label: string; icon: LucideIcon }> = [
  { id: 'overview', label: 'Overview', icon: Activity },
  { id: 'pipeline', label: 'Pipeline', icon: Workflow },
  { id: 'contacts', label: 'Contacts', icon: Users },
  { id: 'automation', label: 'Automation', icon: Bot },
];

const signalCards = [
  { label: 'Pipeline ativo', value: 'R$ 393k', delta: '+18%', note: 'month over month' },
  { label: 'Propostas em revisao', value: '12', delta: '+4', note: 'high intent accounts' },
  { label: 'Cobertura de proximos passos', value: '87%', delta: '+9%', note: 'deals with owner action' },
  { label: 'Tempo medio de resposta', value: '8h', delta: '-2h', note: 'after automation rules' },
];

const deals = [
  {
    id: 1,
    company: 'Atlas Health',
    owner: 'Marina Costa',
    value: 'R$ 48k',
    stage: 'Proposal',
    stageId: 'proposal',
    probability: '72%',
    nextStep: 'Pricing review with CFO',
    priority: 'hot',
  },
  {
    id: 2,
    company: 'Northline Commerce',
    owner: 'Igor Lima',
    value: 'R$ 31k',
    stage: 'Qualified',
    stageId: 'qualified',
    probability: '54%',
    nextStep: 'Map legal blockers',
    priority: 'warm',
  },
  {
    id: 3,
    company: 'Vertex Mobility',
    owner: 'Julia Prado',
    value: 'R$ 19k',
    stage: 'Lead',
    stageId: 'lead',
    probability: '29%',
    nextStep: 'Run discovery call',
    priority: 'watch',
  },
  {
    id: 4,
    company: 'Blue Sigma',
    owner: 'Luan Borges',
    value: 'R$ 64k',
    stage: 'Negotiation',
    stageId: 'negotiation',
    probability: '81%',
    nextStep: 'Approve final scope',
    priority: 'hot',
  },
  {
    id: 5,
    company: 'Aurora Retail',
    owner: 'Paula Souza',
    value: 'R$ 27k',
    stage: 'Qualified',
    stageId: 'qualified',
    probability: '47%',
    nextStep: 'Confirm integration checklist',
    priority: 'warm',
  },
  {
    id: 6,
    company: 'Prime Field',
    owner: 'Rafa Mendes',
    value: 'R$ 15k',
    stage: 'Lead',
    stageId: 'lead',
    probability: '24%',
    nextStep: 'First follow-up after inbound',
    priority: 'watch',
  },
];

const tasks = [
  { id: 1, title: 'Send revised proposal to Atlas Health', due: 'Today / 17:30', owner: 'Marina', tone: 'hot' },
  { id: 2, title: 'Review legal notes for Blue Sigma', due: 'Today / 19:00', owner: 'Luan', tone: 'warm' },
  { id: 3, title: 'Run qualification checklist for Aurora Retail', due: 'Tomorrow / 10:00', owner: 'Paula', tone: 'warm' },
  { id: 4, title: 'Close loop with Prime Field inbound', due: 'Tomorrow / 14:00', owner: 'Rafa', tone: 'watch' },
];

const pipelineStages = [
  { id: 'lead', label: 'Lead', count: 14, value: 'R$ 84k', fill: '76%' },
  { id: 'qualified', label: 'Qualified', count: 9, value: 'R$ 132k', fill: '61%' },
  { id: 'proposal', label: 'Proposal', count: 6, value: 'R$ 103k', fill: '44%' },
  { id: 'negotiation', label: 'Negotiation', count: 3, value: 'R$ 74k', fill: '28%' },
];

const contacts = [
  {
    id: 1,
    name: 'Marina Costa',
    company: 'Atlas Health',
    role: 'Revenue Director',
    channel: 'Email + WhatsApp',
    health: 'high fit',
  },
  {
    id: 2,
    name: 'Igor Lima',
    company: 'Northline Commerce',
    role: 'Head of Sales Ops',
    channel: 'Email',
    health: 'needs follow-up',
  },
  {
    id: 3,
    name: 'Julia Prado',
    company: 'Vertex Mobility',
    role: 'Growth Manager',
    channel: 'Call scheduled',
    health: 'early stage',
  },
  {
    id: 4,
    name: 'Paula Souza',
    company: 'Aurora Retail',
    role: 'Commercial Lead',
    channel: 'Email + Call',
    health: 'high fit',
  },
];

const automationRules = [
  {
    id: 1,
    title: 'Stalled proposal recovery',
    status: 'live',
    copy: 'Triggers a reminder and owner review when a proposal has no movement for 72 hours.',
  },
  {
    id: 2,
    title: 'High-intent inbound routing',
    status: 'testing',
    copy: 'Scores inbound requests and routes qualified accounts to the fastest available operator.',
  },
  {
    id: 3,
    title: 'Daily executive digest',
    status: 'live',
    copy: 'Compiles pipeline movement, blocked deals and top signals into one morning summary.',
  },
];

const activityFeed = [
  { id: 1, title: 'Proposal updated', meta: 'Atlas Health / 18 min ago', tone: 'hot' },
  { id: 2, title: 'Automation triggered', meta: 'Stalled proposal recovery / 51 min ago', tone: 'warm' },
  { id: 3, title: 'New lead qualified', meta: 'Northline Commerce / 2h ago', tone: 'live' },
  { id: 4, title: 'Meeting completed', meta: 'Aurora Retail / 3h ago', tone: 'live' },
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
          <p className={styles.brandText}>Private revenue surface by Nexus Studio.</p>
        </div>

        <nav className={styles.nav} aria-label="Pulse CRM sections">
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
          <span className={styles.cardLabel}>System mode</span>
          <strong>Operator view enabled</strong>
          <p>Dashboard chrome is intentionally reduced to keep the focus on live commercial decisions.</p>
          <div className={styles.railMeta}>
            <span>
              <ShieldCheck size={14} strokeWidth={1.8} />
              private demo
            </span>
            <span>
              <Sparkles size={14} strokeWidth={1.8} />
              clean sync
            </span>
          </div>
        </div>
      </aside>

      <main className={styles.workspace}>
        <header className={styles.topbar}>
          <div className={styles.topbarCopy}>
            <span className={styles.topline}>Pulse CRM / command center / Sao Paulo</span>
            <h1>Commercial control without template noise.</h1>
            <p>Read signal, move deals and act on the next best step from one surface.</p>
          </div>

          <div className={styles.topbarActions}>
            <label className={styles.search}>
              <Search size={16} strokeWidth={1.8} />
              <input type="search" placeholder="Search accounts, contacts or owners" />
            </label>
            <button type="button" className={styles.iconButton} aria-label="Notifications">
              <Bell size={18} strokeWidth={1.8} />
              <span className={styles.badge}>3</span>
            </button>
            <button type="button" className={styles.primaryButton}>
              <Plus size={16} strokeWidth={2} />
              New deal
            </button>
          </div>
        </header>

        <div className={styles.commandStrip}>
          <span className={styles.commandChip}>data quality 99.2%</span>
          <span className={styles.commandChip}>follow-up coverage 87%</span>
          <span className={styles.commandChip}>forecast confidence high</span>
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

            <div className={styles.overviewGrid}>
              <section className={`${styles.panel} ${styles.priorityPanel}`}>
                <div className={styles.panelHeader}>
                  <div>
                    <span className={styles.cardLabel}>Priority deals</span>
                    <h2>Accounts demanding immediate operator attention</h2>
                  </div>
                  <button type="button" className={styles.textButton}>
                    Open board <ArrowUpRight size={14} />
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
                        <span>{deal.probability} confidence</span>
                      </div>
                      <div className={styles.nextStep}>
                        <Clock3 size={14} strokeWidth={1.8} />
                        <span>{deal.nextStep}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className={`${styles.panel} ${styles.queuePanel}`}>
                <div className={styles.panelHeader}>
                  <div>
                    <span className={styles.cardLabel}>Ops queue</span>
                    <h2>Work that keeps the pipeline honest</h2>
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
              </section>

              <section className={`${styles.panel} ${styles.pipelinePanel}`}>
                <div className={styles.panelHeader}>
                  <div>
                    <span className={styles.cardLabel}>Pipeline shape</span>
                    <h2>Distribution across the active commercial flow</h2>
                  </div>
                </div>

                <div className={styles.stageList}>
                  {pipelineStages.map((stage) => (
                    <div key={stage.id} className={styles.stageRow}>
                      <div className={styles.stageCopy}>
                        <strong>{stage.label}</strong>
                        <span>
                          {stage.count} accounts / {stage.value}
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
                    <span className={styles.cardLabel}>Recent activity</span>
                    <h2>Latest signals entering the system</h2>
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
            </div>
          </div>
        )}

        {activeTab === 'pipeline' && (
          <div className={styles.viewStack}>
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.cardLabel}>Pipeline board</span>
                <h2>Move accounts with full commercial context attached.</h2>
              </div>
              <p>Total tracked value: R$ 393k</p>
            </div>

            <div className={styles.board}>
              {pipelineStages.map((stage) => (
                <section key={stage.id} className={styles.boardColumn}>
                  <div className={styles.boardColumnHeader}>
                    <div>
                      <strong>{stage.label}</strong>
                      <span>{stage.count} accounts</span>
                    </div>
                    <span>{stage.value}</span>
                  </div>

                  <div className={styles.boardCards}>
                    {deals
                      .filter((deal) => deal.stageId === stage.id)
                      .map((deal) => (
                        <article key={deal.id} className={styles.boardCard}>
                          <div className={styles.boardCardTop}>
                            <h3>{deal.company}</h3>
                            <span className={`${styles.priorityDot} ${styles[deal.priority]}`}></span>
                          </div>
                          <p>{deal.owner}</p>
                          <strong>{deal.value}</strong>
                          <div className={styles.boardFooter}>{deal.nextStep}</div>
                        </article>
                      ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className={styles.viewStack}>
            <div className={styles.sectionHeader}>
              <div>
                <span className={styles.cardLabel}>Contact layer</span>
                <h2>Shared account memory, not fragmented notes.</h2>
              </div>
              <button type="button" className={styles.secondaryButton}>
                <Plus size={16} strokeWidth={2} />
                New contact
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
                <span className={styles.cardLabel}>Automation layer</span>
                <h2>Playbooks that accelerate action without losing context.</h2>
              </div>
              <button type="button" className={styles.secondaryButton}>
                <Settings2 size={16} strokeWidth={1.8} />
                Configure rules
              </button>
            </div>

            <div className={styles.automationGrid}>
              <section className={`${styles.panel} ${styles.automationPanel}`}>
                <div className={styles.panelHeader}>
                  <div>
                    <span className={styles.cardLabel}>Live rules</span>
                    <h2>Current automation stack</h2>
                  </div>
                </div>

                <div className={styles.ruleList}>
                  {automationRules.map((rule) => (
                    <article key={rule.id} className={styles.ruleCard}>
                      <div className={styles.ruleHeader}>
                        <strong>{rule.title}</strong>
                        <span className={`${styles.ruleStatus} ${styles[rule.status]}`}>{rule.status}</span>
                      </div>
                      <p>{rule.copy}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className={`${styles.panel} ${styles.automationPanel}`}>
                <div className={styles.panelHeader}>
                  <div>
                    <span className={styles.cardLabel}>AI guidance</span>
                    <h2>Recommended next improvements</h2>
                  </div>
                </div>

                <div className={styles.guidanceList}>
                  <div className={styles.guidanceItem}>
                    <Sparkles size={16} strokeWidth={1.8} />
                    <div>
                      <strong>Create a rule for silent qualified leads</strong>
                      <p>Six qualified accounts have no owner touch in the last 48 hours.</p>
                    </div>
                  </div>
                  <div className={styles.guidanceItem}>
                    <Sparkles size={16} strokeWidth={1.8} />
                    <div>
                      <strong>Increase proposal review cadence</strong>
                      <p>Proposal-stage accounts convert faster when finance review starts within the same day.</p>
                    </div>
                  </div>
                  <div className={styles.guidanceItem}>
                    <Sparkles size={16} strokeWidth={1.8} />
                    <div>
                      <strong>Normalize owner tags across the board</strong>
                      <p>Owner naming drift is starting to affect report grouping.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

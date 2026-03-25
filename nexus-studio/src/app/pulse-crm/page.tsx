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
  description: 'Revenue operating system with pipeline control, automation and operator-grade visibility.',
};

const principles = [
  {
    index: '01',
    title: 'Structured commercial flow',
    copy: 'Every lead, proposal and handoff lives inside one sequence with clear ownership and next actions.',
  },
  {
    index: '02',
    title: 'Operator-grade visibility',
    copy: 'The interface is built for teams that need to read signal fast, not browse ornamental dashboards.',
  },
  {
    index: '03',
    title: 'Automation with context',
    copy: 'Playbooks accelerate follow-up and qualification without flattening the nuance of each account.',
  },
];

const modules: Array<{ icon: LucideIcon; title: string; copy: string; meta: string }> = [
  {
    icon: Workflow,
    title: 'Pipeline orchestration',
    copy: 'Stage rules, owner accountability and pipeline hygiene built into the operating layer.',
    meta: 'kanban / handoff / SLAs',
  },
  {
    icon: Bot,
    title: 'Commercial automations',
    copy: 'Trigger follow-ups, route hot accounts and keep the team focused on live opportunities.',
    meta: 'playbooks / reminders / triggers',
  },
  {
    icon: BarChart3,
    title: 'Revenue telemetry',
    copy: 'Read conversion, velocity and forecast in one place with less noise and tighter reporting.',
    meta: 'forecast / cadence / conversion',
  },
  {
    icon: MessagesSquare,
    title: 'Shared account memory',
    copy: 'Notes, meetings, objections and contact context stay attached to the deal, not hidden in chat.',
    meta: 'timeline / context / history',
  },
  {
    icon: Database,
    title: 'Clean operating data',
    copy: 'Lead sources, qualification patterns and commercial output stay normalized for future decisions.',
    meta: 'data model / sources / sync',
  },
  {
    icon: ShieldCheck,
    title: 'Controlled access',
    copy: 'Private demos, team roles and operational safeguards keep the surface ready for real usage.',
    meta: 'roles / audit / governance',
  },
];

const deploymentTracks = [
  {
    label: 'Pilot',
    title: 'For teams validating the operating model',
    copy: 'Best for a compact sales squad that needs a cleaner system before expanding process complexity.',
    metric: '2 to 4 weeks',
  },
  {
    label: 'Ops',
    title: 'For teams formalizing revenue operations',
    copy: 'Adds automation, reporting surfaces and role clarity for teams with active pipeline pressure.',
    metric: '4 to 8 weeks',
  },
  {
    label: 'Scale',
    title: 'For multi-operator commercial environments',
    copy: 'Designed for layered workflows, cross-team visibility and private deployment constraints.',
    metric: 'Custom scope',
  },
];

const heroSignals = [
  { value: 'R$ 393k', label: 'active pipeline' },
  { value: '31%', label: 'proposal conversion' },
  { value: '8 days', label: 'avg. response cycle' },
];

export default function PulseCRM() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Nexus Product System / Pulse CRM</span>
            <h1 className={styles.heroTitle}>A revenue control layer for teams that sell with precision.</h1>
            <p className={styles.heroText}>
              Pulse CRM reorganizes leads, proposals and follow-ups into one operational surface. It is designed to
              feel less like a generic SaaS template and more like a reliable command layer for commercial teams.
            </p>

            <div className={styles.heroActions}>
              <Link href="/pulse-crm/dashboard" className={styles.primaryLink}>
                Open product demo <ArrowRight size={16} />
              </Link>
              <a href="#deployment" className={styles.secondaryLink}>
                Review deployment tracks
              </a>
            </div>

            <div className={styles.metricRow}>
              <div className={styles.metricCard}>
                <span className={styles.metricValue}>247</span>
                <span className={styles.metricLabel}>tracked accounts</span>
              </div>
              <div className={styles.metricCard}>
                <span className={styles.metricValue}>14</span>
                <span className={styles.metricLabel}>live automations</span>
              </div>
              <div className={styles.metricCard}>
                <span className={styles.metricValue}>99.2%</span>
                <span className={styles.metricLabel}>data completion</span>
              </div>
            </div>
          </div>

          <aside className={styles.heroPanel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelEyebrow}>Operational snapshot</span>
              <span className={styles.panelTimestamp}>updated 2m ago</span>
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
              <span className={styles.panelBlockLabel}>Operator stack</span>
              <ul className={styles.panelList}>
                <li>Pipeline governance with deal ownership</li>
                <li>Follow-up triggers for stalled accounts</li>
                <li>Shared visibility across qualification and proposal</li>
              </ul>
            </div>

            <div className={styles.panelBlock}>
              <span className={styles.panelBlockLabel}>Why it feels different</span>
              <p className={styles.panelText}>
                Pulse is framed as an operating system, not as a glossy dashboard. The interface is dense where it
                needs to be and quiet everywhere else.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionEyebrow}>Operating principles</span>
          <h2 className={styles.sectionTitle}>Built with the same visual discipline as the Nexus brand.</h2>
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
          <span className={styles.sectionEyebrow}>Core modules</span>
          <h2 className={styles.sectionTitle}>A tighter commercial surface from first touch to closed account.</h2>
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
          <span className={styles.sectionEyebrow}>Interface preview</span>
          <h2 className={styles.sectionTitle}>A commercial command layer with less noise and stronger control.</h2>
        </div>

        <div className={styles.previewShell}>
          <div className={styles.previewRail}>
            <div className={styles.previewRailBlock}>
              <span className={styles.previewRailLabel}>Views</span>
              <span className={styles.previewRailItem}>overview</span>
              <span className={styles.previewRailItem}>pipeline</span>
              <span className={styles.previewRailItem}>contacts</span>
              <span className={styles.previewRailItem}>automation</span>
            </div>
            <div className={styles.previewRailBlock}>
              <span className={styles.previewRailLabel}>Status</span>
              <span className={styles.previewRailMuted}>private demo / clean data / operator mode</span>
            </div>
          </div>

          <div className={styles.previewWorkspace}>
            <div className={styles.previewStats}>
              <div className={styles.previewStat}>
                <span>proposal velocity</span>
                <strong>+18%</strong>
              </div>
              <div className={styles.previewStat}>
                <span>pipeline quality</span>
                <strong>94 pts</strong>
              </div>
              <div className={styles.previewStat}>
                <span>next action coverage</span>
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
                <span className={styles.flowLabel}>Qualified</span>
                <span className={styles.flowBar}>
                  <span style={{ width: '59%' }} />
                </span>
              </div>
              <div className={styles.flowStage}>
                <span className={styles.flowLabel}>Proposal</span>
                <span className={styles.flowBar}>
                  <span style={{ width: '46%' }} />
                </span>
              </div>
              <div className={styles.flowStage}>
                <span className={styles.flowLabel}>Negotiation</span>
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
          <span className={styles.sectionEyebrow}>Deployment tracks</span>
          <h2 className={styles.sectionTitle}>Different levels of implementation, one consistent operating language.</h2>
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

      <section className={styles.ctaPanel}>
        <div>
          <span className={styles.sectionEyebrow}>Private product demo</span>
          <h2 className={styles.ctaTitle}>Explore the Pulse dashboard and see the Nexus language applied to a revenue system.</h2>
        </div>
        <div className={styles.ctaActions}>
          <Link href="/pulse-crm/dashboard" className={styles.primaryLink}>
            Launch dashboard <ArrowRight size={16} />
          </Link>
          <Link href="/" className={styles.secondaryLink}>
            Back to Nexus home
          </Link>
        </div>
      </section>
    </main>
  );
}

import styles from './vortex.module.css';
import type { FocusDetail, Severity, SummaryMetric } from './types';

interface FilterGroupProps<T extends string> {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
}

interface MetricCardProps {
  metric: SummaryMetric;
  active: boolean;
  onSelect: (id: string) => void;
}

interface FocusPanelProps {
  detail: FocusDetail | null;
}

interface EmptyStateProps {
  title: string;
  body: string;
}

interface AlertBadgeProps {
  severity: Severity;
}

export function FilterGroup<T extends string>({ label, options, value, onChange }: FilterGroupProps<T>) {
  return (
    <div className={styles.filterGroup}>
      <span className={styles.filterLabel}>{label}</span>
      <div className={styles.filterPills} role="tablist" aria-label={label}>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={option === value ? styles.filterPillActive : styles.filterPill}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export function MetricCard({ metric, active, onSelect }: MetricCardProps) {
  return (
    <button
      type="button"
      className={active ? styles.metricCardActive : styles.metricCard}
      onClick={() => onSelect(metric.id)}
    >
      <span className={styles.metricLabel}>{metric.label}</span>
      <strong className={styles.metricValue}>{metric.value}</strong>
      <span className={metric.tone === 'warning' ? styles.metricDeltaWarning : styles.metricDelta}>
        {metric.delta}
      </span>
      <p className={styles.metricMeta}>{metric.description}</p>
    </button>
  );
}

export function FocusPanel({ detail }: FocusPanelProps) {
  if (!detail) {
    return (
      <div className={styles.emptyState}>
        <h3>Select a signal</h3>
        <p>Click a KPI, channel, region, or page to inspect its detail here.</p>
      </div>
    );
  }

  return (
    <div className={styles.focusPanel}>
      <p className={styles.focusEyebrow}>{detail.eyebrow}</p>
      <p className={styles.focusSummary}>{detail.summary}</p>
      <ul className={styles.focusList}>
        {detail.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

export function EmptyState({ title, body }: EmptyStateProps) {
  return (
    <div className={styles.emptyState}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export function AlertBadge({ severity }: AlertBadgeProps) {
  const className =
    severity === 'high'
      ? styles.alertBadgeHigh
      : severity === 'medium'
        ? styles.alertBadgeMedium
        : styles.alertBadgeLow;

  return <span className={className}>{severity}</span>;
}

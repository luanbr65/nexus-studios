export type RangeKey = '7D' | '30D' | '90D';
export type SegmentKey = 'All' | 'Product' | 'Enterprise';
export type ScenarioKey = 'steady' | 'launch' | 'retention' | 'expansion';

export type Tone = 'positive' | 'neutral' | 'warning';
export type Severity = 'low' | 'medium' | 'high';

export interface FocusDetail {
  eyebrow: string;
  summary: string;
  bullets: string[];
}

export interface SummaryMetric {
  id: string;
  label: string;
  value: string;
  delta: string;
  description: string;
  tone: Tone;
  detail: FocusDetail;
}

export interface PerformancePoint {
  label: string;
  revenue: number;
  previousRevenue: number;
  sessions: number;
  orders: number;
  conversion: number;
}

export interface ChannelShare {
  id: string;
  name: string;
  share: number;
  sessions: number;
  delta: string;
  color: string;
  detail: FocusDetail;
}

export interface FunnelStep {
  id: string;
  label: string;
  value: string;
  delta: string;
  note: string;
}

export interface RegionPerformance {
  id: string;
  name: string;
  revenue: string;
  conversion: string;
  status: string;
  tone: Tone;
  detail: FocusDetail;
}

export interface TopPage {
  id: string;
  name: string;
  sessions: string;
  conversion: string;
  revenue: string;
  detail: FocusDetail;
}

export interface Experiment {
  id: string;
  name: string;
  status: string;
  lift: string;
  audience: string;
}

export interface AlertItem {
  id: string;
  severity: Severity;
  title: string;
  body: string;
}

export interface InsightItem {
  id: string;
  title: string;
  body: string;
  tone: Tone;
}

export interface AnalyticsSnapshot {
  scenarioLabel: string;
  scenarioSummary: string;
  summary: SummaryMetric[];
  performance: PerformancePoint[];
  channels: ChannelShare[];
  funnel: FunnelStep[];
  regions: RegionPerformance[];
  topPages: TopPage[];
  experiments: Experiment[];
  alerts: AlertItem[];
  insights: InsightItem[];
  liveUsers: string;
  recommendedFocusId: string;
}

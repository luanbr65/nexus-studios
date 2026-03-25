import type {
  AlertItem,
  AnalyticsSnapshot,
  ChannelShare,
  Experiment,
  FocusDetail,
  FunnelStep,
  InsightItem,
  PerformancePoint,
  RangeKey,
  RegionPerformance,
  ScenarioKey,
  SegmentKey,
  SummaryMetric,
  TopPage,
  Tone,
} from './types';

const rangeOptions: RangeKey[] = ['7D', '30D', '90D'];
const segmentOptions: SegmentKey[] = ['All', 'Product', 'Enterprise'];
const scenarioOptions: ScenarioKey[] = ['steady', 'launch', 'retention', 'expansion'];

const channelPalette = {
  Organic: '#7cf29b',
  'Paid Social': '#4fc3f7',
  Direct: '#ffd166',
  Referral: '#ff8a65',
  Email: '#b388ff',
} as const;

const basePerformance: Record<RangeKey, Array<{ label: string; revenue: number; sessions: number; orders: number; conversion: number }>> = {
  '7D': [
    { label: 'Mon', revenue: 18200, sessions: 8050, orders: 249, conversion: 3.1 },
    { label: 'Tue', revenue: 19400, sessions: 8520, orders: 264, conversion: 3.2 },
    { label: 'Wed', revenue: 22100, sessions: 9030, orders: 298, conversion: 3.3 },
    { label: 'Thu', revenue: 21700, sessions: 8940, orders: 293, conversion: 3.3 },
    { label: 'Fri', revenue: 24300, sessions: 9720, orders: 332, conversion: 3.4 },
    { label: 'Sat', revenue: 25800, sessions: 10040, orders: 347, conversion: 3.5 },
    { label: 'Sun', revenue: 23600, sessions: 9460, orders: 321, conversion: 3.4 },
  ],
  '30D': [
    { label: 'W1', revenue: 113400, sessions: 45800, orders: 1492, conversion: 3.2 },
    { label: 'W2', revenue: 127900, sessions: 48740, orders: 1626, conversion: 3.3 },
    { label: 'W3', revenue: 135400, sessions: 51120, orders: 1706, conversion: 3.3 },
    { label: 'W4', revenue: 148800, sessions: 54760, orders: 1878, conversion: 3.5 },
  ],
  '90D': [
    { label: 'Jan', revenue: 409000, sessions: 160200, orders: 5294, conversion: 3.1 },
    { label: 'Feb', revenue: 437200, sessions: 171800, orders: 5560, conversion: 3.2 },
    { label: 'Mar', revenue: 469400, sessions: 183400, orders: 5988, conversion: 3.3 },
  ],
};

const scenarioProfiles = {
  steady: {
    label: 'Steady demand',
    summary: 'Balanced acquisition across channels with predictable conversion and no single region under stress.',
    revenue: 1,
    sessions: 1,
    orders: 1,
    conversion: 1,
    liveUsers: 1,
    previousRevenue: 0.95,
    channelBias: { Organic: 3, 'Paid Social': -1, Direct: 0, Referral: -1, Email: -1 },
    insights: [
      ['Healthy spread', 'Organic and direct are carrying demand without overexposure to one paid channel.'],
      ['Stable close rate', 'Win quality is holding across the funnel, so the best lever remains landing page iteration.'],
      ['Room to test', 'This scenario can support controlled experiments without risking baseline revenue.'],
    ],
    experiments: [
      { id: 'homepage-copy', name: 'Homepage copy refinement', status: 'Running', lift: '+3.4%', audience: 'New visitors' },
      { id: 'pricing-layout', name: 'Pricing layout test', status: 'Queued', lift: 'Pending', audience: 'Mid-funnel traffic' },
    ],
    alerts: [
      { id: 'watch-latam', severity: 'low', title: 'LATAM demand rising', body: 'Organic share is growing faster than baseline in Latin America.' },
    ],
  },
  launch: {
    label: 'Launch week',
    summary: 'Traffic is surging from campaigns and product interest, with higher volume but more pressure on retention quality.',
    revenue: 1.17,
    sessions: 1.24,
    orders: 1.12,
    conversion: 0.97,
    liveUsers: 1.32,
    previousRevenue: 0.88,
    channelBias: { Organic: -4, 'Paid Social': 8, Direct: 1, Referral: -2, Email: -3 },
    insights: [
      ['Momentum is paid-led', 'Campaign traffic is driving the spike, so post-click consistency matters more than usual.'],
      ['Conversion is slightly compressed', 'The funnel is handling more volume, but intent quality is not uniform.'],
      ['Protect activation', 'The biggest win is helping new traffic reach first value faster after signup.'],
    ],
    experiments: [
      { id: 'launch-hero', name: 'Launch hero variation', status: 'Running', lift: '+5.9%', audience: 'Campaign traffic' },
      { id: 'signup-flow', name: 'Signup assist prompts', status: 'Running', lift: '+2.7%', audience: 'First-session users' },
    ],
    alerts: [
      { id: 'high-spend', severity: 'medium', title: 'Paid efficiency under watch', body: 'Acquisition volume is up, but blended CAC is widening faster than revenue.' },
      { id: 'support-volume', severity: 'low', title: 'Support queue elevated', body: 'New-user questions increased after the launch announcement.' },
    ],
  },
  retention: {
    label: 'Retention dip',
    summary: 'Top-of-funnel demand remains healthy, but activation and repeat usage are softening in a few important cohorts.',
    revenue: 0.93,
    sessions: 0.97,
    orders: 0.89,
    conversion: 0.91,
    liveUsers: 0.9,
    previousRevenue: 1.02,
    channelBias: { Organic: -1, 'Paid Social': -2, Direct: 1, Referral: 0, Email: 2 },
    insights: [
      ['Intent is not the issue', 'Traffic quality is serviceable; the bigger drag is what happens after the first successful session.'],
      ['Email is carrying recovery', 'Lifecycle messaging is outperforming paid on reactivation and should receive extra attention.'],
      ['Focus on friction', 'Onboarding and habit-forming moments are the fastest route to recovering conversion.'],
    ],
    experiments: [],
    alerts: [
      { id: 'activation-drop', severity: 'high', title: 'Activation rate down', body: 'New accounts are reaching value later than expected in the first 72 hours.' },
      { id: 'apac-retention', severity: 'medium', title: 'APAC repeat usage slipping', body: 'Repeat sessions from Asia Pacific are trailing the previous period.' },
    ],
  },
  expansion: {
    label: 'Enterprise expansion',
    summary: 'Fewer but larger opportunities are shaping the period, with stronger revenue density and slower purchase cycles.',
    revenue: 1.11,
    sessions: 0.84,
    orders: 0.74,
    conversion: 0.94,
    liveUsers: 0.78,
    previousRevenue: 0.9,
    channelBias: { Organic: -2, 'Paid Social': -6, Direct: 5, Referral: 2, Email: 1 },
    insights: [
      ['Deal quality is up', 'Fewer sessions are still translating into denser revenue because account quality is stronger.'],
      ['Direct remains critical', 'High-intent account research and referrals are leading enterprise interest.'],
      ['Tighten handoff', 'The highest leverage improvement is shortening the path from qualification to proposal.'],
    ],
    experiments: [
      { id: 'sales-handoff', name: 'Sales handoff summary', status: 'Running', lift: '+4.1%', audience: 'Qualified accounts' },
    ],
    alerts: [
      { id: 'pipeline-delay', severity: 'medium', title: 'Proposal stage slower', body: 'Average time in proposal increased as more larger accounts entered the pipeline.' },
    ],
  },
} as const;

const segmentProfiles = {
  All: { revenue: 1, sessions: 1, orders: 1, conversion: 1, liveUsers: 1 },
  Product: { revenue: 0.84, sessions: 1.16, orders: 0.95, conversion: 1.06, liveUsers: 1.2 },
  Enterprise: { revenue: 1.28, sessions: 0.56, orders: 0.54, conversion: 0.89, liveUsers: 0.58 },
} as const;

const baseChannels: Record<RangeKey, Record<keyof typeof channelPalette, number>> = {
  '7D': { Organic: 36, 'Paid Social': 22, Direct: 18, Referral: 13, Email: 11 },
  '30D': { Organic: 34, 'Paid Social': 24, Direct: 17, Referral: 14, Email: 11 },
  '90D': { Organic: 32, 'Paid Social': 25, Direct: 16, Referral: 14, Email: 13 },
};

const baseRegions = [
  { id: 'north-america', name: 'North America', revenue: 412000, conversion: 4.8 },
  { id: 'europe', name: 'Europe', revenue: 286000, conversion: 3.9 },
  { id: 'latin-america', name: 'Latin America', revenue: 174000, conversion: 4.2 },
  { id: 'asia-pacific', name: 'Asia Pacific', revenue: 221000, conversion: 3.5 },
] as const;

const basePages = [
  { id: 'pricing', name: '/pricing', sessions: 24100, conversion: 5.8, revenue: 196000 },
  { id: 'product', name: '/product/analytics-suite', sessions: 18300, conversion: 4.4, revenue: 142000 },
  { id: 'case-study', name: '/case-study/atlas', sessions: 9200, conversion: 6.1, revenue: 98000 },
  { id: 'demo', name: '/book-a-demo', sessions: 7600, conversion: 8.3, revenue: 124000 },
] as const;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCompact(value: number) {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value);
}

function formatPercent(value: number) {
  return `${value.toFixed(1)}%`;
}

function formatDelta(current: number, previous: number) {
  if (previous === 0) {
    return '+0.0%';
  }

  const delta = ((current - previous) / previous) * 100;
  const sign = delta >= 0 ? '+' : '';
  return `${sign}${delta.toFixed(1)}%`;
}

function normalizeShares(values: Record<string, number>) {
  const total = Object.values(values).reduce((sum, value) => sum + value, 0);

  return Object.entries(values).reduce<Record<string, number>>((normalized, [key, value]) => {
    normalized[key] = Math.round((value / total) * 100);
    return normalized;
  }, {});
}

function getTone(delta: number): Tone {
  if (delta > 1.5) {
    return 'positive';
  }

  if (delta < -1.5) {
    return 'warning';
  }

  return 'neutral';
}

function buildDetail(eyebrow: string, summary: string, bullets: string[]): FocusDetail {
  return { eyebrow, summary, bullets };
}

function sanitizeRange(value: string | null): RangeKey {
  return rangeOptions.includes(value as RangeKey) ? (value as RangeKey) : '30D';
}

function sanitizeSegment(value: string | null): SegmentKey {
  return segmentOptions.includes(value as SegmentKey) ? (value as SegmentKey) : 'All';
}

function sanitizeScenario(value: string | null): ScenarioKey {
  return scenarioOptions.includes(value as ScenarioKey) ? (value as ScenarioKey) : 'steady';
}

export function sanitizeFilters(params: { range?: string | null; segment?: string | null; scenario?: string | null }) {
  return {
    range: sanitizeRange(params.range ?? null),
    segment: sanitizeSegment(params.segment ?? null),
    scenario: sanitizeScenario(params.scenario ?? null),
  };
}

export const filterOptions = {
  ranges: rangeOptions,
  segments: segmentOptions,
  scenarios: scenarioOptions,
};

export function buildSyntheticAnalytics(range: RangeKey, segment: SegmentKey, scenario: ScenarioKey): AnalyticsSnapshot {
  const scenarioProfile = scenarioProfiles[scenario];
  const segmentProfile = segmentProfiles[segment];

  const performance: PerformancePoint[] = basePerformance[range].map((point) => {
    const revenue = Math.round(point.revenue * scenarioProfile.revenue * segmentProfile.revenue);
    const previousRevenue = Math.round(point.revenue * scenarioProfile.previousRevenue * segmentProfile.revenue);
    const sessions = Math.round(point.sessions * scenarioProfile.sessions * segmentProfile.sessions);
    const orders = Math.round(point.orders * scenarioProfile.orders * segmentProfile.orders);
    const conversion = clamp(point.conversion * scenarioProfile.conversion * segmentProfile.conversion, 1.4, 8.8);

    return {
      label: point.label,
      revenue,
      previousRevenue,
      sessions,
      orders,
      conversion,
    };
  });

  const revenueTotal = performance.reduce((sum, point) => sum + point.revenue, 0);
  const previousRevenueTotal = performance.reduce((sum, point) => sum + point.previousRevenue, 0);
  const sessionsTotal = performance.reduce((sum, point) => sum + point.sessions, 0);
  const previousSessionsTotal = Math.round(sessionsTotal * (scenarioProfile.previousRevenue / Math.max(scenarioProfile.sessions, 0.6)));
  const ordersTotal = performance.reduce((sum, point) => sum + point.orders, 0);
  const previousOrdersTotal = Math.round(ordersTotal * (scenarioProfile.previousRevenue / Math.max(scenarioProfile.orders, 0.6)));
  const averageConversion = performance.reduce((sum, point) => sum + point.conversion, 0) / performance.length;
  const previousConversion = clamp(averageConversion * (scenarioProfile.previousRevenue / Math.max(scenarioProfile.conversion, 0.7)), 1.2, 8.2);
  const liveUsers = Math.round((sessionsTotal / performance.length / 8.6) * scenarioProfile.liveUsers * segmentProfile.liveUsers);
  const previousLiveUsers = Math.round(liveUsers * (scenarioProfile.previousRevenue / Math.max(scenarioProfile.liveUsers, 0.7)));

  const revenueDelta = ((revenueTotal - previousRevenueTotal) / Math.max(previousRevenueTotal, 1)) * 100;
  const ordersDelta = ((ordersTotal - previousOrdersTotal) / Math.max(previousOrdersTotal, 1)) * 100;
  const conversionDelta = ((averageConversion - previousConversion) / Math.max(previousConversion, 0.1)) * 100;
  const liveUsersDelta = ((liveUsers - previousLiveUsers) / Math.max(previousLiveUsers, 1)) * 100;

  const summary: SummaryMetric[] = [
    {
      id: 'revenue',
      label: 'Revenue',
      value: formatCurrency(revenueTotal),
      delta: formatDelta(revenueTotal, previousRevenueTotal),
      description: 'Blended revenue across the current filters.',
      tone: getTone(revenueDelta),
      detail: buildDetail('Revenue focus', scenarioProfile.summary, [
        `${formatCurrency(revenueTotal)} booked in the selected period.`,
        `${formatDelta(revenueTotal, previousRevenueTotal)} versus the previous comparable window.`,
        'This is the most useful top-level signal when comparing scenarios against each other.',
      ]),
    },
    {
      id: 'orders',
      label: 'Orders',
      value: formatCompact(ordersTotal),
      delta: formatDelta(ordersTotal, previousOrdersTotal),
      description: 'Closed or completed transactions in the funnel.',
      tone: getTone(ordersDelta),
      detail: buildDetail('Order flow', 'Orders give the clearest read on whether demand is translating into action.', [
        `${formatCompact(ordersTotal)} orders across the active segment.`,
        `${formatDelta(ordersTotal, previousOrdersTotal)} versus the comparison period.`,
        'If orders trail revenue, larger deal sizes are masking slower transaction velocity.',
      ]),
    },
    {
      id: 'conversion',
      label: 'Avg. conversion',
      value: formatPercent(averageConversion),
      delta: formatDelta(averageConversion, previousConversion),
      description: 'Mean conversion rate across the selected period.',
      tone: getTone(conversionDelta),
      detail: buildDetail('Conversion health', 'Conversion is often where scenario quality becomes visible first.', [
        `${formatPercent(averageConversion)} average conversion right now.`,
        `${formatDelta(averageConversion, previousConversion)} versus the previous period.`,
        'A strong traffic spike with weak conversion usually means message-match or activation friction.',
      ]),
    },
    {
      id: 'live-users',
      label: 'Live users',
      value: formatCompact(liveUsers),
      delta: formatDelta(liveUsers, previousLiveUsers),
      description: 'Concurrent active users modeled from traffic density.',
      tone: getTone(liveUsersDelta),
      detail: buildDetail('Audience pulse', 'Live users add immediacy to the dashboard even when the data source is synthetic.', [
        `${formatCompact(liveUsers)} users active now.`,
        `${formatDelta(liveUsers, previousLiveUsers)} compared with the prior window.`,
        'This signal is useful for keeping the app feeling alive before a real streaming source exists.',
      ]),
    },
  ];

  const biasedChannels = normalizeShares(
    Object.entries(baseChannels[range]).reduce<Record<string, number>>((channels, [name, value]) => {
      const segmentBias =
        segment === 'Enterprise'
          ? name === 'Direct' || name === 'Referral'
            ? 3
            : -1
          : segment === 'Product'
            ? name === 'Organic' || name === 'Paid Social'
              ? 2
              : 0
            : 0;

      channels[name] = Math.max(4, value + scenarioProfile.channelBias[name as keyof typeof scenarioProfile.channelBias] + segmentBias);
      return channels;
    }, {}),
  );

  const channels: ChannelShare[] = Object.entries(biasedChannels).map(([name, share]) => {
    const sessions = Math.round((sessionsTotal * share) / 100);
    const previousShare = baseChannels[range][name as keyof typeof channelPalette];
    const direction = share - previousShare;

    return {
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      share,
      sessions,
      delta: `${direction >= 0 ? '+' : ''}${direction} pts`,
      color: channelPalette[name as keyof typeof channelPalette],
      detail: buildDetail('Channel breakdown', `${name} is contributing ${share}% of modeled sessions in this view.`, [
        `${formatCompact(sessions)} sessions from ${name}.`,
        `${direction >= 0 ? 'Up' : 'Down'} ${Math.abs(direction)} points against the range baseline.`,
        'Channel detail is ready to be swapped for a real attribution source later.',
      ]),
    };
  });

  const topChannel = [...channels].sort((left, right) => right.share - left.share)[0];

  const funnelSteps = [
    { id: 'visitors', label: 'Visitors', value: sessionsTotal, multiplier: 1, note: 'Traffic reaching the site or app.' },
    { id: 'trials', label: 'Trials', value: sessionsTotal * 0.084, multiplier: 0.78, note: 'Users starting a trial or lead form.' },
    { id: 'qualified', label: 'Qualified', value: sessionsTotal * 0.023, multiplier: 0.64, note: 'Leads or accounts cleared for handoff.' },
    { id: 'won', label: 'Won', value: ordersTotal, multiplier: 0.51, note: 'Deals or purchases completed.' },
  ];

  const funnel: FunnelStep[] = funnelSteps.map((step, index) => {
    const currentValue = index === funnelSteps.length - 1 ? ordersTotal : Math.round(step.value * scenarioProfile.orders * segmentProfile.orders);
    const previousValue = Math.round(currentValue * (scenarioProfile.previousRevenue * step.multiplier));

    return {
      id: step.id,
      label: step.label,
      value: formatCompact(currentValue),
      delta: formatDelta(currentValue, previousValue),
      note: step.note,
    };
  });

  const regionBias =
    scenario === 'retention'
      ? { 'Asia Pacific': -0.16, Europe: -0.04, 'North America': 0.02, 'Latin America': 0.06 }
      : scenario === 'launch'
        ? { 'Asia Pacific': 0.03, Europe: 0.04, 'North America': 0.08, 'Latin America': 0.11 }
        : scenario === 'expansion'
          ? { 'Asia Pacific': -0.02, Europe: 0.03, 'North America': 0.12, 'Latin America': 0.01 }
          : { 'Asia Pacific': 0, Europe: 0.01, 'North America': 0.03, 'Latin America': 0.04 };

  const regions: RegionPerformance[] = baseRegions.map((region) => {
    const adjustedRevenue = Math.round(region.revenue * scenarioProfile.revenue * segmentProfile.revenue * (1 + regionBias[region.name]));
    const adjustedConversion = clamp(
      region.conversion * scenarioProfile.conversion * segmentProfile.conversion * (1 + regionBias[region.name] / 2),
      1.6,
      7.8,
    );
    const tone = adjustedConversion >= 4.5 ? 'positive' : adjustedConversion <= 3.4 ? 'warning' : 'neutral';

    return {
      id: region.id,
      name: region.name,
      revenue: formatCurrency(adjustedRevenue),
      conversion: formatPercent(adjustedConversion),
      status: tone === 'positive' ? 'Strong momentum' : tone === 'warning' ? 'Needs attention' : 'Holding steady',
      tone,
      detail: buildDetail('Regional performance', `${region.name} is returning ${formatPercent(adjustedConversion)} conversion in this scenario.`, [
        `${formatCurrency(adjustedRevenue)} attributed revenue.`,
        `${formatPercent(adjustedConversion)} modeled conversion.`,
        'Regional cards are ready to become true market reports once a backend source exists.',
      ]),
    };
  });

  const topPages: TopPage[] = basePages.map((page, index) => {
    const conversionLift =
      scenario === 'launch'
        ? index === 0
          ? -0.3
          : 0.4
        : scenario === 'retention'
          ? index === 1
            ? -0.8
            : -0.2
          : scenario === 'expansion'
            ? index === 3
              ? 0.9
              : 0.2
            : 0.2;

    const sessionFactor =
      segment === 'Enterprise'
        ? index === 3
          ? 0.88
          : 0.56
        : segment === 'Product'
          ? 1.12
          : 1;

    const adjustedSessions = Math.round(page.sessions * scenarioProfile.sessions * sessionFactor);
    const adjustedConversion = clamp(page.conversion * scenarioProfile.conversion * segmentProfile.conversion + conversionLift, 1.8, 12.2);
    const adjustedRevenue = Math.round(page.revenue * scenarioProfile.revenue * segmentProfile.revenue * (segment === 'Enterprise' && index === 3 ? 1.18 : 1));

    return {
      id: page.id,
      name: page.name,
      sessions: formatCompact(adjustedSessions),
      conversion: formatPercent(adjustedConversion),
      revenue: formatCurrency(adjustedRevenue),
      detail: buildDetail('Page detail', `${page.name} is one of the clearest surfaces for conversion analysis in this view.`, [
        `${formatCompact(adjustedSessions)} sessions modeled for this page.`,
        `${formatPercent(adjustedConversion)} conversion from this surface.`,
        `${formatCurrency(adjustedRevenue)} attributed revenue.`,
      ]),
    };
  });

  const experiments: Experiment[] = scenarioProfile.experiments.map((experiment) => ({
    ...experiment,
    audience:
      segment === 'Enterprise' && experiment.audience === 'New visitors'
        ? 'Qualified accounts'
        : segment === 'Product' && experiment.audience === 'Qualified accounts'
          ? 'Product-qualified leads'
          : experiment.audience,
  }));

  const alerts: AlertItem[] = scenarioProfile.alerts.map((alert) => ({
    ...alert,
  }));

  const insights: InsightItem[] = scenarioProfile.insights.map(([title, body], index) => ({
    id: `${scenario}-${index}`,
    title,
    body,
    tone: index === 0 ? 'positive' : index === 1 ? 'neutral' : 'warning',
  }));

  const recommendedFocusId = summary[0]?.id ?? topChannel.id;

  summary[0].detail.bullets[2] = `Top acquisition channel right now is ${topChannel.name}.`;

  return {
    scenarioLabel: scenarioProfile.label,
    scenarioSummary: scenarioProfile.summary,
    summary,
    performance,
    channels,
    funnel,
    regions,
    topPages,
    experiments,
    alerts,
    insights,
    liveUsers: formatCompact(liveUsers),
    recommendedFocusId,
  };
}

"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styles from './vortex.module.css';

type RangeKey = '7D' | '30D' | '90D';
type SegmentKey = 'All' | 'Product' | 'Enterprise';

const performanceData: Record<
  RangeKey,
  Array<{ label: string; revenue: number; sessions: number; orders: number; conversion: number }>
> = {
  '7D': [
    { label: 'Mon', revenue: 18400, sessions: 8100, orders: 252, conversion: 3.1 },
    { label: 'Tue', revenue: 19600, sessions: 8480, orders: 268, conversion: 3.2 },
    { label: 'Wed', revenue: 22300, sessions: 9040, orders: 301, conversion: 3.4 },
    { label: 'Thu', revenue: 21750, sessions: 8920, orders: 295, conversion: 3.3 },
    { label: 'Fri', revenue: 24800, sessions: 9800, orders: 338, conversion: 3.5 },
    { label: 'Sat', revenue: 26100, sessions: 10120, orders: 352, conversion: 3.6 },
    { label: 'Sun', revenue: 23940, sessions: 9500, orders: 327, conversion: 3.4 },
  ],
  '30D': [
    { label: 'W1', revenue: 112400, sessions: 45200, orders: 1482, conversion: 3.2 },
    { label: 'W2', revenue: 128700, sessions: 48940, orders: 1635, conversion: 3.3 },
    { label: 'W3', revenue: 136100, sessions: 51420, orders: 1711, conversion: 3.4 },
    { label: 'W4', revenue: 149900, sessions: 54880, orders: 1884, conversion: 3.6 },
  ],
  '90D': [
    { label: 'Jan', revenue: 412000, sessions: 161200, orders: 5324, conversion: 3.1 },
    { label: 'Feb', revenue: 438500, sessions: 172900, orders: 5580, conversion: 3.2 },
    { label: 'Mar', revenue: 471200, sessions: 184600, orders: 6014, conversion: 3.3 },
  ],
};

const channelData: Record<RangeKey, Array<{ name: string; value: number; color: string }>> = {
  '7D': [
    { name: 'Organic', value: 38, color: '#7cf29b' },
    { name: 'Paid Social', value: 21, color: '#4fc3f7' },
    { name: 'Direct', value: 18, color: '#ffd166' },
    { name: 'Referral', value: 13, color: '#ff8a65' },
    { name: 'Email', value: 10, color: '#b388ff' },
  ],
  '30D': [
    { name: 'Organic', value: 34, color: '#7cf29b' },
    { name: 'Paid Social', value: 24, color: '#4fc3f7' },
    { name: 'Direct', value: 17, color: '#ffd166' },
    { name: 'Referral', value: 15, color: '#ff8a65' },
    { name: 'Email', value: 10, color: '#b388ff' },
  ],
  '90D': [
    { name: 'Organic', value: 32, color: '#7cf29b' },
    { name: 'Paid Social', value: 26, color: '#4fc3f7' },
    { name: 'Direct', value: 16, color: '#ffd166' },
    { name: 'Referral', value: 14, color: '#ff8a65' },
    { name: 'Email', value: 12, color: '#b388ff' },
  ],
};

const funnelData = [
  { label: 'Visitors', value: '182k', change: '+8.2%' },
  { label: 'Trials', value: '14.7k', change: '+5.6%' },
  { label: 'Qualified', value: '4.1k', change: '+3.4%' },
  { label: 'Won', value: '1.2k', change: '+2.1%' },
];

const regionData = [
  { name: 'North America', revenue: '$412k', conversion: '4.8%', status: 'Scaling well' },
  { name: 'Europe', revenue: '$286k', conversion: '3.9%', status: 'Healthy demand' },
  { name: 'Latin America', revenue: '$174k', conversion: '4.2%', status: 'Fastest growth' },
  { name: 'Asia Pacific', revenue: '$221k', conversion: '3.5%', status: 'Needs retention push' },
];

const segmentNotes: Record<SegmentKey, string[]> = {
  All: [
    'Revenue is broad-based, with organic and paid social moving in balance.',
    'Retention pressure is concentrated in Asia Pacific, not across the whole funnel.',
    'The top opportunity this week is landing page optimization for high-intent traffic.',
  ],
  Product: [
    'Self-serve demand is strong, especially on mobile acquisition flows.',
    'Checkout conversion improved after reducing friction in onboarding.',
    'The next lever is feature adoption after the first successful session.',
  ],
  Enterprise: [
    'Pipeline quality is holding, but the deal cycle remains slower than self-serve.',
    'Direct traffic is outperforming paid for large-account conversions.',
    'Expansion revenue is growing faster than new-logo acquisition this month.',
  ],
};

const segmentMultipliers: Record<SegmentKey, { revenue: number; orders: number; conversion: number; liveUsers: number }> = {
  All: { revenue: 1, orders: 1, conversion: 1, liveUsers: 1 },
  Product: { revenue: 0.82, orders: 0.91, conversion: 1.07, liveUsers: 1.18 },
  Enterprise: { revenue: 1.24, orders: 0.52, conversion: 0.88, liveUsers: 0.54 },
};

const rangeLabels: Record<RangeKey, string> = {
  '7D': 'Last 7 days',
  '30D': 'Last 30 days',
  '90D': 'Last 90 days',
};

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

export default function VortexClient() {
  const [activeRange, setActiveRange] = useState<RangeKey>('30D');
  const [activeSegment, setActiveSegment] = useState<SegmentKey>('All');
  const [liveUsers, setLiveUsers] = useState(1842);
  const [insights, setInsights] = useState(segmentNotes.All);

  const selectedPerformance = performanceData[activeRange];
  const selectedChannels = channelData[activeRange];
  const multiplier = segmentMultipliers[activeSegment];

  const revenue = Math.round(
    selectedPerformance.reduce((total, point) => total + point.revenue, 0) * multiplier.revenue,
  );
  const sessions = Math.round(
    selectedPerformance.reduce((total, point) => total + point.sessions, 0) * multiplier.liveUsers,
  );
  const orders = Math.round(selectedPerformance.reduce((total, point) => total + point.orders, 0) * multiplier.orders);
  const conversion =
    (
      (selectedPerformance.reduce((total, point) => total + point.conversion, 0) / selectedPerformance.length) *
      multiplier.conversion
    ).toFixed(1) + '%';

  useEffect(() => {
    setInsights(segmentNotes[activeSegment]);
  }, [activeSegment]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveUsers((current) => Math.max(1200, current + Math.round(Math.random() * 80 - 35)));
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  const topChannel = [...selectedChannels].sort((left, right) => right.value - left.value)[0];

  return (
    <main className={styles.container} aria-label="Vortex analytics">
      <div className={styles.backdrop}></div>
      <div className={styles.scanlines}></div>
      <div className={styles.glow}></div>

      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Nexus embedded workspace</p>
          <div className={styles.brandRow}>
            <span className={styles.brand}>VORTEX</span>
            <span className={styles.brandSub}>analytics</span>
          </div>
        </div>

        <div className={styles.headerMeta}>
          <span className={styles.headerBadge}>{rangeLabels[activeRange]}</span>
          <span className={styles.headerBadge}>{activeSegment} segment</span>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Revenue, funnel, and traffic quality</p>
          <h1 className={styles.heroTitle}>A real analytics surface inside Nexus, not a gated mockup.</h1>
          <p className={styles.heroText}>
            This version of Vortex is focused on product and growth intelligence: revenue trends, acquisition mix,
            conversion health, and market performance all live in one view.
          </p>
        </div>

        <div className={styles.controlStack}>
          <div className={styles.controlGroup}>
            {(['7D', '30D', '90D'] as RangeKey[]).map((range) => (
              <button
                key={range}
                type="button"
                className={range === activeRange ? styles.controlButtonActive : styles.controlButton}
                onClick={() => setActiveRange(range)}
              >
                {range}
              </button>
            ))}
          </div>

          <div className={styles.controlGroup}>
            {(['All', 'Product', 'Enterprise'] as SegmentKey[]).map((segment) => (
              <button
                key={segment}
                type="button"
                className={segment === activeSegment ? styles.controlButtonActive : styles.controlButton}
                onClick={() => setActiveSegment(segment)}
              >
                {segment}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.metricsGrid}>
        <article className={styles.metricCard}>
          <span className={styles.metricLabel}>Revenue</span>
          <strong className={styles.metricValue}>{formatCurrency(revenue)}</strong>
          <p className={styles.metricMeta}>Blended across the selected time range and segment.</p>
        </article>
        <article className={styles.metricCard}>
          <span className={styles.metricLabel}>Orders</span>
          <strong className={styles.metricValue}>{formatCompact(orders)}</strong>
          <p className={styles.metricMeta}>Healthy order flow with stronger weekend closes.</p>
        </article>
        <article className={styles.metricCard}>
          <span className={styles.metricLabel}>Avg. conversion</span>
          <strong className={styles.metricValue}>{conversion}</strong>
          <p className={styles.metricMeta}>Lift is strongest in the self-serve funnel.</p>
        </article>
        <article className={styles.metricCard}>
          <span className={styles.metricLabel}>Live users</span>
          <strong className={styles.metricValue}>{formatCompact(liveUsers)}</strong>
          <p className={styles.metricMeta}>Top acquisition channel: {topChannel.name}.</p>
        </article>
      </section>

      <div className={styles.dashboardGrid}>
        <motion.section
          className={`${styles.panel} ${styles.primaryPanel}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.panelTitle}>Revenue trend</p>
              <p className={styles.panelSubtitle}>Sessions and revenue moving together over time.</p>
            </div>
            <span className={styles.panelTag}>Performance</span>
          </div>

          <div className={styles.chartShell}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={selectedPerformance}>
                <defs>
                  <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7cf29b" stopOpacity={0.42} />
                    <stop offset="95%" stopColor="#7cf29b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#173326" strokeDasharray="4 4" />
                <XAxis dataKey="label" stroke="#7ca68a" tickLine={false} axisLine={false} />
                <YAxis stroke="#7ca68a" tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: '#07110c',
                    border: '1px solid #21412f',
                    borderRadius: '16px',
                    color: '#ecfff1',
                  }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#7cf29b" strokeWidth={2.5} fill="url(#revenueFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.inlineStats}>
            <div>
              <span className={styles.inlineLabel}>Sessions</span>
              <strong>{formatCompact(sessions)}</strong>
            </div>
            <div>
              <span className={styles.inlineLabel}>Peak period</span>
              <strong>{selectedPerformance[selectedPerformance.length - 1]?.label}</strong>
            </div>
            <div>
              <span className={styles.inlineLabel}>Revenue / session</span>
              <strong>{formatCurrency(Math.round(revenue / Math.max(sessions, 1)))}</strong>
            </div>
          </div>
        </motion.section>

        <motion.section
          className={styles.panel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05, ease: 'easeOut' }}
        >
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.panelTitle}>Acquisition mix</p>
              <p className={styles.panelSubtitle}>Channel share for the selected range.</p>
            </div>
            <span className={styles.panelTag}>Traffic</span>
          </div>

          <div className={styles.donutWrap}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={selectedChannels} dataKey="value" innerRadius={58} outerRadius={86} paddingAngle={4}>
                  {selectedChannels.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: '#07110c',
                    border: '1px solid #21412f',
                    borderRadius: '16px',
                    color: '#ecfff1',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.channelList}>
            {selectedChannels.map((channel) => (
              <div key={channel.name} className={styles.channelRow}>
                <div className={styles.channelInfo}>
                  <span className={styles.channelDot} style={{ backgroundColor: channel.color }}></span>
                  <span>{channel.name}</span>
                </div>
                <strong>{channel.value}%</strong>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className={styles.panel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
        >
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.panelTitle}>Funnel checkpoints</p>
              <p className={styles.panelSubtitle}>Stage-by-stage movement through the customer journey.</p>
            </div>
            <span className={styles.panelTag}>Growth</span>
          </div>

          <div className={styles.funnelGrid}>
            {funnelData.map((item) => (
              <div key={item.label} className={styles.funnelCard}>
                <span className={styles.funnelLabel}>{item.label}</span>
                <strong className={styles.funnelValue}>{item.value}</strong>
                <span className={styles.funnelChange}>{item.change}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className={styles.panel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15, ease: 'easeOut' }}
        >
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.panelTitle}>Regional performance</p>
              <p className={styles.panelSubtitle}>Where conversion is strongest right now.</p>
            </div>
            <span className={styles.panelTag}>Markets</span>
          </div>

          <div className={styles.regionList}>
            {regionData.map((region) => (
              <div key={region.name} className={styles.regionRow}>
                <div>
                  <strong>{region.name}</strong>
                  <p>{region.status}</p>
                </div>
                <div className={styles.regionMeta}>
                  <span>{region.revenue}</span>
                  <span>{region.conversion}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className={`${styles.panel} ${styles.fullSpan}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2, ease: 'easeOut' }}
        >
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.panelTitle}>Operator insights</p>
              <p className={styles.panelSubtitle}>Short narrative to guide the next product or growth move.</p>
            </div>
            <span className={styles.panelTag}>Briefing</span>
          </div>

          <div className={styles.insightGrid}>
            {insights.map((item) => (
              <div key={item} className={styles.insightCard}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}

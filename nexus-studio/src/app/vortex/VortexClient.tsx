"use client";

import { motion } from 'framer-motion';
import { startTransition, useDeferredValue, useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { AlertBadge, EmptyState, FilterGroup, FocusPanel, MetricCard } from './VortexComponents';
import { buildSyntheticAnalytics, filterOptions, sanitizeFilters } from './syntheticData';
import styles from './vortex.module.css';
import type { AnalyticsSnapshot, FocusDetail, RangeKey, ScenarioKey, SegmentKey } from './types';

interface FiltersState {
  range: RangeKey;
  segment: SegmentKey;
  scenario: ScenarioKey;
}

function getFocusDetail(snapshot: AnalyticsSnapshot, focusId: string | null): FocusDetail | null {
  if (!focusId) {
    return null;
  }

  const fromSummary = snapshot.summary.find((item) => item.id === focusId)?.detail;
  if (fromSummary) {
    return fromSummary;
  }

  const fromChannels = snapshot.channels.find((item) => item.id === focusId)?.detail;
  if (fromChannels) {
    return fromChannels;
  }

  const fromRegions = snapshot.regions.find((item) => item.id === focusId)?.detail;
  if (fromRegions) {
    return fromRegions;
  }

  return snapshot.topPages.find((item) => item.id === focusId)?.detail ?? null;
}

export default function VortexClient() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const initialFilters = sanitizeFilters({
    range: searchParams.get('range'),
    segment: searchParams.get('segment'),
    scenario: searchParams.get('scenario'),
  });

  const [filters, setFilters] = useState<FiltersState>(initialFilters);
  const [selectedFocusId, setSelectedFocusId] = useState<string | null>(searchParams.get('focus'));

  useEffect(() => {
    const nextFilters = sanitizeFilters({
      range: searchParams.get('range'),
      segment: searchParams.get('segment'),
      scenario: searchParams.get('scenario'),
    });
    const nextFocus = searchParams.get('focus');

    setFilters((current) =>
      current.range === nextFilters.range &&
      current.segment === nextFilters.segment &&
      current.scenario === nextFilters.scenario
        ? current
        : nextFilters,
    );
    setSelectedFocusId((current) => (current === nextFocus ? current : nextFocus));
  }, [searchParams]);

  const deferredFilters = useDeferredValue(filters);
  const snapshot = useMemo(
    () => buildSyntheticAnalytics(deferredFilters.range, deferredFilters.segment, deferredFilters.scenario),
    [deferredFilters.range, deferredFilters.segment, deferredFilters.scenario],
  );

  useEffect(() => {
    if (!selectedFocusId) {
      setSelectedFocusId(snapshot.recommendedFocusId);
      return;
    }

    if (!getFocusDetail(snapshot, selectedFocusId)) {
      setSelectedFocusId(snapshot.recommendedFocusId);
    }
  }, [selectedFocusId, snapshot]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('range', filters.range);
    params.set('segment', filters.segment);
    params.set('scenario', filters.scenario);

    if (selectedFocusId) {
      params.set('focus', selectedFocusId);
    } else {
      params.delete('focus');
    }

    const nextQuery = params.toString();
    const currentQuery = searchParams.toString();

    if (nextQuery !== currentQuery) {
      router.replace(`${pathname}?${nextQuery}`, { scroll: false });
    }
  }, [filters, pathname, router, searchParams, selectedFocusId]);

  const isRefreshing =
    filters.range !== deferredFilters.range ||
    filters.segment !== deferredFilters.segment ||
    filters.scenario !== deferredFilters.scenario;

  const focusDetail = getFocusDetail(snapshot, selectedFocusId);
  const topChannel = [...snapshot.channels].sort((left, right) => right.share - left.share)[0];

  const handleFilterChange = <T extends keyof FiltersState>(key: T, value: FiltersState[T]) => {
    startTransition(() => {
      setFilters((current) => ({ ...current, [key]: value }));
    });
  };

  return (
    <main className={styles.container} aria-label="Vortex analytics" aria-busy={isRefreshing}>
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
          <span className={styles.headerBadge}>{snapshot.scenarioLabel}</span>
          <span className={styles.headerBadge}>Live users {snapshot.liveUsers}</span>
          {isRefreshing && <span className={styles.headerBadgeAccent}>Refreshing view</span>}
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Synthetic but coherent analytics</p>
          <h1 className={styles.heroTitle}>A believable growth console, ready for real data later.</h1>
          <p className={styles.heroText}>{snapshot.scenarioSummary}</p>
        </div>

        <div className={styles.filterStack}>
          <FilterGroup
            label="Range"
            options={filterOptions.ranges}
            value={filters.range}
            onChange={(value) => handleFilterChange('range', value)}
          />
          <FilterGroup
            label="Segment"
            options={filterOptions.segments}
            value={filters.segment}
            onChange={(value) => handleFilterChange('segment', value)}
          />
          <FilterGroup
            label="Scenario"
            options={filterOptions.scenarios}
            value={filters.scenario}
            onChange={(value) => handleFilterChange('scenario', value)}
          />
        </div>
      </section>

      <section className={styles.metricsGrid}>
        {snapshot.summary.map((metric) => (
          <MetricCard
            key={metric.id}
            metric={metric}
            active={selectedFocusId === metric.id}
            onSelect={setSelectedFocusId}
          />
        ))}
      </section>

      <div className={styles.dashboardGrid}>
        <motion.section
          className={`${styles.panel} ${styles.primaryPanel}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.panelTitle}>Revenue trend</p>
              <p className={styles.panelSubtitle}>Current period compared with the previous baseline.</p>
            </div>
            <span className={styles.panelTag}>{filters.range}</span>
          </div>

          <div className={styles.chartShell}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={snapshot.performance}>
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
                <Area type="monotone" dataKey="revenue" stroke="#7cf29b" strokeWidth={2.2} fill="url(#revenueFill)" />
                <Line type="monotone" dataKey="previousRevenue" stroke="#4f7f5d" strokeWidth={1.6} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className={styles.inlineStats}>
            <div>
              <span className={styles.inlineLabel}>Top channel</span>
              <strong>{topChannel?.name}</strong>
            </div>
            <div>
              <span className={styles.inlineLabel}>Scenario</span>
              <strong>{snapshot.scenarioLabel}</strong>
            </div>
            <div>
              <span className={styles.inlineLabel}>Focus</span>
              <strong>{filters.segment}</strong>
            </div>
          </div>
        </motion.section>

        <motion.section
          className={styles.panel}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease: 'easeOut' }}
        >
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.panelTitle}>Signal detail</p>
              <p className={styles.panelSubtitle}>Drill into whichever metric or row matters right now.</p>
            </div>
            <span className={styles.panelTag}>Inspector</span>
          </div>
          <FocusPanel detail={focusDetail} />
        </motion.section>

        <motion.section
          className={styles.panel}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
        >
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.panelTitle}>Acquisition mix</p>
              <p className={styles.panelSubtitle}>Channel contribution with click-to-inspect rows.</p>
            </div>
            <span className={styles.panelTag}>Traffic</span>
          </div>

          <div className={styles.donutWrap}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={snapshot.channels} dataKey="share" innerRadius={60} outerRadius={86} paddingAngle={4}>
                  {snapshot.channels.map((entry) => (
                    <Cell key={entry.id} fill={entry.color} />
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
            {snapshot.channels.map((channel) => (
              <button
                key={channel.id}
                type="button"
                className={selectedFocusId === channel.id ? styles.listRowActive : styles.listRow}
                onClick={() => setSelectedFocusId(channel.id)}
              >
                <div className={styles.rowLeading}>
                  <span className={styles.channelDot} style={{ backgroundColor: channel.color }}></span>
                  <span>{channel.name}</span>
                </div>
                <div className={styles.rowTrailing}>
                  <strong>{channel.share}%</strong>
                  <small>{channel.delta}</small>
                </div>
              </button>
            ))}
          </div>
        </motion.section>

        <motion.section
          className={styles.panel}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
        >
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.panelTitle}>Funnel checkpoints</p>
              <p className={styles.panelSubtitle}>Progression through the modeled customer journey.</p>
            </div>
            <span className={styles.panelTag}>Growth</span>
          </div>

          <div className={styles.funnelGrid}>
            {snapshot.funnel.map((step) => (
              <div key={step.id} className={styles.funnelCard}>
                <span className={styles.funnelLabel}>{step.label}</span>
                <strong className={styles.funnelValue}>{step.value}</strong>
                <span className={styles.funnelDelta}>{step.delta}</span>
                <p className={styles.funnelNote}>{step.note}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className={styles.panel}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        >
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.panelTitle}>Top pages</p>
              <p className={styles.panelSubtitle}>Surfaces that are generating the most value in this scenario.</p>
            </div>
            <span className={styles.panelTag}>Content</span>
          </div>

          <div className={styles.table}>
            {snapshot.topPages.map((page) => (
              <button
                key={page.id}
                type="button"
                className={selectedFocusId === page.id ? styles.tableRowActive : styles.tableRow}
                onClick={() => setSelectedFocusId(page.id)}
              >
                <span>{page.name}</span>
                <span>{page.sessions}</span>
                <span>{page.conversion}</span>
                <strong>{page.revenue}</strong>
              </button>
            ))}
          </div>
        </motion.section>

        <motion.section
          className={styles.panel}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25, ease: 'easeOut' }}
        >
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.panelTitle}>Regional performance</p>
              <p className={styles.panelSubtitle}>Markets that are outperforming or slowing the whole picture.</p>
            </div>
            <span className={styles.panelTag}>Regions</span>
          </div>

          <div className={styles.regionList}>
            {snapshot.regions.map((region) => (
              <button
                key={region.id}
                type="button"
                className={selectedFocusId === region.id ? styles.listRowActive : styles.listRow}
                onClick={() => setSelectedFocusId(region.id)}
              >
                <div className={styles.rowLeadingStack}>
                  <strong>{region.name}</strong>
                  <small>{region.status}</small>
                </div>
                <div className={styles.rowTrailing}>
                  <strong>{region.revenue}</strong>
                  <small>{region.conversion}</small>
                </div>
              </button>
            ))}
          </div>
        </motion.section>

        <motion.section
          className={styles.panel}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
        >
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.panelTitle}>Experiments</p>
              <p className={styles.panelSubtitle}>Safe placeholders for future product and growth tests.</p>
            </div>
            <span className={styles.panelTag}>Ops</span>
          </div>

          {snapshot.experiments.length === 0 ? (
            <EmptyState
              title="No active experiments"
              body="This scenario deliberately leaves the experiment queue empty so the UI already supports empty states."
            />
          ) : (
            <div className={styles.experimentList}>
              {snapshot.experiments.map((experiment) => (
                <div key={experiment.id} className={styles.experimentCard}>
                  <div>
                    <strong>{experiment.name}</strong>
                    <p>{experiment.audience}</p>
                  </div>
                  <div className={styles.rowTrailing}>
                    <strong>{experiment.lift}</strong>
                    <small>{experiment.status}</small>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.section>

        <motion.section
          className={`${styles.panel} ${styles.fullSpan}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35, ease: 'easeOut' }}
        >
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.panelTitle}>Insights and alerts</p>
              <p className={styles.panelSubtitle}>Narrative guidance plus structured warning states.</p>
            </div>
            <span className={styles.panelTag}>Briefing</span>
          </div>

          <div className={styles.briefingGrid}>
            <div className={styles.insightGrid}>
              {snapshot.insights.map((insight) => (
                <article key={insight.id} className={styles.insightCard}>
                  <h3>{insight.title}</h3>
                  <p>{insight.body}</p>
                </article>
              ))}
            </div>

            <div className={styles.alertList}>
              {snapshot.alerts.length === 0 ? (
                <EmptyState title="No alerts" body="This scenario is running clean with no warnings to surface." />
              ) : (
                snapshot.alerts.map((alert) => (
                  <article key={alert.id} className={styles.alertCard}>
                    <div className={styles.alertHeader}>
                      <AlertBadge severity={alert.severity} />
                      <h3>{alert.title}</h3>
                    </div>
                    <p>{alert.body}</p>
                  </article>
                ))
              )}
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

'use client';

import { useState } from 'react';
import { Download, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Header } from '@/components/ui/Header';
import { Card } from '@/components/ui/Card';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { monthlyRevenue, weeklyEngagement, granularData } from '@/data/mock-data';
import { colors } from '@/lib/colors';

const categories = ['All', 'Sales', 'Growth', 'Performance', 'Engagement', 'Finance', 'Satisfaction'];

export function DataOverviewPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredData =
    activeCategory === 'All'
      ? granularData
      : granularData.filter((d) => d.category === activeCategory);

  return (
    <div>
      <Header title="Comprehensive Data View" subtitle="Data Overview" />

      {/* Category Filters */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded border font-medium text-sm cursor-pointer font-sans transition-all ${
              activeCategory === cat
                ? 'border-[var(--accent)] bg-[var(--ink)] text-[var(--paper)]'
                : 'border-[var(--border)] bg-white text-[var(--muted)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <Card>
          <SectionLabel>Trend Analysis</SectionLabel>
          <SectionTitle>Revenue vs Target</SectionTitle>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.border} vertical={false} />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: colors.muted, fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: colors.muted, fontSize: 12 }}
                tickFormatter={(v) => `$${v / 1000}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: colors.white,
                  border: `1px solid ${colors.border}`,
                  borderRadius: '8px',
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke={colors.accent}
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke={colors.border}
                strokeWidth={2}
                strokeDasharray="4 4"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <SectionLabel>Weekly Performance</SectionLabel>
          <SectionTitle>Engagement Metrics</SectionTitle>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={weeklyEngagement}>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.border} vertical={false} />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: colors.muted, fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: colors.muted, fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: colors.white,
                  border: `1px solid ${colors.border}`,
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="sessions" fill={colors.accent} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Data Table */}
      <Card>
        <div className="flex justify-between items-center mb-6">
          <div>
            <SectionLabel>Detailed Metrics</SectionLabel>
            <SectionTitle>Granular Data View</SectionTitle>
          </div>
          <button className="flex items-center gap-2 px-5 py-3 bg-[var(--ink)] text-[var(--paper)] border-none rounded-sm cursor-pointer font-medium text-sm font-sans">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="text-left py-3 text-[var(--muted)] font-medium text-xs uppercase tracking-wider">
                Metric
              </th>
              <th className="text-left py-3 text-[var(--muted)] font-medium text-xs uppercase tracking-wider">
                Category
              </th>
              <th className="text-right py-3 text-[var(--muted)] font-medium text-xs uppercase tracking-wider">
                Value
              </th>
              <th className="text-right py-3 text-[var(--muted)] font-medium text-xs uppercase tracking-wider">
                Change
              </th>
              <th className="text-left py-3 text-[var(--muted)] font-medium text-xs uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr key={row.id} className="border-b border-[var(--border)]">
                <td className="py-4 font-medium text-[var(--ink)]">{row.metric}</td>
                <td className="py-4">
                  <span className="px-3 py-1 rounded text-xs bg-[var(--paper)] text-[var(--muted)]">
                    {row.category}
                  </span>
                </td>
                <td className="py-4 text-right font-medium text-[var(--ink)]">
                  {typeof row.value === 'number' && row.value > 100
                    ? `$${row.value.toLocaleString()}`
                    : row.value}
                </td>
                <td className="py-4 text-right">
                  <span
                    className={`inline-flex items-center gap-1 font-medium ${
                      row.change >= 0 ? 'text-[var(--accent)]' : 'text-[var(--error)]'
                    }`}
                  >
                    {row.change >= 0 ? (
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    ) : (
                      <ArrowDownRight className="w-3.5 h-3.5" />
                    )}
                    {Math.abs(row.change)}%
                  </span>
                </td>
                <td className="py-4 text-[var(--muted)]">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

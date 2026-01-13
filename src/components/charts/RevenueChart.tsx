'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { colors } from '@/lib/colors';

interface RevenueChartProps {
  data: Array<{
    month: string;
    revenue: number;
    lastYear: number;
    target: number;
  }>;
}

export function RevenueChart({ data }: RevenueChartProps) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colors.accent} stopOpacity={0.2} />
            <stop offset="95%" stopColor={colors.accent} stopOpacity={0} />
          </linearGradient>
        </defs>
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
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          }}
          labelStyle={{ color: colors.ink, fontWeight: '600' }}
          itemStyle={{ color: colors.muted }}
        />
        <Area
          type="monotone"
          dataKey="lastYear"
          stroke={colors.border}
          strokeWidth={2}
          fill="transparent"
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke={colors.accent}
          strokeWidth={2.5}
          fill="url(#revenueGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

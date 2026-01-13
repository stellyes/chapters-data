'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { colors } from '@/lib/colors';

interface EngagementData {
  day: string;
  sessions: number;
  conversions: number;
  bounceRate: number;
}

interface EngagementBarChartProps {
  data: EngagementData[];
}

export function EngagementBarChart({ data }: EngagementBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data}>
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
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          }}
        />
        <Bar dataKey="sessions" fill={colors.accent} radius={[4, 4, 0, 0]} />
        <Bar dataKey="conversions" fill={colors.accentLight} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

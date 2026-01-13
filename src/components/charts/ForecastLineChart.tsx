'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { colors } from '@/lib/colors';

interface ForecastData {
  month: string;
  actual: number | null;
  predicted: number | null;
}

interface ForecastLineChartProps {
  data: ForecastData[];
}

export function ForecastLineChart({ data }: ForecastLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
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
          tickFormatter={(v) => `$${v}k`}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: colors.white,
            border: `1px solid ${colors.border}`,
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          }}
        />
        <Line
          type="monotone"
          dataKey="actual"
          stroke={colors.accent}
          strokeWidth={2.5}
          dot={{ fill: colors.accent, strokeWidth: 0, r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="predicted"
          stroke={colors.accentLight}
          strokeWidth={2.5}
          strokeDasharray="8 4"
          dot={{ fill: colors.accentLight, strokeWidth: 0, r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

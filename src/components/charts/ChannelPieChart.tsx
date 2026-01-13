'use client';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { colors } from '@/lib/colors';

interface ChannelData {
  name: string;
  value: number;
  color: string;
  [key: string]: string | number;
}

interface ChannelPieChartProps {
  data: ChannelData[];
}

export function ChannelPieChart({ data }: ChannelPieChartProps) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: colors.white,
            border: `1px solid ${colors.border}`,
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          }}
          formatter={(value) => [`${value}%`, 'Share']}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

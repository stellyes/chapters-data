'use client';

import { DollarSign, Users, Target, Clock, Check, AlertCircle } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { MetricCard } from '@/components/ui/MetricCard';
import { Card } from '@/components/ui/Card';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { RevenueChart } from '@/components/charts/RevenueChart';
import { ChannelPieChart } from '@/components/charts/ChannelPieChart';
import { EngagementBarChart } from '@/components/charts/EngagementBarChart';
import { monthlyRevenue, channelData, weeklyEngagement, recentActivity } from '@/data/mock-data';

export function DashboardPage() {
  return (
    <div>
      <Header title="Your Business at a Glance" subtitle="Dashboard" />

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total Revenue"
          value="$724K"
          change={12.5}
          changeType="positive"
          icon={DollarSign}
          subtitle="vs last month"
        />
        <MetricCard
          title="Active Users"
          value="18.2K"
          change={8.3}
          changeType="positive"
          icon={Users}
          subtitle="Monthly active"
        />
        <MetricCard
          title="Conversion Rate"
          value="3.42%"
          change={2.1}
          changeType="negative"
          icon={Target}
          subtitle="Avg this month"
        />
        <MetricCard
          title="Avg Session"
          value="4m 28s"
          change={5.7}
          changeType="positive"
          icon={Clock}
          subtitle="Per user"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-[2fr_1fr] gap-6 mb-8">
        {/* Revenue Chart */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <div>
              <SectionLabel>Monthly Performance</SectionLabel>
              <SectionTitle>Revenue Overview</SectionTitle>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[var(--accent)]"></div>
                <span className="text-[var(--muted)]">This Year</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[var(--border)]"></div>
                <span className="text-[var(--muted)]">Last Year</span>
              </div>
            </div>
          </div>
          <RevenueChart data={monthlyRevenue} />
        </Card>

        {/* Channel Distribution */}
        <Card>
          <SectionLabel>Traffic Sources</SectionLabel>
          <SectionTitle>Channel Distribution</SectionTitle>
          <ChannelPieChart data={channelData} />
          <div className="mt-4">
            {channelData.map((channel, i) => (
              <div
                key={i}
                className={`flex items-center justify-between text-sm py-2 ${
                  i < channelData.length - 1 ? 'border-b border-[var(--border)]' : ''
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-sm"
                    style={{ background: channel.color }}
                  ></div>
                  <span className="text-[var(--ink)]">{channel.name}</span>
                </div>
                <span className="text-[var(--muted)] font-medium">{channel.value}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-2 gap-6">
        {/* Weekly Engagement */}
        <Card>
          <SectionLabel>Weekly Metrics</SectionLabel>
          <SectionTitle>Engagement Overview</SectionTitle>
          <EngagementBarChart data={weeklyEngagement} />
        </Card>

        {/* Recent Activity */}
        <Card>
          <SectionLabel>Activity Feed</SectionLabel>
          <SectionTitle>Recent Updates</SectionTitle>
          <div className="flex flex-col gap-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-4 bg-[var(--paper)] rounded-lg"
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center ${
                    activity.status === 'success'
                      ? 'bg-[var(--accent)]/15'
                      : 'bg-[var(--warning)]/15'
                  }`}
                >
                  {activity.status === 'success' ? (
                    <Check className="w-[18px] h-[18px] text-[var(--accent)]" />
                  ) : (
                    <AlertCircle className="w-[18px] h-[18px] text-[var(--warning)]" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[var(--ink)] m-0 font-medium">
                    {activity.message}
                  </p>
                  <p className="text-xs text-[var(--muted)] m-0 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

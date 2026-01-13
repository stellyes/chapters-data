'use client';

import { useState } from 'react';
import { TrendingUp, AlertCircle, Zap, Target, Send } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { Card } from '@/components/ui/Card';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ForecastLineChart } from '@/components/charts/ForecastLineChart';
import { aiInsights, quickPrompts, forecastData, customerSegments } from '@/data/mock-data';

const insightIcons = {
  'Revenue Acceleration': TrendingUp,
  'Churn Risk Alert': AlertCircle,
  'Channel Opportunity': Zap,
  'Conversion Uplift': Target,
};

type Message = {
  role: 'assistant' | 'user';
  content: string;
};

export function AIAnalyticsPage() {
  const [mode, setMode] = useState<'comprehensive' | 'custom'>('comprehensive');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hello! I'm your AI analytics assistant. Ask me anything about your data, and I'll provide insights, trends, and recommendations.",
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    setMessages([...messages, { role: 'user', content: inputValue }]);
    setInputValue('');
  };

  return (
    <div>
      <Header title="AI-Powered Insights" subtitle="Analytics" />

      {/* Mode Toggle */}
      <div className="flex gap-2 mb-8">
        {(['comprehensive', 'custom'] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-6 py-3 rounded-sm border-none font-medium cursor-pointer font-sans transition-all ${
              mode === m
                ? 'bg-[var(--ink)] text-[var(--paper)]'
                : 'bg-white text-[var(--muted)] shadow-[0_2px_10px_rgba(0,0,0,0.04)]'
            }`}
          >
            {m === 'comprehensive' ? 'Comprehensive View' : 'Custom Query'}
          </button>
        ))}
      </div>

      {mode === 'comprehensive' ? (
        <div>
          {/* AI Insights Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {aiInsights.map((insight, i) => {
              const IconComponent = insightIcons[insight.title as keyof typeof insightIcons] || TrendingUp;
              return (
                <Card key={i}>
                  <div className="flex gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                        insight.type === 'positive'
                          ? 'bg-[var(--accent)]/15'
                          : 'bg-[var(--warning)]/15'
                      }`}
                    >
                      <IconComponent
                        className={`w-6 h-6 ${
                          insight.type === 'positive'
                            ? 'text-[var(--accent)]'
                            : 'text-[var(--warning)]'
                        }`}
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-medium text-[var(--ink)] mb-1">
                        {insight.title}
                      </h4>
                      <p className="text-[var(--muted)] text-sm">{insight.desc}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Forecast Section */}
          <div className="grid grid-cols-[2fr_1fr] gap-6">
            <Card>
              <SectionLabel>Predictive Analytics</SectionLabel>
              <SectionTitle>Revenue Forecast</SectionTitle>
              <p className="text-[var(--muted)] text-sm mb-6">
                Based on historical patterns, seasonality, and current trends. Confidence: 87%
              </p>
              <ForecastLineChart data={forecastData} />
            </Card>

            <Card>
              <SectionLabel>Performance</SectionLabel>
              <SectionTitle>Segment Analysis</SectionTitle>
              <div className="flex flex-col gap-4">
                {customerSegments.map((seg, i) => (
                  <div key={i} className="p-4 bg-[var(--paper)] rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-[var(--ink)]">{seg.segment}</span>
                      <span className="text-[var(--accent)] font-medium">+{seg.growth}%</span>
                    </div>
                    <div className="h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[var(--accent)] rounded-full"
                        style={{ width: `${(seg.revenue / 580000) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-[var(--muted)] mt-2">
                      ${(seg.revenue / 1000).toFixed(0)}K revenue · {seg.customers} customers
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      ) : (
        /* Chat Interface */
        <Card className="h-[calc(100vh-280px)] flex flex-col">
          <div className="flex-1 overflow-y-auto mb-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex mb-4 ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[70%] p-4 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-[var(--ink)] text-[var(--paper)]'
                      : 'bg-[var(--paper)] text-[var(--ink)]'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => setInputValue(prompt)}
                className="px-4 py-2 rounded border border-[var(--border)] bg-white text-[var(--muted)] text-xs cursor-pointer font-sans hover:border-[var(--accent)]"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about your data..."
              className="flex-1 px-4 py-4 rounded border border-[var(--border)] text-sm font-sans"
            />
            <button
              onClick={handleSendMessage}
              className="px-6 py-4 bg-[var(--ink)] text-[var(--paper)] border-none rounded-sm cursor-pointer flex items-center gap-2"
            >
              <Send className="w-[18px] h-[18px]" />
            </button>
          </div>
        </Card>
      )}
    </div>
  );
}

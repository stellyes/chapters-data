// ============================================
// MOCK DATA
// ============================================

export const monthlyRevenue = [
  { month: 'Jan', revenue: 42000, lastYear: 38000, target: 45000 },
  { month: 'Feb', revenue: 48000, lastYear: 41000, target: 47000 },
  { month: 'Mar', revenue: 51000, lastYear: 44000, target: 50000 },
  { month: 'Apr', revenue: 47000, lastYear: 46000, target: 52000 },
  { month: 'May', revenue: 56000, lastYear: 48000, target: 54000 },
  { month: 'Jun', revenue: 62000, lastYear: 52000, target: 58000 },
  { month: 'Jul', revenue: 58000, lastYear: 55000, target: 60000 },
  { month: 'Aug', revenue: 65000, lastYear: 58000, target: 62000 },
  { month: 'Sep', revenue: 71000, lastYear: 61000, target: 65000 },
  { month: 'Oct', revenue: 68000, lastYear: 64000, target: 68000 },
  { month: 'Nov', revenue: 74000, lastYear: 67000, target: 72000 },
  { month: 'Dec', revenue: 82000, lastYear: 72000, target: 78000 },
];

export const channelData = [
  { name: 'Organic Search', value: 35, color: '#1e391f' },
  { name: 'Paid Ads', value: 28, color: '#3d6b3e' },
  { name: 'Social Media', value: 20, color: '#5a8f5c' },
  { name: 'Direct', value: 12, color: '#7eb37f' },
  { name: 'Referral', value: 5, color: '#a3cca4' },
];

export const weeklyEngagement = [
  { day: 'Mon', sessions: 2400, conversions: 148, bounceRate: 42 },
  { day: 'Tue', sessions: 2100, conversions: 132, bounceRate: 45 },
  { day: 'Wed', sessions: 2800, conversions: 175, bounceRate: 38 },
  { day: 'Thu', sessions: 2600, conversions: 162, bounceRate: 40 },
  { day: 'Fri', sessions: 3100, conversions: 198, bounceRate: 35 },
  { day: 'Sat', sessions: 1800, conversions: 95, bounceRate: 52 },
  { day: 'Sun', sessions: 1600, conversions: 82, bounceRate: 55 },
];

export const customerSegments = [
  { segment: 'Enterprise', customers: 124, revenue: 580000, growth: 15.2 },
  { segment: 'Mid-Market', customers: 342, revenue: 420000, growth: 22.8 },
  { segment: 'SMB', customers: 1247, revenue: 310000, growth: 18.4 },
  { segment: 'Startup', customers: 892, revenue: 145000, growth: 35.1 },
];

export const recentActivity = [
  { id: 1, type: 'upload', message: 'Q4 Sales Report uploaded', time: '2 minutes ago', status: 'success' as const },
  { id: 2, type: 'analysis', message: 'AI analysis completed for Customer Churn', time: '15 minutes ago', status: 'success' as const },
  { id: 3, type: 'alert', message: 'Revenue target exceeded by 12%', time: '1 hour ago', status: 'info' as const },
  { id: 4, type: 'export', message: 'Monthly report exported', time: '3 hours ago', status: 'success' as const },
];

export const granularData = [
  { id: 1, date: '2025-01-10', metric: 'Revenue', value: 24850, change: 8.2, category: 'Sales' },
  { id: 2, date: '2025-01-10', metric: 'New Users', value: 1247, change: 15.4, category: 'Growth' },
  { id: 3, date: '2025-01-10', metric: 'Conversion Rate', value: 3.42, change: -2.1, category: 'Performance' },
  { id: 4, date: '2025-01-10', metric: 'Avg Session', value: 4.28, change: 5.7, category: 'Engagement' },
  { id: 5, date: '2025-01-10', metric: 'Bounce Rate', value: 38.5, change: -4.2, category: 'Performance' },
  { id: 6, date: '2025-01-10', metric: 'CAC', value: 42.50, change: -8.9, category: 'Finance' },
  { id: 7, date: '2025-01-10', metric: 'LTV', value: 485, change: 12.3, category: 'Finance' },
  { id: 8, date: '2025-01-10', metric: 'NPS Score', value: 72, change: 6.1, category: 'Satisfaction' },
];

export const uploadHistory = [
  { name: 'sales_q4_2024.csv', size: '2.4 MB', date: '2025-01-10', status: 'completed' as const },
  { name: 'customer_segments.xlsx', size: '1.8 MB', date: '2025-01-09', status: 'completed' as const },
  { name: 'marketing_spend.csv', size: '856 KB', date: '2025-01-08', status: 'processing' as const },
];

export const supportedFormats = [
  { name: 'CSV', desc: 'Comma-separated values' },
  { name: 'Excel', desc: '.xlsx, .xls files' },
  { name: 'JSON', desc: 'Structured data' },
  { name: 'Parquet', desc: 'Columnar format' },
];

export const aiInsights = [
  { title: 'Revenue Acceleration', desc: 'Q4 showed 18% faster growth than historical averages', type: 'positive' as const },
  { title: 'Churn Risk Alert', desc: '47 enterprise accounts showing reduced engagement', type: 'warning' as const },
  { title: 'Channel Opportunity', desc: 'Social media ROI up 34% - consider reallocating budget', type: 'positive' as const },
  { title: 'Conversion Uplift', desc: 'A/B test shows 12% improvement with new checkout flow', type: 'positive' as const },
];

export const quickPrompts = [
  'What drove revenue growth this quarter?',
  'Which customer segments are most profitable?',
  'Predict next month\'s sales',
  'Show me conversion trends',
];

export const forecastData = [
  { month: 'Jan', actual: 82, predicted: null },
  { month: 'Feb', actual: null, predicted: 86 },
  { month: 'Mar', actual: null, predicted: 91 },
  { month: 'Apr', actual: null, predicted: 89 },
  { month: 'May', actual: null, predicted: 95 },
];

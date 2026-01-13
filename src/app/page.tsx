'use client';

import { useState } from 'react';
import { Sidebar, PageType } from '@/components/layout/Sidebar';
import { DashboardPage } from '@/components/pages/DashboardPage';
import { UploadPage } from '@/components/pages/UploadPage';
import { AIAnalyticsPage } from '@/components/pages/AIAnalyticsPage';
import { DataOverviewPage } from '@/components/pages/DataOverviewPage';

export default function AnalyticsDashboard() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'upload':
        return <UploadPage />;
      case 'ai':
        return <AIAnalyticsPage />;
      case 'data':
        return <DataOverviewPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex min-h-screen font-sans bg-[var(--paper)] text-[var(--ink)]">
      {/* Noise Overlay */}
      <div className="noise-overlay"></div>

      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-1 p-8 overflow-y-auto">
        {renderPage()}
      </main>
    </div>
  );
}

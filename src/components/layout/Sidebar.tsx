'use client';

import { Activity, LayoutDashboard, Upload, Sparkles, BarChart3, Settings } from 'lucide-react';
import { NavItem } from './NavItem';

export type PageType = 'dashboard' | 'upload' | 'ai' | 'data';

interface SidebarProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

export function Sidebar({ currentPage, setCurrentPage }: SidebarProps) {
  return (
    <div className="w-64 bg-[var(--paper)] border-r border-[var(--border)] p-6 flex flex-col min-h-screen">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded bg-[var(--accent)] flex items-center justify-center">
          <Activity className="w-6 h-6 text-[var(--paper)]" />
        </div>
        <div>
          <h1 className="font-serif text-xl font-semibold text-[var(--ink)] tracking-tight m-0">
            Chapters
          </h1>
          <p className="text-[0.7rem] text-[var(--muted)] m-0">Analytics Suite</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 flex-1">
        <NavItem
          icon={LayoutDashboard}
          label="Dashboard"
          active={currentPage === 'dashboard'}
          onClick={() => setCurrentPage('dashboard')}
        />
        <NavItem
          icon={Upload}
          label="Upload Data"
          active={currentPage === 'upload'}
          onClick={() => setCurrentPage('upload')}
        />
        <NavItem
          icon={Sparkles}
          label="AI Analytics"
          active={currentPage === 'ai'}
          onClick={() => setCurrentPage('ai')}
        />
        <NavItem
          icon={BarChart3}
          label="Data Overview"
          active={currentPage === 'data'}
          onClick={() => setCurrentPage('data')}
        />
      </nav>

      {/* User section */}
      <div className="pt-6 border-t border-[var(--border)] flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[var(--accent-light)] flex items-center justify-center text-white font-semibold text-sm">
          JD
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-[var(--ink)] m-0">Jane Doe</p>
          <p className="text-xs text-[var(--muted)] m-0">Admin</p>
        </div>
        <Settings className="w-5 h-5 text-[var(--muted)] cursor-pointer" />
      </div>
    </div>
  );
}

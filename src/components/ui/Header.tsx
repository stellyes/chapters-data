'use client';

import { Search, Bell } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="flex items-center justify-between mb-8 pb-6 border-b border-[var(--border)]">
      <div>
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] block mb-2">
          {subtitle}
        </span>
        <h2 className="font-serif text-4xl font-medium text-[var(--ink)] tracking-tight m-0">
          {title}
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="w-5 h-5 text-[var(--muted)] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search analytics..."
            className="bg-white border border-[var(--border)] rounded pl-10 pr-4 py-2.5 text-sm text-[var(--ink)] w-60 font-sans"
          />
        </div>
        <button className="relative p-2.5 bg-white border border-[var(--border)] rounded cursor-pointer">
          <Bell className="w-5 h-5 text-[var(--muted)]" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--accent)] rounded-full"></span>
        </button>
      </div>
    </header>
  );
}

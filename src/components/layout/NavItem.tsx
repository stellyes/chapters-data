'use client';

import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  active: boolean;
  onClick: () => void;
}

export function NavItem({ icon: Icon, label, active, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded border-none cursor-pointer transition-all duration-200 font-sans text-sm font-medium text-left ${
        active
          ? 'bg-[var(--accent)]/15 text-[var(--accent)]'
          : 'bg-transparent text-[var(--muted)] hover:bg-[var(--accent)]/5'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );
}

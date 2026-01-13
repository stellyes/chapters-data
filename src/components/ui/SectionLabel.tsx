'use client';

import { ReactNode } from 'react';

interface SectionLabelProps {
  children: ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--accent)] block mb-2">
      {children}
    </span>
  );
}

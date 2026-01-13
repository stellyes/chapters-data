// Chapters Design System Colors
export const colors = {
  ink: '#050805',
  paper: '#f8f6f3',
  accent: '#1e391f',
  accentLight: '#3d6b3e',
  muted: '#6b6b6b',
  border: '#e0ddd8',
  white: '#ffffff',
  success: '#1e391f',
  warning: '#8b6914',
  error: '#8b1414',
} as const;

export type ColorKey = keyof typeof colors;

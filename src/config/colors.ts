export const brandColors = {
  navy: '#0F172A',
  navyLight: '#1E293B',
  red: '#DC2626',
  background: '#F8FAFC',
  white: '#FFFFFF',
  muted: '#64748B',
  success: '#15803D',
  warning: '#D97706',
} as const

export type BrandColor = keyof typeof brandColors
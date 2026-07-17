import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0F172A',
        'brand-navy-light': '#1E293B',
        'brand-red': '#DC2626',
        'brand-bg': '#F8FAFC',
        'brand-white': '#FFFFFF',
        'brand-muted': '#64748B',
        'brand-success': '#15803D',
        'brand-warning': '#D97706',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
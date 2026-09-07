/** @type {import('tailwindcss').Config} */
const withOpacity = (variable: string) => `hsl(var(${variable}) / <alpha-value>)`

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './context/**/*.{js,ts,jsx,tsx,mdx}',
    './translations/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces & text — theme-aware via CSS variables
        bg: withOpacity('--bg'),
        surface: withOpacity('--surface'),
        card: withOpacity('--card'),
        border: withOpacity('--border'),
        fg: withOpacity('--fg'),
        'fg-muted': withOpacity('--fg-muted'),
        ring: withOpacity('--ring'),
        // Brand
        primary: {
          DEFAULT: withOpacity('--primary'),
          fg: withOpacity('--primary-fg'),
        },
        secondary: withOpacity('--secondary'),
        accent: withOpacity('--accent'),
        highlight: {
          DEFAULT: withOpacity('--highlight'),
          fg: withOpacity('--highlight-fg'),
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid type scale
        'display': ['clamp(2.75rem, 1.6rem + 5.6vw, 5.5rem)', { lineHeight: '1.03', letterSpacing: '-0.03em' }],
        'h1': ['clamp(2.25rem, 1.5rem + 3.4vw, 3.75rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'h2': ['clamp(1.9rem, 1.4rem + 2.2vw, 3rem)', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'h3': ['clamp(1.25rem, 1.1rem + 0.7vw, 1.5rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'lead': ['clamp(1.05rem, 0.98rem + 0.4vw, 1.3rem)', { lineHeight: '1.6' }],
      },
      minHeight: {
        'contact-card': '400px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        soft: '0 1px 2px hsl(var(--shadow) / 0.04), 0 8px 24px -8px hsl(var(--shadow) / 0.12)',
        card: '0 1px 3px hsl(var(--shadow) / 0.06), 0 20px 40px -20px hsl(var(--shadow) / 0.18)',
        lift: '0 2px 8px hsl(var(--shadow) / 0.08), 0 32px 60px -24px hsl(var(--shadow) / 0.28)',
        glow: '0 10px 30px -10px hsl(var(--highlight) / 0.5)',
        'glow-primary': '0 10px 30px -10px hsl(var(--primary) / 0.45)',
      },
      keyframes: {
        'aurora-1': {
          '0%, 100%': { transform: 'translate3d(-10%, -6%, 0) scale(1)' },
          '50%': { transform: 'translate3d(12%, 10%, 0) scale(1.25)' },
        },
        'aurora-2': {
          '0%, 100%': { transform: 'translate3d(8%, 4%, 0) scale(1.1)' },
          '50%': { transform: 'translate3d(-14%, -12%, 0) scale(0.9)' },
        },
        'aurora-3': {
          '0%, 100%': { transform: 'translate3d(0, 8%, 0) scale(0.95)' },
          '50%': { transform: 'translate3d(10%, -8%, 0) scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-cue': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '35%': { opacity: '1' },
          '70%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { opacity: '0' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'aurora-1': 'aurora-1 22s ease-in-out infinite',
        'aurora-2': 'aurora-2 26s ease-in-out infinite',
        'aurora-3': 'aurora-3 30s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'scroll-cue': 'scroll-cue 1.8s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}

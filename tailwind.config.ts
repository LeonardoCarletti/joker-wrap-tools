import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: '#39FF14',
        'neon-dim': '#1a8c09',
        'dark-bg': '#0a0a0a',
        'dark-card': '#111111',
        'dark-border': '#1f1f1f',
      },
      fontFamily: {
        display: ['Impact', 'Arial Black', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 20px #39FF14, 0 0 40px #39FF1440',
        'neon-sm': '0 0 10px #39FF14, 0 0 20px #39FF1430',
      },
      animation: {
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 20px #39FF14, 0 0 40px #39FF1440' },
          '50%': { boxShadow: '0 0 40px #39FF14, 0 0 80px #39FF1460' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
